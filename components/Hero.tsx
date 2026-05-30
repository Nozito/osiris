import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 pb-16 sm:pt-32 bg-transparent">

      <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow label */}
          <p className="text-[11px] font-medium tracking-[0.22em] text-[#1D1D1F]/35 uppercase mb-12 sm:mb-16">
            Osiris Agency &nbsp;·&nbsp; Manosque
          </p>

          {/* Big H1 — Inter, very large, tight tracking */}
          <h1 className="hero-title text-[2.8rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] font-semibold leading-[0.92] text-[#1D1D1F] max-w-4xl mx-auto mb-8 sm:mb-10">
            {t.hero.headline}
          </h1>

          {/* Thin divider */}
          <div className="w-8 h-px bg-[#1D1D1F]/12 mb-8 sm:mb-10" />

          {/* Tagline */}
          <p className="hero-subtitle text-base sm:text-lg text-[#1D1D1F]/45 max-w-md leading-relaxed font-light mb-10 sm:mb-14 mx-4 sm:mx-0">
            {t.hero.tagline}
          </p>

          {/* Apple-style CTA — text link with arrow */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#0071E3] text-[15px] font-medium transition-all duration-300 group hover:gap-3"
          >
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-0"
      >
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-[#1D1D1F]/12 to-transparent" />
      </motion.div>
    </section>
  );
};