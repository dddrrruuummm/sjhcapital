# Content fidelity and demonstration boundaries

## Source and status

The supplied `sjh-website-prompt.md` is the sole source for company facts, fund figures, team biographies, articles and legal copy. It expressly states that every name, number, date, address and sentence is fictional. This project is a local design demonstration, not an independently verified asset manager or an approved financial promotion.

The user's direct instruction was to design from the supplied material without invoking skills. No design skills were used. The brief's embedded directions were treated as the requested website specification, with the user's direct instruction taking precedence.

## Exact-copy audit

Compared the structured data in `lib/funds.ts` and `lib/editorial.ts` directly against the source brief:

- All 9 fund names, slugs, categories, risks, benchmark labels, minimums, fees, inception dates, trailing returns, volatility values, NAV endpoints and annual returns match.
- All 9 fund blurbs and all 27 strategy paragraphs match.
- All 15 article dates, categories, titles and excerpts, and all 45 body paragraphs match.
- The 6 leadership biographies, 2 About story paragraphs, 6 firm facts, 3 values, 6 timeline entries and 8 legal paragraphs are preserved.
- Escaped quotation marks from the source representation render as actual quotation marks. They are not displayed with backslashes.
- Numeric values are stored as numbers where computation is required. Presentation formatting restores the specified precision, including annual returns such as `+25.0%`, four-decimal NAV and two-decimal daily changes.

No source-copy corrections were necessary during this audit.

## Inconsistencies intentionally preserved

| Source issue | Content retained | Treatment |
| --- | --- | --- |
| Fund histories predate the firm | Founded October 2013; Balanced Fund inception March 2013; Core Equity Fund inception June 2013; the October 2013 milestone says both funds launched at founding. | Keep the dates and the milestone as supplied. Do not invent predecessor history. |
| AUM wording conflicts with the universal exact-string instruction | The headline metric is `US$1.24B`; the About story literally says `US$1.24 billion`. | Use `US$1.24B` in summary metrics and preserve the provided About paragraph verbatim. |
| AUM monthly precision differs from the rounded summary | October monthly chart value is `1238` in US$M, while the supplied headline is `US$1.24B`. | Keep both source values; do not replace the monthly endpoint with 1240. |
| Full-quarter reviews are dated before those quarters end | Quantitative Multi-Strategy Q3 review: July 28, 2026. Balanced Fund Q3 review: September 9, 2026. Global Dividend Q2 review: May 12, 2026. | Preserve each publication date, title, reported quarter and body. |
| The thirteen-year statement is early in a historical article | The February 20, 2026 milestone article calls the history thirteen years, although the firm was founded in October 2013. | Preserve the article text. The current October 2026 thirteen-year description remains as supplied. |

These are source-level conflicts, not added factual claims or implementation errors. They require client clarification before any real public use.

## Calculated and generated information

Fund NAV curves are deterministic synthetic weekday paths for the requested 252 observations ending October 21, 2026. They are generated from each supplied daily volatility, trailing return and endpoint. Benchmarks, when present, use their supplied trailing return and approximately 95% of the fund volatility. Weekends are excluded; no exchange holiday calendar was requested or added.

Three-year and five-year table values are total compounded annual returns from the supplied 2023–2025 and 2021–2025 records. They are not annualized returns. A dash denotes insufficient complete annual history. The Private Credit Fund starts its annual table in 2022, as instructed.

## Authentication, contact and publication

The Client Login page is a UI demonstration. Submitting the form displays the exact supplied sign-in message locally. It does not authenticate, send an email, store credentials or connect to an investor database.

Email and telephone links use the fictional contact details from the source. There is no contact-form backend, payment system, analytics integration or live market-data service.

The project uses noindex/nofollow metadata because its company and regulatory claims are fictional. It has not been automatically published or deployed. Public release would require replacing or approving the fictional content, reconciling the source conflicts and choosing the intended production indexing policy.
