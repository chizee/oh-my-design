---
id: modusign
name: Modusign
display_name_kr: 모두싸인
country: KR
category: saas
homepage: "https://www.modusign.co.kr"
primary_color: "#fed05f"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=modusign.co.kr&sz=128"
verified: "2026-09-30"
added: "2026-06-10"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://modusign.co.kr/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing-pricing, url: "https://modusign.co.kr/pricing", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing-product, url: "https://modusign.co.kr/features", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://modusign.co.kr/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://modusign.co.kr/pricing", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://modusign.co.kr/features", captured: "2026-09-30" }
    - { id: recruit-intro, kind: official-doc, url: "https://recruit.modusign.co.kr/ko/intro", captured: "2026-09-30" }
    - { id: blog-clm-2412, kind: official-doc, url: "https://blog.modusign.co.kr/news/pr/etnews_2412", captured: "2026-09-30" }
    - { id: official-blog, kind: official-doc, url: "https://blog.modusign.co.kr/", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &mhcta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.colors.primary-hover": &mhctah { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"4\"]::state-hover", captured: "2026-09-30" }
    "tokens.colors.primary-border": *mhcta
    "tokens.colors.primary-border-deep": &mbanner { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"21\"]", captured: "2026-09-30" }
    "tokens.colors.primary-tint": &mfeat { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.colors.plan-blue": &mblue { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.blue-label": &mfp { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.colors.gov-navy": &mgov { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.colors.headline": &mhead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.ink": &mp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.body": &mbody { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.secondary": *mp
    "tokens.colors.gray-700": &msticky { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &mlist { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.colors.faint": &mtog { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.tab-inactive": &mhtab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.colors.black": *mhcta
    "tokens.colors.dark-fill": &mdark { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.canvas": *mbody
    "tokens.colors.surface": &mfree { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.surface-alt": &mbannerg { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"20\"]", captured: "2026-09-30" }
    "tokens.colors.hairline-faint": &mtogsel { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": &mcard { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.colors.hairline-strong": &mhsec { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"3\"]", captured: "2026-09-30" }
    "tokens.typography.family.sans": *mbody
    "tokens.typography.display-hero.size": &mh1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.typography.display-hero.weight": *mh1
    "tokens.typography.display-hero.lineHeight": *mh1
    "tokens.typography.display-hero.tracking": *mh1
    "tokens.typography.display-hero.use": *mh1
    "tokens.typography.display.size": &mph1 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h1", captured: "2026-09-30" }
    "tokens.typography.display.weight": *mph1
    "tokens.typography.display.lineHeight": *mph1
    "tokens.typography.display.tracking": *mph1
    "tokens.typography.display.use": *mph1
    "tokens.typography.closing.size": *mhead
    "tokens.typography.closing.weight": *mhead
    "tokens.typography.closing.lineHeight": *mhead
    "tokens.typography.closing.tracking": *mhead
    "tokens.typography.closing.use": *mhead
    "tokens.typography.section.size": &mph2 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.section.weight": *mph2
    "tokens.typography.section.lineHeight": *mph2
    "tokens.typography.section.tracking": *mph2
    "tokens.typography.section.use": *mph2
    "tokens.typography.headline.size": *mhead
    "tokens.typography.headline.weight": *mhead
    "tokens.typography.headline.lineHeight": *mhead
    "tokens.typography.headline.tracking": *mhead
    "tokens.typography.headline.use": *mhead
    "tokens.typography.tab-title.size": *mhtab
    "tokens.typography.tab-title.weight": *mhtab
    "tokens.typography.tab-title.lineHeight": *mhtab
    "tokens.typography.tab-title.tracking": *mhtab
    "tokens.typography.tab-title.use": *mhtab
    "tokens.typography.body-lg.size": *mh1
    "tokens.typography.body-lg.weight": *mh1
    "tokens.typography.body-lg.lineHeight": *mh1
    "tokens.typography.body-lg.tracking": *mh1
    "tokens.typography.body-lg.use": *mh1
    "tokens.typography.body-md.size": *mfp
    "tokens.typography.body-md.weight": *mfp
    "tokens.typography.body-md.lineHeight": *mfp
    "tokens.typography.body-md.tracking": *mfp
    "tokens.typography.body-md.use": *mfp
    "tokens.typography.body.size": *mbody
    "tokens.typography.body.weight": *mbody
    "tokens.typography.body.lineHeight": *mbody
    "tokens.typography.body.tracking": *mbody
    "tokens.typography.body.use": *mbody
    "tokens.typography.button.size": &mhero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.typography.button.weight": *mhero
    "tokens.typography.button.lineHeight": *mhero
    "tokens.typography.button.tracking": *mhero
    "tokens.typography.button.use": *mhero
    "tokens.typography.button-sm.size": *mhcta
    "tokens.typography.button-sm.weight": *mhcta
    "tokens.typography.button-sm.lineHeight": *mhcta
    "tokens.typography.button-sm.tracking": *mhcta
    "tokens.typography.button-sm.use": *mhcta
    "tokens.spacing.cta-sm-y": *mhcta
    "tokens.spacing.cta-sm-x": *mhcta
    "tokens.spacing.cta-y": *mhero
    "tokens.spacing.cta-x": *mhero
    "tokens.spacing.banner-y": *mbannerg
    "tokens.spacing.banner-x": *mbannerg
    "tokens.spacing.card": &mstat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.spacing.feature-y": *mfeat
    "tokens.spacing.feature-x": *mfeat
    "tokens.rounded.sm": *mhcta
    "tokens.rounded.md": *mhero
    "tokens.rounded.lg": *mbannerg
    "tokens.rounded.badge": *mfeat
    "tokens.rounded.toggle": *mtog
    "tokens.shadow.popular": &mpop { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::div", captured: "2026-09-30" }
    "tokens.components.header-cta.type": *mhcta
    "tokens.components.header-cta.bg": *mhcta
    "tokens.components.header-cta.fg": *mhcta
    "tokens.components.header-cta.border": *mhcta
    "tokens.components.header-cta.radius": *mhcta
    "tokens.components.header-cta.padding": *mhcta
    "tokens.components.header-cta.height": *mhcta
    "tokens.components.header-cta.font": *mhcta
    "tokens.components.header-cta.hover": *mhctah
    "tokens.components.header-cta.pressed": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"4\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.header-cta.states": *mhcta
    "tokens.components.header-cta.use": *mhcta
    "tokens.components.header-secondary.type": *mhsec
    "tokens.components.header-secondary.bg": *mhsec
    "tokens.components.header-secondary.fg": *mhsec
    "tokens.components.header-secondary.border": *mhsec
    "tokens.components.header-secondary.radius": *mhsec
    "tokens.components.header-secondary.padding": *mhsec
    "tokens.components.header-secondary.height": *mhsec
    "tokens.components.header-secondary.font": *mhsec
    "tokens.components.header-secondary.hover": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"3\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.header-secondary.pressed": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"3\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.header-secondary.states": *mhsec
    "tokens.components.header-secondary.use": *mhsec
    "tokens.components.nav-link.type": &mnav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.components.nav-link.bg": *mnav
    "tokens.components.nav-link.fg": *mnav
    "tokens.components.nav-link.padding": *mnav
    "tokens.components.nav-link.height": *mnav
    "tokens.components.nav-link.font": *mnav
    "tokens.components.nav-link.states": *mnav
    "tokens.components.nav-link.use": *mnav
    "tokens.components.hero-cta.type": *mhero
    "tokens.components.hero-cta.bg": *mhero
    "tokens.components.hero-cta.fg": *mhero
    "tokens.components.hero-cta.border": *mhero
    "tokens.components.hero-cta.radius": *mhero
    "tokens.components.hero-cta.padding": *mhero
    "tokens.components.hero-cta.height": *mhero
    "tokens.components.hero-cta.font": *mhero
    "tokens.components.hero-cta.hover": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"7\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.hero-cta.pressed": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"7\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.hero-cta.states": *mhero
    "tokens.components.hero-cta.use": *mhero
    "tokens.components.outline-cta.type": &mout { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.components.outline-cta.bg": *mout
    "tokens.components.outline-cta.fg": *mout
    "tokens.components.outline-cta.border": *mout
    "tokens.components.outline-cta.radius": *mout
    "tokens.components.outline-cta.padding": *mout
    "tokens.components.outline-cta.height": *mout
    "tokens.components.outline-cta.font": *mout
    "tokens.components.outline-cta.hover": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"6\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.outline-cta.pressed": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"6\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.outline-cta.states": *mout
    "tokens.components.outline-cta.use": *mout
    "tokens.components.dark-cta.type": *mdark
    "tokens.components.dark-cta.bg": *mdark
    "tokens.components.dark-cta.fg": *mdark
    "tokens.components.dark-cta.border": *mdark
    "tokens.components.dark-cta.radius": *mdark
    "tokens.components.dark-cta.padding": *mdark
    "tokens.components.dark-cta.height": *mdark
    "tokens.components.dark-cta.font": *mdark
    "tokens.components.dark-cta.hover": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"8\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.dark-cta.pressed": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"8\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.dark-cta.states": *mdark
    "tokens.components.dark-cta.use": *mdark
    "tokens.components.black-cta.type": &mblack { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.components.black-cta.bg": *mblack
    "tokens.components.black-cta.fg": *mblack
    "tokens.components.black-cta.border": *mblack
    "tokens.components.black-cta.radius": *mblack
    "tokens.components.black-cta.padding": *mblack
    "tokens.components.black-cta.height": *mblack
    "tokens.components.black-cta.font": *mblack
    "tokens.components.black-cta.hover": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"9\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.black-cta.pressed": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"9\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.black-cta.states": *mblack
    "tokens.components.black-cta.use": *mblack
    "tokens.components.plan-blue-cta.type": *mblue
    "tokens.components.plan-blue-cta.bg": *mblue
    "tokens.components.plan-blue-cta.fg": *mblue
    "tokens.components.plan-blue-cta.border": *mblue
    "tokens.components.plan-blue-cta.radius": *mblue
    "tokens.components.plan-blue-cta.padding": *mblue
    "tokens.components.plan-blue-cta.height": *mblue
    "tokens.components.plan-blue-cta.font": *mblue
    "tokens.components.plan-blue-cta.states": *mblue
    "tokens.components.plan-blue-cta.use": *mblue
    "tokens.components.plan-free-cta.type": *mfree
    "tokens.components.plan-free-cta.bg": *mfree
    "tokens.components.plan-free-cta.fg": *mfree
    "tokens.components.plan-free-cta.border": *mfree
    "tokens.components.plan-free-cta.radius": *mfree
    "tokens.components.plan-free-cta.padding": *mfree
    "tokens.components.plan-free-cta.height": *mfree
    "tokens.components.plan-free-cta.font": *mfree
    "tokens.components.plan-free-cta.states": *mfree
    "tokens.components.plan-free-cta.use": *mfree
    "tokens.components.plan-outline-cta.type": &mplan { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.components.plan-outline-cta.bg": *mplan
    "tokens.components.plan-outline-cta.fg": *mplan
    "tokens.components.plan-outline-cta.border": *mplan
    "tokens.components.plan-outline-cta.radius": *mplan
    "tokens.components.plan-outline-cta.padding": *mplan
    "tokens.components.plan-outline-cta.height": *mplan
    "tokens.components.plan-outline-cta.font": *mplan
    "tokens.components.plan-outline-cta.hover": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"12\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.plan-outline-cta.pressed": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"12\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.plan-outline-cta.states": *mplan
    "tokens.components.plan-outline-cta.use": *mplan
    "tokens.components.gov-cta.type": *mgov
    "tokens.components.gov-cta.bg": *mgov
    "tokens.components.gov-cta.fg": *mgov
    "tokens.components.gov-cta.border": *mgov
    "tokens.components.gov-cta.radius": *mgov
    "tokens.components.gov-cta.padding": *mgov
    "tokens.components.gov-cta.height": *mgov
    "tokens.components.gov-cta.font": *mgov
    "tokens.components.gov-cta.states": *mgov
    "tokens.components.gov-cta.use": *mgov
    "tokens.components.billing-toggle.type": *mtog
    "tokens.components.billing-toggle.bg": *mtog
    "tokens.components.billing-toggle.fg": *mtog
    "tokens.components.billing-toggle.radius": *mtog
    "tokens.components.billing-toggle.padding": *mtog
    "tokens.components.billing-toggle.height": *mtog
    "tokens.components.billing-toggle.font": *mtog
    "tokens.components.billing-toggle.selected": *mtogsel
    "tokens.components.billing-toggle.states": *mtog
    "tokens.components.billing-toggle.use": *mtog
    "tokens.components.pricing-tab.type": &mtab { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"18\"]", captured: "2026-09-30" }
    "tokens.components.pricing-tab.bg": *mtab
    "tokens.components.pricing-tab.fg": *mtab
    "tokens.components.pricing-tab.radius": *mtab
    "tokens.components.pricing-tab.padding": *mtab
    "tokens.components.pricing-tab.height": *mtab
    "tokens.components.pricing-tab.font": *mtab
    "tokens.components.pricing-tab.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.components.pricing-tab.hover": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"18\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.pricing-tab.pressed": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"18\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.pricing-tab.states": *mtab
    "tokens.components.pricing-tab.use": *mtab
    "tokens.components.feature-tab.type": *mhtab
    "tokens.components.feature-tab.fg": *mhtab
    "tokens.components.feature-tab.font": *mhtab
    "tokens.components.feature-tab.selected": *mhtab
    "tokens.components.feature-tab.states": *mhtab
    "tokens.components.feature-tab.use": *mhtab
    "tokens.components.feature-sticky-menu.type": *msticky
    "tokens.components.feature-sticky-menu.bg": *msticky
    "tokens.components.feature-sticky-menu.fg": *msticky
    "tokens.components.feature-sticky-menu.radius": *msticky
    "tokens.components.feature-sticky-menu.padding": *msticky
    "tokens.components.feature-sticky-menu.height": *msticky
    "tokens.components.feature-sticky-menu.font": *msticky
    "tokens.components.feature-sticky-menu.hover": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style-state-sample, selector: "surface-3::[data-omd-capture=\"12\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.feature-sticky-menu.pressed": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style-state-sample, selector: "surface-3::[data-omd-capture=\"12\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.feature-sticky-menu.states": *msticky
    "tokens.components.feature-sticky-menu.use": *msticky
    "tokens.components.pricing-card.type": *mcard
    "tokens.components.pricing-card.bg": *mcard
    "tokens.components.pricing-card.border": *mcard
    "tokens.components.pricing-card.radius": *mcard
    "tokens.components.pricing-card.use": *mcard
    "tokens.components.popular-pricing-card.type": *mpop
    "tokens.components.popular-pricing-card.bg": *mpop
    "tokens.components.popular-pricing-card.border": *mpop
    "tokens.components.popular-pricing-card.radius": *mpop
    "tokens.components.popular-pricing-card.shadow": *mpop
    "tokens.components.popular-pricing-card.use": *mpop
    "tokens.components.stat-card.type": *mstat
    "tokens.components.stat-card.bg": *mstat
    "tokens.components.stat-card.border": *mstat
    "tokens.components.stat-card.radius": *mstat
    "tokens.components.stat-card.padding": *mstat
    "tokens.components.stat-card.size": *mstat
    "tokens.components.stat-card.use": *mstat
    "tokens.components.cta-banner.type": *mbanner
    "tokens.components.cta-banner.bg": *mbanner
    "tokens.components.cta-banner.fg": *mbanner
    "tokens.components.cta-banner.border": *mbanner
    "tokens.components.cta-banner.radius": *mbanner
    "tokens.components.cta-banner.padding": *mbanner
    "tokens.components.cta-banner.size": *mbanner
    "tokens.components.cta-banner.states": *mbanner
    "tokens.components.cta-banner.use": *mbanner
    "tokens.components.cta-banner-gray.type": *mbannerg
    "tokens.components.cta-banner-gray.bg": *mbannerg
    "tokens.components.cta-banner-gray.fg": *mbannerg
    "tokens.components.cta-banner-gray.border": *mbannerg
    "tokens.components.cta-banner-gray.radius": *mbannerg
    "tokens.components.cta-banner-gray.padding": *mbannerg
    "tokens.components.cta-banner-gray.size": *mbannerg
    "tokens.components.cta-banner-gray.states": *mbannerg
    "tokens.components.cta-banner-gray.use": *mbannerg
    "tokens.components.new-badge.type": &mnew { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.components.new-badge.bg": *mnew
    "tokens.components.new-badge.fg": *mnew
    "tokens.components.new-badge.radius": *mnew
    "tokens.components.new-badge.padding": *mnew
    "tokens.components.new-badge.height": *mnew
    "tokens.components.new-badge.font": *mnew
    "tokens.components.new-badge.use": *mnew
    "tokens.components.info-badge.type": &minfo { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.components.info-badge.bg": *minfo
    "tokens.components.info-badge.fg": *minfo
    "tokens.components.info-badge.border": *minfo
    "tokens.components.info-badge.radius": *minfo
    "tokens.components.info-badge.padding": *minfo
    "tokens.components.info-badge.font": *minfo
    "tokens.components.info-badge.use": *minfo
    "tokens.components.feature-card.type": *mfeat
    "tokens.components.feature-card.bg": *mfeat
    "tokens.components.feature-card.radius": *mfeat
    "tokens.components.feature-card.padding": *mfeat
    "tokens.components.feature-card.use": *mfeat
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#fed05f"
    primary-hover: "#ffd80a"
    primary-border: "#ffc533"
    primary-border-deep: "#ffb90a"
    primary-tint: "#fff8e6"
    plan-blue: "#217aff"
    blue-label: "#4b75e7"
    gov-navy: "#08236d"
    headline: "#111111"
    ink: "#212121"
    body: "#333333"
    secondary: "#474747"
    gray-700: "#5c5c5c"
    muted: "#707070"
    faint: "#999999"
    tab-inactive: "#d3d3d3"
    black: "#000000"
    dark-fill: "#1a1a1a"
    canvas: "#ffffff"
    surface: "#fafafa"
    surface-alt: "#f5f5f5"
    hairline-faint: "#f0f0f0"
    hairline: "#e6e6e6"
    hairline-strong: "#cccccc"
  typography:
    family: { sans: "Pretendard" }
    display-hero: { size: 72, weight: 700, lineHeight: 1.4, tracking: -0.4, use: "Home hero headline (h1.new-display-hero), set in white" }
    display: { size: 56, weight: 700, lineHeight: 1.4, tracking: -0.4, use: "Page headline on /pricing and /features (h1)" }
    closing: { size: 52, weight: 700, lineHeight: 1.4, tracking: -0.4, use: "Closing consultation headline on the home page (h2)" }
    section: { size: 45, weight: 700, lineHeight: 1.4, tracking: -0.4, use: "Section heading (h2) on /pricing and /features" }
    headline: { size: 36, weight: 600, lineHeight: 1.45, tracking: -0.72, use: "Home workflow headline (h2.main-headline)" }
    tab-title: { size: 24, weight: 700, lineHeight: 1.4, tracking: -0.24, use: "Home product tab title (h3.tab-title)" }
    body-lg: { size: 24, weight: 400, lineHeight: 1.6, tracking: -0.4, use: "Home hero subline (new-body-lg)" }
    body-md: { size: 18, weight: 400, lineHeight: 1.6, tracking: -0.4, use: "Feature description copy on /features" }
    body: { size: 16, weight: 400, lineHeight: 1.6, tracking: -0.4, use: "Document default body text" }
    button: { size: 16, weight: 700, lineHeight: 1.6, tracking: -0.4, use: "52px action label" }
    button-sm: { size: 14, weight: 700, lineHeight: 1.83, tracking: -0.4, use: "44px header action label" }
  spacing: { cta-sm-y: 8, cta-sm-x: 16, cta-y: 12, cta-x: 24, banner-y: 30, banner-x: 36, card: 36, feature-y: 48, feature-x: 56 }
  rounded: { sm: 6, md: 8, lg: 12, badge: 24, toggle: 100 }
  shadow:
    popular: "rgba(33, 122, 255, 0.3) 0px 0px 20px 0px"
  components:
    header-cta: { type: button, bg: "#fed05f", fg: "#000000", border: "1px solid #ffc533", radius: "6px", padding: "8px 16px", height: "44px", font: "14px / 700 / 25.6px Pretendard", hover: "bg #ffd80a", pressed: "bg #ffd80a", states: "rest, hover and pressed; the header copy on each of the three pages (capture 4 on each) settles on #ffd80a in both frames, as do the page-body yellow actions; focus is not declared from the capture", use: "무료 체험 시작 in the header at home::[data-omd-capture=\"4\"], 110 x 44; repeated on /pricing and /features" }
    header-secondary: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #cccccc", radius: "6px", padding: "8px 16px", height: "44px", font: "14px / 700 / 25.6px Pretendard", hover: "bg #f5f5f5", pressed: "bg #f5f5f5", states: "rest, hover and pressed; the header copy on each of the three pages settles on #f5f5f5; focus is not declared from the capture", use: "도입 문의 beside the yellow action at home::[data-omd-capture=\"3\"], 84 x 44" }
    nav-link: { type: tab, bg: "transparent", fg: "#000000", padding: "8px 16px", height: "42px", font: "16px / 400 / 25.6px Pretendard", states: "rest only; no state frame was recorded", use: "Header text link (블로그) at home::[data-omd-capture=\"1\"], 72 x 42; the sign-in link beside it was read for style and never followed" }
    hero-cta: { type: button, bg: "#fed05f", fg: "#000000", border: "1px solid #ffc533", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 700 / 25.6px Pretendard", hover: "bg #ffd80a", pressed: "bg #ffd80a", states: "rest, hover and pressed; home captures 7 and 18 and /features capture 7 all settle on #ffd80a; focus is not declared from the capture", use: "Page-body 무료 체험 시작 action at home::[data-omd-capture=\"7\"], 137 x 52" }
    outline-cta: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #cccccc", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 700 / 25.6px Pretendard", hover: "bg #f5f5f5", pressed: "bg #f5f5f5", states: "rest, hover and pressed; home captures 6 and 17 and /features captures 6 and 16 settle on #f5f5f5; focus is not declared from the capture", use: "Outlined consultation action paired with the yellow one at home::[data-omd-capture=\"6\"], 107 x 52" }
    dark-cta: { type: button, bg: "#1a1a1a", fg: "#ffffff", border: "1px solid #cccccc", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 600 / 25.6px Pretendard", hover: "bg #212121", pressed: "bg #212121", states: "rest, hover and pressed; home captures 8 and 13 both settle on #212121; focus is not declared from the capture", use: "Dark action on the home page at home::[data-omd-capture=\"8\"], 182 x 52; capture 13 is a 148 x 50 sibling" }
    black-cta: { type: button, bg: "#000000", fg: "#ffffff", border: "1px solid #000000", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 700 / 25.6px Pretendard", hover: "bg #333333", pressed: "bg #333333", states: "rest, hover and pressed; /pricing capture 9 and /features capture 22 both settle on #333333; focus is not declared from the capture", use: "Black plan action on /pricing at surface-2::[data-omd-capture=\"9\"], 299 x 52" }
    plan-blue-cta: { type: button, bg: "#217aff", fg: "#ffffff", border: "1px solid #217aff", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 700 / 25.6px Pretendard", states: "one element; its hover and pressed frames both read #0e6eff, but with no sibling to agree the value is not declared as a state", use: "Action on the recommended plan card at surface-2::[data-omd-capture=\"8\"], 299 x 52" }
    plan-free-cta: { type: button, bg: "#fafafa", fg: "#212121", border: "1px solid #999999", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 700 / 25.6px Pretendard", states: "one element; its hover and pressed frames read #f5f5f5, not declared without a sibling", use: "Free-plan action on /pricing at surface-2::[data-omd-capture=\"7\"], 299 x 52" }
    plan-outline-cta: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #cccccc", radius: "8px", padding: "8px 24px", height: "44px", font: "16px / 700 / 25.6px Pretendard", hover: "bg #f5f5f5", pressed: "bg #f5f5f5", states: "rest, hover and pressed; the three plan-detail actions (captures 12, 13 and 14) all settle on #f5f5f5; focus is not declared from the capture", use: "Plan-detail action on /pricing at surface-2::[data-omd-capture=\"12\"], 173 x 44" }
    gov-cta: { type: button, bg: "#08236d", fg: "#ffffff", border: "1px solid #cccccc", radius: "8px", padding: "8px 24px", height: "44px", font: "16px / 700 / 25.6px Pretendard", states: "rest only; no state frame was recorded", use: "Public-sector plan action on /pricing at surface-2::[data-omd-capture=\"15\"], 173 x 44" }
    billing-toggle: { type: toggle, bg: "transparent", fg: "#999999", radius: "100px", padding: "7px 0px 8px", height: "41px", font: "16px / 400 / 25.6px Pretendard", selected: "bg #ffffff, fg #333333, weight 700, 1px solid #f0f0f0, 8px radius (capture 6, 133 x 43)", states: "selected variant read from rest values (capture 6 against 5); the hover and pressed frames of capture 5 match its rest values in every compared property, so no state is declared", use: "Billing-period switch on /pricing at surface-2::[data-omd-capture=\"5\"], 76 x 41" }
    pricing-tab: { type: tab, bg: "transparent", fg: "#999999", radius: "8px", padding: "12px 16px 0px", height: "57px", font: "18px / 400 / 25.6px Pretendard", selected: "fg #212121, weight 700 (capture 17)", hover: "bg #f0f0f0, fg #212121", pressed: "bg #f0f0f0, fg #212121", states: "rest, hover and pressed; captures 18 and 19 settle on the same values and the selected tab (capture 17) takes the same #f0f0f0 fill; focus is not declared from the capture", use: "Plan-comparison tab on /pricing at surface-2::[data-omd-capture=\"18\"], 105 x 57" }
    feature-tab: { type: tab, fg: "#d3d3d3", font: "24px / 700 / 33.6px Pretendard", selected: "fg #111111 on the first title (모두싸인 전자서명)", states: "selected variant read from the rest values of three titles; no pointer frame", use: "Product tab titles on the home page (h3.tab-title), 24px with -0.24px tracking" }
    feature-sticky-menu: { type: tab, bg: "#ffffff", fg: "#5c5c5c", radius: "12px", padding: "16px", height: "58px", font: "18px / 400 / 25.6px Pretendard", hover: "bg #fffae0", pressed: "bg #fffae0", states: "rest, hover and pressed; captures 12, 13 and 14 all settle on #fffae0; focus is not declared from the capture", use: "Sticky section menu on /features at surface-3::[data-omd-capture=\"12\"], 251 x 58" }
    pricing-card: { type: card, bg: "#ffffff", border: "1px solid #e6e6e6", radius: "12px", use: "Plan card on /pricing (div.pricing-card-6), 349 wide; a 40px 24px header over rows padded 16px 24px" }
    popular-pricing-card: { type: card, bg: "#ffffff", border: "1px solid #217aff", radius: "12px", shadow: "rgba(33, 122, 255, 0.3) 0px 0px 20px 0px", use: "Recommended plan card on /pricing, 349 x 877, topped by a #e9f2ff badge strip (12px 12px 0 0 radius, 4px 12px padding)" }
    stat-card: { type: card, bg: "transparent", border: "1px solid #e6e6e6", radius: "12px", padding: "36px 36px 52px", size: "381px x 180px", use: "Statistic card on the home page (div.new-main-stat-card), three in a row; its label (기업 및 기관 회원) is 18px / 400 #474747" }
    cta-banner: { type: card, bg: "#fed05f", fg: "#212121", border: "1px solid #ffb90a", radius: "12px", padding: "30px 36px", size: "528px x 94px", states: "whole-card link; on one element its hover and pressed frames read #ffd80a, the value the yellow buttons settle on, but the banner itself is not declared as a state", use: "Yellow 무료 체험 시작 banner at the foot of /pricing and /features (a.cta-card.bg-amber300, surface-2 capture 21)" }
    cta-banner-gray: { type: card, bg: "#f5f5f5", fg: "#212121", border: "1px solid #f0f0f0", radius: "12px", padding: "30px 36px", size: "528px x 94px", states: "whole-card link; its hover and pressed frames read #e6e6e6 on one element, so no state is declared", use: "Grey consultation banner beside the yellow one (a.cta-card.bg-gray25, surface-2 capture 20)" }
    new-badge: { type: badge, bg: "#fff1cc", fg: "#e0a100", radius: "160px", padding: "0px 8px", height: "26px", font: "13px / 500 / 25.6px Pretendard", use: "NEW marker beside footer items (div.icon-new-badge), 42 x 26" }
    info-badge: { type: badge, bg: "#f0f2ff", fg: "#4351e8", border: "1px solid #e2e9fe", radius: "6px", padding: "6px 12px", font: "13px / 500 / 16.9px Pretendard", use: "Label badge on the home page's additional-service rows (div.new-main-additional-badge), 225 x 36" }
    feature-card: { type: card, bg: "#fafafa", radius: "12px", padding: "48px 56px 64px", use: "Advanced-feature panel on /features (div.feature-advanced-card); its siblings fill with #333333 (API, white text), #fff8e6 (security) and #fffcf5 (branding)" }
  components_harvested: true
---

# Design System Inspiration of Modusign

## 1. Visual Theme & Atmosphere

Modusign (모두싸인) is a Korean electronic-signature and contract platform, operated by 주식회사 모두싸인. Its founder and CEO 이영준 started the company in 2015 as a student startup in Busan under the name 로아팩토리, beginning with a lawyer-search service; seeing how many legal disputes came from lost or badly drafted contracts led him to electronic contracts. By Hankook Ilbo's January 2026 interview, about 330,000 companies and public bodies used the service and more than ten million people used it. The company's recruiting site states the mission in one line — "계약이 모두에게 더 간편하고 안전할 수 있도록 바꿉니다" — and describes where it is going: past e-signature toward a CLM (contract lifecycle management) platform that connects drafting through analysis with AI. The home page has moved in the same direction: its title now reads "전자서명·전자계약의 표준" and its hero "대한민국 전자서명의 표준 모두싸인", above a headline about connecting the whole contract process — 작성, 검토, 체결, 관리 — in one place.

The brand expression is a warm yellow action on a quiet white page. Every 무료 체험 시작 button on the three captured pages is filled with egg-yolk yellow `#fed05f`, edged in a 1px honey `#ffc533`, labelled in black `#000000`, and brightens to `#ffd80a` under the pointer. Around it the site stays plain: `#333333` body text on `#ffffff`, `#111111` and `#212121` for the strongest copy, and a ladder of 1px hairlines (`#f0f0f0`, `#e6e6e6`, `#cccccc`) and pale fills (`#fafafa`, `#f5f5f5`, the warm `#fff8e6`) instead of elevation. The redesigned home hero sets a white 72px / 700 headline over a dark band whose fill the collector did not record as a colour, with a yellow `#fed05f` dash in the tag line above it; the headline's noun rolls through 계약서, 신청서, 서약서, 확인서 and other document types.

Pricing adds a parallel set of plan colours — `#217aff` for the recommended plan's action and edge, `#08236d` for the public-sector plan, black `#000000` for another plan action — and the one shadow on the captured pages: a soft blue glow, `rgba(33, 122, 255, 0.3) 0px 0px 20px 0px`, around the recommended plan card. All text is Pretendard.

**Key Characteristics:**
- Yellow action system — `#fed05f` fill, 1px `#ffc533` edge, black label, `#ffd80a` on hover and press
- Pretendard throughout, weight 700 for headlines and action labels, a site-wide -0.4px tracking and 1.6 body line height
- Flat surfaces separated by 1px hairlines and pale fills; the recommended plan card's blue glow is the only shadow observed
- Radii at 6px (header actions), 8px (page actions, tabs), 12px (cards, banners, menus), 24px (badges), 100px (billing toggle)
- Outlined `#cccccc` actions and dark `#1a1a1a` / `#000000` actions alongside the yellow one
- Plan-context colours on /pricing: `#217aff`, `#08236d`
- A dark hero band on the home page with a white headline

## Primary tasks

- Send a batch of signature requests and see who has not signed yet
- Sign a document from a link without creating an account
- Keep and manage finished contracts where they were signed (캐비닛)
- Start a free trial without booking a sales call first
- Check legal validity and security before adopting
- Embed signing into another product through the API

## 2. Color Palette & Roles

Every token below was read by the deterministic collector on 2026-09-30 from modusign.co.kr, /pricing and /features.

**Why `#fed05f` is the primary.** It is the fill of the rendered primary action on every captured page: the header's 무료 체험 시작 (capture 4 on home, /pricing and /features), the page-body 무료 체험 시작 (home captures 7 and 18, /features capture 7) and the yellow conversion banner. The bundle's colour census records `#fed05f` as a background nine times across all three surfaces, and each of those actions settles on `#ffd80a` in its hover and pressed frames.

### Yellow (primary action)
- **Modusign Yellow** (`#fed05f`): Fill of every 무료 체험 시작 action and of the yellow conversion banner; also the dash in the home hero's tag line.
- **Yellow Hover** (`#ffd80a`): Hover and pressed fill of the yellow actions, agreed by the header, page-body and banner copies on all three pages.
- **Honey Edge** (`#ffc533`): The 1px border of the yellow buttons.
- **Deep Honey Edge** (`#ffb90a`): The 1px border of the yellow conversion banner.
- **Warm Tint** (`#fff8e6`): Fill of the security panel on /features.

### Plan colours (pricing)
- **Plan Blue** (`#217aff`): Fill and edge of the recommended plan's action, the recommended card's 1px border, and the tone of its glow.
- **GOV Navy** (`#08236d`): Fill of the public-sector plan action.
- **Blue Label** (`#4b75e7`): Small 16px / 500 labels on /features.

### Text
- **Headline** (`#111111`): The home workflow headline and the selected product tab title.
- **Ink** (`#212121`): Strong copy on the home page (32px / 600 headings, 18px / 700 labels), the free-plan action label and banner titles.
- **Body** (`#333333`): The document default and the headlines on /pricing and /features.
- **Secondary** (`#474747`): Statistic labels and footer menu links.
- **Gray 700** (`#5c5c5c`): Feature descriptions and the sticky menu on /features.
- **Muted** (`#707070`): Plan list items on /pricing.
- **Faint** (`#999999`): Inactive toggle and tab labels, the struck-through list price, the free-plan action's border.
- **Tab Inactive** (`#d3d3d3`): Unselected product tab titles on the home page.
- **Black** (`#000000`): Labels on the yellow and white actions; the fill of the black plan action.

### Surfaces and lines
- **Canvas** (`#ffffff`): Page background, plan cards, outlined actions, the sticky menu.
- **Dark Fill** (`#1a1a1a`): Fill of the home page's dark actions, which settle on `#212121` under the pointer.
- **Surface** (`#fafafa`): The free-plan action and the workspace panel on /features.
- **Surface Alt** (`#f5f5f5`): The grey conversion banner, hover fill of every outlined action, grey badges.
- **Hairline Faint** (`#f0f0f0`): The selected billing toggle's border, the grey banner's border, the pricing tabs' hover fill.
- **Hairline** (`#e6e6e6`): 1px borders of plan cards and home statistic cards.
- **Hairline Strong** (`#cccccc`): 1px borders of the outlined actions and of the dark and GOV actions.

### Not carried forward
- `#0000ee` "browser-default link blue": in the capture it is the computed colour of wrapper anchors (card links, SNS icons, the "자세히 보기" text buttons, the floating 소개서 받기 button). Their visible labels are child elements styled white or `gray1000`, so no link colour is claimed; the `#ff0000` in their pressed frames is the browser's default `:active` colour.
- `#dddddd` (comparison-table lines) and `#ff4d4f` (consult-form errors) were not observed on the captured pages. `#e2e9fe` is now a badge fill and badge edge on /features and home, not a plan-column tint.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard` — loaded, 747 observed uses across headings, body, buttons, cards, tabs and badges; the computed family appears as both `Pretendard` and `pretendard`. The bundle records no source URL for it and the site's shared Webflow stylesheet declares no `@font-face` for it, so how it is served was not resolved. Pretendard is Kil Hyung-jin's open typeface, published under the SIL Open Font License 1.1; it is not a Modusign-owned face.
- **Declared only (no observed use)**: `Lato`, `Lato Fallback` and `Noto Sans KR` (Google Fonts), and `webflow-icons` (an icon font embedded in the Webflow stylesheet).
- **Official brand typeface**: none was found on the captured or context pages, so none is claimed.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Display Hero | Pretendard | 72px | 700 | 100.8px (1.4) | -0.4px | Home hero (white) |
| Display | Pretendard | 56px | 700 | 78.4px (1.4) | -0.4px | /pricing and /features h1 |
| Closing | Pretendard | 52px | 700 | 72.8px (1.4) | -0.4px | Home consultation headline |
| Section | Pretendard | 45px | 700 | 63px (1.4) | -0.4px | /pricing and /features h2 |
| Headline | Pretendard | 36px | 600 | 52.2px (1.45) | -0.72px | Home workflow headline |
| Tab Title | Pretendard | 24px | 700 | 33.6px (1.4) | -0.24px | Home product tabs |
| Body Large | Pretendard | 24px | 400 | 38.4px (1.6) | -0.4px | Home hero subline |
| Body Medium | Pretendard | 18px | 400 | 28.8px (1.6) | -0.4px | /features descriptions |
| Body | Pretendard | 16px | 400 | 25.6px (1.6) | -0.4px | Document default |
| Button | Pretendard | 16px | 700 | 25.6px | -0.4px | 52px actions |
| Button Small | Pretendard | 14px | 700 | 25.6px | -0.4px | 44px header actions |

### Principles
- **Bold headlines, regular reading text**: headlines and action labels at 700 (the workflow headline at 600), reading text at 400.
- **1.4 on headlines, 1.6 on text**: multi-line Korean headlines keep a 1.4 line height; body copy sits at 1.6.
- **Tight tracking everywhere**: -0.4px is applied site-wide; the 36px headline tightens to -0.72px and the tab titles loosen to -0.24px.

## 4. Component Stylings

### Navigation

**Header text link**
- Background: transparent
- Text: `#000000`
- Padding: 8px 16px
- Height: 42px
- Font: 16px / 400 / 25.6px Pretendard
- States: rest only; no state frame was recorded
- Use: 블로그 in the header; the sign-in link beside it was read for style and never followed

**Home product tabs**
- Text: `#d3d3d3` unselected
- Font: 24px / 700 / 33.6px Pretendard, -0.24px
- Selected: `#111111` on the first title (모두싸인 전자서명)
- States: selected variant read from rest values; no pointer frame
- Use: product tab titles on the home page

**Sticky feature menu (/features)**
- Background: `#ffffff`
- Text: `#5c5c5c`
- Radius: 12px
- Padding: 16px
- Height: 58px
- Font: 18px / 400 / 25.6px Pretendard
- Hover: background `#fffae0`
- Pressed: background `#fffae0`
- States: three siblings settle on `#fffae0`; focus is not declared from the capture
- Use: sticky section menu, 251 × 58

**Plan-comparison tab (/pricing)**
- Background: transparent
- Text: `#999999`
- Radius: 8px
- Padding: 12px 16px 0px
- Height: 57px
- Font: 18px / 400 / 25.6px Pretendard
- Selected: text `#212121` at 700
- Hover: background `#f0f0f0`, text `#212121`
- Pressed: background `#f0f0f0`, text `#212121`
- States: two siblings agree, and the selected tab takes the same fill; focus is not declared from the capture
- Use: tabs above the plan comparison

**Billing toggle (/pricing)**
- Background: transparent
- Text: `#999999`
- Radius: 100px
- Padding: 7px 0px 8px
- Height: 41px
- Font: 16px / 400 / 25.6px Pretendard
- Selected: `#ffffff` background, `#333333` text at 700, 1px solid `#f0f0f0`, 8px radius
- States: selected variant read from rest values; the unselected option's hover and pressed frames match its rest values, so no state is declared
- Use: billing-period switch

### Buttons

**Header action (무료 체험 시작)**
- Background: `#fed05f`
- Text: `#000000`
- Border: 1px solid `#ffc533`
- Radius: 6px
- Padding: 8px 16px
- Height: 44px
- Font: 14px / 700 / 25.6px Pretendard
- Hover: background `#ffd80a`
- Pressed: background `#ffd80a`
- States: the header copy on all three pages settles on `#ffd80a`; focus is not declared from the capture
- Use: header, 110 × 44

**Header secondary (도입 문의)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Radius: 6px
- Padding: 8px 16px
- Height: 44px
- Font: 14px / 700 / 25.6px Pretendard
- Hover: background `#f5f5f5`
- Pressed: background `#f5f5f5`
- States: the header copy on all three pages settles on `#f5f5f5`; focus is not declared from the capture
- Use: header, left of the yellow action, 84 × 44

**Primary action (무료 체험 시작)**
- Background: `#fed05f`
- Text: `#000000`
- Border: 1px solid `#ffc533`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / 25.6px Pretendard
- Hover: background `#ffd80a`
- Pressed: background `#ffd80a`
- States: three copies on two pages settle on `#ffd80a`; focus is not declared from the capture
- Use: page-body free-trial action, 137 × 52

**Outlined action**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / 25.6px Pretendard
- Hover: background `#f5f5f5`
- Pressed: background `#f5f5f5`
- States: four copies on two pages settle on `#f5f5f5`; focus is not declared from the capture
- Use: consultation action paired with the yellow one, 107 × 52

**Dark action**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Border: 1px solid `#cccccc`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 600 / 25.6px Pretendard
- Hover: background `#212121`
- Pressed: background `#212121`
- States: two siblings settle on `#212121`; focus is not declared from the capture
- Use: dark actions on the home page, 182 × 52

**Black plan action**
- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#000000`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / 25.6px Pretendard
- Hover: background `#333333`
- Pressed: background `#333333`
- States: a /pricing and a /features copy settle on `#333333`; focus is not declared from the capture
- Use: plan action on /pricing, 299 × 52

**Recommended plan action**
- Background: `#217aff`
- Text: `#ffffff`
- Border: 1px solid `#217aff`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / 25.6px Pretendard
- States: one element; its hover and pressed frames read `#0e6eff`, not declared without a sibling
- Use: action on the recommended plan card, 299 × 52

**Free plan action**
- Background: `#fafafa`
- Text: `#212121`
- Border: 1px solid `#999999`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / 25.6px Pretendard
- States: one element; its hover and pressed frames read `#f5f5f5`, not declared without a sibling
- Use: free-plan action on /pricing

**Plan-detail action**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Radius: 8px
- Padding: 8px 24px
- Height: 44px
- Font: 16px / 700 / 25.6px Pretendard
- Hover: background `#f5f5f5`
- Pressed: background `#f5f5f5`
- States: three siblings settle on `#f5f5f5`; focus is not declared from the capture
- Use: plan-detail cards on /pricing, 173 × 44

**Public-sector plan action**
- Background: `#08236d`
- Text: `#ffffff`
- Border: 1px solid `#cccccc`
- Radius: 8px
- Padding: 8px 24px
- Height: 44px
- Font: 16px / 700 / 25.6px Pretendard
- States: rest only; no state frame was recorded
- Use: GOV plan action on /pricing, 173 × 44

### Cards & Containers

**Plan card**
- Background: `#ffffff`
- Border: 1px solid `#e6e6e6`
- Radius: 12px
- Use: plan cards on /pricing, 349 wide; 40px 24px header over 16px 24px rows

**Recommended plan card**
- Background: `#ffffff`
- Border: 1px solid `#217aff`
- Radius: 12px
- Shadow: `rgba(33, 122, 255, 0.3) 0px 0px 20px 0px`
- Use: the recommended plan, 349 × 877, topped by a `#e9f2ff` badge strip with 12px 12px 0 0 corners

**Statistic card**
- Background: transparent
- Border: 1px solid `#e6e6e6`
- Radius: 12px
- Padding: 36px 36px 52px
- Size: 381 × 180
- Use: three statistic cards on the home page; label 18px / 400 `#474747`

**Yellow conversion banner**
- Background: `#fed05f`
- Text: `#212121`
- Border: 1px solid `#ffb90a`
- Radius: 12px
- Padding: 30px 36px
- Size: 528 × 94
- States: whole-card link; its hover and pressed frames read `#ffd80a` on one element and are not declared as a state
- Use: 무료 체험 시작 banner at the foot of /pricing and /features

**Grey conversion banner**
- Background: `#f5f5f5`
- Text: `#212121`
- Border: 1px solid `#f0f0f0`
- Radius: 12px
- Padding: 30px 36px
- Size: 528 × 94
- States: whole-card link; its hover and pressed frames read `#e6e6e6` on one element and are not declared as a state
- Use: consultation banner beside the yellow one

**Advanced-feature panel (/features)**
- Background: `#fafafa`
- Radius: 12px
- Padding: 48px 56px 64px
- Use: workspace panel; its siblings fill with `#333333` (API, white text), `#fff8e6` (security) and `#fffcf5` (branding)

### Badges

**NEW marker**
- Background: `#fff1cc`
- Text: `#e0a100`
- Radius: 160px
- Padding: 0px 8px
- Height: 26px
- Font: 13px / 500 / 25.6px Pretendard
- Use: beside footer items

**Label badge**
- Background: `#f0f2ff`
- Text: `#4351e8`
- Border: 1px solid `#e2e9fe`
- Radius: 6px
- Padding: 6px 12px
- Font: 13px / 500 / 16.9px Pretendard
- Use: additional-service rows on the home page

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context)
**Tier 1 sources:** https://modusign.co.kr/ ; https://modusign.co.kr/pricing ; https://modusign.co.kr/features ; https://recruit.modusign.co.kr/ko/intro ; https://blog.modusign.co.kr/news/pr/etnews_2412 ; https://blog.modusign.co.kr/
**Tier 2 sources:** getdesign.md/modusign (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=modusign (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Header actions: 8px vertical, 16px horizontal at 44px height
- Page actions: 12px vertical, 24px horizontal at 52px height; plan-detail actions 8px 24px at 44px
- Conversion banners: 30px 36px
- Statistic cards: 36px 36px 52px
- Advanced-feature panels: 48px 56px 64px

### Grid & Container
- Home sections run in a 1192px container: a row of three 381px statistic cards, three feature cards, and full-width additional-service rows divided by 1px `#e6e6e6` top borders.
- /pricing sets a 1080px row of 349px plan cards (the recommended card is taller and glows), then a full-width public-sector card and four 197px plan-detail cards filled `#dbf6f0`, `#e9f1ff`, `#eeeafc` and `#e5eaf9`.
- /features pairs a 251px sticky section menu with 781px feature columns, then a grid of advanced-feature panels.
- Both /pricing and /features end with the grey and yellow conversion banners side by side, 528px each.

### Whitespace Philosophy
- **Every section ends at an action**: the yellow and outlined pair recurs in the header, page bodies and the closing banners.
- **Flat segmentation**: hairlines and pale fills separate content; elevation is reserved for the recommended plan.

### Border Radius Scale
- 6px: header actions, small badges
- 8px: page actions, tabs, the selected billing option
- 12px: cards, banners, the sticky menu, feature panels
- 24px: rounded badges on /features
- 100px: the billing toggle; 160px: the NEW marker

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Navigation, actions, most cards |
| Tint | `#fafafa`, `#f5f5f5`, `#fff8e6`, `#fffcf5` fills | Panels and banners |
| Hairline | 1px `#f0f0f0`, `#e6e6e6`, `#cccccc` | Cards, toggles, outlined actions |
| Glow | `rgba(33, 122, 255, 0.3) 0px 0px 20px 0px` with a 1px `#217aff` border | The recommended plan card only |

**Shadow Philosophy**: Modusign's captured pages are flat. Structure comes from hairlines and pale fills, emphasis from solid fills — the yellow action, the dark and black actions, the navy GOV action. The single exception is deliberate: the recommended plan card on /pricing carries a blue glow and a blue edge, so the page's one elevated object is the plan the company wants chosen.

## 7. Do's and Don'ts

### Do
- Fill the primary free-trial action with `#fed05f`, edge it with 1px `#ffc533`, label it in black, and brighten it to `#ffd80a` on hover
- Pair it with an outlined action: white, 1px `#cccccc`, black label, `#f5f5f5` on hover
- Set everything in Pretendard with -0.4px tracking; headlines at 700 with a 1.4 line height, text at 400 with 1.6
- Separate content with 1px `#e6e6e6` / `#f0f0f0` hairlines and pale fills
- Use 6px corners in the header, 8px on page actions and tabs, 12px on cards and banners
- Keep `#217aff` and `#08236d` to plan contexts on pricing
- Reserve elevation for the one item you want chosen, as the recommended plan's glow does

### Don't
- Don't put white text on the yellow action; its label is black
- Don't add drop shadows to ordinary cards; the only captured shadow belongs to the recommended plan
- Don't style body links in browser-default blue; the captured labels are white or near-black children of their anchors
- Don't use yellow for secondary actions; outlined and dark actions carry those roles
- Don't mix in a second typeface; the declared Lato and Noto Sans KR are not rendered
- Don't invent focus rings or hover values the capture did not settle

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. The markup carries `br-for-mobile` line breaks in the hero headline and a `display-none-mobile` class on a feature-card wrapper, so the mobile layout differs, but no breakpoint was measured.

### Touch Targets
- Header actions: 44px tall
- Page actions: 52px tall; plan-detail and GOV actions 44px
- Plan-comparison tabs: 57px; billing toggle 41px; sticky menu items 58px

### Collapsing Strategy
- Not measured beyond the mobile-specific classes named above.

### Image Behavior
- Feature screenshots on /features sit in 12px-radius frames with a 1px `#f5f5f5` edge; a home screenshot box uses `#f8f9fa` with a 1px `#e6e6e6` border.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#fed05f` fill, `#ffc533` edge, `#000000` label, hover `#ffd80a`
- Banner edge: `#ffb90a`; warm panel `#fff8e6`
- Text: `#333333` body, `#111111` / `#212121` strong, `#474747`, `#5c5c5c`, `#707070`, `#999999`, `#d3d3d3`
- Surfaces: `#ffffff`, `#fafafa`, `#f5f5f5`; hairlines `#f0f0f0`, `#e6e6e6`, `#cccccc`
- Dark actions: `#1a1a1a` (hover `#212121`), `#000000` (hover `#333333`)
- Plans: `#217aff`, `#08236d`; small blue labels `#4b75e7`

### Example Component Prompts
- "Create a header action pair: an outlined button (white, 1px solid #cccccc, black 14px / 700 Pretendard label, 6px radius, 8px 16px padding, 44px tall, #f5f5f5 on hover) and a primary button with the same geometry filled #fed05f, edged 1px #ffc533, labelled black, #ffd80a on hover."
- "Design a plan card row: white cards with 1px #e6e6e6 borders and 12px radius; the recommended card has a 1px #217aff border, a rgba(33, 122, 255, 0.3) 0 0 20px glow and a #217aff action with white 16px / 700 label, 52px tall."
- "Build a closing banner pair: left #f5f5f5 with a 1px #f0f0f0 edge, right #fed05f with a 1px #ffb90a edge, both 12px radius and 30px 36px padding, titles in #212121."

### Iteration Guide
1. One yellow primary per group, with black label and a `#ffd80a` hover
2. Outlined `#cccccc` companion for the secondary action
3. Pretendard, -0.4px tracking, 700 headlines, 400 text
4. Hairlines and pale fills, not shadows
5. 6 / 8 / 12px corners by role
6. Blue and navy only for plans

---

## 10. Voice & Tone

Modusign's voice is **direct, standard-setting and reassuring**. The home page states the claim as a title — "대한민국 전자서명의 표준" — and immediately lowers the barrier with 무료 체험 시작. Copy is short, declarative Korean that frames contracts, a stressful legal domain, as a single connected process: 요청부터 체결, 관리까지, 한번에. Confidence comes from scope and numbers rather than exclamation marks.

| Context | Tone |
|---|---|
| Hero | Standard-setting. "대한민국 전자서명의 표준 모두싸인." |
| Product copy | Whole-process, one tool. "계약의 작성-검토-체결-관리 전 과정을 하나로 연결합니다." |
| CTAs | Low-friction imperatives. "무료 체험 시작", "도입 문의". |
| Pricing | Plain and factual. "모두싸인 요금제", "요금제별 기능 비교". |
| Company | Mission-first. "계약이 모두에게 더 간편하고 안전할 수 있도록 바꿉니다." |

**Voice samples (verbatim, opened 2026-09-30):**
- "대한민국 전자서명의 표준 모두싸인" — home hero headline.
- "서명 요청부터 체결, 관리까지 하나의 서비스로 해결하세요." — home hero subline.
- "계약의 시작부터 끝까지, 모두싸인으로" — /features headline.
- "계약이 모두에게 더 간편하고 안전할 수 있도록 바꿉니다" — recruiting site.

**Forbidden register**: exclamation-heavy urgency, fear-based legal warnings, unexplained legalese, discount-mall promotion on the core product.

## 11. Brand Narrative

Modusign began in 2015 as 로아팩토리, a student startup in Busan: 이영준, a law graduate who had left the civil-service exam track and taught himself programming, started with a lawyer-search service and saw how many disputes traced back to lost or badly drafted contracts. That observation became an electronic-signature service whose name reads as its promise — 모두 (everyone) plus 싸인 (sign), an editorial reading of the name. Hankook Ilbo's 2026 interview reports about 330,000 organisations and more than ten million users as of December 2025, customers from the Seoul city government and the Government Employees Pension Service to Samsung Electronics and Kakao, and acquisition offers every year.

The company now describes itself less as a signing tool than as contract infrastructure. In December 2024 its official blog carried 이영준's statement that after supporting the move from paper to electronic documents, the next step is an AI-based contract lifecycle management (CLM) solution; the 2026 recruiting site repeats it as direction — "전자서명을 넘어 계약의 작성부터 분석까지 전 과정을 AI로 잇는 CLM 플랫폼". The home page follows suit, with a headline about connecting 작성, 검토, 체결 and 관리 and product tabs for e-signature and 캐비닛.

The design keeps the approachable register the name implies. Where contract software could dress in institutional chrome, Modusign keeps a white page, black-on-yellow actions and plain Korean copy, and puts a free trial one button away on every captured page.

## 12. Principles

1. **Everyone signs.** Contracts for 모두, not only legal teams. *UI implication:* the free-trial action is permanent, yellow, and present in the header of every page.
2. **Claim the standard, then lower the bar.** "전자서명의 표준" is paired with 무료 체험 시작. *UI implication:* follow every claim with a low-friction action and verifiable numbers.
3. **One process, end to end.** 작성, 검토, 체결, 관리 in one product. *UI implication:* present workflows as a connected sequence, not a feature grid.
4. **Flat unless it matters.** *UI implication:* hairlines and fills for structure; elevation only for the recommended choice.
5. **Warmth where the law is cold.** *UI implication:* keep the yellow for action moments; let trust copy stay sober text on white.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Modusign customer segments (HR and legal teams, SMB operators, public-sector administrators, developers), not individual people.*

**박민지, 33, 서울.** HR manager at a 200-person company during 연봉계약서 season. Sends batch signature requests and tracks who has not signed; chose Modusign because employees can sign without installing anything or creating an account.

**정태호, 45, 대구.** Runs a franchise food company that signs dozens of supplier contracts a month. Cares that a contract which took days of couriering now closes the same afternoon, with legal validity he can show his lawyer.

**김은영, 38, 세종.** Public-institution administrator evaluating the public-sector plan. Reads the security and legal-validity pages and the audit trail before anything else.

**이준혁, 29, 판교.** Backend developer embedding signatures into his company's SaaS through the Modusign API. Judges the product by its documentation and appreciated starting from a free trial instead of a sales call.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover and pressed (yellow actions)** | Fill `#fed05f` → `#ffd80a` on header, page-body and banner copies across three pages. |
| **Hover and pressed (outlined actions)** | Fill `#ffffff` → `#f5f5f5` on header, page-body and plan-detail copies. |
| **Hover and pressed (dark and black actions)** | `#1a1a1a` → `#212121` (two siblings); `#000000` → `#333333` (two pages). |
| **Hover and pressed (pricing tabs)** | Transparent → `#f0f0f0`, text `#999999` → `#212121`. |
| **Hover and pressed (sticky feature menu)** | `#ffffff` → `#fffae0` on three siblings. |
| **Selected** | Billing toggle: white option with `#333333` 700 text and a `#f0f0f0` edge; pricing tab: `#212121` at 700; home product tab: `#111111` against `#d3d3d3`. |
| **Single-element frames (not declared)** | Recommended plan action `#0e6eff`; free-plan action `#f5f5f5`; banners `#ffd80a` / `#e6e6e6`; a /features accordion row `#f7f7f7` → `#f0f0f5`. |
| **Browser defaults (not brand)** | Wrapper anchors `#0000ee`, `#ff0000` while pressed. |

Focus rings, error, empty, loading, disabled and success treatments were not captured and are not described.

## 15. Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The home page's own inline CSS declares one looping keyframe animation, `rollText`, which steps the hero's document noun (계약서, 신청서, 서약서, 확인서, 합의서, 청약서, 약정서, 동의서, 위임장) upward in ten even stops; its timing is not claimed here. Treat other motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/modusign.json (capturedAt 2026-09-30T07:00:45.678Z), deterministic collector, 1440x900, logged out: modusign.co.kr (www.modusign.co.kr redirects there), /pricing, /features.
- §1, §10, §11 context: recruit.modusign.co.kr/ko/intro ("모두싸인 채용"), blog.modusign.co.kr/news/pr/etnews_2412 (2024-12-23), blog.modusign.co.kr, and Hankook Ilbo (2026-01-21) https://www.hankookilbo.com/news/article/A2026012015580004845. All opened 2026-09-30.
- Hero copy, headline texts and the rollText keyframes were read from the served HTML of the three captured pages on 2026-09-30.
- Personas are fictional archetypes. Interpretive readings (the name, "warmth where the law is cold") are editorial.
-->
