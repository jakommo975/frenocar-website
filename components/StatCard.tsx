interface StatCardProps {
  value: string;
  label: string;
  variant?: "navy" | "red" | "light";
}

export default function StatCard({
  value,
  label,
  variant = "light",
}: StatCardProps) {
  const variantStyles = {
    navy: "bg-brand-blue text-brand-white",
    red: "bg-brand-red text-brand-white",
    light: "bg-brand-gray text-brand-blue",
  };

  return (
    <div
      className={`rounded-brand-card p-6 md:p-8 text-center ${variantStyles[variant]}`}
    >
      <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
        {value}
      </p>
      <p className="text-sm uppercase tracking-wider mt-2 opacity-80">
        {label}
      </p>
    </div>
  );
}
