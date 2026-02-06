import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

      {/* Premium Gyroscopic Reactor Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-100 md:opacity-100"
        style={{ perspective: '1200px' }}>

        {/* Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-premium-green/20 blur-[100px] rounded-full animate-pulse"></div>

        {/* Ring 1 - Slow Outer - Accentuated */}
        <div className="absolute inset-0 rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-[spin_60s_linear_infinite]"></div>

        {/* Ring 2 - Dashed Green - Accentuated */}
        <div className="absolute top-10 bottom-10 left-10 right-10 rounded-full border border-dashed border-premium-green/40 shadow-[0_0_20px_rgba(0,255,133,0.1)] animate-[spin_40s_linear_infinite_reverse]"></div>

        {/* Ring 3 - 3D Tilted - Accentuated */}
        <div className="absolute top-20 bottom-20 left-20 right-20 rounded-full border-2 border-white/10 animate-[spin_30s_linear_infinite]"
          style={{ transform: 'rotateX(60deg)' }}></div>

        {/* Ring 4 - 3D Tilted Opposite - Accentuated */}
        <div className="absolute top-32 bottom-32 left-32 right-32 rounded-full border-2 border-white/10 animate-[spin_25s_linear_infinite_reverse]"
          style={{ transform: 'rotateY(60deg)' }}></div>

        {/* Ring 5 - Inner Dashed - Accentuated */}
        <div className="absolute top-1/3 bottom-1/3 left-1/3 right-1/3 rounded-full border-2 border-dashed border-premium-green/30 shadow-[inset_0_0_20px_rgba(0,255,133,0.1)] animate-[spin_20s_linear_infinite]"></div>

        {/* Geometric Accents - Floating Squares */}
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-premium-green rounded-full shadow-[0_0_10px_#00FF85]"></div>
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >

          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[1] mb-8 text-white mt-12 select-none relative z-20">
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

          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light border-l-2 border-premium-green/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            {t.hero.tagline}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Standard Button without Magnetic Effect */}
            <div className="group relative">
              <div className="absolute inset-0 bg-premium-green blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
              <a href="#contact" className="relative bg-premium-green text-black font-bold py-5 px-10 border border-transparent hover:scale-105 transition-all duration-300 flex items-center gap-3 text-lg tracking-wider uppercase rounded-full shadow-[0_0_30px_rgba(0,255,133,0.2)]">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Enhanced Badge */}
            <div className="flex items-center gap-4 text-sm font-mono text-gray-400 bg-premium-black/40 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-colors cursor-default">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-black flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <div className="w-8 h-8 rounded-full bg-premium-green/20 border-2 border-black flex items-center justify-center backdrop-blur-sm">
                  <div className="w-2 h-2 bg-premium-green rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="block text-white font-bold leading-none text-xs uppercase tracking-wider mb-1">
                  2 {t.hero.spotsAvailable} <span className="text-premium-green">{t.hero.available}</span>
                </span>
                <span className="text-[10px] uppercase tracking-wide text-gray-500 font-semibold">{t.hero.thisMonth}</span>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-premium-green to-transparent opacity-50"></div>
        <div className="w-4 h-4 border border-white/20 rotate-45 flex items-center justify-center">
          <div className="w-1 h-1 bg-premium-green rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};