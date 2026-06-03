"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects } from "@/lib/data";

const featured = projects.slice(0, 4);
const [hero, ...rest] = featured;

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[0];
  large?: boolean;
}) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className={`group relative overflow-hidden rounded-2xl block ${
        large ? "aspect-16/10" : "aspect-4/3 sm:aspect-3/4"
      }`}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes={large ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>

      <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className={`absolute inset-0 ${
          large
            ? "bg-linear-to-t from-navy/80 via-navy/30 to-transparent"
            : "bg-linear-to-t from-navy/80 via-navy/20 to-transparent"
        }`}
      />

      <div className={`absolute inset-x-0 bottom-0 ${large ? "p-8 md:p-10" : "p-6"}`}>
        <h3
          className={`font-serif text-white ${
            large ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className={`text-white/70 mt-1 ${large ? "text-base" : "text-sm"}`}>
          {project.category} &middot; {project.location}
        </p>
        <p
          className={`text-primary-300 font-medium mt-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
            large ? "text-base" : "text-sm"
          }`}
        >
          View Project &rarr;
        </p>
      </div>
    </Link>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading label="Portfolio" title="Featured Projects" />

        <div className="space-y-6">
          <ProjectCard project={hero} large />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <MagneticButton variant="outline" href="/portfolio">
            View All Projects
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
