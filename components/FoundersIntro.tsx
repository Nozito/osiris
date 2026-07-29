import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const PHOTOS: Record<string, string> = {
  Antoine: 'https://i.ibb.co/CS4GtTb/IMG-8669.jpg',
  Noah: 'https://i.ibb.co/gMzfwQKZ/Noah-PP.jpg',
};

export const FoundersIntro: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28 bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-agero-ink">
            {t.foundersIntro.title}
          </h2>
        </motion.div>

        {/* Founder cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {t.foundersIntro.founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-5 border border-agero-line rounded-3xl p-6 sm:p-8 bg-white"
            >
              <img
                src={PHOTOS[founder.name]}
                alt={founder.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div>
                <h3 className="font-display text-xl font-semibold text-agero-ink mb-1">{founder.name}</h3>
                <p className="text-agero-blue text-xs font-medium uppercase tracking-wide mb-3">{founder.title}</p>
                <p className="text-agero-gray text-sm leading-relaxed">{founder.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real stats — replaces Agero's fabricated awards list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          {t.foundersIntro.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center border border-agero-line rounded-2xl py-6 px-3 bg-agero-surface/50"
            >
              <span className="font-display text-xl sm:text-2xl font-semibold text-agero-ink mb-1">{stat.value}</span>
              <span className="text-[11px] uppercase tracking-wide text-agero-gray">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
