import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

export function Reveal({
  children,
  delay = 0,
  y = 42,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Splits text into words that fade in one by one when scrolled into view. */
export function WordReveal({
  text,
  className,
  stagger = 0.05,
}: {
  text: string;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const words = text.split(' ');
  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: '0.5em', filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, delay: i * stagger, ease: [0.22, 1, 0.36, 1] }}
        >
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  );
}

/** Disco ball line art — celebration motif. */
export function DiscoBall({ className = '', stroke = '#faf6f0' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 200 220" fill="none" className={className} aria-hidden="true">
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round">
        <circle cx="100" cy="120" r="62" />
        <ellipse cx="100" cy="120" rx="62" ry="20" />
        <ellipse cx="100" cy="120" rx="40" ry="62" />
        <ellipse cx="100" cy="120" rx="18" ry="62" />
        <path d="M100 58 L100 30 M92 30 L108 30" />
        {/* light rays */}
        <path d="M24 78 L10 68 M176 78 L190 68 M22 160 L8 168 M178 160 L192 168 M100 196 L100 214" />
        <circle cx="14" cy="62" r="2" fill={stroke} stroke="none" />
        <circle cx="188" cy="62" r="2" fill={stroke} stroke="none" />
      </g>
    </svg>
  );
}

/** Starburst / sparkle line art. */
export function Spark({ className = '', stroke = '#faf6f0' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round">
        <path d="M80 20 L80 60 M80 100 L80 140 M20 80 L60 80 M100 80 L140 80" />
        <path d="M38 38 L64 64 M96 96 L122 122 M122 38 L96 64 M64 96 L38 122" />
      </g>
      <circle cx="80" cy="80" r="10" stroke={stroke} strokeWidth="2" />
      <circle cx="132" cy="126" r="3" fill={stroke} />
      <circle cx="26" cy="30" r="3" fill={stroke} />
    </svg>
  );
}

/** Party balloons line art. */
export function Balloons({ className = '', stroke = '#faf6f0' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className} aria-hidden="true">
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round">
        <ellipse cx="70" cy="62" rx="32" ry="40" />
        <path d="M70 102 L66 112 L74 112 Z" />
        <path d="M70 112 Q66 150 78 178 Q86 198 74 224" />
        <ellipse cx="140" cy="86" rx="26" ry="33" />
        <path d="M140 119 L136 128 L144 128 Z" />
        <path d="M140 128 Q148 160 138 190" />
        {/* confetti */}
        <path d="M28 30 l6 6 M170 34 l6 -6 M40 130 l7 3 M160 150 l7 -3" />
        <circle cx="34" cy="60" r="2.4" fill={stroke} stroke="none" />
        <circle cx="176" cy="66" r="2.4" fill={stroke} stroke="none" />
        <circle cx="52" cy="150" r="2" fill={stroke} stroke="none" />
      </g>
    </svg>
  );
}

/** Location pin line art. */
export function Pin({ className = '', stroke = '#faf6f0' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 160 200" fill="none" className={className} aria-hidden="true">
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round">
        <path d="M80 16 Q34 16 34 66 Q34 112 80 168 Q126 112 126 66 Q126 16 80 16 Z" />
        <circle cx="80" cy="64" r="18" />
        <path d="M46 184 Q80 174 114 184" />
      </g>
    </svg>
  );
}

export function Glasses({ className = '', stroke = '#faf6f0' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 220 240" fill="none" className={className} aria-hidden="true">
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round">
        {/* left glass */}
        <path d="M52 40 L92 40 L86 96 Q83 116 72 118 Q61 116 58 96 Z" />
        <path d="M72 118 L72 178" />
        <path d="M54 184 Q72 174 90 184" />
        <path d="M58 62 Q72 70 88 60" strokeDasharray="2 5" />
        {/* right glass, tilted, clinking */}
        <g transform="rotate(14 130 60)">
          <path d="M118 44 L158 44 L152 100 Q149 120 138 122 Q127 120 124 100 Z" />
          <path d="M138 122 L138 182" />
          <path d="M120 188 Q138 178 156 188" />
          <path d="M124 66 Q138 74 154 64" strokeDasharray="2 5" />
        </g>
        {/* sparkle burst at clink point */}
        <path d="M100 26 L104 34 M112 22 L110 32 M92 32 L98 38 M118 34 L112 40" />
        <circle cx="105" cy="18" r="1.6" fill={stroke} stroke="none" />
        <circle cx="94" cy="22" r="1.2" fill={stroke} stroke="none" />
        <circle cx="116" cy="24" r="1.2" fill={stroke} stroke="none" />
      </g>
      {/* rising bubbles */}
      <g fill={stroke}>
        <circle className="bubble" cx="70" cy="150" r="2" style={{ animationDelay: '0s' }} />
        <circle className="bubble" cx="76" cy="158" r="1.4" style={{ animationDelay: '1.4s' }} />
        <circle className="bubble" cx="140" cy="154" r="2" style={{ animationDelay: '0.7s' }} />
        <circle className="bubble" cx="146" cy="162" r="1.3" style={{ animationDelay: '2.1s' }} />
      </g>
    </svg>
  );
}
