import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-4 sm:px-6 py-4 sm:py-6 border-t border-white/5 metal-bg">
      <div className="container mx-auto max-w-7xl">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <p className="text-gray-500 mb-3 text-sm uppercase tracking-widest">{t.footer.cta}</p>
          <a
            href="#contact"
            className="block text-3xl sm:text-5xl md:text-8xl font-black text-white hover:text-premium-green transition-colors duration-500 font-display leading-tight"
          >
            {t.footer.ctaLink.split(' ').slice(0, -2).join(' ')} <br />{t.footer.ctaLink.split(' ').slice(-2).join(' ')}
          </a>
        </motion.div>

        {/* Simplified Footer Content */}
        <div className="footer-main flex flex-col items-center justify-center gap-2 py-4 border-t border-white/5">
          {/* Company Info - Centered */}
          <div className="flex flex-col items-center text-center max-w-lg">
            <h4 className="text-white font-bold text-2xl mb-3 font-display">OSIRIS</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              {t.footer.companyDesc}
            </p>
            <div className="flex gap-4 mb-2">
              <a href="https://wa.me/33772328932" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Legal Links */}
        <div className="border-t border-white/5 pt-3 mt-3">
          <div className="footer-bottom flex flex-col gap-3 items-center text-center">
            <p className="text-xs text-gray-600">© 2026 OSIRIS. Tous droits réservés.</p>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <Link to="/legal#cgv" className="hover:text-white transition-colors">CGV</Link>
              <Link to="/legal#confidentialite" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</Link>
              <Link to="/legal#cookies" className="hover:text-white transition-colors">{t.footer.cookies}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};