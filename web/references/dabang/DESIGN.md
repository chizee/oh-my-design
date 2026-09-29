---
id: dabang
name: 다방
display_name_kr: Dabang (다방)
country: KR
category: consumer-tech
homepage: "https://www.dabangapp.com"
primary_color: "#ff3478"
logo:
  type: favicon
  slug: "https://www.dabangapp.com/static/favicon.ico"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: product-home, kind: product-surface, url: "https://www.dabangapp.com/", inspected: "2026-07-13" }
    - { id: product-map, kind: product-surface, url: "https://www.dabangapp.com/map/onetwo?m_lat=37.494367328004216&m_lng=127.01446798508894&m_zoom=11", inspected: "2026-07-13" }
    - { id: support-faq, kind: support-documentation, url: "https://www.dabangapp.com/service/faq", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://www.dabangapp.com/", captured: "2026-07-13" }
    - { id: map-capture, kind: product-surface, url: "https://www.dabangapp.com/map/onetwo?m_lat=37.494367328004216&m_lng=127.01446798508894&m_zoom=11", captured: "2026-07-13" }
    - { id: faq-capture, kind: product-surface, url: "https://www.dabangapp.com/service/faq", captured: "2026-07-13" }
    - { id: service-context, kind: official-doc, url: "https://www.station3.co.kr/service/", captured: "2026-07-13" }
    - { id: terms-context, kind: official-doc, url: "https://static.dabangapp.com/html/useragreement.html", captured: "2026-07-13" }
    - { id: font-design, kind: brand-asset, url: "https://github.com/orioncactus/pretendard", captured: "2026-07-13" }
    - { id: font-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: product-home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.border": *home
    "tokens.colors.surface-muted": *home
    "tokens.colors.action": &map { surface_id: product-map, source_id: map-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.map-field-border": *map
    "tokens.typography.family.ui": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.section-title.size": *home
    "tokens.typography.section-title.weight": *home
    "tokens.typography.section-title.lineHeight": *home
    "tokens.typography.section-title.use": *home
    "tokens.typography.map-control.size": *map
    "tokens.typography.map-control.weight": *map
    "tokens.typography.map-control.lineHeight": *map
    "tokens.typography.map-control.use": *map
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.rounded.compact": *home
    "tokens.rounded.standard": *home
    "tokens.rounded.map-tool": *map
    "tokens.rounded.search-entry": *home
    "tokens.rounded.map-search": *map
    "tokens.components.header-account-control.hover": { surface_id: product-home, source_id: home-capture, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"4\"]::state-hover", captured: "2026-07-13" }
    "tokens.components.header-account-control.pressed": { surface_id: product-home, source_id: home-capture, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"4\"]::state-pressed", captured: "2026-07-13" }
    "tokens.components.header-account-control.type": *home
    "tokens.components.header-account-control.bg": *home
    "tokens.components.header-account-control.fg": *home
    "tokens.components.header-account-control.radius": *home
    "tokens.components.header-account-control.padding": *home
    "tokens.components.header-account-control.font": *home
    "tokens.components.header-account-control.states": *home
    "tokens.components.header-account-control.use": *home
    "tokens.components.header-outline-action.hover": { surface_id: product-home, source_id: home-capture, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"5\"]::state-hover", captured: "2026-07-13" }
    "tokens.components.header-outline-action.pressed": { surface_id: product-home, source_id: home-capture, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"5\"]::state-pressed", captured: "2026-07-13" }
    "tokens.components.header-outline-action.type": *home
    "tokens.components.header-outline-action.fg": *home
    "tokens.components.header-outline-action.border": *home
    "tokens.components.header-outline-action.radius": *home
    "tokens.components.header-outline-action.padding": *home
    "tokens.components.header-outline-action.font": *home
    "tokens.components.header-outline-action.states": *home
    "tokens.components.header-outline-action.use": *home
    "tokens.components.map-location-search.type": *map
    "tokens.components.map-location-search.bg": *map
    "tokens.components.map-location-search.fg": *map
    "tokens.components.map-location-search.border": *map
    "tokens.components.map-location-search.radius": *map
    "tokens.components.map-location-search.padding": *map
    "tokens.components.map-location-search.font": *map
    "tokens.components.map-location-search.states": *map
    "tokens.components.map-location-search.use": *map
    "tokens.components.map-dock-control.hover": { surface_id: product-map, source_id: map-capture, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"14\"]::state-hover", captured: "2026-07-13" }
    "tokens.components.map-dock-control.pressed": { surface_id: product-map, source_id: map-capture, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"14\"]::state-pressed", captured: "2026-07-13" }
    "tokens.components.map-dock-control.type": *map
    "tokens.components.map-dock-control.bg": *map
    "tokens.components.map-dock-control.fg": *map
    "tokens.components.map-dock-control.border": *map
    "tokens.components.map-dock-control.radius": *map
    "tokens.components.map-dock-control.padding": *map
    "tokens.components.map-dock-control.font": *map
    "tokens.components.map-dock-control.states": *map
    "tokens.components.map-dock-control.use": *map
    "tokens.components.header-nav-link.type": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.bg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.fg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.radius": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.padding": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.height": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.font": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.selected": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.hover": { surface_id: product-home, source_id: home-capture, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"1\"]::state-hover", captured: "2026-07-13" }
    "tokens.components.header-nav-link.pressed": { surface_id: product-home, source_id: home-capture, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"1\"]::state-pressed", captured: "2026-07-13" }
    "tokens.components.header-nav-link.states": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.use": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.type": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.bg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.fg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.border": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.radius": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.padding": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.height": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.font": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.states": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-filter-chip.use": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-07-13" }
    "tokens.components.home-search-input.type": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.home-search-input.bg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.home-search-input.fg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.home-search-input.padding": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.home-search-input.size": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.home-search-input.font": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.home-search-input.states": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.home-search-input.use": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.home-entry-card.type": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.home-entry-card.bg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.home-entry-card.border": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.home-entry-card.radius": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.home-entry-card.padding": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.home-entry-card.size": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.home-entry-card.states": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.home-entry-card.use": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.home-accent-card.type": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"43\"]", captured: "2026-07-13" }
    "tokens.components.home-accent-card.bg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"43\"]", captured: "2026-07-13" }
    "tokens.components.home-accent-card.border": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"43\"]", captured: "2026-07-13" }
    "tokens.components.home-accent-card.radius": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"43\"]", captured: "2026-07-13" }
    "tokens.components.home-accent-card.padding": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"43\"]", captured: "2026-07-13" }
    "tokens.components.home-accent-card.size": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"43\"]", captured: "2026-07-13" }
    "tokens.components.home-accent-card.states": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"43\"]", captured: "2026-07-13" }
    "tokens.components.home-accent-card.use": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"43\"]", captured: "2026-07-13" }
    "tokens.components.map-tool-button.type": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.map-tool-button.bg": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.map-tool-button.fg": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.map-tool-button.radius": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.map-tool-button.padding": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.map-tool-button.size": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.map-tool-button.font": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.map-tool-button.hover": { surface_id: product-map, source_id: map-capture, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"22\"]::state-hover", captured: "2026-07-13" }
    "tokens.components.map-tool-button.pressed": { surface_id: product-map, source_id: map-capture, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"22\"]::state-pressed", captured: "2026-07-13" }
    "tokens.components.map-tool-button.states": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.map-tool-button.use": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"25\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.type": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.bg": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.fg": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.border": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.radius": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.padding": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.size": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.font": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.selected": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.states": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-side-nav-link.use": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.type": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.bg": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.fg": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.border": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.radius": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.padding": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.height": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.font": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.states": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.map-dark-pill-button.use": { surface_id: product-map, source_id: map-capture, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.footer-app-link.type": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"70\"]", captured: "2026-07-13" }
    "tokens.components.footer-app-link.bg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"70\"]", captured: "2026-07-13" }
    "tokens.components.footer-app-link.fg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"70\"]", captured: "2026-07-13" }
    "tokens.components.footer-app-link.radius": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"70\"]", captured: "2026-07-13" }
    "tokens.components.footer-app-link.padding": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"70\"]", captured: "2026-07-13" }
    "tokens.components.footer-app-link.height": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"70\"]", captured: "2026-07-13" }
    "tokens.components.footer-app-link.font": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"70\"]", captured: "2026-07-13" }
    "tokens.components.footer-app-link.states": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"70\"]", captured: "2026-07-13" }
    "tokens.components.footer-app-link.use": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"70\"]", captured: "2026-07-13" }
    "tokens.components.footer-primary-button.type": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-07-13" }
    "tokens.components.footer-primary-button.bg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-07-13" }
    "tokens.components.footer-primary-button.fg": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-07-13" }
    "tokens.components.footer-primary-button.radius": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-07-13" }
    "tokens.components.footer-primary-button.padding": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-07-13" }
    "tokens.components.footer-primary-button.height": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-07-13" }
    "tokens.components.footer-primary-button.font": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-07-13" }
    "tokens.components.footer-primary-button.states": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-07-13" }
    "tokens.components.footer-primary-button.use": { surface_id: product-home, source_id: home-capture, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.type": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.bg": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.fg": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.border": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.radius": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.size": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.font": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.selected": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"7\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.states": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-category-tab.use": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-row.type": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-row.bg": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-row.border": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-row.padding": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-row.size": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-row.states": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-07-13" }
    "tokens.components.support-faq-row.use": { surface_id: support-faq, source_id: faq-capture, method: computed-style, selector: "surface-3::[data-omd-capture=\"10\"]", captured: "2026-07-13" }
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Values are limited to selector-backed home and map observations in the supplied evidence. The support FAQ is documentation chrome, not a product-token source."
  colors:
    canvas: "#ffffff"
    foreground: "#222222"
    border: "#dfdfdf"
    surface-muted: "#f5f5f5"
    action: "#326cf9"
    map-field-border: "#ededed"
  typography:
    family: { ui: "Pretendard Variable" }
    body: { size: 14, weight: 400, lineHeight: "24px", use: "Repeated public home and map text/control cluster" }
    section-title: { size: 20, weight: 700, lineHeight: "32px", use: "Public-home section-title sample" }
    map-control: { size: 14, weight: 400, lineHeight: "24px", use: "Map location-search and dock-control samples" }
  spacing: { xs: 4, sm: 8, md: 16 }
  rounded: { compact: 2, standard: 8, map-tool: 6, search-entry: 32, map-search: 42 }
  components:
    header-account-control: { type: button, bg: "#ffffff", fg: "#222222", radius: "8px", padding: "8px 16px", font: "16px / 400 Pretendard Variable", states: "rest on the header account button on all three routes (capture 4 on home and FAQ, 5 on the map); hover and pressed sampled on all three, all six frames recording bg #f5f5f5; focus not declared. Corrected 2026-09-30: this string read default only while the hover and pressed values were already declared", use: "Shared public header account control; home::[data-omd-capture=4]" , hover: "bg #f5f5f5", pressed: "bg #f5f5f5"}
    header-outline-action: { type: button, fg: "#222222", border: "1px solid #dfdfdf", radius: "2px", padding: "0px 16px", font: "14px / 700 Pretendard Variable", states: "rest on six outline actions, two per route (capture 5-6 on home and FAQ, 6-7 on the map); hover and pressed sampled on all six, all twelve frames recording an opaque bg #fcfcfc over the transparent rest; focus not declared. Corrected 2026-09-30: this string read default only while the hover and pressed values were already declared", use: "Shared public header outline action; home::[data-omd-capture=5]" , hover: "bg #fcfcfc", pressed: "bg #fcfcfc"}
    map-location-search: { type: input, bg: "#ffffff", fg: "#222222", border: "1px solid #ededed", radius: "42px", padding: "7px 37px 7px 15px", font: "14px / 400 Pretendard Variable", states: "default captured; its one focus frame moves only the padding (to 7px 37.7506px 7px 19.1284px), a partial value, and no focus state is declared from this capture", use: "Map location-search field; surface-2::[data-omd-capture=1]" }
    map-dock-control: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #dfdfdf", radius: "2px", padding: "0px 7px 0px 11px", font: "14px / 400 Pretendard Variable", states: "rest on five dock buttons (capture 14-18); hover and pressed sampled on all five and on the icon-only dock button beside them (capture 19), all twelve frames recording bg #ededed; focus not declared. Corrected 2026-09-30: this string read default only while the hover and pressed values were already declared", use: "Map dock control; surface-2::[data-omd-capture=14]" , hover: "bg #ededed", pressed: "bg #ededed"}
    header-nav-link: { type: tab, bg: "#ffffff", fg: "#222222", radius: "8px", padding: "8px 16px", height: "42px", font: "16px / 400 / 26px Pretendard Variable", selected: "fg #326cf9", hover: "bg #f5f5f5", pressed: "bg #f5f5f5", states: "rest on eight header links (capture 1-3 on home and FAQ, 3-4 on the map); the map-route link with class active (capture 2) records fg #326cf9 where its siblings record #222222, so it is declared selected; hover and pressed sampled on all nine links, all eighteen frames recording bg #f5f5f5; focus not declared", use: "Shared public header navigation link (a) at home::[data-omd-capture=\"1\"], 60 x 42; same geometry and type as the header account control" }
    home-filter-chip: { type: button, bg: "#ffffff", fg: "#222222", border: "1px #dfdfdf", radius: "32px", padding: "0px 11px", height: "32px", font: "14px / 700 / 24px Pretendard Variable", states: "rest on five chips (capture 18-22); the first chip (capture 17) records bg #222222, fg #ffffff and border 1px #222222, but only a generated class separates it, so no selected state is declared; no state frame on any chip", use: "Public-home pill chip (button) at home::[data-omd-capture=\"18\"], 81 x 32" }
    home-search-input: { type: input, bg: "transparent", fg: "#222222", padding: "11px 23px 11px 56px", size: "680px x 48px", font: "16px / 400 / 26px Pretendard Variable", states: "default captured; its pressed and focus frames both change only the padding (to 11px 56px), a focus effect, so neither is declared", use: "Public-home search input at home::[data-omd-capture=\"7\"]; its border width is 0px, so no field border is claimed" }
    home-entry-card: { type: card, bg: "#ffffff", border: "1px #ededed", radius: "12px", padding: "20px", size: "333px x 178px", states: "default on five cards (capture 8-12; the second row measures 217 x 172); their pressed frames record only the browser default active-link red on the container, which is not a state value", use: "Public-home card link (a) at home::[data-omd-capture=\"8\"]; a container whose own colour is the browser default link blue, so no label style is claimed" }
    home-accent-card: { type: card, bg: "#f0f0f0", border: "3px #396bf3 on the top edge", radius: "3px", padding: "33px 20px 30px 30px", size: "233px x 330px", states: "default on three cards (capture 43-45); no state frame", use: "Public-home card link with a top accent (a) at home::[data-omd-capture=\"43\"]; a container, so its own colour is not claimed as a label style" }
    map-tool-button: { type: button, bg: "#ffffff", fg: "#222222", radius: "0px", padding: "6px", size: "36px x 36px", font: "12px / 400 / 20px Pretendard Variable", hover: "fg #326cf9, weight 700", pressed: "fg #326cf9, bg #eef8ff, weight 700", states: "rest on the stacked map tool buttons (capture 22-29; the top one has 6px 6px 0px 0px corners, the bottom one 0px 0px 6px 6px, the middle ones 0px); hover and pressed sampled on the top and bottom buttons (capture 22, 23), the two agreeing in each frame; #326cf9 is the rest colour of the selected map links and #eef8ff the selected side-navigation fill; focus not declared", use: "Map-route tool button stack at surface-2::[data-omd-capture=\"25\"]; captures 22 and 23 have no text node, so their colour is the computed colour an icon can inherit" }
    map-side-nav-link: { type: tab, bg: "transparent", fg: "#434343", border: "1px transparent", radius: "4px", padding: "0px", size: "70px x 64px", font: "12px / 500 / 20px Pretendard Variable", selected: "bg #eef8ff, fg #326cf9, border 1px #326cf9, 12px / 700", states: "rest on four links (capture 9-12); the link with class active (capture 8) differs from them and is recorded as selected; their hover, pressed and focus frames record partial values (background alpha 0.024 to 0.067, weights 501 to 513), transition frames, so none is declared", use: "Map-route side navigation link (a) at surface-2::[data-omd-capture=\"9\"]" }
    map-dark-pill-button: { type: button, bg: "#222222", fg: "#ffffff", border: "1px #222222", radius: "32px", padding: "0px 16px", height: "32px", font: "14px / 700 / 24px Pretendard Variable", states: "default captured on one element; no state frame", use: "Map-route dark pill button at surface-2::[data-omd-capture=\"20\"], 58 x 32" }
    footer-app-link: { type: button, bg: "#515151", fg: "#e5e5e5", radius: "2px", padding: "0px 9px", height: "30px", font: "12px / 400 / 12px Pretendard Variable", states: "default on three links on home (capture 70-72) and three on the FAQ route (capture 22-24); no state frame", use: "Footer link button (a) at home::[data-omd-capture=\"70\"], 112 x 30" }
    footer-primary-button: { type: button, bg: "#326cf9", fg: "#ffffff", radius: "2px", padding: "0px 9px", height: "30px", font: "12px / 700 / 20px Pretendard Variable", states: "default on home (capture 73) and the FAQ route (capture 25); no state frame", use: "Footer button at home::[data-omd-capture=\"73\"], 98 x 30" }
    support-faq-category-tab: { type: tab, bg: "#ffffff", fg: "#222222", border: "1px #ededed", radius: "0px", size: "394px x 64px", font: "16px / 400 / 26px Pretendard Variable", selected: "bg #222222, fg #ffffff, border 1px #222222, 16px / 700", states: "rest on two tabs (capture 8, 9); the tab with class active (capture 7) differs from them and is recorded as selected; no state frame", use: "Support FAQ category tab (a) at surface-3::[data-omd-capture=\"8\"]; support-documentation chrome, not a product token" }
    support-faq-row: { type: button, bg: "transparent", border: "1px #f5f5f5 on the bottom edge", padding: "16px 20px", size: "1180px x 65px", states: "default on five rows (capture 10-14); no state frame", use: "Support FAQ disclosure row (button) at surface-3::[data-omd-capture=\"10\"]; its own #000000 and 13.3333px / 400 are the browser button defaults (the label sits in a child), so no label style is claimed; support-documentation chrome" }
  components_harvested: true
---

# Design System Inspiration of Dabang (다방)

## 1. Visual Theme & Atmosphere

Dabang is Station3’s residential-information service: the company presents Dabang alongside its broker and landlord services, while the service terms describe a platform where individual users, licensed brokers, and landlords can find or register property information. The current public web product is deliberately utilitarian rather than a brand campaign. Its home and map routes use a white field, dark neutral text, compact controls, and one loaded `Pretendard Variable` family to make browsing and filtering legible. The notable product expression is geometric rather than decorative: an 8px header control, 2px outlined actions, a 32px home-search pill, and a 42px map-search pill coexist because they serve different contexts.

The supplied evidence establishes three separate source domains: the home and map as product surfaces, the FAQ as support-documentation chrome, and Station3’s service page as corporate context. This reference does not turn support controls or corporate messaging into universal product tokens.

## Primary tasks

- Search housing information and move from there into an inquiry
- Look for a place on the map by location
- Register property information on the service as a licensed broker
- List a property for rent as a landlord

## 2. Color Palette & Roles

- `#FFFFFF` — observed public home/map canvas and control background.
- `#222222` — repeated home/map foreground and control text.
- `#DFDFDF` — repeated outline border on public header and map dock controls.
- `#F5F5F5` — observed muted surface; it is also the hover and pressed fill of the header links and account control (§4), a header-local state rather than a global interaction rule.
- `#EDEDED` — map location-search border.
- `#326CF9` — map-route action colour: the rest ink of the selected header link and of the selected side-navigation link (with a 1px `#326CF9` border), the hover and pressed ink of the map tool buttons, and the fill of the footer button. Corrected 2026-09-30: the July text called it the map tool's default treatment, but the tool buttons rest at `#222222`; the blue is their hover and pressed frame. The evidence supports it as a map and footer action colour, not a universal Dabang CTA rule.
- Component-local colours recorded in §4, not promoted to palette roles: `#434343` (map side-navigation text), `#EEF8FF` (selected side-navigation fill and pressed map-tool fill), `#FCFCFC` (hover and pressed fill of the header outline actions), `#F0F0F0` with a 3px `#396BF3` top edge (home accent cards), and `#515151` with `#E5E5E5` text (footer link buttons).

The pink value in frontmatter is catalog identity metadata. It was not established as a reusable current product-control token by this supplied capture, so it is not silently substituted for the map action color.

## 3. Typography Rules

### Verified visible UI family

`Pretendard Variable` is the only family promoted to `tokens.typography.family.ui`. The supplied bundle records 376 visible first-family uses across body text, headings, buttons, inputs, and lists; it is marked `loaded` with high confidence and is corroborated by 92 Dabang-hosted dynamic-subset WOFF2 source URLs. That is computed use plus FontFaceSet/source corroboration, not an inference from a CSS declaration.

| Role | Observed value | Surface boundary |
|---|---|---|
| Body/control cluster | 14px / 400 / 24px | Repeated on the public home and map routes |
| Home section title | 20px / 700 / 32px | Public home heading sample |
| Map input/dock control | 14px / 400 / 24px | Map search and dock-control samples |
| Support FAQ display | 46px / 700 / 70px | Support-documentation route only; not a product type token |

| Evidence class | Resolution |
|---|---|
| **Official product-use** | No separate Dabang typography announcement was found in the checked official sources. |
| **Live computed surface-use** | `Pretendard Variable` is loaded/high and visibly used across all three supplied routes. |
| **Official distributed asset** | Pretendard’s upstream project distributes the family under SIL Open Font License 1.1. This explains the font asset but does not itself prove Dabang use. |
| **Declared-only** | No additional family is promoted from declarations because the supplied bundle reports only the loaded, visible Pretendard family. |
| **Unresolved** | Native-app typography metrics and a Dabang-owned font licence/asset are not established by these public web sources. |

## 4. Components

### Header account control

**Default**
- Background: `#FFFFFF`
- Text: `#222222`
- Radius: `8px`
- Padding: `8px 16px`
- Font: `16px / 400 Pretendard Variable`
- Hover and pressed: background `#F5F5F5` (the account button on all three routes; six frames agree)
- Use: Shared public header account control on the product home; `home::[data-omd-capture="4"]`.

### Header outline action

**Default**
- Text: `#222222`
- Border: `1px solid #DFDFDF`
- Radius: `2px`
- Padding: `0px 16px`
- Font: `14px / 700 Pretendard Variable`
- Hover and pressed: background `#FCFCFC`, opaque over the transparent rest (six actions, twelve frames agree)
- Use: Shared public header outline action; `home::[data-omd-capture="5"]`.

### Map location search

**Default**
- Background: `#FFFFFF`
- Text: `#222222`
- Border: `1px solid #EDEDED`
- Radius: `42px`
- Padding: `7px 37px 7px 15px`
- Font: `14px / 400 Pretendard Variable`
- Use: Map location-search field; `surface-2::[data-omd-capture="1"]`.

### Map dock control

**Default**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: `1px solid #DFDFDF`
- Radius: `2px`
- Padding: `0px 7px 0px 11px`
- Font: `14px / 400 Pretendard Variable`
- Hover and pressed: background `#EDEDED` (five dock buttons and the icon-only dock button, capture 19; twelve frames agree)
- Use: Map dock control; `surface-2::[data-omd-capture="14"]`.

### Support FAQ row

**Default**
- Border: `1px solid #F5F5F5` on the block end
- Padding: `16px 20px`
- Use: Support-documentation FAQ row (`support-faq-row`); `surface-3::[data-omd-capture="10"]`, five rows. It is documented here as support chrome, not promoted into product tokens.
- Corrected 2026-09-30: the July text gave this row `#000000` text and `13.3333px / 400` type. Those are the browser's defaults for a `button` element that sets neither; the row's label sits in a child the capture did not sample, so no label style is claimed.

### Header navigation link

**Default** (`header-nav-link`)
- Background: `#FFFFFF`
- Text: `#222222`
- Radius: `8px`
- Padding: `8px 16px`
- Height: `42px`
- Font: `16px / 400 / 26px Pretendard Variable`
- Hover and pressed: background `#F5F5F5`
- Selected: text `#326CF9` on the map route
- Use: `home::[data-omd-capture="1"]`. Eight rest links (home and FAQ captures 1–3, map captures 3–4) and the active map link share this geometry; all eighteen hover and pressed frames on the nine links record `#F5F5F5`. The map link with class `active` (`surface-2::[data-omd-capture="2"]`) records `#326CF9` where its siblings record `#222222`.

### Public-home controls

**Pill chip** (`home-filter-chip`): background `#FFFFFF`, text `#222222`, border 1px `#DFDFDF`, `32px` radius, `0px 11px`, `32px` high, `14px / 700 / 24px Pretendard Variable`; `home::[data-omd-capture="18"]` through `"22"`. The first chip (capture 17) records background `#222222`, text `#FFFFFF` and border 1px `#222222`; only a generated class separates it, so it is described, not declared as selected.

**Search input** (`home-search-input`): transparent, text `#222222`, `11px 23px 11px 56px` padding, 680px × 48px, `16px / 400 / 26px Pretendard Variable`, border width 0px; `home::[data-omd-capture="7"]`. Its pressed and focus frames change only the padding (to `11px 56px`).

**Entry card** (`home-entry-card`): background `#FFFFFF`, border 1px `#EDEDED`, `12px` radius, `20px` padding, 333px × 178px (the second row 217px × 172px); `home::[data-omd-capture="8"]` through `"12"`. The card is a link container whose own colour is the browser's default link blue, so no label style is claimed.

**Accent card** (`home-accent-card`): background `#F0F0F0`, a 3px `#396BF3` top edge, `3px` radius, `33px 20px 30px 30px` padding, 233px × 330px; `home::[data-omd-capture="43"]` through `"45"`. Also a link container; no label style is claimed.

### Map-route controls

**Tool buttons** (`map-tool-button`): background `#FFFFFF`, text `#222222`, `6px` padding, 36px × 36px, `12px / 400 / 20px Pretendard Variable`; the stack's top button has `6px 6px 0px 0px` corners, the bottom one `0px 0px 6px 6px`, the middle ones square; `surface-2::[data-omd-capture="25"]` (captures 22–29). Hover: text `#326CF9`, weight 700. Pressed: text `#326CF9`, background `#EEF8FF`, weight 700. The top and bottom buttons (captures 22 and 23) agree in each frame, and both colours are rest colours elsewhere on the route.

**Side navigation link** (`map-side-nav-link`): transparent, text `#434343`, border 1px transparent, `4px` radius, 70px × 64px, `12px / 500 / 20px Pretendard Variable`; `surface-2::[data-omd-capture="9"]` through `"12"`. Selected (class `active`, capture 8): background `#EEF8FF`, text `#326CF9`, border 1px `#326CF9`, 700. Its hover, pressed and focus frames are transition frames (see How states were read).

**Dark pill button** (`map-dark-pill-button`): background `#222222`, text `#FFFFFF`, border 1px `#222222`, `32px` radius, `0px 16px`, `32px` high, `14px / 700 / 24px Pretendard Variable`; `surface-2::[data-omd-capture="20"]`.

### Footer controls

**Link button** (`footer-app-link`): background `#515151`, text `#E5E5E5`, `2px` radius, `0px 9px`, `30px` high, `12px / 400 / 12px Pretendard Variable`; `home::[data-omd-capture="70"]` through `"72"` (FAQ captures 22–24).

**Primary button** (`footer-primary-button`): background `#326CF9`, text `#FFFFFF`, `2px` radius, `0px 9px`, `30px` high, `12px / 700 / 20px Pretendard Variable`; `home::[data-omd-capture="73"]` (FAQ capture 25).

### Support FAQ category tab

**Default** (`support-faq-category-tab`): background `#FFFFFF`, text `#222222`, border 1px `#EDEDED`, square corners, 394px × 64px, `16px / 400 / 26px Pretendard Variable`; `surface-3::[data-omd-capture="8"]` and `"9"`. Selected (class `active`, capture 7): background `#222222`, text `#FFFFFF`, border 1px `#222222`, 700. Support-documentation chrome, not a product token.

### How states were read

A state frame is the computed style the collector recorded with the pointer over an element (hover) or pressed on it; `interactionCount: 0` counts menu, dialog, and tab expansions and says nothing about these frames. Corrected 2026-09-30: the July text read the zero count as meaning the frames were not state evidence. Settled frames are declared above: the header links and account control, the header outline actions, the map dock buttons, and the map tool buttons. The map side-navigation frames (background alpha 0.024 to 0.067 and weights 501 to 513 on a variable font, disagreeing within one class) and the search inputs' padding moves are transition or focus effects and are not declared. Container links on home record only the browser's default link colours (blue at rest, red while pressed), which are not state values. No focus value is declared: the collector presses the mouse before focusing, which leaves `:focus-visible` false. No menu, dialog, validation, disabled, loading, or responsive variant is claimed.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.dabangapp.com/` (product home), `https://www.dabangapp.com/map/onetwo?m_lat=37.494367328004216&m_lng=127.01446798508894&m_zoom=11` (product map), `https://www.dabangapp.com/service/faq` (support documentation), `https://www.station3.co.kr/service/` (official company/service context), `https://static.dabangapp.com/html/useragreement.html` (official service and stakeholder context), `https://github.com/orioncactus/pretendard` (upstream font context), and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (font licence).
**Tier 2 sources:** `https://getdesign.md/dabang` (attempted; built-in web open safe-open failure and name search returned no record), `https://styles.refero.design/?q=dabang` (attempted; built-in web open safe-open failure and name search returned no record).
**Conflicts unresolved:** none

The earlier reference’s full semantic colour ramps, pink-as-global-brand-control rule, status meanings, map-marker semantics, universal 8px layout system, zero-shadow universal rule, and unobserved interaction/motion matrices were rolled back. The supplied 2026 bundle does not substantiate them as reusable product claims.

## 5. Layout Principles

- The home and map are distinct product compositions: home exposes a 32px-radius search-entry control, while the map route uses a 42px location-search field and compact dock controls.
- Repeated observed spacing values support only a conservative `4 / 8 / 16px` set. They do not establish a full layout grid, rail width, map-canvas percentage, or breakpoint contract.
- The FAQ uses a separate support-documentation layout. Its 16px/20px row padding must not be treated as map or listing-card spacing.

## 6. Depth & Elevation

The selector-backed product controls retained in §4 report `box-shadow: none`. This is useful evidence for those controls, but not proof of a global zero-elevation system: the supplied routes do not establish cards, markers, drawers, or native-app elevation. Use flat borders and surfaces only where a retained component names them; label any broader shadow system as a local extension.

## 7. Do's and Don'ts

### Do

- Keep home, map, support-documentation, and corporate-context evidence explicitly separated.
- Use `Pretendard Variable` only where its loaded public-web evidence applies; retain a normal runtime fallback in an implementation.
- Preserve the observed 32px home-search and 42px map-search geometries as separate controls.
- Use `#326CF9` only for the documented map-route selection and tool states and the footer button unless a broader product source verifies it.
- Build the retained outline controls from their explicit border, radius, padding, and type values.

### Don't

- Don't promote the frontmatter pink identity color into a current universal CTA or status color.
- Don't represent the FAQ disclosure row as a product-listing, modal, or accordion component contract.
- Don't infer hover, pressed, focus, disabled, error, or loading states beyond the settled frames declared in §4; transition frames, focus frames, and the browser's default link colours in the capture are not state values. (Corrected 2026-09-30: the July rule tied this to the zero interaction-expansion count, which does not describe these frames.)
- Don't substitute a system font as if it were loaded Pretendard Variable.
- Don't invent map markers, card elevation, breakpoints, icon geometry, or motion values absent from the supplied evidence.

## 8. Responsive Behavior

The supplied evidence uses a 1440×900 viewport for all three routes. It does not verify mobile breakpoints, map drawer behavior, native safe areas, or listing density at another viewport. Treat the current dimensions as desktop public-web observations only.

## 9. Agent Prompt Guide

- “Create a Dabang public-home account control with a white background, `#222222` text, 8px radius, 8px 16px padding, and 16px/400 Pretendard Variable.”
- “Create a Dabang map location-search field with a white background, 1px `#EDEDED` border, 42px radius, 7px 37px 7px 15px padding, and 14px/400 Pretendard Variable.”
- “Create a map dock control from the selector-backed default and its measured hover and pressed fill `#EDEDED`; do not add focus, disabled, or selected states as verified Dabang behaviour.”
- “If a component is not listed here, mark it as an extension rather than presenting it as a verified Dabang product component.”

## 10. Voice & Tone

The official service context centres on housing information and on connecting the people who search for, list, and manage a property: individual users, licensed brokers, and landlords. That makes the reliable voice direction practical and role-aware. Name the property task, make the next action clear, and distinguish information provided by the platform from content entered by a user or broker. Avoid a campaign-like promise, a demographic stereotype, or an implication that the platform itself is a party to a property transaction.

## 11. Brand Narrative

Station3 publicly positions Dabang beside Dabang Pro and Dabang Bangjoo-in: consumer property discovery, broker workflow, and landlord-management services are related but different offerings. The service terms make the platform boundary equally explicit: Dabang provides real-estate information and a place for registered content, while users, landlords, and brokers provide the relevant listings and conduct their own transactions.

The current public web UI reflects that operational role. Its controlled neutral palette and compact map controls prioritize a finding/filtering task rather than a decorative real-estate lifestyle story. The pink identity colour remains catalog metadata in this revision because the supplied web evidence does not show it as a reusable product-control rule.

## 12. Principles

1. **Separate source domains.** Home/map evidence, FAQ chrome, and Station3 corporate copy have different authority.
   *UI implication:* do not merge their component values into one synthetic library.
2. **Keep property tasks explicit.** The terms distinguish search, listing, and transaction roles.
   *UI implication:* name the task and actor instead of using vague conversion language.
3. **Use action blue locally.** `#326CF9` is verified in the map-route selection and tool states and on the footer button.
   *UI implication:* expand its use only after a specific product component provides evidence.
4. **Preserve measured geometry.** The two search pills differ by route and purpose.
   *UI implication:* keep the 32px and 42px radii distinct rather than averaging them.

## 13. Personas

These are service-role contexts from the official terms and Station3 service page, not invented demographic personas.

- **Property seeker:** searches public housing information and needs a clear route into filtering or inquiry.
- **Licensed broker:** can register and provide permitted property information through the service.
- **Landlord:** can provide a listing for rental and needs the platform’s registration boundary made clear.

## 14. States

| Evidence area | Verified state boundary |
|---|---|
| Header links, account control and outline actions | Hover and pressed: background `#F5F5F5` (links, account control) and `#FCFCFC` (outline actions); the map-route link with class `active` is selected with text `#326CF9` |
| Map dock control | Hover and pressed: background `#EDEDED` |
| Map tool buttons | Hover: text `#326CF9`, 700; pressed: text `#326CF9`, background `#EEF8FF`, 700 |
| Map side navigation | Selected (class `active`): background `#EEF8FF`, text and 1px border `#326CF9`, 700; its pointer frames are transition frames |
| Map location search, home search, chips, cards, footer controls | Default visual values only |
| Support FAQ category tab and row | Tab selected (class `active`): background `#222222`, text `#FFFFFF`; row default only |

Corrected 2026-09-30: the July table listed default values only because no interaction expansion was retained; the capture's hover and pressed frames are measurements in their own right. Focus, disabled, error, empty, loading, success, skeleton, menu, dialog, and toast contracts remain unclaimed.

## 15. Motion & Easing

No motion duration, easing curve, or animation behaviour is promoted. The static supplied capture has no interaction records, and any motion implementation must be treated as a local extension with reduced-motion support rather than as verified Dabang behaviour.
