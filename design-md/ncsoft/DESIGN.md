---
id: ncsoft
name: NCSOFT
display_name_kr: 엔씨소프트
country: KR
category: consumer-tech
homepage: "https://about.ncsoft.com/"
primary_color: "#ffffff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=about.ncsoft.com&sz=128"
verified: "2026-09-30"
added: "2026-06-17"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: brand-media, url: "https://about.ncsoft.com/play", inspected: "2026-09-30" }
    - { id: surface-2, kind: corporate, url: "https://www.nc.com/", inspected: "2026-09-30" }
    - { id: surface-3, kind: brand-media, url: "https://about.ncsoft.com/news", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://about.ncsoft.com/play", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.nc.com/", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://about.ncsoft.com/news", captured: "2026-09-30" }
    - { id: ci-renewal, kind: official-doc, url: "https://about.ncsoft.com/en/news/article/nc-ci-renewal-project-en", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &ncta { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *ncta
    "tokens.colors.on-dark": &ph2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.ink": &ph2p { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.colors.editorial-ink": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.colors.text-strong": &nmore { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"14\"]", captured: "2026-09-30" }
    "tokens.colors.nav-inactive": &pnav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.colors.footer-on-dark": &pfh { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"24\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &plegal { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"38\"]", captured: "2026-09-30" }
    "tokens.colors.portal-meta": &pmeta { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.colors.portal-date": *pmeta
    "tokens.typography.family.media": *pnav
    "tokens.typography.family.display": &pcat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-09-30" }
    "tokens.typography.family.portal": *ncta
    "tokens.typography.media-hero.size": *ph2
    "tokens.typography.media-hero.weight": *ph2
    "tokens.typography.media-hero.lineHeight": *ph2
    "tokens.typography.media-hero.tracking": *ph2
    "tokens.typography.media-hero.use": *ph2
    "tokens.typography.media-hero-sm.size": &nh2 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.media-hero-sm.weight": *nh2
    "tokens.typography.media-hero-sm.lineHeight": *nh2
    "tokens.typography.media-hero-sm.tracking": *nh2
    "tokens.typography.media-hero-sm.use": *nh2
    "tokens.typography.section.size": &ph3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.section.weight": *ph3
    "tokens.typography.section.use": *ph3
    "tokens.typography.nav.size": &psel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *psel
    "tokens.typography.nav.use": *psel
    "tokens.typography.display.size": &pdisp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.display.weight": *pdisp
    "tokens.typography.display.lineHeight": *pdisp
    "tokens.typography.display.use": *pdisp
    "tokens.typography.display-xl.size": *pcat
    "tokens.typography.display-xl.weight": *pcat
    "tokens.typography.display-xl.lineHeight": *pcat
    "tokens.typography.display-xl.use": *pcat
    "tokens.typography.card-title.size": &ntp { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *ntp
    "tokens.typography.card-title.lineHeight": *ntp
    "tokens.typography.card-title.tracking": *ntp
    "tokens.typography.card-title.use": *ntp
    "tokens.typography.caption.size": *ntp
    "tokens.typography.caption.weight": *ntp
    "tokens.typography.caption.use": *ntp
    "tokens.typography.footer.size": *pfh
    "tokens.typography.footer.weight": *pfh
    "tokens.typography.footer.use": *pfh
    "tokens.typography.legal.size": *plegal
    "tokens.typography.legal.weight": *plegal
    "tokens.typography.legal.lineHeight": *plegal
    "tokens.typography.legal.use": *plegal
    "tokens.typography.portal-hero.size": &phero { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h3", captured: "2026-09-30" }
    "tokens.typography.portal-hero.weight": *phero
    "tokens.typography.portal-hero.lineHeight": *phero
    "tokens.typography.portal-hero.use": *phero
    "tokens.typography.portal-section.size": *ph2p
    "tokens.typography.portal-section.weight": *ph2p
    "tokens.typography.portal-section.lineHeight": *ph2p
    "tokens.typography.portal-section.use": *ph2p
    "tokens.typography.portal-button.size": *ncta
    "tokens.typography.portal-button.weight": *ncta
    "tokens.typography.portal-button.lineHeight": *ncta
    "tokens.typography.portal-button.use": *ncta
    "tokens.typography.portal-card-title.size": *pmeta
    "tokens.typography.portal-card-title.weight": *pmeta
    "tokens.typography.portal-card-title.lineHeight": *pmeta
    "tokens.typography.portal-card-title.use": *pmeta
    "tokens.typography.portal-meta.size": *pmeta
    "tokens.typography.portal-meta.weight": *pmeta
    "tokens.typography.portal-meta.lineHeight": *pmeta
    "tokens.typography.portal-meta.use": *pmeta
    "tokens.spacing.nav-underline": *pnav
    "tokens.spacing.meta-gap": *ntp
    "tokens.spacing.footer-heading": *pfh
    "tokens.spacing.cta-y": *ncta
    "tokens.spacing.cta-x": *ncta
    "tokens.rounded.md": *ncta
    "tokens.rounded.lg": &pgame { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.components.media-nav-tab.type": *pnav
    "tokens.components.media-nav-tab.bg": *pnav
    "tokens.components.media-nav-tab.fg": *pnav
    "tokens.components.media-nav-tab.padding": *pnav
    "tokens.components.media-nav-tab.height": *pnav
    "tokens.components.media-nav-tab.font": *pnav
    "tokens.components.media-nav-tab.selected": *psel
    "tokens.components.media-nav-tab.states": *pnav
    "tokens.components.media-nav-tab.use": *pnav
    "tokens.components.media-carousel-arrow.type": &parrow { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-09-30" }
    "tokens.components.media-carousel-arrow.size": *parrow
    "tokens.components.media-carousel-arrow.disabled": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.components.media-carousel-arrow.states": *parrow
    "tokens.components.media-carousel-arrow.use": *parrow
    "tokens.components.media-more-button.type": *nmore
    "tokens.components.media-more-button.bg": *nmore
    "tokens.components.media-more-button.fg": *nmore
    "tokens.components.media-more-button.height": *nmore
    "tokens.components.media-more-button.font": *nmore
    "tokens.components.media-more-button.states": *nmore
    "tokens.components.media-more-button.use": *nmore
    "tokens.components.media-article-card.type": &nlist { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.components.media-article-card.radius": *nlist
    "tokens.components.media-article-card.size": *nlist
    "tokens.components.media-article-card.use": *nlist
    "tokens.components.media-footer-heading.type": *pfh
    "tokens.components.media-footer-heading.bg": *pfh
    "tokens.components.media-footer-heading.fg": *pfh
    "tokens.components.media-footer-heading.border": *pfh
    "tokens.components.media-footer-heading.padding": *pfh
    "tokens.components.media-footer-heading.height": *pfh
    "tokens.components.media-footer-heading.font": *pfh
    "tokens.components.media-footer-heading.states": *pfh
    "tokens.components.media-footer-heading.use": *pfh
    "tokens.components.portal-contained-button.type": *ncta
    "tokens.components.portal-contained-button.bg": *ncta
    "tokens.components.portal-contained-button.fg": *ncta
    "tokens.components.portal-contained-button.radius": *ncta
    "tokens.components.portal-contained-button.padding": *ncta
    "tokens.components.portal-contained-button.height": *ncta
    "tokens.components.portal-contained-button.font": *ncta
    "tokens.components.portal-contained-button.states": *ncta
    "tokens.components.portal-contained-button.use": *ncta
    "tokens.components.portal-game-card.type": *pgame
    "tokens.components.portal-game-card.radius": *pgame
    "tokens.components.portal-game-card.size": *pgame
    "tokens.components.portal-game-card.font": *pgame
    "tokens.components.portal-game-card.use": *pgame
    "tokens.components.portal-news-card.type": &pnews { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.components.portal-news-card.radius": *pnews
    "tokens.components.portal-news-card.size": *pnews
    "tokens.components.portal-news-card.use": *pnews
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#ffffff"
    on-primary: "#252628"
    on-dark: "#ffffff"
    ink: "#000000"
    editorial-ink: "#1e1e1e"
    text-strong: "#333333"
    nav-inactive: "#a9a9a9"
    footer-on-dark: "#ebebeb"
    muted: "#888888"
    portal-meta: "#888890"
    portal-date: "#62626a"
  typography:
    family: { media: "Helvetica Now", display: "Helvetica-Now-Display-Black", portal: "Pretendard" }
    media-hero: { size: 39, weight: 700, lineHeight: 1.5, tracking: -0.25, use: "NC PLAY featured headline on the dark /play page (h2), white" }
    media-hero-sm: { size: 34, weight: 700, lineHeight: 1.54, tracking: -0.25, use: "Featured headline on the /news page (h2), white over its image" }
    section: { size: 26, weight: 700, use: "NC PLAY section heads (PLAY HIGHLIGHTS, CATEGORIES, FEATURED, LATEST); line height normal" }
    nav: { size: 20, weight: 700, use: "Selected NC PLAY header tab (PLAY or NEWS); the other tab is 20px / 500 #a9a9a9" }
    display: { size: 74, weight: 400, lineHeight: 0.99, use: "Helvetica Now Display Black slide titles in the NC PLAY carousels" }
    display-xl: { size: 125, weight: 400, lineHeight: 1.16, use: "Outlined category links on NC PLAY (ALL, INTERACTIVE, FILM, CREATIVE)" }
    card-title: { size: 18, weight: 700, lineHeight: 1.61, tracking: -0.25, use: "LATEST article title on the /news page, #333333" }
    caption: { size: 12, weight: 400, use: "Article date and category line on the /news page; line height normal" }
    footer: { size: 16, weight: 500, use: "NC PLAY footer headings and links (Helvetica Now); line height normal" }
    legal: { size: 10, weight: 400, lineHeight: 1.7, use: "NC PLAY footer copyright and policy links" }
    portal-hero: { size: 48, weight: 700, lineHeight: 1.35, use: "www.nc.com hero headline (h3), white over the key art" }
    portal-section: { size: 28, weight: 700, lineHeight: 1.36, use: "www.nc.com shelf heads (MMORPG, NC NEWS)" }
    portal-button: { size: 17, weight: 700, lineHeight: 1.35, use: "바로가기 label on the www.nc.com hero action" }
    portal-card-title: { size: 18, weight: 500, lineHeight: 1.33, use: "NC NEWS item title on www.nc.com, #000000" }
    portal-meta: { size: 15, weight: 400, lineHeight: 1.33, use: "NC NEWS category (#888890) and date (#62626a) on www.nc.com" }
  spacing: { nav-underline: 5, meta-gap: 10, footer-heading: 24, cta-y: 16, cta-x: 24 }
  rounded: { md: 8, lg: 16 }
  components:
    media-nav-tab: { type: tab, bg: "transparent", fg: "#a9a9a9", padding: "0px 0px 5px", height: "34px", font: "20px / 500 Helvetica Now", selected: "fg #ffffff at 700 on the dark /play page (home c=1); fg #1e1e1e at 700 on the light /news page (surface-3 c=2)", states: "selected read from rest values on both pages; the unselected NEWS tab's hover and pressed frames read #acacac, three steps from #a9a9a9 on one element, so they are treated as a transition frame and no hover is declared; focus is not declared from the capture", use: "PLAY / NEWS switch in the NC PLAY header at home::[data-omd-capture=\"2\"], 60 x 34" }
    media-carousel-arrow: { type: button, size: "32px x 32px", disabled: "the previous arrow is disabled at the first slide (home c=17, surface-3 c=6)", states: "the disabled variant is a rest attribute; no pointer frame; the icon is a background image, so no colour is claimed", use: "Swiper previous and next arrows beside PLAY HIGHLIGHTS and FEATURED at home::[data-omd-capture=\"18\"]" }
    media-more-button: { type: button, bg: "transparent", fg: "#333333", height: "33px", font: "16px / 700 / 22.08px Helvetica Now; the label inside is set at 24px / 700", states: "rest only; no state frame", use: "VIEW MORE under the LATEST list on the /news page at surface-3::[data-omd-capture=\"14\"], 177 x 33" }
    media-article-card: { type: card, radius: "0px", size: "432px x 334px", use: "LATEST article on the /news page (six captured, c=8-13), three per row: date and category 12px / 400 #333333 with 10px below, title 18px / 700 / 28.98px Helvetica Now #333333 at -0.25px" }
    media-footer-heading: { type: button, bg: "transparent", fg: "#ebebeb", border: "1px solid #ebebeb (bottom only)", padding: "0px 0px 24px", height: "49px", font: "16px / 500 Helvetica Now", states: "rest only; on the light /news page the same heading is #1e1e1e with a #1e1e1e rule (surface-3 c=23)", use: "FAMILY SITE and GLOBAL headings in the dark footer of the /play page at home::[data-omd-capture=\"24\"], 258 x 49" }
    portal-contained-button: { type: button, bg: "#ffffff", fg: "#252628", radius: "8px", padding: "16px 24px", height: "55px", font: "17px / 700 / 23px Pretendard", states: "rest only; no state frame", use: "바로가기 on the www.nc.com hero at surface-2::[data-omd-capture=\"0\"], 107 x 55 (pd-button--contained, --color-common, --size-xxl)" }
    portal-game-card: { type: card, radius: "16px", size: "266px x 266px", font: "16px / 500 / 22px Pretendard", use: "Game tile on www.nc.com (eleven captured, c=1-11), four per row, the game name set in white 16.38px / 400 Pretendard over the key art; tiles lead to PURPLE (purple.plaync.com), which was not captured" }
    portal-news-card: { type: card, radius: "0px", size: "365px x 297px", use: "NC NEWS item on www.nc.com (six captured, c=12-17): category 15px / 400 #888890, date 15px / 400 #62626a, title 18px / 500 / 24px #000000" }
  components_harvested: true
---

# Design System Inspiration of NCSOFT

## 1. Visual Theme & Atmosphere

NC — NCSOFT (엔씨소프트) in its older name — is the Korean game company behind the Lineage family (리니지, 리니지2, 리니지M, 리니지2M, 리니지W, 리니지 클래식), AION and AION2, Throne and Liberty, Blade & Soul NEO and Guild Wars 2, the titles on the MMORPG shelf of its corporate home, www.nc.com. www.ncsoft.com now redirects there. The page is titled "NC - 즐거움으로 연결된 새로운 세상" and describes a company that connects the world through joy, from MMORPGs to casual, shooting and action games; its game tiles lead to PURPLE, NC's game platform, whose name also shows in the page's own code (a `purple-design-provider` body class and `pd-button` classes on the hero action). Alongside it runs NC PLAY (about.ncsoft.com), "엔씨 공식 브랜드 미디어" — the official brand media — where NC publishes its craft and culture: The Game Art, Behind The Story, AI research, ESG (the NC ESG PLAYBOOK 2025) and new games such as 아스트라에 오라티오.

The identity under both comes from the 2020 CI renewal NC designed with Pentagram. Its own account explains each choice: letter edges cut at 45 degrees for the sincerity of making masterpieces with cutting-edge technology, bold letters for a bold spirit, no space between them so the logo "represents a new world that is connected", a new NC BLUE and NC BLUE Tint made by filling in cyan, pictograms with tapered edges, and the logo as a "flexible window" through which a game's image can be seen. The name has moved with it: the 2020 article is signed "Ⓒ 2020 NCSOFT Corporation", and NC PLAY's footer now reads "ⓒ NC Corporation".

The captured surfaces are monochrome. NC PLAY sets Helvetica Now in two themes: the /play page puts white type (`#ffffff`) on a black stage, with the unselected tab in `#a9a9a9` and the footer in `#ebebeb` over hairline rules; the /news page turns the same layout to `#000000`, `#1e1e1e` and `#333333` on white. Helvetica Now Display Black — a condensed black cut, by its file name — sets 74px carousel titles and 125px outlined category links. www.nc.com is Pretendard: a 48px white headline over key art, one white contained action (`#ffffff` fill, `#252628` label, 8px corners), 16px-radius game tiles and square NC NEWS items with `#888890` categories and `#62626a` dates. No purple, no NC BLUE and no box-shadow render on any captured element.

**Key Characteristics:**
- Monochrome chrome: white, black and a short grey ladder (`#1e1e1e`, `#333333`, `#a9a9a9`, `#ebebeb`, `#888888`)
- The one filled action is white — `#ffffff` with a `#252628` label, 8px corners, 17px / 700 Pretendard
- Two type systems by surface: Helvetica Now for NC PLAY, Pretendard for www.nc.com
- Helvetica Now Display Black at display sizes only (74px titles, 125px outlined links)
- Selected tab by weight and contrast: 700 in white or `#1e1e1e`, the other tab 500 in `#a9a9a9`
- 16px corners on game tiles, 8px on the action, square everywhere else
- Flat: no box-shadow on any captured element

## Primary tasks

- Find a game and open it on PURPLE
- Catch a sale or a new launch from the hero
- Read NC's news and press releases
- Read how NC's games, art, sound and AI research are made (NC PLAY)

## 2. Color Palette & Roles

Every token below was read by the deterministic collector on 2026-09-30 from NC PLAY's /play and /news pages and from www.nc.com.

### Primary
- **White** (`#ffffff`): The fill of www.nc.com's one contained action, 바로가기, and the selected header tab on NC PLAY's dark /play page. The captured surfaces render no chromatic colour, so under the owner rule the primary is the measured primary action fill — this white.
- **On Primary** (`#252628`): The 바로가기 label.

### Ink & Text
- **On Dark** (`#ffffff`): Headlines, section heads and carousel titles on the /play page; the www.nc.com hero headline.
- **Ink** (`#000000`): www.nc.com shelf heads and NC NEWS titles; section heads on the /news page.
- **Editorial Ink** (`#1e1e1e`): The selected NEWS tab, footer headings and links on the /news page.
- **Strong Text** (`#333333`): LATEST article titles and dates and the VIEW MORE button on the /news page.
- **Inactive Tab** (`#a9a9a9`): The unselected PLAY / NEWS tab on both NC PLAY pages.
- **Footer on Dark** (`#ebebeb`): Footer headings, links and the rule under each heading on the /play page.
- **Muted** (`#888888`): Copyright, policy links and unselected languages in the /play footer.
- **Portal Meta** (`#888890`) and **Portal Date** (`#62626a`): The category and date on www.nc.com's NC NEWS items.

### Brand assets (not tokens)
- **NC BLUE** and **NC BLUE Tint**: the brand colours named by the 2020 CI renewal, the tint made by filling in cyan. The article publishes no colour values, and neither colour renders on the captured pages, so neither is a machine token.
- **Stages**: the black /play stage, the www.nc.com hero, its NC NEWS band and a PURPLE promotion band all carry their own fills, read by a probe but not by the collector, so none is a token. `html` and `body` compute transparent on all three pages.

### Not carried forward
- The June record's purple family — `#7234e0`, `#482486`, `#e8d6ff`, `#f6eeff`, `#8243f2` — its cobalt family `#1d4b99`, `#0e356a`, `#d3e2fc`, its point colours `#f1415e`, `#21ab79`, `#fa38ec`, `#6768f6`, `#38aefa`, and its neutral ramp `#0f1011`, `#3d3d43`, `#a3a3a9`, `#bdbdc1`, `#f2f2f3`, `#f7f7f8`, `#efefef`. They came from custom properties in www.nc.com's stylesheets rather than rendered elements; none appears in the 2026-09-30 bundle, and today's probe found no `--core_primary_normal` on `:root` (cross-origin sheets could not be read). Under the owner rule a colour that is not rendered in a primary role is not a token.

## 3. Typography Rules

### Font Family
- **Live surface use (NC PLAY)**: `Helvetica Now` — self-hosted, the bundle listing `about.ncsoft.com/font/HelveticaNow-Regular.woff2` and `.woff`; 161 observed uses: tabs, headings, footer, article text. NC PLAY's stacks continue `"Helvetica Now", NotoSans-kr, …`, so Hangul in these lines falls through to the next face.
- **Live surface use (display)**: `Helvetica-Now-Display-Black` — self-hosted as `about.ncsoft.com/font/HelveticaNowDisplay-CnBlk.woff2`; 31 uses, only at 74px and 125px.
- **Live surface use (www.nc.com)**: `Pretendard` — the v1.3.9 dynamic subset from jsDelivr's copy of `orioncactus/pretendard`; 52 uses.
- **Live, language menu only**: `NotoSans-kr`, `NotoSans-jp`, `NotoSans-tc` — self-hosted 700-weight files; 2 uses each, the 한국어 / 日本語 / 繁體中文 items.
- **Declared only**: `NotoSans` (a Vietnamese/Latin 700 file) and `swiper-icons` (an inline icon font), 0 observed uses.
- **Unresolved**: `Times` — reported on the two `body` elements, which set no family of their own; not a brand face.
- **Licence**: no page opened states licence terms for the Helvetica Now faces. The 2020 CI article names no typeface.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Display XL | Helvetica Now Display Black | 125px | 400 | 145px (1.16) | normal | Category links |
| Display | Helvetica Now Display Black | 74px | 400 | 73.26px (0.99) | normal | Carousel titles |
| Portal Hero | Pretendard | 48px | 700 | 65px (1.35) | normal | www.nc.com hero |
| Media Hero | Helvetica Now | 39px | 700 | 58.5px (1.5) | -0.25px | /play featured |
| Media Hero S | Helvetica Now | 34px | 700 | 52.36px (1.54) | -0.25px | /news featured |
| Portal Section | Pretendard | 28px | 700 | 38px (1.36) | normal | Shelf heads |
| Section | Helvetica Now | 26px | 700 | normal | normal | NC PLAY section heads |
| Nav | Helvetica Now | 20px | 700 (500 unselected) | normal | normal | Header tabs |
| Card Title | Helvetica Now | 18px | 700 | 28.98px (1.61) | -0.25px | LATEST titles |
| Portal Card Title | Pretendard | 18px | 500 | 24px (1.33) | normal | NC NEWS titles |
| Portal Button | Pretendard | 17px | 700 | 23px (1.35) | normal | 바로가기 |
| Footer | Helvetica Now | 16px | 500 | normal | normal | Footer |
| Portal Meta | Pretendard | 15px | 400 | 20px (1.33) | normal | NC NEWS meta |
| Caption | Helvetica Now | 12px | 400 | normal | normal | Article meta |
| Legal | Helvetica Now | 10px | 400 | 17px (1.7) | normal | Copyright |

### Principles
- **One family per surface**: Helvetica Now on NC PLAY, Pretendard on www.nc.com.
- **Display Black only at display sizes**: 74px and 125px, never for text.
- **Bold carries the headings**: 700 on every headline and section head; actions and titles on www.nc.com at 700 and 500.
- **Tight tracking on editorial headlines**: -0.25px on the featured headlines and article titles.

## 4. Component Stylings

### Navigation

**NC PLAY header tab**
- Background: transparent
- Text: `#a9a9a9` at 500 (unselected)
- Selected: `#ffffff` at 700 on /play; `#1e1e1e` at 700 on /news
- Padding: 0 0 5px
- Height: 34px
- Font: 20px Helvetica Now
- States: the unselected tab's `#acacac` hover frame is treated as a transition frame; no hover is declared

**Carousel arrows**
- Size: 32 × 32; icons are background images
- Disabled: the previous arrow at the first slide

### Buttons

**Contained action (www.nc.com)**
- Background: `#ffffff`
- Text: `#252628`
- Radius: 8px
- Padding: 16px 24px
- Height: 55px
- Font: 17px / 700 / 23px Pretendard
- Use: 바로가기 on the hero

**VIEW MORE (NC PLAY)**
- Background: transparent
- Text: `#333333`
- Height: 33px
- Font: 16px / 700 Helvetica Now; label at 24px / 700

**Footer heading (NC PLAY)**
- Text: `#ebebeb` on /play, `#1e1e1e` on /news
- Border: 1px solid bottom rule in the same colour
- Padding: 0 0 24px
- Height: 49px
- Font: 16px / 500 Helvetica Now
- Use: FAMILY SITE, GLOBAL

### Cards

**Game tile (www.nc.com)**
- Radius: 16px
- Size: 266 × 266, four per row
- Name: white 16.38px / 400 Pretendard over the key art

**NC NEWS item (www.nc.com)**
- Radius: 0px
- Size: 365 × 297
- Category `#888890`, date `#62626a`, both 15px / 400; title 18px / 500 / 24px `#000000`

**LATEST article (NC PLAY)**
- Radius: 0px
- Size: 432 × 334, three per row
- Date and category 12px / 400 `#333333`; title 18px / 700 / 28.98px `#333333` at -0.25px

### Category links (described, not tokenised)
- 125px / 400 / 145px Helvetica Now Display Black. The collector records a fill equal to the stage — `#000000` on /play, `#ffffff` on /news — and a same-day probe shows the visible letters are a 1px text stroke in the opposite colour, which the collector does not record.

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context)
**Tier 1 sources:** https://about.ncsoft.com/play ; https://www.nc.com/ ; https://about.ncsoft.com/news ; https://about.ncsoft.com/en/news/article/nc-ci-renewal-project-en
**Tier 2 sources:** getdesign.md/ncsoft (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=ncsoft (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Header tabs sit on a 5px bottom padding; article meta sits 10px above its title; footer headings keep 24px beneath their rule; the www.nc.com action is padded 16px 24px.
- NC PLAY section heads carry their own bottom padding: 36px (PLAY HIGHLIGHTS) and 60px (CATEGORIES) on /play, 32px (FEATURED) and 24px (LATEST) on /news.

### Grid & Container
- NC PLAY: a 1344px content width; LATEST in three 432px columns; category links flowing as oversized words.
- www.nc.com: game tiles four to a row at 266px, NC NEWS as a row of 365px items.

### Whitespace Philosophy
- NC PLAY gives each section a large head and room below it; www.nc.com packs its catalogue into shelves.

### Border Radius Scale
- 0px: articles, news items, tabs, buttons on NC PLAY
- 8px: the www.nc.com contained action
- 16px: www.nc.com game tiles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element |

**Shadow Philosophy:** No captured element has a box-shadow. Separation comes from theme (black /play, white /news), from key art, and from 1px rules under the footer headings.

## 7. Do's and Don'ts

### Do
- Keep the chrome monochrome and let game art carry the colour
- Use one white contained action with a `#252628` label on dark heroes
- Use Helvetica Now for editorial pages and Pretendard for the catalogue
- Show the selected tab with weight 700 and full contrast; leave the other at 500 `#a9a9a9`
- Keep 16px corners for game tiles and square corners for editorial blocks

### Don't
- Don't introduce purple or blue as an action colour; neither renders on the captured pages
- Don't use Display Black for text; it is a display cut
- Don't add shadows
- Don't mix Helvetica Now and Pretendard on one surface

## 8. Responsive Behavior

### Breakpoints
- Captured at 1440 × 900 only; no breakpoint behaviour was measured.

### Touch Targets
- The www.nc.com action is 55px tall; NC PLAY tabs are 34px and carousel arrows 32 × 32.

### Collapsing Strategy
- Not measured.

### Image Behavior
- Game tiles show key art under a white name; NC PLAY carousels set Display Black titles over images.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#ffffff` fill, `#252628` label
- Dark theme text: `#ffffff`; inactive tab `#a9a9a9`; footer `#ebebeb`; muted `#888888`
- Light theme text: `#000000`, `#1e1e1e`, `#333333`
- Catalogue meta: `#888890` category, `#62626a` date

### Example Component Prompts
- "Create a dark editorial header: PLAY and NEWS tabs in 20px Helvetica Now, the selected one white at 700, the other `#a9a9a9` at 500, 5px bottom padding."
- "Design a game shelf: a 28px / 700 Pretendard heading in black, then 266 × 266 tiles with 16px corners and the game name in white 16.38px Pretendard over the key art."
- "Build a hero action: `#ffffff` background, `#252628` 17px / 700 Pretendard label, 8px radius, 16px 24px padding, 55px tall."
- "Make an article list: three 432px columns, square corners, date line 12px Helvetica Now `#333333`, title 18px / 700 `#333333` at -0.25px."

### Iteration Guide
1. Monochrome chrome; colour comes from the art
2. Helvetica Now for NC PLAY, Pretendard for www.nc.com
3. Display Black only at 74px and above
4. One white contained action per hero
5. No shadows; square editorial blocks, 16px game tiles

---

## 10. Voice & Tone

NC speaks as a game maker proud of its craft: warm about joy and connection at the corporate level, curatorial in its brand media, plain in its catalogue.

| Context | Tone |
|---|---|
| Corporate | Warm and broad. "NC - 즐거움으로 연결된 새로운 세상." |
| Catalogue | Short and functional. "바로가기", "지금 플레이", "자세히 보기". |
| Brand media | Curatorial, in English section names. The Game Art, Behind The Story, PLAY HIGHLIGHTS, VIEW MORE. |
| Brand story | Reflective. "Renewal is not creating something new, but realigning existing values and sharing a common brand mission in order to take the brand to the next level." |
| News | Korean press register. "엔씨, 추석 맞이 게임 이벤트 진행". |

**Voice samples (verbatim, opened 2026-09-30):**
- "리니지, 아이온, 블레이드&소울, 쓰론 앤 리버티 등 MMORPG에서 캐쥬얼, 슈팅, 액션 게임까지 다양한 즐거움으로 세상을 연결합니다." — www.nc.com description.
- "엔씨 공식 브랜드 미디어" — NC PLAY description.
- "[Next & Creative] 소통은 계속된다 : 오늘도 만나러 갑니다" — NC PLAY article title.

**Forbidden register**: pressure selling, hollow superlatives, anything that treats players as targets rather than an audience.

## 11. Brand Narrative

NC's 2020 CI renewal set out to "expand the potential of NC as a brand and convey the 'value of innovation'", in the words of CSO Songyee Yoon quoted in the article. The article explains that IPs with different roots — Lineage, Aion, Blade & Soul — sit under one brand because they share the same core values, and that the renewal was meant to strengthen global competitiveness for a growing global business; NC worked with Pentagram on the result: 45-degree cuts, bold connected letters, NC BLUE and its cyan-filled tint, a graphic motif and tapered pictograms, all published as a guide employees can download. Employees also entered a contest to design with the new CI, using the logo as a window onto a game's world.

Six years on, the brand runs on two surfaces. www.nc.com, where the old ncsoft.com address now lands, is a catalogue: MMORPG, action and strategy, casual and classic shelves, upcoming titles and PC games sold through PURPLE. NC PLAY is the storytelling side, organised as PLAY (EDGE, INTERACTIVE, CREATIVE, FILM) and NEWS (INSIDE NC, ESG, FEATURED, BRANDS, R&D, PRESS RELEASE), with a family list that reaches NC DINOS, the NC Cultural Foundation, PLAYNC, NC Career, NC Research and the NC recruiting blog.

What the captured design refuses: colour on the chrome — no purple, no blue, no shadows. What it embraces: black and white editorial pages in Helvetica Now, oversized Display Black words, and a white action that lets the game art be the colour.

## 12. Principles

1. **Connected through joy.** *UI implication:* lead with the games and the people who play them; keep the chrome out of the way.
2. **Craft is worth publishing.** *UI implication:* editorial pages get real typographic scale — 74px and 125px display words, generous section heads.
3. **Monochrome chrome, colourful art.** *UI implication:* white, black and greys for UI; colour comes from key art.
4. **One action per moment.** *UI implication:* a single white contained action on a hero.
5. **A window, not a wall.** From the CI's "flexible window". *UI implication:* frames and tiles that show the game through them rather than decorating around it.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable NC audiences (MMORPG players, players browsing the catalogue, readers of NC PLAY), not individual people.*

**박준호, 33, 서울.** A long-time Lineage player who opens www.nc.com to jump to his game on PURPLE and check the season's sale.

**Mina Cho, 28, Vancouver.** A player who found Throne and Liberty and follows NC's new launches through the NC NEWS shelf.

**이서연, 35, 판교.** A designer who reads NC PLAY for The Game Art and Behind The Story pieces and the 2020 CI story.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (NC PLAY tab)** | 700 in `#ffffff` on /play or `#1e1e1e` on /news; the other tab 500 `#a9a9a9`. |
| **Selected (language menu)** | 한국어 at 500 in the footer colour; other languages 400 in grey. |
| **Disabled (carousel arrow)** | The previous arrow at the first slide. |
| **Transition frame (not declared)** | The unselected NEWS tab's hover and pressed frames at `#acacac`. |

Focus rings, error, empty, loading and success treatments were not captured and are not described.

## 15. Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The unselected tab's frames caught a value just off its rest colour (`#acacac` against `#a9a9a9`), which suggests a colour transition without timing it; the carousels are Swiper sliders. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/ncsoft.json (capturedAt 2026-09-30), deterministic collector, 1440x900, logged out: about.ncsoft.com (lands on /play), www.nc.com (www.ncsoft.com redirects here), about.ncsoft.com/news.
- §1, §2, §11 context: about.ncsoft.com/en/news/article/nc-ci-renewal-project-en (2020-12-23), the www.nc.com title and description, NC PLAY's navigation, family list and footer. All opened headless 2026-09-30.
- PURPLE (purple.plaync.com) and the individual game sites are separate domains and were not captured.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
