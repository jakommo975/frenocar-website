import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ISOBadge() {
  const t = useTranslations("isoBadge");

  return (
    <div className="flex items-center gap-4 bg-brand-gray rounded-[var(--radius-brand)] p-4 md:p-6">
      <Image
        src="/images/ISO_cert.png"
        alt={t("imageAlt")}
        width={80}
        height={80}
        className="w-16 md:w-20 h-auto"
      />
      <div>
        <p className="font-heading font-bold text-brand-blue text-sm md:text-base">
          {t("title")}
        </p>
        <p className="text-xs md:text-sm text-brand-blue/70">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
