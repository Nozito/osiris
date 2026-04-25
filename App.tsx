import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useScroll, useSpring, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalPage = lazy(() => import('./pages/LegalPage').then(m => ({ default: m.LegalPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-premium-green/30 border-t-premium-green rounded-full animate-spin" />
  </div>
);

export default function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleAuditClick = (event: Event) => {
      const link = event.currentTarget as HTMLAnchorElement;
      const isHome = window.location.pathname === '/';
      const target = document.querySelector('#audit') || document.querySelector('#contact');

      if (isHome && target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, '', '/#audit');
        return;
      }

      if (!isHome) {
        event.preventDefault();
        window.location.href = '/#audit';
        return;
      }

      // Keep default behavior only if no target and no known fallback.
      if (!target && link.getAttribute('href') !== '/#audit') {
        event.preventDefault();
        window.location.href = '/#audit';
      }
    };

    const links = Array.from(document.querySelectorAll('a[href*="audit"]')) as HTMLAnchorElement[];
    links.forEach((link) => link.addEventListener('click', handleAuditClick));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleAuditClick));
    };
  }, [location.pathname]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const sections = Array.from(document.querySelectorAll('main section')) as HTMLElement[];
    sections.forEach((section) => section.classList.add('fade-section'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#audit') {
      const scrollToTarget = () => {
        const target = document.querySelector('#audit') || document.querySelector('#contact');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const timeout = window.setTimeout(scrollToTarget, 120);
      return () => window.clearTimeout(timeout);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-white overflow-hidden font-sans" id="app-root">
      {/* === GLOBAL BACKGROUND LAYERS === */}

      {/* 1. Base Gradient & Animated Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0B0B0B]" id="app-bg-fixed">
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

      <ScrollToTop />
      <Navbar />

      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed right-0 top-0 bottom-0 w-[2px] bg-white/5 origin-top z-50 hidden lg:block pointer-events-none"
      >
        <motion.div
          className="absolute top-0 w-full bg-premium-green shadow-[0_0_12px_rgba(37,99,235,0.6)]"
          style={{ scaleY, originY: 0, height: '100%' }}
        />
      </motion.div>

      <main className="relative z-10 flex flex-col">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tarifs" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Floating WhatsApp Chat Button */}
      <WhatsAppButton />
    </div>
  );
}