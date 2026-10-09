import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-white/80 backdrop-blur-md dark:border-stone-800/60 dark:bg-stone-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-sm">
              V
            </div>
            <span className="text-lg font-semibold tracking-tight">VetPilot</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600 dark:text-stone-400">
            <a href="#features" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              Preise
            </a>
            <a href="#faq" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-full border border-stone-200 px-5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
            >
              Anmelden
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-5 text-sm font-medium text-white transition-colors hover:bg-teal-700"
            >
              Kostenlos starten
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-300">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              Jetzt in der Beta
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-50">
              Die Praxissoftware, die sich um Ihre Tiere kümmert
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600 sm:text-xl dark:text-stone-400">
              VetPilot vereint Patientenverwaltung, Terminplanung und Rechnungsstellung
              in einer intuitiven Plattform – speziell für Tierarztpraxen entwickelt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-teal-600 px-8 text-base font-medium text-white transition-colors hover:bg-teal-700"
              >
                14 Tage kostenlos testen
              </Link>
              <a
                href="#features"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-stone-200 px-8 text-base font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
              >
                Features entdecken
              </a>
            </div>
            <p className="mt-6 text-sm text-stone-500 dark:text-stone-500">
              Keine Kreditkarte erforderlich · Jederzeit kündbar
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
              Alles, was Ihre Praxis braucht
            </h2>
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
              Vier Kernfunktionen, die Ihren Arbeitsalltag vereinfachen.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Tierarztpraxis */}
            <div className="group relative rounded-2xl border border-stone-200 bg-white p-8 transition-all hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">Tierarztpraxis</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
                Verwalten Sie Praxisteam, Behandlungsräume und Abläufe zentral. Alle Infos auf einen Blick.
              </p>
            </div>

            {/* Patienten */}
            <div className="group relative rounded-2xl border border-stone-200 bg-white p-8 transition-all hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">Patienten</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
                Digitale Patientenakten mit Impfstatus, Anamnese und Behandlungsverlauf – sicher und DSGVO-konform.
              </p>
            </div>

            {/* Termine */}
            <div className="group relative rounded-2xl border border-stone-200 bg-white p-8 transition-all hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">Termine</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
                Intelligenter Kalender mit Online-Buchung, Erinnerungen und Pufferzeiten – weniger No-Shows.
              </p>
            </div>

            {/* Rechnungen */}
            <div className="group relative rounded-2xl border border-stone-200 bg-white p-8 transition-all hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">Rechnungen</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
                Rechnungen in Sekunden erstellen, automatisch versenden und per SEPA einziehen – mit Stripe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 sm:py-32 bg-stone-50 dark:bg-stone-900/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
              Einfache Preise
            </h2>
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
              Wählen Sie den Plan, der zu Ihrer Praxis passt.
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
                  "API-Zugang",
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
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl text-center dark:text-stone-50">
            Häufige Fragen
          </h2>
          <div className="mt-12 space-y-8">
            {[
              {
                q: "Kann ich jederzeit kündigen?",
                a: "Ja, Sie können jederzeit kündigen. Es gibt keine Mindestlaufzeit und keine Kündigungsfristen.",
              },
              {
                q: "Ist meine Daten sicher?",
                a: "Alle Daten werden DSGVO-konform auf Servern in Deutschland verschlüsselt gespeichert.",
              },
              {
                q: "Gibt es eine kostenlose Testphase?",
                a: "Ja, 14 Tage kostenlos testen – keine Kreditkarte erforderlich.",
              },
              {
                q: "Wie funktioniert die Stripe-Integration?",
                a: "Rechnungen werden automatisch per Stripe versendet und eingezogen. Sie benötigen nur ein Stripe-Konto.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-stone-200 pb-8 dark:border-stone-800">
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">{faq.q}</h3>
                <p className="mt-2 text-stone-600 dark:text-stone-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-teal-600">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bereit, Ihre Praxis zu digitalisieren?
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Starten Sie heute mit 14 Tagen kostenlosem Test.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-teal-600 transition-colors hover:bg-teal-50"
          >
            Jetzt kostenlos starten
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-12 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-sm">
                V
              </div>
              <span className="text-lg font-semibold tracking-tight">VetPilot</span>
            </div>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              © 2026 VetPilot. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
