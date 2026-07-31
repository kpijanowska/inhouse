import Link from "next/link"; 

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 z-30 flex w-full items-center justify-between px-8 py-6 text-white">
        <h1 className="text-xl font-bold">Inhouse Malopolska</h1> {/* tu moze zdjecie */}

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