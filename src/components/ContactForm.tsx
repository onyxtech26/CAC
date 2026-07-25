import { useMemo, useState } from "react";
import { Icon } from "./Icon";
import { CONTACT, SERVICE_OPTIONS, waLink } from "../data";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: SERVICE_OPTIONS[0], message: "" });
  const trackId = useMemo(() => "CAC-2026-" + String(Math.floor(1000 + Math.random() * 9000)), []);

  const set = (k: keyof typeof form) => (e: any) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const body = new FormData();
    body.append("name", form.name);
    body.append("email", form.email);
    body.append("phone", form.phone);
    body.append("service", form.service);
    body.append("message", form.message);
    body.append("_subject", `CAC Inquiry ${trackId} — ${form.service}`);
    body.append("_captcha", "false");
    body.append("_template", "table");
    body.append("tracking_id", trackId);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, { method: "POST", body });
      if (!res.ok) throw new Error("net");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const waFollow = waLink(
    `Hello CAC, my case reference is ${trackId}. Name: ${form.name}. Service: ${form.service}. Details: ${form.message}`
  );
  const mailFollow = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`CAC Inquiry ${trackId}`)}&body=${encodeURIComponent(
    `Case ref: ${trackId}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
  )}`;

  if (status === "sent") {
    return (
      <div className="corner-ticks relative overflow-hidden rounded-lg border border-gold-2/30 bg-navy-2/60 p-7">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
            <Icon name="check" size={22} />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wide-2 text-emerald-300">// Case file opened</p>
            <h4 className="mt-1 font-display text-2xl text-ivory">Inquiry received, {form.name.split(" ")[0] || "counsel"}.</h4>
            <p className="mt-2 text-sm text-ivory/70">Your confidential tracking reference is</p>
            <p className="mt-1 inline-block rounded border border-gold-2/30 bg-ink/60 px-3 py-1 font-mono text-sm text-gold-2">{trackId}</p>
            <p className="mt-3 text-sm text-ivory/70">A senior forensic consultant will respond within one business day. For immediate attention, continue on WhatsApp with your reference pre-filled.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={waFollow} target="_blank" rel="noreferrer" className="gold-btn sheen-host flex items-center gap-2 rounded-sm px-5 py-2.5 text-[12px] uppercase">
                <Icon name="whatsapp" size={16} /> Continue on WhatsApp
              </a>
              <a href={mailFollow} className="ghost-btn flex items-center gap-2 rounded-sm px-5 py-2.5 text-[12px] uppercase">
                <Icon name="mail" size={16} /> Email follow-up
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`corner-ticks relative overflow-hidden rounded-lg border border-gold-2/20 bg-navy-2/50 ${compact ? "p-5" : "p-6 sm:p-8"}`}>
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-40" />
      <div className="relative grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input required value={form.name} onChange={set("name")} placeholder="As per NRIC / passport" className="inp" />
        </Field>
        <Field label="Email Address" required>
          <input required type="email" value={form.email} onChange={set("email")} placeholder="you@domain.com" className="inp" />
        </Field>
        <Field label="Phone Number" required>
          <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="+60 12-345 6789" className="inp" />
        </Field>
        <Field label="Service Required" required>
          <div className="relative">
            <select required value={form.service} onChange={set("service")} className="inp appearance-none pr-10">
              {SERVICE_OPTIONS.map((o) => <option key={o} value={o} className="bg-navy-2 text-ivory">{o}</option>)}
            </select>
            <Icon name="chevron-down" size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gold-2" />
          </div>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Brief Inquiry Details" required>
            <textarea required rows={4} value={form.message} onChange={set("message")} placeholder="Describe the property, parties involved, and what you need established…" className="inp resize-none" />
          </Field>
        </div>
      </div>

      <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-wide-2 text-mute">Ref · <span className="text-gold-2">{trackId}</span> · encrypted intake</p>
        <button disabled={status === "sending"} type="submit" className="gold-btn sheen-host flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] uppercase disabled:opacity-60">
          {status === "sending" ? (<><span className="h-3 w-3 animate-spin rounded-full border-2 border-navy/40 border-t-navy" /> Transmitting…</>) : (<>Submit Case Inquiry <Icon name="arrow" size={15} /></>)}
        </button>
      </div>

      {status === "error" && (
        <div className="relative mt-4 flex flex-wrap items-center justify-between gap-3 rounded border border-rose-400/30 bg-rose-400/5 p-3 text-sm text-rose-200">
          <span>Secure channel unavailable — please use the direct fallback below.</span>
          <a href={mailFollow} className="ghost-btn flex items-center gap-2 rounded-sm px-4 py-2 text-[11px] uppercase">
            <Icon name="mail" size={14} /> Open in email
          </a>
        </div>
      )}

      <style>{`.inp{width:100%;background:rgba(8,17,31,0.6);border:1px solid rgba(233,199,102,0.22);border-radius:2px;padding:0.7rem 0.9rem;color:#e7ecf3;font-size:0.9rem;outline:none;transition:border-color .25s, box-shadow .25s}.inp:focus{border-color:#e9c766;box-shadow:0 0 0 3px rgba(233,199,102,0.12)}.inp::placeholder{color:rgba(138,151,173,0.6)}`}</style>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">
        {label} {required && <span className="text-gold-2">*</span>}
      </span>
      {children}
    </label>
  );
}
