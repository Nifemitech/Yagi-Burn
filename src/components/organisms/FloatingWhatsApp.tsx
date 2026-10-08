import { WhatsAppIcon } from '@/components/atoms/icons';
import { chatHref } from '@/lib/whatsapp';

/**
 * Always-visible WhatsApp action, pinned above the fold on mobile.
 * Uses the site's chocolate/gold palette to stay on-brand.
 */
export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact">
    <a
      href={chatHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Yagi Burn on WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-50 flex items-center gap-2.5 rounded-full bg-chocolate-900 py-3 pl-3.5 pr-4 text-sm font-bold text-champagne-100 shadow-[0_16px_40px_-12px_rgba(34,20,13,0.7)] ring-1 ring-champagne-400/40 transition-all duration-200 hover:bg-chocolate-800 active:scale-95"
    >
      <span aria-hidden="true" className="relative grid h-6 w-6 place-items-center">
        <span className="absolute inset-0 animate-ring-pulse rounded-full bg-champagne-400/40" />
        <WhatsAppIcon className="relative h-5 w-5 text-champagne-300" />
      </span>
      WhatsApp
    </a>
    </aside>
  );
}
