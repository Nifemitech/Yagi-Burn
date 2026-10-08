import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  /** Colour scheme — use "inverse" on chocolate backgrounds */
  tone?: 'default' | 'inverse';
  className?: string;
}

/** Eyebrow + display title + supporting copy, reused by every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';
  const inverse = tone === 'inverse';

  return (
    <div className={cn(centered && 'text-center', className)}>
      <p className={cn('eyebrow', inverse && 'text-champagne-300')}>
        <span className={cn('h-1.5 w-1.5 rounded-full', inverse ? 'bg-champagne-400' : 'bg-champagne-500')} />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 font-display text-[clamp(2rem,6.5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.02em]',
          inverse ? 'text-champagne-50' : 'text-chocolate-950',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 max-w-xl text-base leading-relaxed sm:text-lg',
            centered && 'mx-auto',
            inverse ? 'text-champagne-200' : 'text-chocolate-600',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
