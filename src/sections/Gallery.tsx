import { Reveal, Spark } from '../components/Reveal';

const PHOTOS = [
  { src: '/photos/IMG_2467.jpeg', label: 'Workshop pod šírym nebom', color: '#b8e6d0', span: 'md:col-span-7', ratio: 'aspect-[4/3]' },
  { src: '/photos/IMG_2465.jpeg', label: 'Kreatívny sprint tímu', color: '#ffc2e8', span: 'md:col-span-5', ratio: 'aspect-[3/4]' },
  { src: '/photos/IMG_2468.jpeg', label: 'Letný firemný piknik', color: '#f5e6a8', span: 'md:col-span-5', ratio: 'aspect-[3/4]' },
  { src: '/photos/IMG_2471.jpeg', label: 'Teambuilding na vode', color: '#ffc9a3', span: 'md:col-span-7', ratio: 'aspect-[4/3]' },
  { src: '/photos/IMG_2469.jpeg', label: 'Neformálne stretnutie v parku', color: '#c9b8f5', span: 'md:col-span-7', ratio: 'aspect-[4/3]' },
  { src: '/photos/IMG_2466.jpeg', label: 'Backstage príprav', color: '#ffc2e8', span: 'md:col-span-5', ratio: 'aspect-[3/4]' },
];

export default function Gallery() {
  return (
    <section id="atmosfera" className="relative py-28 md:py-40 px-6 md:px-10 overflow-hidden">
      <Spark className="absolute top-20 right-8 w-24 opacity-30 hidden lg:block" stroke="#f5e6a8" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[10px] uppercase tracking-mega text-[#b8e6d0] flex items-center gap-4">
            <span className="inline-block w-10 h-px bg-[#b8e6d0]/60" /> 05 · Atmosféra
          </p>
          <h2 className="mt-8 font-serif-e text-4xl md:text-6xl text-[#faf6f0] max-w-2xl">
            Takto to vyzerá, keď event <span className="italic text-[#b8e6d0]">funguje</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 0.1} className={`${p.span} group`}>
              <figure className={`photo-frame ${p.ratio} relative`}>
                <img src={p.src} alt={p.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <figcaption className="absolute bottom-0 left-0 right-0 z-10 p-5 flex items-end justify-between">
                  <span className="text-[11px] uppercase tracking-wide-2 text-[#faf6f0]">{p.label}</span>
                  <span
                    className="text-[9px] uppercase tracking-mega px-3 py-1 border"
                    style={{ color: p.color, borderColor: `${p.color}66` }}
                  >
                    0{i + 1}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
