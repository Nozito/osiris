import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Determine if we're on the homepage
  const isHomePage = location.pathname === '/';

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center justify-between gap-8 px-8 py-4 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] min-w-[320px] md:min-w-[500px]">

        {/* Left: Tarifs */}
        <div className="hidden md:flex flex-1 justify-start">
          <Link
            to="/tarifs"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-[10px]"
          >
            Tarifs
          </Link>
        </div>

        {/* Center: OSIRIS */}
        <div className="flex-0">
          <Link to="/" className="text-xl font-bold font-display tracking-tighter text-white">
            OSIRIS<span className="text-premium-green">.</span>
          </Link>
        </div>

        {/* Right: Contact */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link to="/contact" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-premium-green hover:text-black hover:border-premium-green transition-all duration-300">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};