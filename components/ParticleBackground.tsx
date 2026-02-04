import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number; baseAlpha: number }[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Higher density for a "matrix" feel
      const density = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2, // Slower, more elegant movement
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2 + 1, // Slightly larger for crosses to be visible
          baseAlpha: Math.random() * 0.3 + 0.1
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Distance from mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 300;

        let alpha = p.baseAlpha;
        let scale = 1;

        if (dist < interactionRadius) {
            const intensity = 1 - dist / interactionRadius;
            alpha += intensity * 0.8; // Brighten near mouse
            scale = 1 + intensity * 1.5; // Grow near mouse
        }

        // Draw particle as a CROSS (+)
        ctx.beginPath();
        const size = p.size * scale;
        
        // Horizontal line
        ctx.moveTo(p.x - size, p.y);
        ctx.lineTo(p.x + size, p.y);
        
        // Vertical line
        ctx.moveTo(p.x, p.y - size);
        ctx.lineTo(p.x, p.y + size);
        
        ctx.strokeStyle = `rgba(0, 255, 133, ${Math.min(alpha, 1)})`; // Premium green color
        ctx.lineWidth = 1;
        ctx.stroke();

        // Connect particles ONLY near mouse
        if (dist < interactionRadius) {
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx2 = p.x - p2.x;
                const dy2 = p.y - p2.y;
                const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                
                // Only connect close particles that are ALSO within the mouse radius
                if (dist2 < 100) {
                    const dxM = mouse.x - p2.x;
                    const dyM = mouse.y - p2.y;
                    const distM = Math.sqrt(dxM * dxM + dyM * dyM);

                    if (distM < interactionRadius) {
                        const opacity = (1 - dist / interactionRadius) * (1 - dist2 / 100) * 0.5;
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
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};