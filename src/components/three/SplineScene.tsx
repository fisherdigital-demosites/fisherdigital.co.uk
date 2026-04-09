import { useEffect, useRef } from 'react';

export default function SplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const targetRotation = useRef({ x: 4, y: -10 });
  const currentRotation = useRef({ x: 4, y: -10 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const laptop = laptopRef.current;
    if (!container || !laptop) return;

    const animate = () => {
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.06;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.06;
      laptop.style.transform = `rotateX(${currentRotation.current.x}deg) rotateY(${currentRotation.current.y}deg)`;
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      targetRotation.current.y = ((e.clientX / window.innerWidth) - 0.5) * 16 - 2;
      targetRotation.current.x = ((0.5 - e.clientY / window.innerHeight)) * 10 + 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const words = ['Design.', 'Automate.', 'Convert.', 'Grow.'];

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center" style={{ perspective: '1800px' }}>
      <div
        ref={laptopRef}
        className="relative w-full max-w-[520px]"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(4deg) rotateY(-10deg)' }}
      >
        {/* Screen */}
        <div
          style={{
            background: 'linear-gradient(145deg, #2c2c2e 0%, #1d1d1f 50%, #2c2c2e 100%)',
            borderRadius: '16px 16px 0 0',
            padding: '12px 12px 0 12px',
            boxShadow: '0 -2px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <div className="flex justify-center py-[6px]">
            <div className="w-[6px] h-[6px] rounded-full" style={{ background: 'radial-gradient(circle, #3a3a3c, #1d1d1f)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)' }} />
          </div>

          <div
            className="relative overflow-hidden bg-white"
            style={{ aspectRatio: '16 / 10', borderRadius: '4px 4px 0 0' }}
          >
            {/* 4 word panels stacked — GSAP controls which is visible */}
            {words.map((word, i) => (
              <div
                key={word}
                className="screen-word absolute inset-0 flex items-center justify-center bg-white"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <span
                  className="text-[32px] md:text-[36px] font-bold tracking-tight text-[#1a1a2e]"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {word}
                </span>
              </div>
            ))}

            {/* Screen reflection */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(115deg, rgba(255,255,255,0.06) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.02) 100%)',
              }}
            />
          </div>
        </div>

        {/* Chin */}
        <div style={{ height: '6px', background: 'linear-gradient(to bottom, #1d1d1f, #2c2c2e)', borderRadius: '0 0 2px 2px', marginLeft: '12px', marginRight: '12px' }} />

        {/* Hinge */}
        <div style={{ height: '8px', background: 'linear-gradient(to bottom, #c0c0c0 0%, #a8a8a8 30%, #d4d4d4 50%, #b0b0b0 100%)', borderRadius: '0 0 2px 2px', marginLeft: '2%', marginRight: '2%', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'relative', zIndex: 2 }} />

        {/* Base */}
        <div style={{ height: '10px', background: 'linear-gradient(to bottom, #e4e4e4 0%, #d0d0d0 100%)', borderRadius: '0 0 8px 8px', marginLeft: '-1%', marginRight: '-1%', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', position: 'relative' }}>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0" style={{ width: '14%', height: '3px', background: '#c0c0c0', borderRadius: '3px 3px 0 0' }} />
        </div>

        {/* Shadow */}
        <div className="absolute -z-10" style={{ bottom: '-20px', left: '8%', right: '8%', height: '40px', background: 'radial-gradient(ellipse 100% 100%, rgba(0,0,0,0.18), transparent 70%)', filter: 'blur(16px)' }} />

        {/* Accent glow */}
        <div className="absolute -z-20" style={{ inset: '-40px', background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(8,102,255,0.08), transparent 70%)', filter: 'blur(40px)' }} />
      </div>
    </div>
  );
}
