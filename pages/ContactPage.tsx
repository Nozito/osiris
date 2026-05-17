import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, ArrowRight, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
    const { t, language } = useLanguage();
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [budgetSel, setBudgetSel] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formStatus === 'submitting') return;
        setFormStatus('submitting');

        const fd = new FormData(e.currentTarget);
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type:    'contact',
                    name:    fd.get('name')    as string,
                    company: fd.get('company') as string,
                    email:   fd.get('email')   as string,
                    budget:  fd.get('budget')  as string,
                    message: fd.get('message') as string,
                }),
            });
            if (!res.ok) throw new Error('send failed');
            setFormStatus('success');
        } catch {
            setFormStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#0B0B0B] selection:bg-premium-green selection:text-white overflow-hidden font-sans">
            <SEOHead
                title={language === 'fr'
                    ? 'Contact - Osiris | Agence Web Premium'
                    : 'Contact - Osiris | Premium Web Agency'}
                description={language === 'fr'
                    ? 'Contactez Osiris Agency à Manosque (04100) pour votre projet web. Devis gratuit sous 24h. Agence web Alpes-de-Haute-Provence spécialisée en sites vitrines premium.'
                    : 'Contact Osiris Agency in Manosque for your web project. Free quote within 24h. Premium web agency specialising in high-performance showcase websites.'}
                canonical="https://osiris-agency.fr/contact"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://osiris-agency.fr/" },
                        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://osiris-agency.fr/contact" }
                    ]
                }}
            />

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-premium-green/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/8 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-6">
                <div className="container mx-auto max-w-5xl">

                    {/* Compact Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8 sm:mb-10"
                    >
                        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-5 text-xs font-mono uppercase tracking-widest group">
                            <ArrowRight className="w-3 h-3 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
                            {t.common.backToHome}
                        </Link>

                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-premium-green/30 bg-premium-green/10">
                                    <span className="w-1.5 h-1.5 rounded-full bg-premium-green animate-pulse" />
                                    <span className="text-premium-green text-[10px] font-black uppercase tracking-[0.2em]">{t.contactPage.sectionLabel}</span>
                                </div>
                                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
                                    {t.contactPage.title}
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 mt-1">
                                        {t.contactPage.titleFaded}
                                    </span>
                                </h1>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed sm:text-right sm:max-w-xs border-l-2 sm:border-l-0 sm:border-r-2 border-premium-green/30 pl-3 sm:pl-0 sm:pr-4 text-xs sm:text-sm">
                                {t.contactPage.subtitle}<br />
                                <span className="text-white font-medium">{t.contactPage.subtitleHighlight}</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

                        {/* Left: Info Cards — order-2 on mobile (form first) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="lg:col-span-2 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-1 gap-3 lg:flex lg:flex-col lg:gap-4"
                        >
                            {/* Email + Disponibilité side by side on mobile */}
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
                                <div className="group p-4 lg:p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-premium-green/30 hover:bg-white/[0.05] transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row items-start gap-3 lg:gap-4">
                                        <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-premium-green/10 flex items-center justify-center text-premium-green border border-premium-green/20 group-hover:scale-110 group-hover:bg-premium-green/15 transition-all duration-300 flex-shrink-0">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-0.5">{t.contactPage.emailDesc}</p>
                                            <h3 className="text-white font-bold text-xs sm:text-sm truncate">
                                                <a href="mailto:contact@osiris-agency.fr" className="hover:text-premium-green transition-colors">{t.contactPage.emailTitle}</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="group p-4 lg:p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-premium-green/30 hover:bg-white/[0.05] transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row items-start gap-3 lg:gap-4">
                                        <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-premium-green/10 flex items-center justify-center text-premium-green border border-premium-green/20 group-hover:scale-110 group-hover:bg-premium-green/15 transition-all duration-300 flex-shrink-0">
                                            <Clock className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-0.5">{t.contactPage.availabilityDesc}</p>
                                            <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5">{t.contactPage.availabilityTitle}</h3>
                                            <p className="text-white font-mono text-[10px] sm:text-xs">{t.contactPage.availabilityHours}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust badge */}
                            <div className="p-4 sm:p-5 rounded-2xl border border-premium-green/25 bg-gradient-to-br from-premium-green/8 via-premium-green/4 to-transparent relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-green/40 to-transparent" />
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-premium-green/15 flex items-center justify-center text-premium-green flex-shrink-0 mt-0.5 border border-premium-green/20">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-white text-sm font-bold block mb-1">{language === 'fr' ? 'Réponse garantie sous 24h' : 'Reply guaranteed within 24h'}</span>
                                        <p className="text-gray-400 text-xs leading-relaxed">
                                            {language === 'fr'
                                                ? 'Pas de formulaire oublié. Vous parlez directement à Antoine ou Noah.'
                                                : 'No forgotten form. You speak directly with Antoine or Noah.'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                                <iframe
                                    title="Osiris Agency — Manosque, Alpes-de-Haute-Provence"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56210205.017539255!2d-127.86400119999998!3d30.695940900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cbcd6b1128c6e3%3A0x89b8b52ebf05f8b5!2sOsiris%20Agency!5e0!3m2!1sfr!2sfr!4v1778954394063!5m2!1sfr!2sfr"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </motion.div>

                        {/* Right: Form — order-1 on mobile (appears first) */}
                        <div className="lg:col-span-3 relative order-1 lg:order-2">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-premium-green/8 via-transparent to-blue-500/8 blur-[60px] rounded-full pointer-events-none" />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 overflow-hidden"
                            >
                                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />

                                <AnimatePresence mode="wait">
                                    {formStatus === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="min-h-[320px] flex flex-col items-center justify-center text-center"
                                        >
                                            <div className="w-16 h-16 bg-premium-green/10 rounded-full flex items-center justify-center text-premium-green mb-5 shadow-[0_0_25px_rgba(37,99,235,0.2)]">
                                                <CheckCircle2 className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white font-display mb-2">{t.contactPage.successTitle}</h3>
                                            <p className="text-gray-400 mb-7 max-w-xs text-sm font-light leading-relaxed">{t.contactPage.successMessage}</p>
                                            <button
                                                onClick={() => setFormStatus('idle')}
                                                className="px-6 py-2.5 rounded-full border border-premium-green/30 text-premium-green font-bold text-xs uppercase tracking-widest hover:bg-premium-green hover:text-white transition-all duration-300"
                                            >
                                                {t.contactPage.sendAnother}
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            onSubmit={handleSubmit}
                                            className="contact-form space-y-4"
                                        >
                                            {/* Form header */}
                                            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/8">
                                                <div className="w-8 h-8 rounded-lg bg-premium-green/10 flex items-center justify-center text-premium-green">
                                                    <MessageSquare className="w-4 h-4" />
                                                </div>
                                                <h3 className="text-base font-bold text-white font-display uppercase tracking-wider">{t.contactPage.formTitle}</h3>
                                            </div>

                                            {/* Name + Company row */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-1.5 group">
                                                    <label htmlFor="cp-name" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block group-focus-within:text-premium-green transition-colors duration-200">{t.contactPage.labelName}</label>
                                                    <input
                                                        id="cp-name" name="name" required type="text"
                                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder-gray-600 focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none transition-all duration-200 font-medium"
                                                        placeholder="Ex: John Doe"
                                                    />
                                                </div>
                                                <div className="space-y-1.5 group">
                                                    <label htmlFor="cp-company" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block group-focus-within:text-premium-green transition-colors duration-200">{t.contactPage.labelCompany}</label>
                                                    <input
                                                        id="cp-company" name="company" type="text"
                                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder-gray-600 focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none transition-all duration-200 font-medium"
                                                        placeholder="Ex: Studio Osiris"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-1.5 group">
                                                <label htmlFor="cp-email" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block group-focus-within:text-premium-green transition-colors duration-200">{t.contactPage.labelEmail}</label>
                                                <div className="relative">
                                                    <input
                                                        id="cp-email" name="email" required type="email"
                                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 pr-10 text-white text-sm placeholder-gray-600 focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none transition-all duration-200 font-medium"
                                                        placeholder="Ex: john@osiris.com"
                                                    />
                                                    <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-600 group-focus-within:text-premium-green transition-colors duration-200" />
                                                </div>
                                            </div>

                                            {/* Budget */}
                                            <div className="space-y-1.5 group">
                                                <label htmlFor="cp-budget" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block group-focus-within:text-premium-green transition-colors duration-200">{t.contactPage.labelBudget}</label>
                                                <div className="relative">
                                                    <select
                                                        id="cp-budget" aria-label="Budget"
                                                        value={budgetSel}
                                                        onChange={e => setBudgetSel(e.target.value)}
                                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none transition-all duration-200 font-medium appearance-none cursor-pointer"
                                                    >
                                                        {t.contactPage.budgetOptions.map((option: string, i: number) => (
                                                            <option key={i} value={i < 3 ? option : 'custom'} className="bg-[#111] text-gray-200">{option}</option>
                                                        ))}
                                                    </select>
                                                    <ArrowRight className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 rotate-90 pointer-events-none" />
                                                </div>
                                                {budgetSel === 'custom' ? (
                                                    <input
                                                        name="budget"
                                                        type="text"
                                                        placeholder={t.contactPage.budgetCustomPlaceholder}
                                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder-gray-600 focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none transition-all duration-200 font-medium"
                                                    />
                                                ) : (
                                                    <input type="hidden" name="budget" value={budgetSel || t.contactPage.budgetOptions[0]} />
                                                )}
                                            </div>

                                            {/* Message */}
                                            <div className="space-y-1.5 group">
                                                <label htmlFor="cp-message" className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block group-focus-within:text-premium-green transition-colors duration-200">{t.contactPage.labelMessage}</label>
                                                <textarea
                                                    id="cp-message" name="message" required rows={4}
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 text-white text-sm placeholder-gray-600 focus:border-premium-green/50 focus:bg-white/[0.05] focus:outline-none transition-all duration-200 font-medium resize-none leading-relaxed"
                                                    placeholder={t.contactPage.messagePlaceholder}
                                                />
                                            </div>

                                            {formStatus === 'error' && (
                                                <p className="text-red-400 text-xs text-center pt-1">Une erreur est survenue — réessayez ou écrivez-nous directement.</p>
                                            )}

                                            {/* Submit */}
                                            <div className="pt-2">
                                                <button
                                                    type="submit"
                                                    disabled={formStatus === 'submitting'}
                                                    className="w-full bg-premium-green text-white font-black py-3.5 uppercase tracking-[0.15em] text-sm hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2.5 rounded-xl shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                    {formStatus === 'submitting' ? (
                                                        <span className="animate-pulse flex items-center gap-2">
                                                            {t.contactPage.submitting}
                                                            <span className="flex gap-1">
                                                                <span className="w-1 h-1 bg-white/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                                <span className="w-1 h-1 bg-white/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                                <span className="w-1 h-1 bg-white/60 rounded-full animate-bounce" />
                                                            </span>
                                                        </span>
                                                    ) : (
                                                        <>
                                                            {t.contactPage.submitButton}
                                                            <Send className="w-3.5 h-3.5" />
                                                        </>
                                                    )}
                                                </button>
                                                <p className="text-center text-gray-600 text-[9px] mt-3 uppercase tracking-widest">
                                                    {t.contactPage.spamProtection || "Protected by ReCAPTCHA"}
                                                </p>
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
