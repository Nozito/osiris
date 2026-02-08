import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, HelpCircle, FileText, Clock, CreditCard, Headphones, Shield, Sparkles, X, Minus, ChevronLeft, ChevronRight, Rocket, Crown } from 'lucide-react';
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
        delay: 0,
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
        delay: 0.2,
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
        delay: 0.4,
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

// Feature Comparison Data


export const PricingPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start with Business (middle)

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

    const getIcon = (title: string) => {
        switch (title) {
            case 'Starter': return <Rocket className="w-4 h-4 text-blue-400" />;
            case 'Business': return <Zap className="w-4 h-4 text-black fill-black" />; // Adjusted for premium green bg
            case 'Empire': return <Crown className="w-4 h-4 text-purple-400" />;
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
    return (
        <div className="min-h-screen bg-[#050505] selection:bg-premium-green selection:text-black font-sans overflow-hidden">

            {/* Background Effects with Parallax-like feel */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-premium-green/5 blur-[120px] rounded-full"
                ></motion.div>
                <motion.div
                    animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full"
                ></motion.div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]"></div>
            </div>

            <div className="relative z-10 pt-32 pb-20">
                <div className="container mx-auto max-w-7xl px-6">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24"
                    >
                        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 text-xs font-mono uppercase tracking-widest group">
                            <span className="transform group-hover:-translate-x-1 transition-transform inline-block">
                                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                            </span>
                            Retour à l'accueil
                        </Link>

                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full bg-premium-green/10 text-premium-green text-[10px] font-bold uppercase tracking-[0.2em] border border-premium-green/20">
                                Investissement Stratégique
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white mb-8 tracking-tighter">
                            NOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-green to-emerald-600">OFFRES</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Choisissez l'excellence digitale. <br />
                            Des solutions claires, sans coûts cachés, conçues pour le ROI.
                        </p>
                    </motion.div>

                    {/* Mobile: Pricing Carousel */}
                    <div className="lg:hidden relative mb-32">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all -translate-x-2 sm:-translate-x-12"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all translate-x-2 sm:translate-x-12"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className="flex items-center justify-center h-[520px] sm:h-[580px] relative px-4">
                            {offers.map((offer, index) => {
                                const position = getSlidePosition(index);
                                const isCenter = position === 'center';

                                return (
                                    <motion.div
                                        key={index}
                                        animate={{
                                            x: position === 'left' ? '-110%' : position === 'right' ? '110%' : '0%', // Adjusted for wider/less overlap spacing if needed, or stick to -60%/60%
                                            scale: isCenter ? 1 : 0.85,
                                            opacity: isCenter ? 1 : 0.4,
                                            zIndex: isCenter ? 10 : 1,
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className={`absolute w-[300px] sm:w-[340px] p-6 sm:p-8 rounded-[2rem] transition-all duration-300 flex flex-col h-full
                                            ${isCenter
                                                ? 'bg-[#0A0A0A] border border-premium-green/40 shadow-[0_0_60px_-15px_rgba(0,255,133,0.3)]'
                                                : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.04]'
                                            }
                                            ${isCenter ? 'cursor-default' : 'cursor-pointer'}
                                        `}
                                        onClick={() => !isCenter && setCurrentIndex(index)}
                                    >
                                        {/* Badge */}
                                        <div className="flex justify-center mb-6">
                                            <div className={`px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider border
                                                ${isCenter
                                                    ? 'bg-premium-green text-black border-transparent'
                                                    : 'bg-white/5 text-gray-400 border-white/10'
                                                }`}
                                            >
                                                {getIcon(offer.title)}
                                                {getBadge(offer.title)}
                                            </div>
                                        </div>

                                        <div className="mb-6 text-center">
                                            <h3 className={`text-2xl font-bold font-display uppercase tracking-widest mb-3 ${isCenter ? 'text-premium-green' : 'text-white'}`}>
                                                {offer.title}
                                            </h3>
                                            <div className="flex items-start justify-center gap-1">
                                                <span className="text-5xl font-black text-white tracking-tighter">{offer.price}</span>
                                                <span className="text-2xl mt-2 text-gray-500 font-light">€</span>
                                            </div>
                                            <p className="text-gray-500 text-xs mt-3 font-medium line-clamp-2">{offer.description}</p>
                                        </div>

                                        <div className={`w-full h-[1px] mb-6 ${isCenter ? 'bg-premium-green/20' : 'bg-white/5'}`}></div>

                                        <ul className="space-y-3 mb-8 flex-1 overflow-y-auto custom-scrollbar">
                                            {offer.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isCenter ? 'bg-premium-green/20 text-premium-green' : 'bg-white/10 text-gray-500'}`}>
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    <span className={`text-sm ${isCenter ? 'text-gray-200' : 'text-gray-500'}`}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link to="/contact" className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group/btn
                                            ${isCenter
                                                ? 'bg-premium-green text-black hover:shadow-[0_0_30px_rgba(0,255,133,0.4)] hover:scale-[1.02]'
                                                : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black hover:border-transparent'
                                            }
                                        `}>
                                            Choisir ce pack
                                            <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1`} />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {offers.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-premium-green w-6' : 'bg-white/20 hover:bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </div>





                    {/* Desktop: Static Grid - 3 cards side by side */}
                    <div className="hidden lg:grid grid-cols-3 gap-6 mb-32">
                        {offers.map((offer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                className={`p-8 rounded-[2rem] transition-all duration-300 flex flex-col h-full group hover:-translate-y-2
                                    ${offer.highlight
                                        ? 'bg-[#0A0A0A] border border-premium-green/40 shadow-[0_0_60px_-15px_rgba(0,255,133,0.2)] z-10 scale-105'
                                        : 'bg-white/[0.02] border border-white/10 hover:border-premium-green/30 hover:bg-white/[0.04]'
                                    }
                                `}
                            >
                                <div className="flex justify-center mb-6">
                                    <div className={`px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider transition-all
                                        ${offer.highlight
                                            ? 'bg-premium-green text-black border-transparent shadow-lg shadow-premium-green/20'
                                            : 'bg-white/5 text-gray-400 border border-white/10 group-hover:bg-premium-green group-hover:text-black group-hover:border-transparent'
                                        }
                                    `}>
                                        {getIcon(offer.title)}
                                        {getBadge(offer.title)}
                                    </div>
                                </div>

                                <div className="mb-6 text-center">
                                    <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-3 text-white group-hover:text-premium-green transition-colors">
                                        {offer.title}
                                    </h3>
                                    <div className="flex items-start justify-center gap-1">
                                        <span className="text-5xl font-black text-white tracking-tighter">{offer.price}</span>
                                        <span className="text-2xl mt-2 text-gray-500 font-light">€</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-3 font-medium">{offer.description}</p>
                                </div>

                                <div className="w-full h-[1px] mb-6 bg-white/5 group-hover:bg-premium-green/20 transition-colors"></div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {offer.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 text-gray-500 group-hover:bg-premium-green/20 group-hover:text-premium-green transition-colors">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm text-gray-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/contact" className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 hover:bg-premium-green hover:text-black hover:border-transparent hover:shadow-[0_0_30px_rgba(0,255,133,0.3)] group/btn">
                                    Choisir ce pack
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Comparison Table (Desktop Only) */}
                    <div className="hidden lg:block mb-32 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-4 block">En détails</span>
                            <h2 className="text-4xl font-black font-display text-white">Comparatif Complet</h2>
                        </motion.div>

                        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="p-6 text-sm font-bold text-gray-500 uppercase tracking-widest w-1/4">Fonctionnalités</th>
                                        <th className="p-6 text-center w-1/4">
                                            <div className="text-white font-bold mb-1">Starter</div>
                                            <div className="text-sm text-gray-400">950€</div>
                                        </th>
                                        <th className="p-6 text-center w-1/4 bg-white/[0.02] relative">
                                            <div className="absolute top-0 left-0 w-full h-[1px] bg-premium-green"></div>
                                            <div className="text-premium-green font-bold mb-1">Business</div>
                                            <div className="text-sm text-gray-400">1 650€</div>
                                        </th>
                                        <th className="p-6 text-center w-1/4">
                                            <div className="text-white font-bold mb-1">Empire</div>
                                            <div className="text-sm text-gray-400">2 950€</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm">
                                    <tr className="bg-white/[0.02]"><td colSpan={4} className="p-3 px-6 text-[10px] font-bold text-premium-green uppercase tracking-widest">Design & Identité</td></tr>
                                    <tr><td className="p-4 px-6 text-gray-300">Maquettes Figma</td><td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-premium-green" /></td><td className="p-4 text-center bg-white/[0.02]"><Check className="w-4 h-4 mx-auto text-premium-green" /></td><td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-premium-green" /></td></tr>
                                    <tr><td className="p-4 px-6 text-gray-300">Responsive Mobile</td><td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-premium-green" /></td><td className="p-4 text-center bg-white/[0.02]"><Check className="w-4 h-4 mx-auto text-premium-green" /></td><td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-premium-green" /></td></tr>
                                    <tr><td className="p-4 px-6 text-gray-300">Animations Avancées</td><td className="p-4 text-center text-gray-600"><X className="w-4 h-4 mx-auto" /></td><td className="p-4 text-center bg-white/[0.02]"><Check className="w-4 h-4 mx-auto text-premium-green" /></td><td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-premium-green" /></td></tr>

                                    <tr className="bg-white/[0.02]"><td colSpan={4} className="p-3 px-6 text-[10px] font-bold text-premium-green uppercase tracking-widest">Technique</td></tr>
                                    <tr><td className="p-4 px-6 text-gray-300">Nombre de pages</td><td className="p-4 text-center text-gray-400">One-Page</td><td className="p-4 text-center bg-white/[0.02] text-white font-bold">Jusqu'à 5</td><td className="p-4 text-center text-white font-bold">Illimité</td></tr>
                                    <tr><td className="p-4 px-6 text-gray-300">SEO Technique</td><td className="p-4 text-center text-gray-400">Standard</td><td className="p-4 text-center bg-white/[0.02] text-white font-bold">Avancé</td><td className="p-4 text-center text-white font-bold">Expert</td></tr>
                                    <tr><td className="p-4 px-6 text-gray-300">CMS (Admin)</td><td className="p-4 text-center text-gray-600"><X className="w-4 h-4 mx-auto" /></td><td className="p-4 text-center bg-white/[0.02]"><Check className="w-4 h-4 mx-auto text-premium-green" /></td><td className="p-4 text-center"><Check className="w-4 h-4 mx-auto text-premium-green" /></td></tr>

                                    <tr className="bg-white/[0.02]"><td colSpan={4} className="p-3 px-6 text-[10px] font-bold text-premium-green uppercase tracking-widest">Suivi</td></tr>
                                    <tr><td className="p-4 px-6 text-gray-300">Maintenance</td><td className="p-4 text-center text-gray-400">1 mois</td><td className="p-4 text-center bg-white/[0.02] text-white font-bold">3 mois</td><td className="p-4 text-center text-white font-bold">12 mois</td></tr>
                                </tbody>
                            </table>
                        </div>
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
                                    className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 hover:border-premium-green/30 transition-all duration-300 group hover:translate-x-2"
                                >
                                    <h4 className="text-white font-bold mb-3 flex items-start gap-4 text-lg">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-premium-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-premium-green group-hover:text-black transition-colors duration-300">
                                            <HelpCircle className="w-3.5 h-3.5" />
                                        </div>
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed pl-10">
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
