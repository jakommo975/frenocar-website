import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ISOBadge from "@/components/ISOBadge";
import ContactCTA from "@/components/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "kovovyroba" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const galleryImages = [
  { src: "/images/cnc_lathe.jpg", altKey: "galleryAlt1" },
  { src: "/images/cnc_milling_machine.jpg", altKey: "galleryAlt2" },
  { src: "/images/cnc_milling_machine_2.jpg", altKey: "galleryAlt3" },
  { src: "/images/plasma_cutting.jpg", altKey: "galleryAlt4" },
  { src: "/images/milling_tools.jpg", altKey: "galleryAlt5" },
  { src: "/images/thread_taps.jpg", altKey: "galleryAlt6" },
] as const;

export default async function KovovyrobaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <KovovyrobaContent />;
}

function KovovyrobaContent() {
  const t = useTranslations("kovovyroba");

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
              <p className="mt-4 text-brand-gray leading-relaxed max-w-xl">
                {t("heroDescription")}
              </p>
            </div>
            <div className="rounded-brand-card overflow-hidden">
              <Image
                src="/images/cnc_milling_machine.jpg"
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

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeading title={t("capabilitiesTitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title={t("cncTitle")}
            description={t("cncDescription")}
            variant="navy"
          />
          <ServiceCard
            title={t("plasmaTitle")}
            description={t("plasmaDescription")}
            variant="navy"
          />
          <ServiceCard
            title={t("toolsTitle")}
            description={t("toolsDescription")}
            variant="navy"
          />
          <ServiceCard
            title={t("powderTitle")}
            description={t("powderDescription")}
            variant="navy"
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title={t("galleryTitle")}
          subtitle={t("gallerySubtitle")}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="rounded-[var(--radius-brand)] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={t(img.altKey)}
                width={400}
                height={300}
                className="w-full h-40 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ISO */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
        <ISOBadge />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ContactCTA
          title={t("ctaTitle")}
          description={t("ctaDescription")}
        />
      </section>
    </>
  );
}
