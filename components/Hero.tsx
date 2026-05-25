import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 pb-12 sm:pb-16 sm:pt-36 bg-transparent">

      {/* Background Removed (Unified in App.tsx) */}

      <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >

          <div className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] mb-4 sm:mb-6 text-white mt-4 sm:mt-8 select-none relative z-20">
            <div className="relative inline-block">
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 blur-[60px] bg-premium-green/12 pointer-events-none scale-150"></div>

              {/* Clean gradient text */}
              <span
                className="relative inline-block bg-clip-text text-transparent bg-[linear-gradient(180deg,#ffffff_0%,#e8f0fe_20%,#c7d9f8_45%,#a0bcf0_60%,#d8e8fc_80%,#ffffff_100%)] px-4 mx-[-16px]"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.25)) drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
                  transform: 'translateZ(0)'
                }}
              >
                OSIRIS
              </span>

              {/* Shimmer sweep */}
              <span
                className="absolute inset-0 bg-clip-text text-transparent bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.05)_35%,rgba(255,255,255,0.7)_50%,rgba(255,255,255,0.05)_65%,transparent_80%)] bg-[length:200%_100%] animate-shimmer pointer-events-none px-4 mx-[-16px] mix-blend-plus-lighter"
                aria-hidden="true"
              >
                OSIRIS
              </span>
            </div>
          </div>

          <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-tight text-white max-w-5xl mx-auto mb-4">
            {t.hero.headline}
          </h1>

          <p className="hero-subtitle text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mb-6 sm:mb-8 leading-relaxed font-light border-l-2 border-premium-green/50 pl-4 sm:pl-6 text-left md:text-center md:border-l-0 md:pl-0 mx-4 sm:mx-0">
            {t.hero.tagline}
          </p>

          <div className="flex flex-col items-center gap-4 sm:gap-5 w-full px-4 sm:px-0">
            {/* Bouton principal */}
            <div className="group relative w-full md:w-auto">
              <div className="absolute inset-0 bg-premium-green blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
              <a href="#contact" className="hero-cta-button relative bg-premium-green text-white font-bold py-3 sm:py-5 px-6 sm:px-10 border border-transparent hover:bg-blue-600 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg tracking-wider uppercase rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_24px_rgba(59,130,246,0.45)] w-full md:w-auto">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Geometric Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden sm:flex"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-premium-green to-transparent opacity-50"></div>
        <div className="w-4 h-4 border border-white/20 rotate-45 flex items-center justify-center">
          <div className="w-1 h-1 bg-premium-green rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};