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
    <section id="process" className="px-4 sm:px-6 py-8 sm:py-12 lg:py-20 bg-[#F0EDE6] relative overflow-hidden scroll-mt-20">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.03)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl lg:max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-10 lg:mb-16 text-center"
        >
          <span className="text-premium-green text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{t.process.sectionLabel}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display italic text-[#0F1729] tracking-tight">
            {t.process.title} <span className="text-[#0F1729]/20">{t.process.titleFaded}</span>
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
              <div className="bg-white border border-[#E8E3D9] p-3 sm:p-4 lg:p-7 rounded-xl sm:rounded-2xl lg:rounded-[1.5rem] hover:bg-[#FDFCFA] transition-all duration-300 hover:border-premium-green/40 hover:shadow-[0_8px_32px_rgba(15,23,41,0.06)] h-full flex flex-col justify-between">
                {/* Header Row */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 mb-3 lg:mb-6">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#F5F4EF] border border-[#E8E3D9] flex items-center justify-center text-gray-400 group-hover:text-premium-green group-hover:bg-premium-green/10 group-hover:border-premium-green/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <step.icon className="w-4 h-4 sm:w-4 sm:h-4 lg:w-7 lg:h-7" />
                  </div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F1729]/10 group-hover:text-[#0F1729]/15 transition-colors font-display select-none">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#0F1729] mb-1.5 lg:mb-3 group-hover:text-premium-green transition-colors font-display leading-tight">
                  {step.title}
                </h3>

                <p className="text-[#0F1729]/50 text-[11px] sm:text-xs lg:text-sm leading-relaxed transition-colors line-clamp-3 lg:line-clamp-none">
                  {step.desc}
                </p>
              </div>

              {/* Connector Line (Desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[2px] bg-gradient-to-r from-[#0F1729]/10 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};