import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, HelpCircle, ArrowRight, FileText } from 'lucide-react';

const offers = [
  {
    title: "Starter",
    price: "950",
    description: "L'essentiel pour exister avec élégance.",
    features: [
      "Site One-Page (Landing Page)",
      "Design UI/UX Premium",
      "Responsive Mobile & Tablette",
      "Optimisation Vitesse",
      "Hébergement offert (1 an)"
    ],
    highlight: false,
    delay: 0
  },
  {
    title: "Business",
    price: "1 650",
    description: "Pour les entreprises en pleine expansion.",
    features: [
      "Site Vitrine (jusqu'à 5 pages)",
      "CMS (Gestion autonome)",
      "Animations avancées",
      "SEO Technique Optimisé",
      "Analytics & Pixel Tracking"
    ],
    highlight: true,
    delay: 0.2
  },
  {
    title: "Empire",
    price: "2 950",
    description: "La domination totale de votre marché.",
    features: [
      "Site E-commerce ou Complexe",
      "Design 100% Sur-Mesure",
      "Effets 3D & WebGL",
      "Intégration CRM & API",
      "Stratégie Digitale & Support"
    ],
    highlight: false,
    delay: 0.4
  }
];

export const Offer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'quote'>('faq');

  return (
    <section id="pricing" className="px-6 py-32 relative scroll-mt-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[800px] bg-premium-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-2 block">Tarifs Transparents</span>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-4">Investissement.</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Trois niveaux d'excellence pour propulser votre business. Pas de coûts cachés.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-24">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: offer.delay, duration: 0.6 }}
              className={`relative p-8 md:p-10 rounded-[2rem] transition-all duration-300 group
                ${offer.highlight
                  ? 'bg-[#0A0A0A] border border-premium-green/30 shadow-[0_0_50px_-20px_rgba(0,255,133,0.3)] z-10 scale-100 md:scale-110'
                  : 'bg-white/[0.02] border border-white/5 hover:border-white/10'
                }
              `}
            >
              {offer.highlight && (
                <div className="absolute inset-0 bg-gradient-to-b from-premium-green/5 to-transparent rounded-[2rem] pointer-events-none"></div>
              )}

              {offer.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-premium-green text-black text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2 shadow-lg shadow-premium-green/20">
                  <Zap className="w-3 h-3 fill-black" />
                  Recommandé
                </div>
              )}

              <h3 className={`text-lg font-bold mb-2 font-display uppercase tracking-wider ${offer.highlight ? 'text-premium-green' : 'text-white'}`}>
                {offer.title}
              </h3>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl md:text-5xl font-black text-white tracking-tight">{offer.price}€</span>
              </div>

              <p className="text-gray-400 text-xs mb-8 h-8 font-medium">{offer.description}</p>

              <div className={`w-full h-[1px] mb-8 ${offer.highlight ? 'bg-gradient-to-r from-transparent via-premium-green/30 to-transparent' : 'bg-white/5'}`}></div>

              <ul className="space-y-4 mb-10">
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${offer.highlight ? 'bg-premium-green text-black' : 'bg-white/10 text-gray-400'}`}>
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className={`text-sm ${offer.highlight ? 'text-white' : 'text-gray-400'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 border flex items-center justify-center gap-2
                  ${offer.highlight
                  ? 'bg-premium-green text-black border-transparent hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                  : 'bg-transparent text-white border-white/10 hover:bg-white/5 hover:border-white/30'
                }
                `}>
                Choisir ce pack
                {offer.highlight && <ArrowRight className="w-4 h-4" />}
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
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              className={`py-3 px-8 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-full ${activeTab === 'quote' ? 'bg-premium-green text-black shadow-lg shadow-premium-green/20' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              <FileText className="w-3.5 h-3.5" />
              Devis
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
                    <h4 className="text-premium-green font-bold mb-3 text-sm uppercase tracking-wide">Quels sont les délais ?</h4>
                    <p className="text-white text-sm leading-relaxed">
                      <span className="block mb-1"><span className="text-gray-400">Starter :</span> 7 jours ouvrés.</span>
                      <span className="block mb-1"><span className="text-gray-400">Business :</span> 14 jours ouvrés.</span>
                      <span className="block"><span className="text-gray-400">Empire :</span> 3-5 semaines.</span>
                    </p>
                  </div>
                  <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                    <h4 className="text-premium-green font-bold mb-3 text-sm uppercase tracking-wide">Paiement échelonné ?</h4>
                    <p className="text-white text-sm leading-relaxed">
                      Oui. <span className="text-white font-semibold">50% d'acompte</span> au lancement du projet, et les <span className="text-white font-semibold">50% restants</span> à la livraison finale.
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
                  <h4 className="text-white font-bold mb-3 text-lg">Un projet spécifique ?</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                    Vous avez des besoins particuliers ou un cahier des charges complexe ?
                    Demandez un devis sur-mesure adapté à votre ambition.
                  </p>
                  <a href="#contact" className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-premium-green hover:shadow-[0_0_20px_rgba(0,255,133,0.4)] transition-all">
                    Demander un devis personnalisé
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