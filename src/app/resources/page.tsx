import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

const resources = [
  {
    title: "GTM Event Mapping Template",
    description:
      "A Google Sheets template for documenting your event taxonomy, data layer variables, and trigger conditions. Used on 100+ projects.",
    type: "Template",
    typeColor: "bg-blue-100 text-blue-700",
    href: "#",
  },
  {
    title: "Data Layer Validation Checklist",
    description:
      "A step-by-step QA checklist to verify your data layer is firing correctly across all key user journeys.",
    type: "Checklist",
    typeColor: "bg-emerald-100 text-emerald-700",
    href: "#",
  },
  {
    title: "GA4 Custom Event Reference",
    description:
      "Complete reference of recommended GA4 events beyond the defaults — with parameter specs and BigQuery schemas.",
    type: "Reference",
    typeColor: "bg-purple-100 text-purple-700",
    href: "#",
  },
  {
    title: "Server-Side GTM Architecture Diagram",
    description:
      "A visual reference for how browser, server container, and backend systems connect in a server-side tagging setup.",
    type: "Diagram",
    typeColor: "bg-orange-100 text-orange-700",
    href: "#",
  },
  {
    title: "Consent Mode Implementation Guide",
    description:
      "Step-by-step guide to implementing Google Consent Mode V2 with major CMP platforms (OneTrust, Cookiebot, Usercentrics).",
    type: "Guide",
    typeColor: "bg-pink-100 text-pink-700",
    href: "#",
  },
  {
    title: "Mobile Attribution Comparison Matrix",
    description:
      "Side-by-side comparison of AppsFlyer, Adjust, Branch, and Singular — features, pricing, and privacy capabilities.",
    type: "Comparison",
    typeColor: "bg-amber-100 text-amber-700",
    href: "#",
  },
];

const tools = [
  {
    title: "GTM Container Health Check",
    description:
      "Paste your GTM container export and get an instant audit — unused tags, missing triggers, and optimization suggestions.",
    status: "Coming Soon",
  },
  {
    title: "Event Naming Validator",
    description:
      "Check your GA4 event names against Google's recommended conventions and custom naming rules.",
    status: "Coming Soon",
  },
  {
    title: "Data Layer Inspector",
    description:
      "A browser-based tool to visualize and validate your data layer pushes in real time.",
    status: "Coming Soon",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h1 className="text-4xl font-bold mb-3">Resources</h1>
          <p className="text-muted max-w-xl">
            Free templates, checklists, and tools for technical marketers. Built
            from real-world implementation experience.
          </p>
        </div>
      </section>

      {/* Templates & Guides */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Templates & Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="group border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-200"
              >
                <span
                  className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${r.typeColor}`}
                >
                  {r.type}
                </span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {r.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="border border-border rounded-xl p-6 bg-white"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">{tool.title}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-dark text-muted">
                    {tool.status}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
