import type { Metadata } from "next";
import { Roboto_Serif, Roboto } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/config";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: "%s | Frenocar",
    },
    description: t("description"),
    keywords: [
      "brzdové materiály",
      "trecie materiály",
      "diely Zetor",
      "diely LKT",
      "náhradné diely Zetor",
      "náhradné diely LKT",
      "CNC obrábanie",
      "kovovýroba",
      "Frenocar",
      "Novoť",
    ],
    openGraph: {
      type: "website",
      locale: locale === "sk" ? "sk_SK" : locale === "de" ? "de_DE" : locale === "pl" ? "pl_PL" : "en_US",
      siteName: "Frenocar",
    },
    icons: {
      icon: "/icon.png",
      apple: "/apple-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${robotoSerif.variable} ${roboto.variable}`}>
      <body className="font-body antialiased">
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
