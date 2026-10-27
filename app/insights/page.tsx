import type { Metadata } from "next";
import Link from "next/link";
import { articles, formatArticleDate } from "@/lib/editorial";

export const metadata: Metadata = {
  title: "Insights",
  description: "Market commentary, fund updates and firm news from SJH Capital's investment team in Hong Kong and New York.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Insights & perspectives</p>
          <h1>A considered view.<br />A longer horizon.</h1>
          <p className="page-intro">Market commentary, portfolio reviews and news from our team.</p>
        </div>
      </section>

      <section className="section insights-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From the investment desk</p>
              <h2>Our latest thinking</h2>
            </div>
            <span className="subtle">{articles.length} perspectives</span>
          </div>
          <div className="article-list">
            {articles.map((article, index) => (
              <article className="article-row" key={article.slug}>
                <div className="article-meta">
                  <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                  <span>{article.category}</span>
                </div>
                <div className="article-row-content">
                  <h3><Link href={`/insights/${article.slug}`}>{article.title}</Link></h3>
                  <p>{article.excerpt}</p>
                </div>
                <Link className="article-arrow" href={`/insights/${article.slug}`} aria-label={`Read ${article.title}`}>
                  <span aria-hidden="true">↗</span>
                </Link>
                <span className="sr-only">Article {index + 1} of {articles.length}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
