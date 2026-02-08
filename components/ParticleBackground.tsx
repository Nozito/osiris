import React, { useEffect, useRef, useCallback } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  // Throttled mouse handler to reduce event processing
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Particle configuration - optimized counts
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 30 : 50; // Reduced for performance
    const INTERACTION_RADIUS = isMobile ? 150 : 200; // Smaller on mobile
    const CONNECTION_DISTANCE = 80;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }

    let particles: Particle[] = [];
    let isVisible = true;

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.4 + 0.1
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2); // Cap DPR for performance
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    // Visibility API to pause when tab is hidden
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    const animate = () => {
      if (!isVisible) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = window.innerWidth;
        if (p.x > window.innerWidth) p.x = 0;
        if (p.y < 0) p.y = window.innerHeight;
        if (p.y > window.innerHeight) p.y = 0;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy; // Avoid sqrt when possible
        const radiusSq = INTERACTION_RADIUS * INTERACTION_RADIUS;

        let currentAlpha = p.alpha;

        if (distSq < radiusSq) {
          const dist = Math.sqrt(distSq);
          const intensity = 1 - dist / INTERACTION_RADIUS;
          currentAlpha = Math.min(1, p.alpha + intensity * 0.5);

          // Gentle push
          const force = intensity * 0.3;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        // Draw simple circle (much faster than diamond + shadow)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 133, ${currentAlpha})`;
        ctx.fill();

        // Draw connections (optimized: only check forward)
        if (distSq < radiusSq) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const dist2Sq = dx2 * dx2 + dy2 * dy2;

            if (dist2Sq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
              const dist2 = Math.sqrt(dist2Sq);
              const opacity = (1 - dist2 / CONNECTION_DISTANCE) * 0.2;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(0, 255, 133, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Event listeners with passive flag for better scroll performance
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ willChange: 'transform' }}
    />
  );
};