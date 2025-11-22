export type BillingFrequency = "one_time" | "monthly" | "annual";

export interface PricePoint {
  label: string;
  amountUSD: number;
  frequency: BillingFrequency;
  notes?: string;
}

export interface ServiceOffering {
  id: string;
  slug: string;
  name: string;
  tier: "starter" | "core" | "pro" | "enterprise";
  headline: string;
  summary: string;
  idealClients: string[];
  useCases: string[];
  features: string[];
  deliverables: string[];
  techStack: string[];
  pricing: PricePoint[];
  timelineWeeks: number;
  ctaLabel: string;
  category: "local_business" | "hospitality" | "ag_food";
}

export const services: ServiceOffering[] = [
  {
    id: "business-web-presence",
    slug: "business-web-presence",
    name: "Business Web Presence",
    tier: "starter",
    headline: "Fast, modern websites for local businesses that actually convert.",
    summary:
      "Get a Cloudflare-powered, mobile-first site with SEO basics and contact forms so customers can find you, trust you, and reach you.",
    idealClients: ["local service businesses", "restaurants", "cafés", "salons", "solo professionals"],
    useCases: [
      "Launching a business and need a professional website fast",
      "Replacing a slow, outdated site that hurts SEO",
      "Centralizing info from social media into one owned property"
    ],
    features: [
      "Cloudflare Pages static front-end with global CDN",
      "Cloudflare Workers for secure contact/inquiry forms",
      "Basic on-page SEO and metadata setup",
      "Google Business Profile support",
      "Performance and accessibility tuning"
    ],
    deliverables: [
      "Up to 5 core pages (Home, About, Services/Menu, Contact, FAQ)",
      "Responsive design optimized for mobile visitors",
      "Contact form with email notifications",
      "Basic analytics setup",
      "Short Loom walkthrough for content updates"
    ],
    techStack: ["Cloudflare Pages", "Cloudflare Workers", "HTML", "Tailwind CSS"],
    pricing: [
      {
        label: "One-time setup",
        amountUSD: 1200,
        frequency: "one_time",
        notes: "Design, build, content integration, and launch."
      },
      {
        label: "Care plan",
        amountUSD: 70,
        frequency: "monthly",
        notes: "Hosting, SSL, uptime checks, minor content updates."
      }
    ],
    timelineWeeks: 2,
    ctaLabel: "Request this package",
    category: "local_business"
  },
  {
    id: "local-lead-booster",
    slug: "local-lead-booster",
    name: "Local Lead Booster",
    tier: "core",
    headline: "Turn casual website visitors into booked customers on autopilot.",
    summary:
      "Lead capture funnels and automated follow-ups built on Cloudflare Workers that generate inquiries, bookings, and repeat visits.",
    idealClients: [
      "restaurants",
      "salons & spas",
      "local gyms & studios",
      "boutique hotels",
      "home services (HVAC, cleaning, landscaping)"
    ],
    useCases: [
      "Grow an email/SMS list for promos and events",
      "Increase first visits with coupons",
      "Capture stay/quote inquiries for boutique hospitality"
    ],
    features: [
      "1–3 lead capture funnels (promo, quote, event, or guide download)",
      "Custom forms with tagging (e.g. 'wedding', 'group', 'happy hour')",
      "3–7 step email and/or SMS automation sequences",
      "Cloudflare D1 or KV-backed lead storage",
      "Simple analytics dashboard for leads and conversions"
    ],
    deliverables: [
      "Funnel design and copy",
      "Implemented forms and backend logic",
      "Automation templates for emails/SMS",
      "Monthly performance summary",
      "Exportable CSV for leads"
    ],
    techStack: [
      "Cloudflare Workers",
      "Cloudflare D1 or KV",
      "Cloudflare Pages",
      "Email API",
      "SMS provider (e.g. Twilio)"
    ],
    pricing: [
      {
        label: "One-time setup",
        amountUSD: 2500,
        frequency: "one_time",
        notes: "Up to 3 funnels and automation sequences."
      },
      {
        label: "Optimization & hosting",
        amountUSD: 150,
        frequency: "monthly",
        notes: "Hosting, monitoring, A/B tests, copy & funnel tweaks."
      }
    ],
    timelineWeeks: 3,
    ctaLabel: "Boost my leads",
    category: "local_business"
  },
  {
    id: "digital-menu-ordering",
    slug: "digital-menu-ordering",
    name: "Digital Menu & Ordering",
    tier: "core",
    headline: "QR menus and mobile ordering built for real-world restaurants.",
    summary:
      "Dynamic digital menus, per-table QR codes, and optional online ordering with Cloudflare Workers handling the heavy lifting.",
    idealClients: ["restaurants", "cafés", "bars", "fast casual spots", "food halls"],
    useCases: [
      "Replace paper menus with QR menus that are always up to date",
      "Capture online orders for pickup or at-table",
      "Track which tables/menus are used most"
    ],
    features: [
      "Menu management dashboard (categories, items, pricing, flags)",
      "Per-table or per-area QR codes with analytics",
      "Real-time menu changes (86 items, specials, etc.)",
      "Optional ordering and payment integration",
      "Guest-facing menu optimized for mobile"
    ],
    deliverables: [
      "Menu admin interface for staff",
      "Guest-facing menu UI with branding",
      "Ordering flow (cart, checkout) if included",
      "QR code pack for printing",
      "Staff training resources"
    ],
    techStack: ["Cloudflare Workers", "Cloudflare D1", "Cloudflare Pages", "Stripe"],
    pricing: [
      {
        label: "One-time setup",
        amountUSD: 3000,
        frequency: "one_time",
        notes: "1 location, base menu import, and training."
      },
      {
        label: "Hosting & menu support",
        amountUSD: 200,
        frequency: "monthly",
        notes: "Hosting, uptime, menu structure updates."
      }
    ],
    timelineWeeks: 3,
    ctaLabel: "Digitize my menu",
    category: "hospitality"
  },
  {
    id: "boutique-hotel-web-booking",
    slug: "boutique-hotel-web-booking",
    name: "Boutique Hotel Web + Booking",
    tier: "pro",
    headline: "Direct booking engine and site tailored for small hospitality brands.",
    summary:
      "A high-converting website and direct booking stack so boutique hotels and B&Bs can reduce OTA dependency and own the guest relationship.",
    idealClients: ["boutique hotels", "B&Bs", "vacation rental groups", "lodges", "cabins"],
    useCases: [
      "Launch a new property with direct bookings from day one",
      "Reduce reliance on OTAs",
      "Improve guest communication before and after stays"
    ],
    features: [
      "Property and room type pages with rich imagery",
      "Availability calendar and direct booking forms",
      "Rate & policy management (weekend rates, seasonal, etc.)",
      "Automated confirmation, reminder, and post-stay emails",
      "Guest portal with trip details and local guide"
    ],
    deliverables: [
      "Marketing site with key property pages",
      "Direct booking workflow integrated into the site",
      "Back office for managing inventory & reservations",
      "Email templates for the guest lifecycle",
      "Analytics and conversions tracking"
    ],
    techStack: ["Cloudflare Pages", "Cloudflare Workers", "Cloudflare D1", "Worker Cron", "Email API"],
    pricing: [
      {
        label: "One-time setup",
        amountUSD: 5000,
        frequency: "one_time",
        notes: "Property site, booking flow, basic portal."
      },
      {
        label: "Hosting & support",
        amountUSD: 300,
        frequency: "monthly",
        notes: "Hosting, monitoring, minor changes, and support."
      }
    ],
    timelineWeeks: 4,
    ctaLabel: "Build my hotel site",
    category: "hospitality"
  },
  {
    id: "guest-engagement-staff-portal",
    slug: "guest-engagement-staff-portal",
    name: "Guest Engagement & Staff Portal",
    tier: "pro",
    headline: "Digital guest directory and internal portal for smoother operations.",
    summary:
      "Give guests everything they need on their phone and give staff a clean, real-time view of requests, tasks, and maintenance.",
    idealClients: ["hotels", "resorts", "multi-property operators"],
    useCases: [
      "Replace printed in-room binders with digital guides",
      "Centralize maintenance and housekeeping requests",
      "Get data on guest questions and issues"
    ],
    features: [
      "QR-powered guest directory with property info & local tips",
      "Staff ticketing for maintenance/housekeeping/front desk",
      "Status tracking and simple SLAs",
      "Notifications to the right department",
      "Analytics on request volume, type, and resolution time"
    ],
    deliverables: [
      "Guest-facing directory UI with branding",
      "Staff web app for ticket intake & management",
      "Role-based access (front desk, housekeeping, engineering)",
      "Basic reporting and exports",
      "Onboarding and workflow mapping"
    ],
    techStack: ["Cloudflare Workers", "Cloudflare Durable Objects", "Cloudflare D1", "Cloudflare Pages"],
    pricing: [
      {
        label: "One-time setup",
        amountUSD: 7500,
        frequency: "one_time",
        notes: "Guest and staff portals and core workflows."
      },
      {
        label: "Hosting & SLA",
        amountUSD: 500,
        frequency: "monthly",
        notes: "Hosting, feature tweaks, and higher-touch support."
      }
    ],
    timelineWeeks: 6,
    ctaLabel: "Improve guest engagement",
    category: "hospitality"
  },
  {
    id: "farm-to-table-csa-platform",
    slug: "farm-to-table-csa-platform",
    name: "Farm-to-Table / CSA Platform",
    tier: "core",
    headline: "Connect local farms, CSAs, and restaurants with their customers online.",
    summary:
      "A subscription and ordering platform for farms, CSAs, and farm-to-table restaurants to manage harvests, pickups, and recurring customers.",
    idealClients: ["farms", "CSAs", "local markets", "farm-to-table restaurants"],
    useCases: [
      "Launch a CSA subscription program",
      "Let customers pre-order boxes or farm products online",
      "Coordinate pickups and delivery windows"
    ],
    features: [
      "Product catalog and harvest inventory management",
      "Subscription plans (weekly, biweekly, monthly)",
      "Pickup/delivery slot scheduling",
      "Customer portal with order history",
      "Basic sales and retention reporting"
    ],
    deliverables: [
      "Customer-facing storefront and portal",
      "Admin dashboard for inventory & orders",
      "Subscription billing setup",
      "Email templates for order reminders and updates",
      "Onboarding & workflow mapping"
    ],
    techStack: ["Cloudflare Pages", "Cloudflare Workers", "Cloudflare D1 or R2", "Stripe subscriptions"],
    pricing: [
      {
        label: "One-time setup",
        amountUSD: 4000,
        frequency: "one_time",
        notes: "Storefront, subscriptions, and admin tools."
      },
      {
        label: "Hosting & support",
        amountUSD: 250,
        frequency: "monthly",
        notes: "Hosting, minor enhancements, and support."
      }
    ],
    timelineWeeks: 4,
    ctaLabel: "Launch my CSA platform",
    category: "ag_food"
  }
];
