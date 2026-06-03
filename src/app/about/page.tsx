import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import TimelineSection from "@/components/about/TimelineSection";
import ValuesSection from "@/components/about/ValuesSection";

export const metadata: Metadata = {
  title: "About Us | Centrid Hub",
  description:
    "Founded in 2019, Centrid Hub is a premium interior design & build studio in Selangor with 150+ completed projects. Discover our story.",
  openGraph: {
    title: "About Us | Centrid Hub",
    description:
      "Founded in 2019, Centrid Hub is a premium interior design & build studio in Selangor with 150+ completed projects.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StorySection />
      <TimelineSection />
      <ValuesSection />
    </main>
  );
}
