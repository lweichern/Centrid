"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const kitchenSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80",
    name: "Modern Minimalist",
    specs: "Handleless design with quartz countertops",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1000&q=80",
    name: "Classic Elegance",
    specs: "Solid wood shaker doors with marble island",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1000&q=80",
    name: "Warm Contemporary",
    specs: "Natural timber veneer with integrated appliances",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1000&q=80",
    name: "Smart Kitchen",
    specs: "IoT-ready layout with concealed storage systems",
  },
];

export default function KitchenShowcase() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);
      setIsPaused(true);
    },
    []
  );

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % kitchenSlides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + kitchenSlides.length) % kitchenSlides.length
    );
    setIsPaused(true);
  }, []);

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => setIsPaused(false), 8000);
      return () => clearTimeout(timeout);
    }
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-16">
          Kitchen Collections
        </h2>

        <div
          className="relative rounded-2xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
            {kitchenSlides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1152px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent p-6 md:p-10">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">
                    {slide.name}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    {slide.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12 4L6 10L12 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              goNext();
              setIsPaused(true);
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M8 4L14 10L8 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="absolute bottom-14 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {kitchenSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "bg-white w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
