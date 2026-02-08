import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t.process.steps.audit.title,
      icon: Search,
      desc: t.process.steps.audit.description
    },
    {
      num: "02",
      title: t.process.steps.design.title,
      icon: PenTool,
      desc: t.process.steps.design.description
    },
    {
      num: "03",
      title: t.process.steps.dev.title,
      icon: Code2,
      desc: t.process.steps.dev.description
    },
    {
      num: "04",
      title: t.process.steps.launch.title,
      icon: Rocket,
      desc: t.process.steps.launch.description
    }
  ];

  return (
    <section id="process" className="px-4 sm:px-6 py-10 sm:py-16 lg:py-32 bg-[#050505] relative overflow-hidden scroll-mt-20">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl lg:max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-24 text-center"
        >
          <span className="text-premium-green text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{t.process.sectionLabel}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            {t.process.title} <span className="text-white/20">{t.process.titleFaded}</span>
          </h2>
        </motion.div>

        {/* Compact Steps Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.01] backdrop-blur-sm border border-white/10 p-4 sm:p-5 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-[2rem] hover:bg-white/[0.08] transition-all duration-300 hover:border-premium-green/40 hover:shadow-[0_0_50px_-20px_rgba(0,255,133,0.15)] h-full flex flex-col justify-between">
                {/* Header Row */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 mb-3 lg:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl lg:rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-premium-green group-hover:bg-premium-green/10 group-hover:border-premium-green/50 group-hover:shadow-[0_0_30px_rgba(0,255,133,0.3)] group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <step.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-10 lg:h-10" />
                  </div>
                  <span className="text-2xl sm:text-3xl lg:text-6xl font-black text-white/[0.06] group-hover:text-white/[0.1] transition-colors font-display select-none">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base lg:text-2xl font-bold text-white mb-1.5 lg:mb-4 group-hover:text-premium-green transition-colors font-display leading-tight">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-[11px] sm:text-xs lg:text-base leading-relaxed group-hover:text-gray-400 transition-colors line-clamp-3 lg:line-clamp-none">
                  {step.desc}
                </p>
              </div>

              {/* Connector Line (Desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[2px] bg-gradient-to-r from-white/10 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};