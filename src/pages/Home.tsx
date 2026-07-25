import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Counter, Eyebrow, Heading, Marquee, Reveal, Tag } from "../components/ui";
import ContactForm from "../components/ContactForm";
import { CASE_STUDIES, CONTACT, HERO_STATS, PRINCIPLES_HOME, PROCESS, SERVICES, TAGLINES, TESTIMONIALS, TRACK_RECORD, waLink } from "../data";

const TRUST = [
  { k: "Independent Investigations", g: "pin" },
  { k: "Evidence Based Findings", g: "house-roof" },
  { k: "Confidential & Secure", g: "lock" },
  { k: "Professional Support", g: "shield-alert" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["Property Forensic Investigation", "Family Estate Recovery", "Title & Registry Tracing", "Fraud Exposure", "Subsale Coordination", "Asset Tracing", "State / Bumi Consent", "Court-Ready Evidence"]} />
      <FeaturedDisciplines />
      <FirmSummary />
      <ProcessTeaser />
      <TrackRecord />
      <CaseStudies />
      <Testimonials />
      <ContactTeaser />
    </>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-radial-gold" />
      <div className="pointer-events-none absolute inset-0 bg-radial-navy" />
      <div className="pointer-events-none absolute inset-0 noise opacity-40" />



      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>Welcome to CAC · Est. 2009</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[3.2rem] leading-[0.98] text-ivory sm:text-7xl lg:text-[5.2rem]">
              Turning Intelligence
              <span className="block italic text-gold-gradient">Into Evidence</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
              Premier property forensic consultants specializing in uncovering ownership, resolving disputes, and recovering valuable assets with precision, integrity and confidentiality.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {TRUST.map((t) => (
                <span key={t.k} className="flex items-center gap-2 text-sm text-ivory/75">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-gold-2/30 text-gold-2">
                    <Icon name={t.g} size={15} />
                  </span>
                  {t.k}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="gold-btn sheen-host flex items-center gap-2 rounded-sm px-7 py-3.5 text-[12px] uppercase">
                Start Investigation <Icon name="arrow" size={16} />
              </Link>
              <Link to="/services" className="ghost-btn flex items-center gap-2 rounded-sm px-7 py-3.5 text-[12px] uppercase">
                View Our Services
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Hero visual */}
        <div className="relative lg:col-span-6">
          <Reveal delay={120} className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-full opacity-60 blur-3xl" style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,138,4,0.35), transparent 65%)" }} />
            <div className="relative anim-float-slow">
              <img
                src="/assets/cac-building-logo.jpg"
                alt="CAC Headquarters Building with Company Logo"
                className="w-full rounded-lg border border-gold-2/20 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)]"
              />
              {/* corner ticks overlay */}
              <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l border-t border-gold-2/70" />
              <span className="pointer-events-none absolute right-3 bottom-3 h-6 w-6 border-r border-b border-gold-2/70" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stat bar */}
      <div className="relative mx-auto mt-16 max-w-4xl px-5 lg:px-8">
        <Reveal>
          <div className="corner-ticks relative overflow-hidden rounded-[2.5rem] border border-gold-2/25 bg-gradient-to-br from-navy-3/90 via-navy-2/95 to-ink p-6 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(233,199,102,0.4), transparent 70%)" }} />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, rgba(201,138,4,0.3), transparent 70%)" }} />

            <div className="grid grid-cols-1 divide-y divide-gold-2/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {HERO_STATS.map((s, i) => (
                <div key={i} className="group relative flex flex-col items-center justify-center py-6 px-4 text-center sm:py-8">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-gold-2/30 bg-ink/60 text-gold-2 shadow-lg transition duration-300 group-hover:scale-105 group-hover:border-gold-2">
                    <Icon name={i === 0 ? "clock" : "doc-seal"} size={28} className="text-gold-2" />
                  </div>
                  <p className="mt-6 font-display text-5xl font-bold tracking-tight text-gold-gradient sm:text-6xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-2/90">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== FEATURED DISCIPLINES ============== */
function FeaturedDisciplines() {
  const feat = SERVICES.slice(0, 3);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Heading eyebrow="What we uncover" title={<>Three disciplines.<br />One unbroken chain of evidence.</>} />
          <Reveal delay={120}>
            <p className="max-w-md text-sm text-ivory/65">
              Every engagement draws on a wider catalogue of <Link to="/services" className="text-gold-2 underline decoration-gold-2/40 underline-offset-4">twelve forensic capabilities</Link> — these three anchor most estate and ownership recoveries.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {feat.map((s, i) => (
            <Reveal key={s.id} delay={i * 110}>
              <Link to={`/services/${s.id}`} className="plate plate-hover group relative block h-full overflow-hidden rounded-lg">
                <div className="relative h-48 w-full overflow-hidden bg-navy-3">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-2 via-navy-2/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Tag>{s.accent}</Tag>
                  </div>
                  <span className="absolute top-3 right-3 font-mono text-[10px] font-semibold text-gold-2/90 bg-navy/80 px-2.5 py-1 rounded border border-gold-2/30 backdrop-blur">
                    {s.no} / 12
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl leading-snug text-ivory">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{s.short}</p>
                  <ul className="mt-5 space-y-2 border-t border-gold-2/10 pt-4">
                    {s.deliverables.slice(0, 3).map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-ivory/60">
                        <Icon name="check" size={13} className="mt-0.5 shrink-0 text-gold-2" /> {d}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide-2 text-gold-2">
                    Open dossier <Icon name="arrow" size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== FIRM SUMMARY ============== */
function FirmSummary() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-navy opacity-70" />
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-lg border border-gold-2/15" />
            <img src="/assets/cac-building-logo.jpg" alt="CAC headquarters building with illuminated logo" className="relative w-full rounded-lg border border-gold-2/20 shadow-2xl" />
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded border border-gold-2/30 bg-navy-2/90 px-4 py-3 backdrop-blur">
              <Icon name="seal" size={22} className="text-gold-2" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wide-2 text-gold-2/70">Incorporated</p>
                <p className="font-display text-sm text-ivory">2020 · operating since 2009</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Heading eyebrow="The firm" title={<>Forensic rigour,<br />delivered with discretion.</>} italic="Uncover The Truth. Protect Your Legacy." />
          <Reveal delay={120}>
            <p className="mt-6 text-ivory/70">
              Conglomerate Appraisal Consultancy (CAC) is an elite Malaysian property intelligence and forensic firm. We transform historical land registry records, colonial grant books, cadastral maps and court probate archives into court-ready documentary evidence — helping family estates, beneficiaries, legal counsel and property investors resolve inheritance disputes, trace lost assets, expose fraudulent transfers and execute subsale transactions.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PRINCIPLES_HOME.map((p, i) => (
              <Reveal key={p.k} delay={i * 100}>
                <div className="plate rounded-md p-4">
                  <span className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2">0{i + 1}</span>
                  <p className="mt-1 font-display text-lg text-ivory">{p.k}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ivory/60">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220}>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wide-2 text-gold-2">
              Read more about CAC <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============== PROCESS TEASER (5 steps) ============== */
function ProcessTeaser() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <Heading eyebrow="Methodology · abridged" title={<>A standardized chain of<br />investigation, end to end.</>} />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {PROCESS.slice(0, 5).map((p, i) => (
            <Reveal key={p.no} delay={i * 90}>
              <div className="plate plate-hover relative h-full overflow-hidden rounded-md p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-gold-gradient">{p.no}</span>
                  <Icon name={p.glyph} size={22} className="text-gold-2/70" />
                </div>
                <p className="mt-3 font-display text-lg leading-tight text-ivory">{p.title}</p>
                <p className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">{p.sub}</p>
                <p className="mt-3 text-xs leading-relaxed text-ivory/60">{p.details}</p>
                {i < 4 && <span className="absolute right-3 top-1/2 hidden text-gold-2/30 md:block"><Icon name="chevron-right" size={18} /></span>}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-lg border border-gold-2/20 bg-navy-2/50 p-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <Icon name="gavel" size={36} className="text-gold-2" />
              <p className="max-w-xl text-sm text-ivory/75">
                We deliver clear, credible and court-admissible reports that help you make <span className="text-gold-2">informed decisions</span> with confidence — across all 8 stages.
              </p>
            </div>
            <Link to="/process" className="gold-btn sheen-host flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] uppercase">
              How We Work <Icon name="arrow" size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== TRACK RECORD ============== */
function TrackRecord() {
  return (
    <section className="relative overflow-hidden border-y border-gold-2/10 bg-ink py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-40" />
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(201,138,4,0.45), transparent 70%)" }} />
      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Heading eyebrow="Verified track record" title={<>Closed engagements,<br />documented outcomes.</>} />
          <Reveal delay={100}>
            <p className="max-w-sm font-mono text-[11px] uppercase tracking-wide-2 text-mute">227+ cases completed · 30+ active · 17+ years on the record</p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-gold-2/15 bg-gold-2/10 sm:grid-cols-2 lg:grid-cols-3">
          {TRACK_RECORD.map((t, i) => (
            <Reveal key={t.code} delay={i * 70}>
              <div className="group relative h-full bg-navy-2/70 p-7 transition hover:bg-navy-3/70">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/60">{t.code}</span>
                  <Icon name="seal" size={18} className="text-gold-2/40 transition group-hover:text-gold-2" />
                </div>
                <p className="mt-4 font-display text-5xl text-gold-gradient">
                  <Counter to={t.count} suffix={t.suffix} />
                </p>
                <p className="mt-2 font-display text-lg text-ivory">{t.label}</p>
                <p className="mt-2 text-sm text-ivory/60">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== CASE STUDIES CAROUSEL ============== */
function CaseStudies() {
  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="flex items-end justify-between">
          <Heading eyebrow="Selected case files" title="Case Studies" />
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-gold-2/30 text-gold-2 transition hover:bg-gold-2/10">
              <Icon name="chevron-left" size={18} />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-gold-2/30 text-gold-2 transition hover:bg-gold-2/10">
              <Icon name="chevron-right" size={18} />
            </button>
          </div>
        </div>
        <div ref={ref} className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="snap-start">
              <article className="plate plate-hover group relative flex h-full w-[300px] flex-col overflow-hidden rounded-lg sm:w-[330px]">
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${c.tone}`}>
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-navy/25 to-navy/45" />
                  <div className="absolute inset-0 bg-grid-fine opacity-15 mix-blend-overlay" />
                  <span className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] tracking-wide-2 text-gold-2/80">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-gold-2/70" />
                  <span className="absolute left-3 top-3"><Tag>{c.tag}</Tag></span>
                  {c.meta && (
                    <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-wide-2 text-ivory/70">{c.meta}</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-2/30 text-gold-2"><Icon name={c.glyph} size={16} /></span>
                    <h3 className="font-display text-xl leading-tight text-ivory">{c.title}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-ivory/65">{c.body}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide-2 text-gold-2">
                    Read more <Icon name="arrow" size={14} className="transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-6 flex justify-center">
            <Link to="/contact" className="ghost-btn flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] uppercase">
              <Icon name="doc-seal" size={16} /> View All Case Studies <Icon name="arrow" size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== TESTIMONIALS ============== */
function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-50" />
      <div className="relative mx-auto max-w-[1100px] px-5 text-center lg:px-8">
        <Heading className="mx-auto" eyebrow="Client record" title="What Our Clients Say" />
        <Reveal>
          <div className="corner-ticks relative mt-10 overflow-hidden rounded-xl border border-gold-2/25 bg-navy-2/60 p-8 sm:p-12">
            <Icon name="quote" size={52} className="mx-auto text-gold-2/70" />
            <p className="mx-auto mt-6 max-w-3xl font-display text-2xl leading-snug text-ivory sm:text-3xl">"{t.quote}"</p>
            <p className="mt-6 font-mono text-[12px] uppercase tracking-wide-2 text-gold-2">— {t.who}</p>
            <p className="text-xs text-mute">{t.role}</p>
            <div className="mt-8 flex justify-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gold-2" : "w-2 bg-white/20 hover:bg-white/40"}`} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== CONTACT TEASER ============== */
function ContactTeaser() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Heading eyebrow="Open a case file" title={<>Speak with a senior<br />forensic consultant.</>} italic={TAGLINES[0]} />
          <Reveal delay={120}>
            <div className="mt-8 space-y-4">
              {[
                { g: "users", t: CONTACT.consultantRole, s: CONTACT.consultant },
                { g: "whatsapp", t: "WhatsApp", s: CONTACT.phoneDisplay, href: waLink() },
                { g: "mail", t: "Email", s: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { g: "pin", t: "Headquarters", s: CONTACT.address },
              ].map((r) => (
                <div key={r.t} className="flex items-start gap-4 rounded-md border border-gold-2/15 bg-navy-2/40 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-2/30 text-gold-2"><Icon name={r.g} size={18} /></span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wide-2 text-mute">{r.t}</p>
                    {r.href ? <a href={r.href} target="_blank" rel="noreferrer" className="text-ivory hover:text-gold-2">{r.s}</a> : <p className="text-ivory/85">{r.s}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={120}><ContactForm compact /></Reveal>
        </div>
      </div>
    </section>
  );
}
