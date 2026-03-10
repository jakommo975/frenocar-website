import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  items?: string[];
  imageSrc?: string;
  imageAlt?: string;
  variant?: "navy" | "red" | "light";
}

export default function ServiceCard({
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  variant = "navy",
}: ServiceCardProps) {
  const variantStyles = {
    navy: "bg-brand-blue text-brand-white",
    red: "bg-brand-red text-brand-white",
    light: "bg-brand-gray text-brand-blue",
  };

  return (
    <div
      className={`rounded-brand-card p-6 md:p-8 ${variantStyles[variant]}`}
    >
      {imageSrc && (
        <div className="mb-6 rounded-[var(--radius-brand)] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={600}
            height={400}
            className="w-full h-48 md:h-56 object-cover"
          />
        </div>
      )}
      <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed opacity-90">
        {description}
      </p>
      {items && items.length > 0 && (
        <ul className="mt-4 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm md:text-base">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 opacity-60" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
