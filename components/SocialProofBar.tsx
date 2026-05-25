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
        <section className="guarantee-section relative w-full py-8 px-4 sm:px-6 overflow-hidden bg-[#151922] border-y border-[#2A3140]">
            <div className="container mx-auto max-w-6xl">
            <div className="guarantee-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {proofs.map((proof, index) => {
                        const Icon = proof.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="guarantee-item flex items-center gap-3 justify-start"
                            >
                                <div className="guarantee-icon flex-shrink-0 w-10 h-10 rounded-xl bg-premium-green/10 border border-premium-green/20 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-premium-green" />
                                </div>
                                <p className="text-sm sm:text-base text-white/80 font-medium">
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
