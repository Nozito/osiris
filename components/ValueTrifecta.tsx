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
  <div className="relative w-full h-full flex items-center justify-center p-8 perspective-[1000px] group/design">
    {/* Geometric Background Beam */}
    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/05 to-transparent skew-x-12 border-r border-white/5 rounded-[2.5rem] pointer-events-none"></div>

    {/* Floating Layers Composition */}
    <div className="relative w-full max-w-[300px] aspect-[3/4] transform-style-3d">
      {/* Back Layer - Abstract Shape - Moves backwards on hover */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-purple-500/20 blur-[60px] rounded-full group-hover/design:scale-110 transition-transform duration-700"
      />

      {/* Layer 1: Background Glass Card - Moves back in Z space on hover */}
      <div className="absolute inset-0 z-0 bg-premium-black/40 backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-700 ease-out group-hover/design:translate-z-[-40px] group-hover/design:opacity-50"></div>

      {/* Layer 2: Main Card - Floating UI - Moves slightly */}
      <motion.div
        animate={{ y: [0, -15, 0], rotateX: [0, 5, 0], rotateY: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-10 transition-all duration-700 ease-out group-hover/design:translate-z-[0px]"
      >
        <div className="w-full h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
          {/* Card Header image */}
          <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 relative p-6 flex flex-col justify-end overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/design:animate-[shimmer_2s_infinite]"></div>

            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
            <div className="flex justify-between items-end relative z-10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 mb-3 shadow-lg group-hover/design:scale-110 transition-transform duration-500"></div>
                <div className="w-24 h-4 bg-white/20 rounded-full backdrop-blur-sm"></div>
              </div>
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold tracking-widest text-white uppercase group-hover/design:bg-premium-green group-hover/design:text-black transition-colors duration-500">Pro</div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-4 flex-1 bg-gradient-to-b from-transparent to-black/20">
            <div className="space-y-3">
              <div className="w-full h-3 bg-white/5 rounded-full group-hover/design:w-full transition-all duration-500"></div>
              <div className="w-5/6 h-3 bg-white/5 rounded-full group-hover/design:w-full transition-all duration-700"></div>
              <div className="w-4/6 h-3 bg-white/5 rounded-full group-hover/design:w-full transition-all duration-1000"></div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="h-20 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors group-hover/design:translate-y-[-5px] duration-500"></div>
              <div className="h-20 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors group-hover/design:translate-y-[-5px] duration-700"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Layer 3: Floating Elements - Move FORWARD in Z space on hover (Exploded view) */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-8 -left-8 z-30 transition-all duration-700 ease-out group-hover/design:translate-z-[60px] group-hover/design:scale-110"
      >
        <div className="px-5 py-3 bg-premium-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <span className="text-xs font-bold text-gray-200">System Active</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 -right-12 z-20 transition-all duration-700 ease-out group-hover/design:translate-z-[30px] group-hover/design:rotate-12"
      >
        <div className="w-32 h-32 bg-purple-500/10 backdrop-blur-sm border border-white/5 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-purple-500/20 rounded-full border border-white/5 group-hover/design:scale-90 transition-transform duration-1000"></div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Visual Component for Engineering (Code Terminal)
const CodeVisual = () => {
  // Typewriter effect states
  const [line1, setLine1] = React.useState("");
  const [line2, setLine2] = React.useState("");
  const [line3, setLine3] = React.useState("");

  React.useEffect(() => {
    const typeLine = async (text: string, setter: React.Dispatch<React.SetStateAction<string>>, delay: number) => {
      await new Promise(r => setTimeout(r, delay));
      for (let i = 0; i <= text.length; i++) {
        setter(text.substring(0, i));
        await new Promise(r => setTimeout(r, 30 + Math.random() * 20));
      }
    };

    typeLine("import { QuantumShield } from '@osiris/security';", setLine1, 500);
    typeLine("export const Defend = async () => {", setLine2, 2500);
    typeLine("  await QuantumShield.activate({ mode: 'ULTRA' });", setLine3, 4000);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 group/code">

      <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full group-hover/code:bg-blue-500/10 transition-colors duration-700"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm bg-[#09090b]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs z-10 rounded-2xl relative"
      >
        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

        <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-[10px] text-gray-500 flex items-center gap-1.5 font-medium">
            <span className="text-gray-600">~/osiris/core/</span>
            <span className="text-blue-400">security.ts</span>
          </div>
          <div className="w-8"></div>
        </div>

        <div className="p-6 space-y-4 text-gray-400 leading-relaxed relative min-h-[220px]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-transparent pointer-events-none"></div>

          {/* Line 1 */}
          <div className="flex group/line">
            <span className="w-6 text-gray-700 select-none text-right mr-3 group-hover/line:text-gray-500 transition-colors">1</span>
            <span className="text-purple-400">{line1}</span>
            {line1.length < 43 && <span className="w-2 h-4 bg-blue-400 animate-pulse ml-1 inline-block align-middle"></span>}
          </div>

          {/* Line 2 */}
          <div className="flex group/line">
            <span className="w-6 text-gray-700 select-none text-right mr-3 group-hover/line:text-gray-500 transition-colors">2</span>
            <span className="text-gray-500 italic">// Initialize AI-driven firewall protection</span>
          </div>

          {/* Line 3 */}
          <div className="flex group/line">
            <span className="w-6 text-gray-700 select-none text-right mr-3 group-hover/line:text-gray-500 transition-colors">3</span>
            <span className="text-blue-300">{line2}</span>
            {line1.length >= 43 && line2.length < 35 && <span className="w-2 h-4 bg-blue-400 animate-pulse ml-1 inline-block align-middle"></span>}
          </div>

          {/* Line 4 */}
          <div className="flex group/line">
            <span className="w-6 text-gray-700 select-none text-right mr-3 group-hover/line:text-gray-500 transition-colors">4</span>
            <span className="text-white">{line3}</span>
            {line2.length >= 35 && <span className="w-2 h-4 bg-blue-400 animate-pulse ml-1 inline-block align-middle"></span>}
          </div>

          {/* Compiling Status Bar */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-black/40 border-t border-white/5 flex items-center px-4 gap-3">
            <div className="text-[9px] font-bold text-blue-400 uppercase tracking-wider animate-pulse">Compiling</div>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                className="h-full bg-blue-500"
              ></motion.div>
            </div>
            <div className="text-[9px] text-gray-500">v2.4.0</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Visual Component for Growth (Chart)
const GrowthVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8 group/growth">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

    <div className="relative w-full max-w-sm bg-premium-black/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl z-10 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-8 relative z-20">
        <div>
          <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Total Revenue</div>
          <div className="text-3xl font-black text-white font-display flex items-baseline gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              $128,420
            </motion.span>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 border border-emerald-500/20 flex items-center font-bold rounded-full">
              <TrendingUp className="w-3 h-3 mr-1" /> +24%
            </span>
          </div>
        </div>
        <div className="p-2.5 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer group-hover/growth:bg-emerald-500/20 group-hover/growth:text-emerald-400">
          <Globe className="w-4 h-4 text-emerald-400" />
        </div>
      </div>

      {/* Modern Gradient Bars with DRAWING LINE */}
      <div className="flex justify-between items-end h-40 gap-3 relative">

        {/* Animated Path Overlay */}
        <svg className="absolute inset-x-0 bottom-0 w-full h-full overflow-visible pointer-events-none z-30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* The Drawing Line */}
          <motion.path
            d="M15,90 L65,75 L115,100 L165,55 L215,65 L265,35 L315,15"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            className="drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
          />

          {/* Live pulsing point at the end */}
          <motion.circle
            cx="315" cy="15" r="4"
            fill="#ffffff"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          />
          <motion.circle
            cx="315" cy="15" r="8"
            stroke="#10b981" strokeWidth="2" fill="none"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: [0, 1, 0], scale: [0.5, 1.5] }}
            transition={{ delay: 2.5, repeat: Infinity, duration: 1.5 }}
          />
        </svg>

        {[35, 45, 30, 60, 55, 75, 90].map((h, i) => (
          <div key={i} className="w-full relative group/bar flex items-end z-10">

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-emerald-500 text-black text-[10px] font-bold rounded opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0 pointer-events-none whitespace-nowrap z-40 shadow-lg">
              ${h}k
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-500 rotate-45"></div>
            </div>

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring", bounce: 0 }}
              className="w-full bg-white/5 rounded-t-lg group-hover/bar:bg-emerald-500/20 transition-all duration-300 relative overflow-hidden backdrop-blur-sm border-t border-x border-white/5"
            >
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* X-Axis */}
      <div className="mt-4 flex justify-between text-[9px] text-gray-500 font-bold tracking-wider">
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
    <section id="expertise" className="py-32 relative scroll-mt-20 overflow-hidden metal-bg">
      {/* Premium Geometric Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-premium-green/10 to-transparent blur-[100px] -skew-x-12 translate-x-1/3 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-blue-500/10 to-transparent blur-[100px] skew-x-12 -translate-x-1/3 pointer-events-none -z-10" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] -z-10"></div>

      <div className="container mx-auto max-w-7xl px-6">
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
            <div className="h-[1px] bg-gradient-to-r from-transparent via-premium-green/50 to-transparent w-32"></div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-[0.2em] text-white text-center font-display drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {t.valueTrifecta.arsenal}
            </h3>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-premium-green/50 to-transparent w-32"></div>
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
                <div className="flex-1 space-y-8 relative">
                  <div className="absolute inset-0 bg-white/[0.02] border border-white/5 backdrop-blur-sm -z-10 rounded-3xl transform rotate-1 scale-105 opacity-50"></div>
                  <div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:bg-white/[0.05]">

                    <div className="flex items-center gap-5 mb-8">
                      <div className={`p-4 bg-premium-black border border-white/10 ${service.color} shadow-lg shadow-${service.color}/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 rounded-2xl`}>
                        <service.icon className="w-8 h-8" />
                      </div>
                      <h4 className={`text-3xl md:text-5xl font-black font-display text-white tracking-tight`}>{service.title}</h4>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10 pl-2">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {service.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-default"
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 ${service.color}`} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Placeholder (Component Based) */}
                <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none relative">
                  {/* Spotlight Effect */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-${service.color.split('-')[1]}-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-full aspect-[5/4] lg:aspect-square border border-white/10 bg-black/40 overflow-hidden group hover:border-white/20 transition-all duration-500 rounded-[2.5rem] shadow-2xl backdrop-blur-sm z-10`}
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
    </section>
  );
};
