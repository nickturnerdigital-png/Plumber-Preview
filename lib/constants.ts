export const COMPANY = {
  name: "Pacific Crest Plumbing",
  shortName: "Pacific Crest",
  tagline: "Victoria's Most Trusted Plumbing Experts",
  phone: "(250) 555-0198",
  phoneRaw: "+12505550198",
  email: "service@pacificcrestplumbing.ca",
  address: "1247 Government Street, Victoria, BC V8W 1Y4",
  license: "BC Lic #PL-48291",
  founded: 2001,
  hours: {
    weekday: "7:00 AM – 8:00 PM",
    weekend: "8:00 AM – 6:00 PM",
    emergency: "24/7 Emergency Service",
  },
  social: {
    facebook: "https://facebook.com/pacificcrestplumbing",
    instagram: "https://instagram.com/pacificcrestplumbing",
    google: "https://g.page/pacificcrestplumbing",
  },
} as const;

export const STATS = [
  { value: 1847, suffix: "+", label: "Jobs Completed", icon: "Wrench" },
  { value: 4.9, suffix: "★", label: "Average Rating", icon: "Star", decimals: 1 },
  { value: 29, suffix: " min", label: "Average Response", icon: "Clock" },
  { value: 23, suffix: " yrs", label: "In Business", icon: "Shield" },
] as const;

export const SERVICES = [
  {
    id: "emergency",
    icon: "Siren",
    name: "24/7 Emergency Plumbing",
    short: "Burst pipe? Flooding? We're on the way in under 30 minutes.",
    long: "When water is where it shouldn't be, every minute counts. Our 24/7 emergency response team is dispatched the moment you call, with fully-stocked trucks ready for any disaster.",
    includes: [
      "Burst pipe repair",
      "Flood mitigation",
      "Emergency shut-off",
      "After-hours availability",
      "Same-day service guarantee",
    ],
    startingPrice: 149,
    accent: "emergency",
  },
  {
    id: "drains",
    icon: "Waves",
    name: "Drain Cleaning & Unclogging",
    short: "Stubborn clogs and slow drains, gone for good — with camera inspection included.",
    long: "From kitchen sinks to main sewer lines, we use hydro-jetting and camera inspection to clear blockages at the source and prevent recurrence.",
    includes: [
      "Hydro-jetting",
      "Camera inspection",
      "Root removal",
      "Grease trap cleaning",
      "Preventive maintenance",
    ],
    startingPrice: 129,
    accent: "electric",
  },
  {
    id: "water-heater",
    icon: "Flame",
    name: "Water Heater Services",
    short: "Repair, replace, or upgrade to tankless — installed same-day in most cases.",
    long: "Whether your existing tank failed or you're ready to upgrade to a high-efficiency tankless system, our certified techs handle installation, removal, and rebate paperwork.",
    includes: [
      "Tank & tankless install",
      "Same-day replacement",
      "BC Hydro rebate filing",
      "10-year warranty",
      "Annual maintenance plans",
    ],
    startingPrice: 199,
    accent: "copper",
  },
  {
    id: "leaks",
    icon: "Droplets",
    name: "Leak Detection & Repair",
    short: "Acoustic and thermal imaging finds hidden leaks before they ruin your home.",
    long: "Hidden leaks waste water and rot structure. Our non-invasive detection equipment pinpoints the source without tearing apart walls.",
    includes: [
      "Acoustic leak detection",
      "Thermal imaging",
      "Pipe repair & replacement",
      "Insurance documentation",
      "Water damage prevention",
    ],
    startingPrice: 179,
    accent: "electric",
  },
  {
    id: "renovations",
    icon: "Hammer",
    name: "Bathroom & Kitchen Renovations",
    short: "Permits, planning, and pristine pipework for your dream remodel.",
    long: "Full-service plumbing for renovations — from rough-in to final fixture install. We coordinate with your contractor or handle the whole project.",
    includes: [
      "Permit handling",
      "Fixture install",
      "Pipe re-routing",
      "Contractor coordination",
      "3D planning consultation",
    ],
    startingPrice: 2499,
    accent: "copper",
  },
  {
    id: "sewer",
    icon: "Pipette",
    name: "Sewer Line Services",
    short: "Trenchless repair and replacement — minimal yard disruption, maximum durability.",
    long: "Sewer issues are messy and expensive — unless you call us first. Our trenchless technology means no torn-up landscaping and a 50-year pipe lifespan.",
    includes: [
      "Trenchless replacement",
      "Pipe lining",
      "Camera diagnostics",
      "Backflow prevention",
      "Municipal coordination",
    ],
    startingPrice: 899,
    accent: "navy",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    neighborhood: "Oak Bay",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 5,
    date: "2 weeks ago",
    source: "Google",
    quote:
      "Called at 11pm with a burst pipe — Pacific Crest had a technician at our door in 22 minutes. Professional, kind, and the price was exactly what they quoted. Saved our hardwood floors.",
  },
  {
    name: "James Chen",
    neighborhood: "Saanich",
    avatar: "https://i.pravatar.cc/120?img=12",
    rating: 5,
    date: "1 month ago",
    source: "Google",
    quote:
      "We've used three plumbers in Victoria over the years. Pacific Crest is the only one we'll call now. Fair pricing, no upselling, and the work is bulletproof.",
  },
  {
    name: "Margaret Doyle",
    neighborhood: "Esquimalt",
    avatar: "https://i.pravatar.cc/120?img=44",
    rating: 5,
    date: "3 weeks ago",
    source: "HomeStars",
    quote:
      "Replaced our 30-year-old water heater with a tankless system. They handled the BC Hydro rebate paperwork and were done in a single afternoon. My energy bill dropped 18%.",
  },
  {
    name: "David Park",
    neighborhood: "Langford",
    avatar: "https://i.pravatar.cc/120?img=33",
    rating: 5,
    date: "1 week ago",
    source: "Google",
    quote:
      "I'm a contractor and I sub out plumbing on most jobs. Pacific Crest is the only crew I trust on my higher-end builds. Clean work, on time, every time.",
  },
  {
    name: "Linda Wallace",
    neighborhood: "Sidney",
    avatar: "https://i.pravatar.cc/120?img=48",
    rating: 5,
    date: "2 months ago",
    source: "Google",
    quote:
      "Discovered a slow leak behind a wall. They used some kind of camera to find it without tearing apart the drywall. Smart, efficient, and remarkably tidy. Highly recommend.",
  },
  {
    name: "Robert Tanaka",
    neighborhood: "View Royal",
    avatar: "https://i.pravatar.cc/120?img=15",
    rating: 5,
    date: "5 weeks ago",
    source: "HomeStars",
    quote:
      "Full bathroom reno — they coordinated with our GC, pulled the permits, and stayed on schedule. The final inspection passed first try. Couldn't ask for more.",
  },
] as const;

export const NEIGHBORHOODS = [
  "Downtown Victoria",
  "Oak Bay",
  "Saanich",
  "Esquimalt",
  "Langford",
  "Colwood",
  "View Royal",
  "Sidney",
  "Sooke",
  "Central Saanich",
  "North Saanich",
  "Metchosin",
  "Highlands",
  "James Bay",
  "Fairfield",
  "Fernwood",
] as const;

export const FAQS = [
  {
    q: "How quickly can you respond to a plumbing emergency?",
    a: "Our average response time across Greater Victoria is under 30 minutes, 24 hours a day, 7 days a week. We dispatch the closest available technician the moment you call — no answering services, no callbacks.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. For all non-emergency work, we provide free, no-obligation written estimates with flat-rate pricing. No surprise fees, no hourly games. The price we quote is the price you pay.",
  },
  {
    q: "Are your plumbers licensed and insured in BC?",
    a: "Absolutely. Every technician holds a Red Seal Journeyman certification and we carry $5M in liability insurance. Our company license is BC #PL-48291, and we are registered with the BC Wastewater & Waste Association.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Greater Victoria and the surrounding CRD, including Oak Bay, Saanich, Esquimalt, Langford, Colwood, Sidney, Sooke, and everywhere in between. Not sure if you're in our zone? Just call.",
  },
  {
    q: "Do you handle insurance claims?",
    a: "Yes — we document everything (photos, moisture readings, scope of work) and work directly with your insurance adjuster. Many of our customers find their entire claim is approved without additional back-and-forth.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, Interac e-Transfer, cheque, and cash. Financing through Financeit is available for projects over $1,000 — terms as low as 0% for qualified applicants.",
  },
  {
    q: "Do you offer maintenance plans?",
    a: "Our Crest Care membership ($14/month) includes annual inspection, priority dispatch, 15% off all repairs, and waived after-hours fees. Most members report it pays for itself in the first service call.",
  },
  {
    q: "What is your guarantee?",
    a: "All workmanship is guaranteed for 2 years. Parts carry the manufacturer warranty (typically 1–10 years). If you're not satisfied with the work, we'll make it right — that's our Crest Promise.",
  },
] as const;

export const TEAM = [
  {
    name: "Mike Crestwood",
    role: "Founder & Master Plumber",
    bio: "23 years in the trade. Started Pacific Crest with one truck and a promise: do it right the first time.",
    avatar: "https://i.pravatar.cc/200?img=11",
    cert: "Red Seal Journeyman, Gas Fitter A",
  },
  {
    name: "Aiden Thomson",
    role: "Lead Service Technician",
    bio: "Specializes in leak detection and trenchless sewer repair. Will absolutely fix your sink and ask about your dog.",
    avatar: "https://i.pravatar.cc/200?img=14",
    cert: "Red Seal Journeyman, Cross-Connection Specialist",
  },
  {
    name: "Priya Sharma",
    role: "Renovation Project Manager",
    bio: "Architect-turned-plumber. Brings beauty and precision to every bathroom and kitchen project.",
    avatar: "https://i.pravatar.cc/200?img=45",
    cert: "Red Seal Journeyman, BCBC Building Code Certified",
  },
  {
    name: "Marcus Reyes",
    role: "Emergency Response Lead",
    bio: "The voice you hear at 2am. Famously calm under pressure. Trained the entire emergency crew.",
    avatar: "https://i.pravatar.cc/200?img=33",
    cert: "Red Seal Journeyman, Backflow Prevention Tester",
  },
] as const;

export const TRUST_BADGES = [
  { name: "BCWWA Member", short: "BCWWA" },
  { name: "BBB A+ Accredited", short: "BBB A+" },
  { name: "Google Guaranteed", short: "Google" },
  { name: "HomeStars Best of 2024", short: "HomeStars" },
  { name: "TSBC Certified", short: "TSBC" },
  { name: "WorkSafe BC Compliant", short: "WorkSafe" },
] as const;

export const BEFORE_AFTER = [
  {
    title: "Kitchen Drain Restoration",
    location: "Oak Bay residence",
    before: "/images/before-after/kitchen-drain-before.jpg",
    after: "/images/before-after/kitchen-drain-after.jpg",
    description: "30 years of grease buildup hydro-jetted and restored to full flow.",
  },
  {
    title: "Tankless Water Heater Upgrade",
    location: "Saanich home",
    before: "/images/before-after/water-heater-before.jpg",
    after: "/images/before-after/water-heater-after.jpg",
    description: "Replaced an aging 50-gal tank with a high-efficiency Navien tankless system.",
  },
  {
    title: "Master Bath Renovation",
    location: "Fairfield character home",
    before: "/images/before-after/bathroom-before.jpg",
    after: "/images/before-after/bathroom-after.jpg",
    description: "Full rough-in and fixture install for a heritage home remodel.",
  },
] as const;

export const URGENCY_OPTIONS = [
  { id: "emergency", label: "Emergency (Now)", multiplier: 1.6 },
  { id: "today", label: "Today", multiplier: 1.2 },
  { id: "week", label: "This Week", multiplier: 1.0 },
  { id: "month", label: "Within a Month", multiplier: 0.9 },
] as const;

export const PROPERTY_OPTIONS = [
  { id: "house", label: "House", multiplier: 1.0 },
  { id: "condo", label: "Condo", multiplier: 0.9 },
  { id: "commercial", label: "Commercial", multiplier: 1.4 },
] as const;

export const NAV_LINKS: { href: string; label: string; emphasis?: boolean }[] = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#service-area", label: "Service Area" },
  { href: "/emergency", label: "Emergency", emphasis: true },
];
