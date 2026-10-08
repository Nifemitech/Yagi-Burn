'use client';

import { useId } from 'react';
import { cn } from '@/lib/utils';

interface KilishiPackArtProps {
  /** Weight printed on the badge, e.g. "100G" or "1KG" */
  weight?: string;
  className?: string;
}

/**
 * Hero-grade vector artwork of a Yagi Burn kilishi pouch.
 * Drawn as SVG so the page ships with zero binary assets and never
 * renders a broken image placeholder.
 */
export function KilishiPackArt({ weight = '100G', className }: KilishiPackArtProps) {
  const uid = useId().replace(/[:]/g, '');
  const id = (name: string) => `${uid}-${name}`;

  return (
    <svg
      className={className}
      viewBox="0 0 320 400"
      role="img"
      aria-label={`A pack of Yagi Burn kilishi${weight ? `, ${weight}` : ''}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={id('kraft')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4A2F21" />
          <stop offset="0.55" stopColor="#332016" />
          <stop offset="1" stopColor="#22140D" />
        </linearGradient>
        <linearGradient id={id('gold')} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#F7EFD6" />
          <stop offset="0.4" stopColor="#E7D098" />
          <stop offset="0.62" stopColor="#D9B96B" />
          <stop offset="1" stopColor="#C79C43" />
        </linearGradient>
        <linearGradient id={id('meat')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9A4A2C" />
          <stop offset="1" stopColor="#5E2718" />
        </linearGradient>
        <linearGradient id={id('sheen')} x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.16" />
          <stop offset="0.4" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <clipPath id={id('body')}>
          <rect x="56" y="44" width="208" height="322" rx="28" />
        </clipPath>
      </defs>

      {/* Pouch body */}
      <rect x="56" y="44" width="208" height="322" rx="28" fill={`url(#${id('kraft')})`} />

      <g clipPath={`url(#${id('body')})`}>
        {/* Top zip seal */}
        <rect x="56" y="44" width="208" height="30" fill="#1B0F08" />
        <rect x="56" y="74" width="208" height="2" fill="#654822" opacity="0.6" />
        {Array.from({ length: 9 }).map((_, i) => (
          <rect key={i} x={68 + i * 22} y="54" width="10" height="4" rx="2" fill="#654822" opacity="0.5" />
        ))}

        {/* Bottom fold shadow */}
        <rect x="56" y="336" width="208" height="30" fill="#1B0F08" opacity="0.5" />

        {/* Glossy sheen */}
        <rect x="56" y="44" width="208" height="322" fill={`url(#${id('sheen')})`} />
      </g>

      {/* Gold label */}
      <rect x="82" y="96" width="156" height="222" rx="18" fill={`url(#${id('gold')})`} />
      <rect x="88" y="102" width="144" height="210" rx="13" fill="none" stroke="#846029" strokeWidth="1" opacity="0.5" />

      {/* Wordmark (decorative — the svg carries one descriptive label) */}
      <text
        x="160"
        y="146"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="800"
        fontSize="30"
        letterSpacing="1"
        fill="#332016"
        aria-hidden="true"
      >
        YAGI
      </text>
      <text
        x="160"
        y="176"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="800"
        fontSize="30"
        letterSpacing="6"
        fill="#332016"
        aria-hidden="true"
      >
        BURN
      </text>
      <text
        x="160"
        y="196"
        textAnchor="middle"
        fontFamily="'Hanken Grotesk', sans-serif"
        fontWeight="700"
        fontSize="8.5"
        letterSpacing="2.6"
        fill="#654822"
        aria-hidden="true"
      >
        HONEY-GLAZED KILISHI
      </text>

      {/* Window with kilishi strips */}
      <rect x="98" y="208" width="124" height="88" rx="12" fill="#1B0F08" />
      {[
        { y: 232, dx: 0 },
        { y: 254, dx: 4 },
        { y: 276, dx: -2 },
      ].map(({ y, dx }) => (
        <g key={y}>
          <path
            d={`M108 ${y + dx * 0} q11 -9 22 0 t22 0 t22 0 t22 0`}
            transform={`translate(${dx} 0)`}
            stroke={`url(#${id('meat')})`}
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d={`M112 ${y - 3} q10 -7 20 0 t20 0 t20 0`}
            transform={`translate(${dx} 0)`}
            stroke="#E7D098"
            strokeOpacity="0.45"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      ))}

      {/* Weight badge */}
      {weight ? (
        <g transform="rotate(-8 258 74)" aria-hidden="true">
          <circle cx="258" cy="74" r="30" fill={`url(#${id('gold')})`} stroke="#F7EFD6" strokeWidth="2" />
          <text
            x="258"
            y="80"
            textAnchor="middle"
            fontFamily="'Hanken Grotesk', sans-serif"
            fontWeight="800"
            fontSize="16"
            fill="#332016"
          >
            {weight}
          </text>
        </g>
      ) : null}
    </svg>
  );
}

/** A decorative stack of packs — used in the wholesale band. */
export function KilishiPackStack({ className }: { className?: string }) {
  return (
    <div className={cn('relative aspect-[4/4.2] w-full', className)} aria-hidden="true">
      <KilishiPackArt
        weight="1KG"
        className="absolute left-0 top-6 h-[86%] w-auto rotate-[-10deg] opacity-70 drop-shadow-2xl"
      />
      <KilishiPackArt
        weight="1KG"
        className="absolute right-0 top-2 h-[86%] w-auto rotate-[9deg] opacity-80 drop-shadow-2xl"
      />
      <KilishiPackArt
        weight="1KG"
        className="absolute left-1/2 top-0 h-[92%] w-auto -translate-x-1/2 drop-shadow-2xl"
      />
    </div>
  );
}
