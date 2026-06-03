import SectionHeading from "@/components/ui/SectionHeading";
import { services, type Service } from "@/lib/data";

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const iconPaths: Record<Service["icon"], string> = {
    design:
      "M3 21L12 3L21 21M3 21H21M7.5 12H16.5M5.5 16.5H18.5M20 4L22 2M20 4L18 6M20 4L22 6M20 4L18 2",
    build:
      "M12 3L4 21M12 3L20 21M12 3V8M8 14H16M6 18H18M2 21H22M14 8L18 4L22 8M14 8H22",
    kitchen:
      "M4 4H20V20H4V4ZM8 8V16M12 4V20M16 8V16M4 12H20M7 4V2M17 4V2M9 16C9 16 10 18 12 18C14 18 15 16 15 16",
  };

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      className="text-primary"
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

export default function ServicesOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading label="What We Do" title="Our Expertise" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl bg-white p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5 lg:p-10"
            >
              <span className="absolute right-6 top-6 font-serif text-7xl leading-none text-primary/10">
                {service.number}
              </span>

              <div className="mb-6">
                <ServiceIcon icon={service.icon} />
              </div>

              <h3 className="mb-4 font-serif text-2xl text-navy">{service.title}</h3>

              <p className="leading-relaxed text-navy-100">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
