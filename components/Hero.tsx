import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AVATARS = [
  { src: 'https://i.ibb.co/CS4GtTb/IMG-8669.jpg', alt: 'Antoine, fondateur Osiris' },
  { src: 'https://i.ibb.co/gMzfwQKZ/Noah-PP.jpg', alt: 'Noah, fondateur Osiris' },
];

const RIBBON_BLUE = ['Sites Vitrines', 'Landing Pages', 'UI/UX Design', 'SEO Technique'];
const RIBBON_DARK = ['+30 Projets Livrés', '<3 Semaines de Délai', '100% Satisfaction', 'Agence à Manosque'];

// Each "half" repeats the items enough times to always exceed the ribbon's width;
// the track is exactly two identical halves, so the -50% keyframe lands on a perfect
// seam and the marquee loops forever with no visible restart/jump.
const RIBBON_BLUE_HALF = Array(6).fill(RIBBON_BLUE).flat();
const RIBBON_DARK_HALF = Array(6).fill(RIBBON_DARK).flat();

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const heroSection = (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden px-4 sm:px-6 pt-32 pb-0 sm:pt-40"
      style={{ background: 'linear-gradient(180deg, #060B18 0%, #0A2F63 55%, #0099FF 100%)' }}
    >
      {/* Grain texture over the gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
      />


      <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
        {/* Trust cluster */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex -space-x-3">
            {AVATARS.map((a) => (
              <img
                key={a.src}
                src={a.src}
                alt={a.alt}
                className="w-8 h-8 rounded-full border-2 border-white/80 object-cover"
                loading="lazy"
              />
            ))}
          </div>
          <span className="text-[13px] text-white/60">{t.hero.tagline.split('.')[0]}.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-col items-center w-full"
        >
          {/* OSIRIS wordmark — text fades out toward the edges, logo mark reads
              bigger than the type, page-load reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative w-full flex items-center justify-center py-6 sm:py-10 mb-8"
            style={{
              maskImage: 'linear-gradient(90deg, transparent 0%, black 22%, black 78%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 22%, black 78%, transparent 100%)',
            }}
          >
            <h1 className="flex items-center justify-center font-sans font-extrabold text-white leading-none tracking-tight text-[3.2rem] sm:text-[5.5rem] md:text-[7.5rem]">
              <img
                src="/logo-osiris.png"
                alt="Osiris"
                className="h-[1.35em] w-[1.35em] -mr-3 sm:-mr-5 object-contain flex-shrink-0"
                style={{ filter: 'invert(1)' }}
              />
              SIRIS
            </h1>
          </motion.div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed mb-9 mx-4 sm:mx-0">
            {t.hero.subtitle}
          </p>

          {/* Scroll cue — small, discreet */}
          <a
            href="#offer"
            aria-label={t.hero.ctaSecondary.replace(' ↓', '')}
            className="text-white/50 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Crossed diagonal ribbons — services / stats. Full-bleed wrapper so the
          crossing point always sits at the true center of the viewport, regardless
          of any parent padding/max-width. Still inside the gradient, so the blue
          carries all the way down to where the two bands cross. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative left-1/2 -translate-x-1/2 w-screen h-56 sm:h-64 mt-16 sm:mt-20 overflow-hidden"
      >
        {/* Both ribbons share the exact same center point and rotate by the same
            magnitude in opposite directions, so they always cross dead-center. */}
        {/* Dark ribbon */}
        <div
          className="absolute left-1/2 top-1/2 w-[250vw] bg-agero-ink py-3 overflow-hidden"
          style={{ transform: 'translate(-50%, -50%) rotate(6deg)' }}
        >
          <div className="flex w-max animate-marquee-left">
            {[...RIBBON_DARK_HALF, ...RIBBON_DARK_HALF].map((item, i) => (
              <span key={i} className="mx-6 text-sm sm:text-base font-semibold text-white whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Blue ribbon */}
        <div
          className="absolute left-1/2 top-1/2 w-[250vw] bg-agero-blue py-3 overflow-hidden"
          style={{ transform: 'translate(-50%, -50%) rotate(-6deg)' }}
        >
          <div className="flex w-max animate-marquee-right">
            {[...RIBBON_BLUE_HALF, ...RIBBON_BLUE_HALF].map((item, i) => (
              <span key={i} className="mx-6 text-sm sm:text-base font-semibold text-white whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Fades back to the site's white background right after the ribbons */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-56 bg-gradient-to-b from-transparent to-[#F5F4EF]" />
    </section>
  );

  return heroSection;
};
