import { useMemo, useRef, useState } from "react";
import { Icon } from "./Icon";

const rm = (n: number) => "RM " + Math.round(n).toLocaleString("en-MY");

const TABS = [
  { id: "scan", label: "Property Title Scanner", glyph: "magnifier-house" },
  { id: "estate", label: "Inheritance Flow", glyph: "family" },
  { id: "roi", label: "Renovation ROI", glyph: "building-uplift" },
  { id: "portal", label: "Case Tracking", glyph: "doc-seal" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function IntelligenceHub() {
  const [tab, setTab] = useState<TabId>("scan");
  return (
    <div className="plate corner-ticks relative overflow-hidden rounded-xl">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-50" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(201,138,4,0.5), transparent 70%)" }} />

      {/* header */}
      <div className="relative flex flex-col gap-4 border-b border-gold-2/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-full border border-gold-2/40 text-gold-2 pulse-ring">
            <Icon name="eye" size={18} />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">Intelligence Hub · Illustrative Demo</p>
            <h4 className="font-display text-xl text-ivory">Live Forensic Console</h4>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide-2 text-mute">
          <span className="h-2 w-2 rounded-full bg-emerald-400 blink" /> Secure session · read-only simulator
        </div>
      </div>

      {/* tabs */}
      <div className="relative flex flex-wrap gap-1 border-b border-gold-2/10 px-3 sm:px-5">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 border-b-2 px-3 py-3 font-mono text-[11px] uppercase tracking-wide-2 transition sm:px-4 ${
              tab === t.id ? "border-gold-2 text-gold-2" : "border-transparent text-mute hover:text-ivory/80"
            }`}
          >
            <Icon name={t.glyph} size={15} /> {t.label}
          </button>
        ))}
      </div>

      <div className="relative p-5 sm:p-7">
        {tab === "scan" && <Scanner />}
        {tab === "estate" && <Estate />}
        {tab === "roi" && <ROI />}
        {tab === "portal" && <Portal />}
      </div>
    </div>
  );
}

/* ---------------- Tab 1: Title Scanner ---------------- */
function Scanner() {
  const [q, setQ] = useState("Lot 12345");
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const run = () => {
    setRunning(true); setDone(false);
    setTimeout(() => { setRunning(false); setDone(true); }, 1400);
  };
  const chronology = [
    { y: "1921", t: "Pioneer grant issued — Crown allotment to original settler." },
    { y: "1958", t: "Inheritance transmission to first-generation heirs." },
    { y: "1987", t: "Subdivision & partial alienation for township road reserve." },
    { y: "2014", t: "Private caveat lodged — ownership currently under dispute." },
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <label className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">Title No / Land Code</label>
        <div className="mt-2 flex overflow-hidden rounded-sm border border-gold-2/30 bg-ink/60 focus-within:border-gold-2">
          <span className="grid place-items-center px-3 text-gold-2"><Icon name="magnifier-house" size={18} /></span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="e.g. Lot 12345"
            className="w-full bg-transparent py-3 pr-3 font-mono text-sm text-ivory outline-none placeholder:text-mute/60"
          />
        </div>
        <button onClick={run} disabled={running} className="gold-btn sheen-host mt-4 flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-[12px] uppercase disabled:opacity-60">
          {running ? (<><span className="h-3 w-3 animate-spin rounded-full border-2 border-navy/40 border-t-navy" /> Scanning registry…</>) : (<>Run Forensic Scan <Icon name="arrow" size={15} /></>)}
        </button>
        <p className="mt-3 font-mono text-[10px] leading-relaxed text-mute">
          // Educational simulator. Real engagements query the Department of Lands & Mines (JKPTG), state land offices and High Court probate registries.
        </p>
      </div>

      <div className="lg:col-span-3">
        <div className="relative overflow-hidden rounded-md border border-gold-2/15 bg-ink/50 p-5">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-gold-2/20 to-transparent scanline" style={{ animationPlayState: running ? "running" : "paused", opacity: running ? 1 : 0 }} />
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wide-2 text-mute">
            <span>registry.scan.output</span>
            <span className={done ? "text-emerald-300" : "text-mute"}>{done ? "● verified" : running ? "● querying" : "○ idle"}</span>
          </div>

          {!done && !running && (
            <div className="mt-8 grid place-items-center py-10 text-center text-mute">
              <Icon name="doc-seal" size={42} className="text-gold-2/40" />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wide-2">Awaiting query — enter a title code to begin</p>
            </div>
          )}
          {running && (
            <div className="mt-6 space-y-2">
              {["Opening land office register…", "Cross-referencing colonial grant books…", "Tracing chain of ownership…", "Checking caveat & charge registry…"].map((t, i) => (
                <div key={i} className="flex items-center gap-3 font-mono text-[11px] text-ivory/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-2 blink" style={{ animationDelay: `${i * 180}ms` }} /> {t}
                </div>
              ))}
            </div>
          )}
          {done && (
            <div className="mt-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Field k="District" v="Johor Bahru" />
                <Field k="Lot / Code" v={q || "Lot 12345"} />
                <Field k="Original Owner" v="Bin Ahmad (Pioneer, 1921)" />
                <Field k="Ownership Status" v="Under dispute / private caveat" danger />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">Historical Chronology</p>
                <ol className="mt-3 space-y-3 border-l border-gold-2/20 pl-4">
                  {chronology.map((c, i) => (
                    <li key={i} className="relative reveal in" style={{ transitionDelay: `${i * 120}ms` }}>
                      <span className="absolute -left-[22px] top-1 grid h-3 w-3 place-items-center rounded-full bg-gold-2" />
                      <p className="font-mono text-[11px] text-gold-2">{c.y}</p>
                      <p className="text-sm text-ivory/75">{c.t}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ k, v, danger }: { k: string; v: string; danger?: boolean }) {
  return (
    <div className="rounded border border-gold-2/15 bg-navy-2/40 px-3 py-2.5">
      <p className="font-mono text-[9px] uppercase tracking-wide-2 text-mute">{k}</p>
      <p className={`mt-1 text-sm ${danger ? "text-rose-300" : "text-ivory"}`}>{v}</p>
    </div>
  );
}

/* ---------------- Tab 2: Estate flow ---------------- */
function Estate() {
  const [value, setValue] = useState(2_500_000);
  const [heirs, setHeirs] = useState(4);
  const perHeir = value / heirs;
  const uplift = value * 0.25;
  const pctVal = ((value - 500_000) / (10_000_000 - 500_000)) * 100;
  const pctHeirs = ((heirs - 2) / (8 - 2)) * 100;
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Slider label="Total Estate Value" min={500_000} max={10_000_000} step={50_000} value={value} onChange={setValue} fmt={rm} pct={pctVal} />
        <Slider label="Number of Beneficiaries" min={2} max={8} step={1} value={heirs} onChange={setHeirs} fmt={(n) => `${n} heirs`} pct={pctHeirs} />
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded border border-gold-2/15 bg-navy-2/40 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wide-2 text-mute">Per-heir share</p>
            <p className="mt-1 font-display text-2xl text-gold-gradient">{rm(perHeir)}</p>
          </div>
          <div className="rounded border border-gold-2/15 bg-navy-2/40 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wide-2 text-mute">Potential uplift</p>
            <p className="mt-1 font-display text-2xl text-emerald-300">+25% · {rm(uplift)}</p>
          </div>
        </div>
        <p className="font-mono text-[10px] leading-relaxed text-mute">// Illustrative equal-distribution model. Actual shares follow the will, Faraid, or intestacy law as advised by counsel.</p>
      </div>

      <div className="relative rounded-md border border-gold-2/15 bg-ink/40 p-5">
        <p className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">Inheritance Flow Simulation</p>
        <div className="mt-5 flex flex-col items-center">
          <div className="rounded-full border border-gold-2/40 bg-navy-2 px-5 py-3 text-center">
            <p className="font-mono text-[9px] uppercase tracking-wide-2 text-mute">Deceased Pioneer Owner</p>
            <p className="font-display text-lg text-ivory">Asset Pool · {rm(value)}</p>
          </div>
          <svg viewBox="0 0 200 40" className="my-2 h-10 w-full max-w-[260px]">
            <line x1="100" y1="0" x2="100" y2="14" stroke="#ca8a04" strokeWidth="1" />
            <line x1="14" y1="14" x2="186" y2="14" stroke="#ca8a04" strokeWidth="1" />
            {Array.from({ length: heirs }).map((_, i) => {
              const x = 14 + (172 * i) / Math.max(1, heirs - 1);
              return <line key={i} x1={x} y1="14" x2={x} y2="40" stroke="#ca8a04" strokeWidth="1" />;
            })}
          </svg>
          <div className="grid w-full gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(heirs, 4)}, minmax(0,1fr))` }}>
            {Array.from({ length: heirs }).map((_, i) => (
              <div key={i} className="rounded border border-gold-2/20 bg-navy-2/60 px-2 py-2 text-center">
                <p className="font-mono text-[9px] uppercase tracking-wide-2 text-mute">Heir {i + 1}</p>
                <p className="font-display text-sm text-gold-2">{rm(perHeir)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({ label, min, max, step, value, onChange, fmt, pct }: {
  label: string; min: number; max: number; step: number; value: number; onChange: (n: number) => void; fmt: (n: number) => string; pct: number;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">{label}</label>
        <span className="font-display text-lg text-ivory">{fmt(value)}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="gold-range mt-3 w-full"
        style={{ ["--val" as any]: `${pct}%` }}
      />
    </div>
  );
}

/* ---------------- Tab 3: ROI ---------------- */
function ROI() {
  const [cur, setCur] = useState(800_000);
  const [budget, setBudget] = useState(120_000);
  const ratio = budget / cur; // 0..~0.6
  const upliftPct = useMemo(() => Math.min(35, Math.max(22, 22 + ratio * 40)), [ratio]);
  const newVal = cur * (1 + upliftPct / 100);
  const profit = newVal - cur - budget;
  const roiPct = (profit / budget) * 100;
  const pctCur = ((cur - 300_000) / (3_000_000 - 300_000)) * 100;
  const pctBud = ((budget - 30_000) / (500_000 - 30_000)) * 100;
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Slider label="Current Value (As-Is)" min={300_000} max={3_000_000} step={10_000} value={cur} onChange={setCur} fmt={rm} pct={pctCur} />
        <Slider label="Renovation Budget" min={30_000} max={500_000} step={5_000} value={budget} onChange={setBudget} fmt={rm} pct={pctBud} />
        <p className="font-mono text-[10px] leading-relaxed text-mute">// Value-uplift model derived from CAC's renovation consultancy benchmarks. Not a guarantee of sale price.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Stat k="Est. Value Uplift" v={`${upliftPct.toFixed(1)}%`} tone="gold" />
        <Stat k="New Market Value" v={rm(newVal)} tone="ivory" />
        <Stat k="Net Profit" v={rm(profit)} tone="emerald" />
        <Stat k="Renovation ROI" v={`${roiPct.toFixed(0)}%`} tone="gold" />
        <div className="col-span-2 mt-1 overflow-hidden rounded border border-gold-2/15 bg-ink/40 p-4">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wide-2 text-mute">
            <span>as-is</span><span>post-renovation</span>
          </div>
          <div className="mt-2 flex items-end gap-2">
            <div className="flex-1 rounded-t bg-gradient-to-t from-navy-4 to-navy-3" style={{ height: 70 }}>
              <div className="px-2 pt-1 font-mono text-[10px] text-ivory/70">{rm(cur)}</div>
            </div>
            <div className="flex-1 rounded-t bg-gradient-to-t from-gold-3 via-gold to-gold-2" style={{ height: 70 + upliftPct * 3 }}>
              <div className="px-2 pt-1 font-mono text-[10px] text-navy">{rm(newVal)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ k, v, tone }: { k: string; v: string; tone: "gold" | "ivory" | "emerald" }) {
  const color = tone === "gold" ? "text-gold-gradient" : tone === "emerald" ? "text-emerald-300" : "text-ivory";
  return (
    <div className="rounded border border-gold-2/15 bg-navy-2/40 p-4">
      <p className="font-mono text-[10px] uppercase tracking-wide-2 text-mute">{k}</p>
      <p className={`mt-1 font-display text-2xl ${color}`}>{v}</p>
    </div>
  );
}

/* ---------------- Tab 4: Portal ---------------- */
function Portal() {
  const [drag, setDrag] = useState(false);
  const [files, setFiles] = useState<string[]>(["title_deed_1958.pdf", "grant_colonial.tiff", "family_tree_v3.png"]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [kw, setKw] = useState("");
  const hits = useMemo(() => {
    if (!kw.trim()) return [];
    const pool = [
      "Lot 12345 · Johor Bahru · private caveat",
      "Grant No. 4471 · Crown allotment 1921",
      "Probate File HC-2019-0881 · High Court Johor",
      "Transmission 1958 · Bin Ahmad → heirs",
      "Subdivision plan JPBD/1987/221",
    ];
    return pool.filter((p) => p.toLowerCase().includes(kw.toLowerCase())).slice(0, 4);
  }, [kw]);

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3 space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-gold-2/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wide-2 text-gold-2">Step 04 // Forensic Analysis</span>
          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide-2 text-mute">2 attorneys appointed</span>
          <span className="rounded-full border border-emerald-400/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wide-2 text-emerald-300">On track</span>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
            <div key={s} className="flex flex-1 flex-col items-center gap-1">
              <div className={`h-1.5 w-full rounded-full ${s <= 4 ? "bg-gradient-to-r from-gold-3 to-gold-2" : "bg-white/10"}`} />
              <span className={`font-mono text-[9px] ${s <= 4 ? "text-gold-2" : "text-mute"}`}>{String(s).padStart(2, "0")}</span>
            </div>
          ))}
        </div>

        <div
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault(); setDrag(false);
            const incoming = Array.from(e.dataTransfer.files).map((f) => f.name);
            if (incoming.length) setFiles((p) => [...p, ...incoming]);
          }}
          onClick={() => inputRef.current?.click()}
          className={`cursor-pointer rounded-md border-2 border-dashed p-6 text-center transition ${drag ? "border-gold-2 bg-gold-2/5" : "border-gold-2/25 bg-ink/40 hover:border-gold-2/50"}`}
        >
          <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => {
            const incoming = Array.from(e.target.files || []).map((f) => f.name);
            if (incoming.length) setFiles((p) => [...p, ...incoming]);
          }} />
          <Icon name="doc-seal" size={28} className="mx-auto text-gold-2/70" />
          <p className="mt-2 font-mono text-[11px] uppercase tracking-wide-2 text-ivory/80">Drop evidence files or click to upload</p>
          <p className="mt-1 text-xs text-mute">Deeds · titles · wills · survey plans · probate scans</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {files.map((f, i) => (
            <span key={i} className="flex items-center gap-2 rounded-full border border-gold-2/20 bg-navy-2/60 px-3 py-1 font-mono text-[10px] text-ivory/80">
              <Icon name="doc-pen" size={12} className="text-gold-2" /> {f}
              <button onClick={(e) => { e.stopPropagation(); setFiles((p) => p.filter((_, idx) => idx !== i)); }} className="text-mute hover:text-rose-300">×</button>
            </span>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <label className="font-mono text-[10px] uppercase tracking-wide-2 text-gold-2/70">Title & Registry Keyword Search</label>
        <div className="mt-2 flex overflow-hidden rounded-sm border border-gold-2/30 bg-ink/60 focus-within:border-gold-2">
          <span className="grid place-items-center px-3 text-gold-2"><Icon name="magnifier-fingerprint" size={16} /></span>
          <input value={kw} onChange={(e) => setKw(e.target.value)} placeholder="try: 1958 or grant or probate" className="w-full bg-transparent py-2.5 pr-3 font-mono text-xs text-ivory outline-none placeholder:text-mute/60" />
        </div>
        <ul className="mt-3 space-y-2">
          {hits.length === 0 && <li className="font-mono text-[10px] text-mute">// no query — sample records will surface as you type.</li>}
          {hits.map((h, i) => (
            <li key={i} className="flex items-start gap-2 rounded border border-gold-2/10 bg-navy-2/40 px-3 py-2 text-xs text-ivory/80">
              <Icon name="check" size={14} className="mt-0.5 text-gold-2" /> {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
