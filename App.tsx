import React from 'react';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-premium-black text-white selection:bg-premium-green selection:text-black overflow-hidden">

      {/* Ambient Atmosphere Background - Animated */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Purple Nebula - Top Left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen"
        ></motion.div>

        {/* Subtle Green Glow - Top Right */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[10%] right-[-10%] w-[40%] h-[50%] bg-premium-green/5 rounded-full blur-[120px] mix-blend-screen"
        ></motion.div>

        {/* Deep Blue Depth - Bottom Left */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-[-10%] left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen"
        ></motion.div>

        {/* Central Uplight - Breathing */}
        <motion.div
          animate={{ opacity: [0.01, 0.03, 0.01] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none"
        ></motion.div>
      </div>

      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tarifs" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Global Grain/Noise Overlay for texture */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}