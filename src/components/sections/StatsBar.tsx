import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Coins, House, ShieldCheck } from 'lucide-react';
import RollingNumber from '../ui/RollingNumber';

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const stats = [
    {
      id: 'stat-projects',
      label: 'Active Projects',
      value: '6',
      icon: House,
      color: 'text-secondary'
    },
    {
      id: 'stat-pipeline',
      label: 'Pipeline Value',
      value: 'RM3.16M',
      icon: TrendingUp,
      color: 'text-secondary'
    },
    {
      id: 'stat-profit',
      label: 'Projected Profit',
      value: 'RM1.5M+',
      icon: Coins,
      color: 'text-tertiary',
      isAccent: true
    },
    {
      id: 'stat-appraisals',
      label: 'Appraisals & Reviews',
      value: '40+',
      icon: ShieldCheck,
      color: 'text-secondary'
    }
  ];

  return (
    <div
      ref={containerRef}
      className="bg-transparent py-10 md:py-12 border-y border-black/5 relative z-10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 xl:px-20 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`text-center flex flex-col items-center cursor-default ${stat.isAccent ? 'relative group' : ''
                }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className={`w-3.5 h-3.5 ${stat.isAccent ? 'text-tertiary animate-pulse' : 'text-on-surface-variant/50'}`} />
                <span className={`font-mono text-[11px] tracking-widest uppercase ${stat.isAccent ? 'text-tertiary' : 'text-on-surface-variant/75'
                  }`}>
                  {stat.label}
                </span>
              </div>
              <p className={`font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${stat.color}`}>
                <RollingNumber value={stat.value} />
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
