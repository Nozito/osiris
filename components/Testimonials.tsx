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
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: t.testimonials.reviews[1].text,
      author: t.testimonials.reviews[1].author,
      role: t.testimonials.reviews[1].role,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: t.testimonials.reviews[2].text,
      author: t.testimonials.reviews[2].author,
      role: t.testimonials.reviews[2].role,
      image: "https://randomuser.me/api/portraits/men/86.jpg"
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
              className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors backdrop-blur-md relative group"
            >
              <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-premium-green" />
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed relative z-10 font-light">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border border-white/10">
                  <img src={review.image} alt={review.author} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <cite className="not-italic font-bold text-white block text-sm">{review.author}</cite>
                  <span className="text-xs text-premium-green uppercase tracking-wider font-bold">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};