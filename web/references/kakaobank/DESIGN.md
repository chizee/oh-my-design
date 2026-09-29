---
id: kakaobank
name: KakaoBank
country: KR
category: fintech
homepage: "https://www.kakaobank.com"
primary_color: "#ffe300"
logo:
  type: simpleicons
  slug: kakaotalk
verified: "2026-07-12"
omd: "0.1"
ds:
  name: KakaoBank Brand Resource
  url: "https://www.kakaobank.com/view/about/brand/resource"
  type: brand
  description: "Official KakaoBank identity resource with symbol, wordmark, and brand-color guidance; it does not substitute for native banking-product UI evidence."
verification_v2:
  schema: 2
  checked: "2026-09-29"
  surfaces:
    - { id: home, kind: corporate-product, url: "https://www.kakaobank.com/", inspected: "2026-07-12" }
    - { id: service, kind: public-service, url: "https://www.kakaobank.com/view/service", inspected: "2026-07-12" }
    - { id: brand, kind: official-brand, url: "https://www.kakaobank.com/view/about/brand/resource", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.kakaobank.com/", captured: "2026-07-12" }
    - { id: service-live, kind: product-surface, url: "https://www.kakaobank.com/view/service", captured: "2026-07-12" }
    - { id: brand-live, kind: brand-asset, url: "https://www.kakaobank.com/view/about/brand/resource", captured: "2026-07-12" }
    - { id: brand-pdf, kind: official-doc, url: "https://www.kakaobank.com/static/etc/logo/KakaoBank_BrandIdentityGuidelines_V2.0.pdf", captured: "2026-07-12" }
    - { id: kakaobank-probe-home, kind: product-surface, url: "https://www.kakaobank.com/", captured: "2026-09-29" }
    - { id: kakaobank-probe-service, kind: product-surface, url: "https://www.kakaobank.com/view/service", captured: "2026-09-29" }
    - { id: kakaobank-probe-brand, kind: product-surface, url: "https://www.kakaobank.com/view/about/brand/resource", captured: "2026-09-29" }
  conflicts: []
  claims:
    "tokens.colors.primary": &brand_evidence { surface_id: brand, source_id: brand-live, method: official-brand-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.foreground": *home_evidence
    "tokens.colors.secondary": *home_evidence
    "tokens.colors.body": &service_evidence { surface_id: service, source_id: service-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.surface": *home_evidence
    "tokens.colors.divider": *brand_evidence
    "tokens.typography.family.ui": *home_evidence
    "tokens.typography.hero.size": *home_evidence
    "tokens.typography.hero.weight": *home_evidence
    "tokens.typography.hero.lineHeight": *home_evidence
    "tokens.typography.hero.tracking": *home_evidence
    "tokens.typography.hero.use": *home_evidence
    "tokens.typography.display.size": *service_evidence
    "tokens.typography.display.weight": *service_evidence
    "tokens.typography.display.lineHeight": *service_evidence
    "tokens.typography.display.tracking": *service_evidence
    "tokens.typography.display.use": *service_evidence
    "tokens.typography.section.size": *service_evidence
    "tokens.typography.section.weight": *service_evidence
    "tokens.typography.section.lineHeight": *service_evidence
    "tokens.typography.section.tracking": *service_evidence
    "tokens.typography.section.use": *service_evidence
    "tokens.typography.card-title.size": *service_evidence
    "tokens.typography.card-title.weight": *service_evidence
    "tokens.typography.card-title.lineHeight": *service_evidence
    "tokens.typography.card-title.tracking": *service_evidence
    "tokens.typography.card-title.use": *service_evidence
    "tokens.typography.body.size": *home_evidence
    "tokens.typography.body.weight": *home_evidence
    "tokens.typography.body.lineHeight": *home_evidence
    "tokens.typography.body.use": *home_evidence
    "tokens.typography.navigation.size": *home_evidence
    "tokens.typography.navigation.weight": *home_evidence
    "tokens.typography.navigation.lineHeight": *home_evidence
    "tokens.typography.navigation.tracking": *home_evidence
    "tokens.typography.navigation.use": *home_evidence
    "tokens.spacing.xs": *home_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.spacing.lg": *service_evidence
    "tokens.spacing.xl": *brand_evidence
    "tokens.rounded.action": *home_evidence
    "tokens.rounded.section": *home_evidence
    "tokens.rounded.full": *home_evidence
    "tokens.components.top-navigation.pressed": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.gnb-nav-depth1 서비스 at :active", captured: "2026-09-29" }
    "tokens.components.top-navigation.focus": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.gnb-nav-depth1 서비스 at :focus-visible, Tab stop 13", captured: "2026-09-29" }
    "tokens.components.top-navigation.type": *home_evidence
    "tokens.components.top-navigation.bg": *home_evidence
    "tokens.components.top-navigation.fg": *home_evidence
    "tokens.components.top-navigation.radius": *home_evidence
    "tokens.components.top-navigation.padding": *home_evidence
    "tokens.components.top-navigation.height": *home_evidence
    "tokens.components.top-navigation.font": *home_evidence
    "tokens.components.top-navigation.hover": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.gnb-nav-depth1 서비스 at :hover", captured: "2026-09-29" }
    "tokens.components.top-navigation.active": &kb_home_css { surface_id: home, source_id: home-live, method: live-css-inspect, captured: "2026-09-16" }
    "tokens.components.top-navigation.states": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.gnb-nav-depth1 서비스", captured: "2026-09-29" }
    "tokens.components.top-navigation.use": *home_evidence
    "tokens.components.service-tab.type": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "button.accordion-btn 저축 (aria-expanded, no role=tab)", captured: "2026-09-29" }
    "tokens.components.service-tab.bg": *service_evidence
    "tokens.components.service-tab.fg": *service_evidence
    "tokens.components.service-tab.border": *service_evidence
    "tokens.components.service-tab.radius": *service_evidence
    "tokens.components.service-tab.padding": *service_evidence
    "tokens.components.service-tab.height": *service_evidence
    "tokens.components.service-tab.font": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "button.accordion-btn 저축, label h5.accordion-title", captured: "2026-09-29" }
    "tokens.components.service-tab.hover": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "button.accordion-btn 저축 at :hover", captured: "2026-09-29" }
    "tokens.components.service-tab.pressed": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "button.accordion-btn 저축 at :active", captured: "2026-09-29" }
    "tokens.components.service-tab.focus": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "button.accordion-btn 저축 at :focus-visible, Tab stop 54", captured: "2026-09-29" }
    "tokens.components.service-tab.states": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "button.accordion-btn 저축", captured: "2026-09-29" }
    "tokens.components.service-tab.use": *service_evidence
    "tokens.components.black-action.type": *home_evidence
    "tokens.components.black-action.bg": *home_evidence
    "tokens.components.black-action.fg": *home_evidence
    "tokens.components.black-action.radius": *home_evidence
    "tokens.components.black-action.padding": *home_evidence
    "tokens.components.black-action.height": *home_evidence
    "tokens.components.black-action.font": *home_evidence
    "tokens.components.black-action.hover": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.btn.btn-black 더 알아보기 at :hover", captured: "2026-09-29" }
    "tokens.components.black-action.pressed": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.btn.btn-black 더 알아보기 at :active", captured: "2026-09-29" }
    "tokens.components.black-action.focus": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.btn.btn-black at :focus-visible, Tab stop 33", captured: "2026-09-29" }
    "tokens.components.black-action.states": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.btn.btn-black 더 알아보기", captured: "2026-09-29" }
    "tokens.components.black-action.use": *home_evidence
    "tokens.components.resource-download.type": *brand_evidence
    "tokens.components.resource-download.bg": *brand_evidence
    "tokens.components.resource-download.fg": *brand_evidence
    "tokens.components.resource-download.radius": *brand_evidence
    "tokens.components.resource-download.padding": *brand_evidence
    "tokens.components.resource-download.height": *brand_evidence
    "tokens.components.resource-download.font": { surface_id: brand, source_id: kakaobank-probe-brand, method: live-state-probe, selector: "a.btn-black.fc-white 브랜드 가이드 다운로드, label span", captured: "2026-09-29" }
    "tokens.components.resource-download.hover": { surface_id: brand, source_id: kakaobank-probe-brand, method: live-state-probe, selector: "a.btn-black.fc-white 브랜드 가이드 다운로드 at :hover", captured: "2026-09-29" }
    "tokens.components.resource-download.pressed": { surface_id: brand, source_id: kakaobank-probe-brand, method: live-state-probe, selector: "a.btn-black.fc-white 브랜드 가이드 다운로드 at :active", captured: "2026-09-29" }
    "tokens.components.resource-download.focus": { surface_id: brand, source_id: kakaobank-probe-brand, method: live-state-probe, selector: "a.btn-black.fc-white at :focus-visible, Tab stop 33", captured: "2026-09-29" }
    "tokens.components.resource-download.states": { surface_id: brand, source_id: kakaobank-probe-brand, method: live-state-probe, selector: "a.btn-black.fc-white 브랜드 가이드 다운로드", captured: "2026-09-29" }
    "tokens.components.resource-download.use": *brand_evidence
    "tokens.components.brand-spec-row.type": *brand_evidence
    "tokens.components.brand-spec-row.bg": *brand_evidence
    "tokens.components.brand-spec-row.fg": *brand_evidence
    "tokens.components.brand-spec-row.border": *brand_evidence
    "tokens.components.brand-spec-row.radius": *brand_evidence
    "tokens.components.brand-spec-row.padding": *brand_evidence
    "tokens.components.brand-spec-row.font": *brand_evidence
    "tokens.components.brand-spec-row.use": *brand_evidence
    "tokens.components.link-row.type": &kbRow { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.link-row.bg": *kbRow
    "tokens.components.link-row.fg": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.flex-cont.between 금융기술연구소, label h6", captured: "2026-09-29" }
    "tokens.components.link-row.radius": *kbRow
    "tokens.components.link-row.padding": *kbRow
    "tokens.components.link-row.height": *kbRow
    "tokens.components.link-row.font": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.flex-cont.between 금융기술연구소, label h6", captured: "2026-09-29" }
    "tokens.components.link-row.hover": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.flex-cont.between 금융기술연구소 at :hover", captured: "2026-09-29" }
    "tokens.components.link-row.pressed": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.flex-cont.between 금융기술연구소 at :active", captured: "2026-09-29" }
    "tokens.components.link-row.focus": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.flex-cont.between at :focus-visible, Tab stop 41", captured: "2026-09-29" }
    "tokens.components.link-row.states": { surface_id: home, source_id: kakaobank-probe-home, method: live-state-probe, selector: "a.flex-cont.between 금융기술연구소", captured: "2026-09-29" }
    "tokens.components.link-row.use": *kbRow
    "tokens.components.service-pill-tab.type": &kbPill { surface_id: service, source_id: service-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-12" }
    "tokens.components.service-pill-tab.bg": *kbPill
    "tokens.components.service-pill-tab.fg": *kbPill
    "tokens.components.service-pill-tab.radius": *kbPill
    "tokens.components.service-pill-tab.padding": *kbPill
    "tokens.components.service-pill-tab.height": *kbPill
    "tokens.components.service-pill-tab.font": *kbPill
    "tokens.components.service-pill-tab.hover": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "a[href=\"#section3\"] 청소년 at :hover", captured: "2026-09-29" }
    "tokens.components.service-pill-tab.pressed": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "a[href=\"#section3\"] 청소년 at :active", captured: "2026-09-29" }
    "tokens.components.service-pill-tab.focus": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "a[href=\"#section3\"] at :focus-visible, Tab stop 30", captured: "2026-09-29" }
    "tokens.components.service-pill-tab.states": { surface_id: service, source_id: kakaobank-probe-service, method: live-state-probe, selector: "a[href=\"#section3\"] 청소년", captured: "2026-09-29" }
    "tokens.components.service-pill-tab.use": *kbPill
    "tokens.components.brand-section-tab.type": &kbBrandTab { surface_id: brand, source_id: brand-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"25\"]", captured: "2026-07-12" }
    "tokens.components.brand-section-tab.bg": *kbBrandTab
    "tokens.components.brand-section-tab.fg": *kbBrandTab
    "tokens.components.brand-section-tab.radius": *kbBrandTab
    "tokens.components.brand-section-tab.padding": *kbBrandTab
    "tokens.components.brand-section-tab.height": *kbBrandTab
    "tokens.components.brand-section-tab.font": *kbBrandTab
    "tokens.components.brand-section-tab.selected": { surface_id: brand, source_id: brand-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"24\"] (class on)", captured: "2026-07-12" }
    "tokens.components.brand-section-tab.states": *kbBrandTab
    "tokens.components.brand-section-tab.use": *kbBrandTab
    "tokens.components.footer-link.type": &kbFooter { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"39\"]", captured: "2026-07-12" }
    "tokens.components.footer-link.bg": *kbFooter
    "tokens.components.footer-link.fg": *kbFooter
    "tokens.components.footer-link.height": *kbFooter
    "tokens.components.footer-link.font": *kbFooter
    "tokens.components.footer-link.states": *kbFooter
    "tokens.components.footer-link.use": *kbFooter
    "tokens.components.top-scroll-button.type": &kbTop { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-12" }
    "tokens.components.top-scroll-button.bg": *kbTop
    "tokens.components.top-scroll-button.radius": *kbTop
    "tokens.components.top-scroll-button.size": *kbTop
    "tokens.components.top-scroll-button.states": *kbTop
    "tokens.components.top-scroll-button.use": *kbTop
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Fresh corporate home, service, and official brand-resource capture. Brand identity and public web measurements are promoted; native banking-product controls are not inferred."
  colors:
    primary: "#ffe300"
    canvas: "#ffffff"
    foreground: "#000000"
    secondary: "#888888"
    body: "#444444"
    surface: "#f7f7f7"
    divider: "#e6e6e6"
  typography:
    family: { ui: "Pretendard Variable" }
    hero: { size: 90, weight: 800, lineHeight: 1.3, tracking: -0.9, use: "Current corporate home hero" }
    display: { size: 42, weight: 700, lineHeight: 1.24, tracking: -0.84, use: "Current service page title" }
    section: { size: 32, weight: 700, lineHeight: 1.36, tracking: -0.64, use: "Current public service section heading" }
    card-title: { size: 24, weight: 700, lineHeight: 1.44, tracking: -0.48, use: "Current public service and brand-resource card heading" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Current public body and list text" }
    navigation: { size: 14, weight: 600, lineHeight: 1.5, tracking: -0.14, use: "Current top navigation" }
  spacing: { xs: 8, sm: 12, md: 16, lg: 24, xl: 40 }
  rounded: { action: 6, section: 16, full: 9999 }
  components_harvested: true
  components:
    top-navigation: { type: button, bg: "transparent", fg: "#000000", radius: "0px", padding: "0 20px", height: "62px", font: "14px / 600", hover: "fg #444444", active: "fg #444444", pressed: "fg #444444 (same as hover)", focus: "outline 2px solid #007bff, offset 2px (authored ring; fg and bg unchanged)", states: "hover, pressed and keyboard focus measured 2026-09-29 (real :hover, :active, and Tab to :focus-visible); the colour settles after a 0.4s ease-in-out transition, and the near-black values captured 2026-07-12 were early frames of it", use: "Current corporate top navigation item" }
    service-tab: { type: button, bg: "transparent", fg: "#000000", border: "0 0 1px #e6e6e6", radius: "0px", padding: "16px 0", height: "62px", font: "20px / 700 (label h5; the button's own font is 16px / 400)", hover: "no change among the compared properties (measured 2026-09-29)", pressed: "no change among the compared properties (measured 2026-09-29)", focus: "outline 2px solid #007bff, offset 2px (authored ring)", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29; an accordion trigger (aria-expanded, no role=tab) whose expanded state was not opened", use: "Current public service-category accordion trigger (저축 …)" }
    black-action: { type: button, bg: "#000000", fg: "#ffffff", radius: "6px", padding: "9.5px 18px", height: "42px", font: "15px / 600", hover: "bg #444444", pressed: "bg #444444 (same as hover)", focus: "outline 2px solid #007bff, offset 2px (authored ring)", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29; the fill settles after a 0.35s ease transition", use: "Current corporate high-emphasis action" }
    resource-download: { type: button, bg: "#000000", fg: "#ffffff", radius: "6px", padding: "10px 16px 10px 20px", height: "43px", font: "15px / 600 (label span; the anchor's own font is 16px / 400)", hover: "bg #444444", pressed: "bg #444444 (same as hover)", focus: "outline 2px solid #007bff, offset 2px (authored ring)", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29", use: "Current official brand-resource download action" }
    brand-spec-row: { type: listItem, bg: "transparent", fg: "#000000", border: "1px 0 0 #e6e6e6", radius: "0px", padding: "10px 0", font: "16px / 400 / 24px", use: "Current official brand specification row" }
    link-row: { type: card, bg: "#f7f7f7", fg: "#000000", radius: "16px", padding: "22px 24px", height: "72px", font: "16px / 600 (label h6; the anchor's own font is 16px / 400)", hover: "fg #444444 (label); bg stays #f7f7f7", pressed: "fg #444444 (same as hover)", focus: "outline 2px solid #007bff, offset 2px (authored ring)", states: "default captured 2026-07-12 (six rows, 672px wide); hover, pressed and keyboard focus measured 2026-09-29 on 금융기술연구소; the change is instant (transition 0s)", use: "Home related-service link row (금융기술연구소 …), opens in a new window" }
    service-pill-tab: { type: tab, bg: "transparent", fg: "#222222", radius: "50px", padding: "10px 22px", height: "38px", font: "16px / 600 / -0.16px tracking", hover: "no change among the compared properties (measured 2026-09-29)", pressed: "no change among the compared properties (measured 2026-09-29)", focus: "outline 2px solid #007bff, offset 2px (authored ring)", states: "default captured 2026-07-12 (four unselected pills); the selected pill reads fg #ffffff on a transparent own background, its fill painted by another element that was not identified; hover, pressed and keyboard focus measured 2026-09-29 on 청소년", use: "Sticky in-page category pill on the service page (청소년 …)" }
    brand-section-tab: { type: tab, bg: "transparent", fg: "#000000", radius: "30px", padding: "8px 17px", height: "40px", font: "16px / 600 / -0.16px tracking", selected: "bg #000000 fg #ffffff", states: "default and selected captured 2026-07-12; the 2026-09-29 survey reads the same four pills; no pointer-state sample", use: "Brand-resource section pill (로고, 앱 아이콘, 색상, 미디어 패키지)" }
    footer-link: { type: tab, bg: "transparent", fg: "#888888", height: "16px", font: "14px / 500", states: "default captured 2026-07-12 (18 links on each captured page); no pointer-state sample", use: "Footer related-service and channel link (카카오뱅크 AD, 금융기술연구소, 기술블로그, 인스타그램 …)" }
    top-scroll-button: { type: button, bg: "#e6e6e6", radius: "50%", size: "52px x 52px", states: "default captured 2026-07-12 on all three captured pages; no pointer-state sample", use: "Floating back-to-top button (맨 위로 이동), icon only" }
---

# Design System Inspiration of KakaoBank (카카오뱅크)

## 1. Visual Theme & Atmosphere

KakaoBank is an internet bank that presents financial services as part of ordinary mobile life. Its public story spans deposits, savings, loans, investment, foreign exchange, cards, business banking, youth products, and newer AI-led service exploration. The corporate site expresses that breadth with unusually little banking ornament: a white canvas, black type, pale-gray sections, very large Korean headings, and only selective use of the protected KakaoBank Yellow. The result feels digitally accessible while retaining the clarity and restraint expected from a regulated financial institution.

That restraint is the distinctive system. The official brand resource defines KakaoBank Yellow as `#FFE300`, alongside black, white, and a narrow neutral palette, and warns against nearby substitute yellows. Yet the current public corporate surface is mostly monochrome. Yellow identifies KakaoBank; it is not proof that every banking CTA, card, success state, or app control uses yellow. The current product page organizes the catalog through large editorial sections and simple service tabs, while the brand-resource page explains the symbol, wordmark, and color system as protected identity assets.

Pretendard Variable carries all visible public UI and editorial roles. It loaded from KakaoBank's own domain and appeared across 645 elements, from the 90px home hero to 14px navigation and 16px body text. Brand character comes from scale, disciplined yellow, and product imagery rather than a proprietary display face.

**Key Characteristics:**
- Official single-yellow identity: `#FFE300`, not neighboring Kakao-family yellows
- White and pale-gray corporate canvas with black-first typography
- Pretendard Variable loaded across every observed text role
- 90px/800 home hero and 42px/700 service-page title
- Flat public components with 0px navigation/tab geometry and 6px black actions
- Explicit separation between public corporate evidence and native banking-product UI

## Primary tasks

- Compare everyday banking services across deposits, loans, and cards
- Browse the service catalog one category tab at a time
- Look into products for youth, business, or investment needs
- Find official company, ESG, or investor information about the bank

## 2. Color Palette & Roles

- **KakaoBank Yellow** (`#ffe300`): official primary identity color and protected brand specification.
- **Canvas** (`#ffffff`) and **foreground** (`#000000`): dominant current public pairing.
- **Secondary** (`#888888`): repeated supporting navigation and footer text.
- **Body gray** (`#444444`): service and brand-resource explanatory text.
- **Section surface** (`#f7f7f7`): current quiet public section fill.
- **Divider** (`#e6e6e6`): public service and brand-spec boundaries.

Earlier `#E02000`, `#0FBE6C`, `#FF9800`, input, placeholder, and native state roles are not retained. The live public site exposed `#007AFF` on small web controls, but its semantic product role was not clear enough to promote.

The keyboard focus ring is a different blue, `#007bff` (`rgb(0, 123, 255)`), drawn as a 2px solid outline on every control probed on 2026-09-29 (§14). It is recorded in each component's focus state, not as a palette role: it is neither KakaoBank Yellow nor part of the official brand resource.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | KakaoBank's current public home, service, and brand-resource pages establish Pretendard Variable. |
| Live surface-use | Pretendard Variable loaded/high across 645 visible elements from KakaoBank's first-party WOFF2. |
| Official distributed asset | The public webfont is first-party delivered; the KakaoBank wordmark remains a protected identity asset rather than a font. |
| Declared-only | `swiper-icons` was declared with zero visible text use. |
| Unresolved | Native iOS/Android banking flows and device-specific typography remain unresolved. |

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Corporate hero | 90px | 800 | 117px | -0.9px |
| Service display | 42px | 700 | 52.08px | -0.84px |
| Section heading | 32px | 700 | 43.52px | -0.64px |
| Card heading | 24px | 700 | 34.56px | -0.48px |
| Body/list | 16px | 400 | 24px | normal |
| Top navigation | 14px | 600 | 21px | -0.14px |

## 4. Component Stylings

### Current public components

Rest values come from the 2026-07-12 capture unless marked. Hover, pressed and keyboard focus come from a live probe on 2026-09-29 (real `:hover`, `:active`, and Tab to `:focus-visible`). Every control probed draws the same authored keyboard ring, `outline: 2px solid #007bff` with a 2px offset.

#### Top navigation
- Transparent / black, 0px radius, 62px height, `0 20px`
- Pretendard Variable 14px/600
- Hover and pressed: the text settles at `#444444` after a 0.4s `ease-in-out` colour transition; pressed equals hover
- Focus: outline 2px solid `#007bff`, offset 2px; text and background unchanged
- The July capture's near-black hover, pressed and focus samples were early frames of that transition, not states (§14)

#### Service-category accordion trigger
- Transparent / black, 1px `#e6e6e6` bottom rule
- 0px radius, 62px height, `16px 0`
- Label: a 20px/700 heading inside the button (measured 2026-09-29); the button's own computed font is 16px/400
- A `button` with `aria-expanded` and no `role=tab`: it opens a category panel. It was typed as a tab until 2026-09-29; the token name `service-tab` is kept
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: outline 2px solid `#007bff`, offset 2px
- The expanded state was not opened

#### Corporate black action
- Black / white, 6px radius, 42px height, `9.5px 18px`
- Pretendard Variable 15px/600
- Hover and pressed: the fill settles at `#444444` after a 0.35s transition; pressed equals hover
- Focus: outline 2px solid `#007bff`, offset 2px

#### Brand-resource download
- Black / white, 6px radius, 43px height, `10px 16px 10px 20px`
- Label: 15px/600 (the visible span, measured 2026-09-29); the anchor's own computed font is 16px/400
- Hover and pressed: the fill settles at `#444444`; pressed equals hover
- Focus: outline 2px solid `#007bff`, offset 2px

#### Brand specification row
- Transparent / black, 1px `#e6e6e6` top rule
- `10px 0`, 16px/400/24px
- Not interactive; not probed

### Link rows, pills and page furniture (captured 2026-07-12; states measured 2026-09-29 where noted)

#### Link row
- `#f7f7f7` fill, 16px radius, `22px 24px`, 72px tall; six rows, 672px wide, on the home page
- Label: `#000000`, a 16px/600 heading (measured 2026-09-29); the anchor's own computed font is 16px/400
- Hover and pressed: the label turns `#444444`; the fill stays `#f7f7f7`, with no lift or shadow
- Focus: outline 2px solid `#007bff`, offset 2px
- Use: 금융기술연구소 and the other related-service rows; opens in a new window

#### Service category pill
- Transparent, text `#222222`, 50px radius, `10px 22px`, 38px tall, 16px/600, -0.16px tracking
- The selected pill reads text `#ffffff` on a transparent background of its own; the black fill behind it is painted by another element that was not identified, so no selected fill is declared
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: outline 2px solid `#007bff`, offset 2px
- Use: sticky in-page pills on the service page (청소년 …)

#### Brand section pill
- Transparent, text `#000000`, 30px radius, `8px 17px`, 40px tall, 16px/600, -0.16px tracking
- Selected: fill `#000000`, text `#ffffff`
- No pointer-state sample
- Use: brand-resource section pills (로고, 앱 아이콘, 색상, 미디어 패키지); the 2026-09-29 survey reads the same four

#### Footer link
- Text `#888888`, 14px/500, 16px tall, no fill
- No pointer-state sample
- Use: footer related-service and channel links (카카오뱅크 AD, 금융기술연구소, 기술블로그, 인스타그램 …), 18 on each captured page

#### Back-to-top button
- `#e6e6e6` fill, 50% radius, 52px × 52px, icon only
- No pointer-state sample
- Use: the floating 맨 위로 이동 button on all three captured pages

Yellow native CTAs, account cards, transfer inputs, status badges, notifications, bottom sheets, and app tabs are intentionally absent until a current inspectable native-product path establishes them.

## 5. Layout Principles

- Use large type and generous vertical rhythm to explain complex financial categories.
- Keep public navigation and tabs geometrically flat; hierarchy comes from placement and weight.
- Use `#f7f7f7` for section-level grouping instead of elevated cards.
- Apply KakaoBank Yellow at verified identity moments, not as ambient chrome.
- Keep official brand-resource layouts separate from banking-task layouts.

## 6. Depth & Elevation

The promoted public system is shadow-free. Separation comes from white/pale-gray surfaces, `#e6e6e6` rules, and typographic scale. No sheet, card, or focus shadow is promoted for native banking UI. On the public site, keyboard focus is an outline, not a shadow (§14).

## 7. Do's and Don'ts

### Do
- Use exact `#FFE300` when the role is an official KakaoBank identity role.
- Preserve Pretendard Variable's observed Korean-first metrics and tracking.
- Keep the corporate web surface restrained and largely monochrome.
- Distinguish official identity, public service marketing, and native banking evidence.

### Don't
- Do not substitute `#FEE500`, `#FAE100`, or another Kakao-family yellow.
- Do not infer a Yellow CTA or transfer component from a brand swatch.
- Do not fabricate app error, success, account, badge, or sheet components.
- Do not turn the public corporate site into a Kakao Friends-heavy app mockup.

## 8. Responsive Behavior

The public routes preserve their typographic hierarchy and section grouping while content reflows. Exact mobile-app navigation, banking-task breakpoints, device safe areas, and native keyboard behavior remain unresolved.

## 9. Agent Prompt Guide

> Build a restrained Korean financial information surface with a white canvas, black-first type, pale `#f7f7f7` section fills, Pretendard Variable, very large bold headings, flat navigation, and 6px black public actions. Use `#FFE300` only for verified KakaoBank identity roles and omit unverified native banking components.

## 10. Voice & Tone

KakaoBank's public voice makes finance feel ordinary and useful. It favors direct Korean nouns and verbs, names the service category clearly, and explains benefits without institutional ceremony. Service descriptions should state who a product is for, what financial task it supports, and what the visitor can learn next. Corporate and brand material may be more declarative, while compliance or Help content must stay precise and unambiguous. Avoid playful copy where money movement, identity, or risk is involved. Do not invent rates, user counts, or performance claims.

## 11. Brand Narrative

KakaoBank positions banking as a digital product embedded in everyday routines. The official symbol explains a bank centered on the individual, while the service catalog shows continuous expansion from basic accounts into youth, business, investment, global, and AI-related offerings. The visual identity balances Kakao-family recognition with the restraint expected of a bank: one unmistakable yellow, then a large field of neutral structure. This system allows the company to speak both as a consumer product and as a financial institution. Large Korean headings make service categories approachable; monochrome navigation and pale-gray sections keep attention on information rather than decoration. The protected wordmark and exact yellow establish ownership, but they do not dictate the geometry of native transfers, account cards, or compliance flows. Those product layers require their own evidence.

## 12. Principles

1. **Put the individual at the center.** Organize information around the user's task, not the bank's internal structure.
2. **Use yellow with discipline.** Exact brand recognition is stronger than broad decorative use.
3. **Make finance readable.** Strong Korean typography and generous rhythm should reduce cognitive load.
4. **Do not confuse brand with product evidence.** A CI guide cannot authorize native transfer controls.

## 13. Personas

First-party material establishes task contexts only:
- An individual comparing everyday banking services.
- A young user or guardian exploring KakaoBank mini.
- A business owner reviewing business banking options.
- A visitor seeking official company, ESG, investor, or brand information.

Project-specific names, ages, balances, credit profiles, income, risk tolerance, and success metrics are intentionally unspecified and must come from the product brief.

## 14. States

A live probe on 2026-09-29 measured hover, pressed and keyboard focus on six controls across the home, service and brand-resource pages (real `:hover`, `:active`, and Tab to `:focus-visible`).

- Keyboard focus: all six draw the same authored ring, `outline: 2px solid #007bff`, offset 2px, and nothing else changes. `outline-style` is `solid`, not the browser's `auto`. The value matches a common framework default, but the site's stylesheet was not read, so the ring is recorded per component and not promoted to a token.
- Hover and pressed: the top navigation text and the link-row label settle at `#444444`; the two black buttons' fill settles at `#444444`. Pressed equals hover on all four.
- The accordion trigger and the service category pill: no change among the compared properties on hover or press (measured 2026-09-29).

Correction (2026-09-29): this section previously said the top navigation exposed focus, hover and pressed states, and the reference declared pressed `#141414` and focus `#131313` from the 2026-07-12 capture. The link has a `0.4s ease-in-out` colour transition from `#000000` to `#444444`. A frame sample during a live hover passes `#141414` at 363 ms, and both July values lie on the grey line between rest and the settled colour (the July hover sample read `#141414` as well). They were early transition frames, not states; the settled values are above.

One current service control exposed a disabled state in the July capture, but its semantic role was insufficient for promotion. Native loading, empty, transfer success, transfer failure, identity verification, and destructive states remain absent.

## 15. Motion & Easing

No reusable duration or easing curve is promoted. Public interaction capture establishes state presence, not native banking motion behavior. Per-control transitions read on 2026-09-29: the top navigation link `all 0.4s ease-in-out`, the two black buttons `all 0.35s ease`, the service category pills `all 0.5s ease`; the link rows and the accordion trigger change instantly (`0s`). These are individual observations, not a duration scale.

---

**Verified:** 2026-07-12 (omd:migrate) · states re-measured 2026-09-29 (live probe of the home, service and brand-resource pages)
**Tier 1 sources:** https://www.kakaobank.com/ ; https://www.kakaobank.com/view/service ; https://www.kakaobank.com/view/about/brand/resource ; https://www.kakaobank.com/static/etc/logo/KakaoBank_BrandIdentityGuidelines_V2.0.pdf
**Tier 2 attempts:** getdesign.md/kakaobank returned no design record; Refero had no reliable KakaoBank match
**Conflicts unresolved:** none
