import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "isoCertifikacia" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ISOCertifikaciaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ISOCertifikaciaContent />;
}

function ISOCertifikaciaContent() {
  const t = useTranslations("isoCertifikacia");

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient text-brand-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase">
            {t("heroTitle")}
          </h1>
          <p className="mt-4 text-brand-gray leading-relaxed max-w-2xl">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Certificate */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-brand-card overflow-hidden shadow-lg">
            <Image
              src="/images/ISO_cert.png"
              alt={t("certImageAlt")}
              width={800}
              height={1100}
              className="w-full h-auto"
              priority
            />
          </div>

          <p className="mt-8 text-center text-brand-blue/70 text-sm">
            {t("certCaption")}
          </p>
        </div>
      </section>
    </>
  );
}
