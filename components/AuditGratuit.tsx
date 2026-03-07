import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Search, Palette, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
    zap: Zap,
    search: Search,
    palette: Palette,
    target: Target,
};

export const AuditGratuit: React.FC = () => {
    const { t } = useLanguage();
    const [message, setMessage] = useState(t.audit.textareaDefault);

    const handleWhatsApp = () => {
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/${t.audit.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            id="audit-gratuit"
            className="relative w-full py-[70px] sm:py-[120px] px-4 sm:px-6 overflow-hidden scroll-mt-20"
        >
            {/* Fond distinctif */}
            <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-[#060f0a] to-premium-black pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,133,0.06)_0%,transparent_65%)] pointer-events-none" />

            <div className="container mx-auto max-w-[800px] relative z-10">

                {/* === BLOC 1 : ACCROCHE === */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-6"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-premium-green/10 border border-premium-green/30 text-premium-green text-xs font-bold uppercase tracking-widest">
                        {t.audit.sectionLabel}
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white text-center mb-4"
                >
                    {t.audit.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-base sm:text-lg text-white/65 text-center max-w-xl mx-auto mb-4"
                >
                    {t.audit.subtitle}
                </motion.p>

                {/* Stats de réassurance */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xs sm:text-sm text-white/40 text-center tracking-wide mb-14"
                >
                    {t.audit.stats}
                </motion.p>

                {/* === BLOC 2 : 4 CARDS === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
                    {t.audit.pillars.map((pillar, index) => {
                        const Icon = iconMap[pillar.icon] ?? Zap;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.09 }}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-premium-green/25 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-premium-green/10 border border-premium-green/20 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-premium-green" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap mb-1">
                                        <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                                        {pillar.tag && (
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-premium-green/10 text-premium-green border border-premium-green/20">
                                                {pillar.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-white/55 leading-relaxed">{pillar.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* === BLOC 3 : PROCESSUS 3 ÉTAPES === */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-14"
                >
                    <p className="text-xs font-bold uppercase tracking-widest text-white/35 text-center mb-8">
                        {t.audit.processTitle}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
                        {t.audit.processSteps.map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="flex flex-col items-center text-center sm:flex-1">
                                    <span className="text-3xl font-black font-display text-premium-green/30 leading-none mb-2">
                                        {step.num}
                                    </span>
                                    <p className="text-sm text-white/70 font-medium max-w-[140px]">{step.text}</p>
                                </div>
                                {i < t.audit.processSteps.length - 1 && (
                                    <div className="hidden sm:block w-16 border-t border-dashed border-white/15 mx-4 shrink-0" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                {/* === BLOC 4 : TEXTAREA + BOUTON WHATSAPP === */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 mb-10"
                >
                    <label className="block text-sm text-white/60 mb-3 font-medium">
                        {t.audit.textareaLabel}
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.audit.textareaPlaceholder}
                        rows={4}
                        className="w-full min-h-[120px] bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/25 focus:outline-none focus:border-premium-green/40 focus:bg-white/[0.06] transition-all duration-300 resize-none mb-5"
                    />
                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={handleWhatsApp}
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-[18px] rounded-full bg-premium-green text-premium-black font-bold text-base sm:text-lg hover:bg-premium-green/90 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,255,133,0.35)]"
                        >
                            {t.audit.whatsappCtaDynamic}
                        </button>
                        <p className="text-xs sm:text-sm text-white/40 text-center tracking-wide">
                            {t.audit.reassurance}
                        </p>
                    </div>
                </motion.div>

                {/* Transition vers la section Contact */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-white/30 text-center tracking-wide"
                >
                    {t.audit.transitionText}
                </motion.p>
            </div>
        </section>
    );
};
