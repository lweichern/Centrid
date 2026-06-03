import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-home.webp"
          alt="Aetas Residence dining room by Centrid Design"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-navy/80 via-navy/60 to-navy/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <h1 className="font-serif text-3xl leading-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            Designing Spaces That Inspire
          </h1>

          <div className="mx-auto mt-8 h-[2px] w-20 bg-primary-300" />

          <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            Premium interior design & build studio in Selangor, Malaysia.
            Transforming visions into living masterpieces since 2019.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MagneticButton variant="white" href="/portfolio" size="lg">
              Explore Our Work
            </MagneticButton>
            <MagneticButton
              variant="outline"
              href="/contact"
              size="lg"
              className="border-white/60 text-white hover:bg-white/10 hover:text-white"
            >
              Get in Touch
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-white/50"
          >
            <path
              d="M10 4L10 16M10 16L4 10M10 16L16 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
