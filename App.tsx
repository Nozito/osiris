import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useScroll, useSpring, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
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
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-2 border-[#D2D2D7] border-t-[#0071E3] rounded-full animate-spin" />
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
      // Only scroll if this was a deliberate navigation (state flag set by Navbar),
      // not a page refresh where the hash happens to be in the URL.
      if (!location.state?.scrollToAudit) {
        // Clean the hash without scrolling
        window.history.replaceState({}, '', '/');
        return;
      }

      let frameId: number;
      let attempts = 0;
      const MAX_ATTEMPTS = 120; // ~2s at 60fps

      const tryScroll = () => {
        const target = document.querySelector('#audit');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts++ < MAX_ATTEMPTS) {
          frameId = requestAnimationFrame(tryScroll);
        }
      };

      frameId = requestAnimationFrame(tryScroll);
      return () => cancelAnimationFrame(frameId);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen bg-[#F5F4EF] text-[#0F1729] overflow-x-hidden font-sans" id="app-root">

      <ScrollToTop />
      <Navbar />

      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed right-0 top-0 bottom-0 w-[2px] bg-[#E8E3D9] origin-top z-50 hidden lg:block pointer-events-none"
      >
        <motion.div
          className="absolute top-0 w-full bg-premium-green"
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