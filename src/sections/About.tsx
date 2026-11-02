import { Reveal, WordReveal, DiscoBall } from '../components/Reveal';

const STATS = [
  { n: '120+', label: 'realizovaných eventov', color: '#ffc2e8' },
  { n: '15 000', label: 'spokojných hostí', color: '#b8e6d0' },
  { n: '98 %', label: 'klientov sa vracia', color: '#ffc9a3' },
  { n: '48 h', label: 'návrh konceptu', color: '#c9b8f5' },
];

export default function About() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_auto] gap-16 items-start">
        <div>
          <Reveal>
            <p className="text-[10px] uppercase tracking-mega text-[#ffc2e8] flex items-center gap-4">
              <span className="inline-block w-10 h-px bg-[#ffc2e8]/60" /> 01 · Kto sme
            </p>
          </Reveal>
          <h2 className="mt-8 font-serif-e text-4xl md:text-6xl leading-[1.12] text-[#faf6f0] max-w-2xl">
            <WordReveal text="Event nie je večierok. Je to moment, keď sa firma" />
            <span className="italic text-[#ffc2e8]">
              <WordReveal text=" stáva zážitkom." stagger={0.08} />
            </span>
          </h2>
          <Reveal delay={0.25}>
            <p className="mt-10 max-w-xl text-[#faf6f0]/65 leading-relaxed font-light">
              NOXA Events je butiková eventová agentúra. Od prvej témy cez scenár, výrobu
              a techniku až po posledný toast — všetko držíme vo vlastných rukách. Výsledkom
              sú firemné podujatia, ktoré pôsobia ľahko, pretože za nimi stojí precízna práca.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="border-t border-[#faf6f0]/15 pt-5">
                  <div className="font-display text-3xl md:text-4xl" style={{ color: s.color }}>{s.n}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-wide-2 text-[#faf6f0]/50">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3} className="hidden md:block">
          <div className="relative">
            <DiscoBall className="w-40 lg:w-52" stroke="#ffc2e8" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,194,232,0.12),transparent_70%)] -z-10 scale-150" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
