# Yagi Burn — Landing Page

A mobile-first landing page for **Yagi Burn Ventures** (spicy honey-glazed kilishi) with twin calls-to-action: **retail orders** and **wholesale slots**, both funnelling into WhatsApp with a pre-written message.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · React 19

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

---

## Design language

| Token | Value | Role |
| --- | --- | --- |
| Primary | `white` / warm whites (`champagne-50`) | Canvas, breathing room |
| Secondary | Champagne gold (`champagne-100 → 900`) | Honey glaze, warmth, premium accents |
| Accent | Chocolate brown (`chocolate-800/900/950`) | Kilishi depth, CTAs, wholesale band |

**Typography**

- **Primary:** *Birma Sans* — wired first in the Tailwind font stack (`tailwind.config.ts`).
  Birma Sans is a desktop font with no commercial web-CDN build, so it is
  self-host-ready: drop `BirmaSans-*.woff2` into `public/fonts/` and uncomment
  the `@font-face` block in `src/app/globals.css`. It takes over automatically.
- **Fallback (active by default):** *Hanken Grotesk* — a commercially-licensed
  grotesque with the same clean, modern proportions.
- **Complementary display family:** *Fraunces* — a warm, high-personality serif
  used for headlines, prices and the italic gold-foil emphasis words.

Motion respects `prefers-reduced-motion`; all interactive elements have visible
`focus-visible` rings.

---

## Project structure (atomic design + separation of concerns)

```
src/
├── app/                    # Next.js app shell: layout, page, globals, favicon
│   ├── layout.tsx          # Fonts, SEO metadata, viewport/theme colour
│   ├── page.tsx            # Composes sections + Product JSON-LD
│   ├── globals.css         # Tailwind layers, @font-face hooks, base styles
│   └── icon.svg
├── config/                 # 👈 all business data lives here (no hardcoding in UI)
│   ├── brand.ts            # Name, WhatsApp number, phone, socials, chat openers
│   └── catalog.ts          # Packs, pricing, wholesale terms, quantity limits
├── lib/                    # Pure logic, no React
│   ├── whatsapp.ts         # wa.me link builder + order-message composer
│   └── utils.ts            # cn() class helper, naira formatter
├── hooks/
│   └── useOrderForm.ts     # All order-form state, validation, live WA link
└── components/
    ├── atoms/              # Smallest reusable units
    │   ├── Container.tsx   # Page gutter (single source of horizontal padding)
    │   ├── Button.tsx      # Button + ButtonLink, 4 variants × 3 sizes
    │   ├── SectionHeading.tsx
    │   └── icons.tsx       # WhatsApp, Instagram, TikTok, product line icons
    ├── molecules/          # Small composed units
    │   ├── KilishiPackArt.tsx   # Vector pack artwork (+ wholesale stack)
    │   ├── FeatureCard.tsx
    │   ├── StepCard.tsx
    │   ├── PackOption.tsx       # Accessible radio-card
    │   ├── QuantityStepper.tsx
    │   └── Field.tsx            # Label + input + error pattern
    └── organisms/          # Full sections
        ├── SiteHeader.tsx
        ├── Hero.tsx
        ├── FeatureSection.tsx
        ├── OrderSection.tsx    # Steps + WhatsApp order composer
        ├── WholesaleSection.tsx
        ├── SiteFooter.tsx
        └── FloatingWhatsApp.tsx
```

**Why this shape**

- **Separation of concerns** — components render; `config/` holds business
  facts; `lib/` holds pure logic; `hooks/` holds client state. Changing the
  phone number or a price is a one-line edit in `src/config/`.
- **Reusability** — one `Button`, one `SectionHeading`, one `Field` power every
  section; variants keep them consistent.
- **Server-first** — only `OrderSection` (via `useOrderForm`) and the SVG art
  are client components; the rest statically render.
- **Zero binary assets** — the pack artwork is hand-drawn SVG, so nothing can
  404. Swap in real product photos later by replacing `KilishiPackArt`.

---

## The conversion flow

1. **Retail** — hero CTA scrolls to the order form; the form builds a
   copy-ready WhatsApp message (pack, quantity, name, area, note, subtotal)
   and opens `wa.me` with it pre-filled.
2. **Wholesale** — dedicated chocolate band with the reseller maths
   (₦29,000/kg vs ₦32,000 retail → ₦3,000 saving) and a CTA that opens
   WhatsApp with a wholesale-specific opener.
3. **Safety net** — a floating WhatsApp button is always one thumb-tap away.

## Editing key things

| What | Where |
| --- | --- |
| WhatsApp number / phone / socials | `src/config/brand.ts` |
| Pack prices & sizes | `src/config/catalog.ts` |
| Wholesale terms | `src/config/catalog.ts` → `wholesale` |
| WhatsApp message wording | `src/config/brand.ts` + `src/lib/whatsapp.ts` |
| Colours / fonts / shadows | `tailwind.config.ts` |
| Enable Birma Sans | `src/app/globals.css` → uncomment `@font-face` |
| SEO title & description | `src/app/layout.tsx` |

---

## Environments & deployment

Deployment runs on **Vercel** with a **branch → environment** strategy: the same
codebase is built once per branch, so no per-environment config files are needed.

| Branch | Environment | Vercel deployment | URL |
| --- | --- | --- | --- |
| `main` | Production | Production | `yagiburn.vercel.app` |
| `staging` | Staging | Preview | auto-generated preview URL |
| `develop` | Development | Preview | auto-generated preview URL |
| `feature/*` | Ephemeral | Preview per push / PR | auto-generated |

**How it works**

- `main` is the **Production Branch** (Vercel → Settings → Git).
- Every other branch automatically gets its own **Preview deployment** — that
  is your staging and development environment, no extra setup required.
- To give staging a stable URL, promote it in Vercel → Settings → Environments
  (add a *staging* environment bound to the `staging` branch, e.g.
  `staging-yagiburn.vercel.app`).

**Promotion flow**

```
feature/<name>  →  develop  →  staging  →  main
   (build it)      (test it)   (verify)    (release)
```

**Node version** — pinned in `.nvmrc` (`24`) and `package.json#engines`
(`>=20.9.0`); Vercel reads `engines` automatically.

**Environment variables** — none are required today; all content lives in
`src/config/`. When secrets are added later, define them per environment in
Vercel → Settings → Environment Variables and mirror the keys in a local
`.env.local` (git-ignored).

### First deploy of this app

The Vercel project must point at this repository with **Framework Preset =
Next.js**, **Root Directory = repository root**, and **Output Directory
cleared** (the previous deployment served a static `index.pdf`).
