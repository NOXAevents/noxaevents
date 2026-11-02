const ITEMS = [
  { label: 'Galavečery', color: '#ffc2e8' },
  { label: 'Konferencie', color: '#b8e6d0' },
  { label: 'Teambuildingy', color: '#ffc9a3' },
  { label: 'Produktové launchy', color: '#c9b8f5' },
  { label: 'Firemné oslavy', color: '#f5e6a8' },
  { label: 'Incentive cesty', color: '#ffc2e8' },
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-[#ffc2e8]/15 py-6 overflow-hidden bg-[#000a38]">
      <div className="marquee-track flex whitespace-nowrap w-max">
        {[0, 1].map((half) => (
          <div key={half} className="flex">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span
                  className="font-display text-2xl md:text-4xl tracking-wide-2 px-8"
                  style={{ color: item.color }}
                >
                  {item.label}
                </span>
                <span className="text-[#faf6f0]/40 text-lg">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
