import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/50">
          <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Zahlung erfolgreich!
        </h1>
        <p className="mt-4 text-stone-600 dark:text-stone-400">
          Vielen Dank für Ihre Anmeldung. Sie erhalten in Kürze eine Bestätigung per E-Mail.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-8 text-base font-medium text-white transition-colors hover:bg-teal-700"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
