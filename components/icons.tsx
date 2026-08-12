/**
 * Every icon on the site, drawn here at one weight on one 24-unit grid.
 *
 * The line icons share a 1.75 stroke, round caps and round joins, so they read
 * as one set. The three network marks are filled glyphs, because that is what
 * those marks are; drawing them as outlines to match would make them wrong.
 */

type IconProps = {
  size?: number;
  className?: string;
};

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function frame(size: number, className?: string) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
    className,
  };
}

export function WhatsAppIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...frame(size, className)}>
      <path
        fill="currentColor"
        d="M12.04 2.5a9.4 9.4 0 0 0-8.1 14.14L2.5 21.5l4.98-1.4A9.4 9.4 0 1 0 12.04 2.5Zm0 1.72a7.68 7.68 0 1 1-3.9 14.3l-.28-.17-2.95.83.84-2.88-.18-.29a7.68 7.68 0 0 1 6.47-11.8Zm-3.5 3.6c-.18 0-.47.07-.71.34-.25.27-.94.92-.94 2.24 0 1.32.96 2.6 1.1 2.78.13.18 1.86 2.96 4.6 4.03 2.27.9 2.73.72 3.23.67.5-.04 1.6-.65 1.83-1.29.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.53-.31-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.6.13-.19.28-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.8-.72-1.35-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.6-1.46-.83-2-.22-.53-.44-.46-.6-.46l-.5-.02Z"
      />
    </svg>
  );
}

export function PhoneIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...frame(size, className)}>
      <path
        {...line}
        d="M5.5 3.5h3l1.5 3.75-2 1.25a11.5 11.5 0 0 0 5.5 5.5l1.25-2L18.5 13.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z"
      />
    </svg>
  );
}

export function MailIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...frame(size, className)}>
      <rect {...line} x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path {...line} d="m3.8 6.6 7.4 5.3a1.4 1.4 0 0 0 1.6 0l7.4-5.3" />
    </svg>
  );
}

export function PinIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...frame(size, className)}>
      <path {...line} d="M12 21c4-4.2 6-7.3 6-9.8A6 6 0 0 0 6 11.2c0 2.5 2 5.6 6 9.8Z" />
      <circle {...line} cx="12" cy="11" r="2.25" />
    </svg>
  );
}

export function ClockIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...frame(size, className)}>
      <circle {...line} cx="12" cy="12" r="8.5" />
      <path {...line} d="M12 7.25V12l3 1.9" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...frame(size, className)}>
      <rect {...line} x="3.5" y="3.5" width="17" height="17" rx="4.75" />
      <circle {...line} cx="12" cy="12" r="3.9" />
      <circle cx="16.85" cy="7.15" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ size = 20, className }: IconProps) {
  return (
    <svg {...frame(size, className)}>
      <path
        fill="currentColor"
        d="M13.6 2.5h2.62c.16 1.3.74 2.4 1.66 3.15a4.9 4.9 0 0 0 2.62 1.06v2.65a7.5 7.5 0 0 1-4.15-1.42v6.13a5.98 5.98 0 1 1-5.98-5.98c.28 0 .56.02.83.06v2.72a3.3 3.3 0 1 0 2.4 3.2V2.5Z"
      />
    </svg>
  );
}

export function StarIcon({ size = 16, className }: IconProps) {
  return (
    <svg {...frame(size, className)}>
      <path
        fill="currentColor"
        d="m12 3.4 2.55 5.5 5.95.72-4.4 4.1 1.17 5.88L12 16.72 6.73 19.6l1.17-5.88-4.4-4.1 5.95-.72L12 3.4Z"
      />
    </svg>
  );
}

/** The two arrows on the comparison carriage. */
export function CarriageIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...frame(size, className)}>
      <path {...line} d="M10 7.5 5.5 12l4.5 4.5M14 7.5l4.5 4.5-4.5 4.5" />
    </svg>
  );
}
