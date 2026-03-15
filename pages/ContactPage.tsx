import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, ArrowRight, MessageSquare, Clock, CheckCircle2, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
    const { t, language } = useLanguage();
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
            <SEOHead
                title={language === 'fr'
                    ? 'Contact - Osiris | Agence Web Premium'
                    : 'Contact - Osiris | Premium Web Agency'}
                description={language === 'fr'
                    ? 'Contactez Osiris pour votre projet web. Devis gratuit sous 24h. Cr\u00e9ation de sites vitrines haute performance, landing pages et design UI/UX sur-mesure.'
                    : 'Contact Osiris for your web project. Free quote within 24h. High-performance showcase websites, landing pages and custom UI/UX design.'}
                canonical="https://osiris-web.com/contact"
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
                            "name": "Contact",
                            "item": "https://osiris-web.com/contact"
                        }
                    ]
                }}
            />

            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-premium-green/5 blur-[150px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 blur-[150px] rounded-full"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02)_0%,transparent_60%)]"></div>
            </div>

            <div className="relative z-10 pt-24 sm:pt-28 pb-14 sm:pb-16 px-5 sm:px-6">
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
                                {t.common.backToHome}
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
                                            {t.contactPage.sectionLabel}
                                        </motion.span>
                                    </div>
                                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display text-white tracking-tighter leading-none">
                                        <span className="block overflow-hidden pb-4 pr-4 -mr-4">
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                                className="block"
                                            >
                                                {t.contactPage.title}
                                            </motion.span>
                                        </span>
                                        <span className="block overflow-hidden pb-2 -mt-2 md:-mt-4">
                                            <motion.span
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                                className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800"
                                            >
                                                {t.contactPage.titleFaded}
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
                                    {t.contactPage.subtitle} <br />
                                    {t.contactPage.subtitleLine2} <br />
                                    <span className="text-white font-medium">{t.contactPage.subtitleHighlight}</span>
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
                                            <h3 className="text-white font-bold font-display text-lg mb-1">
                                                <a href="mailto:contact@osiris-agency.fr" className="hover:text-premium-green transition-colors">{t.contactPage.emailTitle}</a>
                                            </h3>
                                            <p className="text-gray-400 text-sm">{t.contactPage.emailDesc}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-premium-green/30 hover:bg-white/[0.05] transition-all duration-500">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-premium-green/10 flex items-center justify-center text-premium-green border border-premium-green/20 group-hover:scale-110 transition-transform duration-500">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold font-display text-lg mb-1">{t.contactPage.availabilityTitle}</h3>
                                            <p className="text-gray-400 text-sm mb-2">{t.contactPage.availabilityDesc}</p>
                                            <p className="text-white font-mono text-sm">{t.contactPage.availabilityHours}</p>
                                        </div>
                                    </div>
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
                                className="relative bg-[#080808]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-12 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
                            >
                                {/* Subtle inner border gradient */}
                                <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none"></div>

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
                                            <div className="w-24 h-24 bg-premium-green/10 rounded-full flex items-center justify-center text-premium-green mb-8 animate-[pulse_2s_infinite] shadow-[0_0_30px_rgba(0,255,133,0.2)]">
                                                <CheckCircle2 className="w-12 h-12" />
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">{t.contactPage.successTitle}</h3>
                                            <p className="text-gray-400 mb-10 max-w-sm text-lg font-light leading-relaxed">{t.contactPage.successMessage}</p>
                                            <button
                                                onClick={() => setFormStatus('idle')}
                                                className="px-8 py-3 rounded-full border border-premium-green/30 text-premium-green font-bold text-xs uppercase tracking-widest hover:bg-premium-green hover:text-black transition-all duration-300"
                                            >
                                                {t.contactPage.sendAnother}
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            onSubmit={handleSubmit}
                                            className="contact-form space-y-8"
                                        >
                                            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-white/5">
                                                <div className="w-10 h-10 rounded-full bg-premium-green/10 flex items-center justify-center text-premium-green shadow-[0_0_15px_rgba(0,255,133,0.2)]">
                                                    <MessageSquare className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide">{t.contactPage.formTitle}</h3>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                                <div className="space-y-2 group relative">
                                                    <label htmlFor="cp-name" className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-1 block group-focus-within:text-premium-green transition-colors duration-300">{t.contactPage.labelName}</label>
                                                    <div className="relative">
                                                        <input id="cp-name" required type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,133,0.05)] transition-all duration-300 text-sm md:text-base font-medium" placeholder="Ex: John Doe" />
                                                        <div className="absolute inset-0 rounded-xl border border-transparent group-focus-within:border-premium-green/20 pointer-events-none transition-all duration-500 scale-105 opacity-0 group-focus-within:opacity-100 group-focus-within:scale-100"></div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2 group relative">
                                                    <label htmlFor="cp-company" className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-1 block group-focus-within:text-premium-green transition-colors duration-300">{t.contactPage.labelCompany}</label>
                                                    <div className="relative">
                                                        <input id="cp-company" type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,133,0.05)] transition-all duration-300 text-sm md:text-base font-medium" placeholder="Ex: Studio Osiris" />
                                                        <div className="absolute inset-0 rounded-xl border border-transparent group-focus-within:border-premium-green/20 pointer-events-none transition-all duration-500 scale-105 opacity-0 group-focus-within:opacity-100 group-focus-within:scale-100"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2 group relative">
                                                <label htmlFor="cp-email" className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-1 block group-focus-within:text-premium-green transition-colors duration-300">{t.contactPage.labelEmail}</label>
                                                <div className="relative">
                                                    <input id="cp-email" required type="email" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,133,0.05)] transition-all duration-300 text-sm md:text-base font-medium" placeholder="Ex: john@osiris.com" />
                                                    <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-premium-green transition-colors duration-300" />
                                                </div>
                                            </div>

                                            <div className="space-y-2 group relative">
                                                <label htmlFor="cp-budget" className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-1 block group-focus-within:text-premium-green transition-colors duration-300">{t.contactPage.labelBudget}</label>
                                                <div className="relative">
                                                    <select id="cp-budget" aria-label="Budget" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,133,0.05)] transition-all duration-300 text-sm md:text-base font-medium appearance-none cursor-pointer">
                                                        {t.contactPage.budgetOptions.map((option: string, i: number) => (
                                                            <option key={i} className="bg-[#111] text-gray-200 py-2">{option}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180">
                                                        <ArrowRight className="w-4 h-4 text-gray-500 rotate-90" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2 group relative">
                                                <label htmlFor="cp-message" className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-1 block group-focus-within:text-premium-green transition-colors duration-300">{t.contactPage.labelMessage}</label>
                                                <div className="relative">
                                                    <textarea id="cp-message" required rows={5} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,133,0.05)] transition-all duration-300 text-sm md:text-base font-medium resize-none leading-relaxed" placeholder={t.contactPage.messagePlaceholder}></textarea>
                                                    <div className="absolute inset-0 rounded-xl border border-transparent group-focus-within:border-premium-green/20 pointer-events-none transition-all duration-500 scale-105 opacity-0 group-focus-within:opacity-100 group-focus-within:scale-100"></div>
                                                </div>
                                            </div>

                                            <div className="pt-6">
                                                <button
                                                    type="submit"
                                                    disabled={formStatus === 'submitting'}
                                                    className="btn-reserve w-full bg-white text-black font-black py-5 uppercase tracking-[0.2em] hover:bg-premium-green transition-colors duration-300 flex items-center justify-center gap-3 rounded-xl shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                    {formStatus === 'submitting' ? (
                                                        <span className="animate-pulse flex items-center gap-2">
                                                            {t.contactPage.submitting}
                                                            <span className="flex gap-1">
                                                                <span className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                                <span className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                                <span className="w-1 h-1 bg-black rounded-full animate-bounce"></span>
                                                            </span>
                                                        </span>
                                                    ) : (
                                                        <>
                                                            {t.contactPage.submitButton}
                                                            <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                        </>
                                                    )}
                                                </button>
                                                <p className="text-center text-gray-600 text-[10px] mt-4 uppercase tracking-widest">{t.contactPage.spamProtection || "Protected by ReCAPTCHA"}</p>
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
