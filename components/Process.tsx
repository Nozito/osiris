import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Audit & Stratégie",
    icon: Search,
    desc: "Nous analysons votre marché, vos concurrents et vos faiblesses actuelles pour définir l'angle d'attaque parfait."
  },
  {
    num: "02",
    title: "Design UX/UI",
    icon: PenTool,
    desc: "Création de maquettes haute fidélité. Nous ne cherchons pas le 'beau', nous cherchons l'inoubliable et la conversion."
  },
  {
    num: "03",
    title: "Dev & Performance",
    icon: Code2,
    desc: "Code propre, Next.js, animations WebGL fluides. Votre site sera une Ferrari : beau et incroyablement rapide."
  },
  {
    num: "04",
    title: "Launch & Scale",
    icon: Rocket,
    desc: "Mise en ligne, indexation SEO immédiate, formation de vos équipes. Nous vous remettons les clés de votre empire."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="px-6 py-32 bg-[#080808] relative overflow-hidden scroll-mt-20">
      {/* Abstract Line Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-[80%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        {/* Vertical Pulse Line */}
        <motion.div 
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-premium-green to-transparent opacity-50"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-2 block">Notre Méthode</span>
            <h2 className="text-4xl md:text-6xl font-black text-white font-display">
              Du Chaos à <br/> <span className="text-white/20">l'Excellence.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed">
            Un processus chirurgical en 4 étapes pour garantir que votre investissement se transforme en domination de marché.
          </p>
        </motion.div>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="relative group bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden backdrop-blur-sm"
            >
               {/* Progress Bar Container */}
               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-8 relative">
                   {/* Animated Fill */}
                   <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-full bg-premium-green shadow-[0_0_10px_rgba(0,255,133,0.5)]"
                   />
               </div>

               {/* Step Content */}
               <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-black border border-white/10 rounded-full group-hover:border-premium-green/30 group-hover:shadow-[0_0_15px_rgba(0,255,133,0.1)] transition-all">
                       <step.icon className="w-6 h-6 text-gray-400 group-hover:text-premium-green transition-colors" />
                   </div>
                   <span className="text-4xl font-black text-white/[0.05] group-hover:text-white/[0.1] transition-colors font-display select-none">
                       {step.num}
                   </span>
               </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-premium-green transition-colors font-display">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {step.desc}
                </p>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-premium-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};