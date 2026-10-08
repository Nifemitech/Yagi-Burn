import { Container } from '@/components/atoms/Container';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { HoneyDropIcon, KilishiIcon, PepperIcon } from '@/components/atoms/icons';
import { FeatureCard } from '@/components/molecules/FeatureCard';

/** The three pillars: the beef, the glaze, the burn. */
export function FeatureSection() {
  return (
    <section id="product" className="scroll-mt-20 border-t border-champagne-100 bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="What’s inside"
          title={
            <>
              Three things make <span className="italic text-foil">every pack</span> hit.
            </>
          }
          description="No fillers, no fuss — just properly dried beef, a sweet honey glaze and the pepper that made Yagi Burn famous."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<KilishiIcon className="h-6 w-6" />} title="Kilishi">
            Thin-sliced beef, spiced and dried. A classic Northern Nigerian snack.
          </FeatureCard>
          <FeatureCard icon={<HoneyDropIcon className="h-6 w-6" />} title="Honey glaze">
            Brushed on for sweetness that meets the pepper instead of fighting it.
          </FeatureCard>
          <FeatureCard icon={<PepperIcon className="h-6 w-6" />} title="Yagi pepper">
            The spice behind the burn — a slow, warming finish that keeps you reaching for the next
            piece.
          </FeatureCard>
        </div>
      </Container>
    </section>
  );
}
