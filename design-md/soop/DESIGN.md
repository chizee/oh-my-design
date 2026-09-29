---
id: soop
name: "숲"
display_name_kr: "숲"
country: KR
category: consumer-tech
homepage: "https://www.sooplive.co.kr/"
primary_color: "#0182ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sooplive.co.kr&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-14"
  surfaces:
    - { id: home, kind: public-product-home, url: "https://www.sooplive.com/", inspected: "2026-07-13" }
    - { id: home-repeat, kind: duplicate-public-product-home, url: "https://www.sooplive.com/", inspected: "2026-07-13" }
    - { id: esports, kind: public-product-esports, url: "https://esports.sooplive.com/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.sooplive.com/", captured: "2026-07-13" }
    - { id: esports-live, kind: product-surface, url: "https://esports.sooplive.com/", captured: "2026-07-13" }
    - { id: brand-guide, kind: official-doc, url: "https://res.sooplive.com/policy/contents/brand_guide.html", captured: "2026-07-14" }
    - { id: creative-guide, kind: brand-asset, url: "https://static.file.sooplive.co.kr/da_guide_file/2024/10/24/SOOP_CreativeGuide.pdf", captured: "2026-07-14" }
    - { id: esg-overview, kind: official-doc, url: "https://corp.sooplive.com/esg/2024/index.php?page=overview", captured: "2026-07-14" }
    - { id: esg-user-feedback, kind: official-doc, url: "https://corp.sooplive.com/esg/2023/index.php?page=winwin", captured: "2026-07-14" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-14" }
  claims:
    "tokens.colors.primary": &homeComputed { surface_id: home, source_id: home-live, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.colors.surface-subtle": *homeComputed
    "tokens.colors.foreground": *homeComputed
    "tokens.colors.muted": *homeComputed
    "tokens.colors.chip-surface": *homeComputed
    "tokens.typography.family.ui": { surface_id: home, source_id: home-live, method: computed-family-backed-by-loaded-font-face, captured: "2026-07-13" }
    "tokens.typography.body.size": *homeComputed
    "tokens.typography.body.weight": *homeComputed
    "tokens.typography.body.lineHeight": *homeComputed
    "tokens.typography.body.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.typography.list-title.size": *homeComputed
    "tokens.typography.list-title.weight": *homeComputed
    "tokens.typography.list-title.lineHeight": *homeComputed
    "tokens.typography.list-title.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.spacing.search-input-inline-start": *homeComputed
    "tokens.spacing.search-input-inline-end": *homeComputed
    "tokens.spacing.chip-inline": *homeComputed
    "tokens.rounded.search-input": *homeComputed
    "tokens.rounded.chip": *homeComputed
    "tokens.shadow.none": *homeComputed
    "tokens.components.home-search-input.type": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.components.home-search-input.bg": *homeComputed
    "tokens.components.home-search-input.fg": *homeComputed
    "tokens.components.home-search-input.radius": *homeComputed
    "tokens.components.home-search-input.padding": *homeComputed
    "tokens.components.home-search-input.height": *homeComputed
    "tokens.components.home-search-input.font": *homeComputed
    "tokens.components.home-search-input.states": { surface_id: home, source_id: home-live, method: no-interaction-recorded, captured: "2026-07-13" }
    "tokens.components.home-search-input.use": { surface_id: home, source_id: home-live, method: selector-provenance, captured: "2026-07-13" }
    "tokens.components.home-tag-chip.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-13" }
    "tokens.components.home-tag-chip.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-13" }
    "tokens.components.home-tag-chip.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-13" }
    "tokens.components.home-tag-chip.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-13" }
    "tokens.components.home-tag-chip.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-13" }
    "tokens.components.home-tag-chip.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-13" }
    "tokens.components.home-tag-chip.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-13" }
    "tokens.components.home-tag-chip.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-13" }
    "tokens.components.home-tag-chip.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-07-13" }
    "tokens.components.home-category-chip.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"57\"]", captured: "2026-07-13" }
    "tokens.components.home-category-chip.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"57\"]", captured: "2026-07-13" }
    "tokens.components.home-category-chip.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"57\"]", captured: "2026-07-13" }
    "tokens.components.home-category-chip.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"57\"]", captured: "2026-07-13" }
    "tokens.components.home-category-chip.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"57\"]", captured: "2026-07-13" }
    "tokens.components.home-category-chip.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"57\"]", captured: "2026-07-13" }
    "tokens.components.home-category-chip.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"57\"]", captured: "2026-07-13" }
    "tokens.components.home-category-chip.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"57\"]", captured: "2026-07-13" }
    "tokens.components.home-category-chip.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"57\"]", captured: "2026-07-13" }
    "tokens.components.home-profile-avatar.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"54\"]", captured: "2026-07-13" }
    "tokens.components.home-profile-avatar.border": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"54\"]", captured: "2026-07-13" }
    "tokens.components.home-profile-avatar.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"54\"]", captured: "2026-07-13" }
    "tokens.components.home-profile-avatar.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"54\"]", captured: "2026-07-13" }
    "tokens.components.home-profile-avatar.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"54\"]", captured: "2026-07-13" }
    "tokens.components.home-profile-avatar.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"54\"]", captured: "2026-07-13" }
    "tokens.components.home-nickname-link.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"55\"]", captured: "2026-07-13" }
    "tokens.components.home-nickname-link.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"55\"]", captured: "2026-07-13" }
    "tokens.components.home-nickname-link.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"55\"]", captured: "2026-07-13" }
    "tokens.components.home-nickname-link.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"55\"]", captured: "2026-07-13" }
    "tokens.components.home-nickname-link.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"55\"]", captured: "2026-07-13" }
    "tokens.components.home-nickname-link.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"55\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-title-link.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"56\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-title-link.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"56\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-title-link.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"56\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-title-link.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"56\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-title-link.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"56\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-title-link.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"56\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-thumbnail.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"53\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-thumbnail.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"53\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-thumbnail.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"53\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-thumbnail.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"53\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-thumbnail.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"53\"]", captured: "2026-07-13" }
    "tokens.components.home-broadcast-thumbnail.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"53\"]", captured: "2026-07-13" }
    "tokens.components.home-content-card.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-13" }
    "tokens.components.home-content-card.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-13" }
    "tokens.components.home-content-card.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-13" }
    "tokens.components.home-content-card.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-13" }
    "tokens.components.home-content-card.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-13" }
    "tokens.components.home-content-card.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"30\"]", captured: "2026-07-13" }
    "tokens.components.home-alarm-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"33\"]", captured: "2026-07-13" }
    "tokens.components.home-alarm-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"33\"]", captured: "2026-07-13" }
    "tokens.components.home-alarm-button.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"33\"]", captured: "2026-07-13" }
    "tokens.components.home-alarm-button.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"33\"]", captured: "2026-07-13" }
    "tokens.components.home-alarm-button.shadow": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"33\"]", captured: "2026-07-13" }
    "tokens.components.home-alarm-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"33\"]", captured: "2026-07-13" }
    "tokens.components.home-alarm-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"33\"]", captured: "2026-07-13" }
    "tokens.components.home-live-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-13" }
    "tokens.components.home-live-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-13" }
    "tokens.components.home-live-button.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-13" }
    "tokens.components.home-live-button.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-13" }
    "tokens.components.home-live-button.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-13" }
    "tokens.components.home-live-button.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-13" }
    "tokens.components.home-live-button.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-13" }
    "tokens.components.home-live-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-13" }
    "tokens.components.home-live-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-13" }
    "tokens.components.home-login-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-13" }
    "tokens.components.home-login-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-13" }
    "tokens.components.home-login-button.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-13" }
    "tokens.components.home-login-button.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-13" }
    "tokens.components.home-login-button.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-13" }
    "tokens.components.home-login-button.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-13" }
    "tokens.components.home-login-button.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-13" }
    "tokens.components.home-login-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-13" }
    "tokens.components.home-login-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-13" }
    "tokens.components.home-banner-thumb-tab.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::li", captured: "2026-07-13" }
    "tokens.components.home-banner-thumb-tab.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::li", captured: "2026-07-13" }
    "tokens.components.home-banner-thumb-tab.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::li", captured: "2026-07-13" }
    "tokens.components.home-banner-thumb-tab.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::li", captured: "2026-07-13" }
    "tokens.components.home-banner-thumb-tab.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::li", captured: "2026-07-13" }
    "tokens.components.home-banner-thumb-tab.selected": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::li", captured: "2026-07-13" }
    "tokens.components.home-banner-thumb-tab.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::li", captured: "2026-07-13" }
    "tokens.components.home-banner-thumb-tab.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::li", captured: "2026-07-13" }
    "tokens.components.esports-gnb-link.type": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-07-13" }
    "tokens.components.esports-gnb-link.bg": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-07-13" }
    "tokens.components.esports-gnb-link.fg": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-07-13" }
    "tokens.components.esports-gnb-link.border": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-07-13" }
    "tokens.components.esports-gnb-link.padding": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-07-13" }
    "tokens.components.esports-gnb-link.height": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-07-13" }
    "tokens.components.esports-gnb-link.font": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-07-13" }
    "tokens.components.esports-gnb-link.states": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-07-13" }
    "tokens.components.esports-gnb-link.use": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.type": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.bg": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.fg": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.border": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.radius": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.padding": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.height": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.font": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.states": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-filter-button.use": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"108\"]", captured: "2026-07-13" }
    "tokens.components.esports-status-badge.type": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"236\"]", captured: "2026-07-13" }
    "tokens.components.esports-status-badge.bg": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"236\"]", captured: "2026-07-13" }
    "tokens.components.esports-status-badge.fg": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"236\"]", captured: "2026-07-13" }
    "tokens.components.esports-status-badge.radius": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"236\"]", captured: "2026-07-13" }
    "tokens.components.esports-status-badge.padding": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"236\"]", captured: "2026-07-13" }
    "tokens.components.esports-status-badge.height": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"236\"]", captured: "2026-07-13" }
    "tokens.components.esports-status-badge.font": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"236\"]", captured: "2026-07-13" }
    "tokens.components.esports-status-badge.states": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"236\"]", captured: "2026-07-13" }
    "tokens.components.esports-status-badge.use": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"236\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.type": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.bg": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.fg": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.border": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.radius": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.padding": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.height": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.font": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.states": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
    "tokens.components.esports-accent-button.use": { surface_id: esports, source_id: esports-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"228\"]", captured: "2026-07-13" }
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only selector-backed public SOOP product-surface values are tokens. Corporate, brand-guide, advertising, esports, declared-only-font, and license evidence remain separate domains; no fallback or unobserved interaction value is promoted."
  colors:
    primary: "#0182ff"
    surface-subtle: "#f6f6f9"
    foreground: "#17191c"
    muted: "#757b8a"
    chip-surface: "#e8ebed"
  typography:
    family:
      ui: "Pretendard"
    body: { size: 14, weight: 400, lineHeight: "16.8px", use: "Repeated public-home text and the measured search input; the loaded product family is Pretendard." }
    list-title: { size: 15, weight: 400, lineHeight: "18px", use: "Observed public-home title and metadata samples only; no complete display scale is claimed." }
  spacing:
    search-input-inline-start: 16
    search-input-inline-end: 70
    chip-inline: 8
  rounded:
    search-input: 45
    chip: 30
  shadow:
    none: "none"
  components:
    home-search-input: { type: input, bg: "#f6f6f6", fg: "#525661", radius: "45px", padding: "0px 70px 0px 16px", height: "45px", font: "14px / 400 / 16.8px / Pretendard", states: "default on both home snapshots; the bundle holds no state frame for any element, so hover, focus, and pressed values are not recorded; no disabled or error variant was observed", use: "Repeated public-home input, selectors home::[data-omd-capture=\"2\"] and surface-2::[data-omd-capture=\"2\"]." }
    home-tag-chip: { type: badge, bg: "#f6f6f9", fg: "#757b8a", radius: "30px", padding: "0px 8px", height: "20px", font: "12px / 400 / 20px Pretendard", states: "default on 86 chips on the home snapshot and 21 on esports (surface-3 capture 182); the bundle holds no state frame", use: "Broadcast-card tag chip (a) at home::[data-omd-capture=\"65\"]" }
    home-category-chip: { type: badge, bg: "#e8ebed", fg: "#757b8a", radius: "30px", padding: "0px 8px", height: "20px", font: "12px / 400 / 20px Pretendard", states: "default on 42 chips on the home snapshot and 6 on esports (surface-3 capture 181); the bundle holds no state frame", use: "Broadcast-card category chip (a.category) at home::[data-omd-capture=\"57\"]" }
    home-profile-avatar: { type: avatar, border: "1px rgba(117, 123, 138, 0.2)", radius: "50%", size: "38px x 38px", states: "default on 24 avatars on the home snapshot and 6 on esports (surface-3 capture 178); the bundle holds no state frame", use: "Broadcast-card profile image link (a.thumb) at home::[data-omd-capture=\"54\"]; it holds no text, so no label style is claimed" }
    home-nickname-link: { type: button, fg: "#17191c", height: "18px", font: "14px / 600 / 18px Pretendard", states: "default on 24 links on the home snapshot and 6 on esports (surface-3 capture 179); the bundle holds no state frame", use: "Broadcast-card creator nickname link (a.nick) at home::[data-omd-capture=\"55\"]" }
    home-broadcast-title-link: { type: button, fg: "#17191c", height: "42px", font: "15px / 400 / 21px Pretendard", states: "default on 24 links on the home snapshot and 6 on esports (a.title, surface-3 capture 180); the bundle holds no state frame", use: "Broadcast-card title link (a) at home::[data-omd-capture=\"56\"], two 21px lines high" }
    home-broadcast-thumbnail: { type: card, bg: "#f1f2f4", radius: "16px", size: "271px x 152px", states: "default on 16 frames at 271 x 152 and 8 at 272 x 153 on the home snapshot; esports (a.thumb-default, surface-3 capture 177) records the same fill and radius at 220 x 124; the bundle holds no state frame", use: "Broadcast thumbnail frame (a) at home::[data-omd-capture=\"53\"]: the fill sits behind the image and a bottom padding (152.156px) sets the height; it holds no text, so no label style is claimed" }
    home-content-card: { type: card, bg: "#f6f6f9", radius: "15px", size: "369px x 110px", states: "default on 15 cards on the home snapshot; the bundle holds no state frame", use: "Home content-link card (a) at home::[data-omd-capture=\"30\"]; its own text colour and type equal the page body (#000000, 12px / 400 / 14.4px), so it is treated as a container and no label style is claimed" }
    home-alarm-button: { type: button, bg: "#fcfcfd", radius: "0px 0px 30px 30px", size: "30px x 29px", shadow: "rgba(0, 0, 0, 0.05) 0px 1px 1px 0px", states: "default on 7 buttons on the home snapshot; the bundle holds no state frame", use: "Alarm button (button.alarm) in the content-link card row at home::[data-omd-capture=\"33\"]; its font size is 0px, so no label style is claimed" }
    home-live-button: { type: button, bg: "#ff2f00", fg: "#fcfcfd", radius: "30px", padding: "0px 7px", height: "20px", font: "11px / 500 / 21px Pretendard", states: "default on one button on the home snapshot; the bundle holds no state frame", use: "Live marker button (button.live) in the content-link card row at home::[data-omd-capture=\"31\"], 36 x 20; its four-character label is set in the button itself" }
    home-login-button: { type: button, bg: "transparent", fg: "#525661", radius: "6px", padding: "0px 6px", height: "40px", font: "15px / 400 / 18px Pretendard", states: "default on the home header; the esports header button (surface-3 capture 7) records fg #d5d7dc with the same geometry and type; the bundle holds no state frame", use: "Header login button (button.btn-login) at home::[data-omd-capture=\"6\"], 51 x 40" }
    home-banner-thumb-tab: { type: tab, bg: "transparent", radius: "14px", padding: "6px", size: "260px x 72px", selected: "bg rgba(255, 255, 255, 0.1)", states: "rest on three items of a four-item vertical rail; the item with class swiper-slide-thumb-active (the rail marker for the banner slide on show) differs from them by its fill and is recorded as selected; the first item carries the positional class swiper-slide-active and records the transparent rest fill; the bundle holds no state frame", use: "Home banner thumbnail rail item (li.swiper-slide) beside the banner player; radius, padding and size sit on the li" }
    esports-gnb-link: { type: tab, bg: "transparent", fg: "#ffffff", border: "2px transparent on the bottom edge", padding: "0px 6px", height: "68px", font: "16px / 600 / normal Pretendard", states: "rest on six links (capture 11-16); capture 10 in the same row records fg #0182ff and a 2px #0182ff bottom border, but the capture gives it no aria-selected or class, so no selected value is declared; the bundle holds no state frame", use: "Esports header navigation link (a) at surface-3::[data-omd-capture=\"11\"]" }
    esports-filter-button: { type: button, bg: "#ffffff", fg: "#525661", border: "1px #e2e4e9", radius: "18px", padding: "0px 14px", height: "35px", font: "15px / 400 / normal Pretendard", states: "rest on 29 buttons; capture 107, first in the row of capture 108, records bg #17191c, fg #ffffff and no border, but the capture gives it no aria-selected or class, so no selected value is declared; the bundle holds no state frame", use: "Esports outline pill button at surface-3::[data-omd-capture=\"108\"], 82 x 35" }
    esports-status-badge: { type: badge, bg: "#e2e4e9", fg: "#acb0b9", radius: "6px", padding: "0px 6px", height: "22px", font: "13px / 400 / 22px Pretendard", states: "default on four badges (capture 236-239); the bundle holds no state frame", use: "Esports status label (a.staus) at surface-3::[data-omd-capture=\"236\"], 59 x 22" }
    esports-accent-button: { type: button, bg: "#fcfcfd", fg: "#0182ff", border: "1px rgba(117, 123, 138, 0.2)", radius: "18px", padding: "0px 31px", height: "36px", font: "13px / 500 / normal Pretendard", states: "default on one button; the bundle holds no state frame", use: "Esports outline button with a blue label at surface-3::[data-omd-capture=\"228\"], 141 x 36" }
  components_harvested: true
---

# 숲 — Design Reference

## 1. Visual Theme & Atmosphere

SOOP is a Korean live-streaming and creator platform whose public ecosystem brings live channels, community discovery, esports, and developer-linked services under one service name. The company changed its name from AfreecaTV to SOOP in 2024, and its official ESG material describes the current direction as an AI- and data-connected global platform, including a global-service launch and overseas operating hubs. On the captured public routes, that platform breadth resolves into a compact, feed-oriented interface: charcoal and blue sit beside pale gray discovery surfaces, with small rounded topic chips, a prominent pill search field, and dense creator/content rows. The visual impression is operational rather than editorial—an environment for finding a broadcast, a category, or an esports context quickly. This reference keeps that public product expression distinct from corporate identity material, advertising specifications, and any authenticated broadcaster or viewer flow.

**Key characteristics:**

- `#0182ff` is a selector-backed public blue accent; it is visible as a local link/underline/action treatment, not a universal filled CTA.
- `#f6f6f9` and `#e8ebed` form repeated pale discovery and chip surfaces, with `#17191c` and `#757b8a` supplying the public text hierarchy.
- The measured home search control is 45px high with a 45px radius; nearby topic chips use a 30px radius.
- The supplied bundle includes three snapshots, but the first two are the same SOOP home URL. It records no interaction transitions.

## Primary tasks

- Find a live broadcast or category to watch now
- Search the home feed or narrow it with topic chips
- Stream live or VOD content and build a fan community

## 2. Color Palette & Roles

### Selector-backed public product colours

- **Public Blue** (`#0182ff`): observed on public-home anchor `home::[data-omd-capture="4"]` and on esports link/underline samples, and as the label colour of the esports outline button `surface-3::[data-omd-capture="228"]` (§4). It is a local public accent, not a general primary-button fill.
- **Subtle Discovery Surface** (`#f6f6f9`): repeated on public-home content-link/card samples such as `home::[data-omd-capture="30"]`.
- **Foreground** (`#17191c`): repeated public-home title and metadata text, including `home::p` samples.
- **Muted** (`#757b8a`): repeated small chip/metadata text, including the public-home chip samples.
- **Chip Surface** (`#e8ebed`): observed behind public-home 20px topic-chip samples such as `home::[data-omd-capture="57"]`.
- **Component-local colours** recorded in §4, not promoted to palette roles: `#f1f2f4` (broadcast thumbnail frame), `#fcfcfd` (alarm button fill, live-marker label, esports outline-button fill), `#ff2f00` (live marker), `#525661` (header login and esports pill-button text), `#d5d7dc` (esports header login text), `#e2e4e9` (esports pill border and status-label fill), `#acb0b9` (esports status-label text), and `#17191c` / `#ffffff` fills on unmarked esports siblings.

### Brand and marketing boundary

SOOP’s official brand guide treats the name, marks, BI, and CI as protected company assets, and its advertising creative guide specifies creative-copy treatments. Those documents establish brand-use and advertising context, not computed product UI tokens. The catalog `primary_color` and the public-blue token therefore retain only the captured `#0182ff` evidence; no brand-guide image colour, advertising colour, or esports-only variation is substituted into the home product system.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No inspected first-party statement establishes a proprietary SOOP product type family. The official advertising creative guide uses Pretendard for specified ad-copy examples, which is advertising guidance rather than a declaration of every product route. |
| Live computed surface-use | Pretendard is loaded with high confidence, has 1,401 visible uses across body, button, heading, input, list-item, and text roles, and is backed by SOOP-hosted FontFace URLs. It is the only promoted UI-family token. |
| Official distributed brand asset | No official distributed SOOP brand font asset was established in the reviewed sources. |
| Declared-only | FOUREYES, Gmarket, Noto Sans, NotoSansThai, SSFlowerRoadRegular, and swiper-icons have declared font faces but no visible captured usage. They are not UI-family tokens. |
| License | Pretendard’s upstream repository publishes the SIL Open Font License 1.1. That licence confirms the upstream font asset, not an additional SOOP-specific licence grant. |

### Captured hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public body and search | Pretendard | 14px | 400 | 16.8px | repeated public-home text and measured home search input |
| Public list title / metadata | Pretendard | 15px | 400 | 18px | observed public-home title and metadata samples only |

Do not label any declared-only face as a loaded SOOP UI family. Conversely, do not replace the loaded Pretendard token with a system fallback while presenting it as product typography.

## 4. Component Stylings

### Public-home search

**Search Input**
- Background: `#f6f6f6`
- Text: `#525661`
- Radius: 45px
- Padding: 0px 70px 0px 16px
- Height: 45px
- Font: 14px / 400 / 16.8px / Pretendard
- States: default on both home snapshots. The bundle holds no hover, pressed, or focus frame for any element, so none is recorded; no disabled or error variant was observed. Corrected 2026-09-30: the July text cited `interactionCount: 0` as the reason; that count covers expansions, not pointer states.
- Use: Repeated public-home input `home::[data-omd-capture="2"]` and `surface-2::[data-omd-capture="2"]`.

### Broadcast card parts (home and esports)

**Tag chip** (`home-tag-chip`): background `#f6f6f9`, text `#757b8a`, `30px` radius, `0px 8px` padding, 20px high, `12px / 400 / 20px Pretendard`; `home::[data-omd-capture="65"]` and 85 more on the home snapshot, 21 on esports (`surface-3::[data-omd-capture="182"]`).

**Category chip** (`home-category-chip`): background `#e8ebed`, text `#757b8a`, with the tag chip's geometry and type; `home::[data-omd-capture="57"]` (`a.category`, 42 on home), 6 on esports (`"181"`).

**Profile avatar** (`home-profile-avatar`): a 38px × 38px circle (`50%` radius) with a 1px `rgba(117, 123, 138, 0.2)` border; `home::[data-omd-capture="54"]` (`a.thumb`, 24 on home, 6 on esports). It holds no text.

**Nickname and title links**: the creator nickname (`home-nickname-link`, `a.nick`, `home::[data-omd-capture="55"]`) records `#17191c` at `14px / 600 / 18px`; the broadcast title (`home-broadcast-title-link`, `home::[data-omd-capture="56"]`) records `#17191c` at `15px / 400 / 21px` over two lines (42px). Both repeat on esports (`"179"`, and `a.title` at `"180"`).

**Thumbnail frame** (`home-broadcast-thumbnail`): background `#f1f2f4` behind the image, `16px` radius, 271px × 152px, its height set by a `152.156px` bottom padding; `home::[data-omd-capture="53"]` (16 frames, plus 8 at 272px × 153px). Esports records the same fill and radius at 220px × 124px (`a.thumb-default`, `"177"`). The frame holds no text, and the capture records no overlay style on it, so none is described.

### Home content cards

**Content-link card** (`home-content-card`): background `#f6f6f9`, `15px` radius, 369px × 110px; `home::[data-omd-capture="30"]` (15 cards). Its own text equals the page body (`#000000`, 12px / 400 / 14.4px), so it is treated as a container and no label style is claimed.

**Alarm button** (`home-alarm-button`): background `#fcfcfd`, radius `0px 0px 30px 30px`, 30px × 29px, shadow `rgba(0, 0, 0, 0.05) 0px 1px 1px 0px`; `home::[data-omd-capture="33"]` (`button.alarm`, 7 buttons). Its font size is 0px, so no label style is claimed.

**Live marker** (`home-live-button`): background `#ff2f00`, text `#fcfcfd`, `30px` radius, `0px 7px` padding, 36px × 20px, `11px / 500 / 21px Pretendard`; `home::[data-omd-capture="31"]` (`button.live`), its four-character label set in the button itself.

### Header and banner rail

**Login button** (`home-login-button`): transparent, text `#525661`, `6px` radius, `0px 6px` padding, 51px × 40px, `15px / 400 / 18px Pretendard`; `home::[data-omd-capture="6"]` (`button.btn-login`). The esports header's login button (`surface-3::[data-omd-capture="7"]`) records `#d5d7dc` with the same geometry and type.

**Banner thumbnail rail** (`home-banner-thumb-tab`): four `li.swiper-slide` items stacked beside the banner player, each with a `14px` radius, `6px` padding and 260px × 72px. Three record a transparent fill. **Selected**: the item with class `swiper-slide-thumb-active` (Swiper's marker for the banner slide on show) records `rgba(255, 255, 255, 0.1)`. The first item's `swiper-slide-active` is Swiper's positional class for the rail itself, and it records the transparent rest fill.

### Esports controls

**Header navigation link** (`esports-gnb-link`): transparent, text `#ffffff`, `16px / 600 / normal Pretendard`, `0px 6px` padding, 68px high, with a 2px bottom border whose colour is transparent; `surface-3::[data-omd-capture="11"]` to `"16"`. The link before them (`"10"`) records `#0182ff` text and a 2px `#0182ff` bottom border, but the capture gives it no `aria-selected` or class, so it is not declared a selected state.

**Outline pill button** (`esports-filter-button`): background `#ffffff`, text `#525661`, border 1px `#e2e4e9`, `18px` radius, `0px 14px` padding, 35px high, `15px / 400 / normal Pretendard`; `surface-3::[data-omd-capture="108"]` (29 buttons). The first button in its row (`"107"`) records background `#17191c`, text `#ffffff` and no border, with no `aria-selected` or class, so no selected value is declared.

**Status label** (`esports-status-badge`): background `#e2e4e9`, text `#acb0b9`, `6px` radius, `0px 6px` padding, 22px high, `13px / 400 / 22px Pretendard`; `surface-3::[data-omd-capture="236"]` to `"239"` (`a.staus`).

**Blue-label outline button** (`esports-accent-button`): background `#fcfcfd`, text `#0182ff`, border 1px `rgba(117, 123, 138, 0.2)`, `18px` radius, `0px 31px` padding, 141px × 36px, `13px / 500 / normal Pretendard`; `surface-3::[data-omd-capture="228"]`.

The bundle holds no hover, pressed, or focus frame for any SOOP element (zero `::state-*` samples across the three snapshots) and no interaction record, so no pointer or focus state is declared anywhere in this reference. The one selected value, on the banner rail, rests on Swiper's `swiper-slide-thumb-active` class together with a measured fill difference. Links whose own colour is the browser-default `#0000ee` (sidebar channel rows, VOD cards, card information areas) keep their visible labels in unsampled children and are not promoted; the banner player and its arrows are not promoted either. Links in §4 keep their element names; the renderer's `button` type is only their category.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.sooplive.com/ ; https://esports.sooplive.com/ ; https://res.sooplive.com/policy/contents/brand_guide.html ; https://static.file.sooplive.co.kr/da_guide_file/2024/10/24/SOOP_CreativeGuide.pdf ; https://corp.sooplive.com/esg/2024/index.php?page=overview ; https://corp.sooplive.com/esg/2023/index.php?page=winwin
**Tier 2 sources:** https://getdesign.md/soop and https://styles.refero.design/?q=soop were both attempted on 2026-07-14. Built-in retrieval returned internal errors for both paths, so neither supplied a competing token or component claim.
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied public snapshots are `1440×900`. Their evidence supports a compact horizontal search area, dense content-list discovery, pale content panels, and 20px-high pill-like topic chips. It does not establish a page grid, breakpoint system, mobile layout, authenticated viewer layout, broadcaster studio, or a card system beyond the measured card parts in §4. The duplicate home snapshot corroborates values but is not a separate route or responsive state.

## 6. Depth & Elevation

The promoted search input has `box-shadow: none`, and the static product samples do not establish a reusable elevation scale. Pale fill, text hierarchy, and radius—not shadow—are the only measured separation cues retained here. Esports controls with darker fills remain a separate surface and are not converted into a global SOOP depth rule.

## 7. Do's and Don'ts

### Do

- Preserve the loaded Pretendard family and the measured 14px/400 public-input hierarchy when recreating the documented sibling.
- Use `#0182ff` only as the documented local public accent, with pale `#f6f6f9` / `#e8ebed` discovery surfaces and clear charcoal text hierarchy.
- Keep the search input’s 45px pill geometry separate from the 30px topic-chip geometry.
- Treat creator, community, esports, corporate, advertising, and developer surfaces as distinct evidence domains.

### Don't

- Don't turn a blue text/underline sample into a universal blue filled CTA, error, success, or selected-state colour.
- Don't substitute FOUREYES, Gmarket, Noto Sans, NotoSansThai, SSFlowerRoadRegular, or a system fallback for loaded Pretendard.
- Don't read the renderer's `button` type on a §4 link as button semantics; each link keeps its element name.
- Don't invent hover, focus, pressed, disabled, validation, modal, toast, or motion values; the capture holds no state frame and no interaction record.

## 8. Accessibility & Content

The evidence supports compact 12–15px public text roles and a 45px search-control height, but it does not provide keyboard traversal, focus styling, contrast-ratio results, live-region behaviour, validation messaging, or screen-reader labels. Reuse meaningful visible labels and retain the measured text hierarchy where the documented input is recreated; do not claim a SOOP accessibility standard or WCAG conformance from static computed styles alone.

## 9. Reference Scope & Evidence

This reference uses `artifacts/reference-evidence/soop.json` as the only raw computed-style, font, component, and interaction evidence. It contains public SOOP home, a duplicate SOOP home snapshot, and public SOOP esports. First-party brand, advertising, company/ESG, and upstream font-license sources supply narrative context only. getdesign and Refero were both attempted but returned internal retrieval errors, so no Tier 2 number, component, or historical interpretation is promoted. Raw proof, the conflict matrix, source boundaries, and confidence ledger are retained in `.verification.md` and `_research.md`.

## 10. Voice & Tone

First-party SOOP materials frame the service around user-led media, feedback-informed improvement, creator participation, and global expansion. The advertising creative guide uses concise hierarchy for its example copy; the following are application guidance, not extracted product strings.

| Do | Don't |
|---|---|
| Lead with the live content, community, or action a person can take now. | Bury the next useful action under abstract platform language. |
| Keep labels compact enough for dense discovery contexts. | Treat a promotional slogan as a substitute for a stream, category, or creator label. |
| Describe change or policy clearly when it affects creators or viewers. | Imply platform endorsement, partnership, or an official viewpoint without evidence. |

Illustrative, not extracted product copy:

- “지금 보고 싶은 방송을 찾아보세요.” *(illustrative; discovery-first)*
- “관심 있는 카테고리의 라이브를 확인하세요.” *(illustrative; compact action)*
- “변경된 안내와 다음 단계를 함께 확인하세요.” *(illustrative; clear service communication)*

## 11. Brand Narrative

SOOP’s corporate name changed from AfreecaTV Co., Ltd. to SOOP Co., Ltd. in March 2024, according to the company’s statutory name-change disclosure. The current official brand guide identifies SOOP as both the company’s representative service name and a company trademark. That continuity matters: the new name is not treated here as a detached campaign asset, but as the shared public identity around a long-running live-streaming service and its creator ecosystem.

The company’s 2024 ESG overview describes a transition toward an AI- and data-connected global platform. It records the launch of SOOP’s global service and operating bases across the United States, Thailand, Hong Kong, and Vietnam as part of a global-brand direction. The product capture reflects only the public Korean SOOP home and esports routes; it does not establish parity across regions or authenticated experience.

SOOP’s public ESG material also describes a platform in which streamers produce live and VOD content, build fan communities, and receive direct support through platform mechanisms. Its user-satisfaction material says service improvement combines company-level change with feedback incorporated from planning. These statements give useful ecosystem and evolution context, but they do not create a token, component, or user-flow claim beyond the supplied surfaces.

## 12. Principles

1. **Users participate in the media.** SOOP’s ESG material describes a user-led media vision and a creator/viewer ecosystem.
   *UI implication:* make the content, community, and current action legible before secondary promotion.
2. **Feedback is an input to improvement.** The company says it combines top-down service improvement with feedback reflected from the planning stage.
   *UI implication:* distinguish an explanation, a choice, and a confirmation so feedback-sensitive changes are understandable.
3. **Creator ecosystems are part of the product context.** SOOP describes streamers creating live/VOD content and operating fan communities.
   *UI implication:* do not flatten creator identity, content status, and community metadata into one indistinguishable label.
4. **Global expansion is operational, not merely cosmetic.** The 2024 overview links global service and overseas bases to platform development.
   *UI implication:* do not use a local public-web sample as evidence for all regions, languages, or roles.

## 13. Personas

These are stakeholder categories supported by first-party SOOP materials, not synthetic personas, satisfaction scores, or behavioural research findings.

### Viewer and community participant

The public product and ESG materials describe people discovering and participating around live and VOD content. The packet does not establish a viewer’s signed-in task flow, device preference, or accessibility needs.

### Streamer / content creator

SOOP’s ESG material describes streamers producing content, operating fan communities, and receiving direct support through platform mechanisms. No broadcaster studio, earning, or moderation control is captured here.

### Developer or integration partner

The official developer service provides platform and service APIs plus an extension-program market. This confirms a platform stakeholder group, not a design system or an extension UI pattern for the captured consumer routes.

## 14. States

No product-state specification is inferred. The table records the smallest useful boundary for future source-backed additions without creating values or copy.

| Category | Captured evidence boundary |
|---|---|
| Empty | No empty state captured. |
| Loading | No loading state captured. |
| Error — validation | No validation-error state captured. |
| Error — service/system | No service or system-error state captured. |
| Success | No success or confirmation state captured. |
| Skeleton | No skeleton state captured. |
| Disabled | No disabled state captured. |
| Focus | No focus state or transition captured. |
| Hover | No hover state or transition captured. |
| Pressed | No pressed state or transition captured. |
| Selected | Banner thumbnail rail only: `rgba(255, 255, 255, 0.1)` on the item with class `swiper-slide-thumb-active` (§4). |

## 15. Motion & Easing

The supplied bundle records `interactionKinds: 0` and `interactionCount: 0`. It establishes no duration, easing curve, transition, animation, carousel movement, or reduced-motion contract. Motion tokens are therefore absent; add them only from a source-specific observed interaction or official specification.
