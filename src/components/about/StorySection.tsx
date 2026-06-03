"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function StorySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-10">
          {/* Image — full height visible */}
          <RevealOnScroll direction="left" className="md:w-1/2 w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about-team.webp"
                alt="Centrid Design team at the Signature Kitchen Annual Convention 2026"
                width={1920}
                height={1162}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>

          {/* Story text */}
          <RevealOnScroll
            direction="right"
            delay={0.2}
            className="md:w-1/2 w-full"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
              <span className="text-primary uppercase tracking-widest text-sm font-semibold">
                Our Story
              </span>
              <h2 className="font-serif text-3xl text-navy mt-3 mb-6">
                Born from Friendship, Built on Passion
              </h2>
              <p className="text-navy-100 leading-relaxed mb-4">
                Founded in 2019 by James Leow and Simon Siew, Centrid Design
                was born from more than a decade of friendship, collaboration,
                and shared passion for design. Having worked side by side since
                2009 in the same industry, we combined our expertise and vision
                into a company that puts people at the heart of every project.
              </p>
              <p className="text-navy-100 leading-relaxed">
                Through our partnership with Signature Kitchen under Centrid Hub,
                we provide a full spectrum of services — from interior design and
                renovation to custom carpentry, extensions, and tailored solutions
                that bring our clients&rsquo; ideas to life.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
