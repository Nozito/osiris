import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const ServicesTabs: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = t.servicesTabs.tabs[activeIndex];

  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28 bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-agero-ink">
            {t.servicesTabs.title}
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {t.servicesTabs.tabs.map((tab, i) => (
            <button
              key={tab.title}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeIndex === i
                  ? 'bg-agero-ink text-white'
                  : 'bg-agero-surface text-agero-gray hover:bg-agero-line/60'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border border-agero-line rounded-[2rem] p-8 sm:p-12 bg-white text-center max-w-2xl mx-auto"
          >
            <p className="text-agero-gray leading-relaxed mb-6 text-base sm:text-lg">
              {activeTab.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {activeTab.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-agero-ink/60 border border-agero-line"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
