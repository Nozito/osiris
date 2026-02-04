import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BeforeAfterSlider } from './ui/BeforeAfterSlider';

const categories = ["Tout", "Immobilier", "Restauration", "SaaS", "E-commerce", "Web3"];

// Note: Using contrasting images to simulate "Boring Old Site" vs "Premium Osiris Site"
const projects = [
  {
    id: 1,
    size: "md:col-span-2 md:row-span-1", // Changed to landscape (row-span-1)
    title: "Le 40e Rugissant",
    category: "Restauration",
    // Before: Provided Screenshot of the old site (High Quality)
    imageBefore: "https://i.ibb.co/FL1cL6JT/Capture-d-cran-31.png",
    // After: Provided Screenshot of the new site (High Quality)
    imageAfter: "https://i.ibb.co/B2pHjz9j/Capture-d-cran-32.png",
    tags: ["Restauration"]
  },
  {
    id: 2,
    size: "md:col-span-1 md:row-span-1",
    title: "NexTech SaaS",
    category: "Dashboard",
    // Before: Messy code/white screen. After: Dark mode futuristic dashboard
    imageBefore: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    tags: ["SaaS"]
  },
  {
    id: 3,
    size: "md:col-span-1 md:row-span-1",
    title: "Vogue Noir",
    category: "Mode",
    // Before: Plain hanger/retail store. After: High fashion editorial
    imageBefore: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
    tags: ["E-commerce"]
  },
  {
    id: 4,
    size: "md:col-span-1 md:row-span-1",
    title: "L'Orangerie",
    category: "Hospitality",
    // Before: Basic cafe. After: Luxury dining
    imageBefore: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
    tags: ["Immobilier"]
  },
  {
    id: 5,
    size: "md:col-span-1 md:row-span-1",
    title: "ArchStudio",
    category: "Portfolio",
    // Before: Construction site/Draft. After: Completed modern interior
    imageBefore: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2631&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    tags: ["Immobilier"]
  },
  {
    id: 6,
    size: "md:col-span-2 md:row-span-1",
    title: "CryptoPunk",
    category: "Web3 / NFT",
    // Before: Binary code/matrix. After: Cyberpunk city/character
    imageBefore: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    tags: ["Web3"]
  },
];

export const Showcase: React.FC = () => {
  const [filter, setFilter] = useState("Tout");

  const filteredProjects = projects.filter(p => 
    filter === "Tout" ? true : p.tags.includes(filter)
  );

  return (
    <section id="projects" className="px-6 py-32 bg-black/40 scroll-mt-20 relative">
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
            <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-2 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-black font-display leading-tight">
              La Preuve par <br/> <span className="text-white/20">l'Image.</span>
            </h2>
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300
                  ${filter === cat 
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
                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                      <span className="inline-block px-3 py-1 bg-premium-green/90 text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_10px_rgba(0,255,133,0.4)]">
                        {project.category}
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