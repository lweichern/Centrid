import type { Metadata } from "next";
import PartnershipHero from "@/components/partnership/PartnershipHero";
import WhyPartnership from "@/components/partnership/WhyPartnership";
import KitchenShowcase from "@/components/partnership/KitchenShowcase";
import FeaturesGrid from "@/components/partnership/FeaturesGrid";
import TrustSection from "@/components/partnership/TrustSection";

export const metadata: Metadata = {
  title: "Signature × Centrid | Authorized Kitchen Partner",
  description:
    "Centrid Hub is an authorized Signature Kitchen partner — Malaysia's largest kitchen manufacturer since 1994. Premium materials, custom layouts, and 10-year warranty.",
  openGraph: {
    title: "Signature × Centrid | Authorized Kitchen Partner",
    description:
      "Centrid Hub is an authorized Signature Kitchen partner — Malaysia's largest kitchen manufacturer since 1994.",
  },
};

export default function PartnershipPage() {
  return (
    <main>
      <PartnershipHero />
      <WhyPartnership />
      <KitchenShowcase />
      <FeaturesGrid />
      <TrustSection />
    </main>
  );
}
