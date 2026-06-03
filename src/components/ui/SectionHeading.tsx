interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-16 ${alignClass}`}>
      {label && (
        <span
          className={`inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${
            light ? "text-primary-300" : "text-primary"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-[2px] w-16 mb-6 ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "bg-primary-400" : "bg-primary"}`}
      />
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-navy-100"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
