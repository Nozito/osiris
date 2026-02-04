import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, HelpCircle, FileText, Clock, CreditCard, Headphones, Shield, Sparkles } from 'lucide-react';
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
        delay: 0
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
        delay: 0.2
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
        delay: 0.4
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

const guarantees = [
    { icon: Clock, title: "Livraison garantie", desc: "Respect des délais ou remboursement partiel" },
    { icon: CreditCard, title: "Paiement sécurisé", desc: "Acompte uniquement, solde à la livraison" },
    { icon: Headphones, title: "Support réactif", desc: "Réponse sous 24h ouvrées garantie" },
    { icon: Shield, title: "Satisfaction", desc: "Révisions incluses jusqu'à validation" }
];

export const PricingPage: React.FC = () => {
    return (
        <div className="min-h-screen pt-32">
            {/* Hero Section */}
            <section className="px-6 pb-20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-premium-green/5 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm">
                            <ArrowRight className="w-4 h-4 rotate-180" />
                            Retour à l'accueil
                        </Link>

                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-premium-green" />
                            <span className="text-premium-green text-xs font-bold uppercase tracking-widest">Tarifs Transparents</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-6">
                            Nos <span className="text-premium-green">Tarifs</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Trois niveaux d'excellence pour propulser votre business.
                            Pas de coûts cachés, pas de surprises.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="px-6 pb-32 relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        {offers.map((offer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: offer.delay, duration: 0.6 }}
                                className={`relative p-8 md:p-10 rounded-[2rem] transition-all duration-300 group
                  ${offer.highlight
                                        ? 'bg-[#0A0A0A] border border-premium-green/30 shadow-[0_0_50px_-20px_rgba(0,255,133,0.3)] z-10 scale-100 md:scale-110'
                                        : 'bg-white/[0.02] border border-white/5 hover:border-white/10'
                                    }
                `}
                            >
                                {offer.highlight && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-premium-green/5 to-transparent rounded-[2rem] pointer-events-none"></div>
                                )}

                                {offer.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-premium-green text-black text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2 shadow-lg shadow-premium-green/20">
                                        <Zap className="w-3 h-3 fill-black" />
                                        Recommandé
                                    </div>
                                )}

                                <h3 className={`text-lg font-bold mb-2 font-display uppercase tracking-wider ${offer.highlight ? 'text-premium-green' : 'text-white'}`}>
                                    {offer.title}
                                </h3>

                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl md:text-5xl font-black text-white tracking-tight">{offer.price}€</span>
                                </div>

                                <p className="text-gray-400 text-xs mb-8 h-8 font-medium">{offer.description}</p>

                                <div className={`w-full h-[1px] mb-8 ${offer.highlight ? 'bg-gradient-to-r from-transparent via-premium-green/30 to-transparent' : 'bg-white/5'}`}></div>

                                <ul className="space-y-4 mb-10">
                                    {offer.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${offer.highlight ? 'bg-premium-green text-black' : 'bg-white/10 text-gray-400'}`}>
                                                <Check className="w-2.5 h-2.5" />
                                            </div>
                                            <span className={`text-sm ${offer.highlight ? 'text-white' : 'text-gray-400'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/#contact" className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 border flex items-center justify-center gap-2
                    ${offer.highlight
                                        ? 'bg-premium-green text-black border-transparent hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                                        : 'bg-transparent text-white border-white/10 hover:bg-white/5 hover:border-white/30'
                                    }
                  `}>
                                    Choisir ce pack
                                    {offer.highlight && <ArrowRight className="w-4 h-4" />}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantees */}
            <section className="px-6 py-20 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {guarantees.map((item, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-premium-green/10 border border-premium-green/20 flex items-center justify-center group-hover:bg-premium-green/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-premium-green" />
                                </div>
                                <h4 className="text-white font-bold mb-1 text-sm">{item.title}</h4>
                                <p className="text-gray-500 text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 py-32 relative">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-2 block">FAQ</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display text-white">
                            Questions fréquentes
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
                            >
                                <h4 className="text-white font-bold mb-2 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-premium-green flex-shrink-0 mt-0.5" />
                                    {faq.question}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed pl-8">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-20 bg-gradient-to-b from-transparent to-premium-green/5">
                <div className="container mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <FileText className="w-12 h-12 text-premium-green mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-black font-display text-white mb-4">
                            Un projet spécifique ?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Vous avez des besoins particuliers ou un cahier des charges complexe ?
                            Demandez un devis sur-mesure adapté à votre ambition.
                        </p>
                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-premium-green text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
                        >
                            Demander un devis personnalisé
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
