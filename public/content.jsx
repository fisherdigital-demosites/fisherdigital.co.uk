/* global React */
// Default content — wrapped in EDITMODE markers so Tweaks can persist edits.
const DEFAULT_CONTENT = /*EDITMODE-BEGIN*/{
  "ctaUrl": "#book",
  "email": "hello@fisherdigital.co.uk",
  "location": "United Kingdom",
  "founderStory": "We started FisherDigital because the businesses that keep our high streets running (plumbers, dentists, hairdressers) were losing work to missed calls, slow follow-ups, and no time for marketing. The tools to fix this existed, but they were built for big companies with IT departments. So we set up the same systems for local businesses, without them needing to learn a single new platform.",
  "missionLine": "The systems that big companies use to capture every lead and automate their admin, set up and managed for local businesses.",
  "service1Desc": "A friendly voice answers every call, books appointments, and sends confirmations - even at 2am. Your customers never hit voicemail again.",
  "service2Desc": "When a call goes unanswered, an instant text goes out: \"Sorry we missed you - how can we help?\" Turns missed calls into conversations within seconds.",
  "service3Desc": "Instant replies on your website, WhatsApp, and Facebook. Answers questions, qualifies leads, and books jobs while you're on the tools.",
  "service4Desc": "Automatically request reviews after every job and respond to every Google review in your voice. More stars, less effort.",
  "service5Desc": "Every new enquiry gets a follow-up within 5 seconds - by text, email, or both. Multi-step sequences keep working until they book or reply.",
  "service6Desc": "Quote signed? Invoice raised, job in calendar, crew assigned - all automatic. Connect your CRM, calendar, Xero, Stripe, and 200+ other tools.",
  "service7Desc": "On-brand social posts, email campaigns, and blog content - written, scheduled, and published weekly. You just approve on Friday.",
  "service8Desc": "A one-time campaign that reaches out to customers who haven't visited in 6+ months with personalised offers. Typically pays for itself in week one.",
  "testimonialPlaceholder": "Swap in a real customer quote here.",
  "trustedByLabel": "Trusted by local service businesses across the UK",
  "ctaHeading": "Find out where your business is losing leads.",
  "ctaSub": "Book a free 20-minute call. We'll audit your customer journey, show you where enquiries are slipping through, and give you a plan to fix it. No jargon, no obligation.",
  "joshBio": "Handles the technical side. Setting up and managing every system so clients never have to touch a dashboard.",
  "billyBio": "Runs sales and client relationships. If you've spoken to FisherDigital, you've probably spoken to Billy."
};/*EDITMODE-END*/;

const SERVICES = [
  { id: "phone-answering", name: "24/7 Phone Answering", icon: "phone", oneLine: "Every call answered. Every time.", descKey: "service1Desc",
    benefits: ["Books appointments straight into your calendar", "Speaks naturally - no robotic menus", "Sends you a summary after every call"],
    useCase: "A plumber's phone rang at 9:42pm. The call was answered, the issue was gathered, and a 7am slot was booked. A job that would have gone to a competitor by morning." },
  { id: "missed-call-textback", name: "Missed Call Text-Back", icon: "chat", oneLine: "Never lose a missed call.", descKey: "service2Desc",
    benefits: ["Instant text sent within seconds of a missed call", "Keeps the conversation going while you're busy", "Captures the lead before they call someone else"],
    useCase: "An electrician missed 3 calls during a job. Each caller got an instant text and two of them booked by the time he finished." },
  { id: "chat-agent", name: "Instant Chat Agent", icon: "headset", oneLine: "Instant replies, everywhere.", descKey: "service3Desc",
    benefits: ["Works on your website, WhatsApp, and Facebook", "Trained on your services, prices, and FAQs", "Captures contact details and books jobs directly"],
    useCase: "A salon's chat agent handles 80% of \"do you do balayage?\" questions and books consultations - front desk only sees qualified enquiries." },
  { id: "review-management", name: "Review Autopilot", icon: "star", oneLine: "More 5-star reviews, automatically.", descKey: "service4Desc",
    benefits: ["Auto-request reviews after every job", "Responds to every Google review in your voice", "Track your rating trend over time"],
    useCase: "A dental practice went from 47 to 200+ Google reviews in a few months - without anyone manually asking or replying." },
  { id: "lead-nurture", name: "Instant Lead Follow-Up", icon: "leaf", oneLine: "Every lead followed up in seconds.", descKey: "service5Desc",
    benefits: ["Text + email sequences across 14 days", "Personalised by service and quote value", "Stops automatically when they reply or book"],
    useCase: "A roofing company started recovering cold quotes that previously went silent. Each one worth thousands." },
  { id: "workflow-automation", name: "Workflow Automation", icon: "flow", oneLine: "Your admin runs itself.", descKey: "service6Desc",
    benefits: ["Quote signed, invoice raised, job in calendar - automatic", "No more copy-pasting between 6 tabs", "Works with Xero, Google, Stripe, and 200+ tools"],
    useCase: "A garden design firm saved 11 hours a week by removing manual data entry between their CRM, accounting, and project tools." },
  { id: "content-social", name: "Content & Social Media", icon: "edit", oneLine: "Always-on marketing.", descKey: "service7Desc",
    benefits: ["Weekly social posts in your brand voice", "Monthly email newsletter, written and sent", "Blog articles for local SEO"],
    useCase: "A restaurant gets 3 Instagram posts and a newsletter every week - all approved in a 10-minute Friday review." },
  { id: "database-reactivation", name: "Customer Reactivation", icon: "database", oneLine: "Turn old customers into new revenue.", descKey: "service8Desc",
    benefits: ["Segment customers by last visit or service", "Personalised win-back offers sent automatically", "Typically pays for itself in the first week"],
    useCase: "A barbershop reached out to 340 customers who hadn't visited in 6+ months. Over eight thousand pounds in bookings within two weeks." },
];

const NAV_ITEMS = [
  { href: "#/", label: "Home" },
  { href: "#/services", label: "Services" },
  { href: "#/about", label: "About" },
  { href: "#/careers", label: "Careers" },
  { href: "#/contact", label: "Contact" },
];

const FAQ_ITEMS = [
  { q: "How much does it cost?", a: "Every business is different, so we price based on what you actually need. Most clients pay a monthly fee that covers setup, management, and ongoing support. We'll give you a clear breakdown on your discovery call, no hidden costs." },
  { q: "How long does setup take?", a: "Most systems are live within 2 to 4 weeks. We handle everything: configuration, training the AI on your business, testing, and handover. You don't need to learn any new software." },
  { q: "Do I need to sign a long contract?", a: "No. We work on rolling monthly agreements. If it's not working for you, you can cancel anytime. We'd rather earn your business every month than lock you in." },
  { q: "Will my customers know they're talking to AI?", a: "The AI is trained to sound natural and helpful, not robotic. Most callers don't realise. But we're always transparent: if a customer asks directly, the system will let them know and offer to connect them with a real person." },
  { q: "What happens if the AI can't handle a question?", a: "It escalates to you or your team immediately via text, email, or call transfer. The AI knows its limits and will always hand over rather than give a wrong answer." },
  { q: "Do I need any technical knowledge?", a: "None at all. We set everything up, manage it, and send you monthly reports. If something needs changing, you just message us." },
  { q: "Can I start with just one service?", a: "Absolutely. Most clients start with phone answering or missed call text-back and add more as they see results. We'll recommend what to start with based on your discovery call." },
  { q: "What industries do you work with?", a: "Any local service business: plumbers, electricians, dentists, salons, restaurants, law firms, estate agents, gyms, vets, and more. If you serve customers locally, we can help." },
];

const CAREER_ROLES = [
  {
    id: "bdr",
    title: "Business Development Representative",
    type: "Commission-Based",
    location: "Remote (UK)",
    internal: false,
    description: "You'll be the first voice potential clients hear. Your job is to call local service businesses, start genuine conversations about the challenges they face, and book discovery calls for our team. No hard selling. Just real conversations with real business owners.",
    responsibilities: [
      "Make outbound calls to qualified local businesses across the UK",
      "Identify businesses losing leads to missed calls, slow follow-ups, or manual admin",
      "Book discovery calls with interested prospects into our calendar",
      "Follow up with warm leads via phone and email",
      "Keep our CRM updated with accurate notes after every conversation",
    ],
    requirements: [
      "Confident and clear communicator who can build rapport quickly",
      "Self-motivated and comfortable working independently",
      "Comfortable making 30-50 calls per day",
      "Based in the UK with a reliable phone and internet connection",
      "Available for at least 20 hours per week during UK business hours",
    ],
    offer: [
      "Uncapped commission on every booked call that converts to a client",
      "Full training on our services, scripts, and CRM tools",
      "Flexible hours that fit around your schedule",
      "Clear path to Account Executive role as we grow",
    ],
  },
  {
    id: "account-exec",
    title: "Account Executive",
    type: "Commission-Based",
    location: "Remote (UK)",
    internal: true,
    description: "You'll run discovery calls with local business owners, diagnose where they are losing leads or wasting time, and close deals. This is a consultative role. You are solving real problems for real people, and getting paid well for it.",
    responsibilities: [
      "Run 20-minute discovery calls with pre-qualified prospects",
      "Diagnose where the business is losing leads, time, or revenue",
      "Present tailored solutions from our service catalogue",
      "Close deals and hand off to our delivery team for onboarding",
      "Follow up with warm prospects who need more time to decide",
    ],
    requirements: [
      "Proven track record closing B2B or B2C service sales",
      "Comfortable running video and phone calls with business owners",
      "Consultative selling style, not pushy or scripted",
      "Based in the UK with availability during business hours",
      "Existing experience at FisherDigital as a BDR or equivalent",
    ],
    offer: [
      "High-value commissions on recurring monthly contracts",
      "Pre-qualified leads booked directly into your calendar",
      "Full training on AI services, pricing, and objection handling",
      "Senior role in a growing agency with real equity potential",
    ],
  },
];

window.FAQ_ITEMS = FAQ_ITEMS;
window.CAREER_ROLES = CAREER_ROLES;

window.DEFAULT_CONTENT = DEFAULT_CONTENT;
window.SERVICES = SERVICES;
window.NAV_ITEMS = NAV_ITEMS;
