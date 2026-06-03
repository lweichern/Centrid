"use client";

import Image from "next/image";

export default function PartnershipHero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-stretch overflow-hidden">
      <div className="relative z-1 flex w-full md:w-1/2 flex-col justify-center bg-navy px-6 sm:px-8 md:px-16 lg:px-20 py-24 pt-32 sm:pt-36 md:py-0">
        <span className="text-sm uppercase tracking-widest text-primary-400 mb-4 block">
          Authorized Partner
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Centrid Hub
        </h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-md">
          Selangor&apos;s trusted interior design &amp; build studio, bringing
          world-class kitchen solutions to your home.
        </p>
      </div>

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
          alt="Luxury Signature Kitchen"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="absolute left-1/2 top-[45%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/40">
          <span className="font-serif text-6xl sm:text-7xl md:text-9xl text-white leading-none select-none">
            &times;
          </span>
        </div>
      </div>
    </section>
  );
}
