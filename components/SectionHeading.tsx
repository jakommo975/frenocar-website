interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 md:mb-12">
      <h2
        className={`font-heading text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide ${
          light ? "text-brand-white" : "text-brand-blue"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-heading text-lg md:text-xl font-bold mt-2 ${
            light ? "text-brand-gray" : "text-brand-blue/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
