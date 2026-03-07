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

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] mb-4 sm:mb-6 text-white mt-4 sm:mt-8 select-none relative z-20">
            {/* Enhanced 3D Metal Effect with Premium Glow */}
            <div className="relative inline-block" style={{ perspective: '1000px' }}>

              {/* Ambient Green Glow - Background Pulse */}
              <div className="absolute inset-0 blur-[80px] bg-premium-green/20 animate-pulse pointer-events-none scale-150"></div>

              {/* Secondary Glow Ring */}
              <div className="absolute inset-0 blur-[40px] bg-white/10 animate-[pulse_3s_ease-in-out_infinite] pointer-events-none scale-125"></div>

              {/* 3D Text Container with Transform */}
              <div
                className="relative"
                style={{
                  transform: 'rotateX(5deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Deep Shadow Layer for 3D Depth */}
                <span
                  className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-black px-4 mx-[-16px] blur-[2px]"
                  style={{
                    transform: 'translateZ(-20px) translateY(8px)',
                    opacity: 0.5
                  }}
                  aria-hidden="true"
                >
                  OSIRIS
                </span>

                {/* Base Metal Text with Enhanced Gradient */}
                <span
                  className="relative inline-block bg-clip-text text-transparent bg-[linear-gradient(180deg,#ffffff_0%,#e0eafc_15%,#c0d6f0_30%,#6b7b8a_45%,#2a2a2a_50%,#6b7b8a_55%,#c0d6f0_70%,#e0eafc_85%,#ffffff_100%)] px-4 mx-[-16px]"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3)) drop-shadow(0 4px 8px rgba(0,0,0,0.8))',
                    textShadow: '0 0 60px rgba(0,255,133,0.3), 0 0 120px rgba(0,255,133,0.15)',
                    transform: 'translateZ(0)'
                  }}
                >
                  OSIRIS
                </span>

                {/* Primary Shimmer Overlay - Bright White Sweep */}
                <span
                  className="absolute inset-0 bg-clip-text text-transparent bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.05)_35%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0.05)_65%,transparent_80%)] bg-[length:200%_100%] animate-shimmer pointer-events-none px-4 mx-[-16px] mix-blend-plus-lighter"
                  aria-hidden="true"
                >
                  OSIRIS
                </span>

                {/* Green Tint Overlay - Subtle Color Wash */}
                <span
                  className="absolute inset-0 bg-clip-text text-transparent bg-[linear-gradient(180deg,rgba(0,255,133,0.1)_0%,transparent_30%,transparent_70%,rgba(0,255,133,0.1)_100%)] pointer-events-none px-4 mx-[-16px] animate-[pulse_4s_ease-in-out_infinite]"
                  aria-hidden="true"
                >
                  OSIRIS
                </span>

                {/* Edge Highlight - Top Light */}
                <span
                  className="absolute inset-0 bg-clip-text text-transparent bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,transparent_20%,transparent_100%)] pointer-events-none px-4 mx-[-16px]"
                  aria-hidden="true"
                >
                  OSIRIS
                </span>
              </div>
            </div>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-light border-l-2 border-premium-green/50 pl-4 sm:pl-6 text-left md:text-center md:border-l-0 md:pl-0 mx-4 sm:mx-0">
            {t.hero.tagline}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 w-full md:w-auto px-4 sm:px-0">
            {/* Bouton principal existant */}
            <div className="group relative w-full md:w-auto">
              <div className="absolute inset-0 bg-premium-green blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
              <a href="#contact" className="relative bg-premium-green text-black font-bold py-3 sm:py-5 px-6 sm:px-10 border border-transparent hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg tracking-wider uppercase rounded-full shadow-[0_0_30px_rgba(0,255,133,0.2)] w-full md:w-auto">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Nouveau CTA Audit Gratuit */}
            <a
              href="#audit-gratuit"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('audit-gratuit');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative w-full md:w-auto flex items-center justify-center gap-3 text-base sm:text-lg font-bold py-[18px] px-9 rounded-full border border-premium-green/30 bg-premium-green/[0.08] hover:bg-premium-green/[0.15] hover:border-premium-green/50 text-white transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,255,133,0.25)]"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Enhanced Badge with Social Proof */}
            <div className="group relative bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-premium-green/30 rounded-full pl-2 pr-6 py-2 flex items-center gap-4 transition-all duration-500 w-full md:w-auto justify-center md:justify-start overflow-hidden">

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>

              {/* Avatars Stack */}
              <div className="flex -space-x-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-zinc-800 border-[3px] border-black flex items-center justify-center shadow-lg transform group-hover:-translate-x-1 transition-transform duration-300">
                  <User className="w-3.5 h-3.5 text-gray-500" />
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-700 border-[3px] border-black flex items-center justify-center shadow-lg transform group-hover:translate-x-0 transition-transform duration-300">
                  <User className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <div className="w-8 h-8 rounded-full bg-premium-green/10 border-[3px] border-black flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,133,0.3)] transform group-hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-premium-green rounded-full animate-pulse shadow-[0_0_10px_#00FF85]"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col text-left z-10">
                <span className="block text-white font-bold leading-none text-xs uppercase tracking-wider mb-0.5 group-hover:text-premium-green transition-colors duration-300">
                  2 {t.hero.spotsAvailable} <span className="opacity-50 mx-1 text-gray-600">|</span> {t.hero.available}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold group-hover:text-white transition-colors duration-300">{t.hero.thisMonth}</span>
              </div>
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