import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Eyebrow, Heading, Reveal, Tag } from "../components/ui";
import IntelligenceHub from "../components/IntelligenceHub";
import { PROCESS, waLink } from "../data";

export default function Process() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const manual = useRef(false);

  useEffect(() => {
    if (!playing || manual.current) return;
    const id = setInterval(() => setActive((a) => (a + 1) % PROCESS.length), 4200);
    return () => clearInterval(id);
  }, [playing]);

  const pick = (i: number) => { manual.current = true; setActive(i); };
  const step = PROCESS[active];
  const progress = ((active + 1) / PROCESS.length) * 100;

  return (
    <section className="relative pt-32 pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-radial-navy" />

      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide-2 text-mute">
          <Link to="/" className="hover:text-gold-2">Home</Link>
          <Icon name="chevron-right" size={12} className="text-gold-2/60" />
          <span className="text-gold-2">Our Process</span>
        </nav>

        <div className="mt-6 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Heading eyebrow="Methodology · 8 stages" title={<>The investigation<br /><span className="italic text-gold-gradient">lifecycle.</span></>} />
          <Reveal delay={100}>
            <div className="flex items-center gap-3">
              <button onClick={() => { manual.current = false; setPlaying((p) => !p); }} className="ghost-btn flex items-center gap-2 rounded-sm px-4 py-2 text-[11px] uppercase">
                <Icon name={playing ? "close" : "arrow"} size={14} /> {playing ? "Pause" : "Auto-play"}
              </button>
              <span className="font-mono text-[10px] uppercase tracking-wide-2 text-mute">Step {String(active + 1).padStart(2, "0")} / 08</span>
            </div>
          </Reveal>
        </div>

        {/* horizontal progress */}
        <Reveal>
          <div className="mt-10">
            <div className="relative h-1.5 w-full rounded-full bg-white/8">
              <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold-3 via-gold to-gold-2 transition-all duration-700" style={{ width: `${progress}%` }} />
              <div className="absolute inset-0 flex items-center justify-between">
                {PROCESS.map((p, i) => (
                  <button
                    key={p.no}
                    onClick={() => pick(i)}
                    className={`relative grid h-5 w-5 place-items-center rounded-full border transition ${i <= active ? "border-gold-2 bg-gold-2" : "border-white/20 bg-navy"}`}
                    aria-label={`Step ${p.no} ${p.title}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${i <= active ? "bg-navy" : "bg-white/30"}`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-wide-2 text-mute">
              <span>Intake</span><span>Resolution</span>
            </div>
          </div>
        </Reveal>

        {/* vertical list + detail */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ol className="space-y-2">
              {PROCESS.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.no}>
                    <button
                      onClick={() => pick(i)}
                      className={`group flex w-full items-center gap-4 rounded-md border p-3.5 text-left transition ${
                        isActive ? "border-gold-2/60 bg-navy-2/80 shadow-[0_20px_40px_-30px_rgba(201,138,4,0.7)]" : "border-white/8 bg-navy-2/30 hover:border-gold-2/30"
                      }`}
                    >
                      <div className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md border transition ${isActive ? "border-gold-2 shadow-md" : "border-white/10"}`}>
                        <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-2/80 to-transparent" />
                        <span className="absolute bottom-1 left-1 font-mono text-[9px] font-bold text-gold-2 bg-navy/80 px-1.5 rounded">
                          {p.no}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-base font-semibold leading-tight text-ivory">{p.title}</span>
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">{p.sub}</p>
                      </div>
                      <Icon name={isActive ? "chevron-down" : "arrow"} size={16} className={`shrink-0 transition ${isActive ? "rotate-90 text-gold-2" : "text-mute group-hover:text-gold-2"}`} />
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <div key={active} className="plate corner-ticks relative overflow-hidden rounded-xl p-7 sm:p-9 reveal in">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(201,138,4,0.5), transparent 70%)" }} />
              
              {/* Illustration Hero Banner for active stage */}
              <div className="relative mb-6 h-52 w-full overflow-hidden rounded-lg border border-gold-2/25 shadow-xl">
                <img src={step.img} alt={step.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-2 via-navy-2/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <Eyebrow>Stage {step.no} · {step.sub}</Eyebrow>
                  <span className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/90 bg-navy/80 px-2 py-0.5 rounded border border-gold-2/30 backdrop-blur">
                    Stage {step.no} of 08
                  </span>
                </div>
              </div>

              <h3 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">{step.title}</h3>

              <p className="relative mt-7 text-ivory/75">{step.details}</p>

              <div className="relative mt-7">
                <p className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">System outputs · deliverables</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-1">
                  {step.outputs.map((o, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-md border border-gold-2/15 bg-ink/40 p-4">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-2/40 font-mono text-[10px] text-gold-2">{i + 1}</span>
                      <p className="pt-0.5 text-sm text-ivory/85">{o}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-7 flex items-center justify-between gap-3 border-t border-gold-2/10 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-wide-2 text-mute">
                  {active < PROCESS.length - 1 ? `Next · ${PROCESS[active + 1].no} ${PROCESS[active + 1].title}` : "Case closed · file archived"}
                </span>
                <div className="flex gap-2">
                  <button onClick={() => pick((active - 1 + PROCESS.length) % PROCESS.length)} className="grid h-9 w-9 place-items-center rounded-full border border-gold-2/30 text-gold-2 hover:bg-gold-2/10">
                    <Icon name="chevron-left" size={16} />
                  </button>
                  <button onClick={() => pick((active + 1) % PROCESS.length)} className="grid h-9 w-9 place-items-center rounded-full border border-gold-2/30 text-gold-2 hover:bg-gold-2/10">
                    <Icon name="chevron-right" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assurance banner */}
        <Reveal delay={100}>
          <div className="mt-14 grid items-center gap-6 overflow-hidden rounded-lg border border-gold-2/20 bg-navy-2/50 p-7 sm:grid-cols-[auto_1fr_auto] sm:p-8">
            <div className="grid h-24 w-24 place-items-center rounded-full border border-gold-2/30 bg-ink/60">
              <Icon name="gavel" size={46} className="text-gold-2" />
            </div>
            <p className="max-w-2xl text-ivory/80">
              We deliver clear, credible and court-admissible reports that help you make <span className="text-gold-2">informed decisions</span> with confidence.
            </p>
            <a href={waLink()} target="_blank" rel="noreferrer" className="gold-btn sheen-host flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] uppercase">
              How We Work <Icon name="arrow" size={16} />
            </a>
          </div>
        </Reveal>

        {/* Intelligence Hub */}
        <div className="mt-24">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <Heading eyebrow="Interactive demo" title={<>The <span className="italic text-gold-gradient">Intelligence Hub</span></>} />
            <Reveal delay={100}>
              <p className="max-w-md text-sm text-ivory/65">
                Four illustrative walkthroughs of the tools our analysts use — title scanning, inheritance flow, renovation ROI and the client case portal.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="mt-10">
            <IntelligenceHub />
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Tag>Confidential</Tag><Tag>Evidence-led</Tag><Tag>Court-ready</Tag><Tag>End-to-end</Tag>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
