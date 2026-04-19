import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Hexagon } from 'lucide-react';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const founders = [
    {
      name: 'Antoine',
      title: isFr ? 'CEO & Directeur Commercial / Design' : 'CEO & Commercial / Design Director',
      description: isFr
        ? "Je suis le premier visage d'Osiris. Je prends en charge chaque client des le premier contact : comprehension de votre activite, direction artistique, identite visuelle et strategie de conversion. Mon objectif : que votre site vous ressemble et genere de vrais resultats."
        : 'First point of contact at Osiris. I lead each project from A to Z: listening to your goals, art direction, visual identity, and conversion strategy. My role: your site truly reflects your brand and works for your business.',
      tags: isFr
        ? '🎨 Design · 📞 Commercial · 🧭 Strategie'
        : 'Design · Branding · Commercial Strategy',
      image: 'https://i.ibb.co/CS4GtTb/IMG-8669.jpg',
      imageWebp: 'https://i.ibb.co/CS4GtTb/IMG-8669.webp',
      alt: 'Antoine fondateur Osiris'
    },
    {
      name: 'Noah',
      title: isFr ? 'Associe & Lead Developpeur' : 'Partner & Lead Developer',
      description: isFr
        ? "Je transforme les maquettes d'Antoine en sites rapides, solides et optimises. Integration, back-end, performances, SEO technique : c'est moi qui m'assure que votre site tourne parfaitement, aujourd'hui et demain."
        : 'I turn mockups into fast, reliable, durable web products. Custom development, performance optimization, technical SEO, security, and maintainability: your site runs perfectly from launch and long after.',
      tags: isFr
        ? '💻 Developpement · ⚙️ Back-end · 🚀 Performance'
        : 'Development · Back-end · Performance',
      image: 'https://i.ibb.co/gMzfwQKZ/Noah-PP.jpg',
      imageWebp: 'https://i.ibb.co/gMzfwQKZ/Noah-PP-2.webp',
      alt: 'Noah fondateur Osiris'
    }
  ];

  const differentiators = [
    {
      title: isFr ? 'Un interlocuteur unique' : 'One direct point of contact',
      description: isFr
        ? 'Vous parlez a Antoine ou Noah directement. Pas de chef de projet, pas de stagiaire, pas de relance ignoree.'
        : 'You speak directly with Antoine or Noah. No project manager layer, no intern handoff, no ignored follow-up.'
    },
    {
      title: isFr ? 'Un process clair' : 'A clear process',
      description: isFr
        ? 'Appel decouverte -> Maquette sous 5 jours -> Developpement -> Livraison cle en main.'
        : 'Discovery call -> Mockup in 5 days -> Development -> Turnkey delivery.'
    },
    {
      title: isFr ? 'Reactivite reelle' : 'Real responsiveness',
      description: isFr
        ? 'On repond sous 24h. On livre dans les delais. On reste disponibles apres la livraison.'
        : 'We reply within 24h. We deliver on time. We remain available after launch.'
    }
  ];

  return (
    <>
      <SEOHead
        title={isFr ? 'A propos - Osiris Agency' : 'About - Osiris Agency'}
        description={isFr
          ? 'Decouvrez les deux fondateurs derriere Osiris Agency et notre facon de travailler pour livrer des sites vitrines premium.'
          : 'Meet the two founders behind Osiris Agency and how we deliver premium showcase websites.'}
        canonical="https://osiris-agency.fr/a-propos"
      />

      <div className="relative z-10 pt-24 sm:pt-28 pb-14 sm:pb-16 px-5 sm:px-6">
        <div className="container mx-auto max-w-7xl space-y-12 sm:space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mb-6">
              {isFr ? "L'agence derriere votre projet" : 'The agency behind your project'}
            </h1>
            <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {isFr
                ? 'Pas une agence anonyme. Deux passionnes avec un seul objectif : faire de votre site votre meilleur commercial.'
                : 'Not an anonymous agency. Two passionate experts with one goal: make your website your best salesperson.'}
            </p>
          </motion.section>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {founders.map((founder, index) => (
                <motion.article
                  key={founder.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-5 sm:p-7"
                >
                  <div className="aspect-[4/5] max-w-[250px] sm:max-w-[320px] md:max-w-none mb-5 sm:mb-6 mx-auto overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`${founder.imageWebp} 1200w, ${founder.imageWebp} 2000w`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <img
                        src={founder.image}
                        srcSet={`${founder.image} 1200w, ${founder.image} 2000w, ${founder.image} 3200w`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        alt={founder.alt}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </picture>
                  </div>

                  <h2 className="text-3xl font-display font-black text-white mb-1">{founder.name}</h2>
                  <p className="text-premium-green text-[14px] uppercase tracking-[0.1em] font-bold mb-5">{founder.title}</p>
                  <p className="text-gray-300 leading-relaxed mb-5">{founder.description}</p>
                  <span className="inline-flex items-center rounded-full border border-premium-green/30 bg-premium-green/10 px-4 py-2 text-xs text-white tracking-wide">
                    {founder.tags}
                  </span>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-4 sm:p-8">
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white mb-5 sm:mb-8 text-center">
              {isFr ? 'Ce qui nous differencie' : 'What makes us different'}
            </h3>

            <div className="grid responsive-card-grid gap-4 sm:gap-6">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-4 text-premium-green">
                    <Hexagon className="w-5 h-5" />
                    <h4 className="text-white font-bold text-base sm:text-lg">{item.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h3 className="text-3xl sm:text-5xl font-display font-black text-white mb-6">
              {isFr ? 'Vous voulez travailler avec nous ?' : 'Do you want to work with us?'}
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-premium-green text-white font-black uppercase tracking-wider px-8 py-4 rounded-full hover:scale-105 transition-transform"
            >
              {isFr ? 'Demarrer mon projet →' : 'Start my project →'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};
