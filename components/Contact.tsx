import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC<{ showMap?: boolean }> = ({ showMap = false }) => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: fd.get('name') as string,
          company: '',
          email: fd.get('email') as string,
          budget: '',
          message: fd.get('message') as string,
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 pt-2 pb-8 relative overflow-hidden scroll-mt-20 bg-transparent">
      {/* Faded wordmark, stuck to the very top of the section */}
      <div className="relative flex justify-center pointer-events-none select-none -mb-6 sm:-mb-10">
        <span
          className="font-display font-semibold leading-none text-[16vw] sm:text-[9vw] tracking-tight"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(29,29,31,0.25) 0%, rgba(29,29,31,0.02) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {t.contact.title}
        </span>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-agero-dark"
        >
          {/* Ambient blue glow — same treatment as the footer card */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(45% 40% at 20% 0%, rgba(0,153,255,0.22) 0%, transparent 70%), \
                 radial-gradient(45% 40% at 85% 10%, rgba(0,113,227,0.16) 0%, transparent 70%), \
                 radial-gradient(60% 45% at 50% 100%, rgba(0,113,227,0.30) 0%, transparent 75%)',
            }}
          />

          {/* Noise / grain texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundRepeat: 'repeat',
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 sm:gap-16 px-6 sm:px-12 py-14 sm:py-20">
            {/* Left: heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-[1.1] mb-4">
                {t.contact.title}
                <br />
                {t.contact.titleFaded}
              </h2>
              <p className="text-white/50 text-base sm:text-lg">{t.contact.subtitle}</p>

              {showMap && (
                <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <iframe
                    title="Osiris Agency — Manosque, Alpes-de-Haute-Provence"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56210205.017539255!2d-127.86400119999998!3d30.695940900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cbcd6b1128c6e3%3A0x89b8b52ebf05f8b5!2sOsiris%20Agency!5e0!3m2!1sfr!2sfr!4v1778954394063!5m2!1sfr!2sfr"
                    width="100%"
                    height="220"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}
            </motion.div>

            {/* Right: minimal form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="block text-white text-sm font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder={t.contact.form.name}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/30 focus:border-premium-blue focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-white text-sm font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.contact.form.email}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/30 focus:border-premium-blue focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-white text-sm font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={2}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/30 focus:border-premium-blue focus:outline-none transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs">Une erreur est survenue — réessayez ou contactez-nous directement.</p>
                )}

                {status === 'success' ? (
                  <div className="flex items-center justify-center gap-2 text-premium-blue font-medium text-sm bg-white/5 rounded-full py-4">
                    <CheckCircle2 className="w-5 h-5" />
                    Message envoyé — on vous répond sous 24h !
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-white text-agero-ink font-medium py-4 rounded-full hover:bg-white/90 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <span className="animate-pulse">{t.contact.form.submit}…</span>
                    ) : (
                      <span>{t.contact.form.submit}</span>
                    )}
                  </button>
                )}

                <p className="text-center text-xs text-white/35">{t.contact.reassurance}</p>
              </form>
            </motion.div>
          </div>

          {/* Bottom ticker */}
          <div className="relative border-t border-white/10 py-6 overflow-hidden">
            <div className="flex w-max animate-marquee-left">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="mx-6 flex items-center gap-3 text-white font-medium whitespace-nowrap">
                  {t.contact.emailDirect}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
