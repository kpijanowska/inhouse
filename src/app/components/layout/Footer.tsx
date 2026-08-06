import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-14">

        <div className="flex flex-col justify-between gap-16 lg:flex-row">

          {/* Lewa strona */}
          <div>
            <Image
              src="/images/Logo_inHouse.png"
              alt="Inhouse Małopolska"
              width={250}
              height={80}
              className="-mt-6 h-24 w-auto"
            />

            <p className="mt-4 max-w-sm text-zinc-500 pl-4">
              Budujemy z dbałością o każdy detal.
            </p>
          </div>

          {/* Prawa strona */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-zinc-900">
              Kontakt
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4 text-zinc-600">
                <Phone className="h-5 w-5 text-lime-700" />
                <span>+48 123 456 789</span>
              </div>

              <div className="flex items-center gap-4 text-zinc-600">
                <Mail className="h-5 w-5 text-lime-700" />
                <span>kontakt@inhouse.pl</span>
              </div>

              <div className="flex items-center gap-4 text-zinc-600">
                <MapPin className="h-5 w-5 text-lime-700" />
                <span>Kraków, Małopolska</span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-8 text-sm text-zinc-500 lg:flex-row">

          <p>
            © {new Date().getFullYear()} Inhouse Małopolska
          </p>

          <nav className="flex gap-8">
            <Link href="/" className="transition hover:text-lime-700">
              Strona główna
            </Link>

            <Link href="/about-us" className="transition hover:text-lime-700">
              O nas
            </Link>

            <Link href="/realizations" className="transition hover:text-lime-700">
              Realizacje
            </Link>

            <Link href="/contact" className="transition hover:text-lime-700">
              Kontakt
            </Link>
          </nav>

        </div>

      </div>
    </footer>
  );
}