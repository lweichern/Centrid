import SectionHeading from "@/components/ui/SectionHeading";
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

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Why Signature Kitchen" title="Premium Features" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kitchenFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary mb-5"
              >
                <path
                  d={iconPaths[feature.icon]}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="font-semibold text-lg mb-2 text-navy">
                {feature.title}
              </h3>
              <p className="text-navy-100 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
