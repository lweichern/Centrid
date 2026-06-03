"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const trustItems = [
  { value: 1994, suffix: "", label: "Established" },
  { value: 10, suffix: "-Year", label: "Warranty" },
  { value: 150, suffix: "+", label: "Projects" },
  { value: 30, suffix: "+", label: "Years Trusted" },
];

export default function SignatureTrustBar() {
  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="text-center py-6 md:py-7 border-b border-r border-white/10 last:border-r-0 md:border-b-0 nth-2:border-r-0 md:nth-2:border-r"
            >
              <div className="flex items-baseline justify-center gap-1">
                <AnimatedCounter
                  target={item.value}
                  className="font-serif text-2xl sm:text-3xl text-white"
                />
                {item.suffix && (
                  <span className="font-serif text-lg sm:text-xl text-white/80">
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="text-white/70 text-xs uppercase tracking-wider mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
