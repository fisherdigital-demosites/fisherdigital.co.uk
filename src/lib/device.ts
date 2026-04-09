/**
 * Device capability detection for tiered experience
 * High-end: full 3D, particles, smooth scroll
 * Mid-range: reduced particles, simplified 3D
 * Low-end: no 3D, CSS-only animations, native scroll
 */

export type DeviceTier = 'high' | 'mid' | 'low';

export function getDeviceTier(): DeviceTier {
  if (typeof window === 'undefined') return 'mid';

  // Check prefers-reduced-motion first
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'low';
  }

  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as any).deviceMemory || 4; // GB, Chrome only
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  const pixelRatio = Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2);

  if (cores >= 8 && memory >= 4 && !isMobile) return 'high';
  if (cores >= 4 && memory >= 2) return 'mid';
  return 'low';
}

/** Cap pixel ratio on mobile for performance */
export function getCappedPixelRatio(): number {
  if (typeof window === 'undefined') return 1;
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  return Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2);
}
