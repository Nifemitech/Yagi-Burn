import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'gold' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  /* Chocolate pill — the workhorse CTA on light surfaces */
  primary:
    'bg-chocolate-800 text-white shadow-cta hover:bg-chocolate-900 hover:shadow-[0_14px_32px_-12px_rgba(34,20,13,0.6)]',
  /* Outlined pill for the secondary action */
  secondary:
    'bg-white text-chocolate-900 ring-1 ring-inset ring-chocolate-200 hover:ring-chocolate-400 hover:text-chocolate-700',
  /* Gold foil pill — pops on chocolate backgrounds */
  gold: 'bg-gradient-to-b from-champagne-300 to-champagne-500 text-chocolate-950 hover:from-champagne-200 hover:to-champagne-400',
  ghost: 'text-chocolate-600 hover:text-chocolate-900 underline-offset-4 hover:underline',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[13px]',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[15px] sm:text-base',
};

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2';

interface ButtonStylesOptions {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function buttonStyles({ variant = 'primary', size = 'md', className }: ButtonStylesOptions = {}) {
  return cn(base, variants[variant], sizes[size], focusRing, className);
}

type SharedProps = ButtonStylesOptions & { children: ReactNode };

/** Anchor-based button — use for links (WhatsApp, in-page jumps). */
export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...anchorProps
}: SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonStyles({ variant, size, className })} {...anchorProps}>
      {children}
    </a>
  );
}

/** Native button — use for form actions. */
export function Button({
  variant,
  size,
  className,
  children,
  ...buttonProps
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonStyles({ variant, size, className })} {...buttonProps}>
      {children}
    </button>
  );
}
