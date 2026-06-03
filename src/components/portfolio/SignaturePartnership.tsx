"use client";

import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";
import { kitchenFeatures, type KitchenFeature } from "@/lib/data";

const iconPaths: Record<KitchenFeature["icon"], string> = {
  materials:
    "M4 18L12 22L20 18M4 14L12 18L20 14M12 2L4 6L12 10L20 6L12 2Z",
  layout:
    "M3 3H10V10H3V3ZM14 3H21V10H14V3ZM3 14H10V21H3V14ZM14 14H21V21H14V14Z",
  storage:
    "M3 5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5ZM3 12H21M8 12V21M16 12V21",
  installation:
    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94L6.73 20.2a2.83 2.83 0 01-4-4l6.73-6.73A6 6 0 017.53 1.53l3.77 3.77a1 1 0 000 1.4L14.7 6.3z",
  warranty:
    "M12 2L3 7V12C3 17.25 6.88 22.13 12 23.25C17.12 22.13 21 17.25 21 12V7L12 2ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z",
  support:
    "M3 18V12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12V18M3 14C3 12.9 3.9 12 5 12H6C7.1 12 8 12.9 8 14V17C8 18.1 7.1 19 6 19H5C3.9 19 3 18.1 3 17V14ZM21 14C21 12.9 20.1 12 19 12H18C16.9 12 16 12.9 16 14V17C16 18.1 16.9 19 18 19H19C20.1 19 21 18.1 21 17V14Z",
};

function FeatureIcon({ icon }: { icon: KitchenFeature["icon"] }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      className="text-primary mb-3"
    >
      <path
        d={iconPaths[icon]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SignaturePartnership() {
  return (
    <>
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1920&q=80"
          alt="Signature Kitchen showroom"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/90 via-navy/70 to-navy/40" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
                  <path d="M12 2L3 7V12C3 17.25 6.88 22.13 12 23.25C17.12 22.13 21 17.25 21 12V7L12 2Z" />
                  <path d="M9 12L11 14L15 10" />
                </svg>
                <span className="text-sm uppercase tracking-widest text-primary-400 font-medium">
                  Authorized Partner
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Signature
                <span className="text-primary-400"> × </span>
                Centrid
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Malaysia&apos;s largest kitchen manufacturer meets Selangor&apos;s
                most trusted design studio. Together, we create kitchens that
                are built to last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy relative overflow-hidden noise-overlay">
        <div className="relative z-2 max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="border-l-2 border-primary-400 pl-6">
              <h3 className="font-serif text-2xl text-white mb-5">
                What Signature Brings
              </h3>
              <ul className="space-y-3">
                {[
                  "Malaysia's largest kitchen manufacturer since 1994",
                  "Premium imported materials & hardware",
                  "Factory-direct pricing & quality control",
                  "Industry-leading 10-year warranty",
                  "State-of-the-art manufacturing facility",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400 mt-0.5 shrink-0">
                      <path d="M20 6L9 17L4 12" />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="font-serif text-2xl text-white mb-5">
                What Centrid Brings
              </h3>
              <ul className="space-y-3">
                {[
                  "Personalized design consultation",
                  "Space planning & 3D visualization",
                  "End-to-end project management",
                  "Seamless integration with full home design",
                  "Dedicated after-sales coordination",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 mt-0.5 shrink-0">
                      <path d="M20 6L9 17L4 12" />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
              Why Signature Kitchen
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-navy">
              Premium Features
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {kitchenFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
              >
                <FeatureIcon icon={feature.icon} />
                <h4 className="font-semibold text-base mb-1.5 text-navy">
                  {feature.title}
                </h4>
                <p className="text-navy-100 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <MagneticButton variant="primary" href="/contact">
              Discuss Your Kitchen Project
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
