import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Search, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Performance: React.FC = () => {
    const { t } = useLanguage();

    const cards = [
        {
            icon: Zap,
            title: t.performance.cards.speed.title,
            description: t.performance.cards.speed.description,
            gradient: 'from-blue-500/20 via-blue-500/5 to-transparent'
        },
        {
            icon: Search,
            title: t.performance.cards.seo.title,
            description: t.performance.cards.seo.description,
            gradient: 'from-premium-green/20 via-premium-green/5 to-transparent'
        },
        {
            icon: Target,
            title: t.performance.cards.conversion.title,
            description: t.performance.cards.conversion.description,
            gradient: 'from-purple-500/20 via-purple-500/5 to-transparent'
        }
    ];

    return (
        <motion.section
            className="relative w-full py-14 sm:py-20 px-4 sm:px-6 overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mb-16"
                >
                    <span className="block text-[11px] font-medium tracking-[0.18em] text-[#1D1D1F]/35 uppercase mb-5">
                        {t.performance.sectionLabel}
                    </span>
                    <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#1D1D1F] mb-6">
                        {t.performance.title}
                    </h2>
                    <p className="text-lg text-[#1D1D1F]/45 max-w-3xl mx-auto font-light">
                        {t.performance.subtitle}
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid responsive-card-grid gap-6 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                >
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } } }}
                                className="group"
                            >
                                <div className="p-8 rounded-2xl bg-white border border-[#D2D2D7] hover:border-[#1D1D1F]/15 transition-all duration-300 h-full">
                                    <Icon className="w-6 h-6 text-[#1D1D1F]/35 mb-6" strokeWidth={1.5} />
                                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-4 tracking-[-0.02em]">
                                        {card.title}
                                    </h3>
                                    <p className="text-[#1D1D1F]/50 leading-relaxed font-light">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center"
                >
                    <p className="inline-block px-5 py-2.5 rounded-full bg-[#F5F5F7] border border-[#D2D2D7] text-[#1D1D1F]/50 text-sm font-medium">
                        {t.performance.badge}
                    </p>
                </motion.div>
            </div>


        </motion.section>
    );
};
