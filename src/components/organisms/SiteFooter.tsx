import type { ComponentType } from 'react';
import { Container } from '@/components/atoms/Container';
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from '@/components/atoms/icons';
import { brand } from '@/config/brand';
import { chatHref } from '@/lib/whatsapp';

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
};

/** Contact details, socials and the legal line. */
export function SiteFooter() {
  return (
    <footer className="border-t border-champagne-200/70 bg-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-14">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-xl bg-chocolate-900 font-display text-lg font-bold text-champagne-300"
            >
              Y
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-chocolate-950">
              {brand.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-chocolate-500">{brand.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-tight text-chocolate-900">Order &amp; contact</h2>
          <a
            href={chatHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-chocolate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-chocolate-900"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {brand.phoneDisplay}
          </a>
          <p className="mt-3 text-xs text-chocolate-500">WhatsApp only — we reply to confirm orders.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-tight text-chocolate-900">Follow</h2>
          <ul className="mt-4 space-y-3">
            {brand.socials.map((social) => {
              const Icon = socialIcons[social.label] ?? WhatsAppIcon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-sm font-medium text-chocolate-600 transition-colors hover:text-chocolate-950"
                  >
                    <Icon className="h-4 w-4 text-champagne-600 transition-transform group-hover:scale-110" />
                    <span>
                      {social.label}: <span className="font-semibold">{social.handle}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="border-t border-champagne-100">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-chocolate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {brand.legalName}</p>
          <p>
            WhatsApp{' '}
            <a href={chatHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-chocolate-600 hover:text-chocolate-900">
              {brand.phoneDisplay}
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
