import type { Metadata, Viewport } from 'next';
import { Fraunces, Hanken_Grotesk } from 'next/font/google';
import { brand } from '@/config/brand';
import './globals.css';

/**
 * Primary (Birma Sans) is wired into the Tailwind font stack and picks up
 * automatically once the woff2 files are added to /public/fonts (see globals.css).
 * These Google fonts act as the commercial-use fallback + complementary family.
 */
const sans = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — Spicy honey-glazed kilishi`,
    template: `%s — ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    'kilishi',
    'dried beef',
    'Nigerian snack',
    'spicy kilishi',
    'honey glazed kilishi',
    'buy kilishi Lagos',
    'wholesale kilishi',
  ],
  applicationName: brand.name,
  authors: [{ name: brand.legalName }],
  openGraph: {
    title: `${brand.name} — Spicy honey-glazed kilishi`,
    description: brand.description,
    siteName: brand.name,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${brand.name} — Spicy honey-glazed kilishi`,
    description: brand.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-white font-sans text-chocolate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
