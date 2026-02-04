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
    <section className="px-6 py-32 border-b border-white/5 relative dark-bg">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-premium-green text-premium-green" />
            ))}
            <span className="ml-2 text-sm text-gray-400 font-medium">5.0 sur Google</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display">
            {t.testimonials.title} <span className="text-gray-600">{t.testimonials.titleFaded}</span>
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
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-2xl border border-white/5 hover:border-premium-green/30 transition-all duration-500 backdrop-blur-md relative group flex flex-col"
            >
              {/* Stars for this review */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, starIdx) => (
                  <Star key={starIdx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                <Quote className="w-10 h-10 text-premium-green" />
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed relative z-10 font-light flex-1">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden border-2 border-white/10 group-hover:border-premium-green/50 transition-colors duration-500">
                  <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <cite className="not-italic font-bold text-white text-sm">{review.author}</cite>
                    <BadgeCheck className="w-4 h-4 text-premium-green" />
                  </div>
                  <span className="text-xs text-gray-400">{review.role} — <span className="text-premium-green font-semibold">{review.company}</span></span>
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold hidden sm:block">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};