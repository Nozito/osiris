import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Word: React.FC<{ children: string; progress: any; range: [number, number] }> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.3em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export const AboutReveal: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'start 0.25'],
  });

  const words = t.aboutReveal.text.split(' ');

  return (
    <section className="relative w-full px-4 sm:px-6 py-24 sm:py-36 bg-transparent" ref={containerRef}>
      <div className="container mx-auto max-w-4xl">
        <p className="font-display text-[1.6rem] sm:text-[2.4rem] md:text-[2.8rem] font-medium leading-[1.25] text-center text-agero-ink">
          {words.map((word, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
};
