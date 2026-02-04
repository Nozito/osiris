import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-6 py-20 border-t border-white/5 metal-bg">
      <div className="container mx-auto max-w-7xl">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-gray-500 mb-6 text-sm uppercase tracking-widest">{t.footer.cta}</p>
          <a
            href="#contact"
            className="block text-5xl md:text-8xl font-black text-white hover:text-premium-green transition-colors duration-500 font-display leading-tight"
          >
            {t.footer.ctaLink.split(' ').slice(0, -2).join(' ')} <br />{t.footer.ctaLink.split(' ').slice(-2).join(' ')}
          </a>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-16 pb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-display">OSIRIS</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Agence web premium spécialisée dans la création de sites vitrines haute performance et designs sur-mesure.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/message/HQMHR57XSDJTP1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-premium-green hover:border-premium-green/50 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-premium-green hover:border-premium-green/50 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-premium-green hover:border-premium-green/50 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#expertise" className="text-gray-400 hover:text-premium-green transition-colors">Sites Vitrines</a></li>
              <li><a href="#expertise" className="text-gray-400 hover:text-premium-green transition-colors">Landing Pages</a></li>
              <li><a href="#expertise" className="text-gray-400 hover:text-premium-green transition-colors">Design UI/UX</a></li>
              <li><a href="#expertise" className="text-gray-400 hover:text-premium-green transition-colors">SEO & Performance</a></li>
              <li><a href="#expertise" className="text-gray-400 hover:text-premium-green transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#expertise" className="text-gray-400 hover:text-premium-green transition-colors">Expertise</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-premium-green transition-colors">Réalisations</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-premium-green transition-colors">Processus</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-premium-green transition-colors">Tarifs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-premium-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-premium-green mt-0.5" />
                <span className="text-gray-400">hello@osiris.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-premium-green mt-0.5" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-premium-green mt-0.5" />
                <span className="text-gray-400">12 Rue de la Paix, Paris</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Legal Links */}
        <div className="border-t border-white/5 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-600">{t.footer.copyright}</p>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-white transition-colors">{t.footer.legal}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">RGPD</a>
            </div>

            <span className="text-xs text-gray-700">{t.footer.designBy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};