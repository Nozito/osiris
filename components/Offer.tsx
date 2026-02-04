import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, HelpCircle, ArrowRight, FileText, Rocket, Crown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Offer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'quote'>('faq');
  const { t } = useLanguage();

  const offers = [
    {
      title: t.offer.offers.starter.title,
      price: "950",
      description: t.offer.offers.starter.description,
      features: t.offer.offers.starter.features,
      highlight: false,
      icon: "rocket",
      delay: 0,
      gradient: "from-blue-500/20 to-transparent",
      badge: "Lancement"
    },
    {
      title: t.offer.offers.business.title,
      price: "1 650",
      description: t.offer.offers.business.description,
      features: t.offer.offers.business.features,
      highlight: true,
      icon: "zap",
      delay: 0.2,
      gradient: "from-premium-green/20 to-transparent",
      badge: t.offer.recommended
    },
    {
      title: t.offer.offers.empire.title,
      price: "2 950",
      description: t.offer.offers.empire.description,
      features: t.offer.offers.empire.features,
      highlight: false,
      icon: "crown",
      delay: 0.4,
      gradient: "from-purple-500/20 to-transparent",
      badge: "Domination"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'rocket': return <Rocket className="w-5 h-5 text-blue-400" />;
      case 'zap': return <Zap className="w-5 h-5 fill-black text-black" />;
      case 'crown': return <Crown className="w-5 h-5 text-purple-400" />;
      default: return null;
    }
  };

  return (
    <section id="pricing" className="px-6 py-32 relative scroll-mt-20 metal-bg">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[800px] bg-premium-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-2 block">{t.offer.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-4">{t.offer.title}</h2>
          <p className="text-gray-400 max-w-xl mx-auto">{t.offer.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: offer.delay, duration: 0.6 }}
              className={`relative p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 group flex flex-col justify-between
                ${offer.highlight
                  ? 'bg-[#0A0A0A] border border-premium-green/30 shadow-[0_0_50px_-15px_rgba(0,255,133,0.3)] z-10 scale-100 md:scale-105 before:absolute before:inset-0 before:bg-gradient-to-b before:from-premium-green/5 before:to-transparent before:rounded-[2.5rem] before:pointer-events-none'
                  : 'bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2'
                }
              `}
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r ${offer.highlight ? 'from-transparent via-premium-green/50 to-transparent' : 'from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-500'}`}></div>

              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className={`px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg
                  ${offer.highlight
                    ? 'bg-premium-green text-black shadow-premium-green/20'
                    : 'bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/20 transition-all'
                  }
                `}>
                  {getIcon(offer.icon)}
                  {offer.badge}
                </div>
              </div>

              {/* Card Header */}
              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-4 font-display uppercase tracking-wider ${offer.highlight ? 'text-premium-green drop-shadow-[0_0_10px_rgba(0,255,133,0.4)]' : 'text-white'}`}>
                  {offer.title}
                </h3>
                <div className="flex items-start justify-center gap-1 mb-2">
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tighter font-display">{offer.price}</span>
                  <span className="text-2xl mt-2 text-gray-400 font-light">€</span>
                </div>
                {offer.highlight && <div className="text-[10px] text-premium-green/70 font-mono tracking-widest uppercase opacity-80">Offre la plus vendue</div>}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-10 text-center leading-relaxed px-4">
                {offer.description}
              </p>

              {/* Divider */}
              <div className={`w-full h-[1px] mb-8 ${offer.highlight ? 'bg-gradient-to-r from-transparent via-premium-green/20 to-transparent' : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'}`}></div>

              {/* Features List */}
              <ul className="space-y-4 mb-12 flex-1">
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${offer.highlight ? 'bg-premium-green/20 text-premium-green group-hover/item:bg-premium-green group-hover/item:text-black' : 'bg-white/5 text-gray-500 group-hover/item:bg-white/20 group-hover/item:text-white'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={`text-sm transition-colors duration-300 ${offer.highlight ? 'text-gray-200' : 'text-gray-400 group-hover/item:text-gray-200'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 border flex items-center justify-center gap-3 relative overflow-hidden group/btn
                ${offer.highlight
                  ? 'bg-premium-green text-black border-transparent hover:shadow-[0_0_30px_rgba(0,255,133,0.4)]'
                  : 'bg-transparent text-white border-white/10 hover:border-white/30 hover:bg-white/[0.05]'
                }
              `}>
                <span className="relative z-10 flex items-center gap-2">
                  {t.offer.choosePack}
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 ${offer.highlight ? 'text-black' : 'text-white'}`} />
                </span>
                {offer.highlight && (
                  <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none skew-x-12"></div>
                )}
              </button>

            </motion.div>
          ))}
        </div>

        {/* Info & Tabs Section */}
        <div className="max-w-3xl mx-auto border border-white/5 bg-white/[0.02] rounded-[2.5rem] backdrop-blur-sm overflow-hidden flex flex-col items-center">
          {/* Tabs Header - Pill Style */}
          <div className="flex p-2 gap-2 mt-8 bg-black/20 rounded-full border border-white/5">
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-3 px-8 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-full ${activeTab === 'faq' ? 'bg-premium-green text-black shadow-lg shadow-premium-green/20' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              {t.offer.faq}
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`py-3 px-8 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-full ${activeTab === 'quote' ? 'bg-premium-green text-black shadow-lg shadow-premium-green/20' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              <FileText className="w-3.5 h-3.5" />
              {t.offer.quote}
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-10 w-full min-h-[220px]">
            <AnimatePresence mode="wait">
              {activeTab === 'faq' ? (
                <motion.div
                  key="faq"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-10 text-center md:text-left"
                >
                  <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                    <h4 className="text-premium-green font-bold mb-3 text-sm uppercase tracking-wide">{t.offer.faqItems.delays.title}</h4>
                    <p className="text-white text-sm leading-relaxed">
                      <span className="block mb-1"><span className="text-gray-400">Starter :</span> {t.offer.faqItems.delays.starter}</span>
                      <span className="block mb-1"><span className="text-gray-400">Business :</span> {t.offer.faqItems.delays.business}</span>
                      <span className="block"><span className="text-gray-400">Empire :</span> {t.offer.faqItems.delays.empire}</span>
                    </p>
                  </div>
                  <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                    <h4 className="text-premium-green font-bold mb-3 text-sm uppercase tracking-wide">{t.offer.faqItems.payment.title}</h4>
                    <p className="text-white text-sm leading-relaxed">
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
                  <h4 className="text-white font-bold mb-3 text-lg">{t.offer.customProject.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                    {t.offer.customProject.description}
                  </p>
                  <a href="#contact" className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-premium-green hover:shadow-[0_0_20px_rgba(0,255,133,0.4)] transition-all">
                    {t.offer.customProject.cta}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section >
  );
};