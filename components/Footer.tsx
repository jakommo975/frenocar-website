import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const navKeys = [
  { href: "/trecie-materialy" as const, key: "trecieMaterialy" },
  { href: "/nahradne-diely" as const, key: "nahradneDiely" },
  { href: "/kovovyroba" as const, key: "kovovyroba" },
  { href: "/frenofulx" as const, key: "frenofulx" },
  { href: "/kontakt" as const, key: "kontakt" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-brand-gradient text-brand-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Column 1: Logo + About */}
          <div>
            <Image
              src="/images/frenocar_logo_white.png"
              alt="Frenocar logo"
              width={200}
              height={60}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-brand-gray leading-relaxed">
              {t("about")}
            </p>

            <Link
              href="/iso-certifikacia"
              className="mt-6 flex items-center gap-3 border border-brand-blue rounded-brand-card-sm px-4 py-3 hover:border-brand-gray/50 transition-colors"
            >
              <Image
                src="/images/ISO_cert_sm.png"
                alt={t("isoCert")}
                width={48}
                height={48}
                className="h-12 w-auto rounded-sm"
              />
              <div>
                <p className="font-heading font-bold text-sm text-brand-white">
                  {t("isoCert")}
                </p>
                <p className="text-xs text-brand-gray">
                  {t("isoDescription")}
                </p>
              </div>
            </Link>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-4">
              {t("navigation")}
            </h3>
            <ul className="space-y-2">
              {navKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-gray hover:text-brand-white transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-4">
              {t("contact")}
            </h3>
            <ul className="space-y-2 text-sm text-brand-gray">
              <li>
                <a
                  href="tel:+421908939385"
                  className="hover:text-brand-white transition-colors"
                >
                  +421 908 939 385
                </a>{" "}
                {t("phoneSales")}
              </li>
              <li>
                <a
                  href="tel:+421905506727"
                  className="hover:text-brand-white transition-colors"
                >
                  +421 905 506 727
                </a>{" "}
                {t("phoneAfterHours")}
              </li>
              <li>
                <a
                  href="mailto:frenocar@frenocar.sk"
                  className="hover:text-brand-white transition-colors"
                >
                  frenocar@frenocar.sk
                </a>
              </li>
              <li className="pt-2">{t("address")}</li>
              <li>{t("hoursMF")}</li>
              <li>{t("hoursSat")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-blue">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-brand-gray">
          <p>&copy; {new Date().getFullYear()} {t("copyright")}</p>
          <p>IČO: 36 402 559</p>
        </div>
      </div>
    </footer>
  );
}
