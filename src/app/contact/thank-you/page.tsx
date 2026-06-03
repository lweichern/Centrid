import type { Metadata } from "next";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Thank You | Centrid Hub",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="max-w-lg text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">
          Thank You!
        </h1>
        <p className="text-navy-100 text-lg leading-relaxed mb-10">
          Your message has been received. Our team will get back to you within
          24 hours. In the meantime, feel free to explore our work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton variant="primary" href="/portfolio">
            View Our Portfolio
          </MagneticButton>
          <MagneticButton variant="outline" href="/">
            Back to Home
          </MagneticButton>
        </div>
      </div>
    </main>
  );
}
