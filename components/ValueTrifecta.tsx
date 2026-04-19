import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <div
        className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-purple-500/20 blur-[60px] rounded-full group-hover/design:scale-110 transition-transform duration-700"
      />

      {/* Layer 1: Background Glass Card - Moves back in Z space on hover */}
      <div className="absolute inset-0 z-0 bg-premium-black/40 backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-700 ease-out group-hover/design:translate-z-[-40px] group-hover/design:opacity-50"></div>

      {/* Layer 2: Main Card - Floating UI - Moves slightly */}
      <div
        className="absolute inset-0 z-10 transition-all duration-700 ease-out group-hover/design:translate-z-[0px]"
      >
        <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_0_10px_rgba(255,255,255,0.05)] flex flex-col">
          {/* Card Header image */}
          <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20 relative p-6 flex flex-col justify-end overflow-hidden border-b border-white/5">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/design:animate-[shimmer_2s_infinite]"></div>

            {/* Smooth sheen instead of noise */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>
            <div className="flex justify-between items-end relative z-10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 mb-3 shadow-lg group-hover/design:scale-110 transition-transform duration-500"></div>
                <div className="w-24 h-4 bg-white/20 rounded-full backdrop-blur-sm"></div>
              </div>
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold tracking-widest text-white uppercase group-hover/design:bg-premium-green group-hover/design:text-white transition-colors duration-500">Pro</div>
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
      </div>

      {/* Layer 3: Floating Elements - Move FORWARD in Z space on hover (Exploded view) */}
      <div
        className="absolute -bottom-8 -left-8 z-30 transition-all duration-700 ease-out group-hover/design:translate-z-[60px] group-hover/design:scale-110 animate-[float-slow_5s_ease-in-out_infinite_1s]"
      >
        <div className="px-5 py-3 bg-premium-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <span className="text-xs font-bold text-gray-200">System Active</span>
        </div>
      </div>

      <div
        className="absolute bottom-20 -right-12 z-20 transition-all duration-700 ease-out group-hover/design:translate-z-[30px] group-hover/design:rotate-12 animate-[float-slow_7s_ease-in-out_infinite_0.5s]"
      >
        <div className="w-32 h-32 bg-purple-500/10 backdrop-blur-sm border border-white/5 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-purple-500/20 rounded-full border border-white/5 group-hover/design:scale-90 transition-transform duration-1000"></div>
        </div>
      </div>
    </div>
  </div>
);

// Visual Component for Engineering (Code Terminal)
const CodeVisual = () => {
  // Typewriter effect states
  // Static content
  const line1 = "import { QuantumShield } from '@osiris/security';";
  const line2 = "export const Defend = async () => {";
  const line3 = "  await QuantumShield.activate({ mode: 'ULTRA' });";

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 group/code">

      <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full group-hover/code:bg-blue-500/10 transition-colors duration-700"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm bg-gradient-to-br from-[#09090b]/95 to-[#09090b]/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_0_10px_rgba(255,255,255,0.05)] overflow-hidden font-mono text-xs z-10 rounded-2xl relative"
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
            {line1.length < 43 && <span className="w-2 h-4 bg-blue-400 opacity-50 ml-1 inline-block align-middle"></span>}
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
            <div className="text-[9px] font-bold text-blue-400 uppercase tracking-wider">Compiling</div>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                whileInView={{ width: "100%" }}
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

    <div className="relative w-full max-w-sm bg-gradient-to-br from-premium-black/80 to-premium-black/60 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_0_10px_rgba(255,255,255,0.05)] z-10 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-8 relative z-20">
        <div>
          <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Total Revenue</div>
          <div className="text-3xl font-black text-white font-display flex items-baseline gap-2">
            <motion.span
              whileInView={{ opacity: 1 }}
            >
              $128,420
            </motion.span>
            <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 border border-blue-500/20 flex items-center font-bold rounded-full">
              <TrendingUp className="w-3 h-3 mr-1" /> +24%
            </span>
          </div>
        </div>
        <div className="p-2.5 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer group-hover/growth:bg-blue-500/20 group-hover/growth:text-blue-400">
          <Globe className="w-4 h-4 text-blue-400" />
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
            initial={{ pathLength: 1 }}
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
            whileInView={{ opacity: 1, scale: 1 }}
          />
        </svg>

        {[35, 45, 30, 60, 55, 75, 90].map((h, i) => (
          <div key={i} className="w-full relative group/bar flex items-end z-10">

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0 pointer-events-none whitespace-nowrap z-40 shadow-lg">
              ${h}k
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-600 rotate-45"></div>
            </div>

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring", bounce: 0 }}
              className="w-full bg-white/5 rounded-t-lg group-hover/bar:bg-blue-500/20 transition-all duration-300 relative overflow-hidden backdrop-blur-sm border-t border-x border-white/5"
            >
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
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
            className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/5 backdrop-blur-sm group-hover:pause transition-colors hover:border-premium-green/50 hover:bg-premium-green/5 hover:shadow-[0_0_15px_rgba(37,99,235,0.1)] min-w-[140px] justify-center skew-x-[-10deg] rounded-xl"
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
  const [activeTab, setActiveTab] = React.useState('design');
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
      color: "text-blue-400",
      bgGlow: "bg-blue-500/10",
      borderGlow: "group-hover:border-blue-500/50"
    }
  ];

  return (
    <section id="expertise" className="relative px-4 sm:px-6 py-10 sm:py-16 bg-[#0B0B0B] overflow-hidden scroll-mt-20 selection:bg-premium-green selection:text-white">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-premium-green/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3 mix-blend-screen" />

      {/* Noise Texture */}
      {/* Premium Smooth Background - No Noise */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] -z-10"></div>

      <div className="container mx-auto max-w-7xl px-2 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
            }
          }}
          className="mb-12 sm:mb-20 text-center md:text-left"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
            className="text-premium-green text-xs font-bold uppercase tracking-widest mb-2 block"
          >
            {t.valueTrifecta.sectionLabel}
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
            }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 font-display text-white"
          >
            {t.valueTrifecta.title} <span className="text-premium-green">{t.valueTrifecta.titleHighlight}</span>.
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } }
            }}
            className="text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed mx-auto md:mx-0"
          >
            {t.valueTrifecta.subtitle}
          </motion.p>
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
          className="grid responsive-card-grid gap-4 sm:gap-6 mb-12 sm:mb-24"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ y: -5 }}
              className="group relative p-5 sm:p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden rounded-2xl sm:rounded-[1.5rem] hover:bg-white/[0.04]"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-premium-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="mb-4 relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/50 border border-white/10 text-premium-green shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:border-premium-green/30 transition-all duration-500 rounded-xl group-hover:scale-110">
                  <card.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white font-display tracking-tight">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-xs sm:text-sm">
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
            <div className="relative">
              <div className="absolute -inset-4 bg-premium-green/20 blur-xl rounded-full opacity-50"></div>
              <h3 className="relative text-3xl md:text-4xl font-black uppercase tracking-[0.2em] text-white text-center font-display drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {t.valueTrifecta.arsenalTitle}
              </h3>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-premium-green/50 to-transparent w-32"></div>
          </motion.div>

          {/* Desktop View: List */}
          <div className="hidden lg:block space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm -z-10 rounded-2xl transform rotate-1 scale-105 opacity-30 group-hover:rotate-2 group-hover:scale-110 transition-all duration-700"></div>
                  <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/20 backdrop-blur-2xl rounded-2xl p-6 lg:p-8 hover:border-white/30 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_0_10px_rgba(255,255,255,0.05)] group-hover:bg-white/[0.05] group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">

                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 bg-premium-black border border-white/10 ${service.color} shadow-lg shadow-${service.color}/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 rounded-xl`}>
                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h4 className={`text-2xl sm:text-3xl md:text-4xl font-black font-display text-white tracking-tight drop-shadow-lg`}>{service.title}</h4>
                    </div>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 pl-1">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {service.items.map((item, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-1.5 cursor-default group/item hover:bg-white/10 hover:border-${service.color.split('-')[1]}-500/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                        >
                          <CheckCircle2 className={`w-3 h-3 ${service.color} group-hover/item:scale-110 transition-transform`} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Placeholder (Component Based) */}
                <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none relative mt-6 lg:mt-0">
                  {/* Spotlight Effect */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-${service.color.split('-')[1]}-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-full aspect-[4/3] lg:aspect-square border border-white/10 bg-black/40 overflow-hidden group hover:border-white/20 transition-all duration-500 rounded-2xl sm:rounded-[2rem] shadow-2xl backdrop-blur-sm z-10`}
                  >
                    {/* Specular Highlight Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-50 mix-blend-overlay"></div>

                    {/* Render the specific visual based on ID */}
                    {service.id === 'design' && <DesignVisual />}
                    {service.id === 'engineering' && <CodeVisual />}
                    {service.id === 'growth' && <GrowthVisual />}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View: Tabs */}
          <div className="lg:hidden">
            <div className="flex p-1 bg-white/5 rounded-xl mb-8 overflow-x-auto no-scrollbar">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex-1 py-3 px-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wide transition-all whitespace-nowrap
                    ${activeTab === service.id
                      ? 'bg-premium-green text-white shadow-lg shadow-premium-green/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {service.title.split('&')[0]} {/* Shorten title for mobile tabs if needed, or keeping full */}
                </button>
              ))}
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {services.map((service) => (
                  activeTab === service.id && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >


                      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 bg-premium-black border border-white/10 ${service.color} rounded-lg`}>
                            <service.icon className="w-5 h-5" />
                          </div>
                          <h4 className={`text-2xl font-black font-display text-white tracking-tight`}>{service.title}</h4>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {service.items.map((item, idx) => (
                            <span key={idx} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 flex items-center gap-1.5">
                              <CheckCircle2 className={`w-3 h-3 ${service.color}`} />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
