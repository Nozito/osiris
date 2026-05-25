import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
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
    { label: t.navbar.home, to: '/' },
    { label: t.navbar.about, to: '/a-propos' },
    { label: t.navbar.pricing, to: '/tarifs' },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -80, opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: 'rgba(245,244,239,0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid #E8E3D9' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 20px rgba(15,23,41,0.06)' : 'none',
        }}
      >
        <div className="container mx-auto max-w-7xl px-5 sm:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex-shrink-0">
            <span className="navbar-logo font-display italic text-[#0F1729] font-normal tracking-tight">
              OSIRIS
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 navbar-links">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.to
                    ? 'text-[#0F1729]'
                    : 'text-[#0F1729]/50 hover:text-[#0F1729]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/#audit"
              onClick={handleAuditNavClick}
              className="text-sm font-semibold text-premium-green hover:text-blue-700 transition-colors duration-200"
            >
              {t.navbar.auditGratuit}
            </a>
          </div>

          {/* Desktop Right: lang + CTA */}
          <div className="hidden md:flex items-center gap-5">
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
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-[#0F1729] text-white text-sm font-medium hover:bg-[#1A2F50] transition-colors duration-200"
            >
              {t.navbar.contact}
            </Link>
          </div>

          {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
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
            <div className="absolute inset-0 bg-[#0F1729]/20 backdrop-blur-sm" />

            {/* Panel slides from top */}
            <motion.div
              initial={{ y: '-105%' }}
              animate={{ y: 0 }}
              exit={{ y: '-105%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 left-0 right-0 overflow-hidden"
              style={{
                background: 'rgba(245,244,239,0.98)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderBottom: '1px solid #E8E3D9',
                boxShadow: '0 20px 60px rgba(15,23,41,0.12)',
              }}
            >
              <div className="pt-20 pb-8 px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display italic text-2xl text-[#0F1729] font-normal">
                    OSIRIS
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full border border-[#E8E3D9] flex items-center justify-center hover:bg-[#F0EDE6] transition-colors duration-200"
                    aria-label="Fermer"
                  >
                    <X className="w-4 h-4 text-[#0F1729]/60" />
                  </button>
                </div>

                {/* Menu items */}
                <nav className="flex flex-col mb-6">
                  {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 + index * 0.04, duration: 0.3 }}
                      >
                        <Link
                          to={item.to}
                          onClick={handleNavClick}
                          className={`flex items-center justify-between py-4 border-b border-[#E8E3D9] transition-colors duration-200 ${
                            isActive ? 'text-[#0F1729]' : 'text-[#0F1729]/50 hover:text-[#0F1729]'
                          }`}
                        >
                          <span className="text-xl font-medium">{item.label}</span>
                          {isActive && <div className="w-1.5 h-1.5 rounded-full bg-premium-green" />}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Audit Gratuit */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + menuItems.length * 0.04, duration: 0.3 }}
                  >
                    <a
                      href="/#audit"
                      onClick={handleAuditNavClick}
                      className="flex items-center justify-between py-4 border-b border-[#E8E3D9] text-premium-green hover:text-blue-700 transition-colors duration-200"
                    >
                      <span className="text-xl font-semibold">{t.navbar.auditGratuit}</span>
                      <span className="text-[10px] bg-premium-green text-white font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Offert</span>
                    </a>
                  </motion.div>
                </nav>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mb-6"
                >
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="flex items-center justify-center gap-2.5 w-full py-4 rounded-full bg-[#0F1729] text-white font-medium text-base transition-colors duration-200 hover:bg-[#1A2F50]"
                  >
                    Démarrer un projet
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.25 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-premium-green animate-pulse" />
                    <span className="text-xs text-[#0F1729]/35 font-medium">Disponible maintenant</span>
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

