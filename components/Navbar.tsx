import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Home, DollarSign, Users, Zap, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleAuditNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const target = document.querySelector('#audit');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToAudit: true } });
    }
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
        <div className="pointer-events-auto relative flex items-center justify-between gap-3 px-5 md:px-6 py-3 rounded-full bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 w-[95%] md:w-auto md:min-w-[480px] hover:border-white/20 hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)] group">

          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2 group/logo relative z-50">
            <div className="navbar-logo text-xl font-black font-display tracking-tighter text-white relative">
              OSIRIS
              <span className="text-premium-green absolute -right-1.5 top-0 text-xs animate-pulse">.</span>
            </div>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6 ml-6 navbar-links">
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
              onClick={handleAuditNavClick}
              className="relative flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-premium-green hover:text-white transition-colors duration-300 group"
            >
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-premium-green animate-pulse" />
              <span className="px-3 py-1 rounded-full border border-premium-green/40 bg-premium-green/10 group-hover:bg-premium-green/20 transition-colors duration-300 audit-pill-glow">
                {t.navbar.auditGratuit}
              </span>
            </a>

            <div className="lang-switcher flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`lang-btn ${language === 'fr' ? 'lang-active' : ''}`}
              >
                FR
              </button>
              <span className="lang-separator">|</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`lang-btn ${language === 'en' ? 'lang-active' : ''}`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="h-6 w-[1px] bg-white/10 hidden md:block mx-2"></div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="relative px-5 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              <span className="relative z-10">{t.navbar.contact}</span>
            </Link>
          </div>

          {/* Mobile Hamburger — inside pill */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`hamburger md:hidden self-center ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Panel slides from top */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 left-0 right-0 bg-[#0B0F1A] border-b border-premium-green/20 shadow-[0_30px_80px_rgba(0,0,0,0.95)] pt-24 pb-8 px-5 overflow-hidden"
            >
              {/* Top green line */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-premium-green to-transparent"></div>
              {/* Ambient glow blob */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-32 bg-premium-green/8 blur-[60px] rounded-full pointer-events-none"></div>

              {/* Header — branding + close */}
              <div className="flex items-center justify-between mb-7 px-1">
                <div className="flex items-center gap-2.5">
                  <span className="font-black font-display text-white tracking-tighter text-lg leading-none">
                    OSIRIS<span className="text-premium-green text-xs">.</span>
                  </span>
                  <span className="h-3.5 w-px bg-white/15"></span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold">Menu</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/25 transition-all duration-200"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4 text-gray-300" />
                </button>
              </div>

              {/* Menu items with stagger */}
              <nav className="relative flex flex-col gap-2 mb-6">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.to;
                  return (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + index * 0.065, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={item.to}
                        onClick={handleNavClick}
                        className={`group flex items-center gap-3.5 px-3.5 py-3.5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-premium-green/20 to-premium-green/5 border-premium-green/35 text-premium-green shadow-[0_0_30px_rgba(37,99,235,0.14)]'
                            : 'border-white/[0.08] bg-white/[0.03] text-white/80 hover:bg-white/[0.07] hover:border-white/25 hover:text-white'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isActive ? 'bg-premium-green/25' : 'bg-white/[0.07] group-hover:bg-white/15'
                        }`}>
                          <Icon className={`w-[18px] h-[18px] transition-colors duration-200 ${
                            isActive ? 'text-premium-green' : 'text-gray-400 group-hover:text-white'
                          }`} />
                        </div>
                        <span className="font-semibold text-[15px] flex-1">{item.label}</span>
                        <ArrowRight className={`w-4 h-4 transition-all duration-200 ${
                          isActive
                            ? 'opacity-100 text-premium-green'
                            : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                        }`} />
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Audit Gratuit */}
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + menuItems.length * 0.065, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href="/#audit"
                    onClick={handleAuditNavClick}
                    className="group flex items-center gap-3.5 px-3.5 py-3.5 rounded-2xl border border-premium-green/30 bg-gradient-to-r from-premium-green/[0.16] via-premium-green/[0.08] to-transparent text-premium-green hover:border-premium-green/50 transition-all duration-300 shadow-[0_0_24px_rgba(37,99,235,0.12)]"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-premium-green/15">
                      <Zap className="w-[18px] h-[18px] text-premium-green" />
                    </div>
                    <span className="font-bold text-[15px] flex-1">{t.navbar.auditGratuit}</span>
                    <span className="text-[9px] bg-premium-green text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider">Offert</span>
                  </a>
                </motion.div>
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-premium-green text-white font-black text-[13px] uppercase tracking-widest hover:bg-blue-700 transition-colors duration-300 shadow-[0_0_30px_rgba(37,99,235,0.25)]"
                >
                  Démarrer un projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Language switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex items-center justify-between pt-5 px-1 border-t border-white/[0.07]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold">Langue</span>
                  <button type="button" onClick={() => setLanguage('fr')} className={`lang-btn ${language === 'fr' ? 'lang-active' : ''}`}>FR</button>
                  <span className="lang-separator">|</span>
                  <button type="button" onClick={() => setLanguage('en')} className={`lang-btn ${language === 'en' ? 'lang-active' : ''}`}>EN</button>
                </div>
                <span className="text-[9px] text-gray-600 font-mono">osiris-web.com</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};