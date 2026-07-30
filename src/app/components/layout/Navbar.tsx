import Link from "next/link"; 

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4">
        <h1 className="text-xl font-bold">Inhouse Malopolska</h1> {/* tu moze zdjecie */}

        <div className="flex gap-4 p-4">
            <Link href="/">Strona główna</Link>
            <Link href="/realizations">Realizacje</Link>
            <Link href="/about-us">O nas</Link>
            <Link href="/contact">Kontakt</Link>
            <Link href="/admin">Admin</Link>
        </div>
    </nav>
    );
}   