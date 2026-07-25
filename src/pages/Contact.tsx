import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Eyebrow, Heading, Reveal } from "../components/ui";
import ContactForm from "../components/ContactForm";
import { CONTACT, waLink } from "../data";

export default function Contact() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-radial-navy" />

      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide-2 text-mute">
          <Link to="/" className="hover:text-gold-2">Home</Link>
          <Icon name="chevron-right" size={12} className="text-gold-2/60" />
          <span className="text-gold-2">Contact</span>
        </nav>

        <div className="mt-6 max-w-3xl">
          <Heading eyebrow="Open a confidential file" title={<>Speak with <span className="italic text-gold-gradient">CAC.</span></>} />
          <Reveal delay={120}>
            <p className="mt-6 text-ivory/70">
              Every inquiry is handled by a senior forensic consultant under strict confidentiality. Submit the intake below or reach us directly — we respond within one business day.
            </p>
          </Reveal>
        </div>

        {/* Consultant banner */}
        <Reveal delay={120}>
          <div className="mt-12 corner-ticks relative overflow-hidden rounded-xl border border-gold-2/25 bg-gradient-to-br from-navy-3 to-ink p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(201,138,4,0.5), transparent 70%)" }} />
            <div className="relative grid items-center gap-7 lg:grid-cols-[auto_1fr_auto]">
              <div className="relative">
                <img src="/assets/mohaan-profile.png" alt={CONTACT.consultant} className="h-24 w-24 rounded-full object-cover border border-gold-2/50 shrink-0" />
                <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full border border-gold-2 bg-navy text-gold-2">
                  <Icon name="seal" size={16} />
                </span>
              </div>
              <div>
                <Eyebrow>Senior Forensic Consultant</Eyebrow>
                <h3 className="mt-2 font-display text-3xl text-ivory sm:text-4xl">{CONTACT.consultant}</h3>
                <p className="mt-2 max-w-xl text-ivory/70">
                  Lead investigator across property forensic, estate recovery and fraud-exposure engagements. {CONTACT.consultant} personally briefs every new case and remains the point of contact through to resolution.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:flex-col lg:items-stretch">
                <a href={waLink()} target="_blank" rel="noreferrer" className="gold-btn sheen-host flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-[12px] uppercase">
                  <Icon name="whatsapp" size={16} /> WhatsApp {CONTACT.phoneDisplay}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="ghost-btn flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-[12px] uppercase">
                  <Icon name="mail" size={16} /> Email CAC
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* left: details */}
          <div className="space-y-8 lg:col-span-5">
            <Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { g: "phone", k: "Phone / WhatsApp", v: CONTACT.phoneDisplay, href: `tel:+${CONTACT.phoneRaw}` },
                  { g: "mail", k: "Email", v: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { g: "pin", k: "Headquarters", v: CONTACT.address },
                  { g: "clock", k: "Office Hours", v: "Mon–Fri 09:00–18:00 · Sat 09:00–13:00" },
                ].map((r) => (
                  <div key={r.k} className="plate rounded-md p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-2/30 text-gold-2"><Icon name={r.g} size={18} /></span>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">{r.k}</p>
                    {r.href ? <a href={r.href} target="_blank" rel="noreferrer" className="mt-1 block break-words text-sm text-ivory/85 hover:text-gold-2">{r.v}</a> : <p className="mt-1 text-sm text-ivory/85">{r.v}</p>}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <Eyebrow>Secure intake</Eyebrow>
              <h3 className="mt-3 font-display text-2xl text-ivory sm:text-3xl">Send us a message</h3>
              <p className="mt-2 text-sm text-ivory/65">All fields encrypted in transit. A unique tracking reference (CAC-2026-XXXX) is issued on submission.</p>
              <div className="mt-6"><ContactForm /></div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
