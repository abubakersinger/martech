import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import NewsletterSignup from "@/components/NewsletterSignup";

const services = [
  {
    id: "gtm-audit",
    title: "GTM Audit & Optimization",
    description:
      "A comprehensive review of your Google Tag Manager setup — container structure, tag firing rules, data layer integrity, and performance impact.",
    features: [
      "Container architecture review",
      "Tag firing sequence analysis",
      "Data layer validation",
      "Performance impact assessment",
      "Actionable recommendations report",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    id: "tracking-setup",
    title: "Tracking Implementation",
    description:
      "End-to-end tracking setup for web and mobile — from data layer design through tag deployment and QA testing.",
    features: [
      "Web & server-side GTM setup",
      "GA4 configuration & custom events",
      "Conversion tracking (Google, Meta, TikTok)",
      "Cross-domain and iframe tracking",
      "Full QA with documented test plan",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: "event-mapping",
    title: "Event Mapping & Tracking Plans",
    description:
      "Collaborative tracking plan development that aligns marketing KPIs with a structured, scalable event taxonomy.",
    features: [
      "Stakeholder workshop facilitation",
      "Event naming taxonomy design",
      "Data layer specification documents",
      "User property & dimension mapping",
      "Engineering handoff documentation",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
  },
  {
    id: "consulting",
    title: "Technical Marketing Consulting",
    description:
      "Ongoing advisory for teams building or scaling their analytics infrastructure. Strategy, architecture reviews, and hands-on support.",
    features: [
      "Analytics stack architecture",
      "Consent & privacy compliance",
      "Server-side tagging strategy",
      "Team training & knowledge transfer",
      "Vendor evaluation & selection",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map your current tracking setup, business goals, and analytics maturity to identify the biggest opportunities.",
  },
  {
    step: "02",
    title: "Specification",
    description:
      "A detailed tracking plan with event taxonomy, data layer specs, and implementation priorities — reviewed with your team.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Hands-on setup in GTM (web or server-side), GA4, and your ad platforms. Every tag tested and documented.",
  },
  {
    step: "04",
    title: "Validation & Handoff",
    description:
      "Full QA, documentation, and team training so your tracking stays accurate long after the engagement ends.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h1 className="text-4xl font-bold mb-3">Services</h1>
          <p className="text-muted max-w-xl">
            Specialized tracking and analytics services for teams that take data
            quality seriously. From quick audits to full implementation
            engagements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-muted max-w-lg mx-auto">
              A proven four-step process that delivers clean, reliable tracking
              every time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-bold text-primary/20 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Fix Your Tracking?</h2>
          <p className="text-muted max-w-lg mx-auto mb-8">
            Let&apos;s talk about your analytics setup and find the right
            approach for your team.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
