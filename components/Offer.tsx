import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Rocket, Zap, Crown, HelpCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Offer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'quote'>('faq');
  const { t } = useLanguage();

  const offers = [
    {
      title: t.offer.offers.starter.title,
      price: '1 090',
      description: t.offer.offers.starter.description,
      features: t.offer.offers.starter.features,
      highlight: false,
      icon: Rocket,
      delivery: t.offer.faqItems.delays.starter,
    },
    {
      title: t.offer.offers.business.title,
      price: '1 690',
      description: t.offer.offers.business.description,
      features: t.offer.offers.business.features,
      highlight: true,
      icon: Zap,
      delivery: t.offer.faqItems.delays.business,
    },
    {
      title: t.offer.offers.empire.title,
      price: '2 990',
      description: t.offer.offers.empire.description,
      features: t.offer.offers.empire.features,
      highlight: false,
      icon: Crown,
      delivery: t.offer.faqItems.delays.empire,
    },
  ];

  return (
    <section id="pricing" className="px-4 sm:px-6 py-16 sm:py-24 relative scroll-mt-20 overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-agero-ink mb-3">
            {t.offer.title}
          </h2>
          <p className="text-agero-gray max-w-md mx-auto">{t.offer.subtitle}</p>
        </motion.div>

        {/* Stacked pricing cards — click anywhere on a card to go to the full pricing page */}
        <div className="flex flex-col gap-6 mb-16">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/tarifs"
                  className={`group relative block rounded-[2rem] overflow-hidden p-8 sm:p-10 transition-transform duration-300 hover:-translate-y-1 ${
                    offer.highlight ? 'bg-agero-dark' : 'bg-white border border-agero-line'
                  }`}
                >
                  {/* Halftone dot pattern — light dots on the dark card, dark/gray dots on the light cards */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(${offer.highlight ? 'rgba(255,255,255,0.35)' : 'rgba(15,23,41,0.16)'} 1px, transparent 1px)`,
                      backgroundSize: '14px 14px',
                      maskImage: 'radial-gradient(50% 70% at 12% 15%, black 0%, transparent 70%)',
                      WebkitMaskImage: 'radial-gradient(50% 70% at 12% 15%, black 0%, transparent 70%)',
                    }}
                  />

                  {/* Blue ambient glow for the recommended offer */}
                  {offer.highlight && (
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(55% 60% at 15% 10%, rgba(0,153,255,0.28) 0%, transparent 70%), \
                           radial-gradient(60% 55% at 90% 100%, rgba(0,113,227,0.35) 0%, transparent 75%)',
                      }}
                    />
                  )}

                  <div className="relative grid sm:grid-cols-2 gap-8 sm:gap-10">
                    {/* Left: icon, title, description */}
                    <div className="flex flex-col">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                          offer.highlight ? 'bg-white text-agero-ink' : 'bg-agero-ink text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className={`font-display text-xl sm:text-2xl font-semibold mb-3 ${offer.highlight ? 'text-white' : 'text-agero-ink'}`}>
                        {offer.title}
                      </h3>
                      <p className={`text-sm leading-relaxed mb-8 ${offer.highlight ? 'text-white/55' : 'text-agero-gray'}`}>
                        {offer.description}
                      </p>

                      <div
                        className={`mt-auto flex items-center justify-between text-sm pt-4 border-t ${
                          offer.highlight ? 'border-white/10 text-white/70' : 'border-agero-line text-agero-ink/70'
                        }`}
                      >
                        <span>Délai</span>
                        <span className="font-medium">{offer.delivery}</span>
                      </div>
                    </div>

                    {/* Right: price, features, CTA */}
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1.5 mb-6">
                        <span className={`font-display text-4xl font-semibold ${offer.highlight ? 'text-agero-blue' : 'text-agero-ink'}`}>
                          {offer.price} €
                        </span>
                      </div>
                      <div className={`w-full h-px mb-6 ${offer.highlight ? 'bg-white/10' : 'bg-agero-line'}`} />

                      <ul className="flex flex-col gap-3 mb-8">
                        {offer.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                offer.highlight ? 'bg-white/10 text-white' : 'bg-agero-surface text-agero-ink'
                              }`}
                            >
                              <Check className="w-3 h-3" />
                            </span>
                            <span className={`text-sm leading-relaxed ${offer.highlight ? 'text-white/70' : 'text-agero-ink/70'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <span
                        className={`mt-auto w-full py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-colors duration-300 ${
                          offer.highlight
                            ? 'bg-white text-agero-ink group-hover:bg-white/90'
                            : 'bg-agero-ink text-white group-hover:bg-agero-ink/85'
                        }`}
                      >
                        {t.offer.choosePack}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Info & Tabs Section */}
        <div className="max-w-2xl mx-auto border border-agero-line bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden flex flex-col items-center">
          <div className="flex p-1.5 gap-1.5 mt-6 bg-agero-surface rounded-full">
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-2.5 px-6 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-full ${activeTab === 'faq' ? 'bg-agero-ink text-white' : 'text-agero-gray hover:text-agero-ink'}`}
            >
              <HelpCircle className="w-3 h-3" />
              {t.offer.faq}
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`py-2.5 px-6 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-full ${activeTab === 'quote' ? 'bg-agero-ink text-white' : 'text-agero-gray hover:text-agero-ink'}`}
            >
              <FileText className="w-3 h-3" />
              {t.offer.quote}
            </button>
          </div>

          <div className="p-6 sm:p-8 w-full min-h-[180px]">
            <AnimatePresence mode="wait">
              {activeTab === 'faq' ? (
                <motion.div
                  key="faq"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="bg-agero-surface p-4 rounded-xl">
                    <h4 className="text-agero-blue font-bold mb-2 text-xs uppercase tracking-wide">{t.offer.faqItems.delays.title}</h4>
                    <p className="text-agero-ink/70 text-xs leading-relaxed">
                      <span className="block mb-0.5"><span className="text-agero-ink/45">Fondation :</span> {t.offer.faqItems.delays.starter}</span>
                      <span className="block mb-0.5"><span className="text-agero-ink/45">Stratégie :</span> {t.offer.faqItems.delays.business}</span>
                      <span className="block"><span className="text-agero-ink/45">Signature :</span> {t.offer.faqItems.delays.empire}</span>
                    </p>
                  </div>
                  <div className="bg-agero-surface p-4 rounded-xl">
                    <h4 className="text-agero-blue font-bold mb-2 text-xs uppercase tracking-wide">{t.offer.faqItems.payment.title}</h4>
                    <p className="text-agero-ink/70 text-xs leading-relaxed">
                      {t.offer.faqItems.payment.answer}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="quote"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center h-full"
                >
                  <h4 className="text-agero-ink font-bold mb-2 text-base">{t.offer.customProject.title}</h4>
                  <p className="text-agero-gray text-xs leading-relaxed mb-6 max-w-sm">
                    {t.offer.customProject.description}
                  </p>
                  <a href="#contact" className="px-6 py-3 bg-agero-ink text-white font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-agero-blue transition-all">
                    {t.offer.customProject.cta}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
