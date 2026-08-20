import type { ReactElement, SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { name: string; size?: number };

// A library of hand-built line glyphs. stroke = currentColor so callers tint via text color.
const paths: Record<string, ReactElement> = {
  // ---- brand ----
  "house-roof": (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  logo: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.2 9.4V20h13.6V9.4" />
      <path d="M9.4 20v-6.2h5.2V20" />
      <circle cx="12" cy="11.6" r="1.4" />
    </>
  ),
  // ---- service glyphs ----
  "magnifier-house": (
    <>
      <circle cx="10.5" cy="10.5" r="6.2" />
      <path d="m20 20-4.6-4.6" />
      <path d="M8 11.4 10.5 9l2.5 2.4" />
      <path d="M8.8 10.8V14h3.4v-3.2" />
    </>
  ),
  family: (
    <>
      <circle cx="7" cy="7.5" r="2.1" />
      <circle cx="17" cy="7.5" r="2.1" />
      <circle cx="12" cy="9" r="1.6" />
      <path d="M3.5 19v-3.2a3 3 0 0 1 3-3h1M20.5 19v-3.2a3 3 0 0 0-3-3h-1M9.5 19v-2.4a2.5 2.5 0 0 1 5 0V19" />
    </>
  ),
  "map-pin-grid": (
    <>
      <path d="M3 7.5 9 5l6 2.5L21 5" />
      <path d="M3 7.5V16l6 2.5M9 7.5V18.5M15 7.5V18.5M21 5v8.5" />
      <path d="M12 9.5a2.2 2.2 0 0 1 2.2 2.2c0 1.7-2.2 3.8-2.2 3.8s-2.2-2.1-2.2-3.8A2.2 2.2 0 0 1 12 9.5Z" />
    </>
  ),
  "compass-pin": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.2 8.8-1.6 4.8-4.8 1.6 1.6-4.8Z" />
      <circle cx="12" cy="12" r="0.8" />
    </>
  ),
  "coins-stack": (
    <>
      <ellipse cx="8.5" cy="7" rx="4.5" ry="1.8" />
      <path d="M4 7v3.2c0 1 2 1.8 4.5 1.8S13 11.2 13 10.2V7" />
      <path d="M4 10.2v3.2c0 1 2 1.8 4.5 1.8S13 14.4 13 13.4v-3.2" />
      <ellipse cx="15.5" cy="11" rx="4.5" ry="1.8" />
      <path d="M11 11v3.2c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8V11" />
      <path d="M11 14.2v3.2c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8v-3.2" />
    </>
  ),
  "doc-seal": (
    <>
      <path d="M5.6 4.2h7.2l4 4v5"/>
      <path d="M12.8 4.2v4h4" />
      <path d="M8.2 10.4h5M8.2 13h3.4" />
      <circle cx="15" cy="16.4" r="3" />
      <path d="M13 18.7 12.2 21l2.8-1.3 2.8 1.3-.8-2.3" />
    </>
  ),
  "shield-alert": (
    <>
      <path d="M12 3 5 5.5v5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5v-5Z" />
      <path d="M12 8.5v4M12 15.2v.2" />
    </>
  ),
  scales: (
    <>
      <path d="M12 4.2v15.6M7.5 19.8h9" />
      <path d="M5 7.6h14" />
      <path d="M5 7.6 2.8 13a2.9 2.9 0 0 0 5.8 0Z" />
      <path d="M19 7.6 21.2 13a2.9 2.9 0 0 1-5.8 0Z" />
      <path d="M12 5.4 5 7.6M12 5.4l7 2.2" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 9h3l3 3 2-1.5L13 12l2-1 3 2h3" />
      <path d="M3 9v7h3M21 13v3h-3" />
      <path d="m9 12 2 2M11 11l2 2M13 12l1.5 1.5" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <circle cx="12" cy="14" r="1.6" />
      <path d="M12 8v4.4M10.7 15 6.5 16.7M13.3 15l4.2 1.7" />
    </>
  ),
  "chart-up": (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="m7 15 3.5-3.5 2.5 2.5L20 7" />
      <path d="M20 11V7h-4" />
    </>
  ),
  "building-uplift": (
    <>
      <path d="M3.6 20.4V8.2L10 4l6.4 4.2v12.2" />
      <path d="M8 20.4v-4.2h4v4.2" />
      <path d="M8 10.6h.01M12 10.6h.01M8 13.6h.01M12 13.6h.01" />
      <path d="M18.4 20.4V9.6l2-1.4v12.2" />
    </>
  ),
  // ---- process glyphs ----
  "chat-user": (
    <>
      <path d="M5 5.2h14a1.8 1.8 0 0 1 1.8 1.8v7.6a1.8 1.8 0 0 1-1.8 1.8h-6.4L9 19.6v-3.2H5a1.8 1.8 0 0 1-1.8-1.8V7A1.8 1.8 0 0 1 5 5.2Z" />
      <circle cx="12" cy="9.4" r="1.8" />
      <path d="M9.1 13.8a3.2 3.2 0 0 1 5.8 0" />
    </>
  ),
  "clipboard-check": (
    <>
      <rect x="5" y="5.4" width="14" height="15.2" rx="2" />
      <rect x="9" y="3.4" width="6" height="3.6" rx="1.2" />
      <path d="m9.2 13.4 2.2 2.2 4.4-4.4" />
    </>
  ),
  "magnifier-fingerprint": (
    <>
      <circle cx="10.5" cy="10.5" r="6.2" />
      <path d="m20 20-4.6-4.6" />
      <path d="M8 10.5a2.5 2.5 0 0 1 5 0M9.3 12.5a1.3 1.3 0 0 0 2.4 0M10.5 8.2v.01" />
    </>
  ),
  "chart-doc": (
    <>
      <path d="M6 3h8l4 4v14H6Z" />
      <path d="M14 3v4h4" />
      <path d="M9 16v-3M12 16v-5M15 16v-2" />
    </>
  ),
  "doc-pen": (
    <>
      <path d="M6 3h8l4 4v14H6Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h3M9 15h2" />
      <path d="m16 12 3 3-3 1-1-1Z" />
    </>
  ),
  "scales-user": (
    <>
      <circle cx="12" cy="4.6" r="2.1" />
      <path d="M12 6.7v3.9M6.4 10.6h11.2" />
      <path d="M6.4 10.6 4.4 15.2a2.5 2.5 0 0 0 4 0Z" />
      <path d="M17.6 10.6 19.6 15.2a2.5 2.5 0 0 1-4 0Z" />
      <path d="M8 19.6h8" />
    </>
  ),
  gavel: (
    <>
      <rect x="7" y="3.6" width="10" height="4.4" rx="1.5" />
      <path d="M12 8v8" />
      <rect x="5" y="16" width="14" height="4.4" rx="1.5" />
    </>
  ),
  "key-house": (
    <>
      <path d="M3.4 10.6 9.6 5l6.2 5.6" />
      <path d="M5.4 9.6v8h8" />
      <circle cx="16.2" cy="14.6" r="2.8" />
      <path d="M18.2 16.6 20.6 19" />
    </>
  ),
  // ---- utility ----
  phone: <path d="M6.5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 6.7 2 2 0 0 1 6.5 4.5Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  "chevron-left": <path d="m15 6-6 6 6 6" />,
  "chevron-right": <path d="m9 6 6 6-6 6" />,
  quote: <path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3H4M20 7h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3h-3" />,
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.5 8c.3-.7.7-.7 1-.7h.4c.2 0 .4 0 .6.5l.8 1.8c.1.2 0 .4-.1.6l-.4.5c-.2.2-.3.3-.1.7a4.5 4.5 0 0 0 2 1.8c.4.2.5.1.7-.1l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.4 0 .4-.2 1.2-.7 1.5-.5.3-1.3.5-2.4.2a7 7 0 0 1-4.4-4c-.3-.8-.3-1.6 0-2.3Z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </>
  ),
  tiktok: (
    <>
      <path d="M15 4c.5 2.3 2 3.8 4 4v3c-1.5 0-2.9-.5-4-1.3V15a5 5 0 1 1-5-5c.3 0 .7 0 1 .1v3.1a2 2 0 1 0 1.4 1.9V4Z" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  star: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9Z" />,
  seal: (
    <>
      <circle cx="12" cy="9.8" r="6.6" />
      <path d="m8.6 9.6 2.4 2.4 4.4-4.4" />
      <path d="m8.4 15.4-1.6 5.2L12 18.4l5.2 2.2-1.6-5.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 2.5 14.7 0 17M12 3.5c-2.5 2.3-2.5 14.7 0 17" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v2" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="2.4" />
      <circle cx="16.5" cy="9" r="2" />
      <path d="M4 19v-1.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4V19M15 13.5a3.5 3.5 0 0 1 5 3.2V19" />
    </>
  ),
};

export function Icon({ name, size = 24, ...rest }: P) {
  const node = paths[name] ?? paths["house-roof"];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-icon={name}
      {...rest}
    >
      {node}
    </svg>
  );
}

export const ICON_NAMES = Object.keys(paths);
