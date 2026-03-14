import NewsletterSignup from "@/components/NewsletterSignup";

const timeline = [
  {
    year: "2015",
    title: "Started in Analytics",
    description:
      "Began implementing Google Analytics and GTM for e-commerce brands. Quickly became obsessed with data quality.",
  },
  {
    year: "2018",
    title: "Server-Side Pioneer",
    description:
      "Early adopter of server-side tagging. Built custom solutions before GTM server containers were available.",
  },
  {
    year: "2021",
    title: "Consulting & Education",
    description:
      "Launched TrackStack to share practical knowledge and help teams build reliable tracking infrastructure.",
  },
  {
    year: "2024",
    title: "200+ Audits Completed",
    description:
      "Worked with startups to enterprises across e-commerce, SaaS, fintech, and media verticals.",
  },
];

const tools = [
  "Google Tag Manager (Web & Server)",
  "GA4 & BigQuery",
  "Firebase Analytics",
  "Segment / RudderStack",
  "AppsFlyer / Adjust",
  "Consent Management (OneTrust, Cookiebot)",
  "Looker Studio / Tableau",
  "Cloud Run / Cloud Functions",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h1 className="text-4xl font-bold mb-3">About</h1>
          <p className="text-muted max-w-xl">
            The story behind TrackStack — and why data quality is worth
            obsessing over.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="h-80 w-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary">TS</span>
                  </div>
                  <p className="text-sm text-muted">Your photo here</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Technical Marketer, Analytics Developer, Data Layer Architect
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I&apos;ve spent the last decade in the space between marketing and
                  engineering — building tracking systems that actually work. My
                  focus is on Google Tag Manager, server-side tagging, app
                  analytics, and the event architectures that tie it all
                  together.
                </p>
                <p>
                  Before starting TrackStack, I led analytics implementations at
                  agencies and in-house teams, working on everything from small
                  Shopify stores to enterprise platforms processing millions of
                  events per day.
                </p>
                <p>
                  I believe that good tracking is invisible — it just works,
                  reliably, at scale. And that getting there requires the same
                  engineering rigor you&apos;d apply to any production system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Journey</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item) => (
              <div key={item.year}>
                <div className="text-2xl font-bold text-primary mb-2">
                  {item.year}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Tool Stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <div
                key={tool}
                className="border border-border rounded-lg px-4 py-3 text-sm text-center hover:border-primary/20 transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
