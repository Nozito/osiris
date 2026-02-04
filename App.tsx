import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ValueTrifecta } from './components/ValueTrifecta';
import { Showcase } from './components/Showcase';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Offer } from './components/Offer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-premium-black text-white selection:bg-premium-green selection:text-black overflow-hidden">
      
      {/* Ambient Atmosphere Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Purple Nebula - Top Left */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen opacity-60"></div>
        
        {/* Subtle Green Glow - Top Right */}
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[50%] bg-premium-green/5 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
        
        {/* Deep Blue Depth - Bottom Left */}
        <div className="absolute bottom-[-10%] left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen opacity-50"></div>
        
        {/* Central Uplight - Very Subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <ValueTrifecta />
        <Showcase />
        <Process />
        <Testimonials />
        <Offer />
        <Contact />
        <Footer />
      </main>
      
      {/* Global Grain/Noise Overlay for texture */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}