# Validation results

Run: Friday, October 23, 2026 at 2:33:56 a.m. GMT+8. Local preview: http://127.0.0.1:3026.

This report records read-only HTTP checks, source-data checks, and TypeScript validation. Visual browser QA is handled separately. The supplied company, fund, and article data is fictional design content.

## Results

- 108 checks passed; 0 checks failed.
- All 30 content routes returned HTTP 200 with exactly one expected H1.
- Every content route includes the exact SFC license, exact risk disclosure and copyright in its footer.
- All 9 fund detail pages include 30 exact NAV rows (270 total), all annual rows, supplied fund facts and verbatim strategy paragraphs.
- All 15 article pages include all 45 original body paragraphs verbatim and the correct three latest other articles.
- All 9 fund 3Y/5Y values were independently recomputed from annual data parsed from the original Markdown brief and matched the source functions and rendered strategies table.
- All fund series are deterministic, contain 252 weekdays from 2025-11-04 through 2026-10-21, end at the exact supplied NAV, and match the supplied trailing returns. Daily table changes use the same path as the chart.
- Three nonexistent paths return HTTP 404.
- Every content route emits noindex. robots.txt disallows all crawlers.
- sitemap.xml returns HTTP 200 with valid XML urlset structure; currently 0 URLs. The deployment URL is intentionally unset, so the sitemap does not invent a public hostname. Set NEXT_PUBLIC_SITE_URL at deployment to emit the 30 content URLs.
- npm run typecheck passed (tsc --noEmit, exit 0).

## Fund returns verified

| Fund | 1Y | 3Y cumulative | 5Y cumulative |
|---|---:|---:|---:|
| SJH Balanced Fund | +7.8% | +52.1% | +63.7% |
| SJH Core Equity Fund | +9.4% | +74.2% | +83.6% |
| SJH US Small Cap Opportunities Fund | +6.2% | +60.9% | +57.7% |
| SJH Municipal Income Fund | +3.4% | +17.0% | +15.9% |
| SJH Global Dividend Fund | +7.1% | +58.5% | +66.7% |
| SJH Quantitative Multi-Strategy Fund | +6.8% | +27.7% | +46.6% |
| SJH Asia Credit Opportunities Fund | +4.9% | +18.4% | +19.9% |
| SJH Real Assets & Infrastructure Fund | +8.2% | +43.9% | +46.8% |
| SJH Private Credit Fund | +8.6% | +32.4% | — |

## Exact successful checks

- 15 article titles, excerpts, dates, categories, and all 45 body paragraphs match supplied Markdown exactly
- sjh-balanced: annual values match brief
- sjh-balanced: 3Y and 5Y equal independent source compounding
- sjh-balanced: deterministic 252 weekday NAV observations, endpoint, trailing return and daily changes
- sjh-core-equity: annual values match brief
- sjh-core-equity: 3Y and 5Y equal independent source compounding
- sjh-core-equity: deterministic 252 weekday NAV observations, endpoint, trailing return and daily changes
- sjh-us-small-cap: annual values match brief
- sjh-us-small-cap: 3Y and 5Y equal independent source compounding
- sjh-us-small-cap: deterministic 252 weekday NAV observations, endpoint, trailing return and daily changes
- sjh-municipal-income: annual values match brief
- sjh-municipal-income: 3Y and 5Y equal independent source compounding
- sjh-municipal-income: deterministic 252 weekday NAV observations, endpoint, trailing return and daily changes
- sjh-global-dividend: annual values match brief
- sjh-global-dividend: 3Y and 5Y equal independent source compounding
- sjh-global-dividend: deterministic 252 weekday NAV observations, endpoint, trailing return and daily changes
- sjh-quant-multi: annual values match brief
- sjh-quant-multi: 3Y and 5Y equal independent source compounding
- sjh-quant-multi: deterministic 252 weekday NAV observations, endpoint, trailing return and daily changes
- sjh-asia-credit: annual values match brief
- sjh-asia-credit: 3Y and 5Y equal independent source compounding
- sjh-asia-credit: deterministic 252 weekday NAV observations, endpoint, trailing return and daily changes
- sjh-real-assets: annual values match brief
- sjh-real-assets: 3Y and 5Y equal independent source compounding
- sjh-real-assets: deterministic 252 weekday NAV observations, endpoint, trailing return and daily changes
- sjh-private-credit: annual values match brief
- sjh-private-credit: 3Y and 5Y equal independent source compounding
- sjh-private-credit: deterministic 252 weekday NAV observations, endpoint, trailing return and daily changes
- /: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /about: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /login: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /disclosures: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies/sjh-balanced: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies/sjh-core-equity: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies/sjh-us-small-cap: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies/sjh-municipal-income: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies/sjh-global-dividend: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies/sjh-quant-multi: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies/sjh-asia-credit: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies/sjh-real-assets: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /strategies/sjh-private-credit: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/positioning-for-a-higher-for-longer-regime-our-october-outlook: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/sjh-core-equity-fund-q3-2026-portfolio-review: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/municipal-credit-the-case-for-selectivity-in-a-falling-rate-environment: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/sjh-capital-appoints-thomas-okafor-as-chief-risk-officer: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/us-small-caps-after-a-strong-run-what-the-valuations-are-telling-us: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/sjh-balanced-fund-q3-2026-portfolio-review: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/reading-the-yield-curve-implications-for-2027: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/asia-credit-selectivity-in-a-crowded-market: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/sjh-capital-expands-new-york-team: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/real-assets-after-the-repricing-infrastructure-opportunities: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/sjh-quantitative-multi-strategy-fund-q3-2026-review: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/dividend-quality-in-a-mature-market: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/private-credit-in-2026-what-has-changed: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/sjh-global-dividend-fund-q2-2026-portfolio-review: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- /insights/sjh-capital-crosses-us-1-billion-in-assets-under-management: HTTP 200, one correct H1, footer license/risk/copyright, English document, noindex
- sjh-balanced: verbatim strategy paragraphs, supplied key figures and data date present
- sjh-balanced: exact 30 rendered NAV rows match deterministic chart data (4 decimals; daily change 2 decimals)
- sjh-balanced: exact annual table rows and benchmarks
- sjh-core-equity: verbatim strategy paragraphs, supplied key figures and data date present
- sjh-core-equity: exact 30 rendered NAV rows match deterministic chart data (4 decimals; daily change 2 decimals)
- sjh-core-equity: exact annual table rows and benchmarks
- sjh-us-small-cap: verbatim strategy paragraphs, supplied key figures and data date present
- sjh-us-small-cap: exact 30 rendered NAV rows match deterministic chart data (4 decimals; daily change 2 decimals)
- sjh-us-small-cap: exact annual table rows and benchmarks
- sjh-municipal-income: verbatim strategy paragraphs, supplied key figures and data date present
- sjh-municipal-income: exact 30 rendered NAV rows match deterministic chart data (4 decimals; daily change 2 decimals)
- sjh-municipal-income: exact annual table rows and benchmarks
- sjh-global-dividend: verbatim strategy paragraphs, supplied key figures and data date present
- sjh-global-dividend: exact 30 rendered NAV rows match deterministic chart data (4 decimals; daily change 2 decimals)
- sjh-global-dividend: exact annual table rows and benchmarks
- sjh-quant-multi: verbatim strategy paragraphs, supplied key figures and data date present
- sjh-quant-multi: exact 30 rendered NAV rows match deterministic chart data (4 decimals; daily change 2 decimals)
- sjh-quant-multi: exact annual table rows and benchmarks
- sjh-asia-credit: verbatim strategy paragraphs, supplied key figures and data date present
- sjh-asia-credit: exact 30 rendered NAV rows match deterministic chart data (4 decimals; daily change 2 decimals)
- sjh-asia-credit: exact annual table rows and benchmarks
- sjh-real-assets: verbatim strategy paragraphs, supplied key figures and data date present
- sjh-real-assets: exact 30 rendered NAV rows match deterministic chart data (4 decimals; daily change 2 decimals)
- sjh-real-assets: exact annual table rows and benchmarks
- sjh-private-credit: verbatim strategy paragraphs, supplied key figures and data date present
- sjh-private-credit: exact 30 rendered NAV rows match deterministic chart data (4 decimals; daily change 2 decimals)
- sjh-private-credit: exact annual table rows and benchmarks
- positioning-for-a-higher-for-longer-regime-our-october-outlook: all three verbatim article paragraphs and latest three other articles
- sjh-core-equity-fund-q3-2026-portfolio-review: all three verbatim article paragraphs and latest three other articles
- municipal-credit-the-case-for-selectivity-in-a-falling-rate-environment: all three verbatim article paragraphs and latest three other articles
- sjh-capital-appoints-thomas-okafor-as-chief-risk-officer: all three verbatim article paragraphs and latest three other articles
- us-small-caps-after-a-strong-run-what-the-valuations-are-telling-us: all three verbatim article paragraphs and latest three other articles
- sjh-balanced-fund-q3-2026-portfolio-review: all three verbatim article paragraphs and latest three other articles
- reading-the-yield-curve-implications-for-2027: all three verbatim article paragraphs and latest three other articles
- asia-credit-selectivity-in-a-crowded-market: all three verbatim article paragraphs and latest three other articles
- sjh-capital-expands-new-york-team: all three verbatim article paragraphs and latest three other articles
- real-assets-after-the-repricing-infrastructure-opportunities: all three verbatim article paragraphs and latest three other articles
- sjh-quantitative-multi-strategy-fund-q3-2026-review: all three verbatim article paragraphs and latest three other articles
- dividend-quality-in-a-mature-market: all three verbatim article paragraphs and latest three other articles
- private-credit-in-2026-what-has-changed: all three verbatim article paragraphs and latest three other articles
- sjh-global-dividend-fund-q2-2026-portfolio-review: all three verbatim article paragraphs and latest three other articles
- sjh-capital-crosses-us-1-billion-in-assets-under-management: all three verbatim article paragraphs and latest three other articles
- Strategies table contains all 9 rows and every exact 1Y/3Y/5Y display
- About page contains all 6 leaders and both exact supplied story paragraphs
- Disclosures contains every supplied regulatory/general/privacy paragraph
- /nonexistent-validation-path: HTTP 404
- /strategies/not-a-fund: HTTP 404
- /insights/not-an-article: HTTP 404
- robots.txt returns 200 and disallows all crawlers
- sitemap.xml returns valid XML urlset structure

## Failures

None.

## Browser and final build checks

- Permitted in-app browser used for visual inspection; no bundled browser automation used.
- Desktop: 1440 × 1000, homepage hero, fund cards, AUM chart, CTA/footer and Balanced Fund performance/facts checked visually.
- Mobile: initial 356px viewport and 390 × 844 viewport; homepage, About, article reading layout, strategies comparison, long fund title and legal layout checked.
- Browser DOM measurements showed page width equal to the 390px viewport for About, article, login, real assets fund, Insights, Disclosures and Strategies; the wide comparison table scrolls inside its own container.
- Mobile menu opened, navigated and closed correctly. Local login submission displayed the exact requested response with sample credentials; no authentication or email request was sent.
- Visual refinement corrected the mobile fund-list summary spacing and kept long fund names wrapped within the sticky first column.
- Final ESLint and TypeScript checks passed. Optimized Next.js build completed successfully with all 30 content routes prerendered.
- Header identity, favicon, self-hosted typography and locally stored Hong Kong photograph verified in browser.
- Framework telemetry disabled explicitly in build and preview commands. Local preview remains bound to 127.0.0.1:3026.
