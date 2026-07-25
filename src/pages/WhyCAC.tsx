import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Eyebrow, Heading, Reveal, Tag } from "../components/ui";
import { MISSION, VISION, WHY_PRINCIPLES, waLink } from "../data";

const PRINCIPLE_IMAGES = [
  { img: "/assets/illustration-forensic.jpg", alt: "Documentary Forensic Investigation Evidence" },
  { img: "/assets/case-gavel-bRvLoHQ5.jpg", alt: "Independent Court Grade Legal Standards" },
  { img: "/assets/illustration-estate.jpg", alt: "Confidential Estate & Asset Handling" },
  { img: "/assets/cac-building.jpg", alt: "End-to-End Registry & Title Support" },
];

const STANDARDS = [
  { k: "Experienced Professionals", img: "/assets/mohaan-profile.png", d: "Experts with decades of combined experience." },
  { k: "Confidential & Secure", img: "/assets/icon-legal.jpg", d: "Your information is always protected." },
  { k: "Evidence Based Results", img: "/assets/service-forensic-title.jpg", d: "We provide facts, not assumptions." },
  { k: "Legal & Industry Network", img: "/assets/case-gavel-bRvLoHQ5.jpg", d: "Strong network of legal and property experts." },
  { k: "End-to-End Support", img: "/assets/service-ill-forensic.jpg", d: "We are with you from start to finish." },
  { k: "Global Standards & Ethics", img: "/assets/cac-building.jpg", d: "We follow international standards and ethics." },
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
          <Heading eyebrow="Why CAC" title={<>Why clients trust<br /><span className="italic text-gold-gradient">CAC</span> with the record.</>} />
          <Reveal delay={120}>
            <p className="mt-6 text-ivory/70">
              When ownership must be proven — not merely asserted — courts, counsel and families call CAC. Four principles govern every engagement we accept.
            </p>
          </Reveal>
        </div>

        {/* 4 Core principles */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_PRINCIPLES.map((p, i) => (
            <Reveal key={p.k} delay={i * 90}>
              <div className="plate plate-hover corner-ticks group relative flex h-full flex-col overflow-hidden rounded-lg">
                <div className="relative h-44 w-full overflow-hidden bg-navy-3">
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
                  <h3 className="font-display text-2xl leading-snug text-ivory">{p.k}</h3>
                  <div className="mt-3 h-px w-10 hairline" />
                  <p className="mt-4 text-sm leading-relaxed text-ivory/65">{p.d}</p>
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
            <div className="mt-10 overflow-hidden rounded-xl border border-gold-2/20">
              <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-navy-2/70 font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">
                <div className="p-4">Dimension</div>
                <div className="border-l border-gold-2/10 p-4 text-mute">Conventional</div>
                <div className="border-l border-gold-2/10 p-4 text-gold-2">CAC Forensic</div>
              </div>
              {COMPARE.map((c, i) => (
                <div key={c.row} className={`grid grid-cols-[1.2fr_1fr_1fr] text-sm ${i % 2 ? "bg-navy-2/30" : "bg-ink/30"}`}>
                  <div className="p-4 font-display text-ivory">{c.row}</div>
                  <div className="flex items-start gap-2 border-l border-gold-2/10 p-4 text-ivory/55">
                    <Icon name="close" size={14} className="mt-0.5 shrink-0 text-rose-300/80" /> {c.them}
                  </div>
                  <div className="flex items-start gap-2 border-l border-gold-2/10 p-4 text-ivory/90">
                    <Icon name="check" size={14} className="mt-0.5 shrink-0 text-gold-2" /> {c.us}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Vision + Mission */}
        <div className="mt-20 grid gap-5 lg:grid-cols-2">
          {[
            { k: "Vision", t: VISION, img: "/assets/service-ill-forensic.jpg", alt: "CAC Vision" },
            { k: "Mission", t: MISSION, img: "/assets/service-family-estate.jpg", alt: "CAC Mission" },
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

        {/* Operating standards (6) */}
        <div className="mt-20">
          <Heading eyebrow="Operating standards" title={<>How the firm holds itself.</>} />
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
                    <h4 className="font-display text-lg text-ivory">{s.k}</h4>
                    <p className="mt-1 text-sm text-ivory/60">{s.d}</p>
                  </div>
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
                When the record matters, <span className="italic text-gold-gradient">choose the firm that reads it.</span>
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
  );
}
