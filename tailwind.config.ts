import type { Config } from 'tailwindcss';

/**
 * Design tokens — Yagi Burn
 * Primary      : White (canvas)
 * Secondary    : Champagne gold (warmth, premium, honey glaze)
 * Accent       : Chocolate brown (kilishi, depth, CTAs)
 * Typography   : "Birma Sans" (primary, self-hosted when available) with
 *                Hanken Grotesk as the commercial fallback + Fraunces as the
 *                complementary display family.
 */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        champagne: {
          50: '#FDFBF5',
          100: '#FAF3E2',
          200: '#F2E4BE',
          300: '#E7D098',
          400: '#D9B96B',
          500: '#C79C43',
          600: '#A87E32',
          700: '#846029',
          800: '#654822',
          900: '#4F381E',
        },
        chocolate: {
          50: '#FAF6F0',
          100: '#F1E7DA',
          200: '#E0CCB4',
          300: '#C9A988',
          400: '#AE855E',
          500: '#966B47',
          600: '#7C5439',
          700: '#64412E',
          800: '#4A2F21',
          900: '#332016',
          950: '#22140D',
        },
      },
      fontFamily: {
        sans: ['"Birma Sans"', 'var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '72rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(51, 32, 22, 0.04), 0 16px 40px -20px rgba(51, 32, 22, 0.22)',
        cta: '0 12px 28px -12px rgba(74, 47, 33, 0.55)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'ring-pulse': {
          '75%, 100%': { transform: 'scale(1.7)', opacity: '0' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'ring-pulse': 'ring-pulse 2.6s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
