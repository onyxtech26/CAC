import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../../data';
import { Asset } from '../../types';
import RollingNumber from '../ui/RollingNumber';
import { lockScroll, unlockScroll } from '../../lib/scrollLock';
import {
  MapPin,
  Layers,
  Compass,
  ArrowUpDown,
  Ruler,
  Clock,
  X
} from 'lucide-react';

export default function InvestmentOutlook() {
  const [filterType, setFilterType] = useState<string>('ALL');
  const [sortField, setSortField] = useState<'name' | 'acquisition' | 'projectedNetProfit'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  // Lock page scroll (and allow ESC to close) while the asset modal is open.
  useEffect(() => {
    if (!selectedAsset) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAsset(null);
    };
    document.addEventListener('keydown', onKey);
    lockScroll();
    return () => {
      document.removeEventListener('keydown', onKey);
      unlockScroll();
    };
  }, [selectedAsset]);

  // Unique asset types for filtering
  const types = ['ALL', ...Array.from(new Set(ASSETS.map(a => a.type.toUpperCase())))];

  const handleSort = (field: 'name' | 'acquisition' | 'projectedNetProfit') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const processedAssets = ASSETS.filter(asset => {
    if (filterType === 'ALL') return true;
    return asset.type.toUpperCase() === filterType;
  }).sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];
    if (typeof valA === 'string' && typeof valB === 'string') {
      return sortOrder === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return sortOrder === 'asc'
      ? (valA as number) - (valB as number)
      : (valB as number) - (valA as number);
  });

  // Aggregates for the filtered set
  const totalAcquisition = processedAssets.reduce((sum, a) => sum + a.acquisition, 0);
  const totalResale = processedAssets.reduce((sum, a) => sum + a.projectedResale, 0);
  const totalNetProfit = processedAssets.reduce((sum, a) => sum + a.projectedNetProfit, 0);
  const blendedMargin = totalAcquisition > 0 ? Math.round((totalNetProfit / totalAcquisition) * 100) : 0;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount).replace('MYR', 'RM');

  return (
    <section id="investment" className="py-24 md:py-32 relative liquid-glass">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">

        {/* Header Block with HUD */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="font-mono text-xs text-secondary uppercase tracking-[0.25em] block mb-3">
              // Asset Intelligence
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-on-surface">
              Investment Outlook <span className="text-tertiary">Portfolio</span>
            </h3>
            <p className="font-mono text-[11px] text-on-surface-variant/70 mt-2 uppercase tracking-wider">
              Six projects · one six-month cycle · Johor &amp; Kedah
            </p>
          </motion.div>

          {/* Aggregated HUD Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-surface p-6 border-black/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto shadow-sm"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-on-surface-variant/95 mb-1">
                Total Pipeline Value
              </p>
              <p className="text-xl lg:text-2xl font-bold text-secondary tracking-tight">
                <RollingNumber value={formatCurrency(totalAcquisition)} />
              </p>
            </div>
            <div className="hidden sm:block h-10 w-[1px] bg-black/10" />
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-tertiary mb-1">
                Projected Net Profit
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-xl lg:text-2xl font-bold text-tertiary">
                  <RollingNumber value={formatCurrency(totalNetProfit)} />
                </span>
                <span className="text-xs font-mono text-tertiary/90 font-bold bg-tertiary/10 px-1.5 py-0.5 border border-tertiary/20">
                  <RollingNumber value={`+${blendedMargin}%`} />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-black/10 pb-4">
          <span className="font-mono text-[10px] tracking-wider uppercase text-on-surface-variant mr-2">
            Filter Pipeline:
          </span>
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-200 border ${filterType === type
                ? 'bg-secondary text-white border-secondary font-semibold'
                : 'bg-black/5 text-on-surface-variant border-black/10 hover:border-black/35 hover:bg-black/10 hover:text-on-surface'
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Assets Mobile Cards View */}
        <div className="md:hidden space-y-4">
          <AnimatePresence initial={false}>
            {processedAssets.map((asset) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedAsset(asset)}
                className="glass-surface p-5 border border-black/10 flex flex-col gap-3 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="pr-2">
                    <div className="flex items-center gap-2 font-sans font-medium text-sm text-on-surface">
                      <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                      <span>{asset.name}</span>
                    </div>
                    <span className="font-mono text-[10px] text-on-surface-variant/70 ml-[22px] block mt-0.5">{asset.location}</span>
                  </div>
                  <span className={`inline-block px-2 py-0.5 border text-[10px] uppercase font-bold tracking-wider whitespace-nowrap ${asset.anchor
                    ? 'border-tertiary/40 bg-tertiary/10 text-tertiary'
                    : 'border-secondary/30 bg-secondary/5 text-secondary'
                    }`}>
                    {asset.anchor ? 'Anchor' : asset.type}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono mt-2">
                  <div>
                    <span className="block text-on-surface-variant mb-1 uppercase tracking-wider text-[10px]">Acquisition</span>
                    <span className="font-bold"><RollingNumber value={formatCurrency(asset.acquisition)} /></span>
                  </div>
                  <div>
                    <span className="block text-tertiary mb-1 uppercase tracking-wider text-[10px]">Net Profit</span>
                    <span className="font-bold text-tertiary"><RollingNumber value={formatCurrency(asset.projectedNetProfit)} /></span>
                  </div>
                </div>
                <div className="pt-3 mt-2 border-t border-black/5 flex justify-between items-center">
                  <span className="text-on-surface-variant text-[10px] uppercase font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {asset.exitMonths} mo exit
                  </span>
                  <button className="text-[10px] uppercase tracking-wider font-mono text-secondary hover:text-tertiary border border-secondary/30 bg-secondary/5 px-2.5 py-1">
                    View File
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="p-4 bg-surface-dim font-bold border border-black/10 text-on-surface flex flex-col gap-2 font-mono text-xs mt-4">
            <div className="flex justify-between items-center border-b border-black/5 pb-2">
              <span className="text-secondary uppercase tracking-widest text-[10px]">Total Pipeline</span>
              <span className="text-secondary"><RollingNumber value={formatCurrency(totalAcquisition)} /></span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-tertiary uppercase tracking-widest text-[10px]">Projected Profit</span>
              <span className="text-tertiary"><RollingNumber value={formatCurrency(totalNetProfit)} /> (<RollingNumber value={`${blendedMargin}%`} />)</span>
            </div>
          </div>
        </div>

        {/* Assets Desktop Table Layout */}
        <div className="hidden md:block glass-surface overflow-x-auto shadow-sm relative">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead className="bg-surface-dim border-b border-black/10 text-on-surface-variant uppercase">
              <tr>
                <th
                  onClick={() => handleSort('name')}
                  className="p-5 tracking-widest font-semibold cursor-pointer hover:bg-black/5 transition-colors group select-none"
                >
                  <div className="flex items-center gap-1.5">
                    Project
                    <ArrowUpDown className="w-3 h-3 text-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-5 tracking-widest font-semibold">Type</th>
                <th
                  onClick={() => handleSort('acquisition')}
                  className="p-5 tracking-widest font-semibold cursor-pointer hover:bg-black/5 transition-colors group select-none"
                >
                  <div className="flex items-center gap-1.5">
                    Acquisition
                    <ArrowUpDown className="w-3 h-3 text-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-5 tracking-widest font-semibold">Proj. Resale</th>
                <th
                  onClick={() => handleSort('projectedNetProfit')}
                  className="p-5 tracking-widest font-semibold text-tertiary cursor-pointer hover:bg-black/5 transition-colors group select-none"
                >
                  <div className="flex items-center gap-1.5">
                    Proj. Net Profit
                    <ArrowUpDown className="w-3 h-3 text-tertiary opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-5 tracking-widest font-semibold">Exit</th>
                <th className="p-5 text-right font-sans">Forensic File</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-on-surface/90">
              <AnimatePresence initial={false}>
                {processedAssets.map((asset) => (
                  <motion.tr
                    key={asset.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedAsset(asset)}
                    className="hover:bg-black/5 transition-all duration-150 cursor-pointer group"
                  >
                    <td className="p-5 font-sans text-sm text-on-surface group-hover:text-secondary transition-colors">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" />
                        <span className="font-medium">{asset.name}</span>
                        {asset.anchor && (
                          <span className="font-mono text-[9px] uppercase tracking-wider text-tertiary border border-tertiary/30 bg-tertiary/5 px-1.5 py-0.5">Anchor</span>
                        )}
                      </div>
                      <span className="font-mono text-[10px] text-on-surface-variant/60 ml-[22px]">{asset.location}{asset.landSize ? ` · ${asset.landSize}` : ''}</span>
                    </td>
                    <td className="p-5 text-on-surface-variant">{asset.type}</td>
                    <td className="p-5 font-bold">
                      <RollingNumber value={formatCurrency(asset.acquisition)} />
                    </td>
                    <td className="p-5 text-on-surface-variant">
                      <RollingNumber value={formatCurrency(asset.projectedResale)} />
                    </td>
                    <td className="p-5 text-tertiary font-bold">
                      <RollingNumber value={formatCurrency(asset.projectedNetProfit)} />
                    </td>
                    <td className="p-5 text-on-surface-variant">{asset.exitMonths} mo</td>
                    <td className="p-5 text-right font-sans">
                      <button className="text-[10px] uppercase tracking-wider font-mono text-secondary hover:text-tertiary border border-secondary/30 bg-secondary/5 hover:bg-secondary/10 px-2.5 py-1 transition-all">
                        View File
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
            <tfoot className="bg-surface-dim font-bold border-t border-black/15 text-on-surface">
              <tr>
                <td className="p-5 text-secondary uppercase tracking-widest font-bold">Total Pipeline</td>
                <td className="p-5"></td>
                <td className="p-5 text-secondary">
                  <RollingNumber value={formatCurrency(totalAcquisition)} />
                </td>
                <td className="p-5 text-on-surface">
                  <RollingNumber value={formatCurrency(totalResale)} />
                </td>
                <td className="p-5 text-tertiary">
                  <RollingNumber value={formatCurrency(totalNetProfit)} /> (<RollingNumber value={`${blendedMargin}%`} />)
                </td>
                <td className="p-5 text-on-surface-variant">&le; 6 mo</td>
                <td className="p-5"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="font-mono text-[10px] mt-4 text-on-surface-variant/50 italic leading-normal">
          * Figures are indicative and subject to final valuation &amp; due diligence. Each asset is independently appraised and title-verified before acquisition. Click any project to view its forensic file.
        </p>
      </div>

      {/* Asset Forensic Detail Modal — portalled to body so it centres in the
          viewport (the liquid-glass section's backdrop-filter would otherwise
          make `fixed` position relative to the section, not the screen). */}
      {createPortal(
        <AnimatePresence>
        {selectedAsset && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAsset(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12, transition: { duration: 0.16, ease: 'easeIn' } }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-black/10 p-6 sm:p-8 overflow-y-auto no-scrollbar max-h-[90vh] z-10 shadow-2xl"
            >
              <div className="absolute top-4 left-4 font-mono text-[9px] text-tertiary">
                SECURE_FILE_ID: {selectedAsset.id.toUpperCase()}
              </div>

              <button
                onClick={() => setSelectedAsset(null)}
                aria-label="Close"
                className="absolute top-4 right-4 p-1.5 border border-black/10 bg-black/5 hover:border-black/25 hover:rotate-90 text-on-surface-variant hover:text-on-surface transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6 pt-6">
                <div>
                  <h4 className="font-display text-2xl font-bold text-on-surface flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-secondary" />
                    {selectedAsset.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-on-surface-variant">
                    <span className="font-mono text-on-surface-variant/80">{selectedAsset.location}</span>
                    <span className="font-mono text-secondary bg-secondary/5 border border-secondary/20 px-2 py-0.5 uppercase tracking-wider">
                      {selectedAsset.type}
                    </span>
                    <span className="font-mono text-tertiary border border-tertiary/20 bg-tertiary/5 px-2 py-0.5 uppercase tracking-wider">
                      {selectedAsset.status}
                    </span>
                    {selectedAsset.anchor && (
                      <span className="font-mono text-tertiary border border-tertiary/30 bg-tertiary/10 px-2 py-0.5 uppercase tracking-wider font-bold">
                        Anchor Asset
                      </span>
                    )}
                  </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-black/5 border border-black/10 p-4 font-mono text-xs">
                  <div>
                    <span className="text-on-surface-variant block mb-0.5 font-semibold">ACQUISITION</span>
                    <span className="text-on-surface font-bold">
                      <RollingNumber value={formatCurrency(selectedAsset.acquisition)} />
                    </span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block mb-0.5 font-semibold">PROJ. RESALE</span>
                    <span className="text-on-surface font-semibold">
                      <RollingNumber value={formatCurrency(selectedAsset.projectedResale)} />
                    </span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block mb-0.5 font-semibold">NET PROFIT</span>
                    <span className="text-tertiary font-bold">
                      <RollingNumber value={formatCurrency(selectedAsset.projectedNetProfit)} />
                    </span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block mb-0.5 font-semibold flex items-center gap-1"><Clock className="w-3 h-3" />EXIT</span>
                    <span className="text-on-surface font-semibold">
                      <RollingNumber value={`${selectedAsset.exitMonths} mo`} />
                    </span>
                  </div>
                </div>

                {selectedAsset.landSize && (
                  <div className="flex items-center gap-2 font-mono text-[11px] text-on-surface-variant">
                    <Ruler className="w-3.5 h-3.5 text-secondary" />
                    Land size: <span className="text-on-surface font-semibold">{selectedAsset.landSize}</span>
                  </div>
                )}

                {/* Description */}
                <div className="space-y-2">
                  <h5 className="font-mono text-[10px] text-secondary uppercase tracking-widest font-bold flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" />
                    // Asset Thesis
                  </h5>
                  <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed">
                    {selectedAsset.details}
                  </p>
                </div>

                {/* Investigator Notes */}
                <div className="space-y-2 border-t border-black/10 pt-4 bg-tertiary/[0.03] -mx-6 sm:-mx-8 px-6 sm:px-8 pb-1">
                  <h5 className="font-mono text-[10px] text-tertiary uppercase tracking-widest font-bold flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-tertiary" />
                    // Forensic Due-Diligence Note
                  </h5>
                  <p className="font-sans text-xs text-on-surface-variant italic leading-relaxed">
                    "{selectedAsset.investigatorNotes}"
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedAsset(null)}
                    className="border border-black/15 hover:border-black/30 text-on-surface font-mono text-[11px] uppercase tracking-wider px-6 py-2.5 transition-all bg-black/5"
                  >
                    Close File
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
