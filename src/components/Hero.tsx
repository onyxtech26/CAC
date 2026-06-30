import { motion } from 'motion/react';
import ForensicShader from './ForensicShader';
// @ts-ignore
import heroPic from '../assets/hero-pic.png';

interface HeroProps {
  onBookConsultation: () => void;
  onViewOutlook: () => void;
}

const imageCacheBuster = Date.now();

export default function Hero({ onBookConsultation, onViewOutlook }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[64px] overflow-hidden bg-surface forensic-grid">
      {/* Interactive WebGL fingerprint/grid shader background */}
      <ForensicShader />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 items-center py-16">

        {/* Left column text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <div>
            <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block mb-3 md:mb-4 animate-pulse">
              // Forensic Real Estate Experts
            </span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-on-surface leading-[1.1] tracking-tight">
              Property, Estate & <br />
              <span className="italic font-normal text-secondary font-display">Forensic Consultancy</span> <br />
              You Can Trust
            </h1>
          </div>

          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed font-light">
            CAC helps institutional funds, legal offices, and private clients make confident decisions in high-stakes property transactions, inheritance disputes, land development, and asset tracing across Malaysia.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onBookConsultation}
              className="w-full sm:w-auto bg-secondary text-white px-8 py-4 font-mono text-xs uppercase font-semibold tracking-wider hover:bg-transparent hover:text-secondary border border-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/20"
            >
              Book a Consultation
            </button>
            <button
              onClick={onViewOutlook}
              className="w-full sm:w-auto border border-secondary/30 text-secondary hover:border-secondary hover:bg-secondary/5 px-8 py-4 font-mono text-xs uppercase font-semibold tracking-wider transition-all duration-300"
            >
              View Investment Outlook
            </button>
          </div>
        </motion.div>

        {/* Right column luxury villa graphic with technical lens overlays */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1.15 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative h-[450px] lg:h-[550px] xl:h-[600px] hidden md:block"
        >
          {/* Glass Card Outer */}
          <div className="absolute inset-0 rounded-none overflow-hidden group">
            {/* Hotlinked Luxury Villa image as specified by HTML */}
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-[4000ms] ease-out group-hover:scale-105"
              style={{
                backgroundImage: `url(${heroPic})`
              }}
            />



            {/* Animated crosshair or scanner pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-tertiary/20 rounded-full animate-ping pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-secondary/40 rounded-full flex items-center justify-center">
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
