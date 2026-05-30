import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      text: t.testimonials.reviews[0].text,
      author: t.testimonials.reviews[0].author,
      role: t.testimonials.reviews[0].role,
      company: (t.testimonials.reviews[0] as any).company || "ImmoPrestige Lyon",
      date: (t.testimonials.reviews[0] as any).date || "Janvier 2025",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      text: t.testimonials.reviews[1].text,
      author: t.testimonials.reviews[1].author,
      role: t.testimonials.reviews[1].role,
      company: (t.testimonials.reviews[1] as any).company || "Maison Éclat Paris",
      date: (t.testimonials.reviews[1] as any).date || "Décembre 2024",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      text: t.testimonials.reviews[2].text,
      author: t.testimonials.reviews[2].author,
      role: t.testimonials.reviews[2].role,
      company: (t.testimonials.reviews[2] as any).company || "FinanceFlow",
      date: (t.testimonials.reviews[2] as any).date || "Novembre 2024",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 5
    }
  ];

  return (
    <section className="px-6 py-20 border-b border-[#D2D2D7] relative bg-[#F0EDE6]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#1D1D1F]/40 text-[#1D1D1F]/40" strokeWidth={0} />
            ))}
            <span className="ml-2 text-sm text-[#1D1D1F]/40 font-medium">5.0 sur Google</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F] font-sans">
            {t.testimonials.title} <span className="text-[#1D1D1F]/20">{t.testimonials.titleFaded}</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.07
              }
            }
          }}
          className="grid responsive-card-grid gap-6"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={{
              hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } }
              }}
              className="bg-white p-8 rounded-2xl border border-[#D2D2D7] transition-all duration-300 relative flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-6">
                {[...Array(review.rating)].map((_, starIdx) => (
                  <Star key={starIdx} className="w-3.5 h-3.5 fill-[#1D1D1F]/30 text-[#1D1D1F]/30" strokeWidth={0} />
                ))}
              </div>

              <div className="absolute top-8 right-8 opacity-[0.04]">
                <Quote className="w-10 h-10 text-[#1D1D1F]" strokeWidth={1} />
              </div>

              <p className="text-base text-[#1D1D1F]/55 mb-8 leading-relaxed relative z-10 font-light flex-1">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-[#D2D2D7]">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F7] overflow-hidden">
                  <img src={review.image} alt={review.author} className="w-full h-full object-cover" loading="lazy" width="40" height="40" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <cite className="not-italic font-medium text-[#1D1D1F] text-sm">{review.author}</cite>
                  </div>
                  <span className="text-xs text-[#1D1D1F]/40">{review.role} — {review.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};