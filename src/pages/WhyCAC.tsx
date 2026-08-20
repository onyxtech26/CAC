import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Eyebrow, Heading, Reveal, Tag } from "../components/ui";
import { FAQ, MISSION, MISSION_POINTS, VISION, WHY_PRINCIPLES, waLink } from "../data";
import { Seo } from "../components/Seo";

const PRINCIPLE_IMAGES = [
  { img: "/assets/illustration-forensic.webp", alt: "Documentary Forensic Investigation Evidence" },
  { img: "/assets/case-gavel-bRvLoHQ5.webp", alt: "Independent Court Grade Legal Standards" },
  { img: "/assets/illustration-estate.webp", alt: "Confidential Estate & Asset Handling" },
  { img: "/assets/cac-building.webp", alt: "End-to-End Registry & Title Support" },
];

// The six "Why Choose" points from the client brief. These replaced an earlier
// list that overlapped heavily with WHY_PRINCIPLES above — note the brief says
// "professional standards", not the "global standards" the old copy claimed,
// consistent with the client striking "worldwide" from the vision statement.
const STANDARDS = [
  { k: "Independent & Objective", img: "/assets/case-gavel-bRvLoHQ5.webp", d: "We act for the truth of the record — no stake in the outcome, and no party to favour." },
  { k: "Confidential Handling", img: "/assets/icon-legal.webp", d: "Estate matters are intimate. Sensitive material is handled to counsel grade on every file." },
  { k: "Detailed Historical Research", img: "/assets/service-forensic-title.webp", d: "Colonial grants, superseded title series, survey plans and probate archives — back as far as the record goes." },
  { k: "Structured Evidence Reporting", img: "/assets/illustration-forensic.webp", d: "Findings arrive as an organised portfolio with source documents attached, not a narrative summary." },
  { k: "Support Through Resolution", img: "/assets/service-ill-forensic.webp", d: "We work alongside the lawyers, executors, trustees and beneficiaries who must act on the findings." },
  { k: "Professional Standards & Ethics", img: "/assets/cac-building.webp", d: "Disciplined method, stated limitations, and no claim the documents cannot carry." },
];

const COMPARE = [
  { row: "Evidence basis", them: "Verbal advice & assumptions", us: "Registry folios, grants & probate files" },
  { row: "Independence", them: "Often tied to a transaction party", us: "Neutral — we answer to the record" },
  { row: "Document depth", them: "Current title only", us: "Pioneer-to-present chain reconstruction" },
  { row: "Court readiness", them: "Informal memos", us: "Structured evidence portfolios & binders" },
  { row: "Confidentiality", them: "Variable", us: "Counsel-grade handling on every file" },
  { row: "Continuity", them: "Hand-offs between vendors", us: "One team, intake to registration" },
];

export default function WhyCAC() {
  return (
    <>
    <Seo route="/why-cac" />
      <section className="relative pt-32 pb-24 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-40" />
  
        <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
          <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide-2 text-mute">
            <Link to="/" className="hover:text-gold-2">Home</Link>
            <Icon name="chevron-right" size={12} className="text-gold-2/60" />
            <span className="text-gold-2">Why CAC</span>
          </nav>
  
          <div className="mt-6 max-w-3xl">
            <Heading as="h1" eyebrow="Why CAC" title={<>Why clients trust<br /><span className="italic text-gold-gradient">CAC</span> with the record.</>} />
            <Reveal delay={120}>
              <p className="mt-6 text-stone">
                When ownership must be proven — not merely asserted — courts, counsel and families call CAC. Four principles govern every engagement we accept.
              </p>
            </Reveal>
          </div>
  
          {/* 4 Core principles */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_PRINCIPLES.map((p, i) => (
              <Reveal key={p.k} delay={i * 90}>
                <div className="plate plate-hover corner-ticks group relative flex h-full flex-col overflow-hidden rounded-lg">
                  <div className="media-clip media-fade relative h-44 w-full overflow-hidden">
                    <img
                      src={PRINCIPLE_IMAGES[i].img}
                      alt={PRINCIPLE_IMAGES[i].alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-2 via-navy-2/40 to-transparent" />
                    <span className="absolute top-3 right-3 font-mono text-[11px] font-bold text-gold-2 bg-navy/80 px-2.5 py-1 rounded border border-gold-2/30 backdrop-blur">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-2xl leading-snug text-ivory">{p.k}</h2>
                    <div className="mt-3 h-px w-10 hairline" />
                    <p className="mt-4 text-sm leading-relaxed text-stone">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
  
          {/* Comparison */}
          <div className="mt-20">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <Heading eyebrow="The difference" title={<>Conventional advice<br />vs. <span className="italic text-gold-gradient">court-grade evidence.</span></>} />
              <Reveal delay={100}><Tag>Forensic standard</Tag></Reveal>
            </div>
  
            <Reveal delay={100}>
              <div className="mt-10 overflow-x-auto [scrollbar-width:thin] rounded-xl border border-gold-2/20">
                <div className="min-w-[600px]">
                  <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-navy-2/70 font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">
                    <div className="p-4">Dimension</div>
                    <div className="border-l border-gold-2/10 p-4 text-mute">Conventional</div>
                    <div className="border-l border-gold-2/10 p-4 text-gold-2">CAC Forensic</div>
                  </div>
                  {COMPARE.map((c, i) => (
                    <div key={c.row} className={`grid grid-cols-[1.2fr_1fr_1fr] text-sm ${i % 2 ? "bg-navy-2/30" : "bg-ink/30"}`}>
                      <div className="p-4 font-display text-ivory">{c.row}</div>
                      <div className="flex items-start gap-2 border-l border-gold-2/10 p-4 text-mute">
                        <Icon name="close" size={14} className="mt-0.5 shrink-0 text-rose-300/80" /> {c.them}
                      </div>
                      <div className="flex items-start gap-2 border-l border-gold-2/10 p-4 text-sand">
                        <Icon name="check" size={14} className="mt-0.5 shrink-0 text-gold-2" /> {c.us}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
  
          {/* Vision + Mission */}
          <div className="mt-20 grid gap-5 lg:grid-cols-2">
            {[
              { k: "Vision", t: VISION, img: "/assets/service-ill-forensic.webp", alt: "CAC Vision" },
              { k: "Mission", t: MISSION, img: "/assets/service-family-estate.webp", alt: "CAC Mission" },
            ].map((v, i) => (
              <Reveal key={v.k} delay={i * 100}>
                <div className="plate corner-ticks relative flex h-full flex-col overflow-hidden rounded-xl">
                  <div className="relative h-48 w-full overflow-hidden bg-navy-3 sm:h-56">
                    <img
                      src={v.img}
                      alt={v.alt}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-2 via-navy-2/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Eyebrow>{v.k} Statement</Eyebrow>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <p className="font-display text-xl leading-relaxed text-ivory sm:text-2xl">"{v.t}"</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
  
          {/* Mission commitments (6) */}
          <div className="mt-16">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-wide-2 text-gold-2/70">// What the mission commits us to</p>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MISSION_POINTS.map((m, i) => (
                <Reveal key={m.k} delay={i * 70}>
                  <div className="plate plate-hover flex h-full flex-col rounded-lg p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-2/40 font-mono text-[10px] text-gold-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-display text-lg leading-snug text-ivory">{m.k}</p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{m.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
  
          {/* Operating standards (6) */}
          <div className="mt-20">
            <Heading eyebrow="Operating standards" title={<>How the consultancy holds itself.</>} />
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-gold-2/15 bg-gold-2/10 sm:grid-cols-2 lg:grid-cols-3">
              {STANDARDS.map((s, i) => (
                <Reveal key={s.k} delay={(i % 3) * 80}>
                  <div className="group flex h-full items-start gap-4 bg-navy-2/70 p-6 transition hover:bg-navy-3/60">
                    <img
                      src={s.img}
                      alt={s.k}
                      className="h-14 w-14 shrink-0 rounded-md object-cover border border-gold-2/30 shadow-md transition group-hover:border-gold-2 group-hover:scale-105"
                    />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">0{i + 1}</p>
                      <h3 className="font-display text-lg text-ivory">{s.k}</h3>
                      <p className="mt-1 text-sm text-stone">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
  
          {/* Frequently asked questions */}
          <div className="mt-20">
            <Heading eyebrow="Frequently asked" title={<>Questions we are<br />asked before a file opens.</>} />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {FAQ.map((f, i) => (
                <Reveal key={f.q} delay={i * 80}>
                  <div className="plate plate-hover flex h-full flex-col rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <Icon name="chevron-right" size={16} className="mt-1 shrink-0 text-gold-2" />
                      <h3 className="font-display text-xl leading-snug text-ivory">{f.q}</h3>
                    </div>
                    <p className="mt-4 border-t border-gold-2/10 pt-4 text-sm leading-relaxed text-stone">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
  
          {/* CTA */}
          <Reveal delay={100}>
            <div className="mt-16 corner-ticks relative overflow-hidden rounded-xl border border-gold-2/25 bg-gradient-to-br from-navy-3 to-ink p-10 text-center sm:p-14">
              <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-40" />
              <div className="relative">
                <Icon name="seal" size={40} className="mx-auto text-gold-2" />
                <h3 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight text-ivory sm:text-4xl">
                  When the record matters, <span className="italic text-gold-gradient">choose the consultancy that reads it.</span>
                </h3>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link to="/contact" className="gold-btn sheen-host flex items-center gap-2 rounded-sm px-7 py-3.5 text-[12px] uppercase">
                    Open a Case File <Icon name="arrow" size={16} />
                  </Link>
                  <a href={waLink()} target="_blank" rel="noreferrer" className="ghost-btn flex items-center gap-2 rounded-sm px-7 py-3.5 text-[12px] uppercase">
                    <Icon name="whatsapp" size={16} /> WhatsApp CAC
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
