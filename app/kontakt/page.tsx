import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
    title: 'Kontakt',
    description:
        'Kontaktujte firmu Frenocar — telefón, email, adresa. Novoť 1093, 029 55 Novoť. Otváracie hodiny Po–Pi 7:00–15:30.'
};

export default function KontaktPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-brand-gradient text-brand-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase">
                        Kontakt
                    </h1>
                    <p className="mt-4 text-brand-gray leading-relaxed max-w-2xl">
                        Spojte sa s odborníkmi na brzdy, spojky a kovovýrobu.
                        Radi vám poradíme a pripravíme ponuku na mieru.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact details */}
                    <div>
                        <SectionHeading title="Kontaktné údaje" />

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="rounded-brand-card-sm bg-brand-gray p-6">
                                <h3 className="font-heading font-bold text-brand-blue mb-2 flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-brand-red" />
                                    Telefón
                                </h3>
                                <p className="text-brand-blue/80">
                                    <a
                                        href="tel:+421908939385"
                                        className="hover:text-brand-red transition-colors font-medium"
                                    >
                                        +421 908 939 385
                                    </a>{' '}
                                    <span className="text-sm">(predaj)</span>
                                </p>
                                <p className="text-brand-blue/80 mt-1">
                                    <a
                                        href="tel:+421905506727"
                                        className="hover:text-brand-red transition-colors font-medium"
                                    >
                                        +421 905 506 727
                                    </a>{' '}
                                    <span className="text-sm">
                                        (mimo pracovnej doby)
                                    </span>
                                </p>
                            </div>

                            {/* Email */}
                            <div className="rounded-brand-card-sm bg-brand-gray p-6">
                                <h3 className="font-heading font-bold text-brand-blue mb-2 flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-brand-red" />
                                    Email
                                </h3>
                                <p>
                                    <a
                                        href="mailto:frenocar@frenocar.sk"
                                        className="text-brand-blue hover:text-brand-red transition-colors font-medium"
                                    >
                                        frenocar@frenocar.sk
                                    </a>
                                </p>
                            </div>

                            {/* Address */}
                            <div className="rounded-brand-card-sm bg-brand-gray p-6">
                                <h3 className="font-heading font-bold text-brand-blue mb-2 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-brand-red" />
                                    Adresa
                                </h3>
                                <p className="text-brand-blue/80">Novoť 1093</p>
                                <p className="text-brand-blue/80">
                                    029 55 Novoť
                                </p>
                                <p className="text-brand-blue/80">Slovensko</p>
                            </div>

                            {/* Hours */}
                            <div className="rounded-brand-card-sm bg-brand-gray p-6">
                                <h3 className="font-heading font-bold text-brand-blue mb-2 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-brand-red" />
                                    Otváracie hodiny
                                </h3>
                                <p className="text-brand-blue/80">
                                    Pondelok – Piatok: 7:00 – 15:30
                                </p>
                                <p className="text-brand-blue/80">
                                    Sobota: po dohode
                                </p>
                            </div>

                            {/* Company info */}
                            <div className="rounded-brand-card-sm bg-brand-gray p-6">
                                <h3 className="font-heading font-bold text-brand-blue mb-2 flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-brand-red" />
                                    Firemné údaje
                                </h3>
                                <p className="text-brand-blue/80">
                                    Frenocar, s.r.o.
                                </p>
                                <p className="text-brand-blue/80">
                                    IČO: 36 402 559
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div>
                        <SectionHeading title="Kde nás nájdete" />

                        <div className="rounded-lg overflow-hidden h-[400px] md:h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.5!2d19.2811175!3d49.4389021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715cad7be4a9fdb%3A0xaa24a10c10e3c9ee!2sFrenocar%20s.r.o.!5e0!3m2!1ssk!2ssk!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa - Frenocar, Novoť 1093"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'LocalBusiness',
                        name: 'Frenocar, s.r.o.',
                        telephone: '+421908939385',
                        email: 'frenocar@frenocar.sk',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Novoť 1093',
                            addressLocality: 'Novoť',
                            postalCode: '029 55',
                            addressCountry: 'SK'
                        },
                        openingHoursSpecification: [
                            {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: [
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday'
                                ],
                                opens: '07:00',
                                closes: '15:30'
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
