import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [budgetSel, setBudgetSel] = useState('');

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
          name:    fd.get('name')    as string,
          company: fd.get('company') as string,
          email:   fd.get('email')   as string,
          budget:  fd.get('budget')  as string,
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
    <section id="contact" className="px-4 sm:px-6 py-6 sm:py-10 bg-[#151922] relative overflow-hidden scroll-mt-20 border-t border-[#2A3140]">
      {/* Scrolling OSIRIS Marquee Band - Background */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-[15vw] md:text-[15vw] lg:text-[14vw] font-black font-display text-white/[0.06] tracking-[-0.05em] mx-8"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.10)' }}
            >
              OSIRIS
            </span>
          ))}
        </motion.div>
      </div>

      {/* Decoration */}
<div className="absolute top-0 right-0 w-1/3 h-full bg-premium-green/3 skew-x-12 pointer-events-none border-l border-[#2A3140]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-premium-green text-xs font-bold uppercase tracking-widest mb-4 block">{t.contact.sectionLabel}</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black font-display text-white mb-6 sm:mb-8">
              {t.contact.title} <br />
              <span className="text-gray-500">{t.contact.titleFaded}</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1B202B] border border-[#2A3140] flex items-center justify-center text-premium-green">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{t.contact.emailDirect}</h3>
                  {/* Additional info removed since email is now the title */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1B202B] p-3 sm:p-8 md:p-12 border border-[#2A3140] rounded-2xl sm:rounded-[2.5rem]"
          >
            <form className="contact-form space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.name}</label>
                  <input id="contact-name" name="name" type="text" required className="w-full bg-[#0F1115] border border-[#2A3140] p-3 sm:p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-xl sm:rounded-2xl" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-company" className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.company}</label>
                  <input id="contact-company" name="company" type="text" className="w-full bg-[#0F1115] border border-[#2A3140] p-3 sm:p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-xl sm:rounded-2xl" placeholder="Company Ltd" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.email}</label>
                <input id="contact-email" name="email" type="email" required className="w-full bg-[#0F1115] border border-[#2A3140] p-3 sm:p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-xl sm:rounded-2xl" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-budget" className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.budget}</label>
                <select
                  id="contact-budget"
                  aria-label="Budget"
                  value={budgetSel}
                  onChange={e => setBudgetSel(e.target.value)}
                  className="w-full bg-[#0F1115] border border-[#2A3140] p-3 sm:p-4 text-white focus:border-premium-green focus:outline-none transition-colors appearance-none rounded-xl sm:rounded-2xl"
                >
                  {(t.contact.form.budgetOptions as string[]).map((opt, i) => (
                    <option key={i} value={i < 3 ? opt : 'custom'} className="bg-[#111]">{opt}</option>
                  ))}
                </select>
                {budgetSel === 'custom' ? (
                  <input
                    name="budget"
                    type="text"
                    placeholder={t.contact.form.budgetCustomPlaceholder as string}
                    className="w-full bg-[#0F1115] border border-[#2A3140] p-3 sm:p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-xl sm:rounded-2xl placeholder-gray-600"
                  />
                ) : (
                  <input type="hidden" name="budget" value={budgetSel || (t.contact.form.budgetOptions as string[])[0]} />
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">{t.contact.form.message}</label>
                <textarea id="contact-message" name="message" required rows={4} className="w-full bg-[#0F1115] border border-[#2A3140] p-3 sm:p-4 text-white focus:border-premium-green focus:outline-none transition-colors rounded-xl sm:rounded-2xl" placeholder={t.contact.form.messagePlaceholder}></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">Une erreur est survenue — réessayez ou contactez-nous directement.</p>
              )}

              <div className="flex justify-center mt-4">
                {status === 'success' ? (
                  <div className="flex items-center gap-2 text-premium-green font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    Message envoyé — on vous répond sous 24h !
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-reserve w-full sm:w-auto sm:min-w-[320px] bg-premium-green text-white font-bold py-3 sm:py-5 text-[11px] sm:text-sm uppercase tracking-[0.08em] sm:tracking-widest hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <span className="animate-pulse">{t.contact.form.submit}…</span>
                    ) : (
                      <>
                        <span className="truncate">{t.contact.form.submit}</span>
                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      </>
                    )}
                  </button>
                )}
              </div>

              <p className="text-center text-xs text-gray-500 mt-3">{t.contact.reassurance}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};