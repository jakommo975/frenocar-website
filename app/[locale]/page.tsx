import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import StatCard from "@/components/StatCard";
import ISOBadge from "@/components/ISOBadge";
import ContactCTA from "@/components/ContactCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageContent />;
}

function HomePageContent() {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-gradient text-brand-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                {t("heroTitle")}
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-brand-gray leading-relaxed max-w-xl">
                {t("heroDescription")}
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-red text-brand-white font-bold rounded-[var(--radius-brand)] hover:bg-brand-red/90 transition-colors"
                >
                  {t("ctaContact")}
                </Link>
                <Link
                  href="/trecie-materialy"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-white text-brand-white font-bold rounded-[var(--radius-brand)] hover:bg-brand-white/10 transition-colors"
                >
                  {t("ctaServices")}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-brand-card overflow-hidden border-4 border-brand-white/20">
                <Image
                  src="/images/clutch_nice.jpg"
                  alt={t("heroImageAlt")}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <StatCard value="27+" label={t("statYears")} />
          <StatCard value="100%" label={t("statSatisfaction")} />
          <StatCard value="ISO" label={t("statISO")} />
        </div>
      </section>

      {/* 4 Focus Areas */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase text-brand-blue mb-10 md:mb-14">
          {t("focusTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Friction Materials */}
          <Link href="/trecie-materialy" className="group">
            <div className="rounded-brand-card overflow-hidden bg-brand-blue text-brand-white p-6 md:p-8 h-full transition-transform group-hover:scale-[1.02]">
              <div className="rounded-[var(--radius-brand)] overflow-hidden mb-6">
                <Image
                  src="/images/break_pads_large.jpg"
                  alt={t("frictionImageAlt")}
                  width={600}
                  height={300}
                  className="w-full h-40 md:h-48 object-cover"
                />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                {t("frictionTitle")}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {t("frictionDescription")}
              </p>
            </div>
          </Link>

          {/* Spare Parts */}
          <Link href="/nahradne-diely" className="group">
            <div className="rounded-brand-card overflow-hidden bg-brand-blue text-brand-white p-6 md:p-8 h-full transition-transform group-hover:scale-[1.02]">
              <div className="rounded-[var(--radius-brand)] overflow-hidden mb-6">
                <Image
                  src="/images/metal_ceramics.jpg"
                  alt={t("sparePartsImageAlt")}
                  width={600}
                  height={300}
                  className="w-full h-40 md:h-48 object-cover"
                />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                {t("sparePartsTitle")}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {t("sparePartsDescription")}
              </p>
            </div>
          </Link>

          {/* Metal Fabrication */}
          <Link href="/kovovyroba" className="group">
            <div className="rounded-brand-card overflow-hidden bg-brand-blue text-brand-white p-6 md:p-8 h-full transition-transform group-hover:scale-[1.02]">
              <div className="rounded-[var(--radius-brand)] overflow-hidden mb-6">
                <Image
                  src="/images/cnc_milling_machine.jpg"
                  alt={t("metalImageAlt")}
                  width={600}
                  height={300}
                  className="w-full h-40 md:h-48 object-cover"
                />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                {t("metalTitle")}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {t("metalDescription")}
              </p>
            </div>
          </Link>

          {/* FrenoFlux */}
          <Link href="/frenoflux" className="group">
            <div className="rounded-brand-card overflow-hidden bg-brand-red text-brand-white p-6 md:p-8 h-full transition-transform group-hover:scale-[1.02]">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                {t("frenofluxTitle")}
              </h3>
              <p className="text-sm text-brand-white/80 leading-relaxed">
                {t("frenofluxDescription")}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ISO + About */}
      <section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase text-brand-blue mb-4">
                {t("aboutTitle")}
              </h2>
              <p className="text-brand-blue/80 leading-relaxed mb-6">
                {t("aboutP1")}
              </p>
              <p className="text-brand-blue/80 leading-relaxed">
                {t("aboutP2")}
              </p>
            </div>
            <div className="flex justify-center">
              <ISOBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ContactCTA />
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Frenocar, s.r.o.",
            url: "https://frenocar.sk",
            logo: "https://frenocar.sk/images/frenocar_logo.png",
            description:
              "Výroba a renovácia trecích materiálov, výroba náhradných dielov, CNC kovovýroba",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Novoť 1093",
              addressLocality: "Novoť",
              postalCode: "029 55",
              addressCountry: "SK",
            },
            telephone: "+421908939385",
            email: "frenocar@frenocar.sk",
            foundingDate: "1996",
          }),
        }}
      />
    </>
  );
}
