import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import ContactCTA from "@/components/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "trecieMaterialy" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function TrecieMaterilyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TrecieMaterilyContent />;
}

function TrecieMaterilyContent() {
  const t = useTranslations("trecieMaterialy");

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient text-brand-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase leading-tight">
                {t("heroTitle")}
              </h1>
              <p className="font-heading text-lg md:text-xl font-bold mt-2 text-brand-gray">
                {t("heroSubtitle")}
              </p>
              <p className="mt-4 text-brand-gray leading-relaxed max-w-xl">
                {t("heroDescription")}
              </p>
            </div>
            <div className="rounded-brand-card overflow-hidden">
              <Image
                src="/images/break_pads_large.jpg"
                alt={t("heroImageAlt")}
                width={600}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title={t("servicesTitle")}
          subtitle={t("servicesSubtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title={t("renovationTitle")}
            description={t("renovationDescription")}
            imageSrc="/images/clutch.jpg"
            imageAlt={t("renovationImageAlt")}
            items={[
              t("renovationItem1"),
              t("renovationItem2"),
              t("renovationItem3"),
              t("renovationItem4"),
              t("renovationItem5"),
            ]}
          />

          <ServiceCard
            title={t("productionTitle")}
            description={t("productionDescription")}
            imageSrc="/images/brake_shoes.jpg"
            imageAlt={t("productionImageAlt")}
            items={[
              t("productionItem1"),
              t("productionItem2"),
              t("productionItem3"),
              t("productionItem4"),
            ]}
          />
        </div>
      </section>

      {/* Atypical work */}
      <section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <SectionHeading title={t("atypicalTitle")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-brand-blue/80 leading-relaxed mb-4">
                {t("atypicalP1")}
              </p>
              <p className="text-brand-blue/80 leading-relaxed mb-4">
                {t("atypicalP2")}
              </p>
              <p className="text-brand-blue/80 leading-relaxed">
                {t("atypicalP3")}
              </p>
            </div>
            <div className="rounded-brand-card overflow-hidden">
              <Image
                src="/images/clutch_nice.jpg"
                alt={t("atypicalImageAlt")}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard value="27+" label={t("statYears")} variant="navy" />
          <StatCard value="149+" label={t("statProducts")} variant="navy" />
          <StatCard value="100%" label={t("statSatisfaction")} variant="red" />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <ContactCTA
          title={t("ctaTitle")}
          description={t("ctaDescription")}
        />
      </section>
    </>
  );
}
