import { ButtonLink } from '@/components/atoms/Button';
import { Container } from '@/components/atoms/Container';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { CheckIcon } from '@/components/atoms/icons';
import { KilishiPackStack } from '@/components/molecules/KilishiPackArt';
import { wholesale } from '@/config/catalog';
import { wholesaleHref } from '@/lib/whatsapp';

const benefits = [
  `${wholesale.pricePerKgLabel} per 1kg — ${wholesale.savingPerKgLabel} below the ${wholesale.retailPerKgLabel} retail price`,
  'Reserve your slot straight on WhatsApp',
  'Ask about the quantities your customers need',
] as const;

/** Dark chocolate band dedicated to the wholesale / reseller CTA. */
export function WholesaleSection() {
  return (
    <section
      id="wholesale"
      className="relative scroll-mt-20 overflow-hidden bg-chocolate-950 py-16 sm:py-20 lg:py-24"
    >
      {/* Gold shimmer accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-gradient-to-br from-champagne-600/20 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-champagne-500/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            tone="inverse"
            eyebrow="For resellers"
            title={
              <>
                Wholesale slots are <span className="italic text-foil-inverse">open.</span>
              </>
            }
            description="Selling kilishi to your own customers? Message us to reserve a slot and ask about quantities."
          />

          <ul className="mt-8 space-y-3.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-[15px] leading-relaxed text-champagne-100">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-champagne-400" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="font-display text-4xl font-semibold tracking-tight text-champagne-100 sm:text-5xl">
              {wholesale.pricePerKgLabel}
              <span className="ml-2 text-base font-medium text-champagne-400 sm:text-lg">per 1kg</span>
            </p>
            <ButtonLink
              href={wholesaleHref}
              variant="gold"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:ml-auto"
            >
              Ask about wholesale
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 inset-y-8 rounded-[3rem] bg-gradient-to-b from-champagne-500/15 to-champagne-600/5 blur-sm"
          />
          <KilishiPackStack className="relative" />
        </div>
      </Container>
    </section>
  );
}
