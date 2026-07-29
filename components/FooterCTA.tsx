import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FooterCTA: React.FC = () => {
    const { t } = useLanguage();

    const handleCTAClick = () => {
        // Scroll to audit section
        const auditSection = document.querySelector('#audit-section');
        if (auditSection) {
            auditSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative p-6 sm:p-12 md:p-16 rounded-2xl bg-white border border-[#D2D2D7] text-center"
                >
                    
                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F] mb-6">
                            {t.footerCta.title}
                        </h2>
                        <p className="text-lg sm:text-xl text-[#1D1D1F]/50 max-w-2xl mx-auto mb-10">
                            {t.footerCta.subtitle}
                        </p>

                        {/* CTA Button */}
                        <motion.button
                            onClick={handleCTAClick}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-[#1D1D1F] text-white font-medium text-base hover:bg-[#2D2D2F] transition-all duration-300 group mb-8 w-full sm:w-auto justify-center"
                        >
                            {t.footerCta.cta}
                        </motion.button>

                        {/* Badge */}
                        <div className="flex items-center justify-center gap-2 text-[#1D1D1F]/40 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-premium-green" />
                            <span>{t.footerCta.badge}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Decoration removed for clean Apple look */}
        </section>
    );
