import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-20 border-t border-white/5 bg-black">
      <div className="container mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gray-500 mb-6 text-sm uppercase tracking-widest">Prêt à passer au niveau supérieur ?</p>
          <a 
            href="#" 
            className="block text-5xl md:text-8xl font-black text-white hover:text-premium-green transition-colors duration-500 font-display mb-20 leading-tight"
          >
            Parlons de votre <br/>futur site.
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-8">
          <p>© 2024 Osiris. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            <span className="text-gray-700">Design par Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};