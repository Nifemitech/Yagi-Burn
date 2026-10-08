import { cn } from '@/lib/utils';

interface IconProps {
  className?: string;
}

const baseProps = {
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor' as const,
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** WhatsApp glyph (filled) */
export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.16-.18.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.18-1.41-.08-.13-.28-.2-.58-.35M12.05 21.8h-.01c-1.78 0-3.53-.48-5.03-1.38l-.36-.22-3.74.99 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 2h-3.3v14.1a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .8.1v-3.3a6 6 0 1 0 5.2 6V8.6a7.4 7.4 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.4V2Z" />
    </svg>
  );
}

/** Line icon: layered kilishi strips */
export function KilishiIcon({ className }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden="true">
      <path d="M3 8.5c1.8-2.2 3.6 1.4 5.4 0s3.8-2.5 5.6 0 3.6-1 4.6-.5" />
      <path d="M3 13.5c1.8-2.2 3.6 1.4 5.4 0s3.8-2.5 5.6 0 3.6-1 4.6-.5" />
      <path d="M4.5 18.5c1.5-1.8 3 1 4.5 0s3-1.8 4.5 0 3-.9 3.9-.4" />
    </svg>
  );
}

/** Line icon: honey drop */
export function HoneyDropIcon({ className }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden="true">
      <path d="M12 3.5c3 3.9 5.5 6.7 5.5 9.5a5.5 5.5 0 1 1-11 0c0-2.8 2.5-5.6 5.5-9.5Z" />
      <path d="M9.6 13.8a2.6 2.6 0 0 0 2.4 2.7" />
    </svg>
  );
}

/** Line icon: yagi pepper */
export function PepperIcon({ className }: IconProps) {
  return (
    <svg className={className} {...baseProps} aria-hidden="true">
      <path d="M14.6 8.6c2.8 0 4.9 2.4 4.9 5.5 0 3.6-3 6.4-7 6.4-2.8 0-5-1.4-5-3.3 0-1.6 1.3-2.7 2.8-2.7 3.6 0 6.1-2.4 4.3-5.9Z" />
      <path d="M14.6 8.6c.3-2 1.5-3.2 3.5-3.4" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} {...baseProps} strokeWidth={2.2} aria-hidden="true">
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  );
}
