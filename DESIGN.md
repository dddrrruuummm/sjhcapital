# SJH Capital — institutional, editorial, precise

## Direction
Built from the supplied fictional asset-management brief and independent design judgment. The user explicitly requested no skills; no SKILL.md was read or invoked. The existing SJH DEV trade website is a separate company and was not modified.

A deep navy editorial hero places the exact serif headline beside Hong Kong's skyline and a white AUM statement. Muted gold establishes the identity and marks the most recent month on the AUM chart. Wide whitespace and restrained rules keep financial detail legible. The homepage moves from firm positioning to facts, three selected funds, asset growth, three latest articles, and the prescribed contact invitation.

## Identity and typography
Custom framed SJH monogram: navy field, gold serif lettering, fine upper/lower rules and short center registration marks. Applied in the navigation, footer and favicon. CAPITAL is letter-spaced outside the mark. Newsreader provides a literary investment-report tone; DM Sans carries UI, tables and body text. Both are self-hosted under their included OFL licenses.

## Palette
Navy #0B1F3A; deep #081627; gold #B98A2F; light gold #C9A24B; light canvas #F6F7FA; border #E3E7EE; positive #256D5B; negative #A03D33. Full risk text and signed returns accompany semantic color.

## Distinctive elements
The portfolio hero aligns an illuminated skyline with the disciplined AUM card. Fund cards pair precise risk labels, seeded NAV sparklines, and supplied 12-month returns. The AUM chart highlights October 2026 in gold; all underlying monthly values are available in an expandable table. Team portraits use the prescribed typographic monograms. Fund pages use compact fact sheets alongside deep performance and NAV tables.

## Photography
One Hong Kong skyline photo is used as geographic atmosphere, never as evidence of company facilities or investment holdings. Author, source and license are recorded in docs/photo-sources.json. The brief's information-led investment site does not need an unrelated eight-image portfolio gallery.

## Interactions and responsive behavior
Sticky header, active navigation, keyboard skip link, mobile menu, accessible visible focus, password visibility toggle, local-only login response, chart hover values and expandable chart data. No animation in charts; reduced-motion setting removes smooth scrolling and transitions. On mobile, hero and AUM card stack, fund cards and people become single columns, tables scroll within their own containers, and the first fund column remains visible.

## Content and deployment
Exact provided copy is preserved; see docs/CONTENT_NOTES.md for source contradictions. All supplied financial and licensing information is fictional. The local demonstration is noindex, robots-disallowed and not publicly deployed. Metadata is page-specific. Sitemap generation accepts an explicitly configured NEXT_PUBLIC_SITE_URL, avoiding an invented production URL. No auth backend, database, telemetry or third-party scripts. Existing Next.js/Vercel workflow retained.

## Comparison
The recent TAIGAUTO and SJH DEV projects use product photography, catalog categories and hardware/automotive inquiry paths. This design uses an editorial institutional hero, financial tables and analysis-led content; no product catalog layout is reused.
