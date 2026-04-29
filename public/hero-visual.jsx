/* global React, Icon */
// Abstract animated visual for the hero — concentric rings + drifting orb +
// a "live call" terminal. No stock imagery, no robot tropes.

const HeroVisual = () => {
  return (
    <div className="orb-wrap" aria-hidden="true">
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(8px, -10px) scale(1.04); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes typewriter {
          0%, 20% { width: 0; }
          60%, 100% { width: 100%; }
        }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes float-up {
          0% { transform: translateY(8px); opacity: 0; }
          15%, 85% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-8px); opacity: 0; }
        }
        .hv-bg {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .hv-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(to right, rgba(8,102,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(8,102,255,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, #000 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(circle at center, #000 30%, transparent 75%);
        }
        .hv-orb {
          position: absolute;
          width: 65%; aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #4d8bff, #0866FF 40%, #0040b8 80%);
          filter: blur(30px);
          opacity: 0.55;
          animation: drift 8s ease-in-out infinite;
        }
        .hv-ring {
          position: absolute;
          width: 50%; aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid rgba(8, 102, 255, 0.25);
        }
        .hv-ring.r2 { width: 70%; border-color: rgba(8,102,255,0.18); }
        .hv-ring.r3 { width: 90%; border-color: rgba(8,102,255,0.1); }
        .hv-pulse {
          position: absolute;
          width: 50%; aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid rgba(8,102,255,0.4);
          animation: pulse-ring 3s ease-out infinite;
        }
        .hv-pulse.delay { animation-delay: 1.5s; }

        .hv-card {
          position: relative;
          width: 78%;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 14px;
          box-shadow: 0 20px 50px -20px rgba(8,30,80,0.18), 0 0 0 1px rgba(255,255,255,0.6) inset;
          padding: 14px;
          font-family: var(--font-mono);
          font-size: 11px;
          z-index: 2;
        }
        .hv-row { display: flex; align-items: center; gap: 8px; padding: 6px 0; }
        .hv-row .ts { color: var(--muted-2); font-size: 10px; min-width: 38px; }
        .hv-row .who { color: var(--brand); min-width: 32px; font-weight: 500; }
        .hv-row .who.user { color: var(--muted); }
        .hv-row .msg { color: var(--ink); }
        .hv-row.live .msg::after {
          content: "▍";
          color: var(--brand);
          margin-left: 2px;
          animation: blink 1s steps(1) infinite;
        }
        .hv-divider { height: 1px; background: var(--line-2); margin: 6px 0; }
        .hv-status {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; color: var(--muted);
          padding: 4px 8px;
          background: var(--surface-2);
          border: 1px solid var(--line);
          border-radius: 999px;
        }
        .hv-status .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #16a34a;
          box-shadow: 0 0 0 3px rgba(22,163,74,0.18);
        }

        .hv-floater {
          position: absolute;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 7px 10px;
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--ink);
          box-shadow: 0 6px 20px -8px rgba(8,30,80,0.15);
          display: flex; align-items: center; gap: 8px;
          z-index: 3;
        }
        .hv-floater .ic {
          width: 18px; height: 18px; border-radius: 4px;
          background: var(--brand-soft); color: var(--brand);
          display: flex; align-items: center; justify-content: center;
        }
        .hv-floater.f1 { top: 8%; right: -2%; animation: float-up 4.5s ease-in-out infinite; }
        .hv-floater.f2 { bottom: 12%; left: -4%; animation: float-up 4.5s ease-in-out 2s infinite; }
      `}</style>

      <div className="hv-bg">
        <div className="hv-grid" />
        <div className="hv-ring r3" />
        <div className="hv-ring r2" />
        <div className="hv-ring" />
        <div className="hv-orb" />
        <div className="hv-pulse" />
        <div className="hv-pulse delay" />
      </div>

      <div className="hv-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span className="hv-status"><span className="dot" /> Live call · 00:42</span>
          <span style={{ color: "var(--muted-2)", fontSize: 10 }}>+44 7… 9pm</span>
        </div>
        <div className="hv-row"><span className="ts">21:14</span><span className="who user">Caller</span><span className="msg">Hi, my boiler's leaking.</span></div>
        <div className="hv-row"><span className="ts">21:14</span><span className="who">FD</span><span className="msg">No problem - what's your postcode?</span></div>
        <div className="hv-row"><span className="ts">21:15</span><span className="who user">Caller</span><span className="msg">SW6 4LP</span></div>
        <div className="hv-divider" />
        <div className="hv-row live"><span className="ts">21:15</span><span className="who">FD</span><span className="msg">Got it. Booking a 7am slot tomorrow with Tom</span></div>
      </div>

      <div className="hv-floater f1">
        <span className="ic"><Icon name="check" size={11} /></span>
        Job booked → calendar
      </div>
      <div className="hv-floater f2">
        <span className="ic"><Icon name="trend" size={11} /></span>
        +£420 pipeline
      </div>
    </div>
  );
};

window.HeroVisual = HeroVisual;
