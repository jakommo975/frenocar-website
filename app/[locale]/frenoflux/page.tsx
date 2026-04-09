import type { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import ContactCTA from '@/components/ContactCTA';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'frenoflux' });
    return {
        title: t('metaTitle'),
        description: t('metaDescription')
    };
}

export default async function FrenoFluxPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <FrenoFluxContent />;
}

function FrenoFluxContent() {
    const t = useTranslations('frenoflux');

    return (
        <>
            {/* Hero */}
            <section className="bg-brand-gradient text-brand-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <Image
                                src="/images/frenoflux/logo_frenoflux.svg"
                                alt="FrenoFlux logo"
                                width={307}
                                height={56}
                                className="mb-6 w-48 md:w-64 h-auto"
                            />
                            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight">
                                {t('heroTitle')}
                            </h1>
                            <p className="font-heading text-lg md:text-2xl mt-2 text-brand-gray">
                                {t('heroSubtitle')}
                            </p>
                            <p className="mt-6 text-brand-gray leading-relaxed max-w-xl text-base md:text-lg">
                                {t('heroDescription')}
                            </p>
                            <div className="mt-8">
                                <a
                                    href="#technicke-parametre"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-red text-brand-white font-bold rounded-[var(--radius-brand)] hover:bg-brand-red/90 transition-colors"
                                >
                                    {t('ctaTechParams')}
                                </a>
                            </div>
                        </div>
                        <div className="rounded-brand-card overflow-hidden">
                            <Image
                                src="/images/frenoflux/motor_params.webp"
                                alt={t('heroImageAlt')}
                                width={600}
                                height={500}
                                className="w-full h-72 md:h-[500px] object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* New Generation */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <SectionHeading
                            title={t('newGenTitle')}
                            subtitle={t('newGenSubtitle')}
                        />
                        <p className="text-brand-blue/80 leading-relaxed mb-4 text-base md:text-lg">
                            {t('newGenP1')}
                        </p>
                        <p className="text-brand-blue/80 leading-relaxed text-base md:text-lg">
                            {t('newGenP2')}
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/images/frenoflux/motor_drawing.png"
                            alt={t('motorDrawingAlt')}
                            width={457}
                            height={458}
                            className="w-64 md:w-96 h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Main Advantages */}
            <section className="bg-brand-red text-brand-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                    <SectionHeading title={t('advantagesTitle')} light />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-brand-white rounded-brand-card p-6 md:p-8 text-brand-blue">
                            <Image
                                src="/images/frenoflux/icon_torque.svg"
                                alt=""
                                width={116}
                                height={128}
                                className="w-16 md:w-24 h-auto mb-6"
                            />
                            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                                {t('advantageTorqueTitle')}
                            </h3>
                            <p className="text-brand-blue/80 leading-relaxed">
                                {t('advantageTorqueDescription')}
                            </p>
                        </div>

                        <div className="bg-brand-white rounded-brand-card p-6 md:p-8 text-brand-blue">
                            <Image
                                src="/images/frenoflux/icon_dynamics.svg"
                                alt=""
                                width={119}
                                height={128}
                                className="w-16 md:w-24 h-auto mb-6"
                            />
                            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                                {t('advantageDynamicsTitle')}
                            </h3>
                            <p className="text-brand-blue/80 leading-relaxed">
                                {t('advantageDynamicsDescription')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Parameters */}
            <section id="technicke-parametre" className="scroll-mt-20">
                <div className="bg-brand-gray">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                        <SectionHeading title={t('techParamsTitle')} />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <p className="text-brand-blue/80 leading-relaxed mb-4 text-base md:text-lg font-bold">
                                    {t('techParamsP1')}
                                </p>
                                <p className="text-brand-blue/80 leading-relaxed mb-4 text-base md:text-lg italic">
                                    {t('techParamsP2')}
                                </p>
                                <p className="text-brand-blue/80 leading-relaxed text-base md:text-lg">
                                    {t('techParamsP3')}
                                </p>
                            </div>
                            <div className="rounded-brand-card overflow-hidden">
                                <Image
                                    src="/images/frenoflux/motor_hero.webp"
                                    alt={t('motorParamsAlt')}
                                    width={600}
                                    height={400}
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:pt-16 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard
                            value="1,5 kW"
                            label={t('statNominalPower')}
                            variant="red"
                        />
                        <StatCard
                            value="4,0 kW"
                            label={t('statPeakPower')}
                            variant="navy"
                        />
                        <StatCard
                            value="72 V"
                            label={t('statVoltage')}
                            variant="red"
                        />
                    </div>
                </div>
            </section>

            {/* Development & Production */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <SectionHeading title={t('developmentTitle')} />
                        <p className="text-brand-blue/80 leading-relaxed mb-4 text-base md:text-lg">
                            {t('developmentP1')}
                        </p>
                        <p className="text-brand-blue/80 leading-relaxed mb-4 text-base md:text-lg">
                            {t('developmentP2')}
                        </p>
                        <p className="text-brand-blue/80 leading-relaxed text-base md:text-lg">
                            {t('developmentP3')}
                        </p>
                    </div>
                    <div className="relative">
                        <div className="rounded-brand-card overflow-hidden ml-auto w-full lg:w-[85%]">
                            <Image
                                src="/images/frenoflux/photo_development_1.webp"
                                alt={t('developmentImageAlt1')}
                                width={602}
                                height={419}
                                className="w-full h-56 md:h-72 object-cover"
                            />
                        </div>
                        <div className="rounded-brand-card-alt overflow-hidden w-[55%] lg:w-[50%] relative -mt-16 md:-mt-20 z-10">
                            <Image
                                src="/images/frenoflux/photo_development_2.webp"
                                alt={t('developmentImageAlt2')}
                                width={340}
                                height={347}
                                className="w-full h-36 md:h-48 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
                <ContactCTA
                    title={t('ctaTitle')}
                    description={t('ctaDescription')}
                />
            </section>
        </>
    );
}
