import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { ArticleCard } from "./article-card";

export const metadata: Metadata = {
  title: "Product Engineering & AI Blog",
  description: "Practical articles by Muhammad Jibran on product engineering, voice AI workflow automation, and building useful AI features for SaaS products.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Product Engineering & AI Blog | Muhammad Jibran",
    description: "Explore product engineering, voice AI workflows, and company-policy chatbots with Muhammad Jibran.",
    url: "/blog/",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main id="main" className="wrap route">
      <p className="eyebrow section-index">Muhammad Jibran / Engineering journal</p>
      <h1>Notes on<br /><em>building products.</em></h1>
      <p className="route-intro">Product engineering, applied AI, and the decisions behind useful software. Written by Muhammad Jibran.</p>
      <div className="article-grid blog-index">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
    </main>
  );
}
