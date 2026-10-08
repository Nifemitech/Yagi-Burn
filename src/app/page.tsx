import { FeatureSection } from '@/components/organisms/FeatureSection';
import { FloatingWhatsApp } from '@/components/organisms/FloatingWhatsApp';
import { Hero } from '@/components/organisms/Hero';
import { OrderSection } from '@/components/organisms/OrderSection';
import { SiteFooter } from '@/components/organisms/SiteFooter';
import { SiteHeader } from '@/components/organisms/SiteHeader';
import { WholesaleSection } from '@/components/organisms/WholesaleSection';
import { brand } from '@/config/brand';
import { packs } from '@/config/catalog';

/** Product + offers structured data for search engines. */
const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Yagi Burn Kilishi',
  description: brand.description,
  brand: { '@type': 'Brand', name: brand.name },
  offers: packs
    .filter((pack) => pack.price !== null)
    .map((pack) => ({
      '@type': 'Offer',
      name: pack.name,
      price: pack.price,
      priceCurrency: 'NGN',
      availability: 'https://schema.org/InStock',
    })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <FeatureSection />
        <OrderSection />
        <WholesaleSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
