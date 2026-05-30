import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SocialProofBar: React.FC = () => {
    const { t } = useLanguage();

    const proofs = [
        { icon: TrendingUp, text: t.socialProof.projects },
        { icon: Clock, text: t.socialProof.speed },
        { icon: Zap, text: t.socialProof.score },
        { icon: Star, text: t.socialProof.satisfaction }
    ];

    return (
        <section className="guarantee-section relative w-full py-8 px-4 sm:px-6 overflow-hidden bg-[#F5F5F7] border-y border-[#D2D2D7]">
            <div className="container mx-auto max-w-6xl">
            <div className="guarantee-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {proofs.map((proof, index) => {
                        const Icon = proof.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                                className="guarantee-item flex items-center gap-3 justify-start">
                                <Icon className="w-4 h-4 text-[#1D1D1F]/35 flex-shrink-0" strokeWidth={1.5} />
                                <p className="text-sm sm:text-base text-[#1D1D1F]/65 font-medium">
                                    {proof.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
