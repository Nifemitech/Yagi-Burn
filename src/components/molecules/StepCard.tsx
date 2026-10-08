import type { ReactNode } from 'react';

interface StepCardProps {
  step: number;
  title: string;
  children: ReactNode;
}

/** Numbered step in the "how ordering works" flow. */
export function StepCard({ step, title, children }: StepCardProps) {
  return (
    <li className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-champagne-200/70">
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-b from-champagne-300 to-champagne-500 font-display text-sm font-bold text-chocolate-950"
      >
        {step}
      </span>
      <div>
        <h3 className="text-[15px] font-bold tracking-tight text-chocolate-950">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-chocolate-600">{children}</p>
      </div>
    </li>
  );
}
