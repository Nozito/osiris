import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      text: t.testimonials.reviews[0].text,
      author: t.testimonials.reviews[0].author,
      role: t.testimonials.reviews[0].role,
      company: (t.testimonials.reviews[0] as any).company || "ImmoPrestige Lyon",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      text: t.testimonials.reviews[1].text,
      author: t.testimonials.reviews[1].author,
      role: t.testimonials.reviews[1].role,
      company: (t.testimonials.reviews[1] as any).company || "Maison Éclat Paris",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      text: t.testimonials.reviews[2].text,
      author: t.testimonials.reviews[2].author,
      role: t.testimonials.reviews[2].role,
      company: (t.testimonials.reviews[2] as any).company || "FinanceFlow",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 5
    }
  ];

  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28 relative bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-agero-blue text-agero-blue" strokeWidth={0} />
            ))}
            <span className="ml-2 text-sm text-agero-gray font-medium">5.0 sur Google</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-agero-ink">
            {t.testimonials.title} <span className="text-agero-ink/25">{t.testimonials.titleFaded}</span>
          </h2>
        </motion.div>

        {/* Stats band — real numbers, dark contrast band with the site's blue glow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14 rounded-3xl overflow-hidden bg-agero-ink px-4 sm:px-6 py-8"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(50% 60% at 15% 0%, rgba(0,153,255,0.22) 0%, transparent 70%), \
                 radial-gradient(55% 55% at 90% 100%, rgba(0,113,227,0.28) 0%, transparent 75%)',
            }}
          />
          {t.foundersIntro.stats.map((stat, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <span className="font-display text-2xl sm:text-4xl font-semibold text-white mb-1">{stat.value}</span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wide text-white/40">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Infinite marquee — two identical halves (each repeating the 3 reviews
            several times for width) so the -50% keyframe loops forever with no jump */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -mx-4 sm:-mx-6 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <div className="flex gap-5 w-max animate-marquee-left px-4 sm:px-6" style={{ animationDuration: '50s' }}>
            {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="relative flex flex-col w-[320px] sm:w-[380px] flex-shrink-0 bg-white p-7 sm:p-8 rounded-[2rem] border border-agero-line"
              >
                <Quote className="absolute top-7 right-7 w-8 h-8 text-agero-ink/[0.06]" strokeWidth={1} />

                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(review.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-3.5 h-3.5 fill-agero-blue/70 text-agero-blue/70" strokeWidth={0} />
                  ))}
                </div>

                <p className="text-agero-ink/70 leading-relaxed mb-8 flex-1">"{review.text}"</p>

                <div className="flex items-center gap-3 pt-5 border-t border-agero-line">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                  <div>
                    <cite className="not-italic font-medium text-agero-ink text-sm block">{review.author}</cite>
                    <span className="text-xs text-agero-gray">{review.role} — {review.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
