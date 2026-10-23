import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/80 backdrop-blur-md dark:border-stone-800/60 dark:bg-stone-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-sm">
              V
            </div>
            <span className="text-lg font-semibold tracking-tight">VetPilot</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="flex-1 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
              Wählen Sie Ihren Plan
            </h1>
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
              Monatliche Abrechnung. Alle Details in den AGB.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
            {/* Starter */}
            <div className="relative rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-900">
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">Starter</h3>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">Für kleine Praxen</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">49€</span>
                <span className="text-sm font-medium text-stone-500 dark:text-stone-400">/Monat</span>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Bis 3 Benutzer",
                  "Patientenverwaltung",
                  "Terminplanung",
                  "Rechnungen & SEPA",
                  "E-Mail-Support",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-400">
                    <svg className="h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/api/checkout?plan=starter"
                className="mt-8 block w-full rounded-full border border-stone-200 py-3 text-center text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
              >
                Starter wählen
              </Link>
            </div>

            {/* Professional */}
            <div className="relative rounded-2xl border-2 border-teal-600 bg-white p-8 dark:bg-stone-900">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">
                  Beliebt
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">Professional</h3>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">Für wachsende Praxen</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">99€</span>
                <span className="text-sm font-medium text-stone-500 dark:text-stone-400">/Monat</span>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Unbegrenzte Benutzer",
                  "Alle Starter-Features",
                  "Online-Buchung",
                  "Automatische Erinnerungen",
                  "Prioritäts-Support",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-400">
                    <svg className="h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/api/checkout?plan=professional"
                className="mt-8 block w-full rounded-full bg-teal-600 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-teal-700"
              >
                Professional wählen
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
