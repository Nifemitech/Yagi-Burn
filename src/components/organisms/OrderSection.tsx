'use client';

import { Container } from '@/components/atoms/Container';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { WhatsAppIcon } from '@/components/atoms/icons';
import { Field, inputStyles } from '@/components/molecules/Field';
import { PackOption } from '@/components/molecules/PackOption';
import { QuantityStepper } from '@/components/molecules/QuantityStepper';
import { StepCard } from '@/components/molecules/StepCard';
import { packs, quantityLimits } from '@/config/catalog';
import { useOrderForm } from '@/hooks/useOrderForm';
import { cn } from '@/lib/utils';

const steps = [
  { step: 1, title: 'Choose your pack', body: 'Pick a pack size and quantity, then add your name and delivery area.' },
  { step: 2, title: 'Send your order', body: 'WhatsApp opens with your order already written out — just hit send.' },
  { step: 3, title: 'We confirm', body: 'We reply to confirm delivery and payment. That’s it.' },
] as const;

/** Order flow: how-it-works steps + the WhatsApp order composer. */
export function OrderSection() {
  const form = useOrderForm();

  return (
    <section
      id="order"
      className="scroll-mt-20 border-t border-champagne-100 bg-gradient-to-b from-champagne-50/70 to-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Order on WhatsApp"
          title={
            <>
              Place <span className="italic text-foil">your</span> order.
            </>
          }
          description="Choose your pack and tell us where to deliver. WhatsApp opens with your order already written out."
        />

        <ol
          id="how-it-works"
          className="mx-auto mt-10 grid max-w-4xl scroll-mt-24 gap-4 sm:grid-cols-3"
        >
          {steps.map((s) => (
            <StepCard key={s.step} step={s.step} title={s.title}>
              {s.body}
            </StepCard>
          ))}
        </ol>

        <form
          onSubmit={form.handleSubmit}
          noValidate
          className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-champagne-200 lg:grid lg:grid-cols-2"
        >
          {/* Left: pack + quantity */}
          <fieldset className="border-b border-champagne-100 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <legend className="text-sm font-bold tracking-tight text-chocolate-800">Pack</legend>
            <div className="mt-3 space-y-3">
              {packs.map((pack) => (
                <PackOption key={pack.id} pack={pack} selected={form.packId === pack.id} onSelect={form.setPackId} />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-champagne-50 px-4 py-3 ring-1 ring-champagne-100">
              <span className="text-sm font-bold tracking-tight text-chocolate-800">Quantity</span>
              <QuantityStepper
                value={form.quantity}
                min={quantityLimits.min}
                max={quantityLimits.max}
                onDecrement={form.decrement}
                onIncrement={form.increment}
              />
            </div>

            {form.subtotalLabel ? (
              <p className="mt-3 text-sm text-chocolate-500">
                Subtotal{' '}
                <span className="font-bold text-chocolate-900">{form.subtotalLabel}</span> — delivery
                cost is confirmed with you on WhatsApp.
              </p>
            ) : (
              <p className="mt-3 text-sm text-chocolate-500">
                Tell us the size you need in the note and we’ll quote you on WhatsApp.
              </p>
            )}
          </fieldset>

          {/* Right: details + submit */}
          <div className="p-6 sm:p-8">
            <div className="space-y-4">
              <Field label="Your name" htmlFor="name" error={form.errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Ada Okafor"
                  value={form.name}
                  onChange={(event) => form.setName(event.target.value)}
                  aria-invalid={Boolean(form.errors.name)}
                  className={cn(inputStyles, form.errors.name && 'border-red-500 focus:border-red-600 focus:ring-red-600')}
                />
              </Field>

              <Field label="Delivery area" htmlFor="area" error={form.errors.area}>
                <input
                  id="area"
                  name="area"
                  type="text"
                  placeholder="e.g. Lekki, Ikeja"
                  value={form.area}
                  onChange={(event) => form.setArea(event.target.value)}
                  aria-invalid={Boolean(form.errors.area)}
                  className={cn(inputStyles, form.errors.area && 'border-red-500 focus:border-red-600 focus:ring-red-600')}
                />
              </Field>

              <Field label="Note" htmlFor="note" hint="optional">
                <textarea
                  id="note"
                  name="note"
                  rows={3}
                  placeholder="Other size, gift, delivery day..."
                  value={form.note}
                  onChange={(event) => form.setNote(event.target.value)}
                  className={cn(inputStyles, 'resize-none')}
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-chocolate-800 px-6 py-4 text-base font-semibold text-white shadow-cta transition-all duration-200 hover:bg-chocolate-900 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send order on WhatsApp
            </button>

            <p className="mt-3 text-center text-xs leading-relaxed text-chocolate-500">
              Delivery cost and payment details are confirmed with you on WhatsApp.
            </p>
          </div>
        </form>
      </Container>
    </section>
  );
}
