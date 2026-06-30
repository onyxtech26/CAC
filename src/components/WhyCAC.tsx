import { motion } from 'motion/react';
import {
  BarChart3,
  ShieldCheck,
  Headphones,
  Building,
  Target,
  Compass
} from 'lucide-react';

export default function WhyCAC() {
  const edgeItems = [
    {
      title: 'Property Knowledge',
      desc: 'Deep expertise in local market dynamics, zoning laws, and appraisal methodologies unique to Johor and wider Malaysia.',
      icon: BarChart3
    },
    {
      title: 'Evidence-Based Advisory',
      desc: 'We move beyond opinion. Every piece of advice is backed by forensic-level documentation and verifiable data points.',
      icon: ShieldCheck
    },
    {
      title: 'End-to-End Support',
      desc: 'Comprehensive management from initial discovery through to legal resolution and asset execution.',
      icon: Headphones
    },
    {
      title: 'Johor Market Presence',
      desc: 'Unrivaled access to off-market opportunities and legal insights within the Johor Bahru real estate ecosystem.',
      icon: Building
    }
  ];

  return (
    <section id="why-cac" className="py-24 md:py-32 relative overflow-hidden bg-surface">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-tertiary/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left Column: Why Discerning Clients Choose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <div>
              <span className="font-mono text-xs text-secondary uppercase tracking-[0.25em] block mb-3">
                // The CAC Edge
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-on-surface">
                Why Discerning Clients Choose<br />Our Forensic Approach
              </h3>
            </div>

            <div className="space-y-8">
              {edgeItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary border border-secondary/20 group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Vision & Mission (Asymmetrical Grid) */}
          <div className="space-y-8 lg:space-y-12">

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="glass-surface p-8 sm:p-10 fingerprint-bg border-black/5 relative group hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-secondary animate-pulse" />
                <span className="font-mono text-[9px] text-secondary tracking-widest uppercase">// Core Direction</span>
              </div>
              <h4 className="font-display text-2xl font-bold text-secondary italic mb-4">
                Our Vision
              </h4>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                To become the definitive authority in property forensics across South East Asia, setting the absolute standard for transparency, evidence collection, and trust in the region's asset landscape.
              </p>
            </motion.div>

            {/* Mission Card - slightly offset down on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-surface p-8 sm:p-10 fingerprint-bg border-black/5 relative group hover:border-secondary/30 transition-all duration-300 lg:translate-x-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-4 h-4 text-secondary animate-pulse" />
                <span className="font-mono text-[9px] text-secondary tracking-widest uppercase">// Core Mission</span>
              </div>
              <h4 className="font-display text-2xl font-bold text-secondary italic mb-4">
                Our Mission
              </h4>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                Protecting our clients' legacies, legal rights, and financial capital through uncompromising investigative rigor, flawless title audits, and forensic-grade real estate advisory.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
