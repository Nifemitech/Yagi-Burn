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
        'group flex flex-row gap-4 rounded-[1.75rem] border border-champagne-200/70 bg-gradient-to-b from-champagne-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-champagne-300 hover:shadow-card sm:flex-col sm:gap-5 sm:p-7',
        className,
      )}
    >
      <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-chocolate-900 text-champagne-300 transition-colors duration-300 group-hover:text-champagne-400 sm:h-12 sm:w-12 sm:rounded-2xl">
        {icon}
      </span>
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold tracking-tight text-chocolate-950 sm:text-xl">{title}</h3>
        <p className="mt-1 text-[14px] leading-relaxed text-chocolate-600 sm:mt-2 sm:text-[15px]">{children}</p>
      </div>
    </article>
  );
}
