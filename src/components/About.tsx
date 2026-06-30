import { motion } from 'motion/react';
import { ShieldCheck, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-surface overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <span className="font-mono text-xs text-secondary uppercase tracking-[0.25em] block mb-3">
              // The Firm
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface leading-tight">
              Integrated Property, Estate &<br />
              <span className="italic font-normal text-secondary font-display">Forensic Advisory</span>
            </h2>
          </div>

          <div className="relative pl-6 border-l border-secondary/30 my-6 py-1">
            <p className="font-display text-lg sm:text-xl text-on-surface-variant/90 italic leading-relaxed font-light">
              "Clarity before commitment. Evidence before decision."
            </p>
          </div>

          <div className="space-y-4 font-sans text-on-surface-variant text-sm sm:text-base font-light leading-relaxed">
            <p>
              Conglomerate Appraisal Consultancy (CAC) operates at the intersection of high-stakes real estate development, asset restructuring, and forensic investigation. We do not just value assets; we uncover their true legal and spatial narratives.
            </p>
            <p>
              From resolving complex inheritance disputes over generational assets to guiding institutional-grade land development opportunities in Johor Bahru and wider Malaysia, we provide the verifiable technical evidence required for ironclad decision making.
            </p>
          </div>

          <div className="flex items-center gap-3 text-tertiary font-mono text-xs tracking-wider pt-4">
            <ShieldCheck className="w-5 h-5 text-tertiary" />
            <span className="uppercase tracking-[0.15em] font-semibold">Regulated Professional Standards</span>
          </div>
        </motion.div>

        {/* Right Side Visual with scanning elements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square glass-surface p-4 relative group overflow-hidden border-white/10">

            {/* The Blueprint Blueprint & Magnifier Hotlink */}
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105"
              referrerPolicy="no-referrer"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgvrWi2DgkZhNqw8MHwUyr6vpKM2AslqlybnUivq5Os0cJgpOKi4UbLWscL83__wQM0FFsk26qScC9v20gvtapuk2D_IC9AgeYfskmrMHO4DxpkBbhY3NyT0yDr13yMhAP23GSzCYXOnRQ1luo8b-UqsnQiHty9egRzBWYIMZzmxSFGyHXmkKYZsKNSzoHGMNtlnUjfGzs9byixEX003dHm3TYcgsZ_lmwDRxAJTEU4gI1Ih5Ud0BwOxobyKpNqTNidgnbAG6zDDM')`
              }}
            />

            {/* Custom Interactive HUD Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tertiary to-transparent shadow-[0_0_10px_rgba(0,219,231,0.8)] animate-bounce" />

            {/* Pulsing radar target circle over magnifying lens area */}
            <div className="absolute top-[48%] left-[53%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-tertiary/20 rounded-full pointer-events-none animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
