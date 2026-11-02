import { useEffect } from 'react';
import Lenis from 'lenis';
import Nav from '../sections/Nav';
import Hero from '../sections/Hero';
import Marquee from '../sections/Marquee';
import About from '../sections/About';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Cases from '../sections/Cases';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    // anchor navigation through Lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const el = document.querySelector(a.getAttribute('href')!);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -20 });
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('click', onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grain relative">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Cases />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
