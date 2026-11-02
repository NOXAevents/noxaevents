import { useState, type FormEvent } from 'react';
import { Reveal, Balloons, Spark } from '../components/Reveal';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <p className="text-[10px] uppercase tracking-mega text-[#ffc2e8] flex items-center gap-4">
              <span className="inline-block w-10 h-px bg-[#ffc2e8]/60" /> 06 · Kontakt
            </p>
            <h2 className="mt-8 font-serif-e text-4xl md:text-6xl leading-tight text-[#faf6f0]">
              Povedzte nám,
              <br />
              čo chcete <span className="italic text-[#ffc2e8]">osláviť</span>
            </h2>
            <p className="mt-8 max-w-md text-[#faf6f0]/60 font-light leading-relaxed">
              Napíšte nám pár viet o vašej firme a príležitosti. Do 48 hodín sa ozveme
              s prvým konceptom a nezáväzným rozpočtom.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 space-y-5 text-sm">
              <a href="mailto:hello@noxaevents.sk" className="link-sweep block w-fit text-[#faf6f0]/85 hover:text-[#ffc2e8] transition-colors text-lg font-serif-e italic">
                hello@noxaevents.sk
              </a>
              <a href="tel:+421900000000" className="link-sweep block w-fit text-[#faf6f0]/85 hover:text-[#ffc2e8] transition-colors text-lg font-serif-e italic">
                +421 900 000 000
              </a>
              <p className="text-[#faf6f0]/45 tracking-wide-2 text-[11px] uppercase pt-3">
                Bratislava · pôsobíme v celej SR a ČR
              </p>
            </div>
            <Balloons className="mt-12 w-32 opacity-70 hidden lg:block" stroke="#b8e6d0" />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          {sent ? (
            <div className="border border-[#ffc2e8]/30 p-10 md:p-14 text-center bg-[#000a38]">
              <Spark className="w-20 mx-auto" stroke="#f5e6a8" />
              <h3 className="mt-8 font-serif-e text-3xl text-[#faf6f0]">Ďakujeme!</h3>
              <p className="mt-4 text-[#faf6f0]/60 font-light">
                Vaša správa je u nás. Ozveme sa do 48 hodín — a prinesieme nápady.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-9 border border-[#faf6f0]/10 p-8 md:p-12 bg-[#000a38]/60">
              {[
                { id: 'meno', label: 'Meno a firma', type: 'text', req: true },
                { id: 'email', label: 'E-mail', type: 'email', req: true },
                { id: 'datum', label: 'Plánovaný termín (nepovinné)', type: 'text', req: false },
              ].map((f) => (
                <div key={f.id} className="group">
                  <label htmlFor={f.id} className="block text-[10px] uppercase tracking-mega text-[#faf6f0]/45">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required={f.req}
                    className="mt-2 w-full bg-transparent border-b border-[#faf6f0]/20 focus:border-[#ffc2e8] py-2.5 text-[#faf6f0] placeholder:text-[#faf6f0]/25 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="sprava" className="block text-[10px] uppercase tracking-mega text-[#faf6f0]/45">
                  O čom má event byť?
                </label>
                <textarea
                  id="sprava"
                  rows={4}
                  required
                  className="mt-2 w-full bg-transparent border-b border-[#faf6f0]/20 focus:border-[#ffc2e8] py-2.5 text-[#faf6f0] placeholder:text-[#faf6f0]/25 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full text-[11px] uppercase tracking-mega bg-[#ffc2e8] text-[#010f50] py-4 font-semibold hover:bg-[#ffd9ef] transition-colors"
              >
                Odoslať dopyt
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
