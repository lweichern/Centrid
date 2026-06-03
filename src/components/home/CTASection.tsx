import MagneticButton from "@/components/ui/MagneticButton";

export default function CTASection() {
  return (
    <section className="bg-linear-to-b from-cream to-primary-50 py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl md:text-5xl lg:text-6xl">
          Ready to transform your space?
        </h2>

        <div className="mt-12">
          <MagneticButton variant="primary" size="lg" href="/contact">
            Start Your Project
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
