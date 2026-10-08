/**
 * Product catalogue — pack sizes and pricing live here, not inside components.
 * Prices are confirmed with the customer on WhatsApp before payment.
 */
export type PackId = '100g' | '1kg' | 'custom';

export interface Pack {
  id: PackId;
  /** Short label, e.g. "100g pack" */
  name: string;
  /** Weight string used by the pack artwork */
  weightLabel: string;
  /** Unit price in naira, null when priced on request */
  price: number | null;
  priceLabel: string;
  blurb: string;
}

export const packs: readonly Pack[] = [
  {
    id: '100g',
    name: '100g pack',
    weightLabel: '100G',
    price: 3_200,
    priceLabel: '₦3,200',
    blurb: 'Pocket size — the one everybody starts with.',
  },
  {
    id: '1kg',
    name: '1kg pack',
    weightLabel: '1KG',
    price: 32_000,
    priceLabel: '₦32,000',
    blurb: 'Stock up, share out, or resell.',
  },
  {
    id: 'custom',
    name: 'Other sizes',
    weightLabel: '',
    price: null,
    priceLabel: 'On request',
    blurb: 'Tell us the size you need in your note.',
  },
] as const;

export const defaultPack: Pack = packs[0];

export const wholesale = {
  /** Price per kilo for resellers */
  pricePerKg: 29_000,
  pricePerKgLabel: '₦29,000',
  /** Retail price of the 1kg pack, used to frame the saving */
  retailPerKg: 32_000,
  retailPerKgLabel: '₦32,000',
  savingPerKgLabel: '₦3,000',
} as const;

export const quantityLimits = { min: 1, max: 99 } as const;
