import { cn } from '@/lib/utils';

interface QuantityStepperProps {
  value: number;
  min: number;
  max: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

/** Accessible −/+ quantity control. */
export function QuantityStepper({ value, min, max, onDecrement, onIncrement }: QuantityStepperProps) {
  const buttonClass =
    'grid h-9 w-9 place-items-center rounded-full text-lg font-semibold text-chocolate-800 transition hover:bg-white hover:text-chocolate-950 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent';

  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-champagne-100 p-1 ring-1 ring-champagne-200">
      <button
        type="button"
        onClick={onDecrement}
        disabled={value <= min}
        aria-label={`Decrease quantity −`}
        className={buttonClass}
      >
        <span aria-hidden="true">−</span>
      </button>
      <output
        aria-live="polite"
        className="w-8 text-center text-sm font-bold tabular-nums text-chocolate-950"
      >
        {value}
      </output>
      <button
        type="button"
        onClick={onIncrement}
        disabled={value >= max}
        aria-label={`Increase quantity +`}
        className={buttonClass}
      >
        <span aria-hidden="true">+</span>
      </button>
    </div>
  );
}
