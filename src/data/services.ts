export interface ServiceTier {
  name: string;
  price: string;
  monthly: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
}

export const serviceTiers: ServiceTier[] = [
  {
    name: 'Essential',
    price: 'From £800',
    monthly: '+ £39/mo',
    tagline: 'Everything you need to get found online',
    features: [
      'Up to 5 pages, mobile-optimised',
      'Contact form, click-to-call, WhatsApp',
      'Google Maps + Google Business Profile setup',
      'SEO fundamentals + Search Console',
      'Privacy policy, terms & cookie consent',
      'Analytics setup (GA4)',
    ],
  },
  {
    name: 'Professional',
    price: 'From £2,500',
    monthly: '+ £99/mo',
    tagline: 'Your website works while you sleep',
    highlighted: true,
    features: [
      'Everything in Essential',
      'AI chatbot that handles enquiries 24/7',
      'Online booking system',
      'Google Reviews on your site',
      'Monthly analytics report',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'Premium',
    price: 'From £5,000',
    monthly: '+ £249/mo',
    tagline: 'Your digital employee',
    features: [
      'Everything in Professional',
      'AI receptionist that answers your phone',
      'Workflow automation (enquiry to follow-up)',
      'Priority support',
      '5 content updates/month',
      'Quarterly strategy call',
    ],
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Quick discovery call',
    description: 'We learn about your business, your customers, and what you actually need. 15 minutes, no pressure.',
    icon: 'search',
  },
  {
    step: 2,
    title: 'We build your site on us',
    description: 'We design and build a complete working version of your new site. You don\'t pay anything at this stage.',
    icon: 'paintbrush',
  },
  {
    step: 3,
    title: 'You see it before you pay',
    description: 'We walk you through a live demo of your finished site. If you love it, we move forward. If not, no hard feelings.',
    icon: 'message',
  },
  {
    step: 4,
    title: 'We launch and set everything up',
    description: 'Your site goes live. For Professional and Premium clients, we configure your chatbot, booking system, or AI receptionist too.',
    icon: 'rocket',
  },
  {
    step: 5,
    title: 'We keep it working',
    description: 'Monthly reports, search ranking updates, and ongoing improvements. Your site gets better over time.',
    icon: 'chart',
  },
];
