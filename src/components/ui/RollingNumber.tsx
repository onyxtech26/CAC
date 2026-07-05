import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface RollingNumberProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export default function RollingNumber({ value, duration = 1200, className = '' }: RollingNumberProps) {
  const valueStr = String(value);
  const parsed = parseNumberString(valueStr);

  const ref = useRef<HTMLSpanElement | null>(null);
  // once: false triggers entry animation every time it comes back into view
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const [displayValue, setDisplayValue] = useState(valueStr);

  useEffect(() => {
    if (!parsed) {
      setDisplayValue(valueStr);
      return;
    }

    if (!isInView) {
      // Set to 0 representation when out of view, so it will animate next time
      const zeroFormatted = formatVal(0, parsed.decimals, parsed.hasCommas);
      setDisplayValue(`${parsed.prefix}${zeroFormatted}${parsed.suffix}`);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function: easeOutQuad for smooth rolling
      const easedProgress = progress * (2 - progress);
      const currentVal = easedProgress * parsed.targetVal;

      const formatted = formatVal(currentVal, parsed.decimals, parsed.hasCommas);
      setDisplayValue(`${parsed.prefix}${formatted}${parsed.suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        const finalFormatted = formatVal(parsed.targetVal, parsed.decimals, parsed.hasCommas);
        setDisplayValue(`${parsed.prefix}${finalFormatted}${parsed.suffix}`);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [valueStr, isInView, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

function parseNumberString(str: string) {
  // Capture a contiguous sequence of digits, commas, and dots
  const match = str.match(/([0-9,.]+)/);
  if (!match) return null;

  const rawNumStr = match[0];
  const index = match.index ?? 0;

  const prefix = str.substring(0, index);
  const suffix = str.substring(index + rawNumStr.length);

  const cleanNumStr = rawNumStr.replace(/,/g, '');
  const targetVal = parseFloat(cleanNumStr);
  if (isNaN(targetVal)) return null;

  const dotIndex = cleanNumStr.indexOf('.');
  const decimals = dotIndex === -1 ? 0 : cleanNumStr.length - dotIndex - 1;
  const hasCommas = rawNumStr.includes(',');

  return {
    prefix,
    suffix,
    targetVal,
    decimals,
    hasCommas
  };
}

function formatVal(val: number, decimals: number, hasCommas: boolean): string {
  let formatted = val.toFixed(decimals);
  if (hasCommas) {
    const parts = formatted.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    formatted = parts.join('.');
  }
  return formatted;
}
