import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-32 dark-bg relative overflow-hidden scroll-mt-20">
      {/* Scrolling OSIRIS Marquee Band - Background */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-[15vw] md:text-[12vw] font-black font-display text-white/[0.02] tracking-[-0.05em] mx-8"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.03)' }}
            >
              OSIRIS
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-premium-green/5 skew-x-12 pointer-events-none border-l border-white/5"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-4 block">{t.contact.sectionLabel}</span>
            <h2 className="text-5xl md:text-7xl font-black font-display text-white mb-8">
              {t.contact.title} <br />
              <span className="text-gray-500">{t.contact.titleFaded}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-premium-green">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.contact.emailDirect}</h4>
                  <p className="text-gray-400">hello@osiris.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-premium-green">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.contact.phone}</h4>
                  <p className="text-gray-400">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-premium-green">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.contact.studio}</h4>
                  <p className="text-gray-400">12 Rue de la Paix, Paris</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-[2.5rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.name}</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-2xl" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.company}</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-2xl" placeholder="Company Ltd" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.email}</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-2xl" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.budget}</label>
                <select className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors appearance-none rounded-2xl">
                  <option>1k€ - 3k€</option>
                  <option>3k€ - 10k€</option>
                  <option>10k€ +</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.message}</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-2xl" placeholder={t.contact.form.messagePlaceholder}></textarea>
              </div>

              <MagneticButton className="w-full">
                <button type="button" className="w-full bg-premium-green text-black font-bold py-5 uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 rounded-full mt-4">
                  {t.contact.form.submit}
                  <Send className="w-4 h-4" />
                </button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};