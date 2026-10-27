# SJH Capital

A complete English-language asset-management website built from the supplied fictional SJH Capital brief. This is a local design demonstration with eight page types, nine fund detail pages and fifteen full articles. It is configured with noindex/nofollow metadata and is not automatically deployed publicly.

## Run locally

From this project directory:

```sh
npm install
npm run dev
```

Open [http://127.0.0.1:3026](http://127.0.0.1:3026). The development server is bound to the local machine on port 3026.

## Check and build

```sh
npm run lint
npm run typecheck
npm run build
```

To preview a completed production build:

```sh
npm run start
```

The production preview also uses [http://127.0.0.1:3026](http://127.0.0.1:3026). Stop the development server before starting it, since both use the same port. Stop either preview with Control-C in its terminal.

## Included routes

| Route | Content |
| --- | --- |
| `/` | Home, AUM growth chart, featured funds and latest insights |
| `/about` | Story, values, leadership and milestones |
| `/strategies` | All nine strategies and comparison table |
| `/strategies/[slug]` | Nine fund detail pages with charts and performance tables |
| `/insights` | All fifteen articles |
| `/insights/[slug]` | Fifteen full articles and related reading |
| `/login` | Local client portal UI demonstration |
| `/disclosures` | Licensing, disclosures and privacy |

## Stack and source organization

- React 19.0.0 and Next.js 16.2.7 App Router.
- TypeScript and Tailwind CSS.
- Recharts 3.8.0 for AUM, NAV and annual return charts.
- `lib/funds.ts`: exact fund data, return formatting, compounded returns and seeded synthetic NAV paths.
- `lib/editorial.ts`: exact article copy, team, About content, milestones and legal text.
- `components/`: shared identity, navigation, footer and charts.
- `app/`: pages, metadata and global styles.

## Important project notes

All supplied names, figures, addresses, performance, regulatory claims and legal paragraphs are fictional. NAV paths are reproducible synthetic data generated to match the requested endpoints and trailing returns. No exchange holiday calendar or live financial feed is used.

The login form displays the provided confirmation message locally. It does not authenticate users, send sign-in links, save credentials or connect to any client system. Contact buttons use the supplied mailto and telephone details.

The user's explicit request to avoid skills was followed. The site has no dependency on design-skill files, tooling or services. No analytics, third-party telemetry or persistent external service was added.

Read `PRODUCT.md` for scope and assumptions, `DESIGN.md` for visual decisions and `docs/CONTENT_NOTES.md` for exact-copy auditing and source contradictions. Fictional regulatory copy and unresolved source conflicts require review before any real public use. Public deployment and production indexing changes are separate actions.
