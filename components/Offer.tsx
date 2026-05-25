import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, HelpCircle, ArrowRight, ArrowLeft, FileText, Rocket, Crown, ChevronLeft, ChevronRight, ChevronDown, X, Sparkles } from 'lucide-react';
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
      color: "blue",
      newFrom: 0
    },
    {
      title: t.offer.offers.business.title,
      price: "1 650",
      description: t.offer.offers.business.description,
      features: t.offer.offers.business.features,
      highlight: true,
      icon: "zap",
      gradient: "from-amber-400/20 to-transparent",
      badge: t.offer.recommended,
      color: "amber",
      newFrom: 1
    },
    {
      title: t.offer.offers.empire.title,
      price: "2 950",
      description: t.offer.offers.empire.description,
      features: t.offer.offers.empire.features,
      highlight: false,
      icon: "crown",
      gradient: "from-purple-500/20 to-transparent",
      badge: "Signature",
      color: "purple",
      newFrom: 1
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'rocket': return <Rocket className="w-4 h-4 text-blue-400" />;
      case 'zap': return <Zap className="w-4 h-4" />;
      case 'crown': return <Crown className="w-4 h-4 text-purple-400" />;
      default: return null;
    }
  };

  const getIconLarge = (name: string, color: string) => {
    const cls = `w-7 h-7 drop-shadow-[0_0_10px_currentColor] ${
      color === 'blue' ? 'text-blue-400' : color === 'amber' ? 'text-amber-400' : 'text-purple-400'
    }`;
    switch (name) {
      case 'rocket': return <Rocket className={cls} />;
      case 'zap': return <Zap className={cls} />;
      case 'crown': return <Crown className={cls} />;
      default: return null;
    }
  };

  const getBorderColor = (color: string) => {
    if (color === 'blue') return 'border-blue-500/40 shadow-[0_0_40px_-15px_rgba(59,130,246,0.25)]';
    if (color === 'amber') return 'border-amber-400/40 shadow-[0_0_40px_-15px_rgba(251,191,36,0.25)]';
    return 'border-purple-500/40 shadow-[0_0_40px_-15px_rgba(168,85,247,0.25)]';
  };

  const getAccentBg = (color: string) => {
    if (color === 'blue') return 'bg-blue-500/15 text-blue-400';
    if (color === 'amber') return 'bg-amber-400/15 text-amber-400';
    return 'bg-purple-500/15 text-purple-400';
  };

  const getAccentText = (color: string) => {
    if (color === 'blue') return 'group-hover:text-blue-400';
    if (color === 'amber') return 'group-hover:text-amber-400';
    return 'group-hover:text-purple-400';
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
          <h2 className="text-3xl sm:text-4xl font-bold italic font-display text-[#0F1729] mb-3">{t.offer.title}</h2>
          <p className="text-[#0F1729]/50 max-w-md mx-auto text-sm">{t.offer.subtitle}</p>
        </motion.div>

        {/* Mobile: Accordion Rectangles */}
        <div className="lg:hidden flex flex-col gap-3 mb-10">
          {offers.map((offer, index) => {
            const isExpanded = expandedOffer === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.985 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`bg-white rounded-2xl border overflow-hidden transition-colors duration-300 ${getBorderColor(offer.color)}`}
              >
                {/* Row header — tap to expand/collapse */}
                <button
                  onClick={() => setExpandedOffer(isExpanded ? null : index)}
                  className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${getAccentBg(offer.color)}`}>
                      {getIcon(offer.icon)}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-[11px] font-black uppercase tracking-widest truncate ${offer.color === 'blue' ? 'text-blue-400' : offer.color === 'amber' ? 'text-amber-400' : 'text-purple-400'}`}>
                        {offer.title}
                      </div>

                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="text-right">
                      <span className="text-lg font-bold text-[#0F1729] font-display tabular-nums">{offer.price}</span>
                      <span className="text-[#0F1729]/40 text-[10px] ml-0.5">€</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0F1729]/40 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-premium-green' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expandable detail */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5">
                        <div className="w-full h-[1px] bg-white/5 mb-4" />
                        <p className="text-[#0F1729]/50 text-xs leading-relaxed mb-4">
                          {offer.description}
                        </p>
                        <ul className="space-y-2 mb-5">
                          {offer.features.map((feature, i) => {
                            const isInherited = i < (offer.newFrom ?? 0);
                            return (
                              <li key={i} className="flex items-start gap-2">
                                <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isInherited ? 'bg-amber-400/15 text-amber-400' : getAccentBg(offer.color)}`}>
                                  {isInherited ? <Check className="w-2.5 h-2.5" /> : <Sparkles className="w-2.5 h-2.5" />}
                                </div>
                                <span className={`text-xs ${isInherited ? 'text-amber-400 font-medium' : 'text-gray-300'}`}>{feature}</span>
                              </li>
                            );
                          })}
                        </ul>
                        <Link
                          to="/contact"
                          className={`w-full py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 border ${
                            offer.color === 'blue' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500 hover:text-white hover:border-transparent' :
                            offer.color === 'amber' ? 'bg-amber-400/10 text-amber-400 border-amber-400/20 hover:bg-amber-400 hover:text-black hover:border-transparent' :
                            'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500 hover:text-white hover:border-transparent'
                          }`}
                        >
                          {t.offer.choosePack}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: PricingPage-style grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mb-16 items-stretch">
          {offers.map((offer, index) => {
            const glowColor = offer.color === 'blue'
              ? 'rgba(59,130,246,0.2)'
              : offer.color === 'amber'
                ? 'rgba(251,191,36,0.18)'
                : 'rgba(168,85,247,0.2)';

            const topLine = offer.color === 'blue'
              ? 'from-transparent via-blue-500 to-transparent'
              : offer.color === 'amber'
                ? 'from-transparent via-amber-400 to-transparent'
                : 'from-transparent via-purple-500 to-transparent';

            const borderClass = offer.color === 'blue'
              ? 'border-blue-500/25 hover:border-blue-500/55'
              : offer.color === 'amber'
                ? 'border-amber-400/30 hover:border-amber-400/60'
                : 'border-purple-500/25 hover:border-purple-500/55';

            const iconRing = offer.color === 'blue'
              ? 'bg-blue-500/10 shadow-[0_0_22px_rgba(59,130,246,0.3)] text-blue-400'
              : offer.color === 'amber'
                ? 'bg-amber-400/10 shadow-[0_0_22px_rgba(251,191,36,0.3)] text-amber-400'
                : 'bg-purple-500/10 shadow-[0_0_22px_rgba(168,85,247,0.3)] text-purple-400';

            const priceNumColor = offer.color === 'blue'
              ? 'text-blue-500/[0.05]'
              : offer.color === 'amber'
                ? 'text-amber-400/[0.06]'
                : 'text-purple-500/[0.05]';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative rounded-[2rem] border bg-white flex flex-col overflow-hidden cursor-default transition-shadow duration-500 ${borderClass} ${offer.highlight ? 'shadow-[0_0_70px_-15px_rgba(251,191,36,0.35)]' : ''}`}
                style={{ boxShadow: `0 0 60px -20px ${glowColor}` }}
              >
                {/* Ambient glow spot */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 50% at 50% -5%, ${glowColor}, transparent 70%)` }}
                />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${topLine}`} />

                {/* Top gradient wash */}
                <div className={`absolute top-0 inset-x-0 h-32 pointer-events-none opacity-30 ${
                  offer.color === 'blue' ? 'bg-gradient-to-b from-blue-500/20 to-transparent'
                  : offer.color === 'amber' ? 'bg-gradient-to-b from-amber-400/20 to-transparent'
                  : 'bg-gradient-to-b from-purple-500/20 to-transparent'
                }`} />

                {/* Large decorative price number in background */}
                <span className={`absolute -bottom-6 -right-3 font-black font-display text-[9rem] leading-none select-none pointer-events-none ${priceNumColor}`}>
                  {offer.price.replace(' ', '')}
                </span>

                <div className="relative z-10 p-6 lg:p-7 flex flex-col flex-1">
                  {/* Icon ring */}
                  <div className="flex justify-center mb-5">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 ${iconRing}`}>
                      {getIconLarge(offer.icon, offer.color)}
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div className="mb-5 text-center">
                    <h3 className="text-xl font-black font-display uppercase tracking-widest mb-3 text-[#0F1729]">
                      {offer.title}
                    </h3>
                    <div className="flex items-start justify-center gap-1">
                      <span className={`text-5xl lg:text-6xl font-black tracking-tighter ${
                        offer.color === 'amber' ? 'text-amber-600' : 'text-[#0F1729]'
                      }`}>
                        {offer.price}
                      </span>
                      <span className="text-xl lg:text-2xl mt-2 lg:mt-3 text-gray-400 font-light">€</span>
                    </div>
                    <p className="text-[#0F1729]/50 text-xs lg:text-sm mt-4 leading-relaxed px-1 lg:px-2">{offer.description}</p>
                  </div>

                  {/* Separator */}
                  <div className={`w-full h-px mb-5 bg-gradient-to-r ${
                    offer.color === 'blue'   ? 'from-transparent via-blue-500/40 to-transparent'
                    : offer.color === 'amber' ? 'from-transparent via-amber-400/40 to-transparent'
                                             : 'from-transparent via-purple-500/40 to-transparent'
                  }`} />

                  {/* Features — all items */}
                  <ul className="flex flex-col space-y-2.5 mb-6 flex-1">
                    {offer.features.map((feature, i) => {
                      const isInherited = i < (offer.newFrom ?? 0);
                      return (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isInherited
                              ? 'bg-amber-400/15 text-amber-400'
                              : offer.color === 'blue'   ? 'bg-blue-500/15   text-blue-400   group-hover/item:bg-blue-500/30'
                              : offer.color === 'amber'  ? 'bg-amber-400/15  text-amber-400  group-hover/item:bg-amber-400/30'
                                                        : 'bg-purple-500/15 text-purple-400 group-hover/item:bg-purple-500/30'
                          }`}>
                            {isInherited ? <Check className="w-2.5 h-2.5" /> : <Sparkles className="w-2.5 h-2.5" />}
                          </div>
                          <span className={`text-xs leading-relaxed transition-colors duration-300 ${
                            isInherited ? 'text-amber-400 font-semibold' : 'text-[#0F1729]/65 group-hover/item:text-[#0F1729]'
                          }`}>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`mt-auto w-full py-4 lg:py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 border transition-all duration-300 ${
                      offer.color === 'blue'
                        ? 'bg-blue-600/20 border-blue-500/40 text-blue-300 hover:bg-blue-600 hover:text-white hover:border-transparent hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]'
                        : offer.color === 'amber'
                          ? 'bg-amber-400/20 border-amber-400/40 text-amber-300 hover:bg-amber-500 hover:text-black hover:border-transparent hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]'
                          : 'bg-purple-600/20 border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-transparent hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]'
                    }`}
                  >
                    {t.offer.choosePack}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info & Tabs Section */}
        <div className="max-w-2xl mx-auto border border-white/5 bg-white/[0.02] rounded-2xl sm:rounded-[2rem] backdrop-blur-sm overflow-hidden flex flex-col items-center">
          {/* Tabs Header */}
          <div className="flex p-1.5 gap-1.5 mt-6 bg-black/20 rounded-full border border-white/5">
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-2.5 px-6 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-full ${activeTab === 'faq' ? 'bg-premium-green text-white' : 'text-[#0F1729]/50 hover:text-[#0F1729] hover:bg-[#F5F4EF]'}`}
            >
              <HelpCircle className="w-3 h-3" />
              {t.offer.faq}
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`py-2.5 px-6 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-full ${activeTab === 'quote' ? 'bg-premium-green text-white' : 'text-[#0F1729]/50 hover:text-[#0F1729] hover:bg-[#F5F4EF]'}`}
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
                      <span className="block mb-0.5"><span className="text-gray-400">Fondation :</span> {t.offer.faqItems.delays.starter}</span>
                      <span className="block mb-0.5"><span className="text-gray-400">Stratégie :</span> {t.offer.faqItems.delays.business}</span>
                      <span className="block"><span className="text-gray-400">Signature :</span> {t.offer.faqItems.delays.empire}</span>
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
                aria-label="Close"
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {expandedOffer !== null && (
                <>
                  <h3 className={`text-2xl font-bold mb-2 font-display text-center uppercase tracking-wider ${offers[expandedOffer].color === 'blue' ? 'text-blue-400' : offers[expandedOffer].color === 'amber' ? 'text-amber-400' : 'text-purple-400'}`}>
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
                    {offers[expandedOffer].features.map((feature, i) => {
                      const isInherited = i < (offers[expandedOffer].newFrom ?? 0);
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isInherited ? 'bg-amber-400/15 text-amber-400' : getAccentBg(offers[expandedOffer].color)}`}>
                            {isInherited ? <Check className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                          </div>
                          <span className={`text-sm ${isInherited ? 'text-amber-400 font-medium' : 'text-gray-300'}`}>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border ${
                    offers[expandedOffer].color === 'blue' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500 hover:text-white hover:border-transparent hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]' :
                    offers[expandedOffer].color === 'amber' ? 'bg-amber-400/10 text-amber-400 border-amber-400/20 hover:bg-amber-400 hover:text-black hover:border-transparent hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]' :
                    'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500 hover:text-white hover:border-transparent hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]'
                  }`}>
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