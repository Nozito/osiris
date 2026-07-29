import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PROJECT_IMAGES: Record<string, string> = {
  "Blyss": "https://i.ibb.co/1YVVTQTc/B3-B2.png",
  "L'Artisan": "/images/works/lartisan.png",
  "Joe": "/images/works/joe.png",
};

// What osiris actually did on each project — same scope across the 3, so shared.
const SERVICES = ['UI/UX Design', 'Développement', 'Intégration', 'Responsive'];

const ROTATIONS = ['-2deg', '2deg', '-1.5deg'];

export const Works: React.FC = () => {
  const { t } = useLanguage();
  const total = t.works.projects.length;

  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28 bg-transparent" id="works">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-xl"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-agero-ink mb-4">
            {t.works.title}
          </h2>
          <p className="text-agero-gray leading-relaxed">{t.works.subtitle}</p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {t.works.projects.map((project, i) => {
            const image = PROJECT_IMAGES[project.brand];
            return (
              <motion.div
                key={project.brand}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2rem] overflow-hidden bg-agero-dark min-h-[560px] sm:min-h-[640px]"
              >
                {/* Ambient backdrop — the project's own screenshot, large and only lightly blurred */}
                <div className="absolute inset-0" aria-hidden="true">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover scale-105"
                    style={{ filter: 'blur(22px) saturate(1.25)' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-agero-dark/55" />
                </div>

                <div className="relative h-full grid lg:grid-cols-3 gap-10 items-end px-8 sm:px-16 lg:px-20 pt-20 sm:pt-28 pb-12 sm:pb-16">
                  {/* Left: intro + index + brand name */}
                  <div className="flex flex-col justify-between h-full order-2 lg:order-1">
                    <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
                      {(project as any).intro ?? t.works.subtitle}
                    </p>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-white/40 text-xs font-medium tracking-wide">
                          {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                        </span>
                        <span className="w-8 h-px bg-white/20" />
                      </div>
                      <h3 className="font-artistic italic text-5xl sm:text-7xl font-normal text-white tracking-tight">
                        {project.brand}
                      </h3>
                    </div>
                  </div>

                  {/* Center: mockup, true-centered in the section, dezoomed so the full screenshot reads clearly */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group order-1 lg:order-2 flex justify-center w-full"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 0, scale: 1.03 }}
                      style={{ rotate: ROTATIONS[i % ROTATIONS.length] }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full max-w-[460px] rounded-2xl overflow-hidden bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] aspect-[16/10]"
                    >
                      <img
                        src={image}
                        alt={project.brand}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-agero-ink/0 group-hover:bg-agero-ink/20 transition-colors duration-400 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 bg-white text-agero-ink text-xs font-medium px-4 py-2 rounded-full">
                          {t.works.visitCta}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.div>
                  </a>

                  {/* Right: metadata — top-aligned, left-aligned text, like the reference */}
                  <div className="order-3 flex flex-row lg:flex-col gap-8 lg:gap-10 justify-between h-full lg:h-auto lg:self-start lg:pt-4">
                    <div>
                      <span className="block text-white/40 text-xs uppercase tracking-wide mb-1.5">
                        {t.works.yearLabel}
                      </span>
                      <span className="text-white font-sans text-xl font-bold">{project.year}</span>
                    </div>
                    <div>
                      <span className="block text-white/40 text-xs uppercase tracking-wide mb-1.5">
                        {t.works.roleLabel}
                      </span>
                      <span className="text-white text-sm font-medium">{project.role}</span>
                    </div>
                    <div className="hidden sm:block">
                      <span className="block text-white/40 text-xs uppercase tracking-wide mb-2">Services</span>
                      <ul className="flex flex-col gap-1">
                        {SERVICES.map((service) => (
                          <li key={service} className="text-white/80 text-sm">{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
