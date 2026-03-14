import Link from "next/link";
import { notFound } from "next/navigation";
import NewsletterSignup from "@/components/NewsletterSignup";
import { posts, categoryLabels, categoryColors } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-primary transition-colors mb-8 inline-block"
          >
            &larr; Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}
            >
              {categoryLabels[post.category]}
            </span>
            <span className="text-xs text-muted">{post.readTime}</span>
            <time className="text-xs text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-10">
            {post.excerpt}
          </p>

          {/* Placeholder content */}
          <div className="prose max-w-none">
            <div className="rounded-xl bg-surface border border-border p-8 text-center">
              <p className="text-muted mb-2">
                Full article content goes here.
              </p>
              <p className="text-sm text-muted">
                This is a placeholder — replace with your MDX or CMS content.
              </p>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-10 border-t border-border">
            <h2 className="text-xl font-bold mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {posts
                .filter(
                  (p) =>
                    p.category === post.category && p.slug !== post.slug
                )
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="border border-border rounded-lg p-4 hover:border-primary/20 transition-colors"
                  >
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[related.category]}`}
                    >
                      {categoryLabels[related.category]}
                    </span>
                    <h3 className="text-sm font-semibold mt-2 leading-snug">
                      {related.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <NewsletterSignup />
    </>
  );
}
