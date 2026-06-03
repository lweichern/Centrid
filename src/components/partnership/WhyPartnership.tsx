import SectionHeading from "@/components/ui/SectionHeading";

const signatureBrings = [
  "Malaysia's largest kitchen manufacturer since 1994",
  "Premium imported materials & hardware",
  "Factory-direct pricing & quality control",
  "Industry-leading 10-year warranty",
  "State-of-the-art manufacturing facility",
];

const centridBrings = [
  "Personalized design consultation",
  "Space planning & 3D visualization",
  "End-to-end project management",
  "Seamless integration with full home design",
  "Dedicated after-sales coordination",
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M4 10.5L8 14.5L16 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyPartnership() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="The Partnership" title="Better Together" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl mb-6 text-navy">
              What Signature Brings
            </h3>
            <ul className="space-y-4">
              {signatureBrings.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-navy">
                  <CheckIcon className="text-primary mt-0.5" />
                  <span className="text-navy-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy text-white rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl mb-6 text-white">
              What Centrid Brings
            </h3>
            <ul className="space-y-4">
              {centridBrings.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="text-primary-400 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
