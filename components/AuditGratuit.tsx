import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Search, Palette, Target, MessageCircle, PhoneCall, Send, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
    zap: Zap,
    search: Search,
    palette: Palette,
    target: Target,
};

// Step icons for the process timeline
const stepIcons = [Send, Clock, FileText, MessageCircle];

export const AuditGratuit: React.FC = () => {
    const { t } = useLanguage();
    const [message, setMessage] = useState(t.audit.textareaDefault);

    // Refs for the process section scroll animation
    const processRef = useRef<HTMLDivElement>(null);
    const isProcessInView = useInView(processRef, { once: true, margin: '-80px' });

    const handleWhatsApp = () => {
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/${t.audit.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    };

    const allSteps = [
        ...t.audit.processSteps,
        { num: '📲', text: 'WhatsApp' }
    ];

    return (
        <section
            id="audit"
            className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-6 overflow-hidden scroll-mt-28"
        >
            <span id="audit-gratuit" className="absolute -top-24" aria-hidden="true" />

            {/* Background */}
            <div className="absolute inset-0 bg-[#111318] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(37,99,235,0.07)_0%,transparent_100%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* === HEADER === */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-premium-green/10 border border-premium-green/30 text-premium-green text-xs font-bold uppercase tracking-widest mb-5">
                        {t.audit.sectionLabel}
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 leading-[1.05]">
                        {t.audit.title}
                    </h2>
                </motion.div>

                {/* === TWO-COLUMN LAYOUT: pillars + CTA === */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 sm:mb-24 items-start">

                    {/* LEFT: 4 pillar cards — styled like Process cards */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {t.audit.pillars.map((pillar, index) => {
                            const Icon = iconMap[pillar.icon] ?? Zap;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    className="group relative"
                                >
                                    <div className="border-spin-anim bg-gradient-to-br from-white/[0.07] to-white/[0.01] backdrop-blur-sm border border-white/10 p-4 sm:p-5 rounded-2xl hover:bg-white/[0.08] hover:border-premium-green/40 hover:-translate-y-1 hover:shadow-[0_0_40px_-15px_rgba(37,99,235,0.2)] transition-all duration-300 h-full flex flex-col justify-between">
                                        {/* Header Row */}
                                        <div className="flex items-center gap-2 sm:gap-3 mb-3">
                                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:text-premium-green group-hover:bg-premium-green/10 group-hover:border-premium-green/50 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                                                <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-premium-green" />
                                            </div>
                                            {pillar.tag && (
                                                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-premium-green/10 text-premium-green border border-premium-green/20 uppercase tracking-wider">
                                                    {pillar.tag}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-premium-green transition-colors leading-tight">{pillar.title}</h3>
                                            <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed group-hover:text-white/60 transition-colors">{pillar.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT: Textarea + WhatsApp CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col"
                    >
                        <label className="block text-sm font-semibold text-white/70 mb-3">
                            {t.audit.textareaLabel}
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={t.audit.textareaPlaceholder}
                            rows={5}
                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/25 focus:outline-none focus:border-premium-green/40 focus:bg-white/[0.06] transition-all duration-300 resize-none mb-6 scrollbar-hide"
                        />
                        <div className="flex flex-col gap-3 items-center">
                            <button
                                onClick={handleWhatsApp}
                                className="btn-whatsapp group w-full justify-center"
                            >
                                <MessageCircle className="btn-icon" />
                                Envoyer sur WhatsApp
                            </button>
                            <Link
                                to="/contact"
                                className="btn-reserve w-full justify-center bg-white/[0.05] text-white border border-white/10 hover:bg-white/10 hover:border-white/25"
                            >
                                <PhoneCall className="btn-icon" />
                                Réserver mon appel
                            </Link>
                        </div>
                        <p className="text-xs text-white/35 text-center mt-5 tracking-wide">
                            {t.audit.reassurance}
                        </p>
                    </motion.div>
                </div>

                {/* === PROCESSUS : Comment ça marche ? — Animated timeline === */}
                <motion.div
                    ref={processRef}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Section label */}
                    <div className="text-center mb-10 sm:mb-14">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/35 block mb-4">
                            {t.audit.processTitle}
                        </span>
                        <p className="text-white font-semibold text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-3">
                            {t.audit.subtitle}
                        </p>
                        <p className="text-white font-bold text-xs sm:text-sm tracking-widest uppercase">
                            {t.audit.stats}
                        </p>
                    </div>

                    {/* Progress bar + steps */}
                    <div className="relative max-w-3xl mx-auto">

                        {/* === DESKTOP: flex row with per-segment connectors === */}
                        <div className="hidden sm:flex items-start justify-center">
                            {allSteps.map((step, i) => {
                                const StepIcon = i === allSteps.length - 1 ? MessageCircle : stepIcons[i];
                                const isLast = i === allSteps.length - 1;
                                const nodeDelay = 0.4 + i * 0.35;
                                const barDelay = nodeDelay + 0.25;

                                return (
                                    <React.Fragment key={i}>
                                        {/* Step node */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.45, delay: nodeDelay }}
                                            className="flex flex-col items-center text-center gap-3 flex-none w-[22%]"
                                        >
                                            <motion.div
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={isProcessInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                                                transition={{ duration: 0.4, delay: nodeDelay + 0.1, type: 'spring', stiffness: 200 }}
                                                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center z-10 transition-all duration-300 ${
                                                    isLast
                                                        ? 'bg-[#25D366] shadow-[0_0_24px_rgba(37,211,102,0.35)]'
                                                        : 'bg-premium-green/15 border border-premium-green/30 shadow-[0_0_20px_rgba(37,99,235,0.15)]'
                                                }`}
                                            >
                                                {isLast ? (
                                                    <StepIcon className="w-6 h-6 text-white" />
                                                ) : (
                                                    <>
                                                        <StepIcon className="w-5 h-5 text-premium-green" />
                                                        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-premium-green text-white text-[9px] font-black flex items-center justify-center leading-none">
                                                            {step.num}
                                                        </span>
                                                    </>
                                                )}
                                            </motion.div>
                                            <p className={`text-xs sm:text-sm font-medium leading-snug max-w-[120px] ${
                                                isLast ? 'text-[#25D366] font-bold' : 'text-white/70'
                                            }`}>
                                                {isLast ? 'Tu reçois ton audit via WhatsApp' : step.text}
                                            </p>
                                        </motion.div>

                                        {/* Connector segment (between nodes only) */}
                                        {!isLast && (
                                            <div className="grow mt-7 mx-2 h-[2px] bg-white/[0.07] rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`h-full rounded-full ${
                                                        i === allSteps.length - 2
                                                            ? 'bg-gradient-to-r from-premium-green to-[#25D366]'
                                                            : 'bg-premium-green'
                                                    }`}
                                                    initial={{ width: '0%' }}
                                                    animate={isProcessInView ? { width: '100%' } : { width: '0%' }}
                                                    transition={{ duration: 0.5, ease: 'easeInOut', delay: barDelay }}
                                                />
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>

                        {/* === MOBILE: 2x2 grid, no connectors === */}
                        <div className="sm:hidden grid grid-cols-2 gap-6">
                            {allSteps.map((step, i) => {
                                const StepIcon = i === allSteps.length - 1 ? MessageCircle : stepIcons[i];
                                const isLast = i === allSteps.length - 1;
                                const delay = 0.4 + i * 0.28;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.45, delay }}
                                        className="flex flex-col items-center text-center gap-3"
                                    >
                                        <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ${
                                            isLast ? 'bg-[#25D366] shadow-[0_0_24px_rgba(37,211,102,0.35)]' : 'bg-premium-green/15 border border-premium-green/30'
                                        }`}>
                                            {isLast ? (
                                                <StepIcon className="w-6 h-6 text-white" />
                                            ) : (
                                                <>
                                                    <StepIcon className="w-5 h-5 text-premium-green" />
                                                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-premium-green text-white text-[9px] font-black flex items-center justify-center leading-none">{step.num}</span>
                                                </>
                                            )}
                                        </div>
                                        <p className={`text-xs font-medium leading-snug max-w-[130px] ${
                                            isLast ? 'text-[#25D366] font-bold' : 'text-white/70'
                                        }`}>
                                            {isLast ? 'Tu reçois ton audit via WhatsApp' : step.text}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA under process */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        className="flex justify-center mt-10 sm:mt-12"
                    >
                        <button
                            onClick={handleWhatsApp}
                            className="btn-whatsapp"
                        >
                            <MessageCircle className="btn-icon" />
                            Démarrer mon audit gratuit →
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};
