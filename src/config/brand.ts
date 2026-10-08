/**
 * Brand configuration — the single source of truth for business details.
 * Update contact details here and they propagate across the whole site.
 */
export const brand = {
  name: 'Yagi Burn',
  legalName: 'Yagi Burn Ventures',
  tagline: 'Spicy honey-glazed kilishi.',
  description:
    'Thin-sliced, spiced dried beef with a sweet honey glaze and a slow pepper burn. Order straight on WhatsApp.',
  /** International format, no "+" — used to build wa.me links. */
  whatsappNumber: '2348033387509',
  phoneDisplay: '0803 338 7509',
  socials: [
    { label: 'Instagram', handle: 'yagi.burn', href: 'https://www.instagram.com/yagi.burn' },
    { label: 'TikTok', handle: 'feyisikemi', href: 'https://www.tiktok.com/@feyisikemi' },
  ],
} as const;

/** Pre-written WhatsApp openers so every CTA lands in a warm chat. */
export const whatsappMessages = {
  chat: 'Hi Yagi Burn 👋 I’d like to ask about your kilishi.',
  wholesale:
    'Hi Yagi Burn 👋 I’m interested in your wholesale slot (₦29,000 per 1kg). I’d like to ask about quantities and how to reserve a slot.',
} as const;
