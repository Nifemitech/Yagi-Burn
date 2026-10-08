import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

/** Centred page gutter — the only place horizontal padding is defined. */
export function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-container px-5 sm:px-8', className)}>{children}</div>;
}
