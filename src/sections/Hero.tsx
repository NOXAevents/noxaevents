import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Glasses } from '../components/Reveal';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yLogo = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* deep glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_38%,rgba(255,194,232,0.10),transparent_70%)]" />

      {/* corner flourishes */}
      <svg className="absolute top-24 left-6 w-40 md:w-64 opacity-40" viewBox="0 0 300 60" fill="none">
        <path d="M2 40 Q80 8 160 30 T298 20" stroke="#faf6f0" strokeWidth="1" />
        <circle cx="160" cy="30" r="3" stroke="#faf6f0" strokeWidth="1" fill="none" />
      </svg>
      <svg className="absolute bottom-16 right-6 w-40 md:w-64 opacity-40 rotate-180" viewBox="0 0 300 60" fill="none">
        <path d="M2 40 Q80 8 160 30 T298 20" stroke="#faf6f0" strokeWidth="1" />
        <circle cx="160" cy="30" r="3" stroke="#faf6f0" strokeWidth="1" fill="none" />
      </svg>

      {/* vertical side label */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <span className="v-text text-[10px] uppercase tracking-mega text-[#faf6f0]/40">
          Corporate events · Est. Bratislava
        </span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-16 relative">
        <motion.div style={{ y: yLogo, opacity: fade }} className="relative flex flex-col items-center">
          <motion.img
            src={`${import.meta.env.BASE_URL}logo-large.png`}
            alt="NOXA Events"
            className="w-[min(88vw,760px)] mix-blend-screen"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="absolute -right-4 md:-right-16 top-1/2 hidden sm:block"
          >
            <Glasses className="w-24 md:w-32 opacity-80" stroke="#ffc2e8" />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yText }} className="mt-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="text-[11px] md:text-xs uppercase tracking-mega text-[#ffc2e8]/90"
          >
            Navrhujeme · Produkcia · Zážitok
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif-e text-3xl md:text-5xl lg:text-[3.4rem] leading-tight text-[#faf6f0] max-w-3xl"
          >
            Firemné eventy, ktoré si vaši ľudia
            <span className="italic text-[#ffc2e8]"> zapamätajú</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex items-center justify-center gap-6"
          >
            <a
              href="#kontakt"
              className="text-[11px] uppercase tracking-wide-2 bg-[#ffc2e8] text-[#010f50] px-8 py-3.5 font-semibold hover:bg-[#ffd9ef] transition-colors"
            >
              Naplánovať event
            </a>
            <a href="#sluzby" className="link-sweep text-[11px] uppercase tracking-wide-2 text-[#faf6f0]/80 hover:text-[#ffc2e8] transition-colors">
              Pozrieť služby
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-mega text-[#faf6f0]/45">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="block w-px h-10 bg-gradient-to-b from-[#ffc2e8]/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}