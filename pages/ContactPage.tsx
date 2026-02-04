import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, ArrowRight, MessageSquare, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen pt-32">
            {/* Hero Section */}
            <section className="px-6 pb-16 relative">
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
                            <span className="text-premium-green text-xs font-bold uppercase tracking-widest">Contactez-nous</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black font-display text-white mb-6">
                            Parlons <span className="text-gray-500">Futur.</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Vous avez un projet ambitieux ? Nous avons l'équipe pour le réaliser.
                            Remplissez le formulaire et obtenez une réponse sous 24h.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 pb-32 relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Left Column: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-start gap-4 p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-white/10 transition-colors"
                                >
                                    <div className="w-14 h-14 rounded-full bg-premium-green/10 border border-premium-green/20 flex items-center justify-center text-premium-green">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Email Direct</h4>
                                        <a href="mailto:hello@osiris.com" className="text-gray-400 hover:text-premium-green transition-colors">hello@osiris.com</a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex items-start gap-4 p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-white/10 transition-colors"
                                >
                                    <div className="w-14 h-14 rounded-full bg-premium-green/10 border border-premium-green/20 flex items-center justify-center text-premium-green">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Disponibilité</h4>
                                        <p className="text-gray-400">Lun - Ven : 9h - 18h</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-[2.5rem]"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <MessageSquare className="w-6 h-6 text-premium-green" />
                                <h3 className="text-xl font-bold text-white">Envoyez-nous un message</h3>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Nom</label>
                                        <input type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-2xl" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Entreprise</label>
                                        <input type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-2xl" placeholder="Company Ltd" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-2xl" placeholder="john@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Budget estimé</label>
                                    <select className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors appearance-none rounded-2xl">
                                        <option>1k€ - 3k€</option>
                                        <option>3k€ - 10k€</option>
                                        <option>10k€ +</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Message</label>
                                    <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-2xl" placeholder="Parlez-nous de votre projet..."></textarea>
                                </div>

                                <button type="button" className="w-full bg-premium-green text-black font-bold py-5 uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 rounded-full mt-4">
                                    Envoyer ma demande
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
