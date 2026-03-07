import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 overflow-hidden bg-premium-black/20">
            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6">
                        {t.faq.sectionLabel}
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                        {t.faq.title}
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {t.faq.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-6 rounded-2xl bg-premium-black/40 backdrop-blur-sm border border-white/10 hover:border-premium-green/30 transition-all duration-300 text-left"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-lg font-bold text-white pr-4">
                                        {item.question}
                                    </h3>
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-premium-green/10 border border-premium-green/20 flex items-center justify-center">
                                        {openIndex === index ? (
                                            <Minus className="w-4 h-4 text-premium-green" />
                                        ) : (
                                            <Plus className="w-4 h-4 text-premium-green" />
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-white/70 leading-relaxed mt-4 pt-4 border-t border-white/5">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-premium-green/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};
