import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Determine if we're on the homepage
  const isHomePage = location.pathname === '/';

  // Scroll to top when clicking navigation links
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-4 md:px-8 py-4 rounded-full bg-premium-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] min-w-[320px] md:min-w-[600px]">

        {/* Left: Tarifs */}
        <div className="hidden md:flex flex-1 justify-start">
          <Link
            to="/tarifs"
            onClick={handleNavClick}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-[10px]"
          >
            {t.navbar.pricing}
          </Link>
        </div>

        {/* Center: OSIRIS + Language Flags */}
        <div className="flex items-center gap-4">
          <Link to="/" onClick={handleNavClick} className="text-xl font-bold font-display tracking-tighter text-white">
            OSIRIS<span className="text-premium-green">.</span>
          </Link>

          {/* Language Flags */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLanguage('fr')}
              className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 p-0 ${language === 'fr'
                ? 'ring-2 ring-premium-green shadow-[0_0_10px_rgba(0,255,133,0.3)]'
                : 'opacity-60 hover:opacity-100 ring-1 ring-white/10 hover:ring-white/30'
                }`}
              aria-label="Français"
            >
              <svg viewBox="0 0 36 24" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
                <rect width="36" height="24" fill="#FFFFFF" />
                <rect width="12" height="24" fill="#002654" />
                <rect x="24" width="12" height="24" fill="#CE1126" />
              </svg>
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 p-0 ${language === 'en'
                ? 'ring-2 ring-premium-green shadow-[0_0_10px_rgba(0,255,133,0.3)]'
                : 'opacity-60 hover:opacity-100 ring-1 ring-white/10 hover:ring-white/30'
                }`}
              aria-label="English"
            >
              <svg viewBox="0 0 60 30" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
                <clipPath id="s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
                <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
                <g clipPath="url(#s)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                  <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Contact */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link to="/contact" onClick={handleNavClick} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-premium-green hover:text-black hover:border-premium-green transition-all duration-300">
            {t.navbar.contact}
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};