'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { defaultPack, packs, quantityLimits, type Pack, type PackId } from '@/config/catalog';
import { buildOrderMessage, waLink } from '@/lib/whatsapp';
import { formatNaira } from '@/lib/utils';

export type OrderErrors = Partial<Record<'name' | 'area', string>>;

export interface UseOrderFormResult {
  selectedPack: Pack;
  packId: PackId;
  setPackId: (id: PackId) => void;
  quantity: number;
  increment: () => void;
  decrement: () => void;
  name: string;
  setName: (value: string) => void;
  area: string;
  setArea: (value: string) => void;
  note: string;
  setNote: (value: string) => void;
  errors: OrderErrors;
  /** e.g. "₦6,400" — null when the pack is priced on request */
  subtotalLabel: string | null;
  /** Live wa.me link for the current form state */
  href: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

/**
 * Owns all order-form state and the WhatsApp message built from it.
 * The form stays a pure presentation layer.
 */
export function useOrderForm(): UseOrderFormResult {
  const [packId, setPackId] = useState<PackId>(defaultPack.id);
  const [quantity, setQuantity] = useState<number>(quantityLimits.min);
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<OrderErrors>({});

  const selectedPack = packs.find((pack) => pack.id === packId) ?? defaultPack;

  const subtotalLabel =
    selectedPack.price !== null ? formatNaira(selectedPack.price * quantity) : null;

  const href = useMemo(
    () =>
      waLink(
        buildOrderMessage({
          packName: selectedPack.name,
          priceLabel: selectedPack.priceLabel,
          price: selectedPack.price,
          quantity,
          name,
          area,
          note,
        }),
      ),
    [selectedPack, quantity, name, area, note],
  );

  const validate = (): OrderErrors => {
    const next: OrderErrors = {};
    if (!name.trim()) next.name = 'Tell us your name.';
    if (!area.trim()) next.area = 'Where are we delivering to?';
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return {
    selectedPack,
    packId,
    setPackId: (id) => {
      setPackId(id);
      setErrors((prev) => ({ ...prev, area: undefined }));
    },
    quantity,
    increment: () => setQuantity((q) => Math.min(quantityLimits.max, q + 1)),
    decrement: () => setQuantity((q) => Math.max(quantityLimits.min, q - 1)),
    name,
    setName: (value) => {
      setName(value);
      setErrors((prev) => ({ ...prev, name: undefined }));
    },
    area,
    setArea: (value) => {
      setArea(value);
      setErrors((prev) => ({ ...prev, area: undefined }));
    },
    note,
    setNote,
    errors,
    subtotalLabel,
    href,
    handleSubmit,
  };
}
