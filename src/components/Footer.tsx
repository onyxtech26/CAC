import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { LogoMark } from "./ui";
import { CONTACT, NAV, SERVICES, TAGLINES, waLink } from "../data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-2/15 bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/3 h-72 w-[44rem] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(201,138,4,0.35), transparent 70%)" }} />

      {/* Pre-footer CTA ribbon */}
      <div className="relative mx-auto max-w-[1320px] px-5 pt-16 lg:px-8">
        <div className="corner-ticks relative overflow-hidden rounded-lg border border-gold-2/20 bg-gradient-to-br from-navy-3/70 to-ink p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide-2 text-gold-2/80">// Ready when you are</p>
              <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-ivory sm:text-4xl">
                Every estate has a paper trail. <span className="italic text-gold-gradient">We know how to read it.</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" className="gold-btn sheen-host flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] uppercase">
                <Icon name="whatsapp" size={18} /> WhatsApp CAC
              </a>
              <Link to="/contact" className="ghost-btn flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] uppercase">
                Open a Case File <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <LogoMark size={50} />
            <div>
              <p className="font-display text-base font-bold leading-tight text-ivory">CONGLOMERATE APPRAISAL<br />CONSULTANCY</p>
              <p className="font-mono text-[9px] uppercase tracking-wide-2 text-gold-2/70">Property Forensic Consultation</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
            An elite Malaysian property intelligence and forensic firm converting registry records, colonial grants and probate archives into court-ready documentary evidence.
          </p>
          <p className="mt-5 font-display text-lg italic text-gold-gradient">"{TAGLINES[1]}"</p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { n: "linkedin", href: "#" },
              { n: "tiktok", href: "#" },
              { n: "whatsapp", href: waLink() },
              { n: "mail", href: `mailto:${CONTACT.email}` },
            ].map((s) => (
              <a
                key={s.n}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold-2/25 text-gold-2/80 transition hover:border-gold-2 hover:bg-gold-2/10 hover:text-gold-2"
              >
                <Icon name={s.n} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-wide-2 text-gold-2/70">Navigate</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="text-ivory/70 transition hover:text-gold-2">Home</Link></li>
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-ivory/70 transition hover:text-gold-2">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-wide-2 text-gold-2/70">Core Disciplines</p>
          <ul className="mt-5 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-1">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`} className="group flex items-center gap-2 text-ivory/70 transition hover:text-gold-2">
                  <span className="font-mono text-[10px] text-gold-2/50">{s.no}</span>
                  <span className="truncate">{s.title}</span>
                </Link>
              </li>
            ))}
            <li><Link to="/services" className="text-gold-2/90 hover:text-gold-2">+ all 12 services →</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-wide-2 text-gold-2/70">Headquarters</p>
          <ul className="mt-5 space-y-4 text-sm text-ivory/70">
            <li className="flex gap-3">
              <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-gold-2" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-gold-2" />
              <a href={`tel:+${CONTACT.phoneRaw}`} className="hover:text-gold-2">{CONTACT.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-gold-2" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-gold-2">{CONTACT.email}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-gold-2" />
              <span>Mon – Fri · 09:00 – 18:00<br />Sat · 09:00 – 13:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-gold-2/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-mute sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Conglomerate Appraisal Consultancy (CAC). Est. 2009 · Inc. 2020. All rights reserved.</p>
          <p className="flex items-center gap-2 font-mono uppercase tracking-wide-2">
            Powered by
            <a href={CONTACT.techPartnerUrl} target="_blank" rel="noreferrer" className="text-gold-2 hover:underline">{CONTACT.techPartner}</a>
            <span className="text-gold-2/40">·</span>
            <span>{CONTACT.site}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
