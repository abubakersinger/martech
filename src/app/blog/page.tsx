"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { posts, categoryLabels, type Category } from "@/data/posts";

const categories: (Category | "all")[] = [
  "all",
  "gtm",
  "app-tracking",
  "event-mapping",
  "server-side",
  "ga4",
  "consent",
];

export default function BlogPage() {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered =
    active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <h1 className="text-4xl font-bold mb-3">Blog</h1>
          <p className="text-muted max-w-xl">
            Practical guides on GTM, app tracking, event mapping, server-side
            tagging, and analytics. No fluff — just implementation-ready content.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-white"
                    : "bg-surface-dark text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {cat === "all" ? "All Posts" : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted py-16">
              No posts in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
