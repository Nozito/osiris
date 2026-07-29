import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SiWhatsapp, SiFigma, SiMessenger } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

// Same accent blue used across the rest of the site (agero-blue).
const ACCENT_BLUE = '#0099FF';

const AVATARS = [
  'https://i.ibb.co/CS4GtTb/IMG-8669.jpg',
  'https://i.ibb.co/gMzfwQKZ/Noah-PP.jpg',
];

// Google's own hosted product icons — genuinely multicolor, unlike the
// monochrome brand marks in Simple Icons, so Meet/Drive don't read as generic.
const GOOGLE_MEET_ICON = 'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png';
const GOOGLE_DRIVE_ICON = 'https://fonts.gstatic.com/s/i/productlogos/drive_2020q4/v8/web-96dp/logo_drive_2020q4_color_2x_web_96dp.png';

// Uniform sizing so every badge/avatar lines up identically across all cards.
const BADGE_SIZE = 18; // on-avatar badge, px

const OnAvatarBadge: React.FC<{ icon?: React.ElementType; img?: string; bg?: string; color?: string }> = ({ icon: Icon, img, bg = '#fff', color = '#fff' }) => (
  <span
    className="absolute -top-1 -right-1 rounded-full flex items-center justify-center ring-2 ring-white overflow-hidden"
    style={{ width: BADGE_SIZE, height: BADGE_SIZE, background: img ? '#fff' : bg }}
  >
    {img ? <img src={img} alt="" className="w-full h-full object-contain p-[2px]" /> : Icon ? <Icon size={9} color={color} /> : null}
  </span>
);

const Avatar: React.FC<{ src: string; badge?: React.ReactNode }> = ({ src, badge }) => (
  <span className="relative flex-shrink-0">
    <img src={src} alt="" className="w-9 h-9 rounded-full object-cover ring-[3px] ring-white" loading="lazy" />
    {badge}
  </span>
);

type Task = {
  title: string;
  avatars?: React.ReactNode;
  spanDays?: 2;
};

type DaySlot = {
  day: number;
  task?: Task;
  highlight?: boolean; // strong tint + pulsing glow (day 14 only)
  tintColor?: 'blue' | 'gray'; // subtle gradient column background
};

export const DeliveryTimeline: React.FC = () => {
  const { t } = useLanguage();

  const row1: DaySlot[] = [
    {
      day: 1,
      tintColor: 'blue',
      task: {
        title: t.deliveryTimeline.tasks.call,
        avatars: <Avatar src={AVATARS[0]} badge={<OnAvatarBadge icon={SiWhatsapp} bg="#25D366" />} />,
      },
    },
    {
      day: 2,
      tintColor: 'blue',
      task: {
        title: t.deliveryTimeline.tasks.kickoff,
        avatars: <Avatar src={AVATARS[1]} badge={<OnAvatarBadge img={GOOGLE_MEET_ICON} />} />,
      },
    },
    { day: 3 },
    { day: 4 },
    {
      day: 5,
      tintColor: 'gray',
      task: {
        title: t.deliveryTimeline.tasks.design,
        spanDays: 2,
        avatars: (
          <span className="flex -space-x-2">
            <Avatar src={AVATARS[0]} badge={<OnAvatarBadge icon={SiFigma} bg="#0ACF83" />} />
            <Avatar src={AVATARS[1]} badge={<OnAvatarBadge icon={SiMessenger} bg="#00B2FF" />} />
          </span>
        ),
      },
    },
    { day: 6, tintColor: 'blue' },
    { day: 7 },
  ];

  const row2: DaySlot[] = [
    { day: 8 },
    { day: 9 },
    {
      day: 10,
      tintColor: 'blue',
      task: {
        title: t.deliveryTimeline.tasks.v1,
        avatars: <Avatar src={AVATARS[0]} badge={<OnAvatarBadge img={GOOGLE_DRIVE_ICON} />} />,
      },
    },
    { day: 11 },
    {
      day: 12,
      tintColor: 'gray',
      task: {
        title: t.deliveryTimeline.tasks.revisions,
        spanDays: 2,
        avatars: (
          <span className="flex -space-x-2">
            <Avatar src={AVATARS[0]} />
            <Avatar src={AVATARS[1]} badge={<OnAvatarBadge icon={SiMessenger} bg="#00B2FF" />} />
          </span>
        ),
      },
    },
    { day: 13, tintColor: 'gray' },
    {
      day: 14,
      highlight: true,
      task: {
        title: t.deliveryTimeline.tasks.delivery,
        avatars: (
          <span className="flex -space-x-2">
            <Avatar src={AVATARS[0]} />
            <Avatar src={AVATARS[1]} />
          </span>
        ),
      },
    },
  ];

  // Sequential order across both rows, used to stagger the card entrance animation.
  let cardOrder = 0;

  const renderRow = (row: DaySlot[], keyPrefix: string) => (
    <div className="grid grid-cols-7">
      {row.map((slot, i) => {
        const orderIndex = cardOrder;
        if (slot.task) cardOrder += 1;
        const cardDelay = orderIndex * 0.09;

        return (
        <div
          key={`${keyPrefix}-${i}`}
          className="group relative h-48 sm:h-56 border-r border-dashed border-agero-line last:border-r-0"
        >
          {/* Column tint — accent blue gradient (days 1, 2, 6, 10, 14) or gray gradient (days 5, 12, 13) */}
          {(slot.tintColor || slot.highlight) && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  slot.tintColor === 'gray'
                    ? 'linear-gradient(180deg, rgba(15,23,41,0.03) 0%, rgba(15,23,41,0.09) 100%)'
                    : 'linear-gradient(180deg, rgba(0,153,255,0.10) 0%, rgba(0,153,255,0.28) 100%)',
              }}
            />
          )}

          {/* Day label — pill (event days) vs plain text (empty days), every column keeps its own label */}
          {slot.task ? (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: cardDelay }}
              className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 text-[10px] font-bold uppercase tracking-wide text-white px-2.5 py-1 rounded-full"
              style={{ background: ACCENT_BLUE }}
            >
              Jour {slot.day}
            </motion.span>
          ) : (
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-agero-ink/25">
              Jour {slot.day}
            </span>
          )}

          {slot.highlight && (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(60% 50% at 50% 100%, rgba(0,153,255,0.35) 0%, transparent 75%)' }}
            />
          )}

          {slot.task && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2, ease: 'easeOut' } }}
              transition={{ duration: 0.5, delay: cardDelay, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/2 -translate-y-1/2 left-3 z-10"
              style={{ width: `calc(${(slot.task.spanDays ?? 1) * 100}% - 1.5rem)` }}
            >
              <motion.div
                initial={{ boxShadow: '0 1px 2px rgba(15,23,41,0.04), 0 8px 24px rgba(15,23,41,0.06)' }}
                whileHover={{ boxShadow: '0 2px 4px rgba(15,23,41,0.06), 0 16px 36px rgba(15,23,41,0.12)' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="relative flex items-center gap-3 bg-white rounded-r-2xl overflow-visible p-3.5 pl-4"
              >
                {/* Straight left accent bar — no border-radius, so no curved bracket look */}
                <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: ACCENT_BLUE }} />

                <span className="text-xs sm:text-sm font-medium text-agero-ink/80 leading-snug flex-1">
                  {slot.task.title}
                </span>
                {slot.task.avatars}
              </motion.div>
            </motion.div>
          )}
        </div>
        );
      })}
    </div>
  );

  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-agero-ink mb-2">
            {t.deliveryTimeline.title}
          </h2>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-agero-blue mb-8">
            {t.deliveryTimeline.titleHighlight}
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-agero-ink text-white text-sm font-medium uppercase tracking-wide px-6 py-3 rounded-full hover:bg-agero-ink/85 transition-colors duration-300"
          >
            {t.deliveryTimeline.cta}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] bg-white overflow-hidden"
          style={{ boxShadow: '0 2px 4px rgba(15,23,41,0.03), 0 30px 70px -40px rgba(15,23,41,0.25)' }}
        >
          {/* Ambient blue color wash behind the grid */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(45% 35% at 8% 0%, rgba(0,153,255,0.14) 0%, transparent 70%), \
                 radial-gradient(45% 35% at 95% 100%, rgba(0,153,255,0.14) 0%, transparent 70%)',
            }}
          />

          <div className="relative">
            <div className="border-b border-dashed border-agero-line">{renderRow(row1, 'r1')}</div>
            {renderRow(row2, 'r2')}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
