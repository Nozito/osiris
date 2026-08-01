import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown, Clock, ShieldCheck, Wallet, Receipt, Rocket, Zap, Crown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

const COLLAPSED_FEATURES_COUNT = 4;

export const PricingPage: React.FC = () => {
    const { t, language } = useLanguage();
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});

    const offers = [
        {
            title: t.offer.offers.starter.title,
            price: '1 090',
            description: t.offer.offers.starter.description,
            features: t.offer.offers.starter.features,
            highlight: false,
            icon: Rocket,
            delivery: t.offer.faqItems.delays.starter,
        },
        {
            title: t.offer.offers.business.title,
            price: '1 690',
            description: t.offer.offers.business.description,
            features: t.offer.offers.business.features,
            highlight: true,
            icon: Zap,
            delivery: t.offer.faqItems.delays.business,
        },
        {
            title: t.offer.offers.empire.title,
            price: '2 990',
            description: t.offer.offers.empire.description,
            features: t.offer.offers.empire.features,
            highlight: false,
            icon: Crown,
            delivery: t.offer.faqItems.delays.empire,
        },
    ];

    const maintenancePlans = [
        { duration: '1 mois', commitment: 'Sans engagement', price: '69,90', icon: Zap, highlight: false },
        { duration: '3 mois', commitment: '3 mois minimum', price: '49,90', icon: Rocket, highlight: false },
        { duration: '6 mois', commitment: '6 mois minimum', price: '39,90', icon: Sparkles, highlight: true },
        { duration: '12 mois', commitment: '12 mois minimum', price: '29,90', icon: Crown, highlight: false },
    ];

    return (
        <div className="min-h-screen bg-transparent font-sans overflow-x-hidden">
            <SEOHead
                title={language === 'fr'
                    ? 'Osiris Agency Manosque – Tarifs Sites Web | Dès 950 €'
                    : 'Osiris Agency Manosque – Web Design Pricing | From €950'}
                description={language === 'fr'
                    ? `Découvrez les offres d'Osiris Agency à Manosque (04). Fondation 950 €, Stratégie 1 650 €, Signature 2 950 €. Sites vitrines sur-mesure, devis gratuit.`
                    : `Discover Osiris Agency pricing in Manosque (04). Fondation from €950, Stratégie from €1,650, Signature from €2,950. Custom high-performance websites.`}
                canonical="https://osiris-agency.fr/tarifs"
                ogImage="https://osiris-agency.fr/og-image.png"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://osiris-agency.fr/" },
                                { "@type": "ListItem", "position": 2, "name": "Tarifs", "item": "https://osiris-agency.fr/tarifs" }
                            ]
                        },
                        {
                            "@type": "OfferCatalog",
                            "name": "Offres web Osiris Agency – Manosque",
                            "provider": { "@type": "LocalBusiness", "name": "Osiris Agency", "url": "https://osiris-agency.fr" },
                            "itemListElement": [
                                { "@type": "Offer", "name": "Fondation", "description": "Site vitrine essentiel", "price": "950", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
                                { "@type": "Offer", "name": "Stratégie", "description": "Site vitrine avancé", "price": "1650", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
                                { "@type": "Offer", "name": "Signature", "description": "Site vitrine premium sur-mesure", "price": "2950", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" }
                            ]
                        }
                    ]
                }}
            />

            <div className="relative z-10 pt-32 sm:pt-40 pb-16">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-agero-ink mb-4">
                            {t.pricingPage.title} {t.pricingPage.titleHighlight}
                        </h1>
                        <p className="text-agero-gray max-w-xl mx-auto leading-relaxed">
                            {t.pricingPage.subtitle}<span className="text-agero-ink font-medium">{t.pricingPage.subtitleHighlight}</span>{t.pricingPage.subtitleEnd}
                        </p>
                    </motion.div>

                    {/* Pricing cards — side by side. `items-start` (instead of the grid default
                        `items-stretch`) means each card's box only ever matches its own content
                        height, so expanding one card's feature list never stretches the others. */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-16 items-start">
                        {offers.map((offer, index) => {
                            const Icon = offer.icon;
                            const isExpanded = !!expanded[index];
                            const features = offer.features as string[];
                            const visibleFeatures = isExpanded ? features : features.slice(0, COLLAPSED_FEATURES_COUNT);
                            const hiddenCount = features.length - COLLAPSED_FEATURES_COUNT;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div
                                        className={`group relative flex flex-col rounded-[2rem] overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1 ${
                                            offer.highlight
                                                ? 'bg-agero-dark'
                                                : 'bg-gradient-to-b from-agero-surface to-white border border-agero-line'
                                        }`}
                                    >
                                        {/* Halftone dot pattern — light dots on the dark card, dark/gray dots on the light cards */}
                                        <div
                                            className="pointer-events-none absolute inset-0"
                                            style={{
                                                backgroundImage: `radial-gradient(${offer.highlight ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,41,0.16)'} 1px, transparent 1px)`,
                                                backgroundSize: '14px 14px',
                                                maskImage: 'radial-gradient(70% 70% at 22% 15%, black 0%, transparent 70%)',
                                                WebkitMaskImage: 'radial-gradient(70% 70% at 22% 15%, black 0%, transparent 70%)',
                                            }}
                                        />

                                        {offer.highlight && (
                                            <>
                                                <div
                                                    className="pointer-events-none absolute inset-0"
                                                    style={{
                                                        background:
                                                            'radial-gradient(70% 60% at 20% 0%, rgba(0,153,255,0.35) 0%, transparent 70%), \
                                                             radial-gradient(70% 65% at 90% 100%, rgba(0,113,227,0.45) 0%, transparent 75%), \
                                                             radial-gradient(50% 40% at 100% 0%, rgba(0,153,255,0.20) 0%, transparent 70%)',
                                                    }}
                                                />
                                                <div
                                                    className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
                                                    style={{
                                                        backgroundImage:
                                                            "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                                                        backgroundRepeat: 'repeat',
                                                    }}
                                                />
                                                <div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full bg-agero-blue/40 blur-3xl" />
                                            </>
                                        )}

                                        <div className="relative flex flex-col flex-1">
                                            <div
                                                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                                                    offer.highlight ? 'bg-white text-agero-ink' : 'bg-agero-ink text-white'
                                                }`}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h2 className={`font-display text-xl sm:text-2xl font-semibold mb-3 ${offer.highlight ? 'text-white' : 'text-agero-ink'}`}>
                                                {offer.title}
                                            </h2>
                                            <p className={`text-sm leading-relaxed mb-6 ${offer.highlight ? 'text-white/55' : 'text-agero-gray'}`}>
                                                {offer.description}
                                            </p>

                                            <div className="flex items-baseline gap-1.5 mb-6">
                                                <span className={`font-display text-3xl sm:text-4xl font-semibold ${offer.highlight ? 'text-agero-blue' : 'text-agero-ink'}`}>
                                                    {offer.price} €
                                                </span>
                                            </div>
                                            <div className={`w-full h-px mb-6 ${offer.highlight ? 'bg-white/10' : 'bg-agero-line'}`} />

                                            <ul className="flex flex-col gap-3 mb-2 flex-1">
                                                {visibleFeatures.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span
                                                            className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                                                offer.highlight ? 'bg-white/10 text-white' : 'bg-agero-surface text-agero-ink'
                                                            }`}
                                                        >
                                                            <Check className="w-3 h-3" />
                                                        </span>
                                                        <span className={`text-sm leading-relaxed ${offer.highlight ? 'text-white/70' : 'text-agero-ink/70'}`}>
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                            {hiddenCount > 0 && (
                                                <button
                                                    type="button"
                                                    onClick={() => setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))}
                                                    className={`flex items-center gap-1.5 text-xs font-medium mb-6 transition-colors duration-300 ${
                                                        offer.highlight ? 'text-white/60 hover:text-white' : 'text-agero-ink/50 hover:text-agero-ink'
                                                    }`}
                                                >
                                                    {isExpanded ? 'Voir moins' : `Voir plus (+${hiddenCount})`}
                                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                                </button>
                                            )}

                                            <div
                                                className={`flex items-center justify-between text-sm pt-4 mb-6 border-t ${
                                                    offer.highlight ? 'border-white/10 text-white/70' : 'border-agero-line text-agero-ink/70'
                                                }`}
                                            >
                                                <span>Délai</span>
                                                <span className="font-medium">{offer.delivery}</span>
                                            </div>

                                            <Link
                                                to="/contact"
                                                className={`mt-auto w-full py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-colors duration-300 ${
                                                    offer.highlight
                                                        ? 'bg-white text-agero-ink hover:bg-white/90'
                                                        : 'bg-agero-ink text-white hover:bg-agero-ink/85'
                                                }`}
                                            >
                                                Demander un devis gratuit
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA Devis Gratuit */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-20"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden bg-agero-dark">
                            <div
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background:
                                        'radial-gradient(55% 50% at 10% 0%, rgba(0,153,255,0.30) 0%, transparent 70%), \
                                         radial-gradient(50% 45% at 100% 100%, rgba(0,113,227,0.35) 0%, transparent 75%)',
                                }}
                            />
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
                                style={{
                                    backgroundImage:
                                        "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                                    backgroundRepeat: 'repeat',
                                }}
                            />

                            <div className="relative px-8 py-14 sm:px-14 sm:py-20">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-agero-blue mb-6">
                                            Devis personnalisé · Gratuit · Sous 24h
                                        </p>
                                        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-5 tracking-tight leading-[1.1]">
                                            Parlons de <span className="text-agero-blue">votre projet</span>
                                        </h2>
                                        <p className="text-white/55 leading-relaxed mb-8 max-w-md">
                                            Décrivez-nous votre projet en quelques mots. Nous vous revenons sous <strong className="text-white font-semibold">24h</strong> avec une proposition sur-mesure, sans engagement.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-2.5">
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-agero-ink font-medium text-sm whitespace-nowrap hover:bg-white/90 transition-colors duration-300"
                                            >
                                                Demander un devis gratuit
                                            </Link>
                                            <a
                                                href="tel:0772328932"
                                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white font-medium text-sm whitespace-nowrap hover:bg-white/5 transition-colors duration-300"
                                            >
                                                07 72 32 89 32
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: Clock, label: 'Réponse sous 24h', sub: 'Jours ouvrés garantis' },
                                            { icon: ShieldCheck, label: 'Sans engagement', sub: 'Devis 100% gratuit' },
                                            { icon: Wallet, label: 'Acompte 50%', sub: 'Solde à la livraison' },
                                            { icon: Receipt, label: 'TVA non applicable', sub: 'Art. 293 B CGI' },
                                        ].map((item) => {
                                            const ItemIcon = item.icon;
                                            return (
                                                <div key={item.label} className="p-5 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] transition-colors duration-300">
                                                    <div className="w-9 h-9 rounded-lg bg-agero-blue/15 text-agero-blue flex items-center justify-center mb-3">
                                                        <ItemIcon className="w-4 h-4" />
                                                    </div>
                                                    <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                                                    <p className="text-white/40 text-xs">{item.sub}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Maintenance plans */}
                    <div className="mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-agero-ink mb-4 tracking-tight">
                                Formules de <span className="text-agero-blue">Maintenance</span>
                            </h2>
                            <p className="text-agero-gray max-w-xl mx-auto">
                                Mises à jour, corrections, modifications de contenu. Sans engagement ou avec engagement pour un tarif préférentiel.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {maintenancePlans.map((plan, i) => {
                                const Icon = plan.icon;
                                return (
                                    <motion.div
                                        key={plan.duration}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-40px' }}
                                        transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                        className={`relative flex flex-col items-center text-center rounded-[2rem] overflow-hidden p-7 ${
                                            plan.highlight ? 'bg-agero-dark' : 'bg-white border border-agero-line'
                                        }`}
                                    >
                                        {plan.highlight && (
                                            <div
                                                className="pointer-events-none absolute inset-0"
                                                style={{
                                                    background:
                                                        'radial-gradient(60% 55% at 50% 0%, rgba(0,153,255,0.25) 0%, transparent 70%), \
                                                         radial-gradient(55% 50% at 50% 100%, rgba(0,113,227,0.30) 0%, transparent 75%)',
                                                }}
                                            />
                                        )}

                                        <div className="relative flex flex-col items-center">
                                            {plan.highlight ? (
                                                <span className="mb-5 px-4 py-1.5 rounded-full bg-white text-agero-ink text-[10px] font-bold uppercase tracking-widest">
                                                    Populaire
                                                </span>
                                            ) : (
                                                <div className="mb-5 h-6" />
                                            )}

                                            <div
                                                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${plan.highlight ? 'bg-white text-agero-ink' : 'text-white'}`}
                                                style={plan.highlight ? undefined : { background: 'linear-gradient(135deg, #0A2F63 0%, #0099FF 100%)' }}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </div>

                                            <p className={`font-display font-semibold text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-agero-ink'}`}>{plan.duration}</p>
                                            <p className={`text-xs mb-6 ${plan.highlight ? 'text-white/40' : 'text-agero-gray'}`}>{plan.commitment}</p>

                                            <div className="flex items-end justify-center gap-1 mb-1">
                                                <span className={`font-display text-3xl font-semibold ${plan.highlight ? 'text-agero-blue' : 'text-agero-ink'}`}>{plan.price}</span>
                                                <span className={`text-sm mb-1 ${plan.highlight ? 'text-white/40' : 'text-agero-gray'}`}>€/mois</span>
                                            </div>
                                            <p className={`text-[10px] mb-8 ${plan.highlight ? 'text-white/30' : 'text-agero-ink/35'}`}>TVA non applicable (art. 293 B CGI)</p>

                                            <Link
                                                to="/contact"
                                                className={`mt-auto w-full py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-colors duration-300 ${
                                                    plan.highlight
                                                        ? 'bg-white text-agero-ink hover:bg-white/90'
                                                        : 'bg-agero-surface text-agero-ink hover:bg-agero-line/60'
                                                }`}
                                            >
                                                Choisir ce forfait
                                            </Link>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};
