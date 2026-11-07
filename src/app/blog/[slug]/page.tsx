import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, readingMinutes } from "@/lib/articles";
import { profile, projects } from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    authors: [{ name: profile.name, url: new URL("/#about", profile.site).href }],
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/blog/${slug}/`,
      publishedTime: article.published,
      authors: [new URL("/#about", profile.site).href],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: profile.name }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const url = new URL(`/blog/${slug}/`, profile.site).href;
  const related = projects.filter((project) => article.relatedProjects.includes(project.id));
  const structured = [
    {
      "@context": "https://schema.org", "@type": "BlogPosting",
      "@id": `${url}#article`, mainEntityOfPage: url, url,
      headline: article.title, description: article.description,
      datePublished: article.published,
      image: new URL("/opengraph-image.png", profile.site).href,
      author: { "@type": "Person", "@id": new URL("/#person", profile.site).href, name: profile.name, url: new URL("/#about", profile.site).href },
      publisher: { "@type": "Person", name: profile.name, url: profile.site },
      inLanguage: "en", articleSection: article.category,
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: profile.site },
        { "@type": "ListItem", position: 2, name: "Blog", item: new URL("/blog/", profile.site).href },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];
  return (
    <main id="main" className="wrap route article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replaceAll("<", "\\u003c") }} />
      <nav aria-label="Breadcrumb" className="article-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog/">Blog</Link></nav>
      <article>
        <header className="article-header">
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="route-intro">{article.description}</p>
          <div className="article-byline">
            <Link href="/#about">{profile.name}</Link>
            <time dateTime={article.published}>{new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${article.published}T00:00:00Z`))}</time>
            <span>{readingMinutes(article)} min read</span>
          </div>
        </header>
        <div className="article-layout">
          <nav className="article-toc" aria-label="On this page">
            <p className="eyebrow">On this page</p>
            <ol>{article.sections.map(({ id, title }) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol>
          </nav>
          <div className="article-body">
            {article.sections.map(({ id, title, paragraphs, bullets }) => (
              <section key={id} id={id}>
                <h2>{title}</h2>
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {bullets && <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            {article.sources.length > 0 && <section aria-labelledby="references-title">
              <h2 id="references-title">References</h2>
              <ul>{article.sources.map(({ label, href }) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
            </section>}
            <aside className="article-author" aria-label="About the author">
              <h2>About Muhammad Jibran</h2>
              <p>Product engineer and full-stack & AI engineer building SaaS applications, voice AI workflows, and cloud infrastructure. Experience includes SalesGuard, Plutio, and HACKERverse.</p>
              <Link href={`/#${article.experienceAnchor}`}>Explore my engineering experience and skills →</Link>
            </aside>
            <section aria-labelledby="related-work-title">
              <h2 id="related-work-title">Related projects</h2>
              <ul>{related.map(({ slug: projectSlug, name }) => <li key={projectSlug}><Link href={`/projects/${projectSlug}/`}>{name}</Link></li>)}</ul>
            </section>
            <p><Link href="/blog/">← More engineering articles</Link></p>
          </div>
        </div>
      </article>
    </main>
  );
}
