'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const navHrefs = [
    '/trecie-materialy',
    '/nahradne-diely',
    '/kovovyroba',
    '/frenofulx',
    '/kontakt',
] as const;

const navKeys = [
    'trecieMaterialy',
    'nahradneDiely',
    'kovovyroba',
    'frenofulx',
    'kontakt',
] as const;

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const t = useTranslations('nav');

    return (
        <header className="sticky top-0 z-50 bg-brand-white/95 backdrop-blur-sm border-b border-brand-gray">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
                <Link href="/" className="flex-shrink-0 overflow-hidden">
                    <Image
                        src="/images/frenocar_logo_red.png"
                        alt="Frenocar logo"
                        width={200}
                        height={80}
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                    {navHrefs.map((href, i) => (
                        <Link
                            key={href}
                            href={href}
                            className={`rounded-brand-card-sm text-base font-medium transition-colors px-5 py-3 ${
                                pathname === href
                                    ? 'bg-brand-blue text-brand-white'
                                    : 'text-brand-blue hover:bg-brand-gray'
                            }`}
                        >
                            {t(navKeys[i])}
                        </Link>
                    ))}
                    <LanguageSwitcher />
                </nav>

                {/* Mobile hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <LanguageSwitcher />
                    <button
                        className="flex flex-col gap-1.5 p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-brand-blue transition-transform ${
                                menuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-brand-blue transition-opacity ${
                                menuOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-brand-blue transition-transform ${
                                menuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <nav className="md:hidden border-t border-brand-gray bg-brand-white">
                    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
                        {navHrefs.map((href, i) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={`px-4 py-3 rounded-brand-card-sm text-base font-medium transition-colors ${
                                    pathname === href
                                        ? 'bg-brand-blue text-brand-white'
                                        : 'text-brand-blue hover:bg-brand-gray'
                                }`}
                            >
                                {t(navKeys[i])}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
