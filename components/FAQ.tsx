import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full py-14 sm:py-20 px-4 sm:px-6 overflow-hidden bg-[#F0EDE6]">
            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mb-16"
                >
                    <span className="block text-[11px] font-medium tracking-[0.18em] text-[#1D1D1F]/35 uppercase mb-5">
                        {t.faq.sectionLabel}
                    </span>
                    <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#1D1D1F]">
                        {t.faq.title}
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {t.faq.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                            className="relative"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-6 rounded-2xl bg-white border border-[#D2D2D7] hover:border-[#1D1D1F]/15 transition-all duration-300 text-left group"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-base font-medium text-[#1D1D1F] pr-4 tracking-[-0.01em]">
                                        {item.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="flex-shrink-0 mt-0.5"
                                    >
                                        <ChevronDown className="w-4 h-4 text-[#1D1D1F]/35" strokeWidth={1.5} />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[#1D1D1F]/50 leading-relaxed mt-4 pt-4 border-t border-[#D2D2D7] font-light">
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

    </motion.section>
    );
};
