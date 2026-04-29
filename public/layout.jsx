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
          <a href="#/contact" className="btn btn-primary">
            Book a Discovery Call
            <Icon name="arrow-right" size={14} />
          </a>
          <button
            className="btn btn-secondary"
            style={{ padding: "8px", display: "none" }}
            aria-label="Menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" size={18} />
          </button>
        </div>
      </div>
      {open && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(10,11,13,0.4)", zIndex: 60,
            display: "flex", justifyContent: "flex-end",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{ width: 280, background: "#fff", padding: 24, height: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)} style={{ marginBottom: 24 }}>
              <Icon name="close" size={20} />
            </button>
            {NAV_ITEMS.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)}
                 style={{ display: "block", padding: "12px 0", borderBottom: "1px solid var(--line)", color: "var(--ink)", fontWeight: 500 }}>
                {i.label}
              </a>
            ))}
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
          <p style={{ marginTop: 12, fontSize: 14, color: "var(--muted)" }}>
            Automation built for local service businesses. Based in the UK.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
            <span className="pill"><span className="pill-dot" /> Pre-launch · Discovery calls open</span>
          </div>
        </div>
        <div className="footer-col">
          <h5>Pages</h5>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/services">Services</a></li>
            <li><a href="#/about">About</a></li>
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
            <li><a href={`tel:${tw.phone.replace(/\s/g, "")}`}>{tw.phone}</a></li>
            <li><span style={{ color: "var(--muted)" }}>fisherdigital.co.uk</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 FisherDigital Ltd. Based in the UK.</span>
        <span style={{ display: "inline-flex", gap: 16 }}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </span>
      </div>
    </div>
  </footer>
);

window.useHashRoute = useHashRoute;
window.useReveal = useReveal;
window.Nav = Nav;
window.Footer = Footer;
