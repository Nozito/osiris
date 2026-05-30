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
    <motion.section
      id="process"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="px-4 sm:px-6 py-8 sm:py-12 lg:py-20 bg-[#F0EDE6] relative overflow-hidden scroll-mt-20">

      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl lg:max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6 sm:mb-10 lg:mb-16 text-center"
        >
          <span className="block text-[11px] font-medium tracking-[0.18em] text-[#1D1D1F]/35 uppercase mb-4">{t.process.sectionLabel}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-sans tracking-[-0.03em] text-[#1D1D1F]">
            {t.process.title} <span className="text-[#1D1D1F]/15">{t.process.titleFaded}</span>
          </h2>
        </motion.div>

        {/* Compact Steps Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative"
            >
              <div className="bg-white border border-[#D2D2D7] p-3 sm:p-4 lg:p-7 rounded-xl sm:rounded-2xl lg:rounded-[1.5rem] hover:border-[#1D1D1F]/15 transition-all duration-300 h-full flex flex-col justify-between">
                {/* Header Row */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 mb-3 lg:mb-6">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center bg-[#F5F5F7] flex-shrink-0">
                    <step.icon className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#1D1D1F]/40" strokeWidth={1.5} />
                  </div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1D1D1F]/08 select-none">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#1D1D1F] mb-1.5 lg:mb-3 tracking-[-0.01em] leading-tight">
                  {step.title}
                </h3>

                <p className="text-[#1D1D1F]/45 text-[11px] sm:text-xs lg:text-sm leading-relaxed line-clamp-3 lg:line-clamp-none">
                  {step.desc}
                </p>
              </div>

              {/* Connector Line (Desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-[#1D1D1F]/08"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};