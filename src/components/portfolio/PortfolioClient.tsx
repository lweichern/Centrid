"use client";

import { projects } from "@/lib/data";
import ProjectCard from "@/components/portfolio/ProjectCard";

export default function PortfolioClient() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
