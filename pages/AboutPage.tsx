import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Zap, Clock } from 'lucide-react';
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
        ? "Je suis le premier visage d'Osiris. Je prends en charge chaque client dès le premier contact : compréhension de votre activité, direction artistique, identité visuelle et stratégie de conversion. Mon objectif : que votre site vous ressemble et génère de vrais résultats."
        : 'First point of contact at Osiris. I lead each project from A to Z: listening to your goals, art direction, visual identity, and conversion strategy. My role: your site truly reflects your brand and works for your business.',
      tags: isFr ? ['Design', 'Commercial', 'Stratégie'] : ['Design', 'Branding', 'Commercial Strategy'],
      image: 'https://i.ibb.co/CS4GtTb/IMG-8669.jpg',
      imageWebp: 'https://i.ibb.co/CS4GtTb/IMG-8669.webp',
      alt: 'Antoine, fondateur Osiris',
    },
    {
      name: 'Noah',
      badge: isFr ? 'Co-fondateur' : 'Co-founder',
      title: isFr ? 'Associé & Lead Développeur' : 'Partner & Lead Developer',
      description: isFr
        ? "Je transforme les maquettes d'Antoine en sites rapides, solides et optimisés. Intégration, back-end, performances, SEO technique : c'est moi qui m'assure que votre site tourne parfaitement, aujourd'hui et demain."
        : 'I turn mockups into fast, reliable, durable web products. Custom development, performance optimization, technical SEO, security, and maintainability: your site runs perfectly from launch and long after.',
      tags: isFr ? ['Développement', 'Back-end', 'Performance'] : ['Development', 'Back-end', 'Performance'],
      image: 'https://i.ibb.co/gMzfwQKZ/Noah-PP.jpg',
      imageWebp: 'https://i.ibb.co/gMzfwQKZ/Noah-PP-2.webp',
      alt: 'Noah, fondateur Osiris',
    }
  ];

  const stats = [
    { value: '+30', label: isFr ? 'projets livrés' : 'projects delivered' },
    { value: '<3 sem.', label: isFr ? 'de délai' : 'turnaround' },
    { value: '100%', label: isFr ? 'satisfaction' : 'satisfaction' },
    { value: '2025', label: isFr ? 'fondée en' : 'founded' },
  ];

  const differentiators = [
    {
      icon: Users,
      title: isFr ? 'Un interlocuteur unique' : 'One direct point of contact',
      description: isFr
        ? "Vous parlez à Antoine ou Noah directement. Pas de chef de projet, pas de stagiaire, pas de relance ignorée."
        : 'You speak directly with Antoine or Noah. No project manager layer, no intern handoff, no ignored follow-up.'
    },
    {
      icon: Zap,
      title: isFr ? 'Un process clair' : 'A clear process',
      description: isFr
        ? 'Appel découverte → Maquette sous 5 jours → Développement → Livraison clé en main.'
        : 'Discovery call → Mockup in 5 days → Development → Turnkey delivery.'
    },
    {
      icon: Clock,
      title: isFr ? 'Réactivité réelle' : 'Real responsiveness',
      description: isFr
        ? 'On répond sous 24h. On livre dans les délais. On reste disponibles après la livraison.'
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

      <div className="relative z-10 pt-32 sm:pt-40 pb-8">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 flex flex-col gap-24 sm:gap-32">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-agero-ink mb-4">
              {isFr ? "L'agence derrière votre projet" : 'The agency behind your project'}
            </h1>
            <p className="text-agero-gray max-w-xl mx-auto leading-relaxed">
              {isFr
                ? 'Pas une agence anonyme. Deux passionnés avec un seul objectif : faire de votre site votre meilleur commercial.'
                : 'Not an anonymous agency. Two passionate experts with one goal: make your website your best salesperson.'}
            </p>

            {/* Stats band — same treatment as the homepage */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 rounded-3xl overflow-hidden bg-agero-ink px-4 sm:px-6 py-8"
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(50% 60% at 15% 0%, rgba(0,153,255,0.22) 0%, transparent 70%), \
                     radial-gradient(55% 55% at 90% 100%, rgba(0,113,227,0.28) 0%, transparent 75%)',
                }}
              />
              {stats.map((stat, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <span className="font-display text-2xl sm:text-4xl font-semibold text-white mb-1">{stat.value}</span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wide text-white/40">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Founders — one full "Meet [Name]" block per founder */}
          <div className="flex flex-col gap-20 sm:gap-28">
            {founders.map((founder, index) => {
              const rows = [
                { label: isFr ? 'Rôle' : 'Role', value: founder.title },
                { label: isFr ? 'Depuis' : 'Since', value: '2025' },
                { label: isFr ? 'Expertise' : 'Expertise', value: founder.tags.join(' · ') },
              ];
              const reversed = index % 2 === 1;
              return (
                <div key={founder.name} className="relative">
                  {/* Faded wordmark */}
                  <div className="relative flex justify-center pointer-events-none select-none -mb-4 sm:-mb-8">
                    <span
                      className="font-display font-semibold leading-none text-[13vw] sm:text-[6vw] tracking-tight"
                      style={{
                        backgroundImage: 'linear-gradient(180deg, rgba(29,29,31,0.22) 0%, rgba(29,29,31,0.02) 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      {isFr ? `Rencontrez ${founder.name}` : `Meet ${founder.name}`}
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative grid sm:grid-cols-2 gap-10 items-center"
                  >
                    {/* Portrait with rotating badge — alternates sides for a staggered layout */}
                    <div className={`relative ${reversed ? 'sm:order-2' : ''}`}>
                      <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5]">
                        <picture>
                          <source type="image/webp" srcSet={`${founder.imageWebp} 1200w`} sizes="(max-width: 768px) 100vw, 50vw" />
                          <img
                            src={founder.image}
                            alt={founder.alt}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </picture>
                      </div>

                      {/* Rotating badge */}
                      <div className={`absolute -bottom-6 w-24 h-24 sm:w-28 sm:h-28 ${reversed ? '-left-6' : '-right-6'}`}>
                        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_18s_linear_infinite]">
                          <defs>
                            <path id={`badge-path-${founder.name}`} d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                          </defs>
                          <circle cx="50" cy="50" r="49" fill="#131313" />
                          <text fill="#fff" fontSize="8.2" letterSpacing="1.5" fontWeight="600">
                            <textPath href={`#badge-path-${founder.name}`}>
                              OSIRIS AGENCY • {founder.badge.toUpperCase()} • MANOSQUE •
                            </textPath>
                          </text>
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-9 h-9 rounded-full bg-agero-blue flex items-center justify-center text-white text-xs font-bold">
                            O
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Bio + info list */}
                    <div className={reversed ? 'sm:order-1' : ''}>
                      <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-agero-blue mb-4">
                        {founder.badge}
                      </p>
                      <p className="text-agero-gray leading-relaxed mb-8">{founder.description}</p>

                      <div className="h-px bg-agero-line mb-6" />

                      <div className="flex flex-col gap-4">
                        {rows.map((row) => (
                          <div key={row.label} className="flex items-center justify-between gap-4">
                            <span className="text-agero-ink text-sm font-medium">{row.label}</span>
                            <span className="text-agero-gray text-sm text-right">{row.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Differentiators */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-agero-ink">
                {isFr ? 'Ce qui nous différencie' : 'What makes us different'}
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-5">
              {differentiators.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative overflow-hidden bg-white border border-agero-line hover:border-agero-blue/30 rounded-[2rem] p-7 sm:p-8 transition-colors duration-300"
                    style={{ boxShadow: '0 1px 2px rgba(15,23,41,0.03), 0 12px 30px -18px rgba(15,23,41,0.12)' }}
                  >
                    {/* Faint index number in the corner, tinted with the site's blue gradient */}
                    <span
                      className="absolute top-4 right-6 font-display text-6xl font-semibold select-none pointer-events-none opacity-[0.08]"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #0A2F63 0%, #0099FF 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div
                      className="relative w-12 h-12 rounded-2xl text-white flex items-center justify-center mb-6"
                      style={{ background: 'linear-gradient(135deg, #0A2F63 0%, #0099FF 100%)' }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="relative text-agero-ink font-semibold text-base mb-2">{item.title}</h4>
                    <p className="relative text-agero-gray text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2rem] overflow-hidden bg-agero-dark text-center px-6 py-14 sm:py-16"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(55% 55% at 20% 0%, rgba(0,153,255,0.25) 0%, transparent 70%), \
                   radial-gradient(55% 50% at 90% 100%, rgba(0,113,227,0.30) 0%, transparent 75%)',
              }}
            />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-2">
                {isFr ? 'Vous voulez travailler avec nous ?' : 'Do you want to work with us?'}
              </h3>
              <p className="text-white/50 mb-8">
                {isFr ? 'Réponse sous 24h. Premier appel gratuit.' : 'Reply within 24h. First call is free.'}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-agero-ink font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-300"
              >
                {isFr ? 'Démarrer mon projet' : 'Start my project'}
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </>
  );
};
