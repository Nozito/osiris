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
        <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-premium-green/10 border border-premium-green/20 text-premium-green text-sm font-medium mb-6">
                        {t.performance.sectionLabel}
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        {t.performance.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
                        {t.performance.subtitle}
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* Card Background */}
                                <div className="relative p-8 rounded-2xl bg-premium-black/40 backdrop-blur-sm border border-white/10 hover:border-premium-green/30 transition-all duration-300 h-full">
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-14 h-14 rounded-xl bg-premium-green/10 border border-premium-green/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-7 h-7 text-premium-green" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-4">
                                            {card.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/70 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="inline-block px-6 py-3 rounded-full bg-premium-green/5 border border-premium-green/10 text-premium-green text-sm font-medium">
                        {t.performance.badge}
                    </p>
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-premium-green/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};
