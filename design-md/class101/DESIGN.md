---
id: class101
name: Class101
country: KR
category: education
homepage: "https://class101.net"
primary_color: "#FF5D00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=class101.net&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product, url: "https://class101.net/ko?viewMode=svod", inspected: "2026-07-12" }
    - { id: giftcard, kind: legal-document, url: "https://class101.net/ko/docs/terms/giftcard?viewMode=svod", inspected: "2026-07-12" }
    - { id: privacy, kind: legal-document, url: "https://class101.net/ko/docs/terms/privacy?viewMode=svod", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://class101.net/ko?viewMode=svod", captured: "2026-07-12" }
    - { id: giftcard-live, kind: product-surface, url: "https://class101.net/ko/docs/terms/giftcard?viewMode=svod", captured: "2026-07-12" }
    - { id: privacy-live, kind: product-surface, url: "https://class101.net/ko/docs/terms/privacy?viewMode=svod", captured: "2026-07-12" }
    - { id: subscription, kind: official-doc, url: "https://class101.net/ko/pages/subscription-year2", captured: "2026-07-13" }
    - { id: creator, kind: official-doc, url: "https://creator.class101.net/", captured: "2026-07-13" }
    - { id: pretendard, kind: license, url: "https://github.com/orioncactus/pretendard", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.brand": &live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-12" }
    "tokens.colors.canvas": *live
    "tokens.colors.foreground": *live
    "tokens.colors.foreground-strong": *live
    "tokens.colors.muted": *live
    "tokens.components.legal-list-item.bg": &privacy { surface_id: privacy, source_id: privacy-live, method: computed-style, captured: "2026-07-12" }
    "tokens.components.legal-list-item.fg": *privacy
    "tokens.components.legal-list-item.font": *privacy
    "tokens.components.legal-list-item.padding": *privacy
    "tokens.components.legal-list-item.type": *privacy
    "tokens.components.legal-list-item.use": *privacy
    "tokens.rounded.lg": *live
    "tokens.rounded.md": *live
    "tokens.rounded.sm": *live
    "tokens.spacing.lg": *live
    "tokens.spacing.md": *live
    "tokens.spacing.sm": *live
    "tokens.spacing.xl": *live
    "tokens.spacing.xs": *live
    "tokens.typography.body.lineHeight": *live
    "tokens.typography.body.size": *live
    "tokens.typography.body.use": *live
    "tokens.typography.body.weight": *live
    "tokens.typography.control.lineHeight": *live
    "tokens.typography.control.size": *live
    "tokens.typography.control.use": *live
    "tokens.typography.control.weight": *live
    "tokens.typography.display.lineHeight": *live
    "tokens.typography.display.size": *live
    "tokens.typography.display.tracking": *live
    "tokens.typography.display.use": *live
    "tokens.typography.display.weight": *live
    "tokens.typography.family.sans": *live
    "tokens.typography.page-title.lineHeight": *live
    "tokens.typography.page-title.size": *live
    "tokens.typography.page-title.tracking": *live
    "tokens.typography.page-title.use": *live
    "tokens.typography.page-title.weight": *live
    "tokens.typography.section-heading.lineHeight": *live
    "tokens.typography.section-heading.size": *live
    "tokens.typography.section-heading.use": *live
    "tokens.typography.section-heading.weight": *live
    "tokens.components.legal-document-tab.type": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.bg": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.fg": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-testid=\"title\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.border": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.radius": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.padding": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.height": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.font": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-testid=\"title\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.selected": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"2\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.states": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-07-12" }
    "tokens.components.legal-document-tab.use": { surface_id: giftcard, source_id: giftcard-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-07-12" }
    "tokens.components.home-nav-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-12" }
    "tokens.components.home-nav-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-12" }
    "tokens.components.home-nav-button.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-12" }
    "tokens.components.home-nav-button.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-12" }
    "tokens.components.home-nav-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-12" }
    "tokens.components.home-nav-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-12" }
    "tokens.components.home-outlined-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.home-outlined-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.home-outlined-button.border": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.home-outlined-button.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.home-outlined-button.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.home-outlined-button.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.home-outlined-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.home-outlined-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.home-tab.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-12" }
    "tokens.components.home-tab.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-12" }
    "tokens.components.home-tab.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-12" }
    "tokens.components.home-tab.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-12" }
    "tokens.components.home-tab.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-12" }
    "tokens.components.home-tab.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-12" }
    "tokens.components.tinted-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-12" }
    "tokens.components.tinted-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-12" }
    "tokens.components.tinted-button.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-12" }
    "tokens.components.tinted-button.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-12" }
    "tokens.components.tinted-button.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-12" }
    "tokens.components.tinted-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-12" }
    "tokens.components.tinted-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-12" }
    "tokens.components.content-card.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-12" }
    "tokens.components.content-card.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-testid=\"title\"]", captured: "2026-07-12" }
    "tokens.components.content-card.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-12" }
    "tokens.components.content-card.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-testid=\"title\"]", captured: "2026-07-12" }
    "tokens.components.content-card.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-12" }
    "tokens.components.content-card.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-12" }
    "tokens.components.showcase-list-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"82\"]", captured: "2026-07-12" }
    "tokens.components.showcase-list-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"82\"]", captured: "2026-07-12" }
    "tokens.components.showcase-list-button.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"82\"]", captured: "2026-07-12" }
    "tokens.components.showcase-list-button.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-testid=\"title\"]", captured: "2026-07-12" }
    "tokens.components.showcase-list-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"82\"]", captured: "2026-07-12" }
    "tokens.components.showcase-list-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"82\"]", captured: "2026-07-12" }
    "tokens.components.header-category-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-12" }
    "tokens.components.header-category-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-12" }
    "tokens.components.header-category-button.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-testid=\"title\"]", captured: "2026-07-12" }
    "tokens.components.header-category-button.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-12" }
    "tokens.components.header-category-button.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-testid=\"title\"]", captured: "2026-07-12" }
    "tokens.components.header-category-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-12" }
    "tokens.components.header-category-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-12" }
    "tokens.components.header-accent-link.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.header-accent-link.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.header-accent-link.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-testid=\"title\"]", captured: "2026-07-12" }
    "tokens.components.header-accent-link.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.header-accent-link.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-testid=\"title\"]", captured: "2026-07-12" }
    "tokens.components.header-accent-link.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.header-accent-link.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.list-row-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"88\"]", captured: "2026-07-12" }
    "tokens.components.list-row-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"88\"]", captured: "2026-07-12" }
    "tokens.components.list-row-button.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"88\"]", captured: "2026-07-12" }
    "tokens.components.list-row-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"88\"]", captured: "2026-07-12" }
    "tokens.components.list-row-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"88\"]", captured: "2026-07-12" }
tokens:
  source: live-extract
  extracted: "2026-07-13"
  components_harvested: true
  note: "Values are limited to the supplied 2026-07-12 capture. Product home, legal-document chrome, and unobserved states remain separate evidence domains."
  colors:
    brand: "#FF5D00"
    canvas: "#FFFFFF"
    foreground: "#0C0C0C"
    foreground-strong: "#000000"
    muted: "#373737"
  typography:
    family:
      sans: "Pretendard Variable"
    display: { size: 40, weight: 800, lineHeight: 1.25, tracking: "-1.12px", use: "Home display heading" }
    page-title: { size: 28, weight: 700, lineHeight: 1.29, tracking: "-0.616px", use: "Observed h1" }
    section-heading: { size: 26, weight: 700, lineHeight: 1.38, use: "Observed h2" }
    body: { size: 18, weight: 400, lineHeight: 1.67, use: "Observed reading text" }
    control: { size: 16, weight: 400, lineHeight: 1, use: "Computed on the home control and tab roots, which carry the inherited body type; their visible labels were not sampled separately (corrected 2026-09-30)" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 24, xl: 36 }
  rounded: { sm: 4, md: 8, lg: 12 }
  components:
    legal-list-item: { type: listItem, bg: "transparent", fg: "#0C0C0C", padding: "0px 0px 0px 24px", font: "16px / 400 / Pretendard Variable", use: "Observed official privacy-document list item only" }
    legal-document-tab: { type: tab, bg: "transparent", fg: "rgba(55, 55, 55, 0.8)", border: "1px transparent", radius: "0px", padding: "12px 0px 10px", height: "45px", font: "18px / 700 / Pretendard Variable", selected: "border 1px #0c0c0c (bottom side), fg #0c0c0c", states: "five tabs per legal page; the one with aria-selected=\"true\" (giftcard capture 2, privacy capture 1, compared as a string) computes a #0c0c0c bottom border and a #0c0c0c label, and the four with \"false\" keep a transparent 1px bottom border and a rgba(55, 55, 55, 0.8) label. Both pages agree. No state frame", use: "Legal-document tab (button role=tab) at surface-2::[data-omd-capture=\"0\"]; the root computes #000000 / 16px / 400 and the label is its child h3 (line height 22px, tracking -0.288px). Document chrome, not product navigation" }
    home-nav-button: { type: button, bg: "transparent", radius: "8px", size: "108px x 38px", states: "eleven captured at rest on home; no state frame", use: "Home category button (css-bzjpx5) at home::[data-omd-capture=\"6\"]. The root computes #000000 / 16px / 400 with line height normal, and no child label was captured, so no label style is declared" }
    home-outlined-button: { type: button, bg: "transparent", border: "1px rgba(255, 255, 255, 0.298)", radius: "12px", padding: "14px 13px", height: "50px", states: "captured at rest on home (captures 28 and 86, 240 px wide; capture 95 has the same outline at 121 px); no state frame", use: "Home outlined button (css-67lr3i) at home::[data-omd-capture=\"28\"]. The root computes #000000 / 16px / 400 and no child label was captured, so no label style is declared" }
    home-tab: { type: tab, bg: "transparent", radius: "0px", size: "97px x 44px", states: "ten captured on home, every one aria-selected=\"false\" (compared as a string), so no selected style is declared; no state frame", use: "Home tab (div role=tab, css-12n7wd0) at home::[data-omd-capture=\"7\"]. Its colour and type equal the inherited body text (#000000, 16px / 400 / 16px), so it is a container and no label style is declared" }
    tinted-button: { type: button, bg: "rgba(0, 0, 0, 0.03)", radius: "8px", padding: "10px", height: "38px", states: "captured at rest twice on home: header link capture 5 (62 px wide) and footer button capture 96 (74 px wide); no state frame", use: "Tinted compact button at home::[data-omd-capture=\"5\"]; the root computes the inherited #000000 / 16px / 400 and no child label was captured" }
    content-card: { type: card, fg: "#ffffff", size: "240px x 147px", font: "18px / 700 / Pretendard Variable", states: "52 captured at rest on home; no state frame", use: "Home content card (a.css-1lalw83) at home::[data-omd-capture=\"30\"]; text colour and font are the child h3[data-testid=\"title\"] (208 px wide, line height 22px, tracking -0.288px). The anchor computes no fill and 0px radius and its image was not captured, so no fill or radius is declared" }
    showcase-list-button: { type: button, bg: "transparent", size: "300px x 134px", font: "20px / 700 / Pretendard Variable", states: "four captured at rest on home (captures 82-85). One title computes #0c0c0c and the other three rgba(55, 55, 55, 0.8); no aria-selected is recorded and nothing else in the capture names the active one, so neither a text colour nor a selected style is declared. No state frame", use: "Home showcase list button (css-vf38px) at home::[data-omd-capture=\"82\"]; the font is the child h3[data-testid=\"title\"] (260 px wide, line height 26px, tracking -0.36px)" }
    header-category-button: { type: button, bg: "transparent", fg: "rgba(55, 55, 55, 0.8)", size: "87px x 22px", font: "18px / 500 / Pretendard Variable", states: "one captured at rest on home; no state frame", use: "Home header button (css-1hvtp3b) at home::[data-omd-capture=\"2\"]; text colour and font are the child h3[data-testid=\"title\"] (five characters, matched by top offset and text length; line height 22px, tracking -0.288px)" }
    header-accent-link: { type: button, bg: "transparent", fg: "#ff5d00", size: "179px x 26px", font: "20px / 700 / Pretendard Variable", states: "one captured at rest on home; no state frame", use: "Home header link (a.css-b70msd) at home::[data-omd-capture=\"1\"]; text colour and font are its two-character child h3[data-testid=\"title\"] (line height 26px, tracking -0.36px), one of the three orange title samples" }
    list-row-button: { type: button, bg: "transparent", size: "600px x 62px", states: "five captured at rest on home; no state frame", use: "Home list row button (css-1hvtp3b) at home::[data-omd-capture=\"88\"]; the root computes the inherited #000000 / 16px / 400 and no child label was captured" }
---

# Design System Inspiration of Class101 (클래스101)

## 1. Visual Theme & Atmosphere

Class101 is an online learning marketplace and subscription service. Its public CLASS101+ material describes a subscription that lets members use a range of existing Class101 content, while the official creator centre presents classes and products across hobbies, work skills, and side projects. The captured Korean home is a white, typographic storefront: black and near-black text dominate, with a small `#FF5D00` orange accent appearing in home-title text. Its live web interface uses Pretendard Variable and compact, neutral controls rather than a captured public design-system token set. The current record deliberately separates that product surface from the terms and privacy pages, whose legal-document chrome is evidence for those pages only.

## Primary tasks

- Subscribe as a member and use the range of existing classes the subscription covers
- Find classes and products across hobbies, work skills, and side projects
- Publish a class or product as a creator starting a creator journey

## 2. Color Palette & Roles

Class101 does not publish a public token specification in the sources reviewed. These are raw computed values from the supplied capture, not a reconstructed palette.

- **Orange accent** (`#FF5D00`): observed on `home::[data-testid="title"]` text on the product home (3 medium-confidence occurrences). It is retained as the catalog primary color, but the capture does not establish a general CTA role.
- **Canvas** (`#FFFFFF`): observed body background across product home and both official documents (3 high-confidence occurrences).
- **Foreground** (`#0C0C0C`): high-confidence text on the product home and legal documents (498 occurrences); a `#000000` foreground is also widely observed in both domains.
- **Muted text** (`#373737`): observed text / border value (12 high-confidence occurrences); one home title sample resolves to `rgba(55, 55, 55, 0.8)`.

No success, error, warning, CTA-background, hover, or shadow color is promoted: the supplied evidence does not establish those roles.

## 3. Typography Rules

### Evidence classes

- **Live product and document use — confirmed.** `Pretendard Variable` is the computed family on the captured home and official legal-document pages. It has 753 captured uses across body, controls, headings, list items, tabs, and text, and a matching loaded `FontFace` set with 92 jsDelivr source URLs. This is the only family promoted to `tokens.typography.family.sans`.
- **Declared-only fallbacks — not promoted.** The computed stack also names `Pretendard JP Variable`, `Pretendard JP`, `Pretendard`, `system-ui`, platform UI fonts, Roboto, `Noto Sans KR`, and `Malgun Gothic`. The collector did not report a loaded match for these individual fallback faces, so they remain fallback declarations rather than UI-family claims.
- **Official distributed font asset and license.** Pretendard’s official project documents its variable dynamic subset under the family name `"Pretendard Variable"`; it is distributed under the SIL Open Font License. That source confirms the font asset and licence boundary, not a separate Class101-owned font.

### Observed type scale

| Role | Size | Weight | Line Height | Tracking | Provenance |
|---|---:|---:|---:|---:|---|
| Home display | 40px | 800 | 50px | -1.12px | `home::[data-testid="display"]` |
| H1 | 28px | 700 | 36px | -0.616px | captured h1 aggregate |
| H2 | 26px | 700 | 36px | normal | captured h2 aggregate |
| Reading body | 18px | 400 | 30px | normal | 269 captured occurrences |
| Control / tab root | 16px | 400 | 16px / normal | normal | home control and tab roots; this is the inherited body type, not a sampled label (corrected 2026-09-30) |

## 4. Component Stylings

Only the following components have selector and surface provenance. The bundle holds no pointer-state frame (`::state-*`) on any surface, so hover, focus and pressed are not asserted; disabled, error, dialog, toast and input variants were not observed. The one declared state is the legal-document tab's `aria-selected="true"` variant. Corrected 2026-09-30: the July text gave `interactionCount: 0` as the reason; that count covers expansions, not pointer states. It also excluded the selected tab, which the bundle records on both legal pages.

### Home navigation button

**Default — product home**
- Background: transparent
- Border: none
- Radius: 8px
- Label: not sampled. The root computes `#000000`, 16px / 400 (line height normal), the page's inherited colour and type, and no child label was captured, so no label style is declared.
- Use: Home control at `home::[data-omd-capture="6"]`; 108px × 38px observed; eleven instances
- Corrected 2026-09-30: the July text listed the root's `#000000` and 16px / 400 as the text style.

### Home outlined button

**Default — product home**
- Background: transparent
- Border: 1px rgba(255, 255, 255, 0.298)
- Radius: 12px
- Padding: 14px 13px
- Label: not sampled. The root computes `#000000`, 16px / 400, the inherited colour and type, and no child label was captured, so no label style is declared.
- Use: Home button at `home::[data-omd-capture="28"]` and `"86"`; 240px × 50px observed (`"95"` has the same outline at 121px wide)
- Corrected 2026-09-30: the July text listed the root's `#000000` and 16px / 400 as the text style.

### Home tab wrapper

**Unselected — product home**
- Background: transparent
- Border: none
- Radius: 0px
- Label: not sampled. The tab's colour and type (`#000000`, 16px / 400 / 16px, tracking normal) equal the inherited body text, so it is a container and no label style is declared.
- Use: `div[role="tab"]` at `home::[data-omd-capture="7"]`; `aria-selected="false"`, 97px × 44px observed. All ten home tabs record `aria-selected="false"`, so no selected style is declared.
- Corrected 2026-09-30: the July text listed the container's `#000000` and 16px / 400 as the text style.

### Legal-document tab

**Observed — official documentation chrome**
- Background: transparent
- Label: `rgba(55, 55, 55, 0.8)`, 18px / 700 / 22px, tracking -0.288px (the child `h3[data-testid="title"]`)
- Border: bottom 1px transparent (`rgba(0, 0, 0, 0)`); the other sides are 0px
- Radius: 0px
- Padding: 12px 0px 10px
- Selected: the tab with `aria-selected="true"` (giftcard capture 2, privacy capture 1) computes a 1px `#0C0C0C` bottom border and a `#0C0C0C` label. Both legal pages agree.
- Corrected 2026-09-30: the July text gave this tab a black bottom border and `#000000` 16px / 400 text. On unselected tabs the 1px bottom border is transparent and the black sits on 0px sides; the `#000000` and 16px / 400 are the root's inherited values, and the visible label is its child.
- Use: `button[role="tab"]` at `surface-2::[data-omd-capture="0"]`; 61px × 45px observed. This is document chrome, not evidence for product navigation.

### Legal-document list item

**Default — privacy document**
- Background: transparent
- Text: `#0C0C0C`
- Border: none
- Padding: 0px 0px 0px 24px
- Font: 16px / 400 / Pretendard Variable
- Use: `surface-3::li`; 28px line height and 4px bottom margin observed

The components below were transcribed on 2026-09-30 from the same 2026-07-12 bundle; nothing was re-measured. None has a state frame.

### Tinted compact button

- Background: `rgba(0, 0, 0, 0.03)`
- Radius: 8px; padding 10px; height 38px
- Label: not sampled; the root computes the inherited `#000000` / 16px / 400.
- Use: header link (`home::[data-omd-capture="5"]`, 62px wide) and footer button (`home::[data-omd-capture="96"]`, 74px wide).

### Home content card

- Size: 240px × 147px
- Title: `#FFFFFF`, 18px / 700 / 22px, tracking -0.288px (the child `h3[data-testid="title"]`, 208px wide)
- Use: 52 cards on the home page; evidence `home::[data-omd-capture="30"]`. The anchor computes no fill and 0px radius, and its image was not captured, so no fill or radius is declared.

### Home showcase list button

- Size: 300px × 134px
- Title: 20px / 700 / 26px, tracking -0.36px (the child `h3[data-testid="title"]`, 260px wide). One of the four titles computes `#0C0C0C` and the other three `rgba(55, 55, 55, 0.8)`. No `aria-selected` is recorded and nothing else in the capture names the active one, so no selected style is declared.
- Use: four buttons on the home page; evidence `home::[data-omd-capture="82"]` to `"85"`.

### Header category button

- Size: 87px × 22px
- Label: `rgba(55, 55, 55, 0.8)`, 18px / 500 / 22px, tracking -0.288px (the child `h3[data-testid="title"]`, matched by top offset and text length)
- Use: home header; evidence `home::[data-omd-capture="2"]`.

### Header accent link

- Size: 179px × 26px
- Label: `#FF5D00`, 20px / 700 / 26px, tracking -0.36px (the child `h3[data-testid="title"]`, two characters); this is one of the three orange title samples in §2.
- Use: home header; evidence `home::[data-omd-capture="1"]`.

### Home list row button

- Size: 600px × 62px
- Label: not sampled; the root computes the inherited `#000000` / 16px / 400.
- Use: five stacked rows on the home page; evidence `home::[data-omd-capture="88"]`.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://class101.net/ko?viewMode=svod (captured product home); https://class101.net/ko/docs/terms/giftcard?viewMode=svod and https://class101.net/ko/docs/terms/privacy?viewMode=svod (captured official-document chrome); https://class101.net/ko/pages/subscription-year2; https://creator.class101.net/; https://github.com/orioncactus/pretendard
**Tier 2 sources:** https://getdesign.md/class101 (attempted; unavailable to built-in web fetch and no indexed record returned); https://styles.refero.design/?q=class101 (attempted; unavailable to built-in web fetch and no indexed record returned)
**Conflicts unresolved:** none

Legacy black `#202020` CTA, its hover, semantic palette, shadows, cards, inputs, snackbar, dialog, responsive rules, states, and motion were not supported by the supplied 2026-07-12 capture and were removed rather than promoted. Tier 2 was unavailable and supplied no contrary claim.

## 5. Layout Principles

The supplied product-home capture is desktop `1440×900` and records a white body extending 6,121px vertically. It contains 16px controls/tabs and a 40px display heading. It does not establish a grid, max width, carousel behavior, card ratio, mobile layout, or sticky behavior; those remain unresolved.

## 6. Depth & Elevation

The representative captured controls and list items have `box-shadow: none`. No elevation scale is promoted; unobserved hover and overlay states are omitted.

## 7. Do's and Don'ts

### Do

- Reuse the confirmed Pretendard Variable family when reproducing the captured web surface.
- Keep product-home evidence distinct from legal-document chrome.
- Treat `#FF5D00` as an observed orange title accent, not as evidence for an all-purpose action color.

### Don't

- Don't restore the legacy black CTA, orange CTA, semantic state colors, or hover shadows without new surface evidence.
- Don't treat declared system-font fallbacks as loaded Class101 font assets.
- Don't infer hover, focus or pressed variants from this capture: it holds no pointer-state frame. The legal-document tab's selected state is the one recorded variant.

## 8. Responsive Behavior

No responsive transition was captured. The only recorded viewport is desktop `1440×900`; mobile, tablet, touch, safe-area, and media behavior are unresolved.

## 9. Agent Prompt Guide

### Verified prompt fragments

- "Use `Pretendard Variable`; the captured home resolves it through a loaded FontFaceSet match."
- "Create a neutral home navigation button: transparent background, no border, 8px radius, 38px observed height; its label style was not sampled (corrected 2026-09-30: the July fragment gave it `#000000` 16px / 400 text, the root's inherited values)."
- "Create the observed home outlined button only when its context warrants it: transparent background, 1px `rgba(255,255,255,0.298)` border, 12px radius, 14px 13px padding, 50px observed height; its label style was not sampled (corrected 2026-09-30: the July fragment gave it `#000000` text)."

Do not request unverified cards, inputs, toasts, modal sheets, hover states, responsive behavior, or semantic colors as though they were observed Class101 specifications.

## 10. Voice & Tone

The reviewed official material supports a creator-facing invitation to begin: the creator centre says "여러분이 사랑하는 일로 더 나은 세상을 만들어 보세요" and presents the English line "Live the way you love." It also addresses creators in a warm polite Korean register. That is insufficient to prescribe a universal consumer-product voice, error style, or system-message rules.

| Evidence | Use boundary |
|---|---|
| "여러분이 사랑하는 일로 더 나은 세상을 만들어 보세요" | Official creator-centre headline; creator acquisition context. |
| "세상을 바꾸는 크리에이터로서의 여정, 클래스101에서 시작하세요" | Official creator-centre headline; creator journey context. |
| "Live the way you love" | Official creator-centre mission line; do not treat as a universal UI string. |

## 11. Brand Narrative

Class101’s official creator centre frames the service as a place where people can begin a creator journey and publish classes or products spanning hobbies, work skills, and side projects. It also says that completed classes can be translated to meet class members globally. The official CLASS101+ page describes the consumer offering as a subscription that provides access to varied existing Class101 classes. Together, these first-party surfaces establish a two-sided learning marketplace: an audience discovers and subscribes to learning content, while creators receive onboarding and publishing support.

The reviewed sources do not establish founding history, named founders, rebrand chronology, or a comprehensive corporate manifesto. Those claims are omitted rather than reconstructed from secondary reporting.

## 12. Principles

1. **Creator participation is a first-party stated focus.** The creator centre invites people to begin their creator journey with Class101. *UI implication:* creator-centre language belongs to creator acquisition, not automatically to learner checkout or account flows.

2. **The catalogue spans multiple learning and product categories.** The creator centre names hobby, job, and side-project categories. *UI implication:* category navigation may be evidenced separately from generic marketing claims; this capture only confirms neutral 16px home controls.

3. **CLASS101+ is a subscription offering.** The official subscription page describes access to a range of existing Class101 content. *UI implication:* subscription-specific benefits or purchase states require their own observed surface evidence.

## 13. Personas

No first-party user-research or persona material was found in the reviewed sources. Do not substitute fictional learners or creators for evidence.

## 14. States

Empty, loading, success, error, disabled, skeleton, and validation states were not observed in the supplied capture, and the bundle holds no hover, pressed or focus frame. The one recorded state is the legal-document tab's `aria-selected="true"` variant: a 1px `#0C0C0C` bottom border and a `#0C0C0C` label, against a transparent border and a `rgba(55, 55, 55, 0.8)` label on unselected tabs, on both legal pages (§4). No other state token or copy should be inferred from the default-state components.

## 15. Motion & Easing

The supplied evidence contains no transition, animation, easing, or reduced-motion observations. Do not promote durations or curves.
