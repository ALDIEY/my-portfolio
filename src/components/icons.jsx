const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconGear({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 3.5v2.4M12 18.1v2.4M20.5 12h-2.4M5.9 12H3.5M17.66 6.34l-1.7 1.7M8.04 15.96l-1.7 1.7M17.66 17.66l-1.7-1.7M8.04 8.04l-1.7-1.7" />
    </svg>
  );
}

export function IconTerminalCheck({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M7 10l2.2 2.2L7 14.4M12.5 15h4.5" />
    </svg>
  );
}

export function IconCloud({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M7.5 17.5a4 4 0 0 1-.7-7.94 5 5 0 0 1 9.72-1.6 4.25 4.25 0 0 1 1.48 8.24" />
      <path d="M7.5 17.5h9.75" />
    </svg>
  );
}

export function IconRadar({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" opacity="0.55" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 12L17 7.5" />
    </svg>
  );
}

export function IconRocket({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5c2.4 1.6 3.9 4.4 3.9 7.9 0 2-.6 3.7-1.4 5l-2.5 2-2.5-2c-.8-1.3-1.4-3-1.4-5 0-3.5 1.5-6.3 3.9-7.9z" />
      <circle cx="12" cy="10.5" r="1.5" />
      <path d="M9.3 14.3l-2.3.9.4-2.5M14.7 14.3l2.3.9-.4-2.5M10.2 18.4v2.1M13.8 18.4v2.1" />
    </svg>
  );
}

export function IconMail({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function IconLinkedin({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M7.8 10.2v6M7.8 7.7v.01M12 16.2v-3.6c0-1.4 1-2.3 2.1-2.3 1.2 0 1.9.9 1.9 2.3v3.6M12 12.6v3.6" />
    </svg>
  );
}

export function IconGithub({ className = "w-5 h-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5 0 3.8 2.4 6.9 5.7 8-.04-.6-.08-1.6.02-2.3-.24-.05-1.6-.7-1.9-1.5-.28-.7-.9-.9-1.2-1-.1-.1-.5-.3-.02-.3.5 0 .9.5 1 .7.6.9 1.5.7 1.9.5.05-.4.2-.7.4-.9-1.9-.2-3.5-1-3.5-3.4 0-.8.3-1.4.7-1.9-.07-.2-.3-.9.07-1.9 0 0 .6-.2 1.9.7a6.6 6.6 0 0 1 3.4 0c1.3-.9 1.9-.7 1.9-.7.4 1 .14 1.7.07 1.9.4.5.7 1.1.7 1.9 0 2.4-1.6 3.2-3.5 3.4.3.3.5.8.5 1.5v2.2c3.3-1.1 5.7-4.2 5.7-8 0-4.7-3.8-8.5-8.5-8.5z" />
    </svg>
  );
}

export const SKILL_ICONS = {
  web: IconTerminalCheck,
  api: IconCloud,
  mobile: IconRocket,
  infra: IconGear,
};
