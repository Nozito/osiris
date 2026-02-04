import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Diamond, Target, Terminal, Palette, BarChart3, Layers, Cpu, TrendingUp, CheckCircle2, Globe, Lock, Code2, Database, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const techRow1 = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Terminal },
  { name: "Tailwind", icon: Palette },
  { name: "Framer Motion", icon: Zap },
  { name: "Three.js", icon: Layers },
  { name: "WebGL", icon: Cpu },
  { name: "Vue.js", icon: Code2 },
  { name: "Nuxt", icon: Globe },
  { name: "GSAP", icon: Zap },
  { name: "Figma", icon: Palette },
];

const techRow2 = [
  { name: "Node.js", icon: Server },
  { name: "Supabase", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Vercel", icon: Globe },
  { name: "Docker", icon: Layers },
  { name: "GraphQL", icon: Zap },
  { name: "Stripe", icon: Lock },
  { name: "AWS", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Redis", icon: Cpu },
  { name: "Prisma", icon: Database },
];

// Visual Component for Design
const DesignVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8 perspective-[1000px]">
    {/* Geometric Background Beam */}
    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 to-transparent skew-x-12 border-r border-white/5 rounded-[2.5rem]"></div>

    {/* Floating Layers Composition */}
    <div className="relative group-hover:scale-105 transition-transform duration-700 ease-out z-10">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-12 -left-12 w-48 h-32 bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm -z-10 transform -rotate-12 rounded-2xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 -right-8 w-56 h-40 bg-pink-900/20 border border-pink-500/20 backdrop-blur-sm -z-10 transform rotate-6 rounded-2xl"
      />

      <div className="w-64 h-80 bg-premium-black/40 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden relative rounded-3xl">
        <div className="h-32 bg-gradient-to-br from-purple-500/20 to-blue-600/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-full"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="w-20 h-2 bg-white/20 rounded-full"></div>
              <div className="w-12 h-2 bg-white/10 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-2 pt-2">
            <div className="w-full h-2 bg-white/5 rounded-full"></div>
            <div className="w-5/6 h-2 bg-white/5 rounded-full"></div>
            <div className="w-4/6 h-2 bg-white/5 rounded-full"></div>
          </div>
          <div className="pt-4 flex justify-between items-center">
            <div className="px-3 py-1 bg-purple-500/20 text-purple-300 text-[10px] font-bold tracking-widest uppercase rounded-full">PREMIUM</div>
            <div className="w-6 h-6 border border-white/20 flex items-center justify-center rounded-full">
              <div className="w-2 h-2 bg-green-400 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Visual Component for Engineering (Code Terminal)
const CodeVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8">
    {/* Geometric Background Beam */}
    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500/10 to-transparent -skew-x-12 border-l border-white/5 rounded-[2.5rem]"></div>

    <div className="w-full max-w-sm bg-[#09090b] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs group-hover:border-blue-500/30 transition-colors duration-500 z-10 rounded-3xl">
      <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <div className="ml-4 text-[10px] text-gray-500 flex items-center gap-1 uppercase tracking-wider">
          <Lock className="w-3 h-3" />
          secure-server.tsx
        </div>
      </div>

      <div className="p-6 space-y-1.5 text-gray-400 leading-relaxed">
        {/* Same code block as before, just kept context */}
        <div className="flex">
          <span className="w-6 text-gray-700 select-none">1</span>
          <span className="text-purple-400">import</span>
          <span className="text-white ml-2">{`{`}</span>
          <span className="text-yellow-300 mx-1">Performance</span>
          <span className="text-white">{`}`}</span>
          <span className="text-purple-400 ml-2">from</span>
          <span className="text-green-400 ml-2">'@osiris/core'</span>
          <span className="text-white">;</span>
        </div>
        <div className="flex"><span className="w-6 text-gray-700 select-none">2</span></div>
        <div className="flex"><span className="w-6 text-gray-700 select-none">3</span><span className="text-blue-400 italic">// Initializing secure connection</span></div>
        <div className="flex"><span className="w-6 text-gray-700 select-none">4</span><span className="text-purple-400">export const</span><span className="text-blue-300 ml-2">Dominance</span><span className="text-white ml-2">=</span><span className="text-purple-400 ml-2">async</span><span className="text-white ml-1">()</span><span className="text-purple-400 ml-2">=&gt;</span><span className="text-white ml-1">{`{`}</span></div>
        <div className="flex"><span className="w-6 text-gray-700 select-none">5</span><span className="ml-4 text-purple-400">await</span><span className="text-yellow-300 ml-2">Performance</span><span className="text-white">.</span><span className="text-blue-300">optimize</span><span className="text-white">({`{`}</span></div>
        <div className="flex"><span className="w-6 text-gray-700 select-none">6</span><span className="ml-8 text-blue-200">speed:</span><span className="text-orange-400 ml-2">'100%'</span><span className="text-white">,</span></div>
        <div className="flex"><span className="w-6 text-gray-700 select-none">9</span><span className="ml-4 flex items-center gap-1"><span className="text-blue-400">return</span><span className="text-green-400">'Success'</span><span className="w-1.5 h-4 bg-blue-400 animate-pulse ml-1"></span></span></div>
      </div>
    </div>
  </div>
);

// Visual Component for Growth (Chart)
const GrowthVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8">
    {/* Geometric Background Beam */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-t from-emerald-500/10 to-transparent rotate-45 border-l border-r border-white/5 pointer-events-none"></div>

    <div className="relative w-full max-w-sm bg-premium-black/40 backdrop-blur-md border border-white/10 p-6 shadow-2xl group-hover:border-emerald-500/30 transition-colors duration-500 z-10 rounded-3xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Revenus</div>
          <div className="text-2xl font-black text-white font-display flex items-center gap-2">
            $128,420
            <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 border border-emerald-500/20 flex items-center font-bold rounded-full">
              <TrendingUp className="w-3 h-3 mr-1" /> +24%
            </span>
          </div>
        </div>
        <div className="p-2 bg-white/5 border border-white/5 rounded-full">
          <Globe className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex justify-between items-end h-32 gap-3">
        {[35, 45, 30, 60, 55, 75, 90].map((h, i) => (
          <div key={i} className="w-full bg-white/5 relative group/bar overflow-hidden h-full flex items-end rounded-t-sm">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="w-full bg-emerald-500/80 group-hover/bar:bg-emerald-400 transition-colors relative"
            >
              <div className="absolute top-0 w-full h-[1px] bg-white/50 opacity-0 group-hover/bar:opacity-100"></div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* X-Axis */}
      <div className="mt-4 flex justify-between text-[10px] text-gray-600 font-mono">
        <span>LUN</span>
        <span>MAR</span>
        <span>MER</span>
        <span>JEU</span>
        <span>VEN</span>
        <span>SAM</span>
        <span>DIM</span>
      </div>
    </div>
  </div>
);

// Marquee Component
const Marquee = ({ items, direction = "left", speed = 20 }: { items: typeof techRow1, direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="flex overflow-hidden relative w-full group select-none">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-premium-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-premium-black to-transparent z-10 pointer-events-none"></div>

      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-6 py-4"
      >
        {[...items, ...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/5 backdrop-blur-sm group-hover:pause transition-colors hover:border-premium-green/50 hover:bg-premium-green/5 hover:shadow-[0_0_15px_rgba(0,255,133,0.1)] min-w-[140px] justify-center skew-x-[-10deg] rounded-xl"
          >
            <div className="skew-x-[10deg] flex items-center gap-3">
              <tech.icon className="w-4 h-4 text-gray-400 group-hover:text-premium-green transition-colors" />
              <span className="text-sm font-bold text-gray-300 font-display uppercase tracking-wide group-hover:text-white transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const ValueTrifecta: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Zap,
      title: t.valueTrifecta.cards.speed.title,
      description: t.valueTrifecta.cards.speed.description
    },
    {
      icon: Diamond,
      title: t.valueTrifecta.cards.aesthetic.title,
      description: t.valueTrifecta.cards.aesthetic.description
    },
    {
      icon: Target,
      title: t.valueTrifecta.cards.conversion.title,
      description: t.valueTrifecta.cards.conversion.description
    }
  ];

  const services = [
    {
      id: "design",
      title: t.valueTrifecta.services.design.title,
      description: t.valueTrifecta.services.design.description,
      icon: Palette,
      items: t.valueTrifecta.services.design.items,
      color: "text-purple-400",
      bgGlow: "bg-purple-500/10",
      borderGlow: "group-hover:border-purple-500/50"
    },
    {
      id: "engineering",
      title: t.valueTrifecta.services.engineering.title,
      description: t.valueTrifecta.services.engineering.description,
      icon: Terminal,
      items: t.valueTrifecta.services.engineering.items,
      color: "text-blue-400",
      bgGlow: "bg-blue-500/10",
      borderGlow: "group-hover:border-blue-500/50"
    },
    {
      id: "growth",
      title: t.valueTrifecta.services.growth.title,
      description: t.valueTrifecta.services.growth.description,
      icon: BarChart3,
      items: t.valueTrifecta.services.growth.items,
      color: "text-emerald-400",
      bgGlow: "bg-emerald-500/10",
      borderGlow: "group-hover:border-emerald-500/50"
    }
  ];

  return (
    <section id="expertise" className="px-6 py-32 relative scroll-mt-20 overflow-hidden metal-bg">
      {/* Premium Geometric Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-premium-green/10 to-transparent blur-[100px] -skew-x-12 translate-x-1/3 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-blue-500/10 to-transparent blur-[100px] skew-x-12 -translate-x-1/3 pointer-events-none -z-10" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] -z-10"></div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-2 block">{t.valueTrifecta.sectionLabel}</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-display text-white">
            {t.valueTrifecta.title} <span className="text-premium-green">{t.valueTrifecta.titleHighlight}</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            {t.valueTrifecta.subtitle}
          </p>
        </motion.div>

        {/* The 3 Main Cards */}
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-premium-glass backdrop-blur-md border border-premium-glassBorder hover:border-premium-green/50 transition-colors duration-500 overflow-hidden rounded-[2rem]"
            >
              {/* Angular Glow Effect */}
              <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-gradient-to-br from-premium-green/20 to-transparent rotate-45 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-6 relative">
                <div className="w-14 h-14 flex items-center justify-center bg-premium-black/50 border border-premium-green/30 text-premium-green shadow-[0_0_15px_rgba(0,255,133,0.15)] group-hover:shadow-[0_0_25px_rgba(0,255,133,0.3)] transition-shadow duration-500 rotate-3 group-hover:rotate-0 transition-transform rounded-2xl">
                  <card.icon className="w-7 h-7" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-premium-green transition-colors font-display">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Services "Arsenal" */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-20 justify-center"
          >
            <div className="h-[1px] bg-white/10 w-24"></div>
            <h3 className="text-2xl font-bold uppercase tracking-widest text-white text-center">{t.valueTrifecta.arsenal}</h3>
            <div className="h-[1px] bg-white/10 w-24"></div>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-premium-black border border-white/10 ${service.color} shadow-lg shadow-${service.color}/10 rotate-3 rounded-2xl`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h4 className={`text-3xl md:text-5xl font-black font-display text-white`}>{service.title}</h4>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/5 pl-6">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 group/item">
                        <div className={`mt-0.5 ${service.color} opacity-60 group-hover/item:opacity-100 transition-opacity`}>
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium border-b border-transparent group-hover/item:border-white/20 transition-colors pb-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Placeholder (Component Based) */}
                <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-full aspect-[5/4] lg:aspect-square border border-white/10 bg-black/20 overflow-hidden group hover:border-white/20 transition-all duration-500 rounded-[2.5rem]`}
                  >
                    {/* Render the specific visual based on ID */}
                    {service.id === 'design' && <DesignVisual />}
                    {service.id === 'engineering' && <CodeVisual />}
                    {service.id === 'growth' && <GrowthVisual />}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack - Full Width Infinite Data Streams */}
      <div className="w-full border-t border-white/10 pt-24 pb-8 relative mt-20">
        {/* Simple Label */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1a1a1c] to-transparent px-8 flex items-center gap-3 z-10">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-premium-green/50"></div>
          <div className="flex items-center gap-2 px-4 py-2 bg-premium-black/80 border border-premium-green/30 rounded-full shadow-[0_0_20px_rgba(0,255,133,0.15)]">
            <div className="w-2 h-2 bg-premium-green animate-pulse rounded-full shadow-[0_0_8px_rgba(0,255,133,0.8)]"></div>
            <span className="text-xs text-premium-green font-bold uppercase tracking-[0.2em]">{t.valueTrifecta.systemArchitecture}</span>
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-premium-green/50"></div>
        </div>

        {/* Glow line under border */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-premium-green/30 to-transparent"></div>

        <div className="space-y-4 opacity-90 hover:opacity-100 transition-opacity duration-500">
          <Marquee items={techRow1} direction="left" speed={30} />
          <Marquee items={techRow2} direction="right" speed={35} />
        </div>
      </div>
    </section>
  );
};