import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioClient from "@/components/portfolio/PortfolioClient";
import SignatureTrustBar from "@/components/portfolio/SignatureTrustBar";
import SignaturePartnership from "@/components/portfolio/SignaturePartnership";

export const metadata: Metadata = {
  title: "Portfolio & Signature Kitchen | Centrid Hub",
  description:
    "Explore 150+ interior design projects by Centrid Hub — residential homes, commercial spaces, and bespoke Signature Kitchen designs across Selangor. Authorized Signature Kitchen partner since 2021.",
  openGraph: {
    title: "Portfolio & Signature Kitchen | Centrid Hub",
    description:
      "Explore 150+ interior design projects by Centrid Hub. Authorized Signature Kitchen partner — Malaysia's largest kitchen manufacturer.",
  },
};

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero with Signature Kitchen mention */}
      <section className="bg-navy text-white pt-40 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeading
            light={true}
            label="Our Work"
            title="Portfolio"
            description="150+ projects across residential homes, commercial spaces, and bespoke kitchen designs — proudly built in partnership with Signature Kitchen, Malaysia's #1 kitchen manufacturer."
          />
          <div className="flex items-center justify-center gap-2 mt-2 text-primary-300 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7V12C3 17.25 6.88 22.13 12 23.25C17.12 22.13 21 17.25 21 12V7L12 2Z" />
              <path d="M9 12L11 14L15 10" />
            </svg>
            <span>Authorized Signature Kitchen Partner</span>
          </div>
        </div>
      </section>

      {/* Signature trust bar */}
      <SignatureTrustBar />

      {/* Projects */}
      <section className="bg-white py-12">
        <PortfolioClient />
      </section>

      {/* Full partnership deep-dive */}
      <SignaturePartnership />
    </main>
  );
}
