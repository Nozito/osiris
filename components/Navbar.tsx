import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Home, DollarSign, Users, X, ArrowRight } from 'lucide-react';

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
      navigate('/#audit', { state: { scrollToAudit: true } });
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

            {/* Panel slides from top */}
            <motion.div
              initial={{ y: '-105%' }}
              animate={{ y: 0 }}
              exit={{ y: '-105%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 left-0 right-0 overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(3,4,10,0.97) 0%, rgba(5,7,16,0.93) 100%)',
                backdropFilter: 'blur(48px) saturate(2)',
                WebkitBackdropFilter: 'blur(48px) saturate(2)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.03)',
              }}
            >
              {/* Top accent line — gradient vert */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-premium-green to-transparent opacity-80" />
              {/* Ambient glow haut-centre */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />
              {/* Glow vert bas-gauche */}
              <div className="absolute bottom-10 -left-8 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)' }} />

              <div className="pt-24 pb-7 px-5">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="font-black font-display text-white tracking-tighter text-xl leading-none block">
                      OSIRIS<span className="text-premium-green">.</span>
                    </span>
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.22em] font-semibold mt-0.5 block">Navigation</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/25 hover:scale-105 transition-all duration-200 active:scale-95"
                    aria-label="Fermer"
                  >
                    <X className="w-4 h-4 text-white/60" />
                  </button>
                </div>

                {/* Menu items */}
                <nav className="flex flex-col mb-5">
                  {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 + index * 0.03, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          to={item.to}
                          onClick={handleNavClick}
                          className={`group relative flex justify-center items-center py-4 transition-all duration-300 active:scale-[0.98] ${
                            isActive ? 'text-white' : 'text-white/45 hover:text-white'
                          }`}
                        >
                          <span className={`font-bold text-[22px] tracking-tight transition-colors duration-200 ${
                            isActive ? 'text-white' : ''
                          }`}>{item.label}</span>
                          {isActive && (
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full bg-premium-green shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 h-px bg-white/[0.06]" />
                  <span className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-bold">Offre</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>

                {/* Audit Gratuit */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + menuItems.length * 0.03, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-5"
                >
                  <a
                    href="/#audit"
                    onClick={handleAuditNavClick}
                    className="group flex flex-col items-center py-4 active:scale-[0.98] transition-all duration-300"
                  >
                    <div className="text-[10px] text-premium-green/60 uppercase tracking-[0.18em] font-bold mb-1">Sans engagement</div>
                    <div className="text-premium-green font-bold text-[22px] tracking-tight mb-2">{t.navbar.auditGratuit}</div>
                    <span className="text-[9px] bg-premium-green text-black font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_16px_rgba(34,197,94,0.4)]">
                      Offert
                    </span>
                  </a>
                </motion.div>

                {/* CTA principal */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6"
                >
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="group relative flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl overflow-hidden font-black text-[13px] uppercase tracking-widest text-white transition-all duration-300 active:scale-[0.98]"
                    style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)', boxShadow: '0 8px 32px rgba(37,99,235,0.35), 0 1px 0 rgba(255,255,255,0.1) inset' }}
                  >
                    <span className="relative z-10">Démarrer un projet</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    {/* Hover shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' }} />
                  </Link>
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.24, duration: 0.25 }}
                  className="flex items-center justify-between pt-4 border-t border-white/[0.05]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-premium-green animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                    <span className="text-[10px] text-white/25 font-medium">Disponible maintenant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => setLanguage('fr')} className={`lang-btn ${language === 'fr' ? 'lang-active' : ''}`}>FR</button>
                    <span className="lang-separator">|</span>
                    <button type="button" onClick={() => setLanguage('en')} className={`lang-btn ${language === 'en' ? 'lang-active' : ''}`}>EN</button>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};