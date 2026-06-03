"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { stats } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="noise-overlay relative overflow-hidden bg-navy py-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <RevealOnScroll
              key={stat.label}
              delay={index * 0.1}
              className="text-center"
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                className="font-serif text-4xl text-white sm:text-5xl md:text-6xl"
              />
              <p className="mt-3 text-sm uppercase tracking-wider text-primary-300">
                {stat.label}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
