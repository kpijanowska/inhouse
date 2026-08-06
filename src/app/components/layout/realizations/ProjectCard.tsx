import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    location: string;
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-2xl font-semibold text-zinc-900">
          {project.title}
        </h3>

        <p className="mt-2 text-zinc-500">
          {project.location}
        </p>
      </div>
    </div>
  );
}