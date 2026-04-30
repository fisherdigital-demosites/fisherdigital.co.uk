/* global React, Icon, SERVICES, FAQ_ITEMS, CAREER_ROLES */
const { useState: usePState } = React;

// ---------- Reusable ----------
const SectionHead = ({ eyebrow, title, lead, center }) => (
  <div className={`section-head reveal${center ? " section-head-center" : ""}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {lead && <p className="lead">{lead}</p>}
  </div>
);

const ServiceCard = ({ s }) => (
  <a className="svc-card" href={`#/services#${s.id}`}>
    <div className="svc-icon"><Icon name={s.icon} size={18} /></div>
    <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: "auto" }}>
      <span className="svc-name">{s.name}</span>
      <span className="svc-blurb">{s.oneLine}</span>
    </div>
    <span className="svc-arrow"><Icon name="arrow-up-right" size={16} /></span>
  </a>
);

const CTABanner = ({ tw }) => (
  <section className="container reveal" style={{ marginBottom: 80 }}>
    <div className="cta-banner">
      <div>
        <h2>{tw.ctaHeading}</h2>
        <p>{tw.ctaSub}</p>
      </div>
      <a className="btn btn-primary btn-lg" href="#/contact" style={{ position: "relative", zIndex: 1 }}>
        Book a Discovery Call <Icon name="arrow-right" size={14} />
      </a>
    </div>
  </section>
);

const FAQItem = ({ item }) => {
  const [open, setOpen] = usePState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-q">
        <span>{item.q}</span>
        <span className="faq-icon"><Icon name={open ? "close" : "plus"} size={14} /></span>
      </div>
      {open && <div className="faq-a">{item.a}</div>}
    </div>
  );
};

// ---------- HOME ----------
const Home = ({ tw }) => (
  <>
    {/* Hero */}
    <section className="hero dark-section">
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <h1>
            More leads answered.<br />
            <span className="accent">Less time chasing them.</span>
          </h1>
          <p className="lead">
            We set up the systems that answer your calls, follow up your leads, get you more reviews, and cut out the admin. You run your business. We make sure nothing falls through the cracks.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-white btn-lg" href="#/contact">
              Book a Free Discovery Call <Icon name="arrow-right" size={14} />
            </a>
            <a className="btn btn-outline-light btn-lg" href="#/services">
              How it works
            </a>
          </div>
          <div className="hero-meta">
            <span className="hero-meta-item"><Icon name="check" size={14} /> Free 20-minute audit</span>
            <span className="hero-meta-item"><Icon name="check" size={14} /> No contracts</span>
            <span className="hero-meta-item"><Icon name="check" size={14} /> Live in 2-4 weeks</span>
          </div>
        </div>

        <div className="hero-demo reveal">
          <div className="mock-dark">
            <div className="mock-titlebar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="label">9:42pm</span>
            </div>
            <div className="chat-line"><div className="av user">C</div><div className="bubble">My boiler's leaking, can someone come out?</div></div>
            <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Of course. What's your postcode?</div></div>
            <div className="chat-line"><div className="av user">C</div><div className="bubble">SW6 4LP</div></div>
            <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Tom can be there at 7am. Confirmation text sent.</div></div>
            <div style={{ borderTop: "1px solid var(--dark-line)", marginTop: 6, paddingTop: 8, display: "flex", gap: 12, fontSize: 11, color: "var(--dark-muted)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="check" size={11} /> <span style={{ color: "#22c55e" }}>Calendar booked</span></span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="check" size={11} /> <span style={{ color: "#22c55e" }}>SMS confirmed</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What we help with */}
    <section className="section container">
      <SectionHead
        eyebrow="What we do"
        title="We handle the leads, the follow-ups, and the admin you don't have time for."
        lead="Every business is different. We start with a free audit of where you're losing leads and time, then set up only what will actually make a difference."
      />
      <div className="svc-grid reveal">
        {SERVICES.map((s) => <ServiceCard key={s.id} s={s} />)}
      </div>
    </section>

    {/* How it works */}
    <section className="section dark-section">
      <div className="glow glow-1" style={{ opacity: 0.7 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead
          eyebrow="How it works"
          title="From first call to fully running. Two to four weeks."
          lead="No long contracts. No big upfront cost. We audit, build, and hand over, then stay on to make sure it keeps working."
        />
        <div className="steps reveal">
          <div className="step">
            <span className="step-num">01 / Discovery</span>
            <h3>We find where you're losing leads</h3>
            <p>A 20-minute call where we map out your customer journey: where enquiries come from, where they drop off, and what's eating your time. You leave with a written plan, free, whether or not we work together.</p>
          </div>
          <div className="step">
            <span className="step-num">02 / Setup</span>
            <h3>We build it around your business</h3>
            <p>We configure everything on your phone number, website, and tools. Trained on your services, your prices, your way of doing things. You review it, we tweak it, we go live.</p>
          </div>
          <div className="step">
            <span className="step-num">03 / Support</span>
            <h3>Monthly reports. Real people.</h3>
            <p>Every month you get a clear report: calls answered, leads captured, reviews gained, time saved. Plus a real person to message whenever something needs changing.</p>
          </div>
        </div>

        <div className="stats reveal" style={{ marginTop: 40 }}>
          <div className="stat"><div className="num">24/7</div><div className="label">Calls answered, day and night</div></div>
          <div className="stat"><div className="num">&lt;5s</div><div className="label">Lead follow-up time</div></div>
          <div className="stat"><div className="num">0</div><div className="label">Hours spent chasing reviews</div></div>
          <div className="stat"><div className="num">2-4w</div><div className="label">From kickoff to live</div></div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section container">
      <SectionHead
        eyebrow="FAQ"
        title="Common questions"
        lead="Everything you need to know before getting started."
        center
      />
      <div className="faq-list reveal">
        {FAQ_ITEMS.map((item, i) => <FAQItem key={i} item={item} />)}
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="section container">
      <div className="inline-form-section reveal" style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: 14 }}>{tw.ctaHeading}</h2>
        <p className="lead" style={{ margin: "0 auto", textAlign: "center" }}>{tw.ctaSub}</p>
        <div style={{ marginTop: 28 }}>
          <a className="btn btn-primary btn-lg" href="#/contact">
            Book a Discovery Call <Icon name="arrow-right" size={14} />
          </a>
        </div>
      </div>
    </section>
  </>
);

// ---------- SERVICES ----------
const ServicesPage = ({ tw }) => {
  React.useEffect(() => {
    const m = window.location.hash.match(/^#\/services#(.+)$/);
    if (m) {
      const el = document.getElementById(m[1]);
      if (el) setTimeout(() => el.scrollIntoView({ block: "start", behavior: "smooth" }), 100);
    }
  }, []);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Everything your business needs to capture more leads and save time.</h1>
          <p className="lead">We audit your business first, then set up only what will make a real difference. Most clients start with one or two services and add more as they grow.</p>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 48 }}>
        <div className="svc-grid reveal">
          {SERVICES.map((s) => (
            <a key={s.id} className="svc-card" href={`#${s.id}`} onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ block: "start", behavior: "smooth" });
            }}>
              <div className="svc-icon"><Icon name={s.icon} size={18} /></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: "auto" }}>
                <span className="svc-name">{s.name}</span>
                <span className="svc-blurb">{s.oneLine}</span>
              </div>
              <span className="svc-arrow"><Icon name="arrow-up-right" size={16} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingTop: 56 }}>
        {SERVICES.map((s, i) => (
          <article key={s.id} id={s.id} className={`svc-row ${i % 2 === 1 ? "reverse" : ""} reveal`}>
            <div className="svc-meta">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--brand)", background: "rgba(8,102,255,0.06)" }}>
                  <Icon name={s.icon} size={18} />
                </span>
                <span style={{ fontSize: 12, color: "var(--muted-2)", fontWeight: 500 }}>
                  {String(i + 1).padStart(2, "0")} / 08
                </span>
              </div>
              <h2>{s.name}</h2>
              <p className="lead" style={{ fontSize: 16 }}>{tw[s.descKey]}</p>
              <div className="benefits">
                {s.benefits.map((b, j) => (
                  <div key={j} className="benefit">
                    <Icon name="check" size={14} /> <span>{b}</span>
                  </div>
                ))}
              </div>
              <div className="use-case">
                <strong>In practice</strong>
                {s.useCase}
              </div>
            </div>
            <ServiceMock service={s} />
          </article>
        ))}
      </section>

      <section className="section">
        <CTABanner tw={tw} />
      </section>
    </>
  );
};

// Per-service mock visualisations
const ServiceMock = ({ service }) => {
  switch (service.icon) {
    case "phone":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">incoming call</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 11, color: "var(--muted)" }}>+44 7700 *** ***</span>
            <span style={{ fontSize: 11, color: "#22c55e", display: "inline-flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} /> Connected
            </span>
          </div>
          <div className="chat-line"><div className="av user">C</div><div className="bubble">Hi, my boiler is leaking water everywhere.</div></div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">That sounds urgent. What's your postcode?</div></div>
          <div className="chat-line"><div className="av user">C</div><div className="bubble">SW6 4LP</div></div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Tom can be there at 7am. Confirmation text sent.</div></div>
        </div>
      );
    case "chat":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">missed call recovery</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 11, color: "#ef4444" }}>Missed call / 14:32</span>
            <span style={{ fontSize: 11, color: "#22c55e", display: "inline-flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} /> Text sent
            </span>
          </div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Sorry we missed your call! How can we help? Reply here or we'll call you back shortly.</div></div>
          <div className="chat-line"><div className="av user">C</div><div className="bubble">Need a quote for a new boiler install please</div></div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Of course! What's the best time for us to call you back today?</div></div>
          <div className="chat-line"><div className="av user">C</div><div className="bubble">After 4pm works</div></div>
        </div>
      );
    case "headset":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">website chat</span>
          </div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Hi! I can help you book or get a quote. What are you looking for?</div></div>
          <div className="chat-line"><div className="av user">V</div><div className="bubble">How much for a balayage?</div></div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Balayage starts at £140. I can book you in for Saturday at 11am. Want the slot?</div></div>
          <div style={{ display: "flex", gap: 6, paddingLeft: 30 }}>
            <span style={{ fontSize: 12, padding: "5px 10px", background: "rgba(8,102,255,0.06)", border: "1px solid var(--line)", borderRadius: 6, color: "var(--brand)", fontWeight: 500 }}>Yes please</span>
            <span style={{ fontSize: 12, padding: "5px 10px", background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 6, color: "var(--muted)" }}>Different time</span>
          </div>
        </div>
      );
    case "star":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">reviews</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <div style={{ padding: 12, border: "1px solid var(--line)", borderRadius: 8 }}>
              <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em" }}>Rating</div>
              <div style={{ fontSize: 26, fontWeight: 600, color: "var(--ink)", marginTop: 2 }}>4.92</div>
              <div style={{ display: "flex", gap: 2, color: "var(--brand)", marginTop: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={11} />)}
              </div>
            </div>
            <div style={{ padding: 12, border: "1px solid var(--line)", borderRadius: 8 }}>
              <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em" }}>This month</div>
              <div style={{ fontSize: 26, fontWeight: 600, color: "var(--ink)", marginTop: 2 }}>+47</div>
              <div style={{ fontSize: 11, color: "#22c55e" }}>New reviews</div>
            </div>
          </div>
          <div style={{ marginTop: 10, padding: 12, border: "1px solid var(--line)", borderRadius: 8, fontSize: 12 }}>
            <div style={{ display: "flex", gap: 2, color: "var(--brand)", marginBottom: 4 }}>
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={10} />)}
            </div>
            <div style={{ color: "var(--ink)" }}>"Sarah was brilliant, really took the time to explain everything."</div>
            <div style={{ marginTop: 6, paddingTop: 6, borderTop: "1px solid var(--line)", color: "var(--muted)", fontSize: 11 }}>
              <strong style={{ color: "var(--brand)" }}>Auto-reply:</strong> Thanks so much! We'll pass that on to Sarah.
            </div>
          </div>
        </div>
      );
    case "leaf":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">follow-up sequence</span>
          </div>
          {[
            { day: "Day 0", ch: "Email", title: "Your quote: roof repair", status: "Sent", active: true },
            { day: "Day 2", ch: "SMS", title: "Quick check on the quote", status: "Sent", active: true },
            { day: "Day 5", ch: "Email", title: "We've got an opening next week", status: "Scheduled", active: false },
            { day: "Day 9", ch: "SMS", title: "Final follow-up", status: "Pending", active: false },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < 3 ? "1px solid var(--line)" : "none" }}>
              <span style={{ width: 22, height: 22, borderRadius: 6, background: s.active ? "rgba(8,102,255,0.06)" : "var(--surface-2)", color: s.active ? "var(--brand)" : "var(--muted-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 600 }}>{s.ch[0]}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "var(--ink)" }}>{s.title}</div>
                <div style={{ fontSize: 10, color: "var(--muted-2)" }}>{s.day} / {s.ch}</div>
              </div>
              <span style={{ fontSize: 10, color: s.active ? "#22c55e" : "var(--muted-2)", fontWeight: 500 }}>{s.status}</span>
            </div>
          ))}
        </div>
      );
    case "flow":
      return (
        <div className="mock" style={{ minHeight: 260 }}>
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">workflow</span>
          </div>
          <svg viewBox="0 0 320 220" style={{ width: "100%", height: "auto" }}>
            <defs>
              <marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0L8 4L0 8z" fill="var(--muted-2)" />
              </marker>
            </defs>
            {[
              { x: 12, y: 20, w: 90, h: 36, label: "Quote signed", sub: "DocuSign" },
              { x: 115, y: 20, w: 90, h: 36, label: "Invoice raised", sub: "Xero" },
              { x: 218, y: 20, w: 90, h: 36, label: "Job in calendar", sub: "Google" },
              { x: 12, y: 100, w: 90, h: 36, label: "Customer added", sub: "CRM" },
              { x: 115, y: 100, w: 90, h: 36, label: "Crew assigned", sub: "ServiceM8" },
              { x: 218, y: 100, w: 90, h: 36, label: "Reminder SMS", sub: "Twilio" },
              { x: 60, y: 175, w: 200, h: 36, label: "Payment > review request", sub: "Stripe > Reviews" },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="6" fill="#fff" stroke="var(--line)" />
                <text x={b.x + 8} y={b.y + 15} fontSize="10" fill="var(--ink)" fontFamily="Inter">{b.label}</text>
                <text x={b.x + 8} y={b.y + 28} fontSize="8" fill="var(--muted-2)" fontFamily="Inter">{b.sub}</text>
              </g>
            ))}
            <path d="M102 38 L115 38" stroke="var(--muted-2)" fill="none" markerEnd="url(#arr)" />
            <path d="M205 38 L218 38" stroke="var(--muted-2)" fill="none" markerEnd="url(#arr)" />
            <path d="M102 118 L115 118" stroke="var(--muted-2)" fill="none" markerEnd="url(#arr)" />
            <path d="M205 118 L218 118" stroke="var(--muted-2)" fill="none" markerEnd="url(#arr)" />
            <path d="M57 56 Q57 78 57 100" stroke="var(--muted-2)" fill="none" markerEnd="url(#arr)" />
            <path d="M160 136 Q160 156 160 175" stroke="var(--brand)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
          </svg>
        </div>
      );
    case "edit":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">content calendar</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, fontSize: 10, color: "var(--muted-2)" }}>
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <div key={d} style={{ textAlign: "center", fontWeight: 500, fontSize: 9 }}>{d}</div>)}
            {Array.from({ length: 28 }).map((_, i) => {
              const has = [2, 4, 8, 10, 13, 15, 17, 22, 24].includes(i);
              return (
                <div key={i} style={{ aspectRatio: "1", border: "1px solid var(--line)", borderRadius: 3, position: "relative", background: has ? "rgba(8,102,255,0.04)" : "transparent" }}>
                  {has && <span style={{ position: "absolute", top: 2, right: 2, width: 3, height: 3, borderRadius: "50%", background: "var(--brand)" }} />}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 10, padding: 10, background: "var(--surface-2)", borderRadius: 8, fontSize: 12 }}>
            <div style={{ fontSize: 10, color: "var(--brand)", marginBottom: 3, fontWeight: 600 }}>NEXT POST / TUE 9AM</div>
            <div style={{ color: "var(--ink)" }}>"Three signs your bathroom needs re-grouting before winter"</div>
          </div>
        </div>
      );
    case "database":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">reactivation</span>
          </div>
          {[
            { label: "Last visit 6-12 months", count: 184, status: "Sending", active: true },
            { label: "Last visit 12-24 months", count: 96, status: "Queued", active: false },
            { label: "Lapsed > 24 months", count: 60, status: "Drafting", active: false },
          ].map((row, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? "1px solid var(--line)" : "none", gap: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "var(--ink)" }}>{row.label}</div>
                <div style={{ height: 3, background: "var(--line)", borderRadius: 3, marginTop: 5, overflow: "hidden" }}>
                  <div style={{ width: `${(row.count/184)*100}%`, height: "100%", background: row.active ? "var(--brand)" : "var(--muted-2)", borderRadius: 3 }} />
                </div>
              </div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", minWidth: 36, textAlign: "right" }}>{row.count}</div>
              <div style={{ fontSize: 10, color: row.active ? "var(--brand)" : "var(--muted-2)", minWidth: 52, textAlign: "right", fontWeight: 500 }}>{row.status}</div>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

// ---------- ABOUT ----------
const AboutPage = ({ tw }) => (
  <>
    <section className="page-header">
      <div className="container">
        <span className="eyebrow">About</span>
        <h1>A small UK team helping local businesses get more from every lead.</h1>
        <p className="lead">{tw.missionLine}</p>
      </div>
    </section>

    <section className="section container">
      <div className="about-grid reveal">
        <div>
          <span className="eyebrow" style={{ marginBottom: 12, display: "inline-flex" }}>Our story</span>
          <h2 style={{ marginTop: 12, marginBottom: 18 }}>Big company systems, set up for small businesses.</h2>
          <p style={{ fontSize: 16, color: "var(--muted)", marginBottom: 14, lineHeight: 1.65 }}>{tw.founderStory}</p>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.65 }}>
            Our customers are tradespeople, clinicians, salon owners, and restaurateurs. They don't have time to learn new platforms, so we handle everything for them.
          </p>
        </div>
        <div className="mock" style={{ padding: 20 }}>
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">how we work</span>
          </div>
          {[
            { t: "Discovery first", b: "We won't quote without a call. Every business is different." },
            { t: "Plain English", b: "If we can't explain it simply, it's the wrong tool." },
            { t: "Real people", b: "A UK-based team you can actually call." },
            { t: "Outcome-based pricing", b: "Custom pricing tied to the work, not seats or tiers." },
          ].map((p, i) => (
            <div key={i} style={{ padding: "12px 0", borderBottom: i < 3 ? "1px solid var(--line)" : "none" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ fontSize: 12, color: "var(--brand)", fontWeight: 600, minWidth: 20 }}>0{i + 1}</span>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--ink)", fontSize: 14 }}>{p.t}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{p.b}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section container">
      <SectionHead eyebrow="The team" title="Two founders. One goal." />
      <div className="team-grid reveal">
        <div className="team-card">
          <img className="team-photo" src="/josh.jpg" alt="Josh Fisher" />
          <div>
            <h3>Josh Fisher</h3>
            <div className="role">Founder</div>
          </div>
          <p>{tw.joshBio}</p>
        </div>
        <div className="team-card">
          <img className="team-photo" src="/billy.jpg" alt="Billy Loughman" />
          <div>
            <h3>Billy Loughman</h3>
            <div className="role">Co-founder</div>
          </div>
          <p>{tw.billyBio}</p>
        </div>
      </div>
    </section>

    <section className="section">
      <CTABanner tw={tw} />
    </section>
  </>
);

// ---------- CAREERS ----------
const CareersPage = () => (
  <>
    <section className="page-header">
      <div className="container">
        <span className="eyebrow">Careers</span>
        <h1>Help local businesses grow. <span className="accent">Get paid well doing it.</span></h1>
        <p className="lead">We're building a team of driven, self-starting people who want to earn real money while helping real businesses. Fully remote. Commission-based. No ceiling on what you can earn.</p>
      </div>
    </section>

    <section className="section container">
      <div className="careers-why reveal">
        <SectionHead eyebrow="Why FisherDigital" title="What you're joining" />
        <div className="careers-perks">
          <div className="perk-card">
            <div className="perk-icon"><Icon name="pound" size={20} /></div>
            <h3>Uncapped earnings</h3>
            <p>Commission-based with no ceiling. The more you close or book, the more you earn. Simple.</p>
          </div>
          <div className="perk-card">
            <div className="perk-icon"><Icon name="clock" size={20} /></div>
            <h3>Flexible hours</h3>
            <p>Work around your schedule. We care about results, not when you clock in.</p>
          </div>
          <div className="perk-card">
            <div className="perk-icon"><Icon name="target" size={20} /></div>
            <h3>Real impact</h3>
            <p>You're helping local businesses capture more revenue. The results are tangible and immediate.</p>
          </div>
          <div className="perk-card">
            <div className="perk-icon"><Icon name="zap" size={20} /></div>
            <h3>Ground floor</h3>
            <p>Join early. As we scale, the people who helped build this will be the ones leading it.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section dark-section">
      <div className="glow glow-1" style={{ opacity: 0.5 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHead eyebrow="Open positions" title="We're hiring" />
        <div className="roles-list">
          {CAREER_ROLES.map((role) => (
            <div key={role.id} className="role-card reveal">
              <div className="role-header">
                <div>
                  <h3>{role.title}</h3>
                  <div className="role-tags">
                    <span className="role-tag"><Icon name="pound" size={12} /> {role.type}</span>
                    <span className="role-tag"><Icon name="pin" size={12} /> {role.location}</span>
                  </div>
                </div>
              </div>
              <p className="role-desc">{role.description}</p>
              <div className="role-sections">
                <div>
                  <h4>What you'll do</h4>
                  <ul className="role-list">
                    {role.responsibilities.map((r, i) => <li key={i}><Icon name="check" size={13} /> {r}</li>)}
                  </ul>
                </div>
                <div>
                  <h4>What we're looking for</h4>
                  <ul className="role-list">
                    {role.requirements.map((r, i) => <li key={i}><Icon name="check" size={13} /> {r}</li>)}
                  </ul>
                </div>
                <div>
                  <h4>What you'll get</h4>
                  <ul className="role-list">
                    {role.offer.map((r, i) => <li key={i}><Icon name="check" size={13} /> {r}</li>)}
                  </ul>
                </div>
              </div>
              <a className="btn btn-white btn-lg" href={`mailto:hello@fisherdigital.co.uk?subject=Application: ${role.title}&body=Hi FisherDigital,%0D%0A%0D%0AI'm interested in the ${role.title} role.%0D%0A%0D%0A[Tell us a bit about yourself and why you'd be a good fit]`}>
                Apply for this role <Icon name="arrow-right" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section container">
      <div className="inline-form-section reveal" style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: 14 }}>Don't see the right role?</h2>
        <p className="lead" style={{ margin: "0 auto", textAlign: "center" }}>We're always interested in hearing from driven people. Drop us a line and tell us what you're good at.</p>
        <div style={{ marginTop: 28 }}>
          <a className="btn btn-primary btn-lg" href="mailto:hello@fisherdigital.co.uk?subject=General Application&body=Hi FisherDigital,%0D%0A%0D%0AI'm interested in working with you.%0D%0A%0D%0A[Tell us about yourself]">
            Get in touch <Icon name="arrow-right" size={14} />
          </a>
        </div>
      </div>
    </section>
  </>
);

// ---------- CONTACT ----------
const ContactPage = ({ tw }) => {
  const [form, setForm] = usePState({ name: "", email: "", business: "", services: "", note: "" });
  const [sent, setSent] = usePState(false);
  const [sending, setSending] = usePState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://formspree.io/f/mojpnokn", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
    } catch (err) {
      setSent(true);
    }
    setSending(false);
  };

  return (
    <>
      <section className="page-header" id="book">
        <div className="container">
          <span className="eyebrow">Get started</span>
          <h1>Tell us about your business. We'll find what's worth fixing.</h1>
          <p className="lead">A short discovery call where we audit your customer journey and show you where you're losing leads. You'll leave with a written plan. Free, no obligation.</p>
        </div>
      </section>

      <section className="section container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-item">
              <div className="ic"><Icon name="clock" size={16} /></div>
              <div>
                <h4>20-minute call</h4>
                <p>Zoom or phone. UK working hours, plus evenings on request.</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic"><Icon name="mail" size={16} /></div>
              <div>
                <h4>Email us</h4>
                <p><a href={`mailto:${tw.email}`} style={{ color: "var(--brand)" }}>{tw.email}</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic"><Icon name="pin" size={16} /></div>
              <div>
                <h4>Based in the UK</h4>
                <p>Working with businesses across England, Scotland, and Wales.</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic"><Icon name="shield" size={16} /></div>
              <div>
                <h4>What you'll get</h4>
                <p>A clear breakdown of where you're losing leads and what each fix is worth. Yours to keep, no strings attached.</p>
              </div>
            </div>
          </div>

          <form className="card reveal" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }} onSubmit={submit}>
            <div>
              <h3 style={{ marginBottom: 4 }}>Get in touch</h3>
              <p style={{ color: "var(--muted)", fontSize: 13 }}>We'll reply within one working day.</p>
            </div>
            {sent ? (
              <div style={{ padding: 28, textAlign: "center", display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(8,102,255,0.06)", color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="check" size={20} />
                </div>
                <div style={{ fontSize: 17, color: "var(--ink)", fontWeight: 600 }}>Thanks! We'll be in touch.</div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>We'll get back to you within one working day.</div>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label className="form-label">Your name</label>
                  <input className="form-input" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Sam Carter" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="sam@example.co.uk" />
                </div>
                <div className="form-group">
                  <label className="form-label">Business name and type</label>
                  <input className="form-input" value={form.business} onChange={(e) => setForm({...form, business: e.target.value})} placeholder="Carter Plumbing, domestic plumbing in Bristol" />
                </div>
                <div className="form-group">
                  <label className="form-label">What's your biggest challenge right now?</label>
                  <select className="form-select" value={form.services} onChange={(e) => setForm({...form, services: e.target.value})}>
                    <option value="">Not sure yet, just want to chat</option>
                    <option value="missed-calls">Missing calls and enquiries</option>
                    <option value="follow-ups">Leads going cold / no follow-up</option>
                    <option value="reviews">Not enough Google reviews</option>
                    <option value="admin">Too much admin and manual work</option>
                    <option value="marketing">No time for marketing or social media</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Anything else?</label>
                  <textarea className="form-textarea" value={form.note} onChange={(e) => setForm({...form, note: e.target.value})} placeholder="What's eating your time right now?" />
                </div>
                <button className="btn btn-primary btn-lg" style={{ justifyContent: "center", width: "100%" }} type="submit" disabled={sending}>
                  {sending ? "Sending..." : "Send message"} {!sending && <Icon name="arrow-right" size={14} />}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

// ---------- PRIVACY POLICY ----------
const PrivacyPage = () => (
  <>
    <section className="page-header">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="lead">Last updated: 30 April 2026</p>
      </div>
    </section>
    <section className="section container">
      <div className="legal-content reveal">
        <h2>Who we are</h2>
        <p>FisherDigital is an AI automation agency based in the United Kingdom, operated by Joshua Fisher. We help local service businesses capture more leads, automate admin, and grow using AI-powered tools.</p>
        <p>Contact: <a href="mailto:hello@fisherdigital.co.uk">hello@fisherdigital.co.uk</a></p>
        <p>Website: <a href="https://fisherdigital.co.uk">fisherdigital.co.uk</a></p>

        <h2>What data we collect</h2>
        <h3>Information you provide</h3>
        <ul>
          <li><strong>Contact form submissions:</strong> name, email address, business name, and your message.</li>
          <li><strong>Job applications:</strong> name, email, and any information you include in your application email.</li>
          <li><strong>Email correspondence:</strong> any information you send us via email.</li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li><strong>Analytics:</strong> We use Google Analytics with IP anonymisation enabled to understand how visitors use our site. This includes pages visited, time spent, and referral sources.</li>
          <li><strong>Cookies:</strong> We use essential and analytics cookies. See our <a href="#/cookies">Cookie Policy</a> for full details.</li>
        </ul>

        <h3>Information we do not collect</h3>
        <ul>
          <li>We do not collect payment card details. All payments are processed securely by Stripe.</li>
          <li>We do not use advertising or tracking cookies.</li>
          <li>We do not sell, rent, or share your personal data with third parties for marketing purposes.</li>
        </ul>

        <h2>How we use your data</h2>
        <ul>
          <li>To respond to your enquiries and provide our services.</li>
          <li>To process job applications.</li>
          <li>To improve our website and understand how visitors use it.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <p>We will not send you marketing communications unless you explicitly opt in.</p>

        <h2>Third parties</h2>
        <p>We use the following third-party services that may process your data:</p>
        <ul>
          <li><strong>Formspree</strong> - form submission processing (<a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener">privacy policy</a>)</li>
          <li><strong>Google Analytics</strong> - website analytics with IP anonymisation (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">privacy policy</a>)</li>
          <li><strong>Stripe</strong> - payment processing (<a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener">privacy policy</a>)</li>
          <li><strong>GoHighLevel</strong> - CRM and client management (<a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noopener">privacy policy</a>)</li>
        </ul>

        <h2>Your rights under UK GDPR</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal data we hold about you.</li>
          <li><strong>Correct</strong> any inaccurate data.</li>
          <li><strong>Delete</strong> your data (the "right to be forgotten").</li>
          <li><strong>Object</strong> to processing of your data.</li>
          <li><strong>Data portability</strong> - receive your data in a structured, machine-readable format.</li>
        </ul>
        <p>To exercise any of these rights, email us at <a href="mailto:hello@fisherdigital.co.uk">hello@fisherdigital.co.uk</a>. We will respond within 30 days.</p>

        <h2>Data retention</h2>
        <ul>
          <li><strong>Contact form submissions:</strong> retained for as long as needed to respond to your enquiry, then deleted.</li>
          <li><strong>Client data:</strong> retained for the duration of our engagement plus 6 years for legal and accounting purposes.</li>
          <li><strong>Analytics data:</strong> anonymised and retained for 14 months by Google Analytics.</li>
        </ul>

        <h2>Data security</h2>
        <p>We take reasonable measures to protect your data, including encrypted connections (HTTPS), secure access controls, and regular review of our data practices.</p>

        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>

        <h2>Contact</h2>
        <p>For any questions about this policy or your data, contact us at <a href="mailto:hello@fisherdigital.co.uk">hello@fisherdigital.co.uk</a>.</p>
      </div>
    </section>
  </>
);

// ---------- COOKIE POLICY ----------
const CookiePage = () => (
  <>
    <section className="page-header">
      <div className="container">
        <span className="eyebrow">Legal</span>
        <h1>Cookie Policy</h1>
        <p className="lead">Last updated: 30 April 2026</p>
      </div>
    </section>
    <section className="section container">
      <div className="legal-content reveal">
        <h2>What are cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help the site work properly, remember your preferences, and understand how you use the site.</p>

        <h2>Cookies we use</h2>

        <h3>Essential cookies</h3>
        <p>These are necessary for the website to function and cannot be switched off.</p>
        <div className="cookie-table">
          <table>
            <thead><tr><th>Cookie</th><th>Purpose</th><th>Duration</th></tr></thead>
            <tbody>
              <tr><td><code>cookie_consent</code></td><td>Remembers your cookie preferences</td><td>1 year</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Analytics cookies</h3>
        <p>These help us understand how visitors use our site. All data is anonymised. These are only set if you accept analytics cookies.</p>
        <div className="cookie-table">
          <table>
            <thead><tr><th>Cookie</th><th>Purpose</th><th>Duration</th></tr></thead>
            <tbody>
              <tr><td><code>_ga</code></td><td>Distinguishes unique visitors (Google Analytics)</td><td>2 years</td></tr>
              <tr><td><code>_ga_*</code></td><td>Maintains session state (Google Analytics)</td><td>2 years</td></tr>
              <tr><td><code>_gid</code></td><td>24-hour unique visitor identification</td><td>24 hours</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Cookies we do not use</h3>
        <ul>
          <li>No advertising or remarketing cookies.</li>
          <li>No social media tracking cookies.</li>
          <li>No cross-site tracking.</li>
        </ul>

        <h2>Managing cookies</h2>
        <p>You can manage your cookie preferences using the cookie banner that appears when you first visit our site. You can also manage cookies through your browser settings:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener">Firefox</a></li>
          <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Edge</a></li>
        </ul>
        <p>You can also opt out of Google Analytics across all websites by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics opt-out browser add-on</a>.</p>

        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>

        <h2>Contact</h2>
        <p>For any questions about cookies, contact us at <a href="mailto:hello@fisherdigital.co.uk">hello@fisherdigital.co.uk</a>.</p>
      </div>
    </section>
  </>
);

window.Home = Home;
window.ServicesPage = ServicesPage;
window.AboutPage = AboutPage;
window.CareersPage = CareersPage;
window.ContactPage = ContactPage;
window.PrivacyPage = PrivacyPage;
window.CookiePage = CookiePage;
