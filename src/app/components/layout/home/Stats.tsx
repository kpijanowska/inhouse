export default function Stats() {
    const stats = [
        {
            value: "30+",
            label: "Lat doświadczenia",
        },
        {
            value: "100+",
            label: "Zrealizowanych projektów",
        },
        {
            value: "100%",
            label: "Indywidualne podejście do klienta",
        },
        {
            value: "24h",
            label: "Czas odpowiedzi",
        },
    ];

    return (
        <section className="bg-gray-100 pt-10 pb-10">
            <div className="mx-auto max-w-7xl px-8">
                <h2 className="text-center text-4xl font-bold pb-18">Nasze doświadczenie</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">  
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="text-4xl font-bold ">{stat.value}</p>
                        <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}