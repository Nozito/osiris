import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Check, ArrowRight, HelpCircle, X, ChevronLeft, ChevronRight, Rocket, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const offers = [
    {
        title: "Starter",
        price: "950",
        description: "L'essentiel pour exister avec élégance.",
        features: [
            "Site One-Page (Landing Page)",
            "Design UI/UX Premium",
            "Responsive Mobile & Tablette",
            "Optimisation Vitesse",
            "Hébergement offert (1 an)"
        ],
        highlight: false,
        icon: Rocket,
        color: "blue"
    },
    {
        title: "Business",
        price: "1 650",
        description: "Pour les entreprises en pleine expansion.",
        features: [
            "Site Vitrine (jusqu'à 5 pages)",
            "CMS (Gestion autonome)",
            "Animations avancées",
            "SEO Technique Optimisé",
            "Analytics & Pixel Tracking"
        ],
        highlight: true,
        icon: Zap,
        color: "green"
    },
    {
        title: "Empire",
        price: "2 950",
        description: "La domination totale de votre marché.",
        features: [
            "Site E-commerce ou Complexe",
            "Design 100% Sur-Mesure",
            "Effets 3D & WebGL",
            "Intégration CRM & API",
            "Stratégie Digitale & Support"
        ],
        highlight: false,
        icon: Crown,
        color: "purple"
    }
];

const faqs = [
    {
        question: "Quels sont les délais de livraison ?",
        answer: "Starter : 7 jours ouvrés. Business : 14 jours ouvrés. Empire : 3-5 semaines selon la complexité."
    },
    {
        question: "Le paiement peut-il être échelonné ?",
        answer: "Oui. 50% d'acompte au lancement du projet, et les 50% restants à la livraison finale."
    },
    {
        question: "Que comprend l'hébergement offert ?",
        answer: "Hébergement haute performance pendant 1 an, certificat SSL inclus, et support technique de base."
    },
    {
        question: "Puis-je modifier mon site après livraison ?",
        answer: "Absolument. Avec le CMS inclus (packs Business et Empire), vous gérez votre contenu en autonomie."
    },
    {
        question: "Proposez-vous de la maintenance ?",
        answer: "Oui, nous proposons des forfaits de maintenance mensuelle pour garantir la sécurité et les mises à jour."
    }
];

// --- 3D Tilt Card Component (Refined) ---
const TiltCard = ({ children, className, highlight, color = "green" }: { children: React.ReactNode, className?: string, highlight?: boolean, color?: string }) => {
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
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;
            x.set(xPct);
            y.set(yPct);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Dynamic Color Mapping for Spotlight
    const getColorRgba = (c: string) => {
        switch (c) {
            case 'blue': return 'rgba(59, 130, 246,'; // Blue-500
            case 'purple': return 'rgba(168, 85, 247,'; // Purple-500
            case 'green': return 'rgba(0, 255, 133,'; // Premium Green
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
            {/* Spotlight Effect - Dynamic Color */}
            <motion.div
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, ${colorRgba} 0.15), transparent 80%)`,
                    opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none rounded-[2.5rem] z-20"
            />
            {/* Default weak spotlight for visibility */}
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
    const [currentIndex, setCurrentIndex] = useState(1);

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
            case 'Starter': return "Lancement";
            case 'Business': return "Recommandé";
            case 'Empire': return "Domination";
            default: return "";
        }
    };

    // Helper to get hover border color
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
                            Retour à l'accueil
                        </Link>

                        <div className="flex items-center justify-center gap-2 mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-premium-green/5 text-premium-green text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] border border-premium-green/10 shadow-[0_0_25px_-5px_rgba(0,255,133,0.3)] backdrop-blur-md">
                                Investissement Stratégique
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white mb-8 tracking-tighter relative inline-block">
                            NOS <span className="relative inline-block">
                                <span className="absolute -inset-2 blur-2xl bg-premium-green/20 animate-pulse"></span>
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-premium-green to-emerald-400 animate-gradient-x">OFFRES</span>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                            Des solutions d'élite pour ceux qui visent l'<span className="text-white font-medium">excellence</span>.
                            <br className="hidden md:block" />
                            Transparence totale. Impact maximal.
                        </p>
                    </motion.div>

                    {/* Mobile: Carousel Card */}
                    <div className="lg:hidden relative mb-32 h-[600px] flex items-center justify-center">
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white backdrop-blur-md"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white backdrop-blur-md"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center">
                            {offers.map((offer, index) => {
                                const position = getSlidePosition(index);
                                const isCenter = position === 'center';
                                return (
                                    <motion.div
                                        key={index}
                                        animate={{
                                            x: position === 'left' ? '-110%' : position === 'right' ? '110%' : '0%',
                                            scale: isCenter ? 1 : 0.85,
                                            opacity: isCenter ? 1 : 0.4,
                                            zIndex: isCenter ? 10 : 1,
                                            rotateY: isCenter ? 0 : position === 'left' ? 15 : -15
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className={`absolute w-[90%] max-w-[340px] p-8 rounded-[2rem] flex flex-col h-[520px] backdrop-blur-xl transition-all
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
                                            Choisir ce pack
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
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

                                    {/* Top Light Leak / Gradient for Highlight */}
                                    {offer.highlight && (
                                        <>
                                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-premium-green to-transparent opacity-50"></div>
                                            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-premium-green/10 to-transparent opacity-40 pointer-events-none"></div>
                                        </>
                                    )}

                                    {/* Large Background Icon */}
                                    <div className={`absolute -right-8 -top-8 transform rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity
                                        ${offer.color === 'blue' ? 'text-blue-500/[0.05]' : offer.color === 'purple' ? 'text-purple-500/[0.05]' : 'text-premium-green/[0.05]'}
                                    `}>
                                        <offer.icon className="w-80 h-80" strokeWidth={0.5} />
                                    </div>
                                    {/* Default visible weaker icon */}
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
                                            {/* Gradient Text for Price */}
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
                                                Choisir ce pack
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
                            {/* Ambient Background Glow for Table */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-premium-green/5 rounded-full blur-[150px] pointer-events-none" />

                            <div className="bg-black border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative z-10">

                                <div className="p-12 text-center border-b border-white/10 bg-white/[0.02]">
                                    <h2 className="text-4xl font-black font-display text-white mb-4">Comparatif Détaillé</h2>
                                    <p className="text-gray-400">Une transparence totale pour un choix éclairé.</p>
                                </div>

                                <table className="w-full text-left border-collapse table-fixed">
                                    <thead>
                                        <tr className="bg-[#050505]">
                                            <th className="py-8 pl-8 w-1/3 align-bottom border-r border-white/5">
                                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Fonctionnalités</span>
                                            </th>

                                            {/* Starter */}
                                            <th className="py-8 text-center w-1/5 align-bottom border-r border-white/5 group hover:bg-white/[0.02] transition-colors">
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className="font-bold text-white text-xl">Starter</div>
                                                    <div className="text-blue-400 font-mono text-sm">950€</div>
                                                </div>
                                            </th>

                                            {/* Business - Highlighted */}
                                            <th className="py-8 text-center w-1/5 align-bottom relative bg-premium-green/[0.05] border-r border-white/5">
                                                <div className="absolute top-0 inset-x-0 h-1 bg-premium-green"></div>
                                                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-premium-green/20 border border-premium-green/30 rounded-full">
                                                    <span className="text-[10px] font-bold text-premium-green uppercase tracking-wide">Recommandé</span>
                                                </div>
                                                <div className="flex flex-col items-center gap-2 pt-8">
                                                    <div className="font-bold text-white text-2xl">Business</div>
                                                    <div className="text-premium-green font-mono text-base font-bold">1 650€</div>
                                                </div>
                                            </th>

                                            {/* Empire */}
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
                                            <td colSpan={4} className="py-4 pl-8 text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Design & Expérience</td>
                                        </tr>

                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">Maquettes Figma & UX</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-500"><Check className="w-5 h-5 mx-auto text-blue-400" /></td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5"><div className="w-8 h-8 rounded-full bg-premium-green/20 flex items-center justify-center mx-auto"><Check className="w-5 h-5 text-premium-green" /></div></td>
                                            <td className="text-center py-5"><Check className="w-5 h-5 mx-auto text-purple-400" /></td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">Animations 60FPS</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-600 text-xs font-mono">—</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5"><div className="w-8 h-8 rounded-full bg-premium-green/20 flex items-center justify-center mx-auto"><Check className="w-5 h-5 text-premium-green" /></div></td>
                                            <td className="text-center py-5"><Check className="w-5 h-5 mx-auto text-purple-400" /></td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">Responsive 3 Écrans</td>
                                            <td className="text-center py-5 border-r border-white/5"><Check className="w-5 h-5 mx-auto text-blue-400" /></td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5"><div className="w-8 h-8 rounded-full bg-premium-green/20 flex items-center justify-center mx-auto"><Check className="w-5 h-5 text-premium-green" /></div></td>
                                            <td className="text-center py-5"><Check className="w-5 h-5 mx-auto text-purple-400" /></td>
                                        </tr>

                                        {/* Section 2 */}
                                        <tr className="bg-white/[0.03] border-y border-white/10">
                                            <td colSpan={4} className="py-4 pl-8 text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Tech & Perf</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">Structure du Site</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-400 font-mono text-xs">Landing Page</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5 text-white font-mono text-xs font-bold">Multi-Pages</td>
                                            <td className="text-center py-5 text-white font-mono text-xs font-bold">Sur-Mesure</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">SEO Technique</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-400 font-mono text-xs">Standard</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5 text-white font-mono text-xs font-bold">Avancé +</td>
                                            <td className="text-center py-5 text-white font-mono text-xs font-bold">Expert + Audit</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">CMS (Admin)</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-600 text-xs font-mono">—</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5"><div className="w-8 h-8 rounded-full bg-premium-green/20 flex items-center justify-center mx-auto"><Check className="w-5 h-5 text-premium-green" /></div></td>
                                            <td className="text-center py-5"><Check className="w-5 h-5 mx-auto text-purple-400" /></td>
                                        </tr>

                                        {/* Section 3 */}
                                        <tr className="bg-white/[0.03] border-y border-white/10">
                                            <td colSpan={4} className="py-4 pl-8 text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">Support VIP</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-5 pl-8 text-gray-200 font-medium text-base border-r border-white/5">Maintenance Incluse</td>
                                            <td className="text-center py-5 border-r border-white/5 text-gray-400 font-mono text-xs">1 Mois</td>
                                            <td className="text-center py-5 bg-premium-green/[0.02] border-r border-white/5 text-white font-mono text-xs font-bold">3 Mois</td>
                                            <td className="text-center py-5 text-white font-mono text-xs font-bold">12 Mois</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        <div className="lg:col-span-4 sticky top-32">
                            <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-4 block">Support & Aide</span>
                            <h2 className="text-4xl font-black font-display text-white mb-6">
                                Questions <br /> Fréquentes
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Vous avez d'autres questions ? <br />
                                Notre équipe est disponible pour y répondre directement.
                            </p>
                            <Link to="/contact" className="text-white underline decoration-premium-green decoration-2 underline-offset-4 font-bold hover:text-premium-green transition-colors">
                                Contactez le support
                            </Link>
                        </div>

                        <div className="lg:col-span-8 space-y-4">
                            {faqs.map((faq, i) => (
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
