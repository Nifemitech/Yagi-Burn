import { ButtonLink } from '@/components/atoms/Button';
import { Container } from '@/components/atoms/Container';
import { WhatsAppIcon } from '@/components/atoms/icons';
import { brand } from '@/config/brand';
import { chatHref } from '@/lib/whatsapp';

const navLinks = [
  { href: '#product', label: 'The kilishi' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#order', label: 'Order' },
  { href: '#wholesale', label: 'Wholesale' },
] as const;

/** Sticky, translucent header — brand mark, anchors, WhatsApp CTA. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-champagne-200/60 bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#main" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-xl bg-chocolate-900 font-display text-lg font-bold text-champagne-300"
          >
            Y
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-chocolate-950">
            {brand.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-chocolate-600 transition-colors hover:text-chocolate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href={chatHref}
          variant="primary"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp us
        </ButtonLink>
      </Container>
    </header>
  );
}
