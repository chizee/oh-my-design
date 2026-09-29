---
id: tossbank
name: Toss Bank
display_name_kr: 토스뱅크
country: KR
category: fintech
homepage: "https://www.tossbank.com"
primary_color: "#0064FF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Toss Brand Resource Center
  url: "https://brand.toss.im/"
  type: brand
  description: Official Toss group mark and color guidance; it is not a Toss Bank product-UI token source.
verification_v2:
  schema: 2
  checked: "2026-09-29"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.tossbank.com/", inspected: "2026-07-12" }
    - { id: product-disclosure, kind: documentation, url: "https://www.tossbank.com/customer/product-disclosure", inspected: "2026-07-12" }
    - { id: protected-products, kind: documentation, url: "https://www.tossbank.com/customer/protected-products", inspected: "2026-07-12" }
    - { id: brand-assets, kind: brand-assets, url: "https://brand.toss.im/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.tossbank.com/", captured: "2026-07-12" }
    - { id: disclosure-live, kind: product-surface, url: "https://www.tossbank.com/customer/product-disclosure", captured: "2026-07-12" }
    - { id: protected-live, kind: product-surface, url: "https://www.tossbank.com/customer/protected-products", captured: "2026-07-12" }
    - { id: brand-resource, kind: brand-asset, url: "https://brand.toss.im/", captured: "2026-07-13" }
    - { id: tps-history, kind: official-doc, url: "https://toss.im/tossfeed/article/beginning-of-tps", captured: "2026-07-13" }
    - { id: tds-design-tool, kind: official-doc, url: "https://developers-apps-in-toss.toss.im/design/prepare/design.html", captured: "2026-07-13" }
    - { id: bank-story, kind: official-doc, url: "https://www.tossbank.com/ten-million", captured: "2026-07-13" }
    - { id: tossbank-probe-home, kind: product-surface, url: "https://www.tossbank.com/", captured: "2026-09-29" }
    - { id: tossbank-probe-disclosure, kind: product-surface, url: "https://www.tossbank.com/customer/product-disclosure", captured: "2026-09-29" }
  conflicts: []
  claims:
    "tokens.colors.brand": &brand { surface_id: brand-assets, source_id: brand-resource, method: official-doc, captured: "2026-07-13" }
    "tokens.colors.brand-gray": *brand
    "tokens.colors.primary": &live { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": &docs { surface_id: protected-products, source_id: protected-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.foreground": *live
    "tokens.colors.foreground-strong": *docs
    "tokens.colors.foreground-secondary": *docs
    "tokens.colors.muted": *live
    "tokens.colors.hairline": *live
    "tokens.colors.border": *live
    "tokens.colors.surface-muted": *docs
    "tokens.typography.family.sans": *live
    "tokens.typography.marketing-title.size": *live
    "tokens.typography.marketing-title.weight": *live
    "tokens.typography.marketing-title.lineHeight": *live
    "tokens.typography.marketing-title.use": *live
    "tokens.typography.navigation.size": *live
    "tokens.typography.navigation.weight": *live
    "tokens.typography.navigation.lineHeight": *live
    "tokens.typography.navigation.use": *live
    "tokens.typography.docs-body.size": *docs
    "tokens.typography.docs-body.weight": *docs
    "tokens.typography.docs-body.lineHeight": *docs
    "tokens.typography.docs-body.use": *docs
    "tokens.typography.docs-utility.size": *docs
    "tokens.typography.docs-utility.weight": *docs
    "tokens.typography.docs-utility.lineHeight": *docs
    "tokens.typography.docs-utility.use": *docs
    "tokens.spacing.xs": *live
    "tokens.spacing.sm": *live
    "tokens.spacing.md": *live
    "tokens.spacing.lg": *live
    "tokens.spacing.xl": *live
    "tokens.rounded.none": *live
    "tokens.rounded.compact": *live
    "tokens.rounded.pill": *docs
    "tokens.shadow.none": *live
    "tokens.components.docs-outline-button.type": *docs
    "tokens.components.docs-outline-button.fg": *docs
    "tokens.components.docs-outline-button.radius": *docs
    "tokens.components.docs-outline-button.padding": *docs
    "tokens.components.docs-outline-button.font": *docs
    "tokens.components.docs-outline-button.border": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.docs-outline-button.hover": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button.css-6erbde 시작하기 at :hover (two loads)", captured: "2026-09-29" }
    "tokens.components.docs-outline-button.pressed": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button.css-6erbde 시작하기 at :active (two loads)", captured: "2026-09-29" }
    "tokens.components.docs-outline-button.focus": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button.css-6erbde at :focus-visible, Tab stop 12 (two loads)", captured: "2026-09-29" }
    "tokens.components.docs-outline-button.states": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button.css-6erbde 시작하기", captured: "2026-09-29" }
    "tokens.components.docs-outline-button.use": *docs
    "tokens.components.docs-tab.type": &docs_tab { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"29\"]", captured: "2026-07-12" }
    "tokens.components.docs-tab.fg": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button#radix-trigger-U visible label span (opacity 1)", captured: "2026-09-29" }
    "tokens.components.docs-tab.padding": *docs_tab
    "tokens.components.docs-tab.font": *docs_tab
    "tokens.components.docs-tab.selected": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button#radix-trigger-U aria-selected=true, child span fill", captured: "2026-09-29" }
    "tokens.components.docs-tab.hover": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button#radix-trigger-U at :hover", captured: "2026-09-29" }
    "tokens.components.docs-tab.pressed": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button#radix-trigger-U at :active", captured: "2026-09-29" }
    "tokens.components.docs-tab.focus": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button#radix-trigger-U at :focus-visible, Tab stop 13 (fixed probe tool, raw/tool-fix-tossbank-disclosure.json)", captured: "2026-09-29" }
    "tokens.components.docs-tab.states": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "button#radix-trigger-U role=tab", captured: "2026-09-29" }
    "tokens.components.docs-tab.use": *docs_tab
    "tokens.components.pill-action.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.pill-action.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.pill-action.fg": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.css-k1k999 label span 자세히 보기", captured: "2026-09-29" }
    "tokens.components.pill-action.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.pill-action.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.pill-action.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.pill-action.font": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.css-k1k999 label span 자세히 보기", captured: "2026-09-29" }
    "tokens.components.pill-action.hover": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.css-k1k999 자세히 보기 at :hover", captured: "2026-09-29" }
    "tokens.components.pill-action.pressed": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.css-k1k999 자세히 보기 at :active", captured: "2026-09-29" }
    "tokens.components.pill-action.focus": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.css-k1k999 at :focus-visible, Tab stop 13", captured: "2026-09-29" }
    "tokens.components.pill-action.states": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.css-k1k999 자세히 보기", captured: "2026-09-29" }
    "tokens.components.pill-action.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-12" }
    "tokens.components.article-card.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.article-card.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.article-card.fg": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "a.e1853ft10 title p (first of 24)", captured: "2026-09-29" }
    "tokens.components.article-card.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.article-card.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.article-card.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.article-card.hover": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "a.e1853ft10 at :hover", captured: "2026-09-29" }
    "tokens.components.article-card.pressed": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "a.e1853ft10 at :active", captured: "2026-09-29" }
    "tokens.components.article-card.focus": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "a.e1853ft10 at :focus-visible, Tab stop 14", captured: "2026-09-29" }
    "tokens.components.article-card.states": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "a.e1853ft10 (first of 24)", captured: "2026-09-29" }
    "tokens.components.article-card.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.nav-menu.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-menu.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-menu.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-menu.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-menu.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-menu.hover": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.e159wptm1 은행소개 at :hover", captured: "2026-09-29" }
    "tokens.components.nav-menu.pressed": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.e159wptm1 은행소개 at :active", captured: "2026-09-29" }
    "tokens.components.nav-menu.focus": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.e159wptm1 은행소개 at :focus-visible, Tab stop 3", captured: "2026-09-29" }
    "tokens.components.nav-menu.states": { surface_id: home, source_id: tossbank-probe-home, method: live-state-probe, selector: "button.e159wptm1 은행소개", captured: "2026-09-29" }
    "tokens.components.nav-menu.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.docs-link.type": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.docs-link.bg": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.docs-link.fg": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.docs-link.padding": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.docs-link.font": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.docs-link.hover": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "a.css-1irxrvp 금융감독원 금융소비자정보포털시스템 at :hover", captured: "2026-09-29" }
    "tokens.components.docs-link.pressed": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "a.css-1irxrvp 금융감독원 금융소비자정보포털시스템 at :active", captured: "2026-09-29" }
    "tokens.components.docs-link.focus": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "a.css-1irxrvp at :focus-visible, Tab stop 14", captured: "2026-09-29" }
    "tokens.components.docs-link.states": { surface_id: product-disclosure, source_id: tossbank-probe-disclosure, method: live-state-probe, selector: "a.css-1irxrvp 금융감독원 금융소비자정보포털시스템", captured: "2026-09-29" }
    "tokens.components.docs-link.use": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"31\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.border": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.hover": { surface_id: home, source_id: home-live, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"10\"]::state-hover", captured: "2026-07-12" }
    "tokens.components.home-outline-button.pressed": { surface_id: home, source_id: home-live, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"10\"]::state-pressed", captured: "2026-07-12" }
    "tokens.components.home-outline-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.home-outline-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.carousel-arrow.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-12" }
    "tokens.components.carousel-arrow.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-12" }
    "tokens.components.carousel-arrow.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-12" }
    "tokens.components.carousel-arrow.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-12" }
    "tokens.components.carousel-arrow.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-12" }
    "tokens.components.carousel-arrow.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-12" }
    "tokens.components.carousel-arrow.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-12" }
    "tokens.components.category-tag.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-07-12" }
    "tokens.components.category-tag.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-07-12" }
    "tokens.components.category-tag.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-07-12" }
    "tokens.components.category-tag.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-07-12" }
    "tokens.components.category-tag.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-07-12" }
    "tokens.components.category-tag.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-07-12" }
    "tokens.components.submenu-link.type": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-07-12" }
    "tokens.components.submenu-link.bg": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-07-12" }
    "tokens.components.submenu-link.fg": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-07-12" }
    "tokens.components.submenu-link.padding": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-07-12" }
    "tokens.components.submenu-link.height": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-07-12" }
    "tokens.components.submenu-link.font": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-07-12" }
    "tokens.components.submenu-link.states": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-07-12" }
    "tokens.components.submenu-link.use": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-07-12" }
    "tokens.components.footer-link.type": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"43\"]", captured: "2026-07-12" }
    "tokens.components.footer-link.bg": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"43\"]", captured: "2026-07-12" }
    "tokens.components.footer-link.fg": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"43\"]", captured: "2026-07-12" }
    "tokens.components.footer-link.font": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"43\"]", captured: "2026-07-12" }
    "tokens.components.footer-link.states": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"43\"]", captured: "2026-07-12" }
    "tokens.components.footer-link.use": { surface_id: product-disclosure, source_id: disclosure-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"43\"]", captured: "2026-07-12" }
    "tokens.components.data-table.type": { surface_id: protected-products, source_id: protected-live, method: computed-style, selector: "surface-3::td", captured: "2026-07-12" }
    "tokens.components.data-table.bg": { surface_id: protected-products, source_id: protected-live, method: computed-style, selector: "surface-3::td", captured: "2026-07-12" }
    "tokens.components.data-table.fg": { surface_id: protected-products, source_id: protected-live, method: computed-style, selector: "surface-3::td", captured: "2026-07-12" }
    "tokens.components.data-table.border": { surface_id: protected-products, source_id: protected-live, method: computed-style, selector: "surface-3::td", captured: "2026-07-12" }
    "tokens.components.data-table.height": { surface_id: protected-products, source_id: protected-live, method: computed-style, selector: "surface-3::td", captured: "2026-07-12" }
    "tokens.components.data-table.font": { surface_id: protected-products, source_id: protected-live, method: computed-style, selector: "surface-3::td", captured: "2026-07-12" }
    "tokens.components.data-table.states": { surface_id: protected-products, source_id: protected-live, method: computed-style, selector: "surface-3::td", captured: "2026-07-12" }
    "tokens.components.data-table.use": { surface_id: protected-products, source_id: protected-live, method: computed-style, selector: "surface-3::td", captured: "2026-07-12" }
tokens:
  source: reconciled
  extracted: "2026-07-12"
  colors:
    brand: "#0064ff"
    brand-gray: "#202632"
    primary: "#3182f6"
    canvas: "#ffffff"
    foreground: "#212529"
    foreground-strong: "#191f28"
    foreground-secondary: "#4e5968"
    muted: "#6b7684"
    hairline: "#e5e8eb"
    border: "#d1d6db"
    surface-muted: "#f2f4f6"
  typography:
    family: { sans: "Toss Product Sans" }
    marketing-title: { size: 48, weight: 700, lineHeight: 1.3, use: "One observed marketing-home heading; not an app display scale." }
    navigation: { size: 15, weight: 500, lineHeight: 1.5, use: "Observed public-site navigation control text." }
    docs-body: { size: 16, weight: 400, lineHeight: 1.5, use: "Observed product-disclosure and protected-products content text." }
    docs-utility: { size: 11, weight: 600, lineHeight: 1.6, use: "Observed compact documentation control text." }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 32 }
  rounded: { none: 0, compact: 20, pill: 40 }
  shadow: { none: "none" }
  components_harvested: true
  components:
    docs-outline-button: { type: button, fg: "#4e5968", border: "1px solid #4e5968", radius: 40, padding: "4px 10px", font: "11/600 Toss Product Sans", hover: "bg rgba(217,217,255,0.11)", pressed: "bg rgba(217,217,255,0.11)", focus: "bg rgba(217,217,255,0.11); no outline, so the faint tint is the only focus signal — measured 2026-09-29", states: "default captured 2026-07-12 on product-disclosure and protected-products, with July state frames reading the same tint; hover, pressed and keyboard focus measured 2026-09-29 on product-disclosure in two separate loads (Tab 12), identical values; transition all 0s", use: "Observed default documentation-chrome button on the two customer-information routes only." }
    docs-tab: { type: tab, fg: "rgba(2,9,19,0.91)", padding: "9px 14px", font: "16/400 Toss Product Sans (the button's computed style; the visible label span's size and weight were not read)", selected: "bg rgba(2,32,71,0.05) on a child span filling the tab (174.9px x 40px); the button stays transparent", hover: "no visible change (measured 2026-09-29)", pressed: "no visible change (measured 2026-09-29)", focus: "no visible indication: no change on the tab, its ::before/::after, 4 descendants or 3 ancestor levels, border included (fixed probe tool after Tab 13) — measured 2026-09-29", states: "Selected tab (aria-selected=true) captured 2026-07-12; hover and pressed measured 2026-09-29 (tool and cross-check); keyboard focus reached by Tab 13 although tabIndex reads -1, read first by a cross-check script and then by the fixed probe tool with border compared; the other tab was not measured", use: "Observed selected documentation tab at product-disclosure only." }
    pill-action: { type: button, bg: "rgba(253,253,254,0.89)", fg: "#191f28", radius: "100px", padding: "18px 32px", height: "63px", font: "17px / 700 / Toss Product Sans (label span; the button computes #212529 16px / 400)", hover: "bg #ffffff", pressed: "bg #ffffff", focus: "no visible indication: outline none and no other compared property changes (measured 2026-09-29)", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 (Tab 13); only the fill alpha changes; transition background 0.15s ease-in", use: "Home hero pill action 자세히 보기 on the dark hero; marketing evidence only" }
    article-card: { type: card, bg: "transparent", fg: "#e5e8eb", radius: "20px", padding: "0px 0px 32px", size: "319px x 348px", hover: "transform translateY(-8px); overlay gradient rgba(255,255,255,0.4) / rgba(209,209,253,0.05) → rgba(255,255,255,0.3) / rgba(217,217,255,0.11); title fg #e5e8eb → #3182f6", pressed: "same as hover: transform translateY(-8px), overlay gradient to rgba(217,217,255,0.11), title fg #3182f6", focus: "no visible indication: outline none and no other compared property changes (measured 2026-09-29)", states: "default captured 2026-07-12 (24 cards); hover, pressed and keyboard focus measured 2026-09-29 on the first card (Tab 14); box-shadow stays none; transition transform 0.15s ease-in, background 0.3s ease-out", use: "Home article card (link to /articles/…); fg is the title text" }
    nav-menu: { type: tab, bg: "transparent", fg: "rgba(253,253,254,0.89)", padding: "12px 0px", font: "15px / 500 / Toss Product Sans", hover: "fg #3182f6", pressed: "fg #3182f6", focus: "no visible indication: outline none and no other compared property changes (measured 2026-09-29)", states: "default, hover and pressed captured 2026-07-12 on home (9 buttons, all #3182f6) and on the documentation routes, where the buttons rest at #4e5968; re-measured 2026-09-29 on 은행소개; keyboard focus measured 2026-09-29 (Tab 3); the July focus frames were read with the pointer still over the control", use: "Global header menu button (은행소개, 통장, 예금・적금 …) over the dark home hero" }
    docs-link: { type: tab, bg: "transparent", fg: "#3182f6", padding: "0px 7px 0px 0px", font: "15px / 400 / Toss Product Sans", hover: "fg #0056b3", pressed: "fg #0056b3", focus: "outline browser default ring (outline-style auto), not brand — measured 2026-09-29", states: "default captured 2026-07-12 (nine links); hover, pressed and keyboard focus measured 2026-09-29 in two loads (Tab 14)", use: "Product-disclosure regulator link (금융감독원 금융소비자정보포털시스템 …)" }
    home-outline-button: { type: button, bg: "transparent", fg: "#d1d6db", border: "1px solid #e5e8eb", radius: "40px", padding: "4px 10px", height: "28px", font: "11px / 600 / Toss Product Sans", hover: "bg rgba(217,217,255,0.11)", pressed: "bg rgba(217,217,255,0.11)", states: "default, hover and pressed captured 2026-07-12 (one button; both frames equal the tint measured on docs-outline-button); not state-read on 2026-09-29; keyboard focus not measured", use: "Home header 시작하기 over the dark hero: the same control as docs-outline-button in the home colour context" }
    carousel-arrow: { type: button, bg: "rgba(222,222,255,0.19)", radius: "50%", padding: "10px", size: "64px x 64px", states: "default captured 2026-07-12 (two arrows); the 2026-09-29 probe survey lists the same arrows with tabIndex -1; no state was read", use: "Home hero carousel previous and next arrow (div role=button, outside the Tab order)" }
    category-tag: { type: badge, bg: "transparent", fg: "#b0b8c1", font: "12px / 500 / Toss Product Sans", states: "default captured 2026-07-12 (24, one per article card) and read again 2026-09-29 as the article card label span; no state sample", use: "Article-card category tag (span role=button, e.g. 일상)" }
    submenu-link: { type: tab, bg: "transparent", fg: "#191f28", padding: "12px 0px", height: "48px", font: "16px / 700 / Toss Product Sans", states: "default captured 2026-07-12 (24 on the documentation routes; on home the same links read #d1d6db); no state sample", use: "Header mega-menu product link (nav-pc-submenu), in the DOM before the menu opens" }
    footer-link: { type: tab, bg: "transparent", fg: "#6b7684", font: "13px / 400 / Toss Product Sans", states: "default captured 2026-07-12 (18 on the documentation routes; the home footer sets the same colour at 11px / 400); no state sample", use: "Footer link" }
    data-table: { type: listItem, bg: "#ffffff", fg: "#6b7684", border: "1px solid #d1d6db", height: "41px", font: "14px / 500 / Toss Product Sans", states: "default captured 2026-07-12 (168 body cells, 7 header cells); no state sample", use: "Protected-products table: header cells bg #f2f4f6 with #4e5968 text, body cells #ffffff with #6b7684 text, 1px #d1d6db grid, 41px rows" }
---

# Design System Inspiration of Toss Bank (토스뱅크)

## 1. Visual Theme & Atmosphere

Toss Bank is a Korean bank whose public site presents banking products, customer information, and a campaign asking people to describe banking experiences worth changing. The public home uses short, benefit-led Korean headlines for accounts, savings, loans, foreign exchange, cards, and always-available support; the campaign’s central line is “은행을 바꾸는 은행.” That combination gives the public-facing work a direct, conversational register rather than the ceremonial tone associated with conventional bank marketing. The live capture nevertheless contains three different source domains: the home is a marketing surface, while product disclosure and protected-products are documentation chrome. They share a loaded typeface and familiar blue/gray values, but neither route is evidence for the authenticated Toss Bank app or for financial-flow components. [Toss Bank home](https://www.tossbank.com/) · [campaign](https://www.tossbank.com/ten-million)

The group’s official resource center identifies Toss Blue `#0064FF` and Toss Gray `#202632`, and includes a Toss Bank affiliate logo. Those are brand-asset facts. The supplied live capture separately shows `#3182f6` in public-site text and borders; it is retained as an observed public-surface value, not silently equated with the official logo color. The resulting reference is intentionally narrow: clear typography, sparse borders, and public information controls are verified; account, transfer, card, status, and authenticated-app patterns are not.

**Key Characteristics:**

- Official Toss brand blue `#0064FF` and gray `#202632` for group identity assets
- Loaded Toss Product Sans across the captured public home and customer-information routes
- `#3182f6` observed in public-site control text/borders, alongside neutral documentation colors
- Marketing, documentation chrome, and unobserved authenticated banking flows kept separate
- Only selector-backed public controls are described; app-style cards, forms, and transaction states are omitted

## Primary tasks

- Browse bank products across accounts, savings, loans, and cards
- Report an inconvenient banking experience you want changed
- Read the product disclosure and protected-product pages
- Reach a customer center at any hour of the day

## 2. Color Palette & Roles

### Official brand assets

- **Toss Blue** (`#0064ff`): official Toss brand color, specified by the group resource center for brand use.
- **Toss Gray** (`#202632`): official Toss brand gray, also specified by the group resource center.

### Observed public surfaces

- **Public control blue** (`#3182f6`): repeated public-site text and border value on all three captured routes.
- **Canvas** (`#ffffff`): observed documentation-route background.
- **Foreground** (`#212529`): repeated public text value across the capture.
- **Strong foreground** (`#191f28`): observed on both documentation routes.
- **Secondary foreground** (`#4e5968`) and **muted text** (`#6b7684`): observed documentation and public-site text values.
- **Border** (`#d1d6db`) and **hairline** (`#e5e8eb`): observed public-route border values.
- **Muted surface** (`#f2f4f6`): observed background on the protected-products route.

### Boundary

No captured evidence establishes semantic success/error colors, a universal CTA fill, or a Toss Bank app color system. Brand-asset colors are not promoted to product controls, and the observed public control blue is not presented as a replacement for the official brand color.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use:** **Toss Product Sans** is the computed family on 672 captured elements across the home and both customer-information routes. The collector reports a matching loaded FontFaceSet entry with 1,536 static.toss.im font-source URLs, so it is the verified public-web family for this reference.
- **Official product-use and history:** Toss says it developed Toss Product Sans as a product typeface for financial, mobile, and digital contexts, initially with Sandoll and later with Leedotype. This explains the typeface’s financial-context intent but does not establish unobserved Toss Bank app sizes or components. [Official typeface history](https://toss.im/tossfeed/article/beginning-of-tps)
- **Official distributed asset / license boundary:** Apps in Toss documentation says the Figma kit uses SF Pro because Toss Product Sans is difficult to distribute as a separate asset, while Toss apps apply Toss Product Sans automatically. The reviewed material does not grant an independent font-file license for this reference. [TDS design-tool guidance](https://developers-apps-in-toss.toss.im/design/prepare/design.html)
- **Declared/system families:** Tossface, SF Pro, Apple SD Gothic Neo, Roboto, Noto Sans, and emoji families occur in the computed fallback declaration. They have no loaded-font match in the supplied evidence and are not promoted to Toss Bank UI tokens.

### Observed hierarchy

| Role | Size | Weight | Line height | Source boundary |
|------|------|--------|-------------|-----------------|
| Marketing title | 48px | 700 | 62.4px | One home marketing heading |
| Public navigation | 15px | 500 | 22.5px | Home navigation controls |
| Documentation body | 16px | 400 | 24px | Product-disclosure and protected-products routes |
| Documentation utility | 11px | 600 | 17.6px | Compact documentation control |

Do not substitute SF Pro, Pretendard, Inter, or a system font and label it Toss Product Sans. Conversely, the non-loadable fallback declaration remains useful compatibility context but is not treated as a product font source.

## 4. Component Stylings

### Public marketing home

**Pill action** (`pill-action`)
- Background: `rgba(253,253,254,0.89)`, a near-white fill at 89% alpha in both the July capture and the 2026-09-29 probe (the opaque #fdfdfe written here earlier dropped the alpha)
- Label: `#191f28`, 17px / 700 / Toss Product Sans, the visible label span (2026-09-29). The button element's own computed style is `#212529` 16px / 400
- Radius: 100px
- Padding: 18px 32px
- Hover and pressed: the fill turns opaque `#ffffff`; only the alpha changes, over `background 0.15s ease-in`. Focus: no visible indication — outline none and no other compared property changes (Tab 13, measured 2026-09-29)
- Use: `home::[data-omd-capture="28"]` 자세히 보기, a single public-home action with a 63px rendered height on the dark hero. It is marketing evidence only.

### Customer-information documentation chrome

**Outline button — observed default**
- Text: #4e5968
- Border: 1px solid #4e5968
- Radius: 40px
- Padding: 4px 10px
- Font: 11px / 600 / Toss Product Sans
- Use: `surface-2::[data-omd-capture="10"]`, also repeated on `surface-3`; 28px rendered height.
- Hover, pressed and keyboard focus: the background turns `rgba(217,217,255,0.11)` (measured 2026-09-29 in two loads, Tab 12; the July state frames read the same). Focus draws no outline, so this faint tint, roughly 1.03:1 against white (arithmetic), is the only focus signal
- The same-labelled home header button sits in another colour context: `#d1d6db` text and a `1px solid #e5e8eb` border over the dark hero, with the same tint in its July hover and pressed frames (`home-outline-button` below; not state-read on 2026-09-29)

**Documentation tab — observed selected** (`docs-tab`)
- Text: the visible label span reads `rgba(2,9,19,0.91)` (2026-09-29). The #212529 recorded here earlier is the button element's own colour; a bold copy of the label (`#4e5968`, 15px / 700) sits at opacity 0 and only reserves width
- Padding: 9px 14px
- Font: 16px / 400 / Toss Product Sans is the button element's computed style; the visible label span's size and weight were not read
- Selected: a child span fills the tab with `rgba(2,32,71,0.05)` (174.9px × 40px); the button itself stays transparent
- Hover and pressed: no visible change over the tab, 4 descendants and 2 ancestors (measured 2026-09-29, probe tool and cross-check). Focus: Tab 13 reaches it although `tabIndex` reads -1; no visible indication — no change on the tab, its pseudo-elements, 4 descendants or 3 ancestor levels, border included (fixed probe tool, `probe-tool-fix.md`; an earlier cross-check agreed)
- Use: `surface-2::[data-omd-capture="29"]`, `role="tab"` and `aria-selected="true"`; 40px rendered height.

The July artifact carries hover, pressed and focus state frames for several public buttons but no dialog or menu interaction snapshots (`interactionCount: 0`). The 2026-09-29 live probe re-measured six controls with real `:hover`, `:active` and Tab to `:focus-visible`; their states are recorded above and below. No authenticated-app button, account card, input, badge, toast, sheet, toggle, error, success, or mobile navigation variant had selector and surface provenance in this update.

### Measured and added components (captured 2026-07-12; states measured 2026-09-29)

Every value below is from tossbank.com: the July capture of the home, product-disclosure and protected-products routes, and the 2026-09-29 probe of the home and product-disclosure routes. Nothing here speaks for toss.im or the authenticated app.

**Article card** (`article-card`, home)
- Link box 319px × 348px, 20px radius, padding 0 0 32px, transparent, with an overlay gradient `linear-gradient(rgba(255,255,255,0.4) 50%, rgba(209,209,253,0.05) 100%)`; title text `#e5e8eb` on the dark section; 24 cards
- Hover and pressed: the card lifts `translateY(-8px)`, the gradient becomes `rgba(255,255,255,0.3)` / `rgba(217,217,255,0.11)` (the same tint at 0.11 as the documentation button), and the title turns `#3182f6`. Box-shadow stays none, so the lift is a transform, not elevation; transition `transform 0.15s ease-in, background 0.3s ease-out`
- Focus: no visible indication — outline none and no other compared property changes on the card, 9 descendants or 2 ancestors (Tab 14, measured 2026-09-29, confirmed by a cross-check)
- The link element's own colour (#007bff, #0056b3 on hover) is a stylesheet default that no visible text renders, so it is not declared as a state

**Header menu button** (`nav-menu`, home)
- `rgba(253,253,254,0.89)` text over the dark hero, 15px / 500 / Toss Product Sans, padding 12px 0, no fill
- Hover and pressed: fg `#3182f6`. Nine July header buttons agree, and the 2026-09-29 probe read the same on 은행소개. On the documentation routes the same buttons rest at `#4e5968` and turn `#3182f6` (18 July frames)
- Focus: no visible indication — outline none and no other compared property changes (Tab 3, measured 2026-09-29). The July focus frames also read `#3182f6`, but they were taken with the pointer still over the control, so they show the hover colour

**Regulator link** (`docs-link`, product-disclosure)
- `#3182f6`, 15px / 400 / Toss Product Sans, padding 0 7px 0 0; nine links
- Hover and pressed: fg `#0056b3` (two loads agree). The July logo link shows the same #007bff → `#0056b3` pair, which reads like a stylesheet-default link pair (an inference from the values), so `#0056b3` is not promoted to `tokens.colors`
- Focus: the browser's default ring (`#005fcc`, outline-style auto), not brand (Tab 14, measured 2026-09-29)

**Home header outline button** (`home-outline-button`)
- `#d1d6db` text, `1px solid #e5e8eb` border, 40px radius, padding 4px 10px, 28px tall, 11px / 600 over the dark hero: the 시작하기 control in its home colour context
- Hover and pressed: bg `rgba(217,217,255,0.11)` in its July frames, the tint the documentation button shows in the 2026-09-29 probe. Keyboard focus not measured

**Hero carousel arrow** (`carousel-arrow`)
- 64px × 64px, 50% radius, padding 10px, fill `rgba(222,222,255,0.19)`; two arrows, `div role="button"` outside the Tab order (`tabIndex` -1). The 2026-09-29 probe survey lists them with the same values. No state was read

**Category tag** (`category-tag`)
- `#b0b8c1`, 12px / 500 / Toss Product Sans, `span role="button"`; one per article card (24). No state sample

**Mega-menu link** (`submenu-link`)
- `#191f28`, 16px / 700 / Toss Product Sans, padding 12px 0, 48px tall on the documentation routes; the same links read `#d1d6db` on home. They sit in the DOM before the menu opens. No state sample

**Footer link** (`footer-link`)
- `#6b7684`, 13px / 400 / Toss Product Sans on the documentation routes; the home footer sets the same colour at 11px / 400. No state sample

**Protected-products table** (`data-table`)
- Header cells `#f2f4f6` with `#4e5968` text; body cells `#ffffff` with `#6b7684` text; a `1px solid #d1d6db` grid; 41px rows; 14px / 500. No state sample

Five controls have hover, pressed and keyboard focus all measured by the probe tool, cross-checked where noted: the pill action, the article card, the header menu button, the documentation outline button and the regulator link. The documentation tab is a sixth, its focus read by the fixed probe tool with border compared. The pill action, the article card, the header menu button and the documentation tab show no visible keyboard focus at all.

---
**Verified:** 2026-07-13 · states re-measured 2026-09-29 (live probe of the tossbank.com home and product-disclosure pages; no toss.im page)
**Tier 1 sources:** https://www.tossbank.com/; https://www.tossbank.com/customer/product-disclosure; https://www.tossbank.com/customer/protected-products; https://brand.toss.im/; https://toss.im/tossfeed/article/beginning-of-tps; https://developers-apps-in-toss.toss.im/design/prepare/design.html; https://www.tossbank.com/ten-million
**Tier 2 sources:** https://getdesign.md/tossbank (attempted; no usable record returned); https://styles.refero.design/?q=tossbank (attempted; no usable record returned)
**Conflicts unresolved:** none

The previous reference inferred a mobile-bank application system from shared TDS patterns. This update retains only source-backed public values and components, while preserving separately confirmed Toss brand and typeface context.

## 5. Layout Principles

The supplied desktop capture exposes public marketing and documentation layouts, not an authenticated banking-screen grid. Observed spacing values cluster at 4, 8, 12, 16, and 32px; documentation controls use compact padding while the home pill action uses 18px 32px. A 375px baseline, transaction alignment rules, safe-area behavior, and an app layout grid were not captured and are omitted.

## 6. Depth & Elevation

The representative public controls have `box-shadow: none`. No evidence in this run supports a card, sheet, modal, floating-action, or elevation scale. The home article card does move on hover — `translateY(-8px)` with box-shadow still none (measured 2026-09-29) — so motion stands in for elevation there; it is not an elevation token. Use flat public-surface controls only where their documented source domain applies; do not infer banking-product depth rules.

## 7. Do's and Don'ts

### Do

- Keep official brand assets (`#0064ff`, `#202632`) distinct from live public-interface observations.
- Use Toss Product Sans only when the deployment can load the verified family or is explicitly within its official platform boundary.
- Preserve the marketing-home and customer-information source domains on documented controls.
- Treat the selected documentation tab as a selected documentation state, not a general app tab pattern.

### Don't

- Do not turn the observed `#3182f6` text/border value into a universal filled banking CTA.
- Do not reuse the public pill action as a transfer, account-opening, or confirmation component.
- Do not invent error, disabled, success, or responsive variants from this artifact; hover, pressed and focus are declared only where §4 records a measurement.
- Do not substitute a system font and call it Toss Product Sans.

## 8. Responsive Behavior

Only a 1440×900 collector viewport was supplied. No mobile viewport, breakpoint, responsive layout change, touch-target policy, or safe-area behavior was observed. Re-verification needs public mobile captures before this reference can describe responsive rules.

## 9. Agent Prompt Guide

For a public Toss Bank marketing or customer-information concept, use the verified source boundary: official group blue `#0064ff` for brand context; observed public control blue `#3182f6` only as a text/border observation; neutral text and hairlines; and Toss Product Sans only when it can actually load. Do not generate an account dashboard, money transfer flow, banking status state, or universal TDS component from this reference—the current evidence does not establish them.

## 10. Voice & Tone

The official home uses concise, benefit-led Korean phrasing such as “하루만 넣어도 이자가 쌓이는” and “쉽고 간편하게 시작해요.” The campaign directly asks for “바꾸고 싶은 불편한 은행 경험,” then says the bank will use those opinions to make a better bank. This supports a clear, constructive public voice; legal and disclosure wording remains a separate regulated content domain. [Home](https://www.tossbank.com/) · [campaign](https://www.tossbank.com/ten-million)

| Context | Observed direction |
|---------|--------------------|
| Product marketing | Short benefit plus a plain-language explanation |
| Participation campaign | Ask directly for a concrete inconvenient experience |
| Documentation | Keep product information distinct from promotional claims |

Voice samples are quoted/paraphrased from the cited public pages, not a specification for unobserved in-app copy.

## 11. Brand Narrative

Toss Bank frames itself publicly as a bank that changes banking: its home lists everyday bank products and services, while its campaign says it is still changing banks and invites people to name the experiences they want improved. The bank’s site also identifies a 24-hour customer center, placing accessibility of assistance alongside its product navigation. [Toss Bank home](https://www.tossbank.com/) · [campaign](https://www.tossbank.com/ten-million)

Within the wider Toss identity, the official resource center supplies the group’s blue and gray brand assets and an affiliate-logo listing for Toss Bank. This is the right evidence for group identity and logo treatment, not for app-screen behavior or financial-product UI tokens. [Brand Resource Center](https://brand.toss.im/)

## 12. Principles

1. **Make the promised outcome easy to scan.** The home groups products by account, savings, loans, foreign exchange, cards, and help. *UI implication:* public information should use clear categorization before decorative treatment.
2. **Ask for a concrete banking problem.** The campaign explicitly requests an inconvenient bank experience. *UI implication:* feedback prompts should ask for one specific experience and clearly say how the response will be used.
3. **Separate brand assets from product evidence.** Official group color rules and live public CSS answer different questions. *UI implication:* never convert a logo color or shared design-kit convention into an unobserved banking-flow token.

## 13. Personas

The public campaign names customers with roles including self-employed people, office workers, university students, and families. These are examples presented by Toss Bank, not a validated user-research segmentation model. [Campaign](https://www.tossbank.com/ten-million)

**Public-source audience cues:** people managing everyday accounts, people considering loans or foreign exchange, card users, and people who want to report a frustrating banking experience. No invented personal profiles are included because the current evidence does not support them.

## 14. States

Measured 2026-09-29 on tossbank.com (real `:hover`, `:active`, and Tab to `:focus-visible`):

- **Hover and pressed.** The documentation outline button fills with `rgba(217,217,255,0.11)`; the pill action's fill goes from `rgba(253,253,254,0.89)` to `#ffffff`; the header menu button and the article-card title turn `#3182f6`; the article card lifts `translateY(-8px)`; the regulator link turns `#0056b3`. The selected documentation tab shows no visible change.
- **Focus.** The documentation outline button shows only its faint tint; the regulator link shows the browser's default ring; the pill action, the article card, the header menu button and the documentation tab show no visible indication. There is no authored focus ring.
- **Selected.** The documentation tab (`aria-selected="true"`) carries a `rgba(2,32,71,0.05)` fill on a child span.

There is no selector-backed empty, loading, error, success, disabled, toast, or skeleton state. Those state specifications are intentionally absent rather than inferred from generic banking conventions.

## 15. Motion & Easing

Computed transitions read on 2026-09-29 (observations, not tokens): the pill action `background 0.15s ease-in`; the article card `transform 0.15s ease-in, background 0.3s ease-out` with its 8px lift; the documentation button, tab, link and header menu `all 0s`. Reduced-motion behavior was not checked, and motion tokens remain intentionally absent.
