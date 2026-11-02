import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

const CASES = [
  {
    client: 'Finančná skupina · 450 hostí',
    title: 'Vianočná gala „Noir"',
    desc: 'Večer v duchu 20. rokov — jazz band, art deco scéna a tajomná tombola, o ktorej sa v firme hovorí dodnes.',
    photo: '/photos/IMG_2468.jpeg',
    color: '#ffc2e8',
  },
  {
    client: 'Tech scale-up · 120 ľudí',
    title: 'Kreatívny sprint & launch',
    desc: 'Imerzívne odhalenie produktu s mapping projekciou a živým vysielaním pre tri pobočky v Európe.',
    photo: '/photos/IMG_2465.jpeg',
    color: '#c9b8f5',
  },
  {
    client: 'Automotive · deň pri vode',
    title: 'Teambuilding na kajakoch',
    desc: 'Vodná výzva, večera od šéfkuchára a táborák. Tím odišiel ako jeden muž.',
    photo: '/photos/IMG_2471.jpeg',
    color: '#ffc9a3',
  },
  {
    client: 'Farma firmy · konferencia',
    title: 'Summit pod šírym nebom',
    desc: 'Celodenná konferencia pre 600 delegátov — stage dizajn, workshopy a networking lounge v zeleni.',
    photo: '/photos/IMG_2467.jpeg',
    color: '#b8e6d0',
  },
];

export default function Cases() {
  const [i, setI] = useState(0);
  const c = CASES[i];

  return (
    <section id="realizacie" className="relative py-28 md:py-40 px-6 md:px-10 bg-[#000a38] overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[10px] uppercase tracking-mega text-[#ffc2e8] flex items-center gap-4">
            <span className="inline-block w-10 h-px bg-[#ffc2e8]/60" /> 04 · Realizácie
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[10px] uppercase tracking-mega text-[#faf6f0]/45">{c.client}</p>
                <h3 className="mt-5 font-serif-e text-3xl md:text-5xl leading-tight text-[#faf6f0]">
                  „{c.title.replace(/„|"/g, '')}"
                </h3>
                <p className="mt-6 max-w-md text-[#faf6f0]/60 font-light leading-relaxed">{c.desc}</p>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-12 flex items-center gap-6">
              <button
                onClick={() => setI((i - 1 + CASES.length) % CASES.length)}
                aria-label="Predchádzajúci"
                className="h-12 w-12 rounded-full border border-[#faf6f0]/25 text-[#faf6f0] hover:border-[#ffc2e8] hover:text-[#ffc2e8] transition-colors flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={() => setI((i + 1) % CASES.length)}
                aria-label="Ďalší"
                className="h-12 w-12 rounded-full border border-[#faf6f0]/25 text-[#faf6f0] hover:border-[#ffc2e8] hover:text-[#ffc2e8] transition-colors flex items-center justify-center"
              >
                →
              </button>
              <span className="text-xs tracking-mega text-[#faf6f0]/40">
                0{i + 1} / 0{CASES.length}
              </span>
            </div>
          </div>

          {/* case photo */}
          <div className="relative hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="photo-frame aspect-[4/3] relative"
              >
                <img src={c.photo} alt={c.title} className="absolute inset-0 h-full w-full object-cover" />
                <span
                  className="absolute bottom-5 left-5 z-10 font-display text-6xl"
                  style={{ color: c.color }}
                >
                  0{i + 1}
                </span>
              </motion.div>
            </AnimatePresence>
            <div
              className="absolute -inset-3 border pointer-events-none"
              style={{ borderColor: `${c.color}44` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
