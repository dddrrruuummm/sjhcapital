# SJH Capital website

## Purpose

Create a complete, credible institutional asset-management website from the supplied fictional brief. The site introduces the firm, presents its nine strategies transparently, provides inspectable fund performance and shares the team's full research archive. The primary actions are exploring funds, contacting the team and opening the client portal demonstration.

The language is English (US). The user explicitly requested a design based on the provided data and independent design judgment without using skills.

## Facts confirmed within the supplied fictional brief

These details are confirmed as source requirements only; they have not been verified as real company information.

- Company: SJH Capital Ltd, founded October 2013 in Hong Kong.
- Scope: Hong Kong-based asset management serving US and international private and institutional investors.
- AUM summary: US$1.24B. The exact About story uses the alternate text US$1.24 billion, preserved verbatim.
- Clients: 350+ private & institutional; US-based clients represent approximately one-third of AUM.
- Team: 28 professionals, including 14 in investment roles; six named leaders with monogram avatars.
- Investment offering: nine funds across equities, fixed income, multi-asset and alternatives.
- Hong Kong headquarters: Suite 2601, 26/F, Tower One, Lippo Centre, 89 Queens Road East, Admiralty, Hong Kong.
- New York office: 350 Madison Avenue, Suite 2100, New York, NY 10173; opened 2019, by appointment.
- Telephone: +852 3961 8800 and +1 (212) 748-3300.
- Email: contact@sjh.capital.
- Data date: October 21, 2026. The 12-month AUM chart uses the supplied November 2025–October 2026 monthly figures.

The supplied company registration, SFC licensing and privacy statements are fictional copy for the demonstration. See `docs/CONTENT_NOTES.md` for exact-copy auditing and unresolved source inconsistencies.

## Users and tasks

Private clients, family offices and institutions should be able to understand the firm's approach, compare strategies, inspect performance and risk, read its investment views and locate contact details. Existing clients can reach the portal mockup from the persistent header.

## Page scope

Eight page types create 30 content routes:

1. Home: hero, AUM card, four key statistics, three featured funds, 12-month AUM chart, three latest insights and contact invitation.
2. About: two-paragraph story, six firm facts, three values, six leaders and six milestones.
3. Strategies & Funds: all nine funds with benchmarks, risk, fees, minimums and 1Y/3Y/5Y returns.
4. Fund Detail: one route per fund, facts, NAV/benchmark chart, annual chart and table, 30-day NAV table, full strategy and risk text.
5. Insights: all 15 dated articles with categories and excerpts.
6. Article: one route per article, three exact body paragraphs and three latest other articles.
7. Client Login: email/password UI and the exact supplied local confirmation message.
8. Disclosures: Licensing & Registration, Important Disclosures and Privacy Policy.

The shared header and footer provide navigation, office addresses, contact details, supplied regulatory text and the exact risk disclosure on every page.

## Assumptions and boundaries

- This is a local demonstration using the brief's fictional identity and figures.
- The visual identity is newly drawn for this project; team members use monograms, not invented photographs.
- Supplied copy takes priority over attempts to reconcile contradictory dates or prose.
- Generated NAV observations are synthetic illustrations constrained by the supplied performance values.
- Contact actions are mail and telephone links; no messages are sent automatically.
- There is no authentication, database, investor account, payment system or email-delivery backend.
- Search metadata is present, with noindex/nofollow for the fictional demonstration.
- The Next.js project is suitable for the existing local development and Vercel workflow. No public deployment is performed automatically.

## Technical foundation

React 19.0.0, Next.js 16.2.7, TypeScript, Tailwind CSS and Recharts 3.8.0. Company, fund and editorial content is centralized in `lib/` for inspection and replacement. Visual decisions are documented in `DESIGN.md`.
