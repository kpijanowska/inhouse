import Link from "next/link"; 

interface NavbarProps {
  variant?: "light" | "dark";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
    const isLight = variant === "light";
    return (
        <nav
  className={`${
    isLight
      ? "sticky top-0 bg-white text-zinc-900 border-b border-zinc-200"
      : "absolute top-0 bg-transparent text-white"
  } z-30 flex w-full items-center justify-between px-8 py-6`}
>
        <h1 className="text-xl font-bold">Inhouse Małopolska</h1> {/* tu moze zdjecie */}

        <div className="flex gap-4 p-4">
            <Link href="/" className="transition hover:text-amber-400">Strona główna</Link>
            <Link href="/realizations" className="transition hover:text-amber-400">Realizacje</Link>
            <Link href="/about-us" className="transition hover:text-amber-400">O nas</Link>
            <Link href="/contact" className="transition hover:text-amber-400">Kontakt</Link>
            <Link href="/admin" className="transition hover:text-amber-400">Admin</Link>
        </div>
    </nav>
    );
}   