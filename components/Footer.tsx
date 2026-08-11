import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const useManosqueClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date());
      setTime(formatted);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
};

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const time = useManosqueClock();

  const navLinks = [
    { label: t.navbar.home, to: '/' },
    { label: t.navbar.about, to: '/a-propos' },
    { label: t.navbar.pricing, to: '/tarifs' },
    { label: t.navbar.contact, to: '/contact' },
  ];

  return (
    <footer className="px-4 sm:px-6 pb-4 sm:pb-6 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative container mx-auto max-w-7xl rounded-[2rem] overflow-hidden bg-agero-dark px-6 sm:px-12 pt-14 pb-0"
      >
        {/* Ambient blue glow (osiris accent) — top corner lights + bottom bloom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(45% 35% at 15% 0%, rgba(0,153,255,0.20) 0%, transparent 70%), \
               radial-gradient(45% 35% at 85% 0%, rgba(0,113,227,0.16) 0%, transparent 70%), \
               radial-gradient(65% 45% at 50% 100%, rgba(0,113,227,0.38) 0%, transparent 75%)',
          }}
        />

        {/* Noise / grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
          }}
        />

        <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 mb-16">
          {/* Navigation */}
          <div>
            <p className="text-xs text-white/35 mb-4">{t.footer.navigation}</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white font-medium hover:text-premium-blue transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-white/35 mb-4">Contact</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/33772328932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-premium-blue transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contact@osiris-agency.fr" className="text-white font-medium hover:text-premium-blue transition-colors duration-300">
                  contact@osiris-agency.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <p className="text-xs text-white/35 mb-4">{t.footer.gdpr === 'RGPD' ? 'Légal' : 'Legal'}</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/legal#confidentialite" className="text-white font-medium hover:text-premium-blue transition-colors duration-300">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link to="/legal#cgv" className="text-white font-medium hover:text-premium-blue transition-colors duration-300">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35 pb-8">
          <span>{t.footer.copyright.replace('2024', String(new Date().getFullYear()))}</span>
          <span>Manosque &rarr; {time}</span>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-premium-blue hover:text-white transition-colors duration-300"
          >
            {t.common.backToHome === 'Retour à l\'accueil' ? 'Retour en haut' : 'Back to top'}
          </a>
        </div>

        {/* Giant wordmark — enlarged, flush with the bottom edge, cropped by the card */}
        <div className="relative flex justify-center translate-y-[22%] sm:translate-y-[18%] select-none pointer-events-none">
          <span
            className="block font-display text-center font-semibold leading-none text-[30vw] sm:text-[19vw] tracking-tight"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(120,190,255,0.35) 55%, rgba(0,113,227,0.05) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'drop-shadow(0 0 60px rgba(0,153,255,0.35))',
            }}
          >
            OSIRIS
          </span>
        </div>
      </motion.div>
    </footer>
  );
};
