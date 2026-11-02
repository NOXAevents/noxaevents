import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#proces', label: 'Proces' },
  { href: '#realizacie', label: 'Realizácie' },
  { href: '#atmosfera', label: 'Atmosféra' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#010f50]/85 backdrop-blur-md py-4' : 'bg-transparent py-7'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-sweep text-[11px] uppercase tracking-wide-2 text-[#faf6f0]/75 hover:text-[#ffc2e8] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="text-[11px] uppercase tracking-wide-2 border border-[#ffc2e8]/60 text-[#ffc2e8] px-6 py-2.5 hover:bg-[#ffc2e8] hover:text-[#010f50] transition-all duration-400"
          >
            Naplánovať event
          </a>
        </nav>

        <a href="#hero" className="flex items-center gap-3 group md:ml-auto">
          <span className="hidden sm:block font-display text-lg tracking-mega text-[#faf6f0] group-hover:text-[#ffc2e8] transition-colors">
            NOXA
          </span>
          <img src="/logo-mark.png" alt="NOXA" className="h-9 w-9 object-contain" />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block h-px w-7 bg-[#faf6f0] transition-transform ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block h-px w-7 bg-[#faf6f0] transition-transform ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 -z-10 bg-[#000a38] flex flex-col items-center justify-center gap-8 transition-opacity duration-500 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl tracking-wide-2 text-[#faf6f0]"
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
