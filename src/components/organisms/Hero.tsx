import { ButtonLink } from '@/components/atoms/Button';
import { Container } from '@/components/atoms/Container';
import { CheckIcon, HoneyDropIcon, PepperIcon, WhatsAppIcon } from '@/components/atoms/icons';
import { KilishiPackArt } from '@/components/molecules/KilishiPackArt';
import { defaultPack } from '@/config/catalog';
import { chatHref } from '@/lib/whatsapp';

const promises = [
  'Thin-sliced & slow-dried',
  'Brushed with real honey glaze',
  'Made with Yagi pepper',
] as const;

/** Above-the-fold: promise, price anchor and both CTAs. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-20">
      {/* Warm gold glow behind the pack */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-15%] h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-champagne-200 via-champagne-100 to-transparent opacity-70 blur-3xl"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-champagne-500" />
            Spicy honey-glazed kilishi
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.75rem,11vw,4.75rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-chocolate-950">
            Sweet glaze.{' '}
            <span className="italic text-foil">Real heat.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-chocolate-600 sm:text-lg">
            Thin-sliced, spiced dried beef with a sweet honey glaze and a slow pepper burn. Order
            straight on WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            
            <ButtonLink
              href={chatHref}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] text-white" />
              Message us on WhatsApp
            </ButtonLink>
          </div>

          <p className="mt-4 text-sm font-medium text-chocolate-500">
            {defaultPack.name} from {defaultPack.priceLabel} · Delivery &amp; payment confirmed on
            WhatsApp
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-2 text-sm font-semibold text-chocolate-700">
                <CheckIcon className="h-4 w-4 shrink-0 text-champagne-600" />
                {promise}
              </li>
            ))}
          </ul>
        </div>

        {/* Pack artwork with floating chips */}
        <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-[23rem] lg:max-w-none">
          <div className="relative aspect-[4/4.5]">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-0 top-10 rounded-[3rem] bg-gradient-to-b from-champagne-100 via-champagne-50 to-champagne-200/40"
            />
            <KilishiPackArt
              weight={defaultPack.weightLabel}
              className="relative mx-auto h-full w-full animate-float-slow drop-shadow-2xl"
            />

            <div className="absolute -left-1 top-8 flex -rotate-3 items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-chocolate-800 shadow-card ring-1 ring-champagne-200 sm:-left-7">
              <HoneyDropIcon className="h-3.5 w-3.5 text-champagne-600" />
              Real honey glaze
            </div>

            <div className="absolute -right-1 bottom-24 flex rotate-2 items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-chocolate-800 shadow-card ring-1 ring-champagne-200 sm:-right-6">
              <PepperIcon className="h-3.5 w-3.5 text-champagne-600" />
              Slow pepper burn
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-chocolate-900 px-4 py-2 text-xs font-bold text-champagne-100 shadow-card">
              {defaultPack.name} · {defaultPack.priceLabel}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
