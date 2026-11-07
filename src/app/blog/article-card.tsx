import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { readingMinutes, type Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <p className="eyebrow">{article.category} · {readingMinutes(article)} min read</p>
      <h3><Link href={`/blog/${article.slug}/`}>{article.title}</Link></h3>
      <p>{article.description}</p>
      <Link className="project-action" href={`/blog/${article.slug}/`}>Read article <ArrowUpRight size={16} aria-hidden="true" /></Link>
    </article>
  );
}
