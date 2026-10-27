import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnnualReturnsChart, FundNavChart } from "@/components/charts";
import { funds, formatReturn, generateNav, periodReturn } from "@/lib/funds";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return funds.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const fund = funds.find((item) => item.slug === slug);
  return fund ? { title: fund.name, description: `${fund.blurb}. Explore fund performance, daily NAV, investment strategy and key facts.` } : {};
}

function dateLabel(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" });
}

export default async function FundPage({ params }: PageProps) {
  const { slug } = await params;
  const fund = funds.find((item) => item.slug === slug);
  if (!fund) notFound();

  const nav = generateNav(fund);
  const recentNav = nav.slice(-30).reverse();
  const benchmark = fund.benchmark || (fund.slug === "sjh-quant-multi" ? "none (risk-based objective)" : "none (absolute return)");
  const riskClass = `risk-${fund.risk.slice(0, 2).toLowerCase()}`;
  const threeYear = periodReturn(fund, 3);
  const fiveYear = periodReturn(fund, 5);

  return (
    <>
      <section className="page-hero fund-page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/strategies">Strategies &amp; Funds</Link><span aria-hidden="true">/</span><span>{fund.category}</span></nav>
          <p className="eyebrow">{fund.category}</p>
          <h1>{fund.name}</h1>
          <p className="page-intro">{fund.blurb}</p>
          <div className="strategy-summary"><span className={`risk-badge ${riskClass}`}>{fund.risk}</span><span>Data as of October 21, 2026</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container fund-layout">
          <div className="fund-content">
            <section className="chart-panel" aria-labelledby="nav-heading">
              <div className="chart-heading"><div><p className="eyebrow">Performance</p><h2 id="nav-heading">Net asset value</h2></div><div className="fund-nav-value"><span>Current NAV</span><strong>{fund.navEndpoint.toFixed(4)}</strong></div></div>
              <FundNavChart fund={fund} data={nav} />
              <p className="chart-note">Last 252 trading days ending October 21, 2026. {fund.benchmark ? `Benchmark: ${fund.benchmark}.` : `Benchmark: ${benchmark}.`}</p>
            </section>

            <section className="fund-return-section" aria-labelledby="annual-heading">
              <div className="section-heading"><div><p className="eyebrow">Calendar-year performance</p><h2 id="annual-heading">Annual returns</h2></div><span className="chart-note">Net of fees · US dollars</span></div>
              <div className="chart-panel"><AnnualReturnsChart fund={fund} /></div>
              <div className="table-wrap">
                <table className="data-table annual-table">
                  <caption className="sr-only">Annual fund and benchmark returns, in percent</caption>
                  <thead><tr><th scope="col">Year</th><th scope="col" className="numeric">Fund return</th>{fund.benchmark && <th scope="col" className="numeric">Benchmark return</th>}</tr></thead>
                  <tbody>{[...fund.annual].reverse().map((row) => <tr key={row.year}><th scope="row">{row.year}</th><td className={`numeric ${row.fund < 0 ? "negative" : "positive"}`}>{formatReturn(row.fund)}</td>{fund.benchmark && <td className={`numeric ${(row.benchmark ?? 0) < 0 ? "negative" : "positive"}`}>{row.benchmark === undefined ? "—" : formatReturn(row.benchmark)}</td>}</tr>)}</tbody>
                </table>
              </div>
              {fund.slug === "sjh-private-credit" && <p className="chart-note">Inception: May 2021. First full calendar year: 2022.</p>}
            </section>

            <section className="fund-strategy-section" aria-labelledby="strategy-heading"><p className="eyebrow">Our approach</p><h2 id="strategy-heading">Investment strategy</h2><div className="prose">{fund.strategy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>

            <section className="fund-nav-section" aria-labelledby="daily-nav-heading">
              <div className="section-heading"><div><p className="eyebrow">Daily valuation</p><h2 id="daily-nav-heading">Last 30 trading days</h2></div><span className="chart-note">Most recent first</span></div>
              <div className="table-wrap nav-table">
                <table className="data-table">
                  <caption className="sr-only">Daily NAV and percentage change for the last 30 trading days</caption>
                  <thead><tr><th scope="col">Date</th><th scope="col" className="numeric">NAV</th><th scope="col" className="numeric">Daily change</th></tr></thead>
                  <tbody>{recentNav.map((row) => <tr key={row.date}><th scope="row"><time dateTime={row.date}>{dateLabel(row.date)}</time></th><td className="numeric">{row.nav.toFixed(4)}</td><td className={`numeric ${row.dailyChange < 0 ? "negative" : "positive"}`}>{row.dailyChange >= 0 ? "+" : "−"}{Math.abs(row.dailyChange).toFixed(2)}%</td></tr>)}</tbody>
                </table>
              </div>
            </section>
            <aside className="fund-disclosure"><p className="eyebrow">Important risk disclosure</p><p>Past performance is not a reliable indicator of future results. The value of investments and the income from them may fall as well as rise.</p><Link href="/disclosures" className="text-link">Read all disclosures <span aria-hidden="true">↗</span></Link></aside>
          </div>

          <aside className="fund-facts" aria-labelledby="facts-heading">
            <div className="facts-panel">
              <p className="eyebrow">At a glance</p><h2 id="facts-heading">Fund facts</h2>
              <dl><div><dt>Category</dt><dd>{fund.category}</dd></div><div><dt>Risk level</dt><dd><span className={`risk-badge ${riskClass}`}>{fund.risk}</span></dd></div><div><dt>Benchmark</dt><dd>{benchmark}</dd></div><div><dt>Minimum investment</dt><dd>{fund.minimum}</dd></div><div><dt>Management fee</dt><dd>{fund.fee}</dd></div><div><dt>Inception</dt><dd>{fund.inception}</dd></div></dl>
              <div className="fund-return-summary"><div><span>Trailing 12-month return</span><strong className={fund.return1y < 0 ? "negative" : "positive"}>{formatReturn(fund.return1y)}</strong></div>{fund.benchmarkReturn !== null && <div><span>Benchmark return</span><b className={fund.benchmarkReturn < 0 ? "negative" : "positive"}>{formatReturn(fund.benchmarkReturn)}</b></div>}<div><span>3-year cumulative</span><b>{threeYear === null ? "—" : formatReturn(threeYear)}</b></div><div><span>5-year cumulative</span><b>{fiveYear === null ? "—" : formatReturn(fiveYear)}</b></div></div>
              <p className="chart-note">Data as of October 21, 2026</p><a className="button button-gold" href="mailto:contact@sjh.capital">Enquire about this fund <span aria-hidden="true">↗</span></a>
            </div>
            <Link className="text-link fund-back-link" href="/strategies"><span aria-hidden="true">←</span> Explore all strategies</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
