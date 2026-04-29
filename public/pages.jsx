/* global React, Icon, SERVICES */
const { useState: usePState } = React;

// ---------- Reusable bits ----------
const Pill = ({ children }) => (
  <span className="pill"><span className="pill-dot" />{children}</span>
);

const SectionHead = ({ eyebrow, title, lead, dark }) => (
  <div className="section-head reveal">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="display h2">{title}</h2>
    {lead && <p className="lead">{lead}</p>}
  </div>
);

const ServiceCard = ({ s }) => (
  <a className="svc-card" href={`#/services#${s.id}`}>
    <div className="svc-icon"><Icon name={s.icon} size={20} /></div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: "auto" }}>
      <span className="svc-name">{s.name}</span>
      <span className="svc-blurb">{s.oneLine}</span>
    </div>
    <span className="svc-arrow"><Icon name="arrow-up-right" size={18} /></span>
  </a>
);

const CTABanner = ({ tw }) => (
  <section className="container reveal" style={{ marginBottom: 96 }}>
    <div className="cta-banner">
      <div>
        <h2>{tw.ctaHeading}</h2>
        <p>{tw.ctaSub}</p>
      </div>
      <div style={{ display: "flex", gap: 12, position: "relative", zIndex: 1 }}>
        <a className="btn btn-primary btn-lg" href="#/contact">
          Book a Discovery Call <Icon name="arrow-right" size={14} />
        </a>
      </div>
    </div>
  </section>
);

// ---------- HOME ----------
const Home = ({ tw }) => {
  return (
    <>
      {/* HERO - dark full-width */}
      <section className="hero dark-section">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="container" style={{ position: "relative" }}>
          <div className="hero-content reveal">
            <Pill>Accepting new clients</Pill>
            <h1 style={{ marginTop: 20 }}>
              Your phone rings at 9pm.<br />
              <span className="accent">It still gets answered.</span>
            </h1>
            <p className="lead">
              We set up phone answering, lead follow-up, review management, and workflow automation for plumbers, dentists, salons, and restaurants. Your customers get instant responses. You get more booked jobs.
            </p>
            <div className="hero-cta-row">
              <a className="btn btn-white btn-lg" href="#/contact">
                Book a Discovery Call <Icon name="arrow-right" size={14} />
              </a>
              <a className="btn btn-outline-light btn-lg" href="#/services">
                See what we build
              </a>
            </div>
            <div className="hero-meta">
              <span className="hero-meta-item"><Icon name="check" size={14} /> Free discovery call</span>
              <span className="hero-meta-item"><Icon name="check" size={14} /> Custom pricing, no packages</span>
              <span className="hero-meta-item"><Icon name="check" size={14} /> Live in 2-4 weeks</span>
            </div>
          </div>

          <div className="hero-demo reveal">
            <div className="mock-dark">
              <div className="mock-titlebar">
                <span className="dot" /><span className="dot" /><span className="dot" />
                <span className="label">9:42pm - incoming call</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--dark-muted)" }}>+44 7700 *** ***</span>
                <span style={{ fontSize: 11, color: "#16a34a", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a" }} /> Answered
                </span>
              </div>
              <div className="chat-line"><div className="av user">C</div><div className="bubble">My boiler's leaking - can someone come out?</div></div>
              <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Absolutely. What's your postcode so I can check availability?</div></div>
              <div className="chat-line"><div className="av user">C</div><div className="bubble">SW6 4LP</div></div>
              <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Tom can be there at 7am. I've sent you a confirmation text.</div></div>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <div style={{ flex: 1, padding: "8px 10px", background: "rgba(8,102,255,0.08)", border: "1px solid rgba(8,102,255,0.15)", borderRadius: 6, fontSize: 11, fontFamily: "var(--font-mono)" }}>
                  <span style={{ color: "var(--brand)" }}>Calendar</span>
                  <span style={{ color: "var(--dark-muted)", marginLeft: 6 }}>7am slot booked</span>
                </div>
                <div style={{ flex: 1, padding: "8px 10px", background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.15)", borderRadius: 6, fontSize: 11, fontFamily: "var(--font-mono)" }}>
                  <span style={{ color: "#16a34a" }}>SMS sent</span>
                  <span style={{ color: "var(--dark-muted)", marginLeft: 6 }}>Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section container">
        <SectionHead
          eyebrow="What we do"
          title="Eight services. One quiet system running behind your business."
          lead="Pick what you need today. Add the rest later. Every service is configured for your business - your prices, your tone, your calendar."
        />
        <div className="svc-grid reveal">
          {SERVICES.map((s) => <ServiceCard key={s.id} s={s} />)}
        </div>
      </section>

      {/* How it works - dark */}
      <section className="section dark-section">
        <div className="glow glow-1" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <SectionHead
            eyebrow="How it works"
            title="Three steps. Two to four weeks."
            lead="No long contracts, no enterprise procurement. Discovery, build, handover - then we stay on for support."
          />
          <div className="steps reveal">
            <div className="step">
              <span className="step-num">01 / Discovery</span>
              <h3>We audit your customer journey</h3>
              <p>A short call where we map where your leads come from, where they leak out, and what eats your time. You leave with a written plan - whether or not we work together.</p>
            </div>
            <div className="step">
              <span className="step-num">02 / Build</span>
              <h3>We set up everything</h3>
              <p>We configure each service on your phone number, website, and CRM. Trained on your services, prices, and tone. You review it, we tweak it, we go live.</p>
            </div>
            <div className="step">
              <span className="step-num">03 / Run</span>
              <h3>Monthly reports, real support</h3>
              <p>Every month you get a report showing calls answered, leads captured, reviews gained, and revenue attributed. Plus a real person (UK-based) to message when something needs changing.</p>
            </div>
          </div>

          <div className="stats reveal" style={{ marginTop: 48 }}>
            <div className="stat"><div className="num">24/7</div><div className="label">Every call answered, day and night</div></div>
            <div className="stat"><div className="num">&lt;5s</div><div className="label">Lead follow-up response time</div></div>
            <div className="stat"><div className="num">0</div><div className="label">Hours you spend chasing reviews</div></div>
            <div className="stat"><div className="num">2-4w</div><div className="label">From kickoff to live</div></div>
          </div>
        </div>
      </section>

      {/* Inline CTA form */}
      <section className="section container">
        <div className="inline-form-section reveal" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Get started</span>
          <h2 className="display h2" style={{ marginTop: 14 }}>{tw.ctaHeading}</h2>
          <p className="lead" style={{ margin: "16px auto 0", textAlign: "center" }}>{tw.ctaSub}</p>
          <div style={{ marginTop: 32 }}>
            <a className="btn btn-primary btn-lg" href="#/contact" style={{ justifyContent: "center" }}>
              Book a Discovery Call <Icon name="arrow-right" size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

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
          <h1>Eight services. Built for the way local businesses actually run.</h1>
          <p className="lead">Mix and match - most clients start with one or two and add more later.</p>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 48 }}>
        <div className="svc-grid reveal">
          {SERVICES.map((s) => (
            <a key={s.id} className="svc-card" href={`#${s.id}`} onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ block: "start", behavior: "smooth" });
            }}>
              <div className="svc-icon"><Icon name={s.icon} size={20} /></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: "auto" }}>
                <span className="svc-name">{s.name}</span>
                <span className="svc-blurb">{s.oneLine}</span>
              </div>
              <span className="svc-arrow"><Icon name="arrow-up-right" size={18} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingTop: 64 }}>
        {SERVICES.map((s, i) => (
          <article key={s.id} id={s.id} className={`svc-row ${i % 2 === 1 ? "reverse" : ""} reveal`}>
            <div className="svc-meta">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--brand)", background: "var(--brand-soft)" }}>
                  <Icon name={s.icon} size={20} />
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted-2)" }}>
                  {String(i + 1).padStart(2, "0")} / 08
                </span>
              </div>
              <h2>{s.name}</h2>
              <p className="lead" style={{ fontSize: 17 }}>{tw[s.descKey]}</p>
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
  const tone = "var(--brand)";
  switch (service.icon) {
    case "phone":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">incoming.call</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>+44 7700 *** ***</span>
            <span style={{ fontSize: 11, color: "#16a34a", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a" }} /> Connected - 00:42
            </span>
          </div>
          <div className="chat-line"><div className="av user">C</div><div className="bubble">Hi, my boiler is leaking water everywhere.</div></div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">That sounds urgent - what's your postcode?</div></div>
          <div className="chat-line"><div className="av user">C</div><div className="bubble">SW6 4LP, Fulham.</div></div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Tom can be there at 7am tomorrow. I've sent a confirmation text. Anything else?</div></div>
        </div>
      );
    case "chat":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">missed.call.recovery</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#dc2626" }}>Missed call - 14:32</span>
            <span style={{ fontSize: 11, color: "#16a34a", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a" }} /> Text sent - 14:32
            </span>
          </div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Sorry we missed your call! How can we help? Reply here or we'll call you back shortly.</div></div>
          <div className="chat-line"><div className="av user">C</div><div className="bubble">Need a quote for a new boiler install please</div></div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Of course - what's the best time for us to call you back today?</div></div>
          <div className="chat-line"><div className="av user">C</div><div className="bubble">After 4pm works</div></div>
        </div>
      );
    case "headset":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">website.chat</span>
          </div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Hi! I can help you book a consultation or get a quote. What service are you after?</div></div>
          <div className="chat-line"><div className="av user">V</div><div className="bubble">How much for a balayage?</div></div>
          <div className="chat-line ai"><div className="av ai">FD</div><div className="bubble">Balayage starts at £140 with our senior stylists. I can pencil you in for Saturday at 11am - want to grab the slot?</div></div>
          <div style={{ display: "flex", gap: 6, paddingLeft: 34 }}>
            <span className="pill" style={{ fontSize: 11, background: "var(--brand-soft)", border: "1px solid var(--line)", color: "var(--brand)" }}>Yes please</span>
            <span className="pill" style={{ fontSize: 11, background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--text)" }}>Different time</span>
          </div>
        </div>
      );
    case "star":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">reviews.dashboard</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ padding: 12, border: "1px solid var(--line-2)", borderRadius: 8 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", textTransform: "uppercase" }}>Rating</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--ink)", fontWeight: 600 }}>4.92<span style={{ fontSize: 14, color: "var(--muted)" }}>/5</span></div>
              <div style={{ display: "flex", gap: 2, color: tone, marginTop: 4 }}>
                {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={12} />)}
              </div>
            </div>
            <div style={{ padding: 12, border: "1px solid var(--line-2)", borderRadius: 8 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", textTransform: "uppercase" }}>This month</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--ink)", fontWeight: 600 }}>+47</div>
              <div style={{ fontSize: 11, color: "#16a34a" }}>New reviews</div>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: 12, border: "1px solid var(--line-2)", borderRadius: 8, fontSize: 12 }}>
            <div style={{ display: "flex", gap: 4, color: tone, marginBottom: 6 }}>
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={10} />)}
            </div>
            <div style={{ color: "var(--ink)" }}>"Sarah was brilliant - really took the time to explain everything."</div>
            <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px dashed var(--line)", color: "var(--muted)", fontSize: 11 }}>
              <strong style={{ color: "var(--brand)" }}>Auto-reply:</strong> Thanks so much, Emma! We'll pass that on to Sarah - see you at your next visit.
            </div>
          </div>
        </div>
      );
    case "leaf":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">sequence.fulham_quote</span>
          </div>
          {[
            { day: "Day 0", ch: "EMAIL", title: "Your quote - Fulham roof repair", status: "Sent" },
            { day: "Day 2", ch: "SMS", title: "Quick check - any questions on the quote?", status: "Sent" },
            { day: "Day 5", ch: "EMAIL", title: "We've got an opening next week", status: "Scheduled" },
            { day: "Day 9", ch: "SMS", title: "Final follow-up before we close the file", status: "Pending" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < 3 ? "1px solid var(--line-2)" : "none" }}>
              <span style={{ width: 24, height: 24, borderRadius: 6, background: i < 2 ? "var(--brand-soft)" : "var(--surface-2)", color: i < 2 ? tone : "var(--muted-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontFamily: "var(--font-mono)" }}>{s.ch[0]}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, color: "var(--ink)" }}>{s.title}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)" }}>{s.day} / {s.ch}</div>
              </div>
              <span style={{ fontSize: 10, color: i < 2 ? "#16a34a" : "var(--muted-2)", fontFamily: "var(--font-mono)" }}>{s.status}</span>
            </div>
          ))}
        </div>
      );
    case "flow":
      return (
        <div className="mock" style={{ minHeight: 280 }}>
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">workflow.quote_to_cash</span>
          </div>
          <svg viewBox="0 0 320 220" style={{ width: "100%", height: "auto" }}>
            <defs>
              <marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0L8 4L0 8z" fill="var(--muted)" />
              </marker>
            </defs>
            {[
              { x: 12, y: 20, w: 90, h: 36, label: "Quote signed", sub: "DocuSign" },
              { x: 115, y: 20, w: 90, h: 36, label: "Invoice raised", sub: "Xero" },
              { x: 218, y: 20, w: 90, h: 36, label: "Job in calendar", sub: "Google" },
              { x: 12, y: 100, w: 90, h: 36, label: "Customer added", sub: "CRM" },
              { x: 115, y: 100, w: 90, h: 36, label: "Crew assigned", sub: "ServiceM8" },
              { x: 218, y: 100, w: 90, h: 36, label: "Reminder SMS", sub: "Twilio" },
              { x: 60, y: 175, w: 200, h: 36, label: "Payment > review request fires", sub: "Stripe > Reviews" },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="6" fill="#fff" stroke="var(--line)" />
                <text x={b.x + 8} y={b.y + 15} fontSize="10" fill="var(--ink)" fontFamily="Inter">{b.label}</text>
                <text x={b.x + 8} y={b.y + 28} fontSize="9" fill="var(--muted)" fontFamily="JetBrains Mono">{b.sub}</text>
              </g>
            ))}
            <path d="M102 38 L115 38" stroke="var(--muted)" fill="none" markerEnd="url(#arr)" />
            <path d="M205 38 L218 38" stroke="var(--muted)" fill="none" markerEnd="url(#arr)" />
            <path d="M102 118 L115 118" stroke="var(--muted)" fill="none" markerEnd="url(#arr)" />
            <path d="M205 118 L218 118" stroke="var(--muted)" fill="none" markerEnd="url(#arr)" />
            <path d="M57 56 Q57 78 57 100" stroke="var(--muted)" fill="none" markerEnd="url(#arr)" />
            <path d="M160 136 Q160 156 160 175" stroke="var(--brand)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
          </svg>
        </div>
      );
    case "edit":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">content.calendar</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--muted)" }}>
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <div key={d} style={{ textAlign: "center" }}>{d}</div>)}
            {Array.from({ length: 28 }).map((_, i) => {
              const has = [2, 4, 8, 10, 13, 15, 17, 22, 24].includes(i);
              return (
                <div key={i} style={{ aspectRatio: "1", border: "1px solid var(--line-2)", borderRadius: 4, position: "relative", background: has ? "var(--brand-soft)" : "transparent" }}>
                  {has && <span style={{ position: "absolute", top: 2, right: 3, width: 4, height: 4, borderRadius: "50%", background: tone }} />}
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 12, padding: 10, background: "var(--surface-2)", borderRadius: 8, fontSize: 12 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--brand)", marginBottom: 4 }}>NEXT POST / TUE 9AM</div>
            <div style={{ color: "var(--ink)" }}>"Three signs your bathroom needs re-grouting before winter"</div>
          </div>
        </div>
      );
    case "database":
      return (
        <div className="mock">
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">reactivation.campaign</span>
          </div>
          {[
            { label: "Last visit 6-12 months", count: 184, status: "Sending", color: tone },
            { label: "Last visit 12-24 months", count: 96, status: "Queued", color: "var(--muted-2)" },
            { label: "Lapsed > 24 months", count: 60, status: "Drafting", color: "var(--muted-2)" },
          ].map((row, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", padding: "12px 0", borderBottom: i < 2 ? "1px solid var(--line-2)" : "none", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "var(--ink)" }}>{row.label}</div>
                <div style={{ height: 4, background: "var(--line-2)", borderRadius: 4, marginTop: 6, overflow: "hidden" }}>
                  <div style={{ width: `${(row.count/184)*100}%`, height: "100%", background: row.color, borderRadius: 4 }} />
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--ink)", minWidth: 40, textAlign: "right" }}>{row.count}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: row.color, minWidth: 60, textAlign: "right" }}>{row.status}</div>
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
        <h1>A small UK team building automation for the businesses that built our high streets.</h1>
        <p className="lead">{tw.missionLine}</p>
      </div>
    </section>

    <section className="section container">
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "start" }} className="reveal">
        <div>
          <span className="eyebrow" style={{ marginBottom: 14, display: "inline-flex" }}>Why we're here</span>
          <h2 className="display h2" style={{ marginBottom: 20 }}>Big company tools, built for small businesses.</h2>
          <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 16 }}>{tw.founderStory}</p>
          <p style={{ fontSize: 17, color: "var(--muted)" }}>
            Our customers are tradespeople, clinicians, salon owners, and restaurateurs. They run the businesses that make a place feel like a place. They don't have time to learn new platforms - so we do the learning for them.
          </p>
        </div>
        <div className="mock" style={{ padding: 24 }}>
          <div className="mock-titlebar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="label">our.principles</span>
          </div>
          {[
            { t: "Discovery before diagnosis", b: "We won't quote without a call. Every business is different." },
            { t: "Plain English, always", b: "If we can't explain it to a tradesperson, it's the wrong tool." },
            { t: "We answer the phone", b: "Real human, UK-based. Not a chatbot." },
            { t: "Pay for outcomes", b: "Custom pricing tied to the work, not seats or tiers." },
          ].map((p, i) => (
            <div key={i} style={{ padding: "14px 0", borderBottom: i < 3 ? "1px solid var(--line-2)" : "none" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--brand)", minWidth: 24 }}>0{i + 1}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--ink)", fontSize: 15 }}>{p.t}</div>
                  <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 3 }}>{p.b}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section container">
      <SectionHead eyebrow="The team" title="Two founders. One phone number." />
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
          <span className="eyebrow">Book a call</span>
          <h1>Tell us about your business. We'll do the rest.</h1>
          <p className="lead">A short discovery call to learn how your business runs and where you're losing leads. You'll leave with a written plan, whether or not we work together.</p>
        </div>
      </section>

      <section className="section container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-item">
              <div className="ic"><Icon name="clock" size={18} /></div>
              <div>
                <h4>Pick a time</h4>
                <p>Zoom or phone. UK working hours, plus evenings on request.</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic"><Icon name="mail" size={18} /></div>
              <div>
                <h4>Email us</h4>
                <p><a href={`mailto:${tw.email}`} style={{ color: "var(--brand)" }}>{tw.email}</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic"><Icon name="pin" size={18} /></div>
              <div>
                <h4>Where we are</h4>
                <p>{tw.location}. Working with businesses across the UK.</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="ic"><Icon name="shield" size={18} /></div>
              <div>
                <h4>What you get</h4>
                <p>A written plan showing where you're losing leads and what each fix is worth - free, whether or not we work together.</p>
              </div>
            </div>
          </div>

          <form className="card reveal" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16 }} onSubmit={submit}>
            <div>
              <h3 className="display h3" style={{ marginBottom: 6 }}>Get in touch</h3>
              <p style={{ color: "var(--muted)", fontSize: 14 }}>We'll reply within one working day.</p>
            </div>
            {sent ? (
              <div style={{ padding: 32, textAlign: "center", display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--brand-soft)", color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="check" size={22} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ink)", fontWeight: 600 }}>Got it - speak soon.</div>
                <div style={{ fontSize: 14, color: "var(--muted)" }}>We'll get back to you within one working day.</div>
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
                  <input className="form-input" value={form.business} onChange={(e) => setForm({...form, business: e.target.value})} placeholder="Carter Plumbing - domestic plumbing in Bristol" />
                </div>
                <div className="form-group">
                  <label className="form-label">Which service interests you?</label>
                  <select className="form-select" value={form.services} onChange={(e) => setForm({...form, services: e.target.value})}>
                    <option value="">Not sure yet - would like to chat</option>
                    {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Anything else?</label>
                  <textarea className="form-textarea" value={form.note} onChange={(e) => setForm({...form, note: e.target.value})} placeholder="A line or two about what you're hoping to fix." />
                </div>
                <button className="btn btn-primary btn-lg" style={{ justifyContent: "center" }} type="submit" disabled={sending}>
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

window.Home = Home;
window.ServicesPage = ServicesPage;
window.AboutPage = AboutPage;
window.ContactPage = ContactPage;
