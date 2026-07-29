import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Search, Palette, Target, PhoneCall, Send, Clock, FileText } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  search: Search,
  palette: Palette,
  target: Target,
};

const STEP_ICONS = [Send, Clock, FileText];

export const AuditGratuit: React.FC = () => {
  const { t } = useLanguage();
  const [message, setMessage] = useState(t.audit.textareaDefault);

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${t.audit.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const steps = [...t.audit.processSteps, { num: '📲', text: 'Tu reçois ton audit via WhatsApp' }];

  return (
    <section id="audit" className="px-4 sm:px-6 py-20 sm:py-28 bg-transparent scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-agero-ink mb-4">
            {t.audit.title}
          </h2>
          <p className="text-agero-gray leading-relaxed">{t.audit.subtitle}</p>
        </motion.div>

        {/* Pillars + form */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {/* 4 pillar cards */}
          <div className="grid grid-cols-2 gap-4">
            {t.audit.pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon] ?? Zap;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border border-agero-line hover:border-agero-blue/30 rounded-2xl p-5 transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl text-white flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #0A2F63 0%, #0099FF 100%)' }}
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    {pillar.tag && (
                      <span className="text-[9px] font-semibold px-2 py-1 rounded-full bg-agero-surface text-agero-ink/50 uppercase tracking-wider">
                        {pillar.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-agero-ink mb-1">{pillar.title}</h3>
                  <p className="text-xs text-agero-gray leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Message + CTAs — dark card with the site's blue glow, for contrast against the light pillar cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-agero-dark rounded-[2rem] p-6 sm:p-8 flex flex-col"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(55% 50% at 15% 0%, rgba(0,153,255,0.28) 0%, transparent 70%), \
                   radial-gradient(50% 45% at 100% 100%, rgba(0,113,227,0.32) 0%, transparent 75%)',
              }}
            />
            <label htmlFor="audit-message" className="relative block text-sm font-medium text-white/70 mb-3">
              {t.audit.textareaLabel}
            </label>
            <textarea
              id="audit-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.audit.textareaPlaceholder}
              rows={5}
              className="relative w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-agero-blue/50 transition-colors duration-300 resize-none mb-6"
            />
            <div className="relative flex flex-col gap-3">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 w-full bg-white text-agero-ink font-medium py-3.5 rounded-full hover:bg-white/90 transition-colors duration-300"
              >
                <SiWhatsapp className="w-4 h-4" color="#25D366" />
                Envoyer sur WhatsApp
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full border border-white/15 text-white font-medium py-3.5 rounded-full hover:bg-white/5 transition-colors duration-300"
              >
                <PhoneCall className="w-4 h-4" />
                Réserver mon appel
              </Link>
            </div>
            <p className="relative text-xs text-white/35 text-center mt-5">{t.audit.reassurance}</p>
          </motion.div>
        </div>

        {/* Process */}
        <div>
          <div className="text-center mb-12">
            <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-agero-blue mb-4">
              {t.audit.processTitle}
            </p>
            <p className="text-agero-gray max-w-xl mx-auto leading-relaxed mb-2">{t.audit.subtitle}</p>
            <p className="text-agero-ink/40 text-xs font-medium uppercase tracking-widest">{t.audit.stats}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {steps.map((step, i) => {
              const StepIcon = STEP_ICONS[i];
              const isLast = i === steps.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ${
                      isLast ? 'border-2 border-[#25D366]' : ''
                    }`}
                    style={
                      isLast
                        ? undefined
                        : { background: 'linear-gradient(135deg, #0A2F63 0%, #0099FF 100%)' }
                    }
                  >
                    {isLast ? (
                      <SiWhatsapp className="w-6 h-6" color="#25D366" />
                    ) : (
                      <>
                        <StepIcon className="w-5 h-5 text-white" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-agero-blue text-white text-[9px] font-bold flex items-center justify-center">
                          {step.num}
                        </span>
                      </>
                    )}
                  </div>
                  <p className={`text-xs sm:text-sm font-medium leading-snug max-w-[130px] ${isLast ? 'text-agero-blue' : 'text-agero-ink/70'}`}>
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-agero-ink text-white text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-agero-ink/85 transition-colors duration-300"
            >
              Démarrer mon audit gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
