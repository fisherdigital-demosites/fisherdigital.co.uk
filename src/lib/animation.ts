/**
 * GSAP animation presets for FisherDigital
 * Import and use with gsap.to() / ScrollTrigger
 */
import { gsap } from 'gsap';

// Register plugins lazily (called once from layout)
export async function registerGSAP() {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  const { SplitText } = await import('gsap/SplitText');
  gsap.registerPlugin(ScrollTrigger, SplitText);
  return { ScrollTrigger, SplitText };
}

// ---- Reusable animation defaults ----

export const DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  xslow: 1.5,
} as const;

export const EASING = {
  outExpo: 'expo.out',
  outQuart: 'quart.out',
  inOutQuart: 'quart.inOut',
  outBack: 'back.out(1.4)',
} as const;

// ---- Preset animations ----

/** Fade up from below */
export function fadeUp(targets: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.from(targets, {
    y: 60,
    opacity: 0,
    duration: DURATIONS.normal,
    ease: EASING.outExpo,
    stagger: 0.1,
    ...vars,
  });
}

/** Scale in from nothing */
export function scaleIn(targets: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.from(targets, {
    scale: 0.85,
    opacity: 0,
    duration: DURATIONS.normal,
    ease: EASING.outBack,
    stagger: 0.08,
    ...vars,
  });
}

/** Slide from left */
export function slideFromLeft(targets: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.from(targets, {
    x: -100,
    opacity: 0,
    duration: DURATIONS.slow,
    ease: EASING.outExpo,
    ...vars,
  });
}

/** Slide from right */
export function slideFromRight(targets: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.from(targets, {
    x: 100,
    opacity: 0,
    duration: DURATIONS.slow,
    ease: EASING.outExpo,
    ...vars,
  });
}

/** Counter animation (for stats) */
export function animateCounter(
  target: HTMLElement,
  endValue: number,
  vars?: gsap.TweenVars
) {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: endValue,
    duration: DURATIONS.xslow,
    ease: EASING.outQuart,
    onUpdate: () => {
      target.textContent = Math.round(obj.value).toString();
    },
    ...vars,
  });
}

/** ScrollTrigger defaults for section reveals */
export function sectionTrigger(trigger: string | Element) {
  return {
    trigger,
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse' as const,
  };
}

/** SplitText character/word reveal for major headings */
export function splitTextReveal(
  target: Element,
  type: 'chars' | 'words' = 'chars',
  vars?: gsap.TweenVars
) {
  // Requires SplitText to be registered
  const { SplitText } = gsap as any;
  if (!SplitText) return null;
  const split = new SplitText(target, { type: `${type},words` });
  return {
    split,
    animate: (tl: gsap.core.Timeline) =>
      tl.from(split[type], {
        y: 100,
        rotateX: -60,
        opacity: 0,
        duration: 1,
        ease: EASING.outExpo,
        stagger: 0.02,
        ...vars,
      }),
  };
}

/** Standard ScrollTrigger pin config */
export function pinSection(trigger: string | Element, endMultiplier = 1.5) {
  return {
    trigger,
    start: 'top top',
    end: `+=${window.innerHeight * endMultiplier}`,
    pin: true,
    scrub: 1,
  };
}

/** Magnetic hover effect for buttons/elements */
export function magneticHover(element: HTMLElement, strength = 0.2) {
  const onMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(element, { x: x * strength, y: y * strength, duration: 0.3, ease: 'power2.out' });
  };
  const onLeave = () => {
    gsap.to(element, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
  };
  element.addEventListener('mousemove', onMove);
  element.addEventListener('mouseleave', onLeave);
  return () => {
    element.removeEventListener('mousemove', onMove);
    element.removeEventListener('mouseleave', onLeave);
  };
}

/** SVG stroke-dasharray draw animation */
export function drawSVG(targets: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.from(targets, {
    strokeDashoffset: (i: number, el: SVGElement) => {
      const length = (el as SVGPathElement).getTotalLength?.() || 100;
      el.style.strokeDasharray = `${length}`;
      return length;
    },
    duration: DURATIONS.xslow,
    ease: EASING.outQuart,
    ...vars,
  });
}

/** Gradient blend transition between sections */
export function blendTransition(trigger: string | Element, fromColor: string, toColor: string) {
  return gsap.to(trigger, {
    background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}
