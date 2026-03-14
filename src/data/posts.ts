export type Category = "gtm" | "app-tracking" | "event-mapping" | "server-side" | "ga4" | "consent";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: Category;
  featured?: boolean;
}

export const categoryLabels: Record<Category, string> = {
  gtm: "Google Tag Manager",
  "app-tracking": "App Tracking",
  "event-mapping": "Event Mapping",
  "server-side": "Server-Side Tagging",
  ga4: "GA4",
  consent: "Consent & Privacy",
};

export const categoryColors: Record<Category, string> = {
  gtm: "bg-blue-100 text-blue-700",
  "app-tracking": "bg-purple-100 text-purple-700",
  "event-mapping": "bg-emerald-100 text-emerald-700",
  "server-side": "bg-orange-100 text-orange-700",
  ga4: "bg-pink-100 text-pink-700",
  consent: "bg-amber-100 text-amber-700",
};

export const posts: Post[] = [
  {
    slug: "server-side-gtm-complete-guide",
    title: "Server-Side GTM: The Complete Implementation Guide for 2026",
    excerpt:
      "Everything you need to know about setting up server-side Google Tag Manager — from infrastructure choices to event routing and first-party data collection.",
    date: "2026-03-10",
    readTime: "14 min",
    category: "server-side",
    featured: true,
  },
  {
    slug: "ga4-event-naming-conventions",
    title: "GA4 Event Naming Conventions That Scale",
    excerpt:
      "A battle-tested naming taxonomy for GA4 events that keeps your data clean as your tracking grows. Includes a downloadable template.",
    date: "2026-03-05",
    readTime: "8 min",
    category: "ga4",
    featured: true,
  },
  {
    slug: "data-layer-architecture-ecommerce",
    title: "Building a Bulletproof Data Layer for E-Commerce",
    excerpt:
      "How to design a data layer that handles product impressions, cart interactions, and purchase events without breaking when your dev team ships changes.",
    date: "2026-02-28",
    readTime: "12 min",
    category: "event-mapping",
    featured: true,
  },
  {
    slug: "firebase-analytics-deep-dive",
    title: "Firebase Analytics for Mobile Apps: Beyond the Defaults",
    excerpt:
      "Default Firebase events only scratch the surface. Learn how to implement custom event tracking that gives your product team actionable insights.",
    date: "2026-02-20",
    readTime: "10 min",
    category: "app-tracking",
  },
  {
    slug: "gtm-consent-mode-v2",
    title: "GTM Consent Mode V2: What Changed and How to Implement It",
    excerpt:
      "Google's updated consent mode requirements are live. Here's how to configure your GTM container to stay compliant while preserving data quality.",
    date: "2026-02-15",
    readTime: "9 min",
    category: "consent",
  },
  {
    slug: "event-mapping-workshop-framework",
    title: "How I Run Event Mapping Workshops With Product Teams",
    excerpt:
      "The exact framework I use to align marketing, product, and engineering on a shared tracking plan — before a single line of code is written.",
    date: "2026-02-10",
    readTime: "7 min",
    category: "event-mapping",
  },
  {
    slug: "gtm-custom-templates-guide",
    title: "Writing Custom GTM Templates: A Developer's Guide",
    excerpt:
      "Custom templates let you extend GTM safely. Learn the sandboxed JavaScript API, template permissions, and how to publish to the Community Gallery.",
    date: "2026-02-03",
    readTime: "11 min",
    category: "gtm",
  },
  {
    slug: "mobile-attribution-ios-android",
    title: "Mobile Attribution in 2026: iOS vs Android Reality Check",
    excerpt:
      "SKAdNetwork 5.0, Privacy Sandbox, and what's left of deterministic attribution. A practical guide to measuring mobile campaigns today.",
    date: "2026-01-28",
    readTime: "13 min",
    category: "app-tracking",
  },
  {
    slug: "server-side-tagging-cost-optimization",
    title: "Cutting Server-Side Tagging Costs by 60%",
    excerpt:
      "Server-side GTM on Cloud Run can get expensive fast. Here's how to optimize your setup with autoscaling, request batching, and smart routing.",
    date: "2026-01-20",
    readTime: "9 min",
    category: "server-side",
  },
];
