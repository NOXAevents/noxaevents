import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

const SERVICES = [
  {
    id: 'galavecery',
    title: 'Galavečery & oslavy',
    tag: 'Celebration',
    color: '#ffc2e8',
    text: 'Vianočné večierky, výročia, plesy a firemné oslavy s dramaturgiou na mieru — od dress code po finálny ohňostroj emócií.',
    detail: ['Scenár a moderovanie', 'Catering & barový koncept', 'Hudba, svetlá, show'],
  },
  {
    id: 'konferencie',
    title: 'Konferencie & kongresy',
    tag: 'Business',
    color: '#b8e6d0',
    text: 'Profesionálna produkcia konferencií pre 50 aj 1 000 ľudí. Stage dizajn, registrácia, streaming a backstage pod kontrolou.',
    detail: ['Technická produkcia', 'Registračný systém', 'Hybridné vysielanie'],
  },
  {
    id: 'teambuilding',
    title: 'Teambuildingy',
    tag: 'People',
    color: '#ffc9a3',
    text: 'Programy, ktoré skutočne spájajú tím — od kulinárskych výziev cez outdoor expedičné hry po kreatívne workshopy.',
    detail: ['Návrh programu na mieru', 'Skúsení lektori', 'Hodnotenie a spätná väzba'],
  },
  {
    id: 'launchy',
    title: 'Produktové launchy',
    tag: 'Impact',
    color: '#c9b8f5',
    text: 'Uvedenie produktu ako divadelná premiéra. Dramaturgia odhalenia, médiá, influenceri a moment, ktorý sa zdieľa.',
    detail: ['Kreatívny koncept', 'PR a medializácia', 'Imerzívne inštalácie'],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="sluzby" className="relative py-28 md:py-40 px-6 md:px-10 bg-[#000a38]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[10px] uppercase tracking-mega text-[#ffc2e8] flex items-center gap-4">
            <span className="inline-block w-10 h-px bg-[#ffc2e8]/60" /> 02 · Služby
          </p>
          <h2 className="mt-8 font-serif-e text-4xl md:text-6xl text-[#faf6f0]">
            Čo pre vás <span className="italic text-[#ffc2e8]">vytvoríme</span>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-10 md:gap-20">
          {/* list */}
          <div>
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left py-7 border-b border-[#faf6f0]/10 flex items-baseline justify-between gap-6 transition-colors ${
                    active === i ? '' : 'text-[#faf6f0]/80 hover:text-[#faf6f0]'
                  }`}
                  style={active === i ? { color: s.color } : undefined}
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-[10px] tracking-mega text-[#faf6f0]/35">0{i + 1}</span>
                    <span className="font-display text-2xl md:text-3xl tracking-wide-2">{s.title}</span>
                  </span>
                  <span
                    className={`text-[9px] uppercase tracking-mega transition-opacity ${
                      active === i ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    {s.tag}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          {/* detail panel */}
          <div className="relative min-h-[260px] md:min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="md:sticky md:top-32 border p-8 md:p-12 bg-[#010f50]"
                style={{ borderColor: `${SERVICES[active].color}55` }}
              >
                <p className="text-[10px] uppercase tracking-mega" style={{ color: SERVICES[active].color }}>{SERVICES[active].tag}</p>
                <h3 className="mt-4 font-serif-e text-3xl text-[#faf6f0]">{SERVICES[active].title}</h3>
                <p className="mt-5 text-[#faf6f0]/65 leading-relaxed font-light">{SERVICES[active].text}</p>
                <ul className="mt-8 space-y-3">
                  {SERVICES[active].detail.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-[#faf6f0]/75">
                      <span className="text-xs" style={{ color: SERVICES[active].color }}>✦</span> {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
