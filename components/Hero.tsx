import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 pb-12 sm:pb-16 sm:pt-32 bg-transparent">

      <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* OSIRIS — Source Serif 4 italic, large, dark navy */}
          <div className="font-display text-[5.5rem] sm:text-[9rem] md:text-[13rem] lg:text-[15rem] font-normal italic tracking-tighter leading-[0.85] mb-6 sm:mb-8 text-[#0F1729] mt-2 sm:mt-4 select-none">
            OSIRIS
          </div>

          {/* Blue decorative rule — like the-ecosystem.io */}
          <div className="w-16 h-[3px] bg-premium-green rounded-full mb-6 sm:mb-8" />

          <h1 className="hero-title text-2xl sm:text-4xl md:text-5xl font-display italic font-normal tracking-tight leading-tight text-[#0F1729] max-w-4xl mx-auto mb-5">
            {t.hero.headline}
          </h1>

          <p className="hero-subtitle text-base sm:text-lg text-[#0F1729]/55 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-light mx-4 sm:mx-0">
            {t.hero.tagline}
          </p>

          <div className="flex flex-col items-center gap-4 sm:gap-5 w-full px-4 sm:px-0">
            <a
              href="#contact"
              className="hero-cta-button bg-[#0F1729] text-white font-medium py-4 px-10 rounded-full hover:bg-[#1A2F50] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-sm tracking-wide w-full md:w-auto"
            >
              {t.hero.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#0F1729]/20 to-transparent" />
        <div className="w-3 h-3 border border-[#0F1729]/20 rotate-45" />
      </motion.div>
    </section>
  );
};