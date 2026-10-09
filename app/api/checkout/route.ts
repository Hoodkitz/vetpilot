import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const PLANS: Record<string, { name: string; priceId?: string; amount: number }> = {
  starter: {
    name: "Starter",
    priceId: process.env.STRIPE_PRICE_STARTER,
    amount: 4900,
  },
  professional: {
    name: "Professional",
    priceId: process.env.STRIPE_PRICE_PROFESSIONAL,
    amount: 9900,
  },
};

export async function GET(request: NextRequest) {
  const plan = request.nextUrl.searchParams.get("plan") || "starter";
  const planConfig = PLANS[plan];

  if (!planConfig) {
    return NextResponse.json({ error: "Ungültiger Plan" }, { status: 400 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe ist nicht konfiguriert. Bitte STRIPE_SECRET_KEY setzen." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-09-30.endive",
  });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: planConfig.priceId || undefined,
          quantity: 1,
          ...(planConfig.priceId
            ? {}
            : {
                data: {
                  currency: "eur",
                  unit_amount: planConfig.amount,
                  recurring: { interval: "month" },
                  product_data: { name: `VetPilot ${planConfig.name}` },
                },
              }),
        },
      ],
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
