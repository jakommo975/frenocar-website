import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ContactCTA from "@/components/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nahradneDiely" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function NahradneDielyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <NahradneDielyContent />;
}

function NahradneDielyContent() {
  const t = useTranslations("nahradneDiely");

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient text-brand-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="font-heading text-lg md:text-xl font-bold mt-2 text-brand-gray">
            {t("heroSubtitle")}
          </p>
          <p className="mt-4 text-brand-gray leading-relaxed max-w-2xl">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeading title={t("categoriesTitle")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title={t("agricultureTitle")}
            description={t("agricultureDescription")}
            variant="navy"
          />
          <ServiceCard
            title={t("forestryTitle")}
            description={t("forestryDescription")}
            variant="navy"
          />
          <ServiceCard
            title={t("gardenTitle")}
            description={t("gardenDescription")}
            variant="navy"
          />
        </div>
      </section>

      {/* Catalog notice */}
      <section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="rounded-brand-card bg-brand-blue text-brand-white p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              {t("catalogTitle")}
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4 max-w-2xl">
              {t("catalogP1")}
            </p>
            <p className="text-brand-gray leading-relaxed max-w-2xl">
              {t("catalogP2")}
            </p>
          </div>
        </div>
      </section>

      {/* Retailer CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ContactCTA
          title={t("ctaTitle")}
          description={t("ctaDescription")}
        />
      </section>
    </>
  );
}
