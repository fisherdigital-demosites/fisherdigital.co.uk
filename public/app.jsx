/* global React, ReactDOM, useHashRoute, useReveal, Nav, Footer, Home, ServicesPage, AboutPage, ContactPage, DEFAULT_CONTENT, useTweaks, TweaksPanel, TweakSection, TweakText */

// Multi-line text input for the Tweaks panel — there's no built-in TweakLongText.
const TweakLongText = ({ label, value, onChange }) => (
  <div className="twk-row" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
    <label style={{ fontSize: 11, color: "#9aa0a6" }}>{label}</label>
    <textarea
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      rows={3}
      style={{
        width: "100%", boxSizing: "border-box",
        background: "#1a1a1a", color: "#e8e8e8",
        border: "1px solid #2a2a2a", borderRadius: 4,
        padding: "6px 8px", fontSize: 12,
        fontFamily: "inherit", resize: "vertical", lineHeight: 1.4,
      }}
    />
  </div>
);
const { useEffect } = React;

const App = () => {
  const route = useHashRoute();
  // Strip anchor for matching: "#/services#ai-receptionist" -> "#/services"
  const baseRoute = route.split("#").slice(0, 2).join("#") || "#/";

  const [tw, setTweak] = useTweaks(DEFAULT_CONTENT);

  // re-run reveal observer on route change
  useReveal();
  useEffect(() => {
    // also force a reveal pass after page swap (some elements may already be visible)
    const els = document.querySelectorAll(".reveal:not(.in)");
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95) el.classList.add("in");
    });
  }, [baseRoute]);

  let Page;
  switch (baseRoute) {
    case "#/services": Page = ServicesPage; break;
    case "#/about": Page = AboutPage; break;
    case "#/contact": Page = ContactPage; break;
    default: Page = Home;
  }

  return (
    <>
      <Nav currentRoute={baseRoute} />
      <main key={baseRoute}><Page tw={tw} /></main>
      <Footer tw={tw} />

      <TweaksPanel title="Tweaks · Content">
        <TweakSection label="CTA & contact">
          <TweakText label="Booking URL" value={tw.ctaUrl} onChange={(v) => setTweak("ctaUrl", v)} />
          <TweakText label="Email" value={tw.email} onChange={(v) => setTweak("email", v)} />
          <TweakText label="Phone" value={tw.phone} onChange={(v) => setTweak("phone", v)} />
          <TweakText label="Location" value={tw.location} onChange={(v) => setTweak("location", v)} />
        </TweakSection>
        <TweakSection label="CTA banner">
          <TweakText label="Heading" value={tw.ctaHeading} onChange={(v) => setTweak("ctaHeading", v)} />
          <TweakLongText label="Sub-copy" value={tw.ctaSub} onChange={(v) => setTweak("ctaSub", v)} />
          <TweakText label="Trusted-by label" value={tw.trustedByLabel} onChange={(v) => setTweak("trustedByLabel", v)} />
        </TweakSection>
        <TweakSection label="About content">
          <TweakLongText label="Mission line" value={tw.missionLine} onChange={(v) => setTweak("missionLine", v)} />
          <TweakLongText label="Founder story" value={tw.founderStory} onChange={(v) => setTweak("founderStory", v)} />
          <TweakLongText label="Josh bio" value={tw.joshBio} onChange={(v) => setTweak("joshBio", v)} />
          <TweakLongText label="Billy bio" value={tw.billyBio} onChange={(v) => setTweak("billyBio", v)} />
        </TweakSection>
        <TweakSection label="Service descriptions">
          <TweakLongText label="24/7 Phone Answering" value={tw.service1Desc} onChange={(v) => setTweak("service1Desc", v)} />
          <TweakLongText label="Missed Call Text-Back" value={tw.service2Desc} onChange={(v) => setTweak("service2Desc", v)} />
          <TweakLongText label="Instant Chat Agent" value={tw.service3Desc} onChange={(v) => setTweak("service3Desc", v)} />
          <TweakLongText label="Review Autopilot" value={tw.service4Desc} onChange={(v) => setTweak("service4Desc", v)} />
          <TweakLongText label="Instant Lead Follow-Up" value={tw.service5Desc} onChange={(v) => setTweak("service5Desc", v)} />
          <TweakLongText label="Workflow Automation" value={tw.service6Desc} onChange={(v) => setTweak("service6Desc", v)} />
          <TweakLongText label="Content & Social Media" value={tw.service7Desc} onChange={(v) => setTweak("service7Desc", v)} />
          <TweakLongText label="Customer Reactivation" value={tw.service8Desc} onChange={(v) => setTweak("service8Desc", v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
