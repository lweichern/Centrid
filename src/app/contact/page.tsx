import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactClient from "@/components/contact/ContactClient";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us | Centrid Hub",
  description:
    "Get in touch with Centrid Hub for your interior design project. Free consultation available. Located in Selangor, Malaysia.",
  openGraph: {
    title: "Contact Us | Centrid Hub",
    description:
      "Get in touch with Centrid Hub for your interior design project. Free consultation available.",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-navy text-white pt-40 pb-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            light={true}
            label="Get in Touch"
            title="Let's Build Your Dream Space"
            description="Have a project in mind? Fill in the form below or reach out via WhatsApp — we'd love to hear about your vision."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto px-6">
          <div className="lg:col-span-3">
            <ContactClient />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
}
