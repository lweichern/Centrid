"use client";

import { useEffect } from "react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="aspect-video w-full relative rounded-t-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Close modal"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="p-5 sm:p-6 md:p-8">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-navy mt-4">
              {project.title}
            </h2>

            <p className="text-navy-100 text-sm mt-2">
              {project.location} &middot; {project.year} &middot;{" "}
              {project.sqft} sqft
            </p>

            <p className="text-navy-100 leading-relaxed mt-6">
              {project.description}
            </p>

            <div className="mt-8">
              <h3 className="font-semibold text-lg text-navy">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M13.333 4L6 11.333 2.667 8"
                        stroke="#2873C3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-navy-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.category === "Kitchen" && (
              <div className="mt-8 p-5 rounded-xl bg-primary-50 border border-primary-100">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2L3 7V12C3 17.25 6.88 22.13 12 23.25C17.12 22.13 21 17.25 21 12V7L12 2Z" />
                    <path d="M9 12L11 14L15 10" />
                  </svg>
                  <span className="text-sm font-semibold text-primary">
                    Signature Kitchen Partner Project
                  </span>
                </div>
                <p className="text-navy-100 text-sm leading-relaxed">
                  This project was built in partnership with Signature Kitchen — Malaysia&apos;s
                  largest kitchen manufacturer since 1994. Premium materials, smart storage,
                  and backed by a 10-year warranty.
                </p>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-navy-100">
                Interested in a similar project?
              </p>
              <MagneticButton href="/contact" size="sm">
                Get in Touch
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
