import Link from "next/link";

export default function CTA() {
    return (
        <section className="bg-gray-100 py-12"> 
            <div className="mx-auto max-w-7xl px-8 text-center">
                <h2 className="text-4xl font-bold tracking-tight">
                    Chcesz rozpocząć współpracę?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                 Skontaktuj się z nami, aby omówić szczegóły inwestycji.
                 Przygotujemy bezpłatną wycenę i pomożemy dobrać najlepsze rozwiązania.
                </p>
                <div className="mt-8">
                    <Link
    href="/contact"
    className="
        inline-flex
        items-center
        rounded-full
        border
        border-black
        px-8
        py-4
        text-base
        font-medium
        transition
        hover:bg-black
        hover:text-white
    "
>
    Skontaktuj się z nami →
</Link>
                </div>
            </div>
        </section>
    );
}