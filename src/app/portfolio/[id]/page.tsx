import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectDetailClient from "@/components/portfolio/ProjectDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.location}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Centrid Hub`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <ProjectDetailClient
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
}
