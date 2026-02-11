import React, { useState, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Check, ArrowRight, HelpCircle, ChevronLeft, ChevronRight, Rocket, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

// --- 3D Tilt Card Component (Refined) ---
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
            case 'green': return 'rgba(0, 255, 133,';
            default: return 'rgba(0, 255, 133,';
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

    const offers = [
        {
            title: "Starter",
            price: "950",
            description: t.offer.offers.starter.description,
            features: t.offer.offers.starter.features,
            highlight: false,
            icon: Rocket,
            color: "blue"
        },
        {
            title: "Business",
            price: "1 650",
            description: t.offer.offers.business.description,
            features: t.offer.offers.business.features,
            highlight: true,
            icon: Zap,
            color: "green"
        },
        {
            title: "Empire",
            price: "2 950",
            description: t.offer.offers.empire.description,
            features: t.offer.offers.empire.features,
            highlight: false,
            icon: Crown,
            color: "purple"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % offers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
    };

    const getSlidePosition = (index: number) => {
        const diff = index - currentIndex;
        if (diff === 0) return 'center';
        if (diff === 1 || diff === -2) return 'right';
        if (diff === -1 || diff === 2) return 'left';
        return 'hidden';
    };

    const getIcon = (title: string, color?: string) => {
        const colorClass = color === 'blue' ? 'text-blue-400' : color === 'purple' ? 'text-purple-400' : 'text-premium-green';
        switch (title) {
            case 'Starter': return <Rocket className={`w-4 h-4 ${colorClass}`} />;
            case 'Business': return <Zap className={`w-4 h-4 text-black fill-black`} />;
            case 'Empire': return <Crown className={`w-4 h-4 ${colorClass}`} />;
            default: return null;
        }
    };

    const getBadge = (title: string) => {
        switch (title) {
            case 'Starter': return t.pricingPage.badges.starter;
            case 'Business': return t.pricingPage.badges.business;
            case 'Empire': return t.pricingPage.badges.empire;
            default: return "";
        }
    };

    const getBorderColorClass = (color: string) => {
        switch (color) {
            case 'blue': return 'group-hover:border-blue-500/40';
            case 'purple': return 'group-hover:border-purple-500/40';
            case 'green': return 'group-hover:border-premium-green/40';
            default: return 'group-hover:border-white/10';
        }
    };

    return (
        <div className="min-h-screen bg-transparent selection:bg-premium-green selection:text-black font-sans overflow-x-hidden">
            <SEOHead
                title={language === 'fr'
                    ? 'Tarifs & Offres - Osiris | Agence Web Premium'
                    : 'Pricing & Plans - Osiris | Premium Web Agency'}
                description={language === 'fr'
                    ? 'Découvrez nos offres de création de sites web premium. Starter à partir de 950€, Business dès 1650€, Empire dès 2950€. Sites vitrines haute performance sur-mesure.'
                    : 'Discover our premium web design packages. Starter from €950, Business from €1650, Empire from €2950. High-performance custom showcase websites.'}
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

            <div className="relative z-10 pt-32 pb-20">
                <div className="container mx-auto max-w-7xl px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24 md:mb-32"
                    >
                        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 text-xs font-mono uppercase tracking-widest group">
                            <span className="transform group-hover:-translate-x-1 transition-transform inline-block">
                                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                            </span>
                            {t.common.backToHome}
                        </Link>

                        <div className="flex items-center justify-center gap-2 mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-premium-green/5 text-premium-green text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] border border-premium-green/10 shadow-[0_0_25px_-5px_rgba(0,255,133,0.3)] backdrop-blur-md">
                                {t.pricingPage.sectionLabel}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white mb-8 tracking-tighter relative inline-block">
                            {t.pricingPage.title} <span className="relative inline-block">
                                <span className="absolute -inset-2 blur-2xl bg-premium-green/20 animate-pulse"></span>
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-premium-green to-emerald-400 animate-gradient-x">{t.pricingPage.titleHighlight}</span>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                            {t.pricingPage.subtitle}<span className="text-white font-medium">{t.pricingPage.subtitleHighlight}</span>
                            <br className="hidden md:block" />
                            {t.pricingPage.subtitleEnd}
                        </p>
                    </motion.div>

                    {/* Mobile: Swipeable Carousel */}
                    <div className="lg:hidden relative mb-32 flex flex-col items-center"
                        onTouchStart={(e) => {
                            const touch = e.touches[0];
                            (e.currentTarget as any)._touchStartX = touch.clientX;
                            (e.currentTarget as any)._touchStartY = touch.clientY;
                        }}
                        onTouchEnd={(e) => {
                            const startX = (e.currentTarget as any)._touchStartX;
                            const startY = (e.currentTarget as any)._touchStartY;
                            if (startX == null) return;
                            const touch = e.changedTouches[0];
                            const diffX = touch.clientX - startX;
                            const diffY = touch.clientY - startY;
                            // Only trigger if horizontal swipe is dominant
                            if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
                                if (diffX < 0) nextSlide();
                                else prevSlide();
                            }
                        }}
                    >
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md active:scale-90 transition-transform"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md active:scale-90 transition-transform"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Cards Container */}
                        <div className="relative w-full h-[560px] flex items-center justify-center overflow-hidden">
                            {offers.map((offer, index) => {
                                const position = getSlidePosition(index);
                                const isCenter = position === 'center';
                                return (
                                    <motion.div
                                        key={offer.title}
                                        animate={{
                                            x: position === 'left' ? '-105%' : position === 'right' ? '105%' : '0%',
                                            scale: isCenter ? 1 : 0.88,
                                            opacity: isCenter ? 1 : 0.3,
                                            zIndex: isCenter ? 10 : 1,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                        className={`absolute w-[88%] max-w-[340px] p-8 rounded-[2rem] flex flex-col h-[520px] backdrop-blur-xl will-change-transform
                                            ${isCenter
                                                ? 'bg-[#0A0A0A]/90 border border-premium-green/30 shadow-[0_0_50px_-10px_rgba(0,255,133,0.15)]'
                                                : 'bg-white/[0.03] border border-white/5'
                                            }
                                        `}
                                        onClick={() => !isCenter && setCurrentIndex(index)}
                                    >
                                        <div className="flex justify-center mb-6">
                                            <div className={`px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider border
                                                ${isCenter
                                                    ? 'bg-premium-green/10 text-premium-green border-premium-green/20'
                                                    : 'bg-white/5 text-gray-400 border-white/10'
                                                }`}
                                            >
                                                {getIcon(offer.title, offer.color)}
                                                {getBadge(offer.title)}
                                            </div>
                                        </div>

                                        <div className="mb-6 text-center">
                                            <h3 className={`text-2xl font-bold font-display uppercase tracking-widest mb-4 ${isCenter ? 'text-white' : 'text-gray-400'}`}>
                                                {offer.title}
                                            </h3>
                                            <div className="flex items-start justify-center gap-1">
                                                <span className="text-5xl font-black text-white tracking-tighter">{offer.price}</span>
                                                <span className="text-2xl mt-2 text-gray-500 font-light">€</span>
                                            </div>
                                            <p className="text-gray-500 text-xs mt-4 font-medium line-clamp-2">{offer.description}</p>
                                        </div>

                                        <div className={`w-full h-[1px] mb-6 ${isCenter ? 'bg-gradient-to-r from-transparent via-premium-green/30 to-transparent' : 'bg-white/5'}`}></div>

                                        <ul className="space-y-4 mb-8 flex-1 overflow-y-auto custom-scrollbar">
                                            {offer.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isCenter ? 'bg-premium-green/20 text-premium-green' : 'bg-white/10 text-gray-500'}`}>
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    <span className={`text-sm ${isCenter ? 'text-gray-200' : 'text-gray-500'}`}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link to="/contact" className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2
                                            ${isCenter
                                                ? 'bg-gradient-to-r from-premium-green to-emerald-400 text-black shadow-lg shadow-emerald-500/20'
                                                : 'bg-white/5 text-white border border-white/10'
                                            }
                                        `}>
                                            {t.pricingPage.choosePack}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Dot Indicators */}
                        <div className="flex items-center gap-3 mt-8">
                            {offers.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`rounded-full transition-all duration-500 ${index === currentIndex
                                        ? 'w-8 h-2 bg-premium-green shadow-[0_0_10px_rgba(0,255,133,0.4)]'
                                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Go to offer ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Premium Static Cards */}
                    <div className="hidden lg:grid grid-cols-3 gap-8 mb-32 h-full items-stretch perspective-1000">
                        {offers.map((offer, index) => (
                            <TiltCard key={index} highlight={offer.highlight} color={offer.color} className="group">
                                <div className={`relative p-10 rounded-[2.5rem] flex flex-col h-full bg-[#080808]/60 backdrop-blur-2xl border transition-all duration-500 overflow-hidden
                                    ${offer.highlight
                                        ? 'border-premium-green/30 shadow-[0_20px_40px_-15px_rgba(0,255,133,0.1)]'
                                        : `border-white/5 ${getBorderColorClass(offer.color)} hover:bg-white/[0.02]`
                                    }
                                `}>

                                    {offer.highlight && (
                                        <>
                                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-premium-green to-transparent opacity-50"></div>
                                            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-premium-green/10 to-transparent opacity-40 pointer-events-none"></div>
                                        </>
                                    )}

                                    <div className={`absolute -right-8 -top-8 transform rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity
                                        ${offer.color === 'blue' ? 'text-blue-500/[0.05]' : offer.color === 'purple' ? 'text-purple-500/[0.05]' : 'text-premium-green/[0.05]'}
                                    `}>
                                        <offer.icon className="w-80 h-80" strokeWidth={0.5} />
                                    </div>
                                    <div className={`absolute -right-8 -top-8 transform rotate-12 transition-transform duration-700 pointer-events-none opacity-30 group-hover:opacity-0
                                        ${offer.color === 'blue' ? 'text-blue-500/[0.02]' : offer.color === 'purple' ? 'text-purple-500/[0.02]' : 'text-premium-green/[0.02]'}
                                    `}>
                                        <offer.icon className="w-80 h-80" strokeWidth={0.5} />
                                    </div>

                                    {/* Badge */}
                                    <div className="flex justify-center mb-8 relative z-10">
                                        <div className={`px-5 py-2 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border
                                            ${offer.highlight
                                                ? 'bg-premium-green/10 text-premium-green border-premium-green/20 shadow-[0_0_15px_rgba(0,255,133,0.1)]'
                                                : `bg-white/5 text-gray-400 border-white/10 group-hover:bg-white/10 group-hover:text-white ${offer.color === 'blue' ? 'group-hover:border-blue-500/30' : offer.color === 'purple' ? 'group-hover:border-purple-500/30' : 'group-hover:border-premium-green/30'}`
                                            }
                                        `}>
                                            <offer.icon className="w-3.5 h-3.5" />
                                            {getBadge(offer.title)}
                                        </div>
                                    </div>

                                    {/* Title & Price */}
                                    <div className="mb-10 text-center relative z-10">
                                        <h3 className={`text-xl font-bold font-display uppercase tracking-widest mb-4 transition-colors duration-300 ${offer.highlight ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                                            {offer.title}
                                        </h3>
                                        <div className="flex items-start justify-center gap-1 group-hover:scale-105 transition-transform duration-500 origin-center">
                                            <span className={`text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b ${offer.highlight ? 'from-white via-white to-gray-400' : 'from-gray-200 via-gray-400 to-gray-600 group-hover:from-white group-hover:to-gray-300'}`}>
                                                {offer.price}
                                            </span>
                                            <span className="text-2xl mt-3 text-gray-500 font-light">€</span>
                                        </div>
                                        <p className="text-gray-500 text-sm mt-5 font-medium px-2 leading-relaxed">{offer.description}</p>
                                    </div>

                                    <div className={`w-full h-[1px] mb-10 transition-all duration-500 relative z-10
                                         ${offer.color === 'blue' ? 'bg-gradient-to-r from-transparent via-blue-500/10 to-transparent group-hover:via-blue-500/30' : offer.color === 'purple' ? 'bg-gradient-to-r from-transparent via-purple-500/10 to-transparent group-hover:via-purple-500/30' : 'bg-gradient-to-r from-transparent via-premium-green/10 to-transparent group-hover:via-premium-green/30'}
                                    `}></div>

                                    {/* Features */}
                                    <ul className="space-y-5 mb-10 flex-1 relative z-10">
                                        {offer.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-4 group/item">
                                                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                                                    ${offer.highlight
                                                        ? 'bg-premium-green/20 text-premium-green group-hover/item:bg-premium-green group-hover/item:text-black'
                                                        : `bg-white/5 text-gray-500 group-hover/item:text-white ${offer.color === 'blue' ? 'group-hover/item:bg-blue-500/20 group-hover/item:text-blue-400' : offer.color === 'purple' ? 'group-hover/item:bg-purple-500/20 group-hover/item:text-purple-400' : 'group-hover/item:bg-premium-green/20 group-hover/item:text-premium-green'}`
                                                    }
                                                `}>
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors duration-300 font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Link to="/contact" className="relative z-10 group/btn w-full">
                                        <div className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 border overflow-hidden relative shadow-lg
                                            ${offer.highlight
                                                ? 'bg-gradient-to-r from-premium-green to-emerald-500 text-black border-transparent hover:shadow-[0_0_40px_rgba(0,255,133,0.3)] hover:scale-[1.02]'
                                                : `bg-white/5 text-white border-white/10 hover:text-white hover:border-transparent ${offer.color === 'blue' ? 'hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]' : offer.color === 'purple' ? 'hover:bg-purple-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'hover:bg-premium-green hover:text-black hover:shadow-[0_0_30px_rgba(0,255,133,0.3)]'}`
                                            }
                                        `}>
                                            <span className="relative z-20 flex items-center gap-2">
                                                {t.pricingPage.choosePack}
                                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </TiltCard>
                        ))}
                    </div>

                    {/* Comparison Table (Desktop Only) */}
                    <div className="hidden lg:block mb-32 max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-premium-green/5 rounded-full blur-[150px] pointer-events-none" />

                            <div className="bg-black border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative z-10">

                                <div className="p-12 text-center border-b border-white/10 bg-white/[0.02]">
                                    <h2 className="text-4xl font-black font-display text-white mb-4">{t.pricingPage.comparison.title}</h2>
                                    <p className="text-gray-400">{t.pricingPage.comparison.subtitle}</p>
                                </div>

                                <table className="w-full text-left border-collapse table-fixed">
                                    <thead>
                                        <tr className="bg-[#050505]">
                                            <th className="py-8 pl-8 w-1/3 align-bottom border-r border-white/5">
                                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.pricingPage.comparison.features}</span>
                                            </th>
                                            <th className="py-8 text-center w-1/5 align-bottom border-r border-white/5 group hover:bg-white/[0.02] transition-colors">
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className="font-bold text-white text-xl">Starter</div>
                                                    <div className="text-blue-400 font-mono text-sm">950€</div>
                                                </div>
                                            </th>
                                            <th className="py-8 text-center w-1/5 align-bottom relative bg-premium-green/[0.05] border-r border-white/5">
                                                <div className="absolute top-0 inset-x-0 h-1 bg-premium-green"></div>
                                                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-premium-green/20 border border-premium-green/30 rounded-full">
                                                    <span className="text-[10px] font-bold text-premium-green uppercase tracking-wide">{t.pricingPage.comparison.recommended}</span>
                                                </div>
                                                <div className="flex flex-col items-center gap-2 pt-8">
                                                    <div className="font-bold text-white text-2xl">Business</div>
                                                    <div className="text-premium-green font-mono text-base font-bold">1 650€</div>
                                                </div>
                                            </th>
                                            <th className="py-8 text-center w-1/5 align-bottom hover:bg-white/[0.02] transition-colors">
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className="font-bold text-white text-xl">Empire</div>
                                                    <div className="text-purple-400 font-mono text-sm">2 950€</div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-sm">
                                        {/* Section 1 */}
                                        <tr className="bg-white/[0.03] border-y border-white/10">
                                            <td colSpan={4} className="py-4 pl-8 text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">{t.pricingPage.comparison.sections.design}</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">{t.pricingPage.comparison.rows.figma}</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-500"><Check className="w-5 h-5 mx-auto text-blue-400" /></td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5"><div className="w-8 h-8 rounded-full bg-premium-green/20 flex items-center justify-center mx-auto"><Check className="w-5 h-5 text-premium-green" /></div></td>
                                            <td className="text-center py-5"><Check className="w-5 h-5 mx-auto text-purple-400" /></td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">{t.pricingPage.comparison.rows.animations}</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-600 text-xs font-mono">—</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5"><div className="w-8 h-8 rounded-full bg-premium-green/20 flex items-center justify-center mx-auto"><Check className="w-5 h-5 text-premium-green" /></div></td>
                                            <td className="text-center py-5"><Check className="w-5 h-5 mx-auto text-purple-400" /></td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">{t.pricingPage.comparison.rows.responsive}</td>
                                            <td className="text-center py-5 border-r border-white/5"><Check className="w-5 h-5 mx-auto text-blue-400" /></td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5"><div className="w-8 h-8 rounded-full bg-premium-green/20 flex items-center justify-center mx-auto"><Check className="w-5 h-5 text-premium-green" /></div></td>
                                            <td className="text-center py-5"><Check className="w-5 h-5 mx-auto text-purple-400" /></td>
                                        </tr>

                                        {/* Section 2 */}
                                        <tr className="bg-white/[0.03] border-y border-white/10">
                                            <td colSpan={4} className="py-4 pl-8 text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">{t.pricingPage.comparison.sections.tech}</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">{t.pricingPage.comparison.rows.structure}</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-400 font-mono text-xs">{t.pricingPage.comparison.values.landingPage}</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5 text-white font-mono text-xs font-bold">{t.pricingPage.comparison.values.multiPages}</td>
                                            <td className="text-center py-5 text-white font-mono text-xs font-bold">{t.pricingPage.comparison.values.custom}</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">{t.pricingPage.comparison.rows.seo}</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-400 font-mono text-xs">{t.pricingPage.comparison.values.standard}</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5 text-white font-mono text-xs font-bold">{t.pricingPage.comparison.values.advanced}</td>
                                            <td className="text-center py-5 text-white font-mono text-xs font-bold">{t.pricingPage.comparison.values.expert}</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">{t.pricingPage.comparison.rows.cms}</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-600 text-xs font-mono">—</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5"><div className="w-8 h-8 rounded-full bg-premium-green/20 flex items-center justify-center mx-auto"><Check className="w-5 h-5 text-premium-green" /></div></td>
                                            <td className="text-center py-5"><Check className="w-5 h-5 mx-auto text-purple-400" /></td>
                                        </tr>

                                        {/* Section 3 */}
                                        <tr className="bg-white/[0.03] border-y border-white/10">
                                            <td colSpan={4} className="py-4 pl-8 text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">{t.pricingPage.comparison.sections.support}</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">{t.pricingPage.comparison.rows.maintenance}</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-400 font-mono text-xs">{t.pricingPage.comparison.values.month1}</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5 text-white font-mono text-xs font-bold">{t.pricingPage.comparison.values.month3}</td>
                                            <td className="text-center py-5 text-white font-mono text-xs font-bold">{t.pricingPage.comparison.values.month12}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        <div className="lg:col-span-4 sticky top-32">
                            <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-4 block">{t.pricingPage.faq.label}</span>
                            <h2 className="text-4xl font-black font-display text-white mb-6">
                                {t.pricingPage.faq.title} <br /> {t.pricingPage.faq.titleLine2}
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                {t.pricingPage.faq.subtitle} <br />
                                {t.pricingPage.faq.subtitleLine2}
                            </p>
                            <Link to="/contact" className="text-white underline decoration-premium-green decoration-2 underline-offset-4 font-bold hover:text-premium-green transition-colors">
                                {t.pricingPage.faq.contactSupport}
                            </Link>
                        </div>

                        <div className="lg:col-span-8 space-y-4">
                            {t.pricingPage.faqs.map((faq: { question: string; answer: string }, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                                    className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-premium-green/20 transition-all duration-300 group hover:translate-x-2 backdrop-blur-md relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-premium-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <h4 className="text-white font-bold mb-3 flex items-start gap-4 text-lg relative z-10">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-premium-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-premium-green group-hover:text-black transition-colors duration-300 shadow-[0_0_10px_rgba(0,255,133,0.1)] group-hover:shadow-[0_0_15px_rgba(0,255,133,0.5)]">
                                            <HelpCircle className="w-3.5 h-3.5" />
                                        </div>
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed pl-10 relative z-10">
                                        {faq.answer}
                                    </p>
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
