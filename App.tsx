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
    <div className="relative min-h-screen bg-premium-black text-white selection:bg-premium-green selection:text-black overflow-hidden">

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