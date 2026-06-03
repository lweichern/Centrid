"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { CONTACT } from "@/lib/constants";

interface Props {
  project: Project;
  nextProject: Project;
  prevProject: Project;
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <div className="absolute top-6 left-6 z-10 text-sm text-white/60">
        {index + 1} / {images.length}
      </div>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Previous image"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 4L6 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Next image"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8 4L14 10L8 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className="relative max-w-6xl max-h-[85vh] w-full mx-2 sm:mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`Image ${index + 1}`}
          width={1920}
          height={1080}
          className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}

export default function ProjectDetailClient({ project, nextProject, prevProject }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = [project.image, ...project.gallery];

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + allImages.length) % allImages.length : null
    );
  }, [allImages.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allImages.length : null
    );
  }, [allImages.length]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-navy/30" />

        <Link
          href="/portfolio"
          className="absolute top-24 left-4 sm:left-6 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm hover:bg-white/20 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Portfolio
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium uppercase tracking-wider mb-4">
              {project.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Metadata bar */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-10">
            <div>
              <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Location</p>
              <p className="text-sm font-medium text-navy">{project.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Category</p>
              <p className="text-sm font-medium text-navy">{project.category}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Year</p>
              <p className="text-sm font-medium text-navy">{project.year}</p>
            </div>
            {project.sqft && (
              <div>
                <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Size</p>
                <p className="text-sm font-medium text-navy">{project.sqft} sqft</p>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Photos</p>
              <p className="text-sm font-medium text-navy">{allImages.length}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-navy/80 leading-relaxed text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 rounded-full bg-primary-50 text-primary text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-navy mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allImages.map((img, idx) => (
              <div
                key={img}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={img}
                  alt={`${project.title} — ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Love this project?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Let&apos;s discuss how we can create something similar for your space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:brightness-110 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          <Link
            href={`/portfolio/${prevProject.id}`}
            className="group flex items-center gap-4 p-6 md:p-10 border-r border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-navy/30 group-hover:text-primary transition-colors shrink-0">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Previous</p>
              <p className="text-sm font-medium text-navy truncate group-hover:text-primary transition-colors">
                {prevProject.title}
              </p>
            </div>
          </Link>
          <Link
            href={`/portfolio/${nextProject.id}`}
            className="group flex items-center justify-end gap-4 p-6 md:p-10 hover:bg-gray-50 transition-colors text-right"
          >
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Next</p>
              <p className="text-sm font-medium text-navy truncate group-hover:text-primary transition-colors">
                {nextProject.title}
              </p>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-navy/30 group-hover:text-primary transition-colors shrink-0">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
