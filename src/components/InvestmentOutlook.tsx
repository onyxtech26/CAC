import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../data';
import { Asset } from '../types';
import RollingNumber from './RollingNumber';
import {
  Search,
  MapPin,
  Layers,
  Calendar,
  TrendingUp,
  Coins,
  CheckCircle2,
  Compass,
  ArrowUpDown,
  Info,
  X
} from 'lucide-react';

export default function InvestmentOutlook() {
  const [filterType, setFilterType] = useState<string>('ALL');
  const [sortField, setSortField] = useState<'location' | 'marketValue' | 'projectedNetProfit'>('location');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  // Get unique asset types for filtering
  const types = ['ALL', ...Array.from(new Set(ASSETS.map(a => a.type.toUpperCase())))];

  // Handle sorting toggles
  const handleSort = (field: 'location' | 'marketValue' | 'projectedNetProfit') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Filter and Sort assets
  const processedAssets = ASSETS.filter(asset => {
    if (filterType === 'ALL') return true;
    return asset.type.toUpperCase() === filterType;
  }).sort((a, b) => {
    let valA = a[sortField];
    let valB = b[sortField];

    if (typeof valA === 'string' && typeof valB === 'string') {
      return sortOrder === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    } else {
      return sortOrder === 'asc'
        ? (valA as number) - (valB as number)
        : (valB as number) - (valA as number);
    }
  });

  // Calculate totals for currently filtered assets
  const totalMarketValue = processedAssets.reduce((sum, item) => sum + item.marketValue, 0);
  const totalNetProfit = processedAssets.reduce((sum, item) => sum + item.projectedNetProfit, 0);
  const aggregateProfitPercent = totalMarketValue > 0 ? Math.round((totalNetProfit / totalMarketValue) * 100) : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount).replace('MYR', 'RM');
  };

  return (
    <section id="investment" className="py-24 md:py-32 relative bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">

        {/* Header Block with HUD */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <span className="font-mono text-xs text-secondary uppercase tracking-[0.25em] block mb-3">
              // Asset Intelligence
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-on-surface">
              Investment Outlook <span className="text-tertiary">Portfolio</span>
            </h3>
          </div>

          {/* Aggregated HUD Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-surface p-6 border-black/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto shadow-sm"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-on-surface-variant/95 mb-1">
                Total Portfolio Status
              </p>
              <p className="text-xl lg:text-2xl font-bold text-secondary tracking-tight">
                <RollingNumber value={formatCurrency(totalMarketValue)} />
              </p>
            </div>
            <div className="hidden sm:block h-10 w-[1px] bg-black/10" />
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-tertiary mb-1">
                Projected Aggregated Return
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-xl lg:text-2xl font-bold text-tertiary">
                  <RollingNumber value={formatCurrency(totalNetProfit)} />
                </span>
                <span className="text-xs font-mono text-tertiary/90 font-bold bg-tertiary/10 px-1.5 py-0.5 border border-tertiary/20">
                  <RollingNumber value={`+${aggregateProfitPercent}%`} />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-black/10 pb-4">
          <span className="font-mono text-[10px] tracking-wider uppercase text-on-surface-variant mr-2">
            Filter Registry:
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
                  <div className="flex items-center gap-2 font-sans font-medium text-sm text-on-surface pr-2">
                    <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                    <span>{asset.location}</span>
                  </div>
                  <span className={`inline-block px-2 py-0.5 border text-[10px] uppercase font-bold tracking-wider whitespace-nowrap ${asset.acquisition === 'Verified' || asset.acquisition === 'Secure'
                      ? 'border-secondary/30 bg-secondary/5 text-secondary'
                      : 'border-tertiary/30 bg-tertiary/5 text-tertiary'
                    }`}>
                    {asset.acquisition}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono mt-2">
                  <div>
                    <span className="block text-on-surface-variant mb-1 uppercase tracking-wider text-[10px]">Market Value</span>
                    <span className="font-bold"><RollingNumber value={formatCurrency(asset.marketValue)} /></span>
                  </div>
                  <div>
                    <span className="block text-tertiary mb-1 uppercase tracking-wider text-[10px]">Net Profit</span>
                    <span className="font-bold text-tertiary"><RollingNumber value={formatCurrency(asset.projectedNetProfit)} /></span>
                  </div>
                </div>
                <div className="pt-3 mt-2 border-t border-black/5 flex justify-between items-center">
                   <span className="text-on-surface-variant text-[10px] uppercase font-mono">{asset.type}</span>
                   <button className="text-[10px] uppercase tracking-wider font-mono text-secondary hover:text-tertiary border border-secondary/30 bg-secondary/5 px-2.5 py-1">
                      View Audit
                   </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="p-4 bg-surface-dim font-bold border border-black/10 text-on-surface flex flex-col gap-2 font-mono text-xs mt-4">
            <div className="flex justify-between items-center border-b border-black/5 pb-2">
              <span className="text-secondary uppercase tracking-widest text-[10px]">Aggregate Value</span>
              <span className="text-secondary"><RollingNumber value={formatCurrency(totalMarketValue)} /></span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-tertiary uppercase tracking-widest text-[10px]">Aggregate Profit</span>
              <span className="text-tertiary"><RollingNumber value={formatCurrency(totalNetProfit)} /> (<RollingNumber value={`${aggregateProfitPercent}%`} />)</span>
            </div>
          </div>
        </div>

        {/* Assets Desktop Table Layout */}
        <div className="hidden md:block glass-surface overflow-x-auto shadow-sm relative">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead className="bg-surface-dim border-b border-black/10 text-on-surface-variant uppercase">
              <tr>
                <th
                  onClick={() => handleSort('location')}
                  className="p-5 tracking-widest font-semibold cursor-pointer hover:bg-black/5 transition-colors group select-none"
                >
                  <div className="flex items-center gap-1.5">
                    Asset Location
                    <ArrowUpDown className="w-3 h-3 text-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-5 tracking-widest font-semibold">Type</th>
                <th
                  onClick={() => handleSort('marketValue')}
                  className="p-5 tracking-widest font-semibold cursor-pointer hover:bg-black/5 transition-colors group select-none"
                >
                  <div className="flex items-center gap-1.5">
                    Market Value
                    <ArrowUpDown className="w-3 h-3 text-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="p-5 tracking-widest font-semibold">Acquisition</th>
                <th
                  onClick={() => handleSort('projectedNetProfit')}
                  className="p-5 tracking-widest font-semibold text-tertiary cursor-pointer hover:bg-black/5 transition-colors group select-none"
                >
                  <div className="flex items-center gap-1.5">
                    Projected Net Profit
                    <ArrowUpDown className="w-3 h-3 text-tertiary opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
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
                    <td className="p-5 font-sans font-medium text-sm text-on-surface group-hover:text-secondary transition-colors">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-secondary/60 group-hover:text-secondary transition-colors" />
                        {asset.location}
                      </div>
                    </td>
                    <td className="p-5 text-on-surface-variant">{asset.type}</td>
                    <td className="p-5 font-bold">
                      <RollingNumber value={formatCurrency(asset.marketValue)} />
                    </td>
                    <td className="p-5">
                      <span className={`inline-block px-2 py-0.5 border text-[10px] uppercase font-bold tracking-wider ${asset.acquisition === 'Verified' || asset.acquisition === 'Secure'
                          ? 'border-secondary/30 bg-secondary/5 text-secondary'
                          : 'border-tertiary/30 bg-tertiary/5 text-tertiary'
                        }`}>
                        {asset.acquisition}
                      </span>
                    </td>
                    <td className="p-5 text-tertiary font-bold">
                      <RollingNumber value={formatCurrency(asset.projectedNetProfit)} />
                    </td>
                    <td className="p-5 text-right font-sans">
                      <button className="text-[10px] uppercase tracking-wider font-mono text-secondary hover:text-tertiary border border-secondary/30 bg-secondary/5 hover:bg-secondary/10 px-2.5 py-1 transition-all">
                        View Audit
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
            <tfoot className="bg-surface-dim font-bold border-t border-black/15 text-on-surface">
              <tr>
                <td className="p-5 text-secondary uppercase tracking-widest font-bold">Aggregate Total</td>
                <td className="p-5"></td>
                <td className="p-5 text-secondary">
                  <RollingNumber value={formatCurrency(totalMarketValue)} />
                </td>
                <td className="p-5"></td>
                <td className="p-5 text-tertiary">
                  <RollingNumber value={formatCurrency(totalNetProfit)} /> (<RollingNumber value={`${aggregateProfitPercent}%`} />)
                </td>
                <td className="p-5"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="font-mono text-[10px] mt-4 text-on-surface-variant/50 italic leading-normal">
          * All figures represent PROJECTED net profit based on current market data and technical appraisal. Actual results may vary based on market conditions. Click any asset row to view full forensic investigation files.
        </p>
      </div>

      {/* Embedded Asset Forensic Detail Drawer */}
      <AnimatePresence>
        {selectedAsset && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAsset(null)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-black/10 p-6 sm:p-8 overflow-y-auto max-h-[90vh] z-10 shadow-2xl"
            >
              {/* Corner coordinates */}
              <div className="absolute top-4 left-4 font-mono text-[9px] text-tertiary">
                SECURE_FILE_ID: {selectedAsset.id.toUpperCase()}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedAsset(null)}
                className="absolute top-4 right-4 p-1.5 border border-black/10 bg-black/5 hover:border-black/25 text-on-surface-variant hover:text-on-surface transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6 pt-6">
                <div>
                  <h4 className="font-display text-2xl font-bold text-on-surface flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-secondary" />
                    {selectedAsset.location}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-on-surface-variant">
                    <span className="font-mono text-secondary bg-secondary/5 border border-secondary/20 px-2 py-0.5 uppercase tracking-wider">
                      {selectedAsset.type}
                    </span>
                    <span className="font-mono text-tertiary border border-tertiary/20 bg-tertiary/5 px-2 py-0.5 uppercase tracking-wider">
                      {selectedAsset.forensicStatus}
                    </span>
                  </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-black/5 border border-black/10 p-4 font-mono text-xs">
                  <div>
                    <span className="text-on-surface-variant block mb-0.5 font-semibold">ZONING COORD</span>
                    <span className="text-on-surface font-semibold tracking-tight">{selectedAsset.coordinates}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block mb-0.5 font-semibold">YEAR COMPLETED</span>
                    <span className="text-on-surface font-semibold">
                      <RollingNumber value={selectedAsset.yearBuilt} />
                    </span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block mb-0.5 font-semibold">LOT SIZE</span>
                    <span className="text-on-surface font-semibold">
                      <RollingNumber value={`${selectedAsset.lotSizeSqFt.toLocaleString()} sqft`} />
                    </span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block mb-0.5 font-semibold">MARKET APPRAISAL</span>
                    <span className="text-secondary font-bold">
                      <RollingNumber value={formatCurrency(selectedAsset.marketValue)} />
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h5 className="font-mono text-[10px] text-secondary uppercase tracking-widest font-bold flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" />
                    // Chain of Title & Due Diligence Record
                  </h5>
                  <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed">
                    {selectedAsset.details}
                  </p>
                </div>

                {/* Investigator Notes */}
                <div className="space-y-2 border-t border-black/10 pt-4 bg-tertiary/[0.03] -mx-6 sm:-mx-8 px-6 sm:px-8 pb-1">
                  <h5 className="font-mono text-[10px] text-tertiary uppercase tracking-widest font-bold flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-tertiary" />
                    // Senior Investigator On-Site Observations
                  </h5>
                  <p className="font-sans text-xs text-on-surface-variant italic leading-relaxed">
                    "{selectedAsset.investigatorNotes}"
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedAsset(null)}
                    className="border border-black/15 hover:border-black/30 text-on-surface font-mono text-[11px] uppercase tracking-wider px-6 py-2.5 transition-all bg-black/5"
                  >
                    Close Audit File
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
