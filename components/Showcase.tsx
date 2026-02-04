import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BeforeAfterSlider } from './ui/BeforeAfterSlider';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    id: 1,
    size: "md:col-span-2 md:row-span-1",
    title: "Le 40e Rugissant",
    categoryKey: 1, // Restauration
    imageBefore: "https://i.ibb.co/FL1cL6JT/Capture-d-cran-31.png",
    imageAfter: "https://i.ibb.co/B2pHjz9j/Capture-d-cran-32.png",
    tagsKeys: [2] // Restauration
  },
  {
    id: 2,
    size: "md:col-span-1 md:row-span-1",
    title: "NexTech SaaS",
    categoryKey: 3, // SaaS
    imageBefore: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    tagsKeys: [3]
  },
  {
    id: 3,
    size: "md:col-span-1 md:row-span-1",
    title: "Vogue Noir",
    categoryKey: 4, // E-commerce
    imageBefore: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
    tagsKeys: [4]
  },
  {
    id: 4,
    size: "md:col-span-1 md:row-span-1",
    title: "L'Orangerie",
    categoryKey: 1, // Immobilier
    imageBefore: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
    tagsKeys: [1]
  },
  {
    id: 5,
    size: "md:col-span-1 md:row-span-1",
    title: "ArchStudio",
    categoryKey: 1, // Immobilier
    imageBefore: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2631&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    tagsKeys: [1]
  },
  {
    id: 6,
    size: "md:col-span-2 md:row-span-1",
    title: "CryptoPunk",
    categoryKey: 5, // Web3
    imageBefore: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    tagsKeys: [5]
  },
];

export const Showcase: React.FC = () => {
  const { t } = useLanguage();
  const [filterIndex, setFilterIndex] = useState(0);

  const categories = t.showcase.categories;

  const filteredProjects = projects.filter(p =>
    filterIndex === 0 ? true : p.tagsKeys.includes(filterIndex)
  );

  return (
    <section id="projects" className="px-6 py-32 dark-bg scroll-mt-20 relative">
      {/* Background Gradient */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-2 block">{t.showcase.sectionLabel}</span>
            <h2 className="text-4xl md:text-6xl font-black font-display leading-tight">
              {t.showcase.title} <br /> <span className="text-white/20">{t.showcase.titleFaded}</span>
            </h2>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setFilterIndex(index)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300
                  ${filterIndex === index
                    ? 'bg-premium-green text-black border-premium-green'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-900 ${project.size} shadow-2xl`}
              >
                {/* Before/After Slider Component */}
                <div className="absolute inset-0 z-0">
                  <BeforeAfterSlider
                    beforeImage={project.imageBefore}
                    afterImage={project.imageAfter}
                    alt={project.title}
                  />
                </div>

                {/* Content Overlay - Pointer events none ensures slider works underneath */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none bg-gradient-to-t from-premium-black/90 via-premium-black/20 to-transparent">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                      <span className="inline-block px-3 py-1 bg-premium-green/90 text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_10px_rgba(0,255,133,0.4)]">
                        {categories[project.categoryKey]}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-display drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 border border-white/10 rounded-[1.5rem] group-hover:border-premium-green/50 transition-colors duration-300 pointer-events-none z-20"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}