import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, HelpCircle, ArrowRight, ArrowLeft, FileText, Rocket, Crown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Offer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'quote'>('faq');
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Business (middle)
  const [expandedOffer, setExpandedOffer] = useState<number | null>(null);
  const { t } = useLanguage();

  const offers = [
    {
      title: t.offer.offers.starter.title,
      price: "950",
      description: t.offer.offers.starter.description,
      features: t.offer.offers.starter.features,
      highlight: false,
      icon: "rocket",
      gradient: "from-blue-500/20 to-transparent",
      badge: "Lancement",
      color: "blue"
    },
    {
      title: t.offer.offers.business.title,
      price: "1 650",
      description: t.offer.offers.business.description,
      features: t.offer.offers.business.features,
      highlight: true,
      icon: "zap",
      gradient: "from-premium-green/20 to-transparent",
      badge: t.offer.recommended,
      color: "green"
    },
    {
      title: t.offer.offers.empire.title,
      price: "2 950",
      description: t.offer.offers.empire.description,
      features: t.offer.offers.empire.features,
      highlight: false,
      icon: "crown",
      gradient: "from-purple-500/20 to-transparent",
      badge: "Domination",
      color: "purple"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'rocket': return <Rocket className="w-4 h-4 text-blue-400" />;
      case 'zap': return <Zap className="w-4 h-4 fill-black text-black" />;
      case 'crown': return <Crown className="w-4 h-4 text-purple-400" />;
      default: return null;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -2) return 'right';
    if (diff === -1 || diff === 2) return 'left';
    return 'hidden';
  };

  return (
    <section id="pricing" className="px-4 sm:px-6 py-10 sm:py-16 relative scroll-mt-20 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-premium-green/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-2 block">{t.offer.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white mb-3">{t.offer.title}</h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm">{t.offer.subtitle}</p>
        </motion.div>

        {/* Mobile: Carousel Container */}
        <div className="lg:hidden relative mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all -translate-x-2 sm:-translate-x-4"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all translate-x-2 sm:translate-x-4"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Container */}
          <div className="flex items-center justify-center h-[420px] sm:h-[480px] relative px-8 sm:px-16">
            {offers.map((offer, index) => {
              const position = getSlidePosition(index);
              const isCenter = position === 'center';

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: position === 'left' ? '-60%' : position === 'right' ? '60%' : '0%',
                    scale: isCenter ? 1 : 0.85,
                    opacity: isCenter ? 1 : 0.5,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute w-[280px] sm:w-[320px] p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] transition-all duration-300 flex flex-col
                    ${isCenter
                      ? 'bg-[#0A0A0A] border border-premium-green/30 shadow-[0_0_40px_-10px_rgba(0,255,133,0.3)]'
                      : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.06]'
                    }
                    ${isCenter ? 'cursor-default' : 'cursor-pointer'}
                  `}
                  onClick={() => !isCenter && setCurrentIndex(index)}
                >
                  {/* Badge */}
                  <div className="flex justify-center mb-4">
                    <div className={`px-3 py-1 rounded-full flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider
                      ${isCenter
                        ? 'bg-premium-green text-black'
                        : 'bg-white/10 text-gray-400 border border-white/10'
                      }`}
                    >
                      {getIcon(offer.icon)}
                      {offer.badge}
                    </div>
                  </div>

                  {/* Card Header */}
                  <div className="text-center mb-4">
                    <h3 className={`text-lg font-bold mb-2 font-display uppercase tracking-wider ${isCenter ? 'text-premium-green' : 'text-white'}`}>
                      {offer.title}
                    </h3>
                    <div className="flex items-start justify-center gap-0.5 mb-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter font-display">{offer.price}</span>
                      <span className="text-xl mt-1 text-gray-400 font-light">€</span>
                    </div>
                    {offer.highlight && isCenter && <div className="text-[9px] text-premium-green/70 font-mono tracking-widest uppercase">Offre la plus vendue</div>}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs mb-4 text-center leading-relaxed line-clamp-2">
                    {offer.description}
                  </p>

                  {/* Quick Features (only 3) */}
                  <ul className="space-y-2 mb-4 flex-1">
                    {offer.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isCenter ? 'bg-premium-green/20 text-premium-green' : 'bg-white/10 text-gray-500'}`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-xs text-gray-400 line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedOffer(index);
                      }}
                      className="w-full py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider border border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20 transition-all"
                    >
                      Voir plus
                    </button>
                    <button className={`w-full py-3 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-2
                      ${isCenter
                        ? 'bg-premium-green text-black hover:shadow-[0_0_20px_rgba(0,255,133,0.4)]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {t.offer.choosePack}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-premium-green w-6' : 'bg-white/20 hover:bg-white/40'}`}
                aria-label={`Aller à l'offre ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Static Grid - 3 cards side by side */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-16">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className={`p-8 rounded-[2rem] transition-all duration-300 flex flex-col h-full group hover:-translate-y-2
                ${offer.highlight
                  ? 'bg-[#0A0A0A] border border-premium-green/40 shadow-[0_0_60px_-15px_rgba(0,255,133,0.2)] z-10 scale-105'
                  : 'bg-white/[0.02] border border-white/10 hover:border-premium-green/30 hover:bg-white/[0.04]'
                }
              `}
            >
              <div className="flex justify-center mb-6">
                <div className={`px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider transition-all
                  ${offer.highlight
                    ? 'bg-premium-green text-black border-transparent shadow-lg shadow-premium-green/20'
                    : 'bg-white/5 text-gray-400 border border-white/10 group-hover:bg-premium-green group-hover:text-black group-hover:border-transparent'
                  }
                `}>
                  {getIcon(offer.icon)}
                  {offer.badge}
                </div>
              </div>

              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-3 text-white group-hover:text-premium-green transition-colors">
                  {offer.title}
                </h3>
                <div className="flex items-start justify-center gap-1">
                  <span className="text-5xl font-black text-white tracking-tighter">{offer.price}</span>
                  <span className="text-2xl mt-2 text-gray-500 font-light">€</span>
                </div>
                <p className="text-gray-500 text-sm mt-3 font-medium">{offer.description}</p>
              </div>

              <div className="w-full h-[1px] mb-6 bg-white/5 group-hover:bg-premium-green/20 transition-colors"></div>

              <ul className="space-y-3 mb-8 flex-1">
                {offer.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 text-gray-500 group-hover:bg-premium-green/20 group-hover:text-premium-green transition-colors">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                <Link to="/contact" className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 hover:bg-premium-green hover:text-black hover:border-transparent hover:shadow-[0_0_30px_rgba(0,255,133,0.3)] group/btn">
                  {t.offer.choosePack}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info & Tabs Section */}
        <div className="max-w-2xl mx-auto border border-white/5 bg-white/[0.02] rounded-2xl sm:rounded-[2rem] backdrop-blur-sm overflow-hidden flex flex-col items-center">
          {/* Tabs Header */}
          <div className="flex p-1.5 gap-1.5 mt-6 bg-black/20 rounded-full border border-white/5">
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-2.5 px-6 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-full ${activeTab === 'faq' ? 'bg-premium-green text-black' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              <HelpCircle className="w-3 h-3" />
              {t.offer.faq}
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`py-2.5 px-6 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-full ${activeTab === 'quote' ? 'bg-premium-green text-black' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              <FileText className="w-3 h-3" />
              {t.offer.quote}
            </button>
          </div>

          {/* Tab Content */}
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
                  <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                    <h4 className="text-premium-green font-bold mb-2 text-xs uppercase tracking-wide">{t.offer.faqItems.delays.title}</h4>
                    <p className="text-white text-xs leading-relaxed">
                      <span className="block mb-0.5"><span className="text-gray-400">Starter :</span> {t.offer.faqItems.delays.starter}</span>
                      <span className="block mb-0.5"><span className="text-gray-400">Business :</span> {t.offer.faqItems.delays.business}</span>
                      <span className="block"><span className="text-gray-400">Empire :</span> {t.offer.faqItems.delays.empire}</span>
                    </p>
                  </div>
                  <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                    <h4 className="text-premium-green font-bold mb-2 text-xs uppercase tracking-wide">{t.offer.faqItems.payment.title}</h4>
                    <p className="text-white text-xs leading-relaxed">
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
                  <h4 className="text-white font-bold mb-2 text-base">{t.offer.customProject.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-sm">
                    {t.offer.customProject.description}
                  </p>
                  <a href="#contact" className="px-6 py-3 bg-white text-black font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-premium-green transition-all">
                    {t.offer.customProject.cta}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Expanded Offer Modal */}
      <AnimatePresence>
        {expandedOffer !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedOffer(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 sm:max-w-md sm:w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setExpandedOffer(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {expandedOffer !== null && (
                <>
                  <div className="flex justify-center mb-4">
                    <div className={`px-4 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider
                      ${offers[expandedOffer].highlight
                        ? 'bg-premium-green text-black'
                        : 'bg-white/10 text-gray-400'
                      }`}
                    >
                      {getIcon(offers[expandedOffer].icon)}
                      {offers[expandedOffer].badge}
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 font-display text-center uppercase tracking-wider ${offers[expandedOffer].highlight ? 'text-premium-green' : 'text-white'}`}>
                    {offers[expandedOffer].title}
                  </h3>

                  <div className="flex items-start justify-center gap-1 mb-4">
                    <span className="text-5xl font-black text-white tracking-tighter font-display">{offers[expandedOffer].price}</span>
                    <span className="text-2xl mt-2 text-gray-400 font-light">€</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
                    {offers[expandedOffer].description}
                  </p>

                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

                  <ul className="space-y-3 mb-8">
                    {offers[expandedOffer].features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${offers[expandedOffer].highlight ? 'bg-premium-green/20 text-premium-green' : 'bg-white/10 text-gray-400'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2
                    ${offers[expandedOffer].highlight
                      ? 'bg-premium-green text-black hover:shadow-[0_0_30px_rgba(0,255,133,0.4)]'
                      : 'bg-white text-black hover:bg-premium-green'
                    }`}
                  >
                    {t.offer.choosePack}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};