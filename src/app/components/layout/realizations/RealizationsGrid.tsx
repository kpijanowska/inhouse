import ProjectCard from "./ProjectCard";

export default function RealizationsGrid() {
    const realizations = [
       {
            title: "Dom jednorodzinny",
            location: "Kraków",
            image: "/images/feat1.jpg",
        },
        {
            title: "Budowa domu",
            location: "Bochnia",
            image: "/images/feat2.jpg",
        },
        {
            title: "Wykończenie wnętrza",
            location: "Wieliczka",
            image: "/images/feat3.jpg",
        },
        {
            title: "Remont mieszkania",
            location: "Kraków",
            image: "/images/feat4.jpg",
        },
        {
            title: "Budowa domu",
            location: "Bochnia",
            image: "/images/feat5.jpg",
        },
        {
            title: "Wykończenie wnętrza",
            location: "Wieliczka",
            image: "/images/feat6.jpg",
        },
        {
            title: "Remont mieszkania",
            location: "Kraków",
            image: "/images/feat7.jpg",
        },
        {
            title: "Budowa domu",
            location: "Bochnia",
            image: "/images/feat8.jpg",
        },
        {   
            title: "Wykończenie wnętrza",
            location: "Wieliczka",
            image: "/images/feat9.jpg",
        },
];

return (
    <section className="pb-24 bg-gray-100">
  <div className="mx-auto max-w-7xl px-8">

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {realizations.map((project) => (

        <ProjectCard
          key={project.title}
          project={project}
        />

      ))}

    </div>

  </div>
</section>
)};