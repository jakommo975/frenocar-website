import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface ContactCTAProps {
  title?: string;
  description?: string;
}

export default function ContactCTA({
  title,
  description,
}: ContactCTAProps) {
  const t = useTranslations("contactCTA");

  return (
    <section className="bg-brand-red rounded-brand-card p-8 md:p-12 text-brand-white">
      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
        {title || t("defaultTitle")}
      </h2>
      <p className="text-sm md:text-base leading-relaxed opacity-90 mb-6 max-w-2xl">
        {description || t("defaultDescription")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center px-6 py-3 bg-brand-white text-brand-red font-bold rounded-[var(--radius-brand)] hover:bg-brand-gray transition-colors text-sm md:text-base"
        >
          {t("button")}
        </Link>
        <a
          href="tel:+421908939385"
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-white text-brand-white font-bold rounded-[var(--radius-brand)] hover:bg-brand-white/10 transition-colors text-sm md:text-base"
        >
          +421 908 939 385
        </a>
      </div>
    </section>
  );
}
