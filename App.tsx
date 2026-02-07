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
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-premium-green selection:text-black overflow-hidden font-sans">

      {/* === GLOBAL BACKGROUND LAYERS === */}

      {/* 1. Deep Base & Radial Vignette */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#000000] opacity-80"></div>
      </div>

      {/* 2. Ambient "Liquid" Orbs - Slow Moving Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left - Green/Blue Mix */}
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-premium-green/5 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>

        {/* Bottom Right - Deep Purple for Contrast */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[150px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>

        {/* Center - Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] rounded-full bg-blue-900/5 blur-[120px] animate-pulse"></div>
      </div>

      {/* 3. Tactical Grid Overlay (Subtle Tech Feel) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <ParticleBackground />
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