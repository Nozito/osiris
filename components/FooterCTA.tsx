import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
                    className="relative p-6 sm:p-12 md:p-16 rounded-3xl bg-[#1B202B] border border-[#2A3140] text-center"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-premium-green/8 to-premium-purple/8 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            {t.footerCta.title}
                        </h2>
                        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
                            {t.footerCta.subtitle}
                        </p>

                        {/* CTA Button */}
                        <motion.button
                            onClick={handleCTAClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 rounded-xl bg-premium-green text-white font-bold text-base sm:text-lg hover:bg-blue-600 transition-all duration-300 shadow-[0_4px_16px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_24px_rgba(59,130,246,0.45)] group mb-8 w-full sm:w-auto justify-center"
                        >
                            {t.footerCta.cta}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        {/* Badge */}
                        <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-premium-green" />
                            <span>{t.footerCta.badge}</span>
                        </div>
                    </div>

                    {/* Decorative accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-premium-green/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-premium-purple/10 rounded-full blur-3xl pointer-events-none" />
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-premium-green/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
};
