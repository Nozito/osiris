import React, { useEffect, useState } from 'react';
import { OsirisLogoDraw } from './OsirisLogoDraw';

// Plays on every full page load/reload (App only mounts once per load,
// so in-app SPA navigation between routes never re-triggers this).
// Simple version: the mark draws itself in, holds briefly, then fades out.
export const IntroLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const fadeTimer = setTimeout(() => setFadeOut(true), 2400);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
    }, 2900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500"
      style={{
        background: 'linear-gradient(180deg, #060B18 0%, #0A2F63 55%, #0099FF 100%)',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      <OsirisLogoDraw play="in" size={120} />
    </div>
  );
};
