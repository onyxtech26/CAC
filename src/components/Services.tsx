import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Scale,
  Compass,
  Briefcase,
  Search,
  FileSignature,
  ArrowRight,
  CheckCircle2,
  X,
  Fingerprint
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';
import ForensicShader from './ForensicShader';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon strings to Lucide icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Scale': return Scale;
      case 'Compass': return Compass;
      case 'Briefcase': return Briefcase;
      case 'SearchCode': return Fingerprint;
      case 'FileSignature': return FileSignature;
      default: return Search;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-surface forensic-grid relative overflow-hidden border-y border-black/5">
      <ForensicShader />
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block mb-3">
            // Forensic Capabilities
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface">
            Specialized Service Portfolio
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="glass-surface p-8 lg:p-10 hover:border-tertiary/50 transition-all duration-300 group cursor-pointer relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 mb-6 group-hover:scale-105 group-hover:border-secondary/40 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-on-surface mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h4>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                  className="font-mono text-[10px] text-tertiary flex items-center gap-2 uppercase tracking-widest mt-auto font-semibold hover:text-secondary group-hover:translate-x-1 transition-all"
                >
                  Details <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Forensic Detail Modal / Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/25 backdrop-blur-sm"
            />

            {/* Sidebar content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg h-full bg-white/90 backdrop-blur-2xl sm:border-l border-black/10 p-6 sm:p-12 overflow-y-auto flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Header controls */}
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
                      Forensic Audit File // {selectedService.id.toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 border border-black/10 bg-black/5 hover:border-black/25 transition-all text-on-surface-variant hover:text-on-surface"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main Content */}
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-on-surface">
                      {selectedService.title}
                    </h3>
                    <p className="font-sans text-sm text-secondary font-mono mt-1 uppercase tracking-wider">
                      Specialized Appraisal Capability
                    </p>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-on-surface-variant/95 leading-relaxed font-light">
                    {selectedService.detailedDescription}
                  </p>

                  {/* Investigation Path Timeline */}
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold border-b border-black/10 pb-2">
                      // Tactical Audit Checklist
                    </h4>
                    <div className="space-y-3">
                      {selectedService.checklist.map((step, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-tertiary/10 border border-tertiary/30 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-tertiary" />
                          </div>
                          <span className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-8 mt-8 border-t border-black/10">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full block text-center bg-secondary text-white py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-transparent hover:text-secondary border border-secondary transition-all"
                >
                  Engage on {selectedService.title}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
