'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/config';

const flags: Record<Locale, string> = {
  sk: '🇸🇰',
  en: '🇬🇧',
  de: '🇩🇪',
  pl: '🇵🇱',
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(l: Locale) {
    setOpen(false);
    if (l !== locale) {
      router.replace(pathname, { locale: l });
    }
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1 text-sm font-bold text-brand-blue rounded hover:bg-brand-gray transition-colors"
        aria-label="Language"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{flags[locale]}</span>
        <span className="text-xs">{locale.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-brand-white rounded-lg shadow-lg border border-brand-gray overflow-hidden z-50">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => handleSelect(l)}
              className={`flex items-center gap-2 w-full px-3 py-2 text-sm font-medium transition-colors ${
                l === locale
                  ? 'bg-brand-blue text-brand-white'
                  : 'text-brand-blue hover:bg-brand-gray'
              }`}
            >
              <span className="text-base leading-none">{flags[l]}</span>
              <span>{l.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
