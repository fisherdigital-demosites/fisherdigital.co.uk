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
  { href: "#/contact", label: "Contact" },
];

window.DEFAULT_CONTENT = DEFAULT_CONTENT;
window.SERVICES = SERVICES;
window.NAV_ITEMS = NAV_ITEMS;
