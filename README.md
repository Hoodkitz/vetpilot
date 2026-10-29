# VetPilot

Landing Page mit Stripe-Checkout fuer eine Praxissoftware fuer Tierarztpraxen (Next.js, App Router, Tailwind).

## Status

- Landing Page (`app/page.tsx`), Preise (`app/pricing`), Erfolgsseite (`app/success`)
- Stripe-Checkout (`app/api/checkout`) mit Preis-Allowlist
- Rechtstexte `/impressum`, `/datenschutz`, `/agb` mit PLATZHALTER-Feldern (vor Livegang ausfuellen und juristisch pruefen)
- Das eigentliche Produkt (Praxissoftware) existiert noch nicht, nur die Vermarktungsseite

## Entwicklung

```bash
npm install
cp .env.example .env.local   # Werte eintragen, nie committen
npm run dev                  # http://localhost:3000
npm run lint && npm run build
```

## Umgebungsvariablen

| Variable | Zweck |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe Secret Key (nur serverseitig) |
| `STRIPE_PRICE_STARTER`, `STRIPE_PRICE_PROFESSIONAL` | Price-IDs der Pläne |
| `STRIPE_ALLOWED_PRICE_IDS` | Komma-getrennte Allowlist, muss die Price-IDs oben enthalten |

## Vor dem Livegang

1. Platzhalter in den Rechtstexten ersetzen
2. Stripe im Live-Modus einrichten
3. Domain/Hosting festlegen
