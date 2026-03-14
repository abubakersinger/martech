import Link from "next/link";
import { Post, categoryLabels, categoryColors } from "@/data/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-200">
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}
        >
          {categoryLabels[post.category]}
        </span>
        <span className="text-xs text-muted">{post.readTime}</span>
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
          {post.title}
        </h3>
      </Link>
      <p className="text-sm text-muted leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <time className="text-xs text-muted">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Read more &rarr;
        </Link>
      </div>
    </article>
  );
}
