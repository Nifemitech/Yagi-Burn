import { brand, whatsappMessages } from '@/config/brand';
import { formatNaira } from '@/lib/utils';

/** Build a wa.me deep link that opens WhatsApp with a pre-written message. */
export function waLink(message: string): string {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface OrderDetails {
  packName: string;
  priceLabel: string;
  /** Unit price, null for "on request" packs */
  price: number | null;
  quantity: number;
  name: string;
  area: string;
  note: string;
}

/**
 * Turn the order form into a copy-and-paste-ready WhatsApp message,
 * so the customer only has to press send.
 */
export function buildOrderMessage(order: OrderDetails): string {
  const lines: string[] = [
    'Hi Yagi Burn 👋',
    'I’d like to place an order:',
    '',
    `• Pack: ${order.packName} (${order.priceLabel})`,
    `• Quantity: ${order.quantity}`,
    `• Name: ${order.name.trim()}`,
    `• Delivery area: ${order.area.trim()}`,
  ];

  if (order.note.trim()) {
    lines.push(`• Note: ${order.note.trim()}`);
  }

  if (order.price !== null) {
    lines.push('', `Subtotal: ${formatNaira(order.price * order.quantity)} (before delivery)`);
  }

  lines.push('', 'Please confirm delivery and payment. Thank you!');

  return lines.join('\n');
}

/** Direct chat links used across the site. */
export const chatHref = waLink(whatsappMessages.chat);
export const wholesaleHref = waLink(whatsappMessages.wholesale);
