"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="text-muted max-w-xl">
            Have a tracking challenge, need an audit, or want to discuss a
            consulting engagement? Let&apos;s talk.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-xl bg-surface p-8 text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted">
                    I&apos;ll get back to you within 1-2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1.5"
                    >
                      What can I help with?
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="gtm-audit">GTM Audit</option>
                      <option value="tracking-setup">
                        Tracking Implementation
                      </option>
                      <option value="event-mapping">Event Mapping</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Tell me more
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Briefly describe your tracking setup, goals, and timeline..."
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">1.</span>
                    You send me details about your tracking needs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">2.</span>
                    I review and reply within 1-2 business days
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">3.</span>
                    We schedule a 30-minute discovery call (free)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">4.</span>
                    I send a proposal with scope, timeline, and pricing
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Quick Questions?</h3>
                <p className="text-sm text-muted mb-4">
                  For quick questions about GTM, tracking, or analytics — the
                  blog and resources are a great starting point.
                </p>
                <div className="flex gap-3">
                  <a
                    href="/blog"
                    className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    Read the Blog &rarr;
                  </a>
                  <a
                    href="/resources"
                    className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    Browse Resources &rarr;
                  </a>
                </div>
              </div>

              <div className="border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">Connect</h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <span>GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
