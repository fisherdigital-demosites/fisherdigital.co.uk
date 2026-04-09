export interface DemoSite {
  id: number;
  slug: string;
  businessName: string;
  niche: string;
  device: 'laptop' | 'phone';
  accentColor: string;
  brief: string;
  results: string[];
  liveUrl: string;
}

export const demoSites: DemoSite[] = [
  {
    id: 1,
    slug: 'westbury-plumbing',
    businessName: 'Westbury Plumbing & Heating',
    niche: 'Plumber',
    device: 'laptop',
    accentColor: '#C07A4A',
    brief: 'Family-run plumber in North Bristol. Twenty years of reputation, zero online presence.',
    results: [
      'Page 1 on Google within 8 weeks',
      'Click-to-call on every page',
      'Emergency callout section with 24/7 contact',
    ],
    liveUrl: '#',
  },
  {
    id: 2,
    slug: 'bright-smile-dental',
    businessName: 'Bright Smile Dental',
    niche: 'Dental Practice',
    device: 'phone',
    accentColor: '#06b6d4',
    brief: 'Modern dental practice in Clifton losing patients to competitors with better websites.',
    results: [
      'AI chatbot handling enquiries 24/7',
      'Online booking integrated with practice diary',
      'Google Reviews displayed site-wide',
    ],
    liveUrl: '#',
  },
  {
    id: 3,
    slug: 'redwood-and-co',
    businessName: 'Redwood & Co',
    niche: 'Estate Agent',
    device: 'laptop',
    accentColor: '#1a3c5e',
    brief: 'Independent estate agent competing against Rightmove-backed chains.',
    results: [
      '24/7 enquiry handling with instant response',
      'Automated enquiry-to-viewing workflow',
      'Area guide pages for 12 Bristol neighbourhoods',
    ],
    liveUrl: '#',
  },
];
