---
id: myrealtrip
name: MyRealTrip
country: KR
category: consumer-tech
homepage: "https://www.myrealtrip.com"
primary_color: "#2b96ed"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=myrealtrip.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: consumer-home, kind: product, url: "https://www.myrealtrip.com/", inspected: "2026-07-13" }
    - { id: hotel-listing, kind: product, url: "https://www.myrealtrip.com/hotels", inspected: "2026-07-13" }
    - { id: corporate-about, kind: corporate, url: "https://about.myrealtrip.com/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.myrealtrip.com/", captured: "2026-07-13" }
    - { id: hotel-live, kind: product-surface, url: "https://www.myrealtrip.com/hotels", captured: "2026-07-13" }
    - { id: about-live, kind: product-surface, url: "https://about.myrealtrip.com/", captured: "2026-07-13" }
    - { id: help-center, kind: product-surface, url: "https://help.myrealtrip.com/hc/ko", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  claims:
    "tokens.colors.primary": &home { surface_id: consumer-home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.ink": *home
    "tokens.colors.muted": *home
    "tokens.colors.search-fill": *home
    "tokens.colors.control-border": *home
    "tokens.colors.selected-fill": *home
    "tokens.colors.on-primary": *home
    "tokens.typography.family.sans": &hotel_font { surface_id: hotel-listing, source_id: hotel-live, method: computed-style-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.body.size": *hotel_font
    "tokens.typography.body.weight": *hotel_font
    "tokens.typography.body.lineHeight": *hotel_font
    "tokens.typography.body.use": *hotel_font
    "tokens.typography.control.size": *hotel_font
    "tokens.typography.control.weight": *hotel_font
    "tokens.typography.control.lineHeight": *hotel_font
    "tokens.typography.control.use": *hotel_font
    "tokens.spacing.action-inline": *home
    "tokens.rounded.square": *home
    "tokens.rounded.action": *home
    "tokens.rounded.selected-tab": *home
    "tokens.components.primary-header-action.type": *home
    "tokens.components.primary-header-action.bg": *home
    "tokens.components.primary-header-action.fg": *home
    "tokens.components.primary-header-action.radius": *home
    "tokens.components.primary-header-action.padding": *home
    "tokens.components.primary-header-action.height": *home
    "tokens.components.primary-header-action.font": *home
    "tokens.components.primary-header-action.states": *home
    "tokens.components.primary-header-action.use": *home
    "tokens.components.selected-locale-tab.type": *home
    "tokens.components.selected-locale-tab.bg": *home
    "tokens.components.selected-locale-tab.fg": *home
    "tokens.components.selected-locale-tab.radius": *home
    "tokens.components.selected-locale-tab.padding": *home
    "tokens.components.selected-locale-tab.height": *home
    "tokens.components.selected-locale-tab.font": *home
    "tokens.components.selected-locale-tab.active": *home
    "tokens.components.selected-locale-tab.use": *home
    "tokens.components.search-input.type": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.search-input.bg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.search-input.fg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.search-input.radius": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.search-input.padding": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.search-input.height": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.search-input.font": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.search-input.states": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.search-input.use": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.type": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.bg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.fg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.border": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.radius": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.padding": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.height": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.font": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.states": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-button.use": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.header-text-button.type": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-text-button.bg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-text-button.fg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-text-button.radius": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-text-button.padding": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-text-button.height": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-text-button.font": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-text-button.states": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-text-button.use": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.footer-sitemap-link.type": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-07-13" }
    "tokens.components.footer-sitemap-link.bg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-07-13" }
    "tokens.components.footer-sitemap-link.fg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-07-13" }
    "tokens.components.footer-sitemap-link.radius": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-07-13" }
    "tokens.components.footer-sitemap-link.padding": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-07-13" }
    "tokens.components.footer-sitemap-link.height": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-07-13" }
    "tokens.components.footer-sitemap-link.font": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-07-13" }
    "tokens.components.footer-sitemap-link.states": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-07-13" }
    "tokens.components.footer-sitemap-link.use": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-07-13" }
    "tokens.components.footer-policy-link.type": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.footer-policy-link.bg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.footer-policy-link.fg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.footer-policy-link.radius": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.footer-policy-link.padding": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.footer-policy-link.height": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.footer-policy-link.font": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.footer-policy-link.states": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.footer-policy-link.use": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.footer-select-button.type": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"34\"]", captured: "2026-07-13" }
    "tokens.components.footer-select-button.bg": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"34\"]", captured: "2026-07-13" }
    "tokens.components.footer-select-button.border": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"34\"]", captured: "2026-07-13" }
    "tokens.components.footer-select-button.radius": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"34\"]", captured: "2026-07-13" }
    "tokens.components.footer-select-button.padding": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"34\"]", captured: "2026-07-13" }
    "tokens.components.footer-select-button.size": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"34\"]", captured: "2026-07-13" }
    "tokens.components.footer-select-button.states": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"34\"]", captured: "2026-07-13" }
    "tokens.components.footer-select-button.use": { surface_id: hotel-listing, source_id: hotel-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"34\"]", captured: "2026-07-13" }
    "tokens.components.home-white-button.type": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-07-13" }
    "tokens.components.home-white-button.bg": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-07-13" }
    "tokens.components.home-white-button.fg": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-07-13" }
    "tokens.components.home-white-button.radius": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-07-13" }
    "tokens.components.home-white-button.padding": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-07-13" }
    "tokens.components.home-white-button.height": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-07-13" }
    "tokens.components.home-white-button.font": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-07-13" }
    "tokens.components.home-white-button.states": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-07-13" }
    "tokens.components.home-white-button.use": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"46\"]", captured: "2026-07-13" }
    "tokens.components.home-blue-text-link.type": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-blue-text-link.bg": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-blue-text-link.fg": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-blue-text-link.radius": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-blue-text-link.padding": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-blue-text-link.height": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-blue-text-link.font": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-blue-text-link.states": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.home-blue-text-link.use": { surface_id: consumer-home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"19\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-link.type": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-link.bg": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-link.fg": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-link.radius": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-link.padding": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-link.height": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-link.font": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-link.states": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-link.use": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-pill.type": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-pill.bg": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-pill.fg": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-pill.radius": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-pill.padding": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-pill.height": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-pill.font": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-pill.states": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.about-nav-pill.use": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.about-footer-link.type": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.about-footer-link.bg": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.about-footer-link.fg": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.about-footer-link.radius": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.about-footer-link.padding": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.about-footer-link.height": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.about-footer-link.font": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.about-footer-link.states": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.about-footer-link.use": { surface_id: corporate-about, source_id: about-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
  conflicts: []
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only values with current raw computed-style provenance are tokens. Home/hotel product surfaces and corporate/about chrome remain separate."
  colors:
    primary: "#2b96ed"
    canvas: "#ffffff"
    ink: "#495056"
    muted: "#666d75"
    search-fill: "#f5f6f7"
    control-border: "#ced4da"
    selected-fill: "#101418"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    body: { size: 14, weight: 400, lineHeight: "21px", use: "Public hotel-listing body/list text" }
    control: { size: 15, weight: 500, lineHeight: "22.5px", use: "Public hotel-search input" }
  spacing: { action-inline: 24 }
  rounded: { square: 0, action: 12, selected-tab: 16 }
  components_harvested: true
  components:
    primary-header-action: { type: button, bg: "#2b96ed", fg: "#ffffff", radius: "12px", padding: "0px 24px", height: "40px", font: "14px / 600 / Pretendard", states: "Default only; the bundle holds no hover, pressed, or focus frame on any of its three surfaces, so none is claimed, and no disabled variant was observed. Corrected 2026-09-29: the July text reasoned from interactionCount 0, which counts expansions, not pointer states.", use: "Public home and hotel-header action; home::[data-omd-capture=\"5\"] and surface-3::[data-omd-capture=\"3\"]" }
    selected-locale-tab: { type: tab, bg: "#101418", fg: "#ffffff", radius: "16px", padding: "6px 10px", height: "32px", font: "15px / 700 / Pretendard", active: "aria-selected=true observed on home::[data-omd-capture=\"1\"]", use: "Selected locale tab on the public home header" }
    search-input: { type: input, bg: "#f5f6f7", fg: "#495056", radius: "0px", padding: "0px 54px 0px 20px", height: "48px", font: "15px / 500 / 22.5px Pretendard", states: "default captured on hotel listing (326 x 48) and home (345 x 48); no focus or error sample; no state frame (the bundle holds none on any of its three surfaces)", use: "Public keyword search input (SearchInput--KeywordInput) at surface-3::[data-omd-capture=\"1\"] and home::[data-omd-capture=\"3\"]; its border width is 0px, so no field frame is claimed; home renders it in the loaded alias __pretandard_7bdbf6 with normal line height" }
    outline-button: { type: button, bg: "#ffffff", fg: "#495056", border: "1px #ced4da", radius: "4px", padding: "9px 8px", height: "40px", font: "14px / 700 / 21px Pretendard", states: "default captured on hotel listing and home (140 x 40 on both); no state frame (the bundle holds none on any of its three surfaces)", use: "Footer customer-centre outline button (button.mrt-button) at surface-3::[data-omd-capture=\"15\"] and home::[data-omd-capture=\"23\"]" }
    header-text-button: { type: button, bg: "transparent", fg: "#666d75", radius: "3px", padding: "8px 12px", height: "39px", font: "15px / 600 / 22.5px Pretendard", states: "default captured on hotel listing (105 x 39) and home (105 x 34, normal line height); no state frame (the bundle holds none on any of its three surfaces)", use: "Header text button (GlobalNavNonLineButton) beside the blue header action at surface-3::[data-omd-capture=\"2\"] and home::[data-omd-capture=\"4\"]" }
    footer-sitemap-link: { type: tab, bg: "transparent", fg: "#666d75", radius: "4px", padding: "6px", height: "33px", font: "14px / 400 / 21px Pretendard", states: "default captured on nine links per surface (hotel capture 16-24; home capture 24-32, 29px high with normal line height); no state frame (the bundle holds none on any of its three surfaces)", use: "Footer sitemap link (SiteMapItems--MenuLink) at surface-3::[data-omd-capture=\"16\"] and home::[data-omd-capture=\"24\"]" }
    footer-policy-link: { type: tab, bg: "transparent", fg: "#666d75", radius: "4px", padding: "6px", height: "44px", font: "14px / 400 / 21px Pretendard", states: "default captured (hotel capture 25-27; home capture 33-36, 56px high); one link per row (hotel capture 26, home capture 34) carries a different generated class and renders 14px / 700, a fixed emphasis rather than a state; no state frame (the bundle holds none on any of its three surfaces)", use: "Footer policy link row (PolicyList--Link) at surface-3::[data-omd-capture=\"25\"] and home::[data-omd-capture=\"33\"]" }
    footer-select-button: { type: button, bg: "#ffffff", border: "1px #ced4da", radius: "4px", padding: "0px 10px", size: "118px x 40px", states: "default captured on hotel listing and home; no state frame (the bundle holds none on any of its three surfaces)", use: "Footer select popup button (DesktopSelect--PopupButton) at surface-3::[data-omd-capture=\"34\"] and home::[data-omd-capture=\"43\"]; its own computed colour differs by surface (#373a3c on hotel listing, #000000 on home) and its own type is 10px on hotel listing and the browser-default 13.3333px on home, so the label sits on an uncaptured child and no label style is claimed" }
    home-white-button: { type: button, bg: "#ffffff", fg: "#343a40", radius: "0px", padding: "0px", height: "38px", font: "15px / 600", states: "default captured on two buttons (capture 46-47, 162 x 38); no state frame (the bundle holds none on any of its three surfaces)", use: "Home white button pair at home::[data-omd-capture=\"46\"]; the bundle does not record their role; the family is the loaded alias __pretandard_7bdbf6" }
    home-blue-text-link: { type: tab, bg: "transparent", fg: "#2b96ed", radius: "0px", padding: "0px", height: "16px", font: "14px / 500", states: "default captured on three links (capture 19-21); no state frame (the bundle holds none on any of its three surfaces)", use: "Home blue text link at home::[data-omd-capture=\"19\"]; the family is the loaded alias __pretandard_7bdbf6" }
    about-nav-link: { type: tab, bg: "transparent", fg: "#374151", radius: "12px", padding: "8px 12px", height: "32px", font: "14px / 500 / 20px", states: "default captured on six links (capture 1-6); no state frame (the bundle holds none on any of its three surfaces)", use: "Corporate about-site header link at surface-2::[data-omd-capture=\"1\"] (about.myrealtrip.com); corporate chrome, not consumer product evidence; its stack leads with Pretendard Variable, which the bundle lists as declared-only, so no family is claimed" }
    about-nav-pill: { type: button, bg: "#000000", fg: "#ffffff", radius: "12px", padding: "8px 12px", height: "36px", font: "14px / 500 / 20px", states: "default captured; no state frame (the bundle holds none on any of its three surfaces)", use: "Corporate about-site black header pill at surface-2::[data-omd-capture=\"7\"], 76 x 36; corporate chrome; no family claimed (declared-only Pretendard Variable)" }
    about-footer-link: { type: tab, bg: "transparent", fg: "#666666", radius: "0px", padding: "0px", height: "20px", font: "14px / 400 / 20px", states: "default captured on four links (capture 8-11); the class list names a Tailwind hover utility, but a class name is not a measurement, so no hover value is declared; no state frame (the bundle holds none on any of its three surfaces)", use: "Corporate about-site footer link at surface-2::[data-omd-capture=\"8\"]; corporate chrome; no family claimed" }
---

# Design System Inspiration of MyRealTrip (마이리얼트립)

## 1. Visual Theme & Atmosphere

MyRealTrip is a Korean travel marketplace whose own public materials describe a 2012 start brokering locally made tours and a current scope across travel experiences. The current public home and hotel-listing surfaces pair a white working canvas with low-chrome navigation: a blue header action, a pale-gray search field, compact gray text, and a selected dark locale pill. The visual system recorded here is deliberately narrower than a brand story. It covers only current rendered public web evidence, while the separate corporate/about site is kept as corporate chrome rather than silently blended into consumer-product tokens. MyRealTrip’s public partner program foregrounds reliable booking, sustained traveler ratings, and prompt communication; its current company blog describes the organisation as an AI-native travel platform. Those are product and organisational context, not evidence for an unobserved app component or visual token.

**Observed character:** restrained utility chrome around travel discovery, with `#2B96ED` used for the repeated public header action rather than a generalised brand palette.

## Primary tasks

- Find a locally made tour or travel experience to book
- Search for a stay from the hotel listing
- Manage schedules so a confirmed reservation gets fulfilled

## 2. Color Palette & Roles

The following are current computed observations from the supplied 2026-07-13 product bundle. They are not a published MyRealTrip token library.

| Observed role | Value | Provenance and boundary |
|---|---:|---|
| Repeated header action | `#2B96ED` | 40px button background on home and hotel listing, and the text colour of three 14px / 500 home text links (§4); do not infer hover or booking-flow use. |
| White canvas / action text | `#FFFFFF` | Repeated public surface background and text on the blue action. |
| Search fill | `#F5F6F7` | 48px public search input on home and hotel listing. |
| Search/control ink | `#495056` | Repeated input and public list/control text. |
| Muted navigation text | `#666D75` | Repeated public home and hotel-header text/border observation; the header text button and the footer sitemap and policy links use it (§4). |
| Control border | `#CED4DA` | Static white outlined control in both product surfaces. |
| Selected locale-tab fill | `#101418` | `aria-selected=true` tab on the home header. |

The prior deep-blue, violet, semantic, sale, and success palette claims are not retained: the fresh bundle does not establish them as current reusable product tokens.

Component-local colours recorded in §4 and not promoted to palette roles: `#343A40` text on a pair of white 15px / 600 home buttons; on the separate corporate about site, `#374151` header links, a `#000000` header pill with white text, and `#666666` footer links.

## 3. Typography Rules

### Current public-web font evidence

| Evidence class | Finding | Boundary |
|---|---|---|
| **Official product-use** | No first-party MyRealTrip font specification or announcement was found in this update. | No brand-font claim is inferred from a marketing or corporate page. |
| **Live computed surface-use** | `Pretendard` is a loaded, high-confidence first family with 60 visible uses and 36 captured source URLs; the hotel search input resolves to it directly. | This supports the public-web UI-family token only. |
| **Loaded internal alias** | `__pretandard_7bdbf6` is loaded with high confidence, 64 visible uses, and four MyRealTrip CDN sources. | The bundle does not prove that the internal alias is a separately named, reusable brand typeface. |
| **Official distributed font asset / licence** | Pretendard’s upstream project publishes the font under SIL Open Font License 1.1. | This is third-party font licensing, not a licence to MyRealTrip marks, UI assets, or an assertion that every MyRealTrip surface ships the same build. |
| **Declared-only** | `Pretendard Variable`, `Noto Sans KR`, `PP Neue Montreal`, and icon faces appear as declarations in the bundle but are not promoted by the collector. | Do not render a specimen or token as though any of them were verified visible current UI use. |

### Measured public roles

| Role | Family | Size | Weight | Line height | Surface |
|---|---|---:|---:|---:|---|
| Hotel-listing body/list text | Pretendard | 14px | 400 | 21px | `https://www.myrealtrip.com/hotels` |
| Hotel search control | Pretendard | 15px | 500 | 22.5px | `https://www.myrealtrip.com/hotels` |
| Selected home locale tab | Pretendard | 15px | 700 | 18.6px | `https://www.myrealtrip.com/` |

These are captured public-web roles, not a claim about authenticated booking screens, mobile native UI, help-center chrome, or a company-wide typographic scale.

## 4. Component Stylings

### Public header action

**Observed default**
- Background: `#2B96ED`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 0px 24px
- Height: 40px
- Font: 14px / 600 / loaded internal Pretendard alias on home; Pretendard stack on hotel listing
- States: default only; the bundle holds no hover, pressed, or focus frame on any of its three surfaces, so none is claimed, and no disabled, menu, dialog, validation, or loading variant was captured. Corrected 2026-09-29: the July text gave `interactionCount: 0` as the reason; that field counts expansions, not pointer-state frames
- Use: repeated header action on `home::[data-omd-capture="5"]` and `surface-3::[data-omd-capture="3"]`

### Public search field

**Observed default**
- Background: `#F5F6F7`
- Text: `#495056`
- Border: 0px
- Radius: 0px
- Padding: 0px 54px 0px 20px
- Height: 48px
- Font: 15px / 500 / loaded internal Pretendard alias on home; Pretendard stack on hotel listing
- Use: public keyword search at `home::[data-omd-capture="3"]` and `surface-3::[data-omd-capture="1"]`

### Selected locale tab

**Selected state observed**
- Background: `#101418`
- Text: `#FFFFFF`
- Radius: 16px
- Padding: 6px 10px
- Height: 32px
- Font: 15px / 700 / Pretendard
- Active: `aria-selected="true"` on `home::[data-omd-capture="1"]`
- Use: selected locale tab within the home-header tablist

The unselected sibling’s transparent computed text is not promoted as a reusable inactive variant. Its static capture does not establish an interaction transition.

### Header text button

**Observed default** (`header-text-button`)
- Background: transparent
- Text: `#666D75`
- Radius: 3px
- Padding: 8px 12px
- Height: 39px on hotel listing (22.5px line height); 34px on home (normal line height)
- Font: 15px / 600 / Pretendard
- Use: `surface-3::[data-omd-capture="2"]` (class `GlobalNavNonLineButton`) and `home::[data-omd-capture="4"]`, beside the blue header action; 105px wide on both.

### Outline button

**Observed default** (`outline-button`)
- Background: `#FFFFFF`
- Text: `#495056`
- Border: 1px `#CED4DA`
- Radius: 4px
- Padding: 9px 8px
- Height: 40px
- Font: 14px / 700 / 21px Pretendard on hotel listing; normal line height on home
- Use: footer customer-centre button (`button.mrt-button`) at `surface-3::[data-omd-capture="15"]` and `home::[data-omd-capture="23"]`; 140px × 40px on both surfaces.

### Footer links and select

**Sitemap link** (`footer-sitemap-link`)
- Text: `#666D75`; radius 4px; padding 6px; 14px / 400 / 21px Pretendard
- Height: 33px on hotel listing, 29px on home (normal line height)
- Use: `SiteMapItems--MenuLink` at `surface-3::[data-omd-capture="16"]` and `home::[data-omd-capture="24"]`; nine links per surface.

**Policy link** (`footer-policy-link`)
- Text: `#666D75`; radius 4px; padding 6px; 14px / 400 / 21px Pretendard
- Height: 44px on hotel listing, 56px on home
- Use: `PolicyList--Link` at `surface-3::[data-omd-capture="25"]` and `home::[data-omd-capture="33"]`. One link in each row (hotel capture 26, home capture 34) carries a different generated class and renders 14px / 700; that is a fixed emphasis, not a state.

**Select popup button** (`footer-select-button`)
- Background: `#FFFFFF`; border 1px `#CED4DA`; radius 4px; padding 0px 10px; 118px × 40px
- Use: `DesktopSelect--PopupButton` at `surface-3::[data-omd-capture="34"]` and `home::[data-omd-capture="43"]`. The button's own computed colour differs by surface (`#373A3C` on hotel listing, `#000000` on home) and its own type is 10px on hotel listing and the browser-default 13.3333px on home, so the visible label sits on a child element the bundle did not capture. No label style is claimed.

### Home content controls

**White button pair** (`home-white-button`)
- Background: `#FFFFFF`; text `#343A40`; radius 0px; padding 0px; 162px × 38px
- Font: 15px / 600 in the loaded alias `__pretandard_7bdbf6`
- Use: `home::[data-omd-capture="46"]` and `"47"`; the bundle does not record their role.

**Blue text link** (`home-blue-text-link`)
- Text: `#2B96ED`; 14px / 500 in the loaded alias `__pretandard_7bdbf6`; 16px high
- Use: `home::[data-omd-capture="19"]` through `"21"`. The public blue appears here as link text as well as the header-action fill.

### Corporate about-site chrome (separate domain)

These are measured on `https://about.myrealtrip.com/` (bundle `surface-2`), the corporate site. They are recorded as corporate components and do not populate consumer tokens. Their computed stacks lead with Pretendard Variable, which the bundle lists as declared-only, so no family is claimed for them.

**Header link** (`about-nav-link`): transparent, text `#374151`, 12px radius, 8px 12px padding, 32px high, 14px / 500 / 20px; `surface-2::[data-omd-capture="1"]` through `"6"`.

**Header pill** (`about-nav-pill`): background `#000000`, text `#FFFFFF`, 12px radius, 8px 12px padding, 76px × 36px, 14px / 500 / 20px; `surface-2::[data-omd-capture="7"]`.

**Footer link** (`about-footer-link`): text `#666666`, 14px / 400 / 20px, 20px high; `surface-2::[data-omd-capture="8"]` through `"11"`. Its class list names a Tailwind hover utility, but a class name is not a measurement and no hover frame exists, so no hover value is declared.

No component in this reference carries a hover, pressed, or focus value: the bundle holds no `::state-*` frame on any of its three surfaces.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.myrealtrip.com/` (public consumer home), `https://www.myrealtrip.com/hotels` (public hotel listing), `https://about.myrealtrip.com/` (separate corporate/about surface), `https://help.myrealtrip.com/hc/ko` (official support chrome and service context)
**Tier 2 sources:** `https://getdesign.md/myrealtrip` (attempted; built-in web open returned a safe-open failure and search returned no MyRealTrip detail), `https://styles.refero.design/?q=myrealtrip` (attempted; built-in web open returned a safe-open failure and search returned no MyRealTrip detail). No Tier 2 value was promoted.
**Conflicts unresolved:** none

The prior prose-derived palette, broad card/badge/dialog/toast inventory, hover/focus/error/disabled catalogue, mobile breakpoints, and motion rules were not supported by the supplied current raw evidence. They are removed rather than refreshed by assumption.

## 5. Layout Principles

The supplied bundle records public desktop-width documents only. The repeated consumer header is compact: the search field is 48px high, the primary action is 40px high, and the selected locale tab is 32px high. No public max-width, carousel, card-grid, booking-detail, or authenticated-flow layout rule is retained because the bundle does not supply a stable element-level measurement for one.

## 6. Depth & Elevation

The retained primary action, search field, and selected locale tab have no shadow. The selected tab’s own sample carries `0px 1px 2px rgba(0, 0, 0, 0.15)` while the action and search field are `none`; this isolated header treatment does not establish a reusable elevation scale.

## 7. Do's and Don'ts

### Do

- Keep the documented `#2B96ED` / `#FFFFFF` pair for the observed 40px public header action when reproducing that exact public-web pattern.
- Preserve the selected locale tab’s observed `#101418` fill, 16px radius, and explicit selected-state provenance.
- Treat the pale `#F5F6F7` search field as its own square-cornered public header control.

### Don't

- Don't turn the captured default action into hover, focus, pressed, disabled, booking, or payment variants without new state evidence.
- Don't substitute a declared-only font face for the visibly loaded Pretendard/public aliases.
- Don't blend the corporate/about or help-center chrome into consumer product tokens.

## 8. Responsive Behavior

No responsive breakpoint or mobile layout was captured in the supplied evidence. The record therefore makes no claim about mobile navigation, carousel behavior, touch targets, safe-area controls, or image aspect-ratio rules.

## 9. Agent Prompt Guide

Use only the captured public pattern: “Create a 40px MyRealTrip public header action with `#2B96ED` background, `#FFFFFF` text, 12px radius, 0px 24px padding, and 14px/600 Pretendard-context typography. This is a static default; do not invent interaction states.”

For the selected locale control: “Use the observed selected tab only: `#101418` fill, white 15px/700 text, 16px radius, 6px 10px padding, 32px height; preserve that it was an `aria-selected=true` observation.”

## 10. Voice & Tone

The public sources demonstrate Korean-first service labels such as `무엇을 도와드릴까요?`, `문의하기`, and partner guidance written in polite `~요` language. Those samples support a practical, explanatory service register on the public help and partner surfaces; they do not establish a comprehensive product voice system.

| Evidence | Safe use |
|---|---|
| `무엇을 도와드릴까요?` | Help-centre framing for a support entry point. |
| `문의하기` | Direct action label for a support route. |
| `여행자와의 약속을 성실히 이행해요` | Partner-program guidance, not a generic consumer CTA. |

## 11. Brand Narrative

MyRealTrip’s own public offer page identifies founder Lee Dong-geon and says the company was founded in February 2012, beginning by brokering tours made by local people. Its current partner programme frames quality around responsible reservation fulfilment, traveller ratings, and timely communication. The company blog currently describes MyRealTrip as an AI-native travel platform and publishes product, technology, and organisational stories. Together, these sources establish a travel-marketplace origin and a current organisational direction; they do not supply an official rebrand history or a visual-design manifesto.

## 12. Principles

1. **Reliable reservation fulfilment.** The partner programme asks partners to manage schedules so confirmed reservations can be fulfilled. *UI implication:* do not represent this as a verified button, badge, or checkout-state treatment without product-screen evidence.
2. **Traveller feedback matters.** The public Real Partner criteria include a rolling one-year 4.8-or-higher review requirement. *UI implication:* the criterion is partner-program context, not permission to invent rating-card components.
3. **Timely communication.** The same programme asks for message responses and reservation confirmation within 24 hours. *UI implication:* do not turn this service standard into a notification, SLA, or error-state token without direct evidence.

## 13. Personas

The first-party materials identify public stakeholder groups rather than research-backed personas: travellers seeking travel products, partners who operate listings and reservations, and support visitors looking for help. No named or synthetic persona is supplied here; demographic needs, booking journeys, and conversion motivations are not established here, pending first-party research or user-provided evidence.

## 14. States

The collector reports one selected tab observation and `interactionCount: 0`, and no element on its three surfaces has a `::state-hover`, `::state-pressed`, or `::state-focus` frame, so no hover, pressed, or focus value exists to declare. No verified empty, loading, error, success, disabled, validation, toast, dialog, or skeleton treatment is available from this packet.

| State | Evidence boundary |
|---|---|
| Selected locale tab | `aria-selected="true"` static home-header observation; values recorded in §4. |
| Empty | Not observed |
| Loading | Not observed |
| Error | Not observed |
| Success | Not observed |
| Disabled | Not observed |
| Hover / pressed / focus | No state frame captured on any surface |

## 15. Motion & Easing

No duration, easing, transition, reduced-motion, or animated-state measurement was captured. Do not infer motion from class names or from the presence of interactive-looking controls.
