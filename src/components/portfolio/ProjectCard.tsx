"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.id}`}>
      <div className="aspect-3/4 rounded-2xl overflow-hidden relative cursor-pointer group hover:-translate-y-1 transition-transform duration-300">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/80" />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-xl text-white">{project.title}</h3>
          <p className="text-sm text-white/70">
            {project.category} &middot; {project.location}
          </p>
          <p className="text-primary-300 text-sm font-medium mt-2 transition-all duration-300 translate-y-2.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            View Project &rarr;
          </p>
        </div>
      </div>
    </Link>
  );
}
