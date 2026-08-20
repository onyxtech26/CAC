import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Eyebrow, Heading, Reveal, Tag } from "../components/ui";
import { PROCESS, waLink } from "../data";
import { Seo } from "../components/Seo";

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
  // Dot centres run from DOT/2 to (width - DOT/2) because the row is
  // justify-between, so the fill has to be expressed the same way or it
  // overshoots every marker (by 110px at step 1 on a 1206px bar).
  const DOT = 20;
  const progress = PROCESS.length > 1 ? (active / (PROCESS.length - 1)) * 100 : 0;
  const fillWidth = `calc(${DOT / 2}px + ${progress} * (100% - ${DOT}px) / 100)`;

  return (
    <>
    <Seo title="Our Process" description="A seven-stage investigation lifecycle — from initial consultation and evidence collection through verification, asset tracing and forensic analysis to a documented report." path="/process" />
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
            <Heading as="h1" eyebrow={`Methodology · ${PROCESS.length} stages`} title={<>The investigation<br /><span className="italic text-gold-gradient">lifecycle.</span></>} />
            <Reveal delay={100}>
              <div className="flex items-center gap-3">
                <button onClick={() => { manual.current = false; setPlaying((p) => !p); }} className="ghost-btn flex items-center gap-2 rounded-sm px-4 py-2 text-[11px] uppercase">
                  <Icon name={playing ? "close" : "arrow"} size={14} /> {playing ? "Pause" : "Auto-play"}
                </button>
                <span className="font-mono text-[10px] uppercase tracking-wide-2 text-mute">Step {String(active + 1).padStart(2, "0")} / {String(PROCESS.length).padStart(2, "0")}</span>
              </div>
            </Reveal>
          </div>
  
          {/* horizontal progress */}
          <Reveal>
            <div className="mt-10">
              <div
                className="relative h-1.5 w-full rounded-full bg-white/8"
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={PROCESS.length}
                aria-valuenow={active + 1}
                aria-valuetext={`Stage ${step.no} of ${PROCESS.length} — ${step.title}`}
              >
                <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold-3 via-gold to-gold-2 transition-all duration-700" style={{ width: fillWidth }} />
                <div className="absolute inset-0 flex items-center justify-between">
                  {PROCESS.map((p, i) => (
                    <button
                      key={p.no}
                      onClick={() => pick(i)}
                      className={`relative grid h-5 w-5 place-items-center rounded-full border transition duration-300 before:absolute before:-inset-[6px] before:content-[''] hover:scale-110 ${
                        i === active ? "step-dot-active border-gold-2 bg-gold-2 scale-125" : i < active ? "border-gold-2/70 bg-gold-2/80" : "border-white/20 bg-navy"
                      }`}
                      aria-label={`Step ${p.no} ${p.title}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${i <= active ? "bg-navy" : "bg-white/30"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-wide-2 text-mute">
                <span>{PROCESS[0].title}</span><span>{PROCESS[PROCESS.length - 1].title}</span>
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
                        className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-lg border p-4 text-left transition duration-400 ${
                          isActive
                            ? "border-gold-2/60 bg-gradient-to-r from-navy-3/90 to-ink/90 shadow-[0_22px_44px_-28px_rgba(201,138,4,0.75)]"
                            : "border-gold-2/12 bg-navy-2/40 hover:border-gold-2/35 hover:bg-navy-2/70"
                        }`}
                      >
                        {/* gold rail marks the active stage */}
                        <span
                          className={`absolute inset-y-0 left-0 w-[3px] transition-opacity duration-400 ${isActive ? "opacity-100" : "opacity-0"}`}
                          style={{ background: "linear-gradient(180deg, transparent, #e9c766 45%, #ca8a04 55%, transparent)" }}
                        />
                        <div className={`media-clip relative h-16 w-[88px] shrink-0 overflow-hidden rounded-md border transition duration-400 ${isActive ? "border-gold-2/70" : "border-gold-2/15"}`}>
                          <img src={p.img} alt={p.title} className={`h-full w-full object-cover transition duration-700 ${isActive ? "scale-105" : "group-hover:scale-105"}`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-2/85 to-transparent" />
                          <span className="absolute bottom-1 left-1 rounded bg-navy/85 px-1.5 font-mono text-[10px] font-bold text-gold-2">
                            {p.no}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className={`block font-display text-[19px] leading-tight transition-colors duration-300 ${isActive ? "text-ivory" : "text-sand group-hover:text-ivory"}`}>
                            {p.title}
                          </span>
                          <p className={`mt-1 font-mono text-[11px] uppercase tracking-wide-2 transition-colors duration-300 ${isActive ? "text-gold-2" : "text-mute group-hover:text-gold-2/80"}`}>
                            {p.sub}
                          </p>
                        </div>
                        <Icon name="chevron-right" size={16} className={`shrink-0 transition duration-400 ${isActive ? "translate-x-0.5 text-gold-2" : "text-mute group-hover:translate-x-0.5 group-hover:text-gold-2"}`} />
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
  
            {/* Detail panel */}
            <div className="lg:col-span-7">
              <div key={active} className="plate corner-ticks step-in relative overflow-hidden rounded-xl p-7 sm:p-9">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(201,138,4,0.5), transparent 70%)" }} />
                
                {/* Illustration Hero Banner for active stage */}
                <div className="media-clip step-media-in relative mb-6 h-52 w-full overflow-hidden rounded-lg border border-gold-2/25 shadow-xl">
                  <img src={step.img} alt={step.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-2 via-navy-2/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <Eyebrow>Stage {step.no} · {step.sub}</Eyebrow>
                    <span className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/90 bg-navy/80 px-2 py-0.5 rounded border border-gold-2/30 backdrop-blur">
                      Stage {step.no} of {String(PROCESS.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
  
                <h2 className="step-in font-display text-3xl leading-tight text-ivory sm:text-4xl" style={{ animationDelay: "80ms" }}>{step.title}</h2>
  
                <p className="step-in relative mt-7 text-[15px] leading-relaxed text-stone sm:text-base" style={{ animationDelay: "140ms" }}>{step.details}</p>
  
                <div className="relative mt-7">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wide-2 text-gold-2/80">System outputs · deliverables</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-1">
                    {step.outputs.map((o, i) => (
                      <li
                        key={i}
                        className="step-in flex items-start gap-3 rounded-lg border border-gold-2/20 bg-gradient-to-r from-navy-3/55 to-ink/70 p-4 transition duration-300 hover:border-gold-2/45"
                        style={{ animationDelay: `${200 + i * 70}ms` }}
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-2/45 font-mono text-[11px] font-bold text-gold-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="pt-0.5 text-[15px] leading-relaxed text-sand">{o}</p>
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
              <p className="max-w-2xl text-stone">
                We deliver clear, credible and evidence-based reports that help you make <span className="text-gold-2">informed decisions</span> with confidence.
              </p>
              <a href={waLink()} target="_blank" rel="noreferrer" className="gold-btn sheen-host flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] uppercase">
                How We Work <Icon name="arrow" size={16} />
              </a>
            </div>
          </Reveal>
  
          <Reveal delay={100}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              <Tag>Confidential</Tag><Tag>Evidence-led</Tag><Tag>Court-ready</Tag><Tag>End-to-end</Tag>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
