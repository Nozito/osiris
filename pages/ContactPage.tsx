import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, ArrowRight, MessageSquare, Clock, Sparkles, CheckCircle2, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { MagneticButton } from '../components/ui/MagneticButton';

export const ContactPage: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate submission
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#050505] selection:bg-premium-green selection:text-black overflow-hidden font-sans">

            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-premium-green/5 blur-[150px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 blur-[150px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-7xl">

                    {/* Header Section */}
                    <div className="mb-20 md:mb-32 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 text-xs font-mono uppercase tracking-widest group">
                                <span className="transform group-hover:-translate-x-1 transition-transform inline-block">
                                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                                </span>
                                Retour à l'accueil
                            </Link>

                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-6 overflow-hidden">
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.5, duration: 0.5 }}
                                            className="flex h-2 w-2 rounded-full bg-premium-green animate-pulse"
                                        ></motion.span>
                                        <motion.span
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.6, duration: 0.5 }}
                                            className="text-premium-green text-xs font-bold uppercase tracking-[0.2em]"
                                        >
                                            Contactez-nous
                                        </motion.span>
                                    </div>
                                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display text-white tracking-tighter leading-[0.9]">
                                        <span className="block overflow-hidden">
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                                className="block"
                                            >
                                                PARLONS
                                            </motion.span>
                                        </span>
                                        <span className="block overflow-hidden">
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                                className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800"
                                            >
                                                FUTUR.
                                            </motion.span>
                                        </span>
                                    </h1>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="text-gray-400 max-w-md text-lg leading-relaxed md:text-right border-l-2 md:border-l-0 md:border-r-2 border-premium-green/30 pl-6 md:pl-0 md:pr-6"
                                >
                                    Vous avez une vision ambitieuse ? <br />
                                    Nous avons l'expertise pour la concrétiser. <br />
                                    <span className="text-white font-medium">Réponse garantie sous 24h.</span>
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                        {/* Left Column: Contact Details & Social Proof */}
                        <div className="lg:col-span-5 space-y-16">

                            {/* Contact Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="space-y-6"
                            >
                                <div className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-premium-green/30 hover:bg-white/[0.05] transition-all duration-500">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-premium-green/10 flex items-center justify-center text-premium-green border border-premium-green/20 group-hover:scale-110 transition-transform duration-500">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold font-display text-lg mb-1">Email Direct</h3>
                                            <p className="text-gray-400 text-sm mb-2">Pour les demandes commerciales</p>
                                            <a href="mailto:hello@osiris.com" className="text-white hover:text-premium-green transition-colors font-mono text-sm underline decoration-premium-green/30 hover:decoration-premium-green underline-offset-4">hello@osiris.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-premium-green/30 hover:bg-white/[0.05] transition-all duration-500">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-premium-green/10 flex items-center justify-center text-premium-green border border-premium-green/20 group-hover:scale-110 transition-transform duration-500">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold font-display text-lg mb-1">Disponibilité</h3>
                                            <p className="text-gray-400 text-sm mb-2">Support réactif et dédié</p>
                                            <p className="text-white font-mono text-sm">Lun - Ven : 09h - 18h</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 block">Réseaux Sociaux</span>
                                <div className="flex gap-4">
                                    {[
                                        { icon: Linkedin, href: "#" },
                                        { icon: Twitter, href: "#" },
                                        { icon: Instagram, href: "#" }
                                    ].map((social, i) => (
                                        <a key={i} href={social.href} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 hover:border-premium-green/50 transition-all duration-300">
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Interactive Form */}
                        <div className="lg:col-span-7 relative">
                            {/* Decorative Glow behind form */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-premium-green/10 via-transparent to-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
                            >
                                {/* Form content */}
                                <AnimatePresence mode="wait">
                                    {formStatus === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="min-h-[400px] flex flex-col items-center justify-center text-center"
                                        >
                                            <div className="w-24 h-24 bg-premium-green/10 rounded-full flex items-center justify-center text-premium-green mb-6 animate-[pulse_2s_infinite]">
                                                <CheckCircle2 className="w-12 h-12" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-white font-display mb-4">Message Envoyé !</h3>
                                            <p className="text-gray-400 mb-8 max-w-sm">Votre demande a bien été reçue. Notre équipe vous contactera dans les plus brefs délais.</p>
                                            <button
                                                onClick={() => setFormStatus('idle')}
                                                className="text-premium-green font-bold text-sm uppercase tracking-widest hover:text-white transition-colors"
                                            >
                                                Envoyer un autre message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-8"
                                        >
                                            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/5">
                                                <MessageSquare className="w-5 h-5 text-premium-green" />
                                                <h3 className="text-xl font-bold text-white font-display">Détails du Projet</h3>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-2 group">
                                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 group-focus-within:text-premium-green transition-colors">Nom complet</label>
                                                    <input required type="text" className="w-full bg-white/[0.03] border-b border-white/10 p-4 text-white focus:border-premium-green focus:outline-none focus:bg-white/[0.05] transition-all rounded-t-lg" placeholder="John Doe" />
                                                </div>
                                                <div className="space-y-2 group">
                                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 group-focus-within:text-premium-green transition-colors">Entreprise</label>
                                                    <input type="text" className="w-full bg-white/[0.03] border-b border-white/10 p-4 text-white focus:border-premium-green focus:outline-none focus:bg-white/[0.05] transition-all rounded-t-lg" placeholder="Studio Osiris" />
                                                </div>
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 group-focus-within:text-premium-green transition-colors">Email professionnel</label>
                                                <input required type="email" className="w-full bg-white/[0.03] border-b border-white/10 p-4 text-white focus:border-premium-green focus:outline-none focus:bg-white/[0.05] transition-all rounded-t-lg" placeholder="john@osiris.com" />
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 group-focus-within:text-premium-green transition-colors">Budget estimé</label>
                                                <div className="relative">
                                                    <select className="w-full bg-white/[0.03] border-b border-white/10 p-4 text-white focus:border-premium-green focus:outline-none focus:bg-white/[0.05] transition-all rounded-t-lg appearance-none cursor-pointer">
                                                        <option className="bg-zinc-900">Moins de 5k€</option>
                                                        <option className="bg-zinc-900">5k€ - 15k€</option>
                                                        <option className="bg-zinc-900">15k€ - 50k€</option>
                                                        <option className="bg-zinc-900">Plus de 50k€</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                        <ArrowRight className="w-4 h-4 text-gray-500 rotate-90" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 group-focus-within:text-premium-green transition-colors">Message</label>
                                                <textarea required rows={4} className="w-full bg-white/[0.03] border-b border-white/10 p-4 text-white focus:border-premium-green focus:outline-none focus:bg-white/[0.05] transition-all rounded-t-lg resize-none" placeholder="Décrivez votre projet..."></textarea>
                                            </div>

                                            <div className="pt-4">
                                                <MagneticButton className="w-full">
                                                    <button
                                                        type="submit"
                                                        disabled={formStatus === 'submitting'}
                                                        className="w-full bg-white text-black font-black py-5 uppercase tracking-[0.2em] hover:bg-premium-green transition-colors duration-300 flex items-center justify-center gap-3 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,133,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                                                    >
                                                        {formStatus === 'submitting' ? (
                                                            <span className="animate-pulse">Envoi en cours...</span>
                                                        ) : (
                                                            <>
                                                                Lancer le projet
                                                                <Send className="w-4 h-4" />
                                                            </>
                                                        )}
                                                    </button>
                                                </MagneticButton>
                                            </div>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
