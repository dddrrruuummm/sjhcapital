import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, formatArticleDate } from "@/lib/editorial";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article ? {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: "article", publishedTime: article.date },
  } : { title: "Article not found" };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="page-hero article-page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/insights">Insights</Link><span aria-hidden="true">/</span><span>{article.category}</span>
            </nav>
            <div className="article-meta"><span>{article.category}</span><time dateTime={article.date}>{formatArticleDate(article.date)}</time></div>
            <h1>{article.title}</h1>
            <p className="page-intro">{article.excerpt}</p>
          </div>
        </header>
        <div className="container article-body-layout">
          <aside className="article-byline">
            <p className="eyebrow">SJH Capital</p>
            <p>Investment perspectives</p>
            <Link className="text-link" href="/insights">← All insights</Link>
          </aside>
          <div className="article-body prose">
            {article.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <div className="article-endmark" aria-hidden="true">SJH</div>
          </div>
        </div>
      </article>

      <section className="section related-insights">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Further reading</p><h2>More from our team</h2></div>
            <Link className="text-link" href="/insights">All insights <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="article-list">
            {relatedArticles.map((item) => (
              <article className="article-row" key={item.slug}>
                <div className="article-meta"><time dateTime={item.date}>{formatArticleDate(item.date)}</time><span>{item.category}</span></div>
                <div className="article-row-content"><h3><Link href={`/insights/${item.slug}`}>{item.title}</Link></h3><p>{item.excerpt}</p></div>
                <Link className="article-arrow" href={`/insights/${item.slug}`} aria-label={`Read ${item.title}`}><span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
