import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto flex max-w-7xl justify-between gap-12 px-8 py-10">

        <div>
          <h2 className="mb-3 text-2xl font-bold">Inhouse Małopolska</h2>
          <p className="max-w-xs text-gray-400">
            Kompleksowe usługi budowlane i wykończeniowe na terenie Małopolski.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Kontakt</h3>

          <div className="space-y-2 text-gray-400">
            <p>📍 ul. Przykładowa 1, 30-001 Kraków</p>
            <p>📞 +48 123 456 789</p>
            <p>✉️ kontakt@inhouse.pl</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Nawigacja</h3>

          <div className="flex flex-col gap-2 text-gray-400">
            <Link href="/">Strona główna</Link>
            <Link href="/o-nas">O nas</Link>
            <Link href="/oferta">Oferta</Link>
            <Link href="/realizacje">Realizacje</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Inhouse Małopolska. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}