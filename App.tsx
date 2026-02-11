import React from 'react';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-premium-green selection:text-black overflow-hidden font-sans">
      {/* === GLOBAL BACKGROUND LAYERS (From Pricing Page Style) === */}

      {/* 1. Base Gradient & Animated Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
        <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-premium-green/10 rounded-full blur-[120px] animate-[float-slow_15s_ease-in-out_infinite] will-change-transform" />
        <div className="absolute bottom-[-10%] right-[10%] w-[60vw] h-[60vw] bg-purple-900/15 rounded-full blur-[150px] animate-[float-slow_20s_ease-in-out_infinite_reverse] will-change-transform" />
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px] animate-[pulse_12s_ease-in-out_infinite] will-change-opacity" />
      </div>

      {/* 2. Interactive Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* 3. Global Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_100%)]"></div>

      <Navbar />

      <main className="relative z-10 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tarifs" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Floating WhatsApp Chat Button */}
      <WhatsAppButton />
    </div>
  );
}