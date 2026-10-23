import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const PLAN_KEYS = ["starter", "professional"] as const;
type PlanKey = (typeof PLAN_KEYS)[number];

function getPriceId(plan: PlanKey): string | undefined {
  return plan === "starter"
    ? process.env.STRIPE_PRICE_STARTER
    : process.env.STRIPE_PRICE_PROFESSIONAL;
}

function getAllowedPriceIds(): Set<string> {
  return new Set(
    (process.env.STRIPE_ALLOWED_PRICE_IDS || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  );
}

export async function GET(request: NextRequest) {
  const plan = request.nextUrl.searchParams.get("plan") || "starter";

  if (!(PLAN_KEYS as readonly string[]).includes(plan)) {
    return NextResponse.json({ error: "Ungültiger Plan" }, { status: 400 });
  }

  const priceId = getPriceId(plan as PlanKey);
  const allowed = getAllowedPriceIds();

  if (!process.env.STRIPE_SECRET_KEY || !priceId || allowed.size === 0) {
    console.error(
      "Stripe nicht konfiguriert: STRIPE_SECRET_KEY, STRIPE_PRICE_* und STRIPE_ALLOWED_PRICE_IDS setzen"
    );
    return NextResponse.json(
      { error: "Checkout ist nicht konfiguriert" },
      { status: 503 }
    );
  }

  if (!allowed.has(priceId)) {
    return NextResponse.json({ error: "Ungültige priceId" }, { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-09-30.endive",
  });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/pricing`,
      metadata: { plan },
    });

    return NextResponse.redirect(session.url!);
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Erstellen der Checkout-Session" },
      { status: 500 }
    );
  }
}
