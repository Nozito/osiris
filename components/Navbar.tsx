import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Mail, Home, DollarSign, Users } from 'lucide-react';

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
    { label: t.navbar.about, to: '/a-propos', icon: Users },
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
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto relative flex items-center justify-between gap-3 px-6 py-3 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 w-[95%] md:w-auto md:min-w-[480px] hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,255,133,0.15)] group">

          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2 group/logo relative z-50">
            <div className="text-xl font-black font-display tracking-tighter text-white relative">
              OSIRIS
              <span className="text-premium-green absolute -right-1.5 top-0 text-xs animate-pulse">.</span>
            </div>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6 ml-6">
            {menuItems.filter(item => item.to !== '/contact').map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${location.pathname === item.to ? 'text-premium-green' : 'text-gray-400 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
            {/* Audit Gratuit — Lien spécial avec badge pill */}
            <a
              href="/#audit"
              className="relative flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-premium-green hover:text-white transition-colors duration-300 group"
            >
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-premium-green animate-pulse" />
              <span className="px-3 py-1 rounded-full border border-premium-green/40 bg-premium-green/10 group-hover:bg-premium-green/20 transition-colors duration-300 audit-pill-glow">
                {t.navbar.auditGratuit}
              </span>
            </a>
          </div>

          <div className="h-6 w-[1px] bg-white/10 hidden md:block mx-2"></div>

          {/* Desktop Language & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Flags */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`w-5 h-5 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 ${language === 'fr'
                  ? 'ring-1 ring-premium-green shadow-[0_0_10px_rgba(0,255,133,0.4)] opacity-100'
                  : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                  }`}
                aria-label="Français"
              >
                <img src="https://flagcdn.com/fr.svg" alt="FR" className="w-full h-full object-cover" width="20" height="20" loading="lazy" />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`w-5 h-5 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 ${language === 'en'
                  ? 'ring-1 ring-premium-green shadow-[0_0_10px_rgba(0,255,133,0.4)] opacity-100'
                  : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                  }`}
                aria-label="English"
              >
                <img src="https://flagcdn.com/gb.svg" alt="EN" className="w-full h-full object-cover" width="20" height="20" loading="lazy" />
              </button>
            </div>

            <Link
              to="/contact"
              className="relative px-5 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,133,0.4)]"
            >
              <span className="relative z-10">{t.navbar.contact}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-95"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Premium Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { delay: 0.2 } }}
            className="fixed inset-0 z-40 bg-[#050505]/80 md:hidden flex flex-col pt-32 px-6 pb-12 overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-premium-green/10 blur-[100px] rounded-full"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
            </div>

            {/* Menu Links */}
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8 relative z-10">
              {/* Audit Gratuit — Premier item mobile, spécial */}
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full text-center"
              >
                <a
                  href="/#audit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group relative inline-flex flex-col items-center gap-2 py-2"
                >
                  <span className="inline-flex items-center gap-2 text-4xl font-bold font-display tracking-wider uppercase text-premium-green drop-shadow-[0_0_20px_rgba(0,255,133,0.4)]">
                    {t.navbar.auditGratuit}
                    <span className="w-2 h-2 rounded-full bg-premium-green animate-pulse" />
                  </span>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-premium-green to-transparent opacity-80" />
                </a>
              </motion.div>

              {menuItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full text-center"
                >
                  <Link
                    to={item.to}
                    onClick={handleNavClick}
                    className="group relative inline-flex flex-col items-center gap-2 py-2"
                  >
                    <span className={`text-4xl font-bold font-display tracking-wider uppercase transition-all duration-500 relative z-10
                      ${location.pathname === item.to
                        ? 'text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                        : 'text-white/40 group-hover:text-white group-hover:scale-105'
                      }
                    `}
                    >
                      {item.label}
                    </span>

                    {/* Active Indicator & Hover Glow */}
                    {location.pathname === item.to && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 -z-10 bg-premium-green/5 blur-xl rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    <div className={`h-[1px] bg-gradient-to-r from-transparent via-premium-green to-transparent transition-all duration-500 ease-out
                        ${location.pathname === item.to ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'}
                    `}></div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center gap-8"
            >
              {/* Language Switcher */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <button
                  onClick={() => setLanguage('fr')}
                  aria-label="Français"
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${language === 'fr' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'text-gray-500 hover:text-white'}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  aria-label="English"
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${language === 'en' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'text-gray-500 hover:text-white'}`}
                >
                  EN
                </button>
              </div>

              {/* Contact Link */}
              <a href="mailto:contact@osiris-agency.fr" className="text-gray-600 hover:text-premium-green transition-colors text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 hover:opacity-100 hover:tracking-[0.4em] duration-300">
                contact@osiris-agency.fr
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};