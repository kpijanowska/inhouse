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
        <section className="bg-gray-100 py-20">
  <div className="mx-auto max-w-7xl px-8">

    <div className="mx-auto mb-14 max-w-2xl text-center">
      <h2 className="text-4xl font-bold">
        Nasze realizacje
      </h2>

      <p className="mt-5 text-lg text-zinc-600">
        Zobacz wybrane realizacje, które najlepiej pokazują jakość naszej pracy
        oraz dbałość o każdy detal.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-2 text-zinc-500">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-14 text-center">
  <Link
    href="/realizations"
    className="inline-flex items-center rounded-full border border-black px-8 py-4 text-base font-medium text-black transition-all hover:bg-black hover:text-white"
  >
    Zobacz wszystkie
  </Link>
</div>

  </div>
</section>
    )};


    