"use client";

import { values } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

function ValueIcon({ type }: { type: string }) {
  const props = {
    width: 40,
    height: 40,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-primary",
  };

  switch (type) {
    case "craftsmanship":
      return (
        <svg {...props}>
          <path d="M12 2L22 12L12 22L2 12L12 2Z" />
          <path d="M12 8L16 12L12 16L8 12L12 8Z" />
        </svg>
      );
    case "innovation":
      return (
        <svg {...props}>
          <path d="M9 21h6" />
          <path d="M9 18h6" />
          <path d="M10 18V15.3a6.5 6.5 0 1 1 4 0V18" />
          <circle cx="12" cy="9" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "client":
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "sustainability":
      return (
        <svg {...props}>
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A12.4 12.4 0 0 0 21 9c0-4-6-4-6-4" />
          <path d="M12 13c-2 2.5-3.5 4.24-5 6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ValuesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading label="What Drives Us" title="Our Values" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? "md:min-h-70" : "md:min-h-80"
              }`}
            >
              <div className="mb-5">
                <ValueIcon type={value.icon} />
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">
                {value.title}
              </h3>
              <p className="text-navy-100 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
