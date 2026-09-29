---
id: zigzag
name: ZIGZAG
country: KR
category: ecommerce
homepage: "https://zigzag.kr/"
primary_color: "#121212"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=zigzag.kr&sz=256"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: ZIGZAG Design System (ZDS)
  url: "https://devblog.kakaostyle.com/ko/2024-12-13-1-rebuilding-frontend-design-system/"
  type: system
  description: Official Kakaostyle engineering account of the ZDS rebuild, CSS-variable token work, and product-card unification.
verification_v2:
  schema: 2
  checked: "2026-09-29"
  surfaces:
    - { id: home, kind: product-home, url: "https://zigzag.kr/", inspected: "2026-07-13" }
    - { id: product-a, kind: product-detail, url: "https://zigzag.kr/catalog/products/145661347", inspected: "2026-07-13" }
    - { id: product-b, kind: product-detail, url: "https://zigzag.kr/catalog/products/162934185", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://zigzag.kr/", captured: "2026-07-13" }
    - { id: product-a-live, kind: product-surface, url: "https://zigzag.kr/catalog/products/145661347", captured: "2026-07-13" }
    - { id: product-b-live, kind: product-surface, url: "https://zigzag.kr/catalog/products/162934185", captured: "2026-07-13" }
    - { id: zds-engineering, kind: official-doc, url: "https://devblog.kakaostyle.com/ko/2024-12-13-1-rebuilding-frontend-design-system/", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
    - { id: zigzag-probe, kind: product-surface, url: "https://zigzag.kr/", captured: "2026-09-29" }
  conflicts: []
  claims:
    "tokens.colors.strong": &product_a { surface_id: product-a, source_id: product-a-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.secondary": *product_a
    "tokens.colors.muted": *home
    "tokens.colors.hairline": *home
    "tokens.typography.heading.size": *product_a
    "tokens.typography.heading.weight": *product_a
    "tokens.typography.heading.lineHeight": *product_a
    "tokens.typography.heading.tracking": *product_a
    "tokens.typography.heading.use": *product_a
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.metadata.size": *product_a
    "tokens.typography.metadata.weight": *product_a
    "tokens.typography.metadata.lineHeight": *product_a
    "tokens.typography.metadata.tracking": *product_a
    "tokens.typography.metadata.use": *product_a
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *product_a
    "tokens.rounded.square": *home
    "tokens.rounded.icon": *home
    "tokens.rounded.control": *product_a
    "tokens.rounded.full": *product_a
    "tokens.shadow.flat": *home
    "tokens.components.product-thumbnail.type": *product_a
    "tokens.components.product-thumbnail.bg": *product_a
    "tokens.components.product-thumbnail.radius": *product_a
    "tokens.components.product-thumbnail.use": *product_a
    "tokens.components.product-card.type": *product_a
    "tokens.components.product-card.radius": *product_a
    "tokens.components.product-card.padding": *product_a
    "tokens.components.product-card.use": *product_a
    "tokens.components.product-card.hover": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "a.product-card-link (first of 16, second run) at :hover", captured: "2026-09-29" }
    "tokens.components.product-card.pressed": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "a.product-card-link (first of 16, second run) at :active", captured: "2026-09-29" }
    "tokens.components.product-card.focus": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "a.product-card-link at :focus-visible, Tab stop 13 (both runs)", captured: "2026-09-29" }
    "tokens.components.product-card.states": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "div.product-card-root > a.product-card-link (second run)", captured: "2026-09-29" }
    "tokens.components.detail-tab.type": *product_a
    "tokens.components.detail-tab.fg": *product_a
    "tokens.components.detail-tab.radius": *product_a
    "tokens.components.detail-tab.padding": *product_a
    "tokens.components.detail-tab.font": *product_a
    "tokens.components.detail-tab.active": *product_a
    "tokens.components.detail-tab.hover": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button[role=tab] 상품정보 (selected) and 성분 at :hover", captured: "2026-09-29" }
    "tokens.components.detail-tab.pressed": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button[role=tab] 상품정보 (selected) at :active", captured: "2026-09-29" }
    "tokens.components.detail-tab.focus": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button[role=tab] 상품정보 at :focus-visible, Tab stop 32", captured: "2026-09-29" }
    "tokens.components.detail-tab.states": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "detail tablist 상품정보 / 성분 / 리뷰, roving tabindex; survey raw/zigzag-survey-product-a.json", captured: "2026-09-29" }
    "tokens.components.detail-tab.use": *product_a
    "tokens.components.quick-menu-arrow.type": *home
    "tokens.components.quick-menu-arrow.bg": *home
    "tokens.components.quick-menu-arrow.fg": *home
    "tokens.components.quick-menu-arrow.border": *home
    "tokens.components.quick-menu-arrow.radius": *home
    "tokens.components.quick-menu-arrow.disabled": *home
    "tokens.components.quick-menu-arrow.hover": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "button.quick-menu-next-btn 다음 at :hover", captured: "2026-09-29" }
    "tokens.components.quick-menu-arrow.pressed": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "button.quick-menu-next-btn 다음 at :active", captured: "2026-09-29" }
    "tokens.components.quick-menu-arrow.focus": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "button.quick-menu-next-btn 다음 at :focus-visible, Tab stop 76", captured: "2026-09-29" }
    "tokens.components.quick-menu-arrow.states": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "button.quick-menu-next-btn 다음; button.quick-menu-prev-btn 이전 disabled", captured: "2026-09-29" }
    "tokens.components.quick-menu-arrow.use": *home
    "tokens.components.tabbar-link.type": &zgTabbar { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"79\"]", captured: "2026-07-13" }
    "tokens.components.tabbar-link.bg": *zgTabbar
    "tokens.components.tabbar-link.fg": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_1otfm6x2 카테고리, visible label p.zds4_s96ru86", captured: "2026-09-29" }
    "tokens.components.tabbar-link.radius": *zgTabbar
    "tokens.components.tabbar-link.size": *zgTabbar
    "tokens.components.tabbar-link.font": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_1otfm6x2 카테고리, visible label p.zds4_s96ru86", captured: "2026-09-29" }
    "tokens.components.tabbar-link.hover": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_1otfm6x2 카테고리 at :hover", captured: "2026-09-29" }
    "tokens.components.tabbar-link.pressed": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_1otfm6x2 카테고리 at :active", captured: "2026-09-29" }
    "tokens.components.tabbar-link.focus": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_1otfm6x2 카테고리 at :focus-visible, Tab stop 366", captured: "2026-09-29" }
    "tokens.components.tabbar-link.states": { surface_id: home, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_1otfm6x2 카테고리", captured: "2026-09-29" }
    "tokens.components.tabbar-link.use": *zgTabbar
    "tokens.components.header-icon-link.type": &zgIcon { surface_id: product-a, source_id: product-a-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"2\"] to [data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.header-icon-link.bg": *zgIcon
    "tokens.components.header-icon-link.fg": *zgIcon
    "tokens.components.header-icon-link.radius": *zgIcon
    "tokens.components.header-icon-link.padding": *zgIcon
    "tokens.components.header-icon-link.size": *zgIcon
    "tokens.components.header-icon-link.hover": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_966hwh0 검색 (second run) at :hover", captured: "2026-09-29" }
    "tokens.components.header-icon-link.pressed": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_966hwh0 검색 (second run) at :active", captured: "2026-09-29" }
    "tokens.components.header-icon-link.focus": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_966hwh0 검색 (second run) at :focus-visible, Tab stop 4", captured: "2026-09-29" }
    "tokens.components.header-icon-link.states": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "a.zds4_966hwh0 검색 (second run)", captured: "2026-09-29" }
    "tokens.components.header-icon-link.use": *zgIcon
    "tokens.components.carousel-next.type": &zgCarousel { surface_id: product-a, source_id: product-a-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"26\"]", captured: "2026-07-13" }
    "tokens.components.carousel-next.bg": *zgCarousel
    "tokens.components.carousel-next.fg": *zgCarousel
    "tokens.components.carousel-next.radius": *zgCarousel
    "tokens.components.carousel-next.padding": *zgCarousel
    "tokens.components.carousel-next.size": *zgCarousel
    "tokens.components.carousel-next.shadow": *zgCarousel
    "tokens.components.carousel-next.hover": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button.next.product-card-carousel-root-navigation-3-14 (second run) at :hover", captured: "2026-09-29" }
    "tokens.components.carousel-next.pressed": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button.next.product-card-carousel-root-navigation-3-14 (second run) at :active", captured: "2026-09-29" }
    "tokens.components.carousel-next.focus": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button.next.product-card-carousel-root-navigation-3-14 (second run) at :focus-visible, Tab stop 29", captured: "2026-09-29" }
    "tokens.components.carousel-next.states": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button.next.product-card-carousel-root-navigation-3-14 (second run)", captured: "2026-09-29" }
    "tokens.components.carousel-next.use": *zgCarousel
    "tokens.components.buy-cta.type": &zgBuy { surface_id: product-a, source_id: product-a-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"37\"]", captured: "2026-07-13" }
    "tokens.components.buy-cta.bg": *zgBuy
    "tokens.components.buy-cta.fg": *zgBuy
    "tokens.components.buy-cta.radius": *zgBuy
    "tokens.components.buy-cta.padding": *zgBuy
    "tokens.components.buy-cta.size": *zgBuy
    "tokens.components.buy-cta.font": *zgBuy
    "tokens.components.buy-cta.focus": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button.BODY_17.BOLD 구매하기 at :focus-visible, Tab stop 238 (first run)", captured: "2026-09-29" }
    "tokens.components.buy-cta.states": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button.BODY_17.BOLD 구매하기, never pressed", captured: "2026-09-29" }
    "tokens.components.buy-cta.use": *zgBuy
    "tokens.components.more-button.type": &zgMore { surface_id: product-a, source_id: product-a-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"33\"]", captured: "2026-07-13" }
    "tokens.components.more-button.bg": *zgMore
    "tokens.components.more-button.fg": *zgMore
    "tokens.components.more-button.radius": *zgMore
    "tokens.components.more-button.padding": *zgMore
    "tokens.components.more-button.size": *zgMore
    "tokens.components.more-button.font": *zgMore
    "tokens.components.more-button.focus": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button.BODY_15.SEMIBOLD 상품정보 더 보기 at :focus-visible, Tab stop 34 (first run)", captured: "2026-09-29" }
    "tokens.components.more-button.states": { surface_id: product-a, source_id: zigzag-probe, method: live-state-probe, selector: "button.BODY_15.SEMIBOLD 상품정보 더 보기, pointer-events none; parent div border", captured: "2026-09-29" }
    "tokens.components.more-button.use": *zgMore
    "tokens.components.app-banner-button.type": &zgBanner { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"0\"]", captured: "2026-07-13" }
    "tokens.components.app-banner-button.bg": *zgBanner
    "tokens.components.app-banner-button.fg": *zgBanner
    "tokens.components.app-banner-button.radius": *zgBanner
    "tokens.components.app-banner-button.padding": *zgBanner
    "tokens.components.app-banner-button.size": *zgBanner
    "tokens.components.app-banner-button.font": *zgBanner
    "tokens.components.app-banner-button.states": *zgBanner
    "tokens.components.app-banner-button.use": *zgBanner
    "tokens.components.floating-scroll-button.type": &zgScroll { surface_id: product-a, source_id: product-a-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"38\"]", captured: "2026-07-13" }
    "tokens.components.floating-scroll-button.bg": *zgScroll
    "tokens.components.floating-scroll-button.fg": *zgScroll
    "tokens.components.floating-scroll-button.radius": *zgScroll
    "tokens.components.floating-scroll-button.padding": *zgScroll
    "tokens.components.floating-scroll-button.size": *zgScroll
    "tokens.components.floating-scroll-button.shadow": *zgScroll
    "tokens.components.floating-scroll-button.states": *zgScroll
    "tokens.components.floating-scroll-button.use": *zgScroll
    "tokens.components.text-action.type": &zgText { surface_id: product-a, source_id: product-a-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.text-action.bg": *zgText
    "tokens.components.text-action.fg": *zgText
    "tokens.components.text-action.radius": *zgText
    "tokens.components.text-action.padding": *zgText
    "tokens.components.text-action.size": *zgText
    "tokens.components.text-action.font": *zgText
    "tokens.components.text-action.states": *zgText
    "tokens.components.text-action.use": *zgText
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Three current public product surfaces. Current computed Pretendard JP did not match a loaded FontFace, so no font family is promoted. The legacy pink palette and unobserved commerce states were removed."
  colors:
    strong: "#121212"
    canvas: "#ffffff"
    foreground: "#292b2b"
    secondary: "#606567"
    muted: "#878f91"
    hairline: "#ecedee"
  typography:
    heading: { size: 32, weight: 600, lineHeight: 1.4, tracking: 0, use: "Public product-detail section headings" }
    body: { size: 16, weight: 400, lineHeight: normal, use: "Current page and product-card text" }
    metadata: { size: 14, weight: 500, lineHeight: 1.21, tracking: 0, use: "Product-detail tab and supporting metadata" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16 }
  rounded: { square: 0, icon: 8, control: 24, full: 9999 }
  shadow: { flat: "none" }
  components_harvested: true
  components:
    product-thumbnail: { type: card, bg: "#ecedee", radius: "0px", use: "Public product-card thumbnail placeholder on both captured product-detail pages" }
    product-card: { type: card, radius: "0px", padding: "0px 0px 8px", hover: "no change in the compared scope (the card link a.product-card-link, its ::before/::after, 0 descendants, 3 ancestor levels; the thumbnail and texts are siblings of the link and were not compared) — measured 2026-09-29", pressed: "bg rgba(0, 0, 0, 0.03) on the card link", focus: "no focus indication in the compared scope (same scope as hover) — measured 2026-09-29", states: "root captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on the link inside the first product card on product-a (172px x 336.4px, Tab 13) in the second run; the first run's hover and pressed were voided when the page navigated away", use: "Public product-card root on both captured product-detail pages" }
    detail-tab: { type: tab, fg: "#121212", radius: "0px", padding: "0px 4px 17.5px", font: "14px / 600", active: "#121212", hover: "no change in the compared scope (self, its ::before/::after, 3 descendants, 3 ancestor levels) on the selected 상품정보 and the default 성분 — measured 2026-09-29", pressed: "no change in the compared scope (same scope) on the selected tab — measured 2026-09-29", focus: "no focus indication in the compared scope (same scope) on the selected tab (Tab 32) — measured 2026-09-29", states: "selected captured 2026-07-13; the default tab uses #878f91 at 14px / 500 with padding that varies by tab (0px 4px 17.5px on 성분, 0px 4px 10px on 리뷰 in the 2026-09-29 survey; July sampled 10px); 성분's pressed state is unmeasured (the page changed on mouse-down) and its focus is unmeasured (tabIndex -1 in a roving tablist)", use: "Product-detail tab list on both captured product-detail pages" }
    quick-menu-arrow: { type: button, bg: "transparent", fg: "#000000", border: "1px solid #ecedee", radius: "50%", disabled: "rgba(16,16,16,0.3)", hover: "no change in the compared scope (self, its ::before/::after, 2 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29", pressed: "bg rgba(0, 0, 0, 0.05)", focus: "no focus indication in the compared scope (same scope as hover) — measured 2026-09-29", states: "default captured 2026-07-13; the previous arrow is a natively disabled button (disabled attribute, pointer-events none) with rgba(16,16,16,0.3) text, confirmed 2026-09-29; hover, pressed and keyboard focus measured 2026-09-29 on the next arrow 다음 (Tab 76)", use: "Home quick-menu carousel arrow" }
    tabbar-link: { type: tab, bg: "transparent", fg: "#121212", radius: "0px", size: "150px x 59px", font: "11px / 500 (visible label; the link itself computes #292b2b 16px / 400)", hover: "overlay ::before rgba(0, 0, 0, 0.05), full size", pressed: "overlay ::before rgba(0, 0, 0, 0.05); bg rgba(0, 0, 0, 0.05); transform icon svg scale 0.95", focus: "no focus indication in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-13 on four links (the first and last round their outer top corner at 12px); hover, pressed and keyboard focus measured 2026-09-29 on 카테고리 (Tab 366)", use: "Fixed bottom tab bar link (홈, 카테고리, 찜, 마이페이지) at home::[data-omd-capture=\"78\"] to [data-omd-capture=\"81\"]" }
    header-icon-link: { type: button, bg: "transparent", fg: "#292b2b", radius: "8px", padding: "0px", size: "44px x 44px", hover: "bg rgba(0, 0, 0, 0.03)", pressed: "bg rgba(0, 0, 0, 0.03)", focus: "no focus indication in the compared scope (self, its ::before/::after, 3 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-13 (two on home, three on each product page); hover, pressed and keyboard focus measured 2026-09-29 on the product-page 검색 link (Tab 4, second run); hover equals pressed; the July hover, pressed and focus frames on these links (alpha 0.004 and 0.008) were transition frames and are not used", use: "Header icon link (검색 and its siblings; no text node) at surface-2::[data-omd-capture=\"2\"] to [data-omd-capture=\"4\"]" }
    carousel-next: { type: button, bg: "#ffffff", fg: "#000000", radius: "9999px", padding: "6px", size: "32px x 32px", shadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", hover: "no change in the compared scope (self, its ::before/::after, 2 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29", pressed: "no change in the compared scope (self, its ::before/::after, 2 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29", focus: "no focus indication in the compared scope (self, its ::before/::after, 2 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-13 on both product pages; hover, pressed and keyboard focus measured 2026-09-29 on product-a's product-card carousel next arrow (Tab 29, second run)", use: "White circular product-card carousel arrow at surface-2::[data-omd-capture=\"26\"]" }
    buy-cta: { type: button, bg: "#121314", fg: "#fafafb", radius: "24px", padding: "0px", size: "460px x 46px", font: "17px / 700", focus: "no focus indication in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-13 on both product pages; keyboard focus measured 2026-09-29 (Tab 238); hover and pressed deliberately unmeasured: the button was never pressed, because another zigzag control had just fired on mouse-down", use: "Fixed bottom 구매하기 purchase button at surface-2::[data-omd-capture=\"37\"]" }
    more-button: { type: button, bg: "transparent", fg: "#242729", radius: "24px", padding: "0px", size: "98px x 48px", font: "15px / 600", focus: "no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-13; keyboard focus measured 2026-09-29 (Tab 34); hover and pressed unmeasured: the button is pointer-events none, and its 1px #292b2b pill border is drawn by its parent div, not by the button", use: "상품정보 더 보기 pill at surface-2::[data-omd-capture=\"33\"]" }
    app-banner-button: { type: button, bg: "#f1ecea", fg: "#000000", radius: "0px", padding: "0px 17px", size: "600px x 54px", font: "16px / 400", states: "default captured 2026-07-13 on all three surfaces; not probed", use: "Top 앱으로 이동 app banner at home::[data-omd-capture=\"0\"]" }
    floating-scroll-button: { type: button, bg: "#ffffff", fg: "#000000", radius: "50%", padding: "0px", size: "40px x 40px", shadow: "0px 2px 6px rgba(0, 0, 0, 0.08)", states: "default captured 2026-07-13 (four occurrences on the two product pages); not probed", use: "White circular scroll button on the product page at surface-2::[data-omd-capture=\"38\"]" }
    text-action: { type: button, bg: "transparent", fg: "#606567", radius: "0px", padding: "0px", size: "63px x 20px", font: "13px / 500", states: "default captured 2026-07-13 on both product pages; not probed", use: "전체보기 text action at surface-2::[data-omd-capture=\"8\"]" }
---

# Design System Inspiration of ZIGZAG (지그재그)

## 1. Visual Theme & Atmosphere

ZIGZAG is KakaoStyle's style-commerce service: its public terms describe it as the mobile shopping service through which sellers and users transact, while the company's 2025 brand publication frames the service as a place for people to discover and complete their own tastes. The current public web evidence is deliberately product-led rather than a separate corporate-brand treatment: product photography and dense catalog information occupy the page, with a white `#ffffff` canvas, dark `#292b2b` reading text, muted metadata, and square-to-lightly-rounded geometry. The official ZDS engineering account explains why that consistency matters: Kakaostyle rebuilt the web design system around CSS-variable tokens and unified product-card work across surfaces. This reference preserves that engineering and commerce context, but promotes only the values observed on the three supplied current public product surfaces.

The inspected home and two product details share a restrained neutral system. `#121212` is the strongest observed detail-tab text, `#292b2b` is the repeated body/card foreground, `#878f91` supports inactive tabs and home list text, and `#ecedee` appears in thumbnail placeholders and thin control borders. The 2025 brand story is marketing context, not an authorization to turn campaign color or copy into a current product token.

**Key Characteristics:**

- Three current public product surfaces, not authenticated checkout or native-app screens
- White canvas with charcoal reading text and cool-gray metadata
- Product-card root, thumbnail, metadata, and tab substructures observed in current public markup
- 0px card geometry, 8px icon corners, 24px action corners, and full-pill carousel controls each tied to a specific observed role
- No published current pink token is promoted from the supplied product capture

## Primary tasks

- Browse product information on the mobile shopping service.
- Switch between the tabs on a product detail page.
- Page through the home quick menu with its arrows.

## 2. Color Palette & Roles

### Current public product values

- **Strong detail text** (`#121212`): selected product-detail tab text and dark carousel navigation fill.
- **Foreground** (`#292b2b`): repeated body, card, and page text across home and both product details.
- **Canvas** (`#ffffff`): body and white control surface in the captured public pages.
- **Secondary** (`#606567`): supporting product-detail text.
- **Muted** (`#878f91`): inactive product-detail tabs and home list text.
- **Hairline / placeholder** (`#ecedee`): public product-thumbnail placeholder and 1px carousel-arrow border.

### Deliberately unpromoted groups

The legacy `#fa6ee3` / `#f55dd6` pink system, sale/status colors, Kakao-login color, dark theme, and campaign colors did not occur in the supplied current product evidence, and the July capture held no hover/pressed values. The hover and pressed values measured on 2026-09-29 are faint dark veils recorded per component in §4, not palette roles. The official ZDS article establishes token architecture, not those absent values on these captured surfaces, so they are omitted instead of reconstructed.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | No first-party source inspected in this pass publishes a current universal ZIGZAG font-family claim. |
| Live computed surface-use | All three public product surfaces compute a stack beginning `"Pretendard JP", Pretendard, -apple-system, system-ui`; 912 visible uses were recorded. |
| Official distributed asset | Pretendard's own project documents the family and SIL Open Font License, but it is not a ZIGZAG-owned font asset. |
| Declared-only | `Pretendard`, `swiper-icons`, and `VideoJS` had declarations; only the latter two had data-URL declarations in the collector output. |
| Unresolved | The computed `Pretendard JP` family had no matching loaded FontFace or source URL in the supplied artifact. It is not promoted to `tokens.typography.family` and has no live specimen. |

The public hierarchy was measured as a stack, not a guaranteed loadable type family: product-detail headings reached 32px / 600 / 44.8px, common text was 16px / 400, and tabs/supporting metadata used 14px / 500 or selected 14px / 600. Letter spacing was `normal` throughout the sampled roles.

### Observed hierarchy

| Role | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Product-detail heading | 32px | 600 | 44.8px | Heading roles on both product-detail pages |
| Current body | 16px | 400 | normal | Page and product-card text |
| Detail metadata / tab | 14px | 500 | 17px | Inactive tab and supporting text |
| Selected detail tab | 14px | 600 | 17px | Selected product-detail tab |

## 4. Component Stylings

### Public product components

**Product Thumbnail Placeholder**
- Background: `#ecedee`
- Radius: 0px
- Use: `.product-card-thumbnail` placeholder on `surface-2` and `surface-3`; representative 172px-wide product cards.

**Product Card Root**
- Radius: 0px
- Padding: 0px 0px 8px
- Use: `.product-card-root.product-card` on both captured product-detail surfaces; the root itself is transparent.
- States (2026-09-29, on the link `a.product-card-link` inside the first card on product-a, 172×336.4px, second run): hover, no change within scope; pressed, background `rgba(0, 0, 0, 0.03)`; keyboard focus, no change within scope. The link has no descendants, so the thumbnail and texts beside it are outside the scope.

**Product-detail Tab**
- Text: `#121212`
- Radius: 0px
- Padding: 0px 4px 17.5px
- Font: 14px / 600 / computed Pretendard JP stack
- States: selected tab captured in `surface-2` and `surface-3`; the default tab is `#878f91`, 14px / 500, with the same control height. The default padding varies by tab: 0px 4px 17.5px on 성분 and 0px 4px 10px on 리뷰 (2026-09-29 survey; July's default sample read 10px).
- Hover, pressed and keyboard focus (2026-09-29, on the selected 상품정보): no change within scope (3 descendants). No focus indication. The default 성분 also shows no hover change; its pressed state is unmeasured because the page changed on mouse-down, and its focus is unmeasured because it is tabIndex -1 in a roving tablist.
- Use: product-detail tab list; selector provenance `surface-2::[data-omd-capture="28"]`.

**Home Quick-menu Arrow**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#ecedee`
- Radius: 50%
- Disabled: previous arrow captured with `rgba(16,16,16,0.3)` text; on 2026-09-29 it is a natively disabled button (disabled attribute, pointer-events none).
- Hover (2026-09-29, on the next arrow): no change within scope. Pressed: background `rgba(0, 0, 0, 0.05)`. Keyboard focus: no change within scope (2 descendants incl. 1 svg and 1 path).
- Use: home quick-menu carousel arrow; selector provenance `home::[data-omd-capture="74"]`.

### Navigation and page controls

Rest values are the July 2026-07-13 capture unless marked. Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe (logged out, keyboard walk first, nothing activated); "no change" means no computed change across the control, its ::before/::after, every descendant and 3 ancestor levels, and nothing wider.

**Bottom Tab-bar Link** (홈, 카테고리, 찜, 마이페이지)
- Background: transparent
- Text: `#121212` 11px / 500 on the visible label (the link itself computes `#292b2b` 16px / 400)
- Size: 150×59px; the first and last links round their outer top corner at 12px
- Hover (2026-09-29, on 카테고리): a full-size `::before` veil, `rgba(0, 0, 0, 0.05)`
- Pressed: the same veil, the same colour on the link, and the icon scaled to 0.95
- Keyboard focus: no change within scope. Use: `home::[data-omd-capture="78"]` to `[data-omd-capture="81"]`.

**Header Icon Link** (검색 and its siblings)
- Background: transparent; text `#292b2b`; radius 8px; 44×44px; no text node
- Hover and pressed (2026-09-29, on the product-page 검색): background `rgba(0, 0, 0, 0.03)`
- Keyboard focus: no change within scope. It is a link to /search; there is no search input at rest. Use: `surface-2::[data-omd-capture="2"]` to `[data-omd-capture="4"]`.

**Product-card Carousel Arrow**
- Background: `#ffffff`; icon colour `#000000`; radius 9999px; padding 6px; 32×32px
- Shadow: `0px 2px 8px rgba(0, 0, 0, 0.1)`
- Hover, pressed and keyboard focus (2026-09-29): no change within scope. Use: `surface-2::[data-omd-capture="26"]`.

**Purchase Button** (구매하기)
- Background: `#121314`; text `#fafafb`; radius 24px; 460×46px; 17px / 700
- Keyboard focus (2026-09-29): no change within scope. Hover and pressed are deliberately unmeasured: the button was never pressed. Use: fixed bottom bar, `surface-2::[data-omd-capture="37"]`.

**More Pill** (상품정보 더 보기)
- Background: transparent; text `#242729` 15px / 600; radius 24px; 98×48px
- Its 1px `#292b2b` pill border is drawn by the parent div, not by the button.
- Keyboard focus (2026-09-29): no change within scope. Hover and pressed are unmeasured: the button is pointer-events none. Use: `surface-2::[data-omd-capture="33"]`.

**App Banner** (앱으로 이동)
- Background: `#f1ecea`; text `#000000`; padding 0px 17px; 600×54px; 16px / 400
- Default only; not probed. Use: top of all three surfaces, `home::[data-omd-capture="0"]`.

**Floating Scroll Button**
- Background: `#ffffff`; icon colour `#000000`; radius 50%; 40×40px
- Shadow: `0px 2px 6px rgba(0, 0, 0, 0.08)`
- Default only; not probed. Use: `surface-2::[data-omd-capture="38"]`, four occurrences.

**Text Action** (전체보기)
- Text: `#606567` 13px / 500; transparent; 63×20px
- Default only; not probed. Use: `surface-2::[data-omd-capture="8"]`.

No search input (the header 검색 is a link), filter chip, toast, dialog, or favorite state is promoted. No checkout step was entered: the purchase button's rest and focus are recorded, its hover and pressed are not.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://zigzag.kr/ · https://zigzag.kr/catalog/products/145661347 · https://zigzag.kr/catalog/products/162934185
**Tier 2 sources:** https://getdesign.md/zigzag (attempted; unavailable) · https://styles.refero.design/?q=ZIGZAG (attempted; unavailable)
**Conflicts unresolved:** none

## 5. Layout Principles

- Keep product imagery and metadata as separate blocks. The current public card implementation exposes thumbnail and metadata as distinct product-card subcomponents.
- Treat the 8px bottom card padding as local card geometry, not a global spacing scale.
- Keep product-detail tabs as low-fill text controls; the observed selected state is conveyed by text weight/color rather than a filled pill.
- Do not infer desktop, native-app, cart, or checkout layout rules from these three public web pages.

## 6. Depth & Elevation

The supplied public samples report `box-shadow: none` for the promoted card, tab, and quick-menu controls. Two floating controls carry their own shadow — the product-card carousel arrow `0px 2px 8px rgba(0, 0, 0, 0.1)` and the scroll buttons `0px 2px 6px rgba(0, 0, 0, 0.08)` — recorded per component, not as an elevation scale. Product thumbnails may use the neutral `#ecedee` placeholder; depth is not promoted as a canonical shadow system. White surfaces and hairlines should not be converted into an invented card-elevation scale.

## 7. Do's and Don'ts

### Do

- Keep `#292b2b` as the observed body/card foreground and reserve `#121212` for the strongest captured detail-tab state.
- Preserve the product-card split between thumbnail and metadata when using this reference's public-card pattern.
- Use 0px geometry only for the observed card/tab roles; use 8px, 24px, and full-pill values only in their evidenced icon, action, and carousel-control roles.

### Don't

- Do not present the legacy pink palette as a current public product token without new product-surface proof.
- Do not label the computed Pretendard JP stack as a browser-loadable ZIGZAG font or substitute a system font under that name.
- Do not invent sale, error, success, favorite, dialog, input, or checkout variants from adjacent marketing or native-app surfaces, or hover, focus, and pressed values beyond those measured in §4.

## 8. Responsive Behavior

The artifact was captured at `1440x900` and the public product content contained a 600px-wide product carousel/card region. That observation is not enough to claim a global max-width or native-mobile breakpoint policy. Responsive behavior, overlays, and interaction states remain outside this reference until independently captured.

## 9. Agent Prompt Guide

Use this reference for a neutral, photo-led public fashion-product detail only: white canvas, `#292b2b` reading text, `#878f91` inactive metadata, `#ecedee` placeholder/hairline, a selected 14px / 600 `#121212` tab, and a transparent square product-card root. Do not ask it to supply a ZIGZAG pink CTA, a verified font file, or checkout-state patterns; those are not in this evidence set.

## 10. Voice & Tone

Official current brand publishing uses a personal-style discovery frame: the 2025 ZIGZAG Beauty story calls the service a style-commerce platform and describes helping people find their own preferences. This is marketing voice, not a token or a verified logged-in-product microcopy guide. Keep product-detail labels concrete and item-led; do not manufacture error, payment, or retention copy from campaign language.

## 11. Brand Narrative

KakaoStyle's official 2025 ZIGZAG Beauty publication describes ZIGZAG as a style-commerce platform that began in fashion and expanded its categories and selection so people can discover their own preferences. The publication connects that idea to a beauty pop-up whose offline “online pouch” could link saved products back to the app cart. Separately, ZIGZAG's public terms define the service as a mobile shopping service in which the company intermediates transactions between sellers and users. Together, those first-party sources explain the reference's scope: a commerce service whose editorial discovery language sits beside a transactional product surface.

The official engineering account adds the system's current technical arc. Its ZDS rebuild began from the need to unify independently maintained product cards; the team adopted modular packages, CSS-variable token contracts, and a compound product-card structure that can vary by surface without losing its shared base. That background supports the documented card anatomy, but not token values absent from the July 2026 public capture.

## 12. Principles

1. **Discovery and transaction coexist.** The official brand story presents preference discovery while the terms define a transaction-intermediation service. *UI implication:* keep editorial/campaign interpretation separate from checkout claims unless each has surface evidence.
2. **Systemize the repeated product card.** ZDS was rebuilt in part to unify product-card work across surfaces. *UI implication:* preserve thumbnail and metadata as separable blocks rather than treating each card as an unstructured visual tile.
3. **Tokens need local proof.** CSS-variable architecture is official engineering context, but current values must still come from the correct product surface. *UI implication:* do not copy a marketing color or legacy CSS value into product tokens without computed evidence.

## 13. Personas

These are stakeholder roles derived from first-party service/engineering descriptions, not synthetic user research or demographic claims.

- **Shopper:** uses the mobile shopping service to browse product information and complete a transaction through the platform.
- **Seller:** provides goods or services through the marketplace relationship described in the public terms.
- **Product-surface team:** maintains product-card UI across multiple surfaces using the ZDS component architecture described by Kakaostyle engineering.

## 14. States

| State | Evidence boundary |
|---|---|
| Default product card | Transparent root, 0px radius, 0px 0px 8px padding on both captured product-detail pages. |
| Thumbnail placeholder | `#ecedee`, 0px radius on the captured `.product-card-thumbnail`. |
| Default detail tab | `#878f91`, 14px / 500, captured on both product-detail pages; the bottom padding varies by tab (17.5px on 성분, 10px on 리뷰). |
| Selected detail tab | `#121212`, 14px / 600, captured on both product-detail pages. |
| Quick-menu arrow default | Transparent, `#000000`, 1px `#ecedee` border, 50% radius on home. |
| Quick-menu arrow disabled | `rgba(16,16,16,0.3)` text on the captured previous arrow; a natively disabled button (2026-09-29). |
| Hover / pressed | Measured 2026-09-29: faint dark veils. `rgba(0, 0, 0, 0.05)` on the quick-menu arrow (pressed only) and the tab bar (a ::before veil on hover; veil, fill and a 0.95 icon scale on press); `rgba(0, 0, 0, 0.03)` on the header icon link (hover and press) and the product-card link (press only); no change on the selected detail tab or the carousel arrow. |
| Keyboard focus | Measured 2026-09-29 on 8 controls: no visible focus indication on any, within each control's compared scope (self, pseudos, descendants, 3 ancestor levels); no browser-default ring appeared. |
| Checkout, payment, error, success, toast, dialog | Not claimed: no public selector/state evidence in the supplied artifact. |

## 15. Motion & Easing

No motion duration, easing curve, animation, or reduced-motion treatment was observed in the July capture. The 2026-09-29 probe read transition declarations on the arrow, tab-bar, header-icon and card-link controls; none is promoted as a motion token. The product-card carousel and quick-menu arrows establish only structural control evidence; they do not authorize a motion token or a claimed transition behavior.
