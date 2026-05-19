import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Clock } from 'lucide-react';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const founders = [
    {
      name: 'Antoine',
      badge: isFr ? 'Fondateur' : 'Founder',
      title: isFr ? 'CEO & Directeur Commercial / Design' : 'CEO & Commercial / Design Director',
      description: isFr
        ? "Je suis le premier visage d'Osiris. Je prends en charge chaque client des le premier contact : comprehension de votre activite, direction artistique, identite visuelle et strategie de conversion. Mon objectif : que votre site vous ressemble et genere de vrais resultats."
        : 'First point of contact at Osiris. I lead each project from A to Z: listening to your goals, art direction, visual identity, and conversion strategy. My role: your site truly reflects your brand and works for your business.',
      tags: isFr
        ? '🎨 Design · 📞 Commercial · 🧭 Strategie'
        : 'Design · Branding · Commercial Strategy',
      image: 'https://i.ibb.co/CS4GtTb/IMG-8669.jpg',
      imageWebp: 'https://i.ibb.co/CS4GtTb/IMG-8669.webp',
      alt: 'Antoine fondateur Osiris',
      imagePosition: 'center top'
    },
    {
      name: 'Noah',
      badge: isFr ? 'Co-fondateur' : 'Co-founder',
      title: isFr ? 'Associe & Lead Developpeur' : 'Partner & Lead Developer',
      description: isFr
        ? "Je transforme les maquettes d'Antoine en sites rapides, solides et optimises. Integration, back-end, performances, SEO technique : c'est moi qui m'assure que votre site tourne parfaitement, aujourd'hui et demain."
        : 'I turn mockups into fast, reliable, durable web products. Custom development, performance optimization, technical SEO, security, and maintainability: your site runs perfectly from launch and long after.',
      tags: isFr
        ? '💻 Developpement · ⚙️ Back-end · 🚀 Performance'
        : 'Development · Back-end · Performance',
      image: 'https://i.ibb.co/gMzfwQKZ/Noah-PP.jpg',
      imageWebp: 'https://i.ibb.co/gMzfwQKZ/Noah-PP-2.webp',
      alt: 'Noah fondateur Osiris',
      imagePosition: 'center top'
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
        title={isFr ? 'À propos – Osiris Agency | Agence Web Manosque' : 'About – Osiris Agency | Web Agency Manosque'}
        description={isFr
          ? `Découvrez Antoine & Noah, fondateurs d'Osiris Agency à Manosque (04100). Agence web premium spécialisée en création de sites vitrines et design sur-mesure.`
          : 'Meet the two founders behind Osiris Agency in Manosque, France. Premium web agency specialising in custom showcase websites and UI/UX design.'}
        canonical="https://osiris-agency.fr/a-propos"
        ogImage="https://osiris-agency.fr/og-image.png"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://osiris-agency.fr/" },
                { "@type": "ListItem", "position": 2, "name": "À propos", "item": "https://osiris-agency.fr/a-propos" }
              ]
            },
            {
              "@type": "AboutPage",
              "name": "À propos – Osiris Agency",
              "url": "https://osiris-agency.fr/a-propos",
              "description": "Découvrez l'équipe d'Osiris Agency, agence web à Manosque (Alpes-de-Haute-Provence)",
              "about": {
                "@type": "LocalBusiness",
                "name": "Osiris Agency",
                "url": "https://osiris-agency.fr",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Manosque",
                  "postalCode": "04100",
                  "addressCountry": "FR"
                }
              }
            }
          ]
        }}
      />

      <div className="relative z-10 pt-32 sm:pt-40 pb-20">
        <div className="mx-auto" style={{ maxWidth: '1024px', paddingInline: 'clamp(24px, 5vw, 80px)' }}>
          {/* Section 1+2 — Hero & Stats */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ padding: 0 }}
          >
            <div style={{ paddingTop: 0, paddingBottom: '48px' }}>
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-premium-green/30 bg-premium-green/10">
              <span className="w-1.5 h-1.5 rounded-full bg-premium-green animate-pulse" />
              <span className="text-premium-green text-[10px] font-black uppercase tracking-[0.2em]">
                {isFr ? 'Agence fondée en 2025' : 'Founded in 2025'}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white mb-3 leading-tight">
              {isFr ? "L'agence derriere votre projet" : 'The agency behind your project'}
            </h1>
            <p className="text-gray-400 mx-auto" style={{ fontSize: 'clamp(14px, 4vw, 18px)', lineHeight: '1.7', maxWidth: '640px' }}>
              {isFr
                ? 'Pas une agence anonyme. Deux passionnes avec un seul objectif : faire de votre site votre meilleur commercial.'
                : 'Not an anonymous agency. Two passionate experts with one goal: make your website your best salesperson.'}
            </p>
            </div>

            {/* Stats pill — même section, margin-bottom 64px */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center border border-white/8 rounded-full bg-white/[0.02] overflow-hidden mx-auto"
              style={{ maxWidth: '560px', paddingInline: 'clamp(12px, 3.5vw, 32px)', paddingBlock: 'clamp(10px, 1.8vw, 14px)', marginBottom: 'clamp(32px, 7vw, 64px)', width: 'fit-content' }}
            >
              {[
                { value: '+30', label: isFr ? 'projets livrés' : 'projects' },
                { value: '< 3 sem.', label: isFr ? 'de délai' : 'delivery' },
                { value: '100%', label: isFr ? 'satisfaction' : 'satisfaction' },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="w-px self-stretch bg-white/10 flex-shrink-0" style={{ marginInline: 'clamp(10px, 2.5vw, 32px)' }} />}
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="font-black font-display leading-none" style={{ color: '#C9A84C', fontSize: 'clamp(11px, 3.5vw, 15px)', textShadow: '0 0 12px rgba(201,168,76,0.7), 0 0 28px rgba(201,168,76,0.35)' }}>{stat.value}</span>
                    <span className="text-gray-400 uppercase font-semibold" style={{ fontSize: 'clamp(8px, 2.2vw, 13px)', letterSpacing: 'clamp(0.04em, 0.3vw, 0.16em)' }}>{stat.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </motion.section>

          {/* Section 3 — Cartes fondateurs */}
          <section style={{ padding: 0, marginBottom: '72px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '28px' }}>
              {founders.map((founder, index) => (
                <motion.article
                  key={founder.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/[0.02] border border-white/[0.08] hover:border-premium-green/40 transition-all duration-500 overflow-hidden"
                  style={{ borderRadius: '20px' }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Photo — full-width, tall */}
                  <div className="about-founder-photo relative overflow-hidden" style={{ height: '320px' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-[1] pointer-events-none" />
                    <picture>
                      <source type="image/webp" srcSet={`${founder.imageWebp} 1200w`} sizes="(max-width: 768px) 100vw, 50vw" />
                      <img
                        src={founder.image}
                        alt={founder.alt}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                        style={{ objectPosition: founder.imagePosition }}
                        loading="lazy"
                      />
                    </picture>
                    {/* Badge overlayed on photo */}
                    <div className="absolute top-4 right-4 z-[2]">
                      <span className="border border-premium-green/50 bg-black/60 backdrop-blur-sm text-premium-green font-black uppercase" style={{ fontSize: '11px', letterSpacing: '0.1em', padding: '4px 14px', borderRadius: '9999px', display: 'inline-block' }}>
                        {founder.badge}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: '28px 28px 26px' }}>
                    <div className="mb-3">
                      <h2 className="font-display font-bold text-white mb-1" style={{ fontSize: '28px' }}>{founder.name}</h2>
                      <p className="text-premium-green font-bold uppercase" style={{ fontSize: '12px', letterSpacing: '0.08em' }}>{founder.title}</p>
                    </div>
                    <p className="text-gray-400 mb-5" style={{ fontSize: '14px', lineHeight: '1.65' }}>{founder.description}</p>
                    <span className="inline-flex items-center border border-white/10 bg-white/[0.03] text-gray-300 tracking-wide w-fit" style={{ fontSize: '12px', padding: '5px 14px', borderRadius: '9999px' }}>
                      {founder.tags}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Section 4 — Ce qui nous différencie */}
          <section style={{ padding: 0, marginBottom: '64px' }}>
            <div className="flex items-center gap-3" style={{ marginBottom: '24px' }}>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <h3 className="text-gray-600 uppercase font-black whitespace-nowrap" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>
                {isFr ? 'Ce qui nous différencie' : 'What makes us different'}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '16px' }}>
              {differentiators.map((item, i) => {
                const icons = [Users, Zap, Clock];
                const Icon = icons[i];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative group border border-white/[0.07] bg-white/[0.02] hover:border-premium-green/30 hover:bg-white/[0.04] transition-all duration-400 overflow-hidden flex flex-col"
                    style={{ borderRadius: '12px', padding: '20px 24px' }}
                  >
                    {/* Bottom glow line on hover */}
                    <div className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-premium-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="rounded-md bg-premium-green/10 border border-premium-green/20 flex items-center justify-center text-premium-green flex-shrink-0 group-hover:scale-110 group-hover:bg-premium-green/15 transition-all duration-300" style={{ width: '32px', height: '32px', marginBottom: '8px' }}>
                      <Icon style={{ width: '16px', height: '16px' }} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white font-semibold mb-1.5" style={{ fontSize: '14px' }}>{item.title}</h4>
                      <p className="text-gray-400" style={{ fontSize: '13px', lineHeight: '1.5' }}>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Section 5 — CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative border border-premium-green/20 text-center overflow-hidden"
            style={{ borderRadius: '20px', paddingTop: '56px', paddingBottom: '72px', paddingInline: '24px', background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%), rgba(255,255,255,0.01)' }}
          >
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-premium-green/50 to-transparent" />
            <div className="relative">
              <h3 className="font-display font-bold text-white" style={{ fontSize: 'clamp(22px, 4vw, 28px)' }}>
                {isFr ? 'Vous voulez travailler avec nous ?' : 'Do you want to work with us?'}
              </h3>
              <p className="text-gray-400 mx-auto" style={{ fontSize: '15px', marginTop: '8px', maxWidth: '400px' }}>
                {isFr ? 'Réponse sous 24h. Premier appel gratuit.' : 'Reply within 24h. First call is free.'}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-premium-green text-white font-semibold uppercase tracking-wider rounded-full hover:scale-105 transition-transform w-full sm:w-auto"
                style={{ height: '52px', paddingInline: '36px', fontSize: '15px', marginTop: '28px', maxWidth: '320px' }}
              >
                {isFr ? 'Démarrer mon projet' : 'Start my project'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </>
  );
};
