/* global React, Icon, Logo, NAV_ITEMS */
const { useEffect, useState } = React;

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

const Nav = ({ currentRoute }) => {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#/" aria-label="FisherDigital home"><Logo /></a>
        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${currentRoute === item.href ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="#/contact" className="btn btn-white btn-sm">
            Book a Discovery Call
            <Icon name="arrow-right" size={14} />
          </a>
          <button
            className="mobile-menu-btn"
            aria-label="Menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 60,
            display: "flex", justifyContent: "flex-end",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{ width: 280, background: "var(--dark-bg)", padding: 24, height: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)} style={{ marginBottom: 24, color: "#fff", background: "none", border: "none", cursor: "pointer" }}>
              <Icon name="close" size={20} />
            </button>
            {NAV_ITEMS.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)}
                 style={{ display: "block", padding: "12px 0", borderBottom: "1px solid var(--dark-line)", color: "#fff", fontWeight: 500, textDecoration: "none" }}>
                {i.label}
              </a>
            ))}
            <a href="#/contact" onClick={() => setOpen(false)}
               style={{ display: "block", marginTop: 20, padding: "12px 16px", background: "#fff", color: "var(--dark-bg)", borderRadius: 8, textAlign: "center", fontWeight: 600, textDecoration: "none", fontSize: 14 }}>
              Book a Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = ({ tw }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col" style={{ maxWidth: 320 }}>
          <Logo />
          <p style={{ marginTop: 10, fontSize: 14, color: "var(--dark-muted)" }}>
            We help local service businesses capture more leads, save time, and grow using AI-powered automation.
          </p>
        </div>
        <div className="footer-col">
          <h5>Pages</h5>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/services">Services</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#/careers">Careers</a></li>
            <li><a href="#/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#/services#phone-answering">Phone Answering</a></li>
            <li><a href="#/services#missed-call-textback">Missed Call Text-Back</a></li>
            <li><a href="#/services#review-management">Reviews</a></li>
            <li><a href="#/services#lead-nurture">Lead Follow-Up</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href={`mailto:${tw.email}`}>{tw.email}</a></li>
            <li><span>fisherdigital.co.uk</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 FisherDigital. Based in the UK.</span>
        <span style={{ display: "inline-flex", gap: 16 }}>
          <a href="#/privacy">Privacy</a>
          <a href="#/cookies">Cookies</a>
        </span>
      </div>
    </div>
  </footer>
);

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <Icon name="cookie" size={18} />
          <p>We use cookies to improve your experience. Analytics cookies help us understand how you use the site. <a href="#/cookies">Cookie Policy</a></p>
        </div>
        <div className="cookie-banner-actions">
          <button className="btn btn-sm" onClick={decline} style={{ color: "var(--dark-muted)", border: "1px solid var(--dark-line)" }}>Decline</button>
          <button className="btn btn-primary btn-sm" onClick={accept}>Accept</button>
        </div>
      </div>
    </div>
  );
};

window.useHashRoute = useHashRoute;
window.useReveal = useReveal;
window.Nav = Nav;
window.Footer = Footer;
window.CookieBanner = CookieBanner;
