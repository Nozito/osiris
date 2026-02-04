import React, { useState, useRef, useCallback } from 'react';
import { GripVertical } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
  beforeImage, 
  afterImage, 
  alt,
  className = "" 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to vertical movement (parallax)
  // We scale the image slightly (1.1) so edges don't show when moving
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = 1.1;

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-ew-resize group/slider ${className}`}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onClick={(e) => handleMove(e.clientX)}
    >
      {/* AFTER Image (Background - The "New" Design) */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        <img
          src={afterImage}
          alt={`${alt} After`}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </motion.div>
      
      {/* Label After */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-premium-green/30 z-10 pointer-events-none">
        <span className="text-[10px] font-bold text-premium-green uppercase tracking-widest">Après</span>
      </div>

      {/* BEFORE Image (Foreground - The "Old" Design) - Clipped */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {/* Important: Apply exactly the same transforms to keep images aligned */}
        <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ y, scale }}
        >
            <img
            src={beforeImage}
            alt={`${alt} Before`}
            className="w-full h-full object-cover"
            draggable={false}
            />
        </motion.div>
        
        {/* Label Before */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 z-20 pointer-events-none">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Avant</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-premium-green cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,255,133,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-premium-green rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-ew-resize active:scale-90 transition-transform">
           <GripVertical className="w-4 h-4 text-black" />
        </div>
      </div>
      
      {/* Intro hint overlay (fades out on interaction) */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 z-30 ${sliderPosition !== 50 ? 'opacity-0' : 'opacity-100'}`}>
         <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 text-xs text-white uppercase tracking-wider font-bold animate-pulse">
            Glisser pour comparer
         </div>
      </div>
    </div>
  );
};