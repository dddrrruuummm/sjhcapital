import type { Metadata } from "next";
import Link from "next/link";
import { funds, formatReturn, periodReturn } from "@/lib/funds";

export const metadata: Metadata = {
  title: "Strategies & Funds",
  description: "Explore nine SJH Capital investment strategies across equities, fixed income, multi-asset and alternatives, with fund facts and performance.",
};

function returnClass(value: number | null) {
  return value === null ? "" : value < 0 ? "negative" : "positive";
}

function benchmarkLabel(slug: string, benchmark: string | null) {
  if (benchmark) return benchmark;
  return slug === "sjh-quant-multi" ? "none (risk-based objective)" : "none (absolute return)";
}

export default function StrategiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Our investment platform</p>
          <h1>Strategies &amp; Funds</h1>
          <p className="page-intro">Disciplined, research-driven strategies across equities, fixed income and alternatives.</p>
          <div className="strategy-summary"><span>9 active funds &amp; mandates</span><span>Data as of October 21, 2026</span></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Explore the range</p><h2>A strategy for a long-term view.</h2></div>
            <a href="mailto:contact@sjh.capital" className="text-link">Discuss your portfolio <span aria-hidden="true">↗</span></a>
          </div>
          <p className="strategy-table-hint">Select a fund to explore its strategy, performance and daily NAV. Scroll horizontally to compare all data.</p>
          <div className="table-wrap strategy-overview" tabIndex={0} role="region" aria-label="All nine funds and performance. Scroll horizontally to view every column.">
            <table className="data-table strategies-table">
              <caption className="sr-only">SJH Capital funds. Performance data as of October 21, 2026.</caption>
              <thead><tr><th scope="col">Fund / Strategy</th><th scope="col">Category</th><th scope="col">Risk level</th><th scope="col">Benchmark</th><th scope="col">Min. investment</th><th scope="col">Management fee</th><th scope="col" className="numeric">1Y</th><th scope="col" className="numeric">3Y</th><th scope="col" className="numeric">5Y</th></tr></thead>
              <tbody>
                {funds.map((fund) => {
                  const threeYear = periodReturn(fund, 3);
                  const fiveYear = periodReturn(fund, 5);
                  return <tr key={fund.slug}>
                    <th scope="row"><Link className="fund-table-link" href={`/strategies/${fund.slug}`}>{fund.name}<span aria-hidden="true">↗</span></Link><p className="fund-table-blurb">{fund.blurb}</p></th>
                    <td>{fund.category}</td>
                    <td><span className={`risk-badge risk-${fund.risk.slice(0, 2).toLowerCase()}`}>{fund.risk}</span></td>
                    <td className="benchmark-cell">{benchmarkLabel(fund.slug, fund.benchmark)}</td>
                    <td className="nowrap">{fund.minimum}</td><td>{fund.fee}</td>
                    <td className={`numeric ${returnClass(fund.return1y)}`}>{formatReturn(fund.return1y)}</td>
                    <td className={`numeric ${returnClass(threeYear)}`}>{threeYear === null ? "—" : formatReturn(threeYear)}</td>
                    <td className={`numeric ${returnClass(fiveYear)}`}>{fiveYear === null ? "—" : formatReturn(fiveYear)}</td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
          <p className="chart-note">1Y reflects the trailing 12-month return. 3Y and 5Y returns are cumulative, compounded from the latest available annual returns. “—” indicates insufficient full-year history. Performance figures are net of fees and calculated in US dollars.</p>
          <div className="fund-disclosure"><p>Past performance is not a reliable indicator of future results. The value of investments and the income from them may fall as well as rise.</p><Link href="/disclosures" className="text-link">Read important disclosures <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
      <section className="cta-band"><div className="container"><div><p className="eyebrow">A conversation starts here</p><h2>Ready to discuss your portfolio?</h2><p>We work with US and international private clients, family offices and institutions.</p></div><a className="button button-gold" href="mailto:contact@sjh.capital">Contact Our Team <span aria-hidden="true">↗</span></a></div></section>
    </>
  );
}
