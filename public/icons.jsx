/* global React */
// Custom 1.5px stroke line icons — original drawings, not from any icon set
const Icon = ({ name, size = 22, stroke = 1.5 }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "phone":
      return (
        <svg {...props}>
          <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L14 12.5 18 14v3a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z" />
          <path d="M16 3a5 5 0 0 1 5 5" opacity=".5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...props}>
          <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
          <circle cx="9" cy="12" r=".6" fill="currentColor" />
          <circle cx="13" cy="12" r=".6" fill="currentColor" />
          <circle cx="17" cy="12" r=".6" fill="currentColor" />
        </svg>
      );
    case "star":
      return (
        <svg {...props}>
          <path d="m12 3 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.4 6.8 19.2l1-5.9L3.5 9.2l5.9-.8L12 3Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...props}>
          <path d="M5 19c8 0 14-6 14-14-7 0-13 4-14 11-1-3-1-5 0-8" />
          <path d="M5 19c0-5 4-10 9-12" opacity=".5" />
        </svg>
      );
    case "flow":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="6" height="6" rx="1.5" />
          <rect x="15" y="15" width="6" height="6" rx="1.5" />
          <rect x="15" y="3" width="6" height="6" rx="1.5" />
          <path d="M9 6h6M18 9v6M15 18H9a3 3 0 0 1-3-3V9" opacity=".7" />
        </svg>
      );
    case "edit":
      return (
        <svg {...props}>
          <path d="M4 20h4l11-11-4-4L4 16v4Z" />
          <path d="m13.5 6.5 4 4" opacity=".6" />
          <path d="M14 20h6" opacity=".5" />
        </svg>
      );
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="8" ry="2.5" />
          <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
          <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" opacity=".7" />
        </svg>
      );
    case "headset":
      return (
        <svg {...props}>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <path d="M20 14v3a3 3 0 0 1-3 3h-1v-6h2a2 2 0 0 1 2 2Z" />
          <path d="M4 14v3a3 3 0 0 0 3 3h1v-6H6a2 2 0 0 0-2 2Z" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...props} width={size * 0.8} height={size * 0.8}>
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      );
    case "check":
      return (
        <svg {...props} width={16} height={16}>
          <path d="m4 12 5 5L20 6" />
        </svg>
      );
    case "spark":
      return (
        <svg {...props}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...props}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props} width={14} height={14} stroke="currentColor">
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "trend":
      return (
        <svg {...props}>
          <path d="M3 17 9 11l4 4 8-8" />
          <path d="M14 4h7v7" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="13" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M2 12h20" opacity=".5" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <circle cx="9" cy="7" r="3" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <circle cx="17" cy="7" r="2.5" opacity=".6" />
          <path d="M21 21v-2a3 3 0 0 0-2-2.8" opacity=".6" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...props}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "pound":
      return (
        <svg {...props}>
          <path d="M7 20h10M8 14h6M9 8a3 3 0 0 1 6 0c0 3-2 6-4 12" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" opacity=".6" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "zap":
      return (
        <svg {...props}>
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
      );
    case "cookie":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="8" cy="9" r="1" fill="currentColor" />
          <circle cx="14" cy="8" r="1" fill="currentColor" />
          <circle cx="10" cy="14" r="1" fill="currentColor" />
          <circle cx="15" cy="13" r="1" fill="currentColor" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...props}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
        </svg>
      );
    case "smile":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" />
        </svg>
      );
    case "scissors":
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "utensils":
      return (
        <svg {...props}>
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      );
    case "dumbbell":
      return (
        <svg {...props}>
          <path d="M6.5 6.5h11M6.5 17.5h11" />
          <rect x="2" y="5" width="4.5" height="14" rx="1" />
          <rect x="17.5" y="5" width="4.5" height="14" rx="1" />
          <path d="M12 5v14" />
        </svg>
      );
    case "car":
      return (
        <svg {...props}>
          <path d="M5 17h14v-5l-2-6H7L5 12v5Z" />
          <circle cx="7.5" cy="17" r="2" />
          <circle cx="16.5" cy="17" r="2" />
          <path d="M5 12h14" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M3 12l9-8 9 8" />
          <path d="M5 10v10a1 1 0 0 0 1 1h3v-5h6v5h3a1 1 0 0 0 1-1V10" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M12 12h.01" strokeWidth="2" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    default:
      return null;
  }
};

const Logo = ({ size = 18 }) => (
  <span className="logo" style={{ fontSize: size }}>
    Fisher<span className="digital">Digital</span>
  </span>
);

// Brand logos for integration banner — simplified SVG marks
const BrandLogo = ({ name, height = 28 }) => {
  const h = height;
  switch (name) {
    case "Google":
      return (
        <svg height={h} viewBox="0 0 74 24" fill="none">
          <path d="M9.24 18.48c-4.56 0-8.28-3.48-8.28-8.04S4.68 2.4 9.24 2.4c2.52 0 4.32.96 5.64 2.22l-1.59 1.59c-.96-.9-2.26-1.6-4.05-1.6-3.31 0-5.9 2.67-5.9 5.83s2.59 5.83 5.9 5.83c2.15 0 3.37-.86 4.15-1.65.64-.64 1.05-1.56 1.21-2.82H9.24V9.6h7.76c.08.42.12.93.12 1.48 0 1.78-.49 3.98-2.06 5.55-1.53 1.6-3.48 2.45-5.82 2.45z" fill="#4285F4"/>
          <path d="M25.14 7.98c-3.15 0-5.72 2.4-5.72 5.7 0 3.28 2.57 5.7 5.72 5.7s5.72-2.42 5.72-5.7c0-3.3-2.57-5.7-5.72-5.7zm0 9.16c-1.73 0-3.22-1.42-3.22-3.46 0-2.06 1.49-3.46 3.22-3.46s3.22 1.4 3.22 3.46c0 2.04-1.49 3.46-3.22 3.46z" fill="#EA4335"/>
          <path d="M39.14 7.98c-3.15 0-5.72 2.4-5.72 5.7 0 3.28 2.57 5.7 5.72 5.7s5.72-2.42 5.72-5.7c0-3.3-2.57-5.7-5.72-5.7zm0 9.16c-1.73 0-3.22-1.42-3.22-3.46 0-2.06 1.49-3.46 3.22-3.46s3.22 1.4 3.22 3.46c0 2.04-1.49 3.46-3.22 3.46z" fill="#FBBC05"/>
          <path d="M52.7 7.98c-2.99 0-5.5 2.56-5.5 5.7 0 3.42 2.72 5.7 5.46 5.7 1.64 0 2.5-.65 3.14-1.4v1.14c0 1.98-1.2 3.16-3.04 3.16-1.49 0-2.37-1.08-2.73-1.99l-2.18.91c.58 1.26 2.14 2.8 4.91 2.8 2.86 0 5.26-1.8 5.26-5.52V8.28h-2.36v.96c-.72-.82-1.72-1.26-2.96-1.26zm.22 9.16c-1.63 0-3-1.38-3-3.42 0-2.08 1.37-3.5 3-3.5 1.6 0 2.94 1.48 2.94 3.5 0 2.04-1.34 3.42-2.94 3.42z" fill="#4285F4"/>
          <path d="M62.3 2.88v16.2h2.5V2.88h-2.5z" fill="#34A853"/>
          <path d="M70.98 17.14c-1.27 0-2.17-.58-2.75-1.72l7.58-3.14-.26-.64c-.46-1.26-1.88-3.56-4.78-3.56-2.87 0-5.26 2.26-5.26 5.7 0 3.2 2.37 5.7 5.53 5.7 2.55 0 4.03-1.56 4.64-2.47l-1.9-1.27c-.63.93-1.5 1.4-2.8 1.4zm-.18-7c1 0 1.86.5 2.14 1.24l-5.1 2.12c-.14-2.1 1.54-3.36 2.96-3.36z" fill="#EA4335"/>
        </svg>
      );
    case "Stripe":
      return (
        <svg height={h} viewBox="0 0 60 25" fill="none">
          <path d="M5 10.22c0-.75.61-1.05 1.63-1.05 1.46 0 3.3.44 4.76 1.23V5.87A12.74 12.74 0 006.63 5C2.7 5 .1 7 .1 10.46c0 5.35 7.37 4.49 7.37 6.8 0 .89-.77 1.18-1.85 1.18-1.6 0-3.64-.66-5.27-1.54v4.6A13.38 13.38 0 005.62 23c4.05 0 6.82-2 6.82-5.5C12.45 11.72 5 12.77 5 10.22zm14.84-4.54l-3.88.83V9.5l3.88-.82V5.68zm-3.88 3.36h3.88V23h-3.88V9.04zm9.55-3.06l-3.83.82V23h3.83v-9.5c1.02-1.33 2.74-1.08 3.28-.9V9.04c-.56-.2-2.61-.58-3.28 1.33V9.04l3.28-3.06zm11.48 0c-1.9 0-3.12.9-3.8 1.52l-.25-1.2h-3.44V23h3.88v-9.62c.68-.87 1.83-1.06 2.44-1.06.03 0 .08 0 .14 0l.87-3.4c-.53-.17-1.37-.23-2.2.38l.25-1.2 2.11-3.26zm6.94-.3c-3.87 0-6.35 3.07-6.35 7.16 0 4.72 2.83 7 6.56 7a7.6 7.6 0 004.73-1.53l-1.56-2.47c-.73.45-1.59.72-2.51.72-1.23 0-2.33-.54-2.64-2.38h7.33c.02-.3.04-.84.04-1.04 0-4.47-2.11-7.46-5.6-7.46zm-2.42 5.74c.2-1.64 1.06-2.68 2.36-2.68 1.36 0 2.08 1.04 2.08 2.68h-4.44z" fill="#635BFF"/>
        </svg>
      );
    case "WhatsApp":
      return (
        <svg height={h} viewBox="0 0 24 24" fill="none">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 01-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.22-8.23 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04s.88 2.37 1 2.53c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" fill="#25D366"/>
        </svg>
      );
    case "Xero":
      return (
        <svg height={h} viewBox="0 0 50 24" fill="none">
          <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#13B5EA">xero</text>
        </svg>
      );
    case "Make":
      return (
        <svg height={h} viewBox="0 0 56 24" fill="none">
          <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#6D00CC">Make</text>
        </svg>
      );
    case "Zapier":
      return (
        <svg height={h} viewBox="0 0 60 24" fill="none">
          <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#FF4A00">Zapier</text>
        </svg>
      );
    case "GoHighLevel":
      return (
        <svg height={h} viewBox="0 0 40 24" fill="none">
          <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#0075FF">GHL</text>
        </svg>
      );
    case "Twilio":
      return (
        <svg height={h} viewBox="0 0 56 24" fill="none">
          <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#F22F46">Twilio</text>
        </svg>
      );
    case "HubSpot":
      return (
        <svg height={h} viewBox="0 0 76 24" fill="none">
          <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#FF7A59">HubSpot</text>
        </svg>
      );
    case "Calendly":
      return (
        <svg height={h} viewBox="0 0 80 24" fill="none">
          <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#006BFF">Calendly</text>
        </svg>
      );
    case "Facebook":
      return (
        <svg height={h} viewBox="0 0 24 24" fill="none">
          <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z" fill="#1877F2"/>
        </svg>
      );
    case "Slack":
      return (
        <svg height={h} viewBox="0 0 54 24" fill="none">
          <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#4A154B">Slack</text>
        </svg>
      );
    case "Google Calendar":
      return (
        <svg height={h} viewBox="0 0 24 24" fill="none">
          <path d="M18 3h-1V1h-2v2H9V1H7v2H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H6V8h12v11z" fill="#4285F4"/>
          <path d="M8 10h3v3H8v-3zm5 0h3v3h-3v-3zm-5 4h3v3H8v-3zm5 4h3v3h-3v-3z" fill="#4285F4" opacity=".5"/>
        </svg>
      );
    case "Synthflow":
      return (
        <svg height={h} viewBox="0 0 90 24" fill="none">
          <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="16" fontWeight="700" fill="#7C3AED">Synthflow</text>
        </svg>
      );
    case "Google Sheets":
      return (
        <svg height={h} viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="#0F9D58"/>
          <path d="M14 2v6h6" fill="#87CEAC"/>
          <path d="M7 13h10v1H7v-1zm0 2h10v1H7v-1zm0 2h7v1H7v-1z" fill="#fff"/>
        </svg>
      );
    default:
      return <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "var(--muted)" }}>{name}</span>;
  }
};

window.Icon = Icon;
window.Logo = Logo;
window.BrandLogo = BrandLogo;
