import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = t.faq.items;
  const leftColumn = items.filter((_, i) => i % 2 === 0);
  const rightColumn = items.filter((_, i) => i % 2 === 1);

  const renderCard = (item: (typeof items)[number], index: number) => {
    const isOpen = openIndex === index;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-3xl bg-agero-surface overflow-hidden"
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full px-6 sm:px-7 py-6 flex items-center justify-between gap-4 text-left"
        >
          <h3 className="text-base sm:text-lg font-medium text-agero-ink">{item.question}</h3>
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-agero-ink text-white flex items-center justify-center">
            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <p className="px-6 sm:px-7 pb-6 text-agero-gray leading-relaxed">{item.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-agero-ink">
            {t.faq.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-start">
          <div className="flex flex-col gap-4">
            {leftColumn.map((item, i) => renderCard(item, i * 2))}
          </div>
          <div className="flex flex-col gap-4">
            {rightColumn.map((item, i) => renderCard(item, i * 2 + 1))}
          </div>
        </div>
      </div>
    </section>
  );
};
