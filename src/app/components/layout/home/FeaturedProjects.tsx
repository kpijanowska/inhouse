import Link from "next/link";
import Image from "next/image";
export default function FeaturedProjects() {
    const projects = [
        {
            title: "Dom jednorodzinny",
            description: "Kraków • 2025",
            imageUrl: "/images/feat1.jpg",
        },
        {
            title: "Dom wielorodzinny", 
            description: "Warszawa • 2024",
            imageUrl: "/images/feat2.jpg",
        },
        {
            title: "Dom deweloperski",
            description: "Gdów • 2022",
            imageUrl: "/images/feat3.jpg",
        },
    ];

    return (
        <section className="bg-gray-100 py-12">
  <div className="mx-auto max-w-7xl px-8">

    <div className="mb-12 flex items-center justify-between">
      <div>
        <h2 className="text-4xl font-bold" >
          Nasze realizacje
        </h2>

        <p className="mt-4 max-w-2xl text-gray-600">
          Zobacz wybrane realizacje, które najlepiej pokazują jakość
          naszej pracy oraz dbałość o każdy detal.
        </p>
      </div>

      
    <Link href="/realizations"className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-all hover:border-black hover:bg-black hover:text-white">
      Zobacz wszystkie
    </Link>

    </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <div
                    key={project.title}
                    className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >   
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-64
        w-full
        object-cover
        transition-transform
        duration-500
        hover:scale-105"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <p className="mt-3 text-gray-600">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </section>
    )};