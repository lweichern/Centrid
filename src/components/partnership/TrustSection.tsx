"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function TrustSection() {
  return (
    <section className="bg-navy text-white py-24 relative overflow-hidden noise-overlay">
      <RevealOnScroll className="relative z-[2]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-2xl text-primary-400 font-sans">Since</p>

          <AnimatedCounter
            target={1994}
            className="font-serif text-6xl sm:text-8xl md:text-9xl text-white block mt-2"
            duration={3}
          />

          <p className="font-serif text-2xl md:text-3xl text-white/80 mt-4">
            Malaysia&apos;s Largest Kitchen Manufacturer
          </p>

          <p className="text-gray-400 mt-4 text-lg leading-relaxed">
            Trusted by thousands of homeowners across Malaysia for over 30 years.
          </p>

          <div className="mt-10">
            <MagneticButton variant="white" href="/portfolio">
              Explore Kitchen Designs
            </MagneticButton>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
