import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

/** One pillar of the product story (beef / glaze / pepper). */
export function FeatureCard({ icon, title, children, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group rounded-[1.75rem] border border-champagne-200/70 bg-gradient-to-b from-champagne-50 to-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-champagne-300 hover:shadow-card',
        className,
      )}
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-chocolate-900 text-champagne-300 transition-colors duration-300 group-hover:text-champagne-400">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-chocolate-950">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-chocolate-600">{children}</p>
    </article>
  );
}
