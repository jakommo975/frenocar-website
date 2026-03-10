import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "frenofulx" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function FrenoFulxPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <FrenoFulxContent />;
}

function FrenoFulxContent() {
  const t = useTranslations("frenofulx");

  return (
    <section className="bg-brand-gradient text-brand-white min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
          {t("heroTitle")}
        </h1>
        <p className="font-heading text-lg md:text-xl font-bold mt-4 text-brand-gray">
          {t("heroSubtitle")}
        </p>
        <p className="mt-6 text-brand-gray leading-relaxed max-w-2xl mx-auto">
          {t("heroDescription")}
        </p>
        <p className="mt-4 text-brand-gray/70 text-sm">
          {t("heroNote")}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-red text-brand-white font-bold rounded-[var(--radius-brand)] hover:bg-brand-red/90 transition-colors"
          >
            {t("ctaContact")}
          </Link>
          <a
            href="tel:+421908939385"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-white text-brand-white font-bold rounded-[var(--radius-brand)] hover:bg-brand-white/10 transition-colors"
          >
            +421 908 939 385
          </a>
        </div>
      </div>
    </section>
  );
}
