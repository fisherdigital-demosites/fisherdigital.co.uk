import { lazy, Suspense, useEffect, useState } from 'react';

const HeroScene = lazy(() => import('./HeroScene'));

/** Only mount Three.js on capable devices */
function useCanRender3D() {
  const [can, setCan] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cores = navigator.hardwareConcurrency || 2;
    if (cores >= 4) setCan(true);
  }, []);
  return can;
}

export default function HeroCanvas() {
  const canRender = useCanRender3D();
  if (!canRender) return null;
  return (
    <Suspense fallback={null}>
      <HeroScene />
    </Suspense>
  );
}
