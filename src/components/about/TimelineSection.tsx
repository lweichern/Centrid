import { milestones } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TimelineSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="Our Journey" title="Milestones" />

        <div className="relative">
          <div className="absolute left-5.5 md:left-1/2 top-0 h-full w-0.5 bg-primary-200 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={milestone.year}
                  className={`relative flex items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="absolute left-5.5 md:left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 md:-translate-y-1/2 z-10" />

                  <div className="hidden md:block md:w-1/2" />

                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <span className="text-primary font-serif text-2xl font-bold">
                        {milestone.year}
                      </span>
                      <h3 className="font-semibold text-lg text-navy mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-navy-100 text-sm mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
