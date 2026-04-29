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
    default:
      return null;
  }
};

const Logo = ({ size = 18 }) => (
  <span className="logo" style={{ fontSize: size }}>
    Fisher<span className="digital">Digital</span>
  </span>
);

window.Icon = Icon;
window.Logo = Logo;
