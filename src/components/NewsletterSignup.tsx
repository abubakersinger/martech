"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          The TrackStack Newsletter
        </h2>
        <p className="text-indigo-200 mb-8 max-w-lg mx-auto">
          Weekly insights on GTM, analytics, server-side tagging, and event
          tracking. Join 2,000+ technical marketers.
        </p>
        {submitted ? (
          <p className="text-white font-medium bg-white/10 rounded-lg px-6 py-3 inline-block">
            Thanks for subscribing! Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="flex-1 rounded-lg px-4 py-3 text-sm bg-white/10 text-white placeholder:text-indigo-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-indigo-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
