import type { Pack } from '@/config/catalog';
import { cn } from '@/lib/utils';

interface PackOptionProps {
  pack: Pack;
  selected: boolean;
  onSelect: (id: Pack['id']) => void;
}

/** Radio-card for choosing a pack size in the order form. */
export function PackOption({ pack, selected, onSelect }: PackOptionProps) {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-center gap-4 rounded-2xl border bg-white p-4 transition-all duration-200',
        selected
          ? 'border-chocolate-800 ring-1 ring-chocolate-800'
          : 'border-champagne-200 hover:border-champagne-400',
      )}
    >
      <input
        type="radio"
        name="pack"
        value={pack.id}
        checked={selected}
        onChange={() => onSelect(pack.id)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          'grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors',
          selected ? 'border-chocolate-800' : 'border-chocolate-300',
        )}
      >
        <span
          className={cn(
            'h-2.5 w-2.5 rounded-full transition-colors',
            selected ? 'bg-chocolate-800' : 'bg-transparent',
          )}
        />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline justify-between gap-3">
          <span className="text-[15px] font-bold tracking-tight text-chocolate-950">{pack.name}</span>
          <span
            className={cn(
              'font-display font-semibold',
              pack.price !== null ? 'text-chocolate-900' : 'text-chocolate-500',
            )}
          >
            {pack.priceLabel}
          </span>
        </span>
        <span className="mt-0.5 block text-[13px] leading-snug text-chocolate-500">{pack.blurb}</span>
      </span>
    </label>
  );
}
