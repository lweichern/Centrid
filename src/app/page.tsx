import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesOverview from "@/components/home/ServicesOverview";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Centrid Hub | Premium Interior Design & Build Studio",
  description:
    "Premium interior design & build studio in Selangor, Malaysia. Authorized Signature Kitchen partner with 150+ completed projects.",
  openGraph: {
    title: "Centrid Hub | Premium Interior Design & Build Studio",
    description:
      "Premium interior design & build studio in Selangor, Malaysia. Authorized Signature Kitchen partner.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesOverview />
      <StatsSection />
      <CTASection />
    </>
  );
}
