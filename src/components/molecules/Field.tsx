import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Shared input styling so every field looks identical. */
export const inputStyles = cn(
  'w-full rounded-xl border border-champagne-200 bg-white px-4 py-3 text-[15px] text-chocolate-900',
  'placeholder:text-chocolate-300 transition-colors duration-200',
  'hover:border-champagne-400 focus:border-chocolate-800 focus:outline-none focus:ring-1 focus:ring-chocolate-800',
);

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}

/** Label + control + optional hint/error, used by every form field. */
export function Field({ label, htmlFor, error, hint, children }: FieldProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={htmlFor} className="text-sm font-bold tracking-tight text-chocolate-800">
          {label}
        </label>
        {hint ? <span className="text-xs font-medium text-chocolate-500">{hint}</span> : null}
      </div>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs font-semibold text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
