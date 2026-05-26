import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DesignPremium: React.FC = () => {
    const { t } = useLanguage();

    const cards = [
        {
            icon: Palette,
            title: t.designPremium.cards.uiux.title,
            description: t.designPremium.cards.uiux.description,
            gradient: 'from-purple-500/20 via-purple-500/5 to-transparent'
        },
        {
            icon: Eye,
            title: t.designPremium.cards.identity.title,
            description: t.designPremium.cards.identity.description,
            gradient: 'from-pink-500/20 via-pink-500/5 to-transparent'
        },
        {
            icon: Sparkles,
            title: t.designPremium.cards.experience.title,
            description: t.designPremium.cards.experience.description,
            gradient: 'from-premium-green/20 via-premium-green/5 to-transparent'
        }
    ];

    return (
        <motion.section
            className="relative w-full py-14 sm:py-20 px-4 sm:px-6 overflow-hidden bg-[#F0EDE6]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                        {t.designPremium.sectionLabel}
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold italic tracking-tight text-[#0F1729] mb-6">
                        {t.designPremium.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-[#0F1729]/55 max-w-3xl mx-auto">
                        {t.designPremium.subtitle}
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid responsive-card-grid gap-6 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                                className="group relative"
                            >
                                {/* Card Background */}
                                <div className="relative p-8 rounded-2xl bg-white border border-[#E8E3D9] hover:border-purple-500/30 transition-all duration-300 h-full">
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-purple-400" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-[#0F1729] mb-4">
                                            {card.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[#0F1729]/55 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="inline-block px-6 py-3 rounded-full bg-purple-500/5 border border-purple-500/10 text-purple-400 text-sm font-medium">
                        {t.designPremium.badge}
                    </p>
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        </motion.section>
    );
};
