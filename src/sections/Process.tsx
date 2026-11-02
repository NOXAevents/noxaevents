import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '../components/Reveal';

const STEPS = [
  { n: 'I', title: 'Pochopíme', text: 'Brief, ciele, kultúra firmy. Položíme otázky, ktoré odhalia, čo má event naozaj priniesť.' },
  { n: 'II', title: 'Navrhneme', text: 'Do 48 hodín koncept s témou, vizuálom a rozpočtom. Jeden jasný návrh, nie desať polovičných.' },
  { n: 'III', title: 'Zrealizujeme', text: 'Produkcia, technika, catering, program. Náš tím je na mieste od prvého kábla po posledného hosťa.' },
  { n: 'IV', title: 'Zhodnotíme', text: 'Spätná väzba, metriky, fotodokumentácia. A nápady, ako to nabudúce posunúť ešte ďalej.' },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const lineH = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="proces" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-[10px] uppercase tracking-mega text-[#ffc2e8] flex items-center gap-4">
            <span className="inline-block w-10 h-px bg-[#ffc2e8]/60" /> 03 · Proces
          </p>
          <h2 className="mt-8 font-serif-e text-4xl md:text-6xl text-[#faf6f0]">
            Štyri kroky k <span className="italic text-[#ffc2e8]">dokonalému večeru</span>
          </h2>
        </Reveal>

        <div ref={ref} className="mt-20 relative pl-10 md:pl-16">
          {/* progress spine */}
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-[#faf6f0]/10">
            <motion.div style={{ height: lineH }} className="w-px bg-[#ffc2e8]" />
          </div>

          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative pb-20 last:pb-0">
                <span className="absolute -left-10 md:-left-16 top-1 flex h-5 w-5 md:h-9 md:w-9 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-[#ffc2e8]/40" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffc2e8]" />
                </span>
                <div className="grid md:grid-cols-[auto_1fr] gap-2 md:gap-12 items-baseline">
                  <span className="font-display text-5xl md:text-7xl text-[#ffc2e8]/25 leading-none">{s.n}</span>
                  <div>
                    <h3 className="font-serif-e text-2xl md:text-3xl text-[#faf6f0]">{s.title}</h3>
                    <p className="mt-3 max-w-lg text-[#faf6f0]/60 font-light leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
