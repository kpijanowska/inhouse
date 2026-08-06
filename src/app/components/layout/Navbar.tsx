import Link from "next/link"; 
import Image from "next/image";

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
        {/* <h1 className="text-xl font-bold">Inhouse Małopolska</h1> tu moze zdjecie */}
        <Link href="/">
  <Image
  src="/images/Logo_inHouse.png"
  alt="Inhouse Małopolska"
  width={250}
  height={80}
  className="h-18 w-auto"
/>
</Link>
        <div className="flex gap-4 p-4">
            <Link href="/" className="transition hover:text-lime-700">Strona główna</Link>
            <Link href="/realizations" className="transition hover:text-lime-700">Realizacje</Link>
            <Link href="/about-us" className="transition hover:text-lime-700">O nas</Link>
            <Link href="/contact" className="transition hover:text-lime-700">Kontakt</Link>
            <Link href="/admin" className="transition hover:text-lime-700">Admin</Link>
        </div>
    </nav>
    );
}   