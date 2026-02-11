import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ChevronDown, Briefcase, DollarSign, Mail, Home } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: t.navbar.home, to: '/', icon: Home },
    { label: t.navbar.pricing, to: '/tarifs', icon: DollarSign },
    { label: t.navbar.contact, to: '/contact', icon: Mail },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto relative flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 w-[95%] md:w-auto md:min-w-[420px] hover:border-white/20 group">

          {/* Left: Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/tarifs"
              onClick={handleNavClick}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${location.pathname === '/tarifs' ? 'bg-premium-green/20 text-premium-green' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              {t.navbar.pricing}
            </Link>
          </div>

          {/* Center: OSIRIS + Language Flags */}
          <div className="flex items-center gap-4">
            <Link to="/" onClick={handleNavClick} className="flex items-center gap-2 group/logo">
              <div className="text-lg md:text-xl font-black font-display tracking-tighter text-white relative">
                OSIRIS
                <span className="text-premium-green absolute -right-1.5 top-0 text-sm animate-pulse">.</span>
              </div>
            </Link>

            <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>

            {/* Language Flags */}
            <div className="flex items-center gap-1.5 hidden md:flex">
              <button
                onClick={() => setLanguage('fr')}
                className={`w-5 h-5 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 ${language === 'fr'
                  ? 'ring-2 ring-premium-green shadow-[0_0_10px_rgba(0,255,133,0.4)] opacity-100'
                  : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                  }`}
                aria-label="Français"
              >
                <img src="https://flagcdn.com/fr.svg" alt="FR" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`w-5 h-5 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 ${language === 'en'
                  ? 'ring-2 ring-premium-green shadow-[0_0_10px_rgba(0,255,133,0.4)] opacity-100'
                  : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                  }`}
                aria-label="English"
              >
                <img src="https://flagcdn.com/gb.svg" alt="EN" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Right: Contact Button (Desktop) */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="group/btn relative px-4 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10">{t.navbar.contact}</span>
              <div className="absolute inset-0 bg-premium-green translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-40 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={handleNavClick}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${location.pathname === item.to
                    ? 'bg-premium-green/20 text-premium-green'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">{item.label}</span>
                </Link>
              ))}

              {/* Language Switcher in Mobile */}
              <div className="flex items-center gap-3 px-4 py-3 border-t border-white/10 mt-2 pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Langue</span>
                <div className="flex gap-2 ml-auto">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden transition-all ${language === 'fr'
                      ? 'ring-2 ring-premium-green opacity-100'
                      : 'opacity-50 grayscale'
                      }`}
                  >
                    <img src="https://flagcdn.com/fr.svg" alt="FR" className="w-full h-full object-cover" />
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden transition-all ${language === 'en'
                      ? 'ring-2 ring-premium-green opacity-100'
                      : 'opacity-50 grayscale'
                      }`}
                  >
                    <img src="https://flagcdn.com/gb.svg" alt="EN" className="w-full h-full object-cover" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};