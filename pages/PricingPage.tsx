import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Check, ArrowRight, ChevronLeft, ChevronRight, Rocket, Zap, Crown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';



const TiltCard = ({ children, className, highlight, color = "green" }: { key?: React.Key, children: React.ReactNode, className?: string, highlight?: boolean, color?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mX = e.clientX - rect.left;
            const mY = e.clientY - rect.top;
            const xPct = mX / width - 0.5;
            const yPct = mY / height - 0.5;
            x.set(xPct);
            y.set(yPct);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const getColorRgba = (c: string) => {
        switch (c) {
            case 'blue': return 'rgba(59, 130, 246,';
            case 'purple': return 'rgba(168, 85, 247,';
            case 'green': return 'rgba(37, 99, 235,';
            default: return 'rgba(37, 99, 235,';
        }
    };

    const colorRgba = getColorRgba(color);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative h-full transition-all duration-200 ease-out ${className}`}
        >
            <motion.div
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, ${colorRgba} 0.15), transparent 80%)`,
                    opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none rounded-[2.5rem] z-20"
            />
            <motion.div
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, rgba(255,255,255,0.03), transparent 80%)`,
                    opacity: 1,
                }}
                className="absolute inset-0 pointer-events-none rounded-[2.5rem] z-10"
            />
            {children}
        </motion.div>
    );
};

export const PricingPage: React.FC = () => {
    const { t, language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(1);
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const offers = [
        {
            title: "Fondation",
            price: "950",
            description: t.offer.offers.starter.description,
            features: t.offer.offers.starter.features,
            highlight: false,
            icon: Rocket,
            color: "blue",
            newFrom: 0,
            siteTypeId: 'vitrine-simple'
        },
        {
            title: "Stratégie",
            price: "1 650",
            description: t.offer.offers.business.description,
            features: t.offer.offers.business.features,
            highlight: true,
            icon: Zap,
            color: "amber",
            newFrom: 1,
            siteTypeId: 'vitrine-standard'
        },
        {
            title: "Signature",
            price: "2 950",
            description: t.offer.offers.empire.description,
            features: t.offer.offers.empire.features,
            highlight: false,
            icon: Crown,
            color: "purple",
            newFrom: 1,
            siteTypeId: 'vitrine-premium'
        }
    ];

    const getIcon = (title: string, color?: string) => {
        const colorClass = color === 'blue' ? 'text-blue-400' : color === 'purple' ? 'text-purple-400' : 'text-premium-green';
        switch (title) {
            case 'Fondation': return <Rocket className={`w-4 h-4 ${colorClass}`} />;
            case 'Stratégie': return <Zap className={`w-4 h-4 text-black fill-black`} />;
            case 'Signature': return <Crown className={`w-4 h-4 ${colorClass}`} />;
            default: return null;
        }
    };

    const getBadge = (title: string) => {
        switch (title) {
            case 'Fondation': return t.pricingPage.badges.starter;
            case 'Stratégie': return t.pricingPage.badges.business;
            case 'Signature': return t.pricingPage.badges.empire;
            default: return "";
        }
    };

    const getBorderColorClass = (color: string) => {
        switch (color) {
            case 'blue':   return 'border-blue-500/40';
            case 'amber':  return 'border-amber-400/40';
            case 'purple': return 'border-purple-500/40';
            default:       return 'border-white/10';
        }
    };

    const getGlowClass = (color: string) => {
        switch (color) {
            case 'blue':   return 'shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]';
            case 'amber':  return 'shadow-[0_20px_40px_-15px_rgba(251,191,36,0.2)]';
            case 'purple': return 'shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)]';
            default:       return '';
        }
    };

    const getTopLineClass = (color: string) => {
        switch (color) {
            case 'blue':   return 'bg-gradient-to-r from-transparent via-blue-500 to-transparent';
            case 'amber':  return 'bg-gradient-to-r from-transparent via-amber-400 to-transparent';
            case 'purple': return 'bg-gradient-to-r from-transparent via-purple-500 to-transparent';
            default:       return '';
        }
    };

    const getTopGradClass = (color: string) => {
        switch (color) {
            case 'blue':   return 'bg-gradient-to-b from-blue-500/10 to-transparent';
            case 'amber':  return 'bg-gradient-to-b from-amber-400/10 to-transparent';
            case 'purple': return 'bg-gradient-to-b from-purple-500/10 to-transparent';
            default:       return '';
        }
    };

    return (
        <div className="min-h-screen bg-transparent selection:bg-premium-green selection:text-white font-sans overflow-x-hidden">
            <SEOHead
                title={language === 'fr'
                    ? 'Tarifs Osiris Agency – Agence Web Manosque | Création Site Internet 04'
                    : 'Pricing - Osiris Agency | Premium Web Design Manosque'}
                description={language === 'fr'
                    ? 'Découvrez les offres d’Osiris Agency, agence web à Manosque (04). Fondation dès 950€, Stratégie dès 1650€, Signature dès 2950€. Sites vitrines haute performance sur-mesure.'
                    : 'Discover Osiris Agency pricing, web agency based in Manosque (04). Fondation from €950, Stratégie from €1,650, Signature from €2,950. Custom high-performance websites.'}
                canonical="https://osiris-web.com/tarifs"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Accueil",
                            "item": "https://osiris-web.com/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Tarifs",
                            "item": "https://osiris-web.com/tarifs"
                        }
                    ]
                }}
            />

            {/* Premium Background Removed (Handled Globally in App.tsx) */}

            <div className="relative z-10 pt-24 sm:pt-28 pb-14 sm:pb-16">
                <div className="container mx-auto max-w-7xl px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 text-xs font-mono uppercase tracking-widest group">
                            <span className="transform group-hover:-translate-x-1 transition-transform inline-block">
                                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                            </span>
                            {t.common.backToHome}
                        </Link>

                        <div className="flex items-center justify-center gap-2 mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-premium-green/5 text-premium-green text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] border border-premium-green/10 shadow-[0_0_25px_-5px_rgba(37,99,235,0.3)] backdrop-blur-md">
                                {t.pricingPage.sectionLabel}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-8 tracking-tighter relative inline-block px-2">
                            <span className="absolute -inset-4 blur-3xl bg-premium-green/15 animate-pulse pointer-events-none rounded-full"></span>
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-premium-green to-blue-400 animate-gradient-x">
                                {t.pricingPage.title} {t.pricingPage.titleHighlight}
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                            {t.pricingPage.subtitle}<span className="text-white font-medium">{t.pricingPage.subtitleHighlight}</span>{t.pricingPage.subtitleEnd}
                        </p>
                    </motion.div>

                    {/* ── Unified Pricing Cards Grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 md:items-stretch">
                        {offers.map((offer, index) => {
                            const isExpanded = expandedCard === offer.title;
                            const compactFeatures = (offer.features as string[]).slice(0, 3);
                            const extraFeatures = (offer.features as string[]).slice(3);

                            const glowColor = offer.color === 'blue'
                                ? 'rgba(59,130,246,0.2)'
                                : offer.color === 'amber'
                                    ? 'rgba(251,191,36,0.18)'
                                    : 'rgba(168,85,247,0.2)';

                            const topLine = offer.color === 'blue'
                                ? 'from-transparent via-blue-500 to-transparent'
                                : offer.color === 'amber'
                                    ? 'from-transparent via-amber-400 to-transparent'
                                    : 'from-transparent via-purple-500 to-transparent';

                            const borderClass = offer.color === 'blue'
                                ? 'border-blue-500/25 hover:border-blue-500/55'
                                : offer.color === 'amber'
                                    ? 'border-amber-400/30 hover:border-amber-400/60'
                                    : 'border-purple-500/25 hover:border-purple-500/55';

                            const iconRing = offer.color === 'blue'
                                ? 'bg-blue-500/10 shadow-[0_0_22px_rgba(59,130,246,0.3)] text-blue-400'
                                : offer.color === 'amber'
                                    ? 'bg-amber-400/10 shadow-[0_0_22px_rgba(251,191,36,0.3)] text-amber-400'
                                    : 'bg-purple-500/10 shadow-[0_0_22px_rgba(168,85,247,0.3)] text-purple-400';

                            const priceNumColor = offer.color === 'blue'
                                ? 'text-blue-500/[0.05]'
                                : offer.color === 'amber'
                                    ? 'text-amber-400/[0.06]'
                                    : 'text-purple-500/[0.05]';

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                    className={`relative rounded-[2rem] border bg-[#080a10] flex flex-col overflow-hidden cursor-default transition-shadow duration-500 ${borderClass} ${offer.highlight ? 'shadow-[0_0_70px_-15px_rgba(251,191,36,0.35)]' : ''}`}
                                    style={{ boxShadow: `0 0 60px -20px ${glowColor}` }}
                                >
                                    {/* Ambient glow spot */}
                                    <div className="absolute inset-0 pointer-events-none"
                                        style={{ background: `radial-gradient(ellipse 80% 50% at 50% -5%, ${glowColor}, transparent 70%)` }}
                                    />

                                    {/* Top accent line 2px */}
                                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${topLine}`} />

                                    {/* Top gradient wash */}
                                    <div className={`absolute top-0 inset-x-0 h-32 pointer-events-none opacity-30 ${offer.color === 'blue' ? 'bg-gradient-to-b from-blue-500/20 to-transparent' : offer.color === 'amber' ? 'bg-gradient-to-b from-amber-400/20 to-transparent' : 'bg-gradient-to-b from-purple-500/20 to-transparent'}`} />

                                    {/* Large decorative price number in background */}
                                    <span className={`absolute -bottom-6 -right-3 font-black font-display text-[9rem] leading-none select-none pointer-events-none ${priceNumColor}`}>
                                        {offer.price.replace(' ', '')}
                                    </span>

                                    <div className="relative z-10 p-6 lg:p-7 flex flex-col flex-1">
                                        {/* Icon */}
                                        <div className="flex justify-center mb-5">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 ${iconRing} transition-transform duration-300`}>
                                                <offer.icon className="w-7 h-7 drop-shadow-[0_0_10px_currentColor]" />
                                            </div>
                                        </div>

                                        {/* Title & Price */}
                                        <div className="mb-5 text-center">
                                            <h2 className="text-xl font-black font-display uppercase tracking-widest mb-3 text-white">
                                                {offer.title}
                                            </h2>
                                            <div className="flex items-start justify-center gap-1">
                                                <span className={`text-5xl lg:text-6xl font-black tracking-tighter
                                                    ${offer.color === 'blue' ? 'text-white' : offer.color === 'amber' ? 'text-amber-300' : 'text-white'}
                                                `}>
                                                    {offer.price}
                                                </span>
                                                <span className="text-xl lg:text-2xl mt-2 lg:mt-3 text-gray-400 font-light">€</span>
                                            </div>
                                            <p className="text-gray-400 text-xs lg:text-sm mt-4 leading-relaxed px-1 lg:px-2">{offer.description}</p>
                                        </div>

                                        {/* Separator */}
                                        <div className={`w-full h-px mb-5 bg-gradient-to-r
                                            ${offer.color === 'blue'   ? 'from-transparent via-blue-500/40 to-transparent'
                                            : offer.color === 'amber' ? 'from-transparent via-amber-400/40 to-transparent'
                                                                       : 'from-transparent via-purple-500/40 to-transparent'}
                                        `} />

                                        {/* Mobile: compact features */}
                                        <ul className="lg:hidden space-y-2.5 mb-0">
                                            {compactFeatures.map((feature, i) => {
                                                const isInherited = i < (offer.newFrom ?? 0);
                                                return (
                                                    <li key={i} className="flex items-start gap-2.5">
                                                        <div className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center
                                                            ${isInherited ? 'bg-amber-400/15 text-amber-400'
                                                            : offer.color === 'blue'   ? 'bg-blue-500/15 text-blue-400'
                                                            : offer.color === 'amber'  ? 'bg-amber-400/15 text-amber-400'
                                                                                       : 'bg-purple-500/15 text-purple-400'}
                                                        `}>
                                                            {isInherited ? <Check className="w-2.5 h-2.5" /> : <Sparkles className="w-2.5 h-2.5" />}
                                                        </div>
                                                        <span className={`text-xs leading-relaxed ${isInherited ? 'text-amber-400 font-semibold' : 'text-gray-300'}`}>{feature}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        {/* Mobile: expanded features */}
                                        {isExpanded && extraFeatures.length > 0 && (
                                            <ul className="lg:hidden space-y-2.5 mt-2.5">
                                                {extraFeatures.map((feature, i) => {
                                                    const realIndex = i + 3;
                                                    const isInherited = realIndex < (offer.newFrom ?? 0);
                                                    return (
                                                        <li key={i} className="flex items-start gap-2.5">
                                                            <div className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center
                                                                ${isInherited ? 'bg-amber-400/15 text-amber-400'
                                                                : offer.color === 'blue'   ? 'bg-blue-500/15 text-blue-400'
                                                                : offer.color === 'amber'  ? 'bg-amber-400/15 text-amber-400'
                                                                                           : 'bg-purple-500/15 text-purple-400'}
                                                            `}>
                                                                {isInherited ? <Check className="w-2.5 h-2.5" /> : <Sparkles className="w-2.5 h-2.5" />}
                                                            </div>
                                                            <span className={`text-xs leading-relaxed ${isInherited ? 'text-amber-400 font-semibold' : 'text-gray-300'}`}>{feature}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}

                                        {/* Mobile: + d'infos toggle */}
                                        {extraFeatures.length > 0 && (
                                            <button
                                                onClick={() => setExpandedCard(isExpanded ? null : offer.title)}
                                                className={`lg:hidden mt-3 mb-5 text-[11px] font-bold flex items-center gap-1 transition-colors duration-200
                                                    ${offer.color === 'blue'   ? 'text-blue-400 hover:text-blue-300'
                                                    : offer.color === 'amber' ? 'text-amber-400 hover:text-amber-300'
                                                                               : 'text-purple-400 hover:text-purple-300'}
                                                `}
                                            >
                                                {isExpanded ? '− Réduire' : `+ ${extraFeatures.length} infos supplémentaires`}
                                            </button>
                                        )}
                                        {!isExpanded && <div className="lg:hidden mt-5" />}

                                        {/* Desktop: all features */}
                                        <ul className="hidden lg:flex flex-col space-y-2.5 mb-6 flex-1">
                                            {(offer.features as string[]).map((feature, i) => {
                                                const isInherited = i < (offer.newFrom ?? 0);
                                                return (
                                                    <li key={i} className="flex items-start gap-3 group/item">
                                                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                                                            ${isInherited
                                                                ? 'bg-amber-400/15 text-amber-400'
                                                                : offer.color === 'blue'   ? 'bg-blue-500/15   text-blue-400   group-hover/item:bg-blue-500/30'
                                                                : offer.color === 'amber'  ? 'bg-amber-400/15  text-amber-400  group-hover/item:bg-amber-400/30'
                                                                                           : 'bg-purple-500/15 text-purple-400 group-hover/item:bg-purple-500/30'}
                                                        `}>
                                                            {isInherited ? <Check className="w-2.5 h-2.5" /> : <Sparkles className="w-2.5 h-2.5" />}
                                                        </div>
                                                        <span className={`text-xs leading-relaxed transition-colors duration-300 ${isInherited ? 'text-amber-400 font-semibold' : 'text-gray-300 group-hover/item:text-white'}`}>{feature}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        {/* CTA */}
                                        <Link
                                            to="/contact"
                                            className={`mt-auto w-full py-4 lg:py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 border transition-all duration-300
                                                ${offer.color === 'blue'
                                                    ? 'bg-blue-600/20 border-blue-500/40 text-blue-300 hover:bg-blue-600 hover:text-white hover:border-transparent hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]'
                                                    : offer.color === 'amber'
                                                        ? 'bg-amber-400/20 border-amber-400/40 text-amber-300 hover:bg-amber-500 hover:text-black hover:border-transparent hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]'
                                                        : 'bg-purple-600/20 border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-transparent hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]'}
                                            `}
                                        >
                                            Demander un devis gratuit
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ── CTA Devis Gratuit ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                        className="mb-16"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]">
                            {/* Background layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d1117] to-[#080c14]" />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-green/40 to-transparent" />

                            <div className="relative z-10 px-10 py-14 sm:px-16 sm:py-20">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Left — copy */}
                                    <div>
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-premium-green/10 border border-premium-green/20 text-premium-green text-[10px] font-bold uppercase tracking-[0.2em] mb-7">
                                            Devis personnalisé · Gratuit · Sous 24h
                                        </span>
                                        <h2 className="text-4xl sm:text-5xl font-black font-display text-white mb-5 tracking-tight leading-[1.05]">
                                            Parlons de<br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-green to-blue-400">votre projet</span>
                                        </h2>
                                        <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                                            Décrivez-nous votre projet en quelques mots. Nous vous revenons sous <strong className="text-white font-semibold">24h</strong> avec une proposition sur-mesure, sans engagement.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-premium-green to-blue-600 text-white font-bold text-sm uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_40px_rgba(37,99,235,0.45)] transition-all duration-300"
                                            >
                                                Demander un devis gratuit
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                            <a
                                                href="tel:0772328932"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.04] text-white font-semibold text-sm hover:border-white/25 hover:bg-white/[0.08] transition-all duration-300"
                                            >
                                                07 72 32 89 32
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right — guarantees */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { label: 'Réponse sous 24h', sub: 'Jours ouvrés garantis' },
                                            { label: 'Sans engagement', sub: 'Devis 100% gratuit' },
                                            { label: 'Acompte 50%', sub: 'Solde à la livraison' },
                                            { label: 'TVA non applicable', sub: 'Art. 293 B CGI' },
                                        ].map((item) => (
                                            <div key={item.label} className="p-5 rounded-2xl border border-white/5 bg-white/[0.025] hover:border-premium-green/15 hover:bg-white/[0.04] transition-all duration-300">
                                                <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                                                <p className="text-gray-500 text-xs">{item.sub}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Formules de Maintenance ── */}
                    <div className="mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-12"
                        >
                            <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-4 block">Après la livraison</span>
                            <h2 className="text-3xl sm:text-5xl font-black font-display text-white mb-4 tracking-tight">
                                Formules de <span className="text-premium-green">Maintenance</span>
                            </h2>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                Mises à jour, corrections, modifications de contenu. Sans engagement ou avec engagement pour un tarif préférentiel.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {([
                                {
                                    duration: '1 mois', commitment: 'Sans engagement', price: '69,90', highlight: false,
                                    icon: Zap, num: '01',
                                    glow: 'rgba(59,130,246,0.18)', glowHover: 'rgba(59,130,246,0.32)',
                                    border: 'border-blue-500/20 hover:border-blue-500/50',
                                    iconColor: 'text-blue-400', iconRing: 'bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.25)]',
                                    topLine: 'from-transparent via-blue-500/60 to-transparent',
                                    numColor: 'text-blue-500/[0.07]', priceColor: 'text-white',
                                },
                                {
                                    duration: '3 mois', commitment: '3 mois minimum', price: '49,90', highlight: false,
                                    icon: Rocket, num: '03',
                                    glow: 'rgba(99,102,241,0.18)', glowHover: 'rgba(99,102,241,0.32)',
                                    border: 'border-indigo-500/20 hover:border-indigo-500/50',
                                    iconColor: 'text-indigo-400', iconRing: 'bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.25)]',
                                    topLine: 'from-transparent via-indigo-500/60 to-transparent',
                                    numColor: 'text-indigo-500/[0.07]', priceColor: 'text-white',
                                },
                                {
                                    duration: '6 mois', commitment: '6 mois minimum', price: '39,90', highlight: true,
                                    icon: Sparkles, num: '06',
                                    glow: 'rgba(37,99,235,0.28)', glowHover: 'rgba(37,99,235,0.45)',
                                    border: 'border-premium-green/40 hover:border-premium-green/70',
                                    iconColor: 'text-premium-green', iconRing: 'bg-premium-green/15 shadow-[0_0_28px_rgba(37,99,235,0.5)]',
                                    topLine: 'from-transparent via-premium-green to-transparent',
                                    numColor: 'text-blue-400/[0.1]', priceColor: 'text-premium-green',
                                },
                                {
                                    duration: '12 mois', commitment: '12 mois minimum', price: '29,90', highlight: false,
                                    icon: Crown, num: '12',
                                    glow: 'rgba(168,85,247,0.18)', glowHover: 'rgba(168,85,247,0.32)',
                                    border: 'border-purple-500/20 hover:border-purple-500/50',
                                    iconColor: 'text-purple-400', iconRing: 'bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.25)]',
                                    topLine: 'from-transparent via-purple-500/60 to-transparent',
                                    numColor: 'text-purple-500/[0.07]', priceColor: 'text-white',
                                },
                            ] as const).map((plan, i) => (
                                <motion.div
                                    key={plan.duration}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    className={`relative flex flex-col rounded-[2rem] border bg-[#080a10] overflow-hidden cursor-default transition-shadow duration-500
                                        ${plan.border}
                                        ${plan.highlight ? 'shadow-[0_0_60px_-15px_rgba(37,99,235,0.5)]' : ''}
                                    `}
                                    style={{ boxShadow: `0 0 60px -20px ${plan.glow}` }}
                                >
                                    {/* Ambient glow spot */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{ background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${plan.glow}, transparent 70%)` }}
                                    />

                                    {/* Top accent line */}
                                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${plan.topLine}`} />

                                    {/* Large decorative number */}
                                    <span className={`absolute -bottom-4 -right-2 font-black font-display text-[8rem] leading-none select-none pointer-events-none ${plan.numColor}`}>
                                        {plan.num}
                                    </span>

                                    {plan.highlight && (
                                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-premium-green/8 to-transparent pointer-events-none" />
                                    )}

                                    <div className="relative z-10 flex flex-col items-center text-center p-7 pb-8 flex-1">
                                        {plan.highlight && (
                                            <span className="mb-5 px-4 py-1.5 rounded-full bg-premium-green text-black text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                                                Populaire
                                            </span>
                                        )}
                                        {!plan.highlight && <div className="mb-5 h-7" />}

                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 ${plan.iconRing} transition-transform duration-300`}>
                                            {plan.highlight && (
                                                <div className="absolute w-16 h-16 rounded-2xl bg-premium-green/10 animate-ping opacity-30" />
                                            )}
                                            <plan.icon className={`w-7 h-7 ${plan.iconColor} drop-shadow-[0_0_8px_currentColor]`} />
                                        </div>

                                        <p className="text-white font-black font-display text-2xl tracking-tight mb-1">{plan.duration}</p>
                                        <p className="text-gray-500 text-xs mb-6">{plan.commitment}</p>

                                        <div className="flex items-end justify-center gap-1 mb-1">
                                            <span className={`text-5xl font-black font-display leading-none ${plan.priceColor}`}>{plan.price}</span>
                                            <span className="text-gray-500 text-sm mb-1">€/mois</span>
                                        </div>
                                        <p className="text-gray-700 text-[10px] mb-8">TVA non applicable (art. 293 B CGI)</p>

                                        <Link
                                            to="/contact"
                                            className={`mt-auto w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300
                                                ${plan.highlight
                                                    ? 'bg-premium-green/20 border border-premium-green/50 text-premium-green hover:bg-premium-green hover:text-black hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]'
                                                    : 'bg-white/[0.04] border border-white/8 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'}
                                            `}
                                        >
                                            Choisir ce forfait
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            <Footer />
        </div>
    );
};
