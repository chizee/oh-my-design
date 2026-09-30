---
id: imweb
name: Imweb
display_name_kr: 아임웹
country: KR
category: saas
homepage: "https://imweb.me"
primary_color: "#15181e"
logo:
  type: favicon
  slug: "https://vendor-cdn.imweb.me/images/main/imweb-2309-favicon-120x120.png?v1"
verified: "2026-09-30"
added: "2026-06-10"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://imweb.me/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://imweb.me/theme", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://imweb.me/price", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://imweb.me/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://imweb.me/theme", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://imweb.me/price", captured: "2026-09-30" }
    - { id: brand-guideline, kind: official-doc, url: "https://design.imweb.me/", captured: "2026-09-30" }
    - { id: company, kind: official-doc, url: "https://team.imweb.me/", captured: "2026-09-30" }
    - { id: newsroom, kind: official-doc, url: "https://team.imweb.me/newsroom", captured: "2026-09-30" }
    - { id: blog, kind: official-doc, url: "https://imweb.me/blog", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &hcta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &ibody { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::#snowfall", captured: "2026-09-30" }
    "tokens.colors.canvas": *ibody
    "tokens.colors.on-primary": *hcta
    "tokens.colors.text-secondary": &hlogin { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &hlead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p (20px hero sub line)", captured: "2026-09-30" }
    "tokens.colors.faint": &hsend { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.colors.link": &tlink { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"82\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &pfaq { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"82\"]", captured: "2026-09-30" }
    "tokens.colors.eyebrow-magenta": &ph2 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.colors.eyebrow-green": &th2 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.typography.family.ui": &hnav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.family.body": *ibody
    "tokens.typography.display-hero.size": &hkey { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p (80px hero keyword)", captured: "2026-09-30" }
    "tokens.typography.display-hero.weight": *hkey
    "tokens.typography.display-hero.lineHeight": *hkey
    "tokens.typography.display-hero.use": *hkey
    "tokens.typography.display.size": &ph2d { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2 (48px headline)", captured: "2026-09-30" }
    "tokens.typography.display.weight": *ph2d
    "tokens.typography.display.lineHeight": *ph2d
    "tokens.typography.display.use": *ph2d
    "tokens.typography.display-template.size": &th1 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h1", captured: "2026-09-30" }
    "tokens.typography.display-template.weight": *th1
    "tokens.typography.display-template.lineHeight": *th1
    "tokens.typography.display-template.tracking": *th1
    "tokens.typography.display-template.use": *th1
    "tokens.typography.section.size": &hsec { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p (36px section heading)", captured: "2026-09-30" }
    "tokens.typography.section.weight": *hsec
    "tokens.typography.section.lineHeight": *hsec
    "tokens.typography.section.use": *hsec
    "tokens.typography.feature.size": &hfeat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p (28px feature heading)", captured: "2026-09-30" }
    "tokens.typography.feature.weight": *hfeat
    "tokens.typography.feature.lineHeight": *hfeat
    "tokens.typography.feature.use": *hfeat
    "tokens.typography.price.size": &pprice { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p.css-pbxs5b", captured: "2026-09-30" }
    "tokens.typography.price.weight": *pprice
    "tokens.typography.price.lineHeight": *pprice
    "tokens.typography.price.use": *pprice
    "tokens.typography.eyebrow.size": *ph2
    "tokens.typography.eyebrow.weight": *ph2
    "tokens.typography.eyebrow.lineHeight": *ph2
    "tokens.typography.eyebrow.use": *ph2
    "tokens.typography.faq-question.size": &pq { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p (20px FAQ question)", captured: "2026-09-30" }
    "tokens.typography.faq-question.weight": *pq
    "tokens.typography.faq-question.lineHeight": *pq
    "tokens.typography.faq-question.use": *pq
    "tokens.typography.group-title.size": &tgroup { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p.clay-heading-xl", captured: "2026-09-30" }
    "tokens.typography.group-title.weight": *tgroup
    "tokens.typography.group-title.lineHeight": *tgroup
    "tokens.typography.group-title.tracking": *tgroup
    "tokens.typography.group-title.use": *tgroup
    "tokens.typography.lead.size": *hlead
    "tokens.typography.lead.weight": *hlead
    "tokens.typography.lead.lineHeight": *hlead
    "tokens.typography.lead.use": *hlead
    "tokens.typography.body.size": *ibody
    "tokens.typography.body.weight": *ibody
    "tokens.typography.body.lineHeight": *ibody
    "tokens.typography.body.use": *ibody
    "tokens.typography.nav.size": *hnav
    "tokens.typography.nav.weight": *hnav
    "tokens.typography.nav.lineHeight": *hnav
    "tokens.typography.nav.use": *hnav
    "tokens.typography.button.size": *hcta
    "tokens.typography.button.weight": *hcta
    "tokens.typography.button.lineHeight": *hcta
    "tokens.typography.button.use": *hcta
    "tokens.typography.button-lg.size": &pcta { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.typography.button-lg.weight": *pcta
    "tokens.typography.button-lg.lineHeight": *pcta
    "tokens.typography.button-lg.use": *pcta
    "tokens.typography.hero-button.size": &hero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"54\"]", captured: "2026-09-30" }
    "tokens.typography.hero-button.weight": *hero
    "tokens.typography.hero-button.lineHeight": *hero
    "tokens.typography.hero-button.tracking": *hero
    "tokens.typography.hero-button.use": *hero
    "tokens.typography.tab.size": &ttab { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.typography.tab.weight": *ttab
    "tokens.typography.tab.lineHeight": *ttab
    "tokens.typography.tab.tracking": *ttab
    "tokens.typography.tab.use": *ttab
    "tokens.typography.label.size": &plabel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p.clay-label-large-bold (promo label)", captured: "2026-09-30" }
    "tokens.typography.label.weight": *plabel
    "tokens.typography.label.lineHeight": *plabel
    "tokens.typography.label.use": *plabel
    "tokens.spacing.nav-y": *hnav
    "tokens.spacing.cta-x": *hcta
    "tokens.spacing.cta-lg-x": *pcta
    "tokens.spacing.tab-x": *ttab
    "tokens.spacing.faq-y": *pfaq
    "tokens.spacing.faq-x": *pfaq
    "tokens.rounded.md": *hcta
    "tokens.components.header-nav-link.type": *hnav
    "tokens.components.header-nav-link.bg": *hnav
    "tokens.components.header-nav-link.fg": *hnav
    "tokens.components.header-nav-link.padding": *hnav
    "tokens.components.header-nav-link.height": *hnav
    "tokens.components.header-nav-link.font": *hnav
    "tokens.components.header-nav-link.hover": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"1\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.header-nav-link.pressed": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"1\"]::state-pressed", captured: "2026-09-30" }
    "tokens.components.header-nav-link.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"2\"]", captured: "2026-09-30" }
    "tokens.components.header-nav-link.states": *hnav
    "tokens.components.header-nav-link.use": *hnav
    "tokens.components.header-login.type": *hlogin
    "tokens.components.header-login.bg": *hlogin
    "tokens.components.header-login.fg": *hlogin
    "tokens.components.header-login.radius": *hlogin
    "tokens.components.header-login.padding": *hlogin
    "tokens.components.header-login.height": *hlogin
    "tokens.components.header-login.font": *hlogin
    "tokens.components.header-login.states": *hlogin
    "tokens.components.header-login.use": *hlogin
    "tokens.components.header-cta.type": *hcta
    "tokens.components.header-cta.bg": *hcta
    "tokens.components.header-cta.fg": *hcta
    "tokens.components.header-cta.radius": *hcta
    "tokens.components.header-cta.padding": *hcta
    "tokens.components.header-cta.height": *hcta
    "tokens.components.header-cta.font": *hcta
    "tokens.components.header-cta.states": *hcta
    "tokens.components.header-cta.use": *hcta
    "tokens.components.hero-cta.type": *hero
    "tokens.components.hero-cta.bg": *hero
    "tokens.components.hero-cta.fg": *hero
    "tokens.components.hero-cta.radius": *hero
    "tokens.components.hero-cta.padding": *hero
    "tokens.components.hero-cta.height": *hero
    "tokens.components.hero-cta.font": *hero
    "tokens.components.hero-cta.states": *hero
    "tokens.components.hero-cta.use": *hero
    "tokens.components.plan-cta-primary.type": *pcta
    "tokens.components.plan-cta-primary.bg": *pcta
    "tokens.components.plan-cta-primary.fg": *pcta
    "tokens.components.plan-cta-primary.radius": *pcta
    "tokens.components.plan-cta-primary.padding": *pcta
    "tokens.components.plan-cta-primary.height": *pcta
    "tokens.components.plan-cta-primary.font": *pcta
    "tokens.components.plan-cta-primary.states": *pcta
    "tokens.components.plan-cta-primary.use": *pcta
    "tokens.components.plan-cta-secondary.type": &psec { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.components.plan-cta-secondary.bg": *psec
    "tokens.components.plan-cta-secondary.fg": *psec
    "tokens.components.plan-cta-secondary.radius": *psec
    "tokens.components.plan-cta-secondary.padding": *psec
    "tokens.components.plan-cta-secondary.height": *psec
    "tokens.components.plan-cta-secondary.font": *psec
    "tokens.components.plan-cta-secondary.states": *psec
    "tokens.components.plan-cta-secondary.use": *psec
    "tokens.components.plan-promo-strip.type": &pstrip { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"14\"]", captured: "2026-09-30" }
    "tokens.components.plan-promo-strip.bg": *pstrip
    "tokens.components.plan-promo-strip.fg": *plabel
    "tokens.components.plan-promo-strip.radius": *pstrip
    "tokens.components.plan-promo-strip.padding": *pstrip
    "tokens.components.plan-promo-strip.height": *pstrip
    "tokens.components.plan-promo-strip.font": *plabel
    "tokens.components.plan-promo-strip.states": *pstrip
    "tokens.components.plan-promo-strip.use": *pstrip
    "tokens.components.template-category-tab.type": *ttab
    "tokens.components.template-category-tab.bg": *ttab
    "tokens.components.template-category-tab.fg": *ttab
    "tokens.components.template-category-tab.radius": *ttab
    "tokens.components.template-category-tab.padding": *ttab
    "tokens.components.template-category-tab.height": *ttab
    "tokens.components.template-category-tab.font": *ttab
    "tokens.components.template-category-tab.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.components.template-category-tab.states": *ttab
    "tokens.components.template-category-tab.use": *ttab
    "tokens.components.billing-period-option.type": &pper { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.components.billing-period-option.bg": *pper
    "tokens.components.billing-period-option.fg": *pper
    "tokens.components.billing-period-option.padding": *pper
    "tokens.components.billing-period-option.height": *pper
    "tokens.components.billing-period-option.font": *pper
    "tokens.components.billing-period-option.states": *pper
    "tokens.components.billing-period-option.use": *pper
    "tokens.components.faq-row.type": *pfaq
    "tokens.components.faq-row.bg": *pfaq
    "tokens.components.faq-row.fg": *pfaq
    "tokens.components.faq-row.radius": *pfaq
    "tokens.components.faq-row.padding": *pfaq
    "tokens.components.faq-row.height": *pfaq
    "tokens.components.faq-row.font": *pfaq
    "tokens.components.faq-row.states": *pfaq
    "tokens.components.faq-row.use": *pfaq
    "tokens.components.ai-prompt-field.type": &hfield { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.components.ai-prompt-field.bg": *hfield
    "tokens.components.ai-prompt-field.fg": *hfield
    "tokens.components.ai-prompt-field.padding": *hfield
    "tokens.components.ai-prompt-field.height": *hfield
    "tokens.components.ai-prompt-field.font": *hfield
    "tokens.components.ai-prompt-field.states": *hfield
    "tokens.components.ai-prompt-field.use": *hfield
    "tokens.components.ai-mode-chip.type": &hchip { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.components.ai-mode-chip.bg": *hchip
    "tokens.components.ai-mode-chip.fg": *hchip
    "tokens.components.ai-mode-chip.radius": *hchip
    "tokens.components.ai-mode-chip.padding": *hchip
    "tokens.components.ai-mode-chip.height": *hchip
    "tokens.components.ai-mode-chip.font": *hchip
    "tokens.components.ai-mode-chip.states": *hchip
    "tokens.components.ai-mode-chip.use": *hchip
    "tokens.components.ai-send-button.type": *hsend
    "tokens.components.ai-send-button.bg": *hsend
    "tokens.components.ai-send-button.fg": *hsend
    "tokens.components.ai-send-button.radius": *hsend
    "tokens.components.ai-send-button.padding": *hsend
    "tokens.components.ai-send-button.size": *hsend
    "tokens.components.ai-send-button.states": *hsend
    "tokens.components.ai-send-button.use": *hsend
    "tokens.components.footer-social-link.type": &hsoc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"90\"]", captured: "2026-09-30" }
    "tokens.components.footer-social-link.bg": *hsoc
    "tokens.components.footer-social-link.radius": *hsoc
    "tokens.components.footer-social-link.size": *hsoc
    "tokens.components.footer-social-link.states": *hsoc
    "tokens.components.footer-social-link.use": *hsoc
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#15181e"
    ink: "#15181e"
    canvas: "#ffffff"
    on-primary: "#ffffff"
    text-secondary: "#4b515b"
    muted: "#717680"
    faint: "#bcc0c6"
    link: "#0090d4"
    surface: "#f8f9fb"
    eyebrow-magenta: "#ff50da"
    eyebrow-green: "#008c00"
  typography:
    family: { ui: "imweb Sans", body: "Pretendard" }
    display-hero: { size: 80, weight: 700, lineHeight: 1.0, use: "Rotating hero keyword on imweb.me" }
    display: { size: 48, weight: 700, lineHeight: 1.25, use: "Pricing headline (h2)" }
    display-template: { size: 48, weight: 700, lineHeight: 1.25, tracking: -0.72, use: "Template gallery headline (h1)" }
    section: { size: 36, weight: 700, lineHeight: 1.48, use: "Home section heading" }
    feature: { size: 28, weight: 700, lineHeight: 1.48, use: "Feature heading on home (디자인이 쉬워요)" }
    price: { size: 30, weight: 700, lineHeight: 1.2, use: "Plan price figure" }
    eyebrow: { size: 24, weight: 700, lineHeight: 1.33, use: "Coloured eyebrow (h2) above a page headline" }
    faq-question: { size: 20, weight: 700, lineHeight: 1.4, use: "FAQ question on the pricing page" }
    group-title: { size: 20, weight: 700, lineHeight: 1.4, tracking: -0.15, use: "Template group title on the template gallery" }
    lead: { size: 20, weight: 400, lineHeight: 1.4, use: "Hero sub line on home, in #717680" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Body text, Pretendard" }
    nav: { size: 16, weight: 400, lineHeight: 1.5, use: "Header navigation, imweb Sans" }
    button: { size: 14, weight: 600, lineHeight: 1.71, use: "Header action labels, imweb Sans" }
    button-lg: { size: 16, weight: 600, lineHeight: 1.5, use: "Plan card action labels, imweb Sans" }
    hero-button: { size: 16, weight: 500, lineHeight: 1.5, tracking: -0.08, use: "Home action label, Pretendard" }
    tab: { size: 14, weight: 500, lineHeight: 1.57, tracking: -0.035, use: "Template category tab, Pretendard" }
    label: { size: 16, weight: 600, lineHeight: 1.5, use: "Plan promo strip label, imweb Sans" }
  spacing: { nav-y: 24, cta-x: 12, cta-lg-x: 16, tab-x: 12, faq-y: 28, faq-x: 32 }
  rounded: { md: 8 }
  components:
    header-nav-link: { type: tab, bg: "transparent", fg: "#15181e", padding: "24px 0px", height: "72px", font: "16px / 400 / 24px imweb Sans", hover: "fg #717680", pressed: "fg #717680", selected: "weight 700 on the current page's link (템플릿 on /theme, 요금 on /price)", states: "rest, hover, pressed and selected; all six header links (capture 1-6) read fg #717680 in both frames on all three surfaces; selected read from rest values; focus is not declared from the capture", use: "Header navigation (주요기능, 템플릿, 요금, 전문가 찾기, 스토리, 고객지원) at home::[data-omd-capture=\"1\"], 75 x 72" }
    header-login: { type: button, bg: "#ffffff", fg: "#4b515b", radius: "8px", padding: "8px 12px", height: "40px", font: "14px / 600 / 24px imweb Sans", states: "rest on all three surfaces; no state frame", use: "로그인 link styled as a button at home::[data-omd-capture=\"7\"], 64 x 40; read, never followed" }
    header-cta: { type: button, bg: "#15181e", fg: "#ffffff", radius: "8px", padding: "8px 12px", height: "40px", font: "14px / 600 / 24px imweb Sans", states: "rest on all three surfaces; a focus frame was recorded but focus is not declared from the capture", use: "무료로 시작하기 in the header at home::[data-omd-capture=\"8\"], 112 x 40" }
    hero-cta: { type: button, bg: "#15181e", fg: "#ffffff", radius: "8px", padding: "0px 16px", height: "48px", font: "16px / 500 / 24px Pretendard", states: "rest on two siblings (capture 54 and 59); no state frame", use: "지금 무료로 시작하기 below the template carousel and in the closing band at home::[data-omd-capture=\"54\"], 163 x 48; label tracking -0.08px" }
    plan-cta-primary: { type: button, bg: "#15181e", fg: "#ffffff", radius: "8px", padding: "12px 16px", height: "48px", font: "16px / 600 / 24px imweb Sans", states: "rest; a focus frame was recorded but focus is not declared from the capture", use: "Plan card action (14일 무료 체험 시작하기) on the pricing page at surface-3::[data-omd-capture=\"16\"], 314 x 48" }
    plan-cta-secondary: { type: button, bg: "#ffffff", fg: "#4b515b", radius: "8px", padding: "12px 16px", height: "48px", font: "16px / 600 / 24px imweb Sans", states: "rest only; no state frame", use: "Plan card action (14일 무료 체험 시작하기) on the other plans at surface-3::[data-omd-capture=\"13\"], 314 x 48; the collector records a 0px border and does not read outline, so no edge is claimed" }
    plan-promo-strip: { type: badge, bg: "rgba(0, 185, 255, 0.1)", fg: "#0090d4", radius: "8px 8px 0px 0px", padding: "8px 0px", height: "40px", font: "16px / 600 / 24px imweb Sans", states: "rest on two plan cards (capture 14 and 17)", use: "Strip across the top of a plan card (PG 가입비 면제 마감 임박) at surface-3::[data-omd-capture=\"14\"], 346 x 40; the label is a p.clay-label-large-bold in #0090d4" }
    template-category-tab: { type: tab, bg: "transparent", fg: "#15181e", radius: "8px", padding: "0px 12px", height: "40px", font: "14px / 500 / 22px Pretendard", selected: "bg #15181e, fg #ffffff (capture 10, aria-selected true; the clicked tabs tab-0-0 and tab-1-0 read the same)", states: "selected read from rest values and two clicked tabs; one element's hover and pressed frames read a mid-transition fill with no sibling to agree, so no hover is declared; focus is not declared from the capture", use: "Template category tabs on the template gallery at surface-2::[data-omd-capture=\"11\"], 100 x 40; label tracking -0.035px" }
    billing-period-option: { type: tab, bg: "transparent", fg: "#6b7280", padding: "6px 12px", height: "33px", font: "14px / 500 / 21px Pretendard", states: "rest values only; the 1년 option (capture 10, with its 1개월 보다 20% 저렴해요 note) reads #000000 against #6b7280 on 1개월 and 2년; no pointer frame", use: "Billing-period switch above the plan cards at surface-3::[data-omd-capture=\"9\"], 151 x 33" }
    faq-row: { type: card, bg: "#f8f9fb", fg: "#15181e", radius: "8px", padding: "28px 32px", height: "88px", font: "16px / 400 / 24px Pretendard", states: "rest only; rows were not expanded", use: "FAQ accordion row on the pricing page at surface-3::[data-omd-capture=\"82\"], 1280 x 88; question 20px / 700 / 28px in #15181e; six rows captured" }
    ai-prompt-field: { type: input, bg: "#ffffff", fg: "#15181e", padding: "2px", height: "80px", font: "16px / 400 / 24px Pretendard", states: "rest only; never typed into or submitted", use: "imweb AI prompt textarea in the home hero at home::[data-omd-capture=\"10\"], 688 x 80; the placeholder asks for at least 25 characters" }
    ai-mode-chip: { type: button, bg: "rgba(0, 185, 255, 0.15)", fg: "#15181e", radius: "8px", padding: "6px 12px", height: "36px", font: "16px / 400 Pretendard", states: "rest only; one element", use: "단계별로 만들기 button at the top right of the imweb AI box at home::[data-omd-capture=\"9\"], 134 x 36" }
    ai-send-button: { type: button, bg: "rgba(113, 118, 128, 0.05)", fg: "#bcc0c6", radius: "3.35544e+07px", padding: "8px", size: "32px x 32px", states: "recorded as disabled while the prompt is empty; no enabled state was captured", use: "Send button of the imweb AI box at home::[data-omd-capture=\"11\"]; the radius computes to 3.35544e+07px, i.e. fully round" }
    footer-social-link: { type: button, bg: "rgba(113, 118, 128, 0.05)", radius: "3.35544e+07px", size: "36px x 36px", states: "rest only", use: "Fully round footer social links at home::[data-omd-capture=\"90\"]; the same three appear on the template gallery and the pricing page" }
  components_harvested: true
---

# Design System Inspiration of Imweb

## 1. Visual Theme & Atmosphere

Imweb (아임웹) is a Korean website builder and brand-commerce platform run by 주식회사 아임웹 from Teheran-ro in Gangnam, with 이수모 as chief executive. Its brand guideline calls the company a "Brand Builder" that supports everything a brand needs to start and grow, so the brand can focus on its own products and services; the company's recruiting site puts the vision in four words, "We serve the underserved", and one line, "기술 장벽을 낮춰 누구든 도전할 수 있게". The public home page counts the scale in its own numbers — one million sites opened by 2025, 342% average annual growth in customer transaction value, 7조 원 of customer transactions, and 4,000 designers and experts — and a company announcement carried by 아이뉴스24 puts cumulative customer transactions past 8조 원 as of August. The product is moving from templates towards generation: the hero now opens with "imweb AI" in beta, a prompt box that promises a responsive site from a single line of description within fifteen minutes, beside the "80+개의 감각적인 템플릿" it has always sold. Around the product sit a brand conference (브랜드콘 26), a magazine for brands (<빌더스>) and a partnership with Canva, all listed in the company newsroom.

The captured pages are deliberately quiet so that customers' sites carry the colour. Everything is `#15181e` near-black ink on white `#ffffff`: body copy, headings, navigation, and the fill of every primary action and the selected template tab. Secondary actions are white with `#4b515b` labels, muted copy and pointer states drop to `#717680`, and pricing FAQs sit in `#f8f9fb` rows with 8px corners and no shadow. Colour enters in small, editorial doses: each page's eyebrow above the headline takes its own hue — `#ff50da` magenta on pricing, `#008c00` green on the template gallery — links and promo labels use `#0090d4`, and the imweb cyan appears only as a translucent tint, `rgba(0, 185, 255, 0.1)` behind the plan cards' promo strip and `rgba(0, 185, 255, 0.15)` behind the imweb AI box's 단계별로 만들기 button.

Two typefaces split the work. imweb's own `imweb Sans`, self-hosted from a `/design-system/` path, sets the chrome — navigation, header actions, plan actions and labels — while `Pretendard` sets headlines, body copy, tabs and the home actions. Headlines are Pretendard 700 at every size, from the 80px rotating hero keyword down to 20px group titles, and the template gallery tightens its larger headings with slight negative tracking.

**Key Characteristics:**
- `#15181e` ink for text, primary actions and the selected tab — a monochrome frame around customers' templates
- White secondary actions with `#4b515b` labels; `#717680` for muted copy and the navigation's pointer state
- A page-specific eyebrow colour: `#ff50da` on pricing, `#008c00` on templates
- imweb cyan only as a tint: `rgba(0, 185, 255, 0.1)` promo strips, `rgba(0, 185, 255, 0.15)` on the AI box's mode button
- `imweb Sans` for chrome, `Pretendard` for headlines and content; 700 for every headline
- 8px corners on actions, tabs and FAQ rows; fully round icon buttons
- Flat surfaces: no captured element carries a box-shadow

## Primary tasks

- Describe a site in one line to imweb AI and let it build a first draft
- Choose one of the 80+ templates by category and start editing it
- Compare the Starter, Pro and Global plans and start the 14-day free trial
- Set up a shop, payments and marketing in one place
- Find an expert to build the site, or read the blog and customer stories first

## 2. Color Palette & Roles

Every token below was read by the deterministic collector on 2026-09-30 from imweb.me, its template gallery (/theme) and its pricing page (/price).

### Primary action and ink
- **Ink / Primary** (`#15181e`): Body text, headings and navigation on all three pages, and the fill of every primary action — the header's 무료로 시작하기, the home page's 지금 무료로 시작하기 (twice) and the highlighted plan's trial button — plus the selected template tab. It is the primary because it is the colour the product renders in the primary role: nine captured elements fill with it (three header actions, two home actions, one plan action, the selected tab and two clicked tabs), and no chromatic colour fills any action or selected state.
- **On Primary** (`#ffffff`): Labels on the ink actions and the selected tab.

### Text
- **Secondary** (`#4b515b`): Labels of the white 로그인 and secondary plan actions.
- **Muted** (`#717680`): The hero sub line, and the colour the header links turn to under the pointer.
- **Faint** (`#bcc0c6`): The glyph of the imweb AI send button while it is disabled.

### Accents
- **Link** (`#0090d4`): The template gallery's small links and the plan promo labels.
- **Eyebrow Magenta** (`#ff50da`): The 24px eyebrow above the pricing headline and the FAQ heading.
- **Eyebrow Green** (`#008c00`): The 24px eyebrow above the template gallery headline.

### Neutral & Surface
- **Canvas** (`#ffffff`): Page background on the template gallery and pricing page, and the fill of secondary actions.
- **Surface** (`#f8f9fb`): FAQ rows on the pricing page.

### Brand asset, not a token
- The cyan that the June 2026 record treated as imweb's identity colour appears on the captured pages only as translucent fills — `rgba(0, 185, 255, 0.1)` behind the plan promo strip and `rgba(0, 185, 255, 0.15)` behind the AI box's mode button. No action, selected state or text is solid cyan, so it stays out of the machine colour tokens. The brand guideline at design.imweb.me governs the logo and brand colours; its colour values were not read from the page, so none is quoted here.

### Not carried forward
- The Partial record's solid cyan `#00b9ff` (June 2026 chart bars) and its tint ladder `#2dc5ff`, `#81dcff`, `#ade8ff`, `#dff6ff` were not rendered on any captured element; the home page's statistics band now shows figures rather than bars.
- The `#dbdee3` hairline was read in June from an `outline`; the collector reads borders (0px on the secondary plan action) and does not read outlines, so no edge colour is claimed.
- Pure black `#000000` and the faint grey `#9fa3ab` survive only on single elements and are not tokens.

## 3. Typography Rules

### Font Family
- **Brand typeface, live use**: `imweb Sans` — 542 observed uses across the header, navigation, action labels, promo labels and list text; self-hosted by imweb at `static.imweb.me/design-system/imweb-sans/` in 400 and 600. No licence or public distribution page was found, so its licence is unresolved and it is not offered as a download.
- **Content face, live use**: `Pretendard` — 344 observed uses on headlines, body copy, tabs, the home actions and the AI prompt; self-hosted at `static.imweb.me/design-system/pretendard/`.
- **Declared only (no visible use)**: eight `CircularXX` faces (Sub and Web, Book and Bold with italics) from `static.imweb.me/design-system/circularxx/`, and `Roboto Mono` from Google Fonts.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Display Hero | Pretendard | 80px | 700 | 80px (1.0) | normal | Rotating home keyword |
| Display | Pretendard | 48px | 700 | 60px (1.25) | normal | Pricing headline |
| Display (templates) | Pretendard | 48px | 700 | 60px (1.25) | -0.72px | Template gallery headline |
| Section | Pretendard | 36px | 700 | 53.28px (1.48) | normal | Home section heads |
| Price | Pretendard | 30px | 700 | 36px (1.2) | normal | Plan price |
| Feature | Pretendard | 28px | 700 | 41.44px (1.48) | normal | 디자인이 쉬워요, 운영이 쉬워요, 마케팅이 쉬워요 |
| Eyebrow | Pretendard | 24px | 700 | 32px (1.33) | normal (-0.24px on templates) | Coloured eyebrows |
| FAQ Question | Pretendard | 20px | 700 | 28px (1.4) | normal | Pricing FAQ |
| Group Title | Pretendard | 20px | 700 | 28px (1.4) | -0.15px | Template groups |
| Lead | Pretendard | 20px | 400 | 28px (1.4) | normal | Hero sub line |
| Body | Pretendard | 16px | 400 | 24px (1.5) | normal | Body text |
| Nav | imweb Sans | 16px | 400 | 24px (1.5) | normal | Header links |
| Button Large | imweb Sans | 16px | 600 | 24px (1.5) | normal | Plan actions |
| Home Button | Pretendard | 16px | 500 | 24px (1.5) | -0.08px | 지금 무료로 시작하기 |
| Label | imweb Sans | 16px | 600 | 24px (1.5) | normal | Promo strip label |
| Button | imweb Sans | 14px | 600 | 24px (1.71) | normal | Header actions |
| Tab | Pretendard | 14px | 500 | 22px (1.57) | -0.035px | Template category tabs |

### Principles
- **One headline weight**: every captured headline is Pretendard 700; hierarchy comes from size.
- **Tracking tightens on the template gallery**: its 48px headline sits at -0.72px, the eyebrow at -0.24px, group titles at -0.15px and tabs at -0.035px, while home and pricing keep normal tracking.
- **Two faces, two jobs**: imweb Sans for chrome and controls, Pretendard for content and headlines — except the home page's large actions, which use Pretendard 500.
- **600 for action labels in the chrome**, 500 for the Pretendard actions and tabs, 400 for body and navigation.

## 4. Component Stylings

### Navigation

**Header navigation link**
- Background: transparent
- Text: `#15181e`
- Padding: 24px 0px
- Height: 72px
- Font: 16px / 400 / 24px imweb Sans
- Hover: text `#717680`
- Pressed: text `#717680`
- Selected: weight 700 on the current page's link (템플릿 on the template gallery, 요금 on pricing)
- States: all six header links settle on `#717680` in both frames on all three pages; focus is not declared from the capture
- Use: 주요기능, 템플릿, 요금, 전문가 찾기, 스토리, 고객지원

### Buttons

**Header login**
- Background: `#ffffff`
- Text: `#4b515b`
- Radius: 8px
- Padding: 8px 12px
- Height: 40px
- Font: 14px / 600 / 24px imweb Sans
- States: rest on all three pages; no state frame
- Use: 로그인 in the header, 64 × 40 (read, never followed)

**Header action**
- Background: `#15181e`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 12px
- Height: 40px
- Font: 14px / 600 / 24px imweb Sans
- States: rest on all three pages; focus is not declared from the capture
- Use: 무료로 시작하기 in the header, 112 × 40

**Home action**
- Background: `#15181e`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 16px
- Height: 48px
- Font: 16px / 500 / 24px Pretendard, -0.08px tracking
- States: rest on two siblings; no state frame
- Use: 지금 무료로 시작하기 below the template carousel and in the closing band, 163 × 48

**Plan action (highlighted)**
- Background: `#15181e`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Height: 48px
- Font: 16px / 600 / 24px imweb Sans
- States: rest; focus is not declared from the capture
- Use: 14일 무료 체험 시작하기 on the highlighted plan card, 314 × 48

**Plan action (other plans)**
- Background: `#ffffff`
- Text: `#4b515b`
- Radius: 8px
- Padding: 12px 16px
- Height: 48px
- Font: 16px / 600 / 24px imweb Sans
- States: rest only; no state frame
- Use: 14일 무료 체험 시작하기 on the other plan cards; no edge is claimed because the collector records a 0px border and does not read outlines

**imweb AI mode button**
- Background: `rgba(0, 185, 255, 0.15)`
- Text: `#15181e`
- Radius: 8px
- Padding: 6px 12px
- Height: 36px
- Font: 16px / 400 Pretendard
- States: rest only; one element
- Use: 단계별로 만들기 at the top right of the imweb AI box, 134 × 36

**imweb AI send button**
- Background: `rgba(113, 118, 128, 0.05)`
- Text: `#bcc0c6`
- Radius: fully round (computes to 3.35544e+07px)
- Padding: 8px
- Size: 32 × 32
- States: recorded as disabled while the prompt is empty; no enabled state was captured
- Use: send button of the imweb AI box

**Footer social link**
- Background: `rgba(113, 118, 128, 0.05)`
- Radius: fully round
- Size: 36 × 36
- States: rest only
- Use: the three social links in the footer of every captured page

### Tabs

**Template category tab**
- Background: transparent
- Text: `#15181e`
- Radius: 8px
- Padding: 0px 12px
- Height: 40px
- Font: 14px / 500 / 22px Pretendard, -0.035px tracking
- Selected: background `#15181e`, text `#ffffff`
- States: selected read from rest values and confirmed on two clicked tabs; the hover and pressed frames of one tab caught a mid-transition fill, so no hover is declared; focus is not declared from the capture
- Use: category tabs on the template gallery, 100 × 40

**Billing-period switch**
- Background: transparent
- Text: `#6b7280`
- Padding: 6px 12px
- Height: 33px
- Font: 14px / 500 / 21px Pretendard
- States: rest values only — the 1년 option, carrying the "1개월 보다 20% 저렴해요" note, reads `#000000`, the other two `#6b7280`; no pointer frame
- Use: 1개월 / 1년 / 2년 above the plan cards, 151 × 33

### Inputs & Forms

**imweb AI prompt**
- Background: `#ffffff`
- Text: `#15181e`
- Padding: 2px
- Height: 80px
- Font: 16px / 400 / 24px Pretendard
- States: rest only; never typed into or submitted
- Use: the prompt textarea in the home hero, 688 × 80; the placeholder asks for at least 25 characters

### Cards & Containers

**FAQ row**
- Background: `#f8f9fb`
- Text: `#15181e`
- Radius: 8px
- Padding: 28px 32px
- Height: 88px
- Font: 16px / 400 / 24px Pretendard
- States: rest only; rows were not expanded
- Use: FAQ accordion on the pricing page, 1280 × 88; question 20px / 700 / 28px `#15181e`; six rows captured

### Badges

**Plan promo strip**
- Background: `rgba(0, 185, 255, 0.1)`
- Text: `#0090d4`
- Radius: 8px 8px 0px 0px
- Padding: 8px 0px
- Height: 40px
- Font: 16px / 600 / 24px imweb Sans
- States: rest on two plan cards
- Use: PG 가입비 면제 마감 임박 across the top of a plan card, 346 × 40

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context)
**Tier 1 sources:** https://imweb.me/ ; https://imweb.me/theme ; https://imweb.me/price ; https://design.imweb.me/ ; https://team.imweb.me/ ; https://team.imweb.me/newsroom ; https://imweb.me/blog
**Tier 2 sources:** getdesign.md/imweb (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=imweb (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Header links: 24px vertical padding inside a 72px bar
- Header actions: 8px 12px at 40px height; plan actions 12px 16px at 48px; home actions 0 16px at 48px
- Tabs: 0 12px at 40px height
- FAQ rows: 28px 32px

### Grid & Container
- The header is a single 72px row: logo, six links, then 로그인 and 무료로 시작하기 at the right.
- Home centres the rotating 80px keyword over the 688px imweb AI box, then runs a horizontally scrolling template carousel and three feature bands.
- The template gallery groups 322 × 438 template cards under category tabs; pricing sets plan cards with 314px actions above a full-width comparison table and 1280px FAQ rows.

### Whitespace Philosophy
- **One idea per band**: large Pretendard headlines with plenty of air, then a single action.
- **Flat segmentation**: bands and rows separate by the `#f8f9fb` fill, not by lines or shadows.

### Border Radius Scale
- 8px: actions, tabs, FAQ rows, the AI mode button — the working corner
- 8px 8px 0px 0px: the promo strip on top of a plan card
- Fully round: icon buttons (AI send, footer social)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element |
| Tint | `#f8f9fb` fill | FAQ rows |
| Translucent tint | `rgba(0, 185, 255, 0.1)` and `rgba(113, 118, 128, 0.05)` fills | Promo strip, icon buttons |

**Shadow Philosophy**: none of the captured elements on the three pages carries a box-shadow. Emphasis is made with the ink fill of an action or tab, with tinted surfaces, and with type size — never with elevation.

## 7. Do's and Don'ts

### Do
- Use `#15181e` for text and for every primary action and selected state, with white labels
- Keep secondary actions white with `#4b515b` labels
- Give each page one coloured eyebrow (`#ff50da` on pricing, `#008c00` on templates) and keep the rest ink
- Use the imweb cyan only as a translucent tint, as the product does
- Set chrome in imweb Sans (600 for action labels) and headlines in Pretendard 700
- Keep 8px corners and flat surfaces

### Don't
- Don't fill actions with cyan or any other colour — the captured actions are all ink
- Don't add drop shadows; nothing on the captured pages is elevated
- Don't use weights other than 700 for headlines
- Don't invent hover colours for actions that recorded none; only the header links have a declared hover
- Don't restyle the imweb logo — the brand guideline forbids changing its transparency, proportions, angle, spacing, shadow, outline or colours

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured; no breakpoint was measured.

### Touch Targets
- Header links: 72px tall; header actions 40px
- Home and plan actions: 48px
- Template tabs: 40px; billing switch 33px
- FAQ rows: 88px

### Collapsing Strategy
- Not measured.

### Image Behavior
- Template previews carry the colour of the page; the chrome around them stays ink on white.

## 9. Agent Prompt Guide

### Quick Color Reference
- Text, primary actions, selected tab: `#15181e`; labels on it: `#ffffff`
- Secondary action label: `#4b515b`; muted and nav hover: `#717680`
- Links and promo labels: `#0090d4`
- Eyebrows: `#ff50da` (pricing), `#008c00` (templates)
- Canvas `#ffffff`; FAQ rows `#f8f9fb`
- Cyan tint: `rgba(0, 185, 255, 0.1)` promo strip, `rgba(0, 185, 255, 0.15)` AI mode button

### Example Component Prompts
- "Create a header action: `#15181e` background, white 14px / 600 imweb Sans label, 8px radius, 8px 12px padding, 40px tall, no shadow."
- "Design a plan card action pair: highlighted `#15181e` with white 16px / 600 label, others white with `#4b515b` label; both 8px radius, 12px 16px padding, 48px tall."
- "Build template category tabs: 14px / 500 Pretendard, -0.035px tracking, 8px radius, 0 12px padding, 40px tall; unselected `#15181e` on transparent, selected `#15181e` background with white text."
- "Make an FAQ row: `#f8f9fb` background, 8px radius, 28px 32px padding, question 20px / 700 Pretendard in `#15181e`, no border or shadow."

### Iteration Guide
1. Ink `#15181e` for text and every primary action
2. Colour only in one page eyebrow, `#0090d4` links and translucent cyan tints
3. imweb Sans for chrome, Pretendard 700 for headlines
4. 8px corners; fully round icon buttons
5. No shadows

---

## 10. Voice & Tone

Imweb's voice is **encouraging, plain-spoken and ease-obsessed**. The home page repeats one promise — 쉬워요, "it's easy" — for design, operations and marketing, and pairs a big ambition word in the hero with reassurance that no developer or designer is needed. Copy speaks to first-time founders in warm, low-jargon Korean and always states that starting is free.

| Context | Tone |
|---|---|
| Hero | One line, one promise. "단 한줄로 나의 브랜드를 현실로 만들어보세요". |
| Feature heads | Three-beat ease refrain: "디자인이 쉬워요", "운영이 쉬워요", "마케팅이 쉬워요". |
| CTAs | Friction-removing imperatives with the price stated: "지금 무료로 시작하기", "14일 무료 체험 시작하기". |
| Social proof | Numbers as evidence: "지금 가장 빠르게 성장하는 브랜드 빌더, 아임웹" above the counts. |
| Pricing | Fit, not upsell: "브랜드 운영에 꼭 맞는 요금제를 선택해 보세요". |
| Blog | Practical and conversational: "살까 말까 망설이다 그냥 나가요: 구매 결정 돕는 아임웹 기능 4가지". |

**Voice samples (verbatim, opened 2026-09-30):**
- "시작부터 성장까지 쉬워집니다" — home section heading.
- "고민 없이 쉽게 선택만 하세요" — home template section heading.
- "시작이 쉬워서 성장이 쉬운 아임웹과 함께하세요" — home closing heading.
- "브랜드 운영에 꼭 맞는 요금제를 선택해 보세요" — pricing headline.
- "기술 장벽을 낮춰 누구든 도전할 수 있게" — recruiting site.

**Forbidden register**: unexplained technical jargon, enterprise-procurement formality, pressure tactics that contradict the free-to-start promise, superlatives without a number behind them.

## 11. Brand Narrative

주식회사 아임웹 builds for the people its vision names: "We serve the underserved" — small brands, creators and first-time founders who could not hire a developer and a designer. The founding bet was that a Korean-native, no-code builder could collapse the cost of starting an online brand to choosing a template and starting to sell. Its recruiting site lists a 100억 Series A with Altos Ventures alongside the same growth figures the home page shows.

The product has grown from a website builder into what the brand guideline calls a "Brand Builder": templates, a design mode for editing without code, commerce (products, payments, shipping), CRM and marketing automation, and, most recently, imweb AI, which drafts a site from one line. The company positions itself as a partner to brands rather than a tool vendor — it runs a brand conference, publishes a magazine for brands and has signed an education and content partnership (MOU) with Canva. Its own design infrastructure shows through the product: imweb Sans and Pretendard are served from a `/design-system/` path, and class names carry a shared `clay-` prefix.

What Imweb refuses, visible in the captured pages: the density of enterprise commerce consoles and decoration that would compete with the customer's brand. What it embraces: ink-on-white chrome, one coloured eyebrow per page, and templates that bring their own colour.

## 12. Principles

1. **Easy is the brand.** Every surface should lower the perceived difficulty. *UI implication:* one idea per band, plain labels, free and trial always stated on the action.
2. **The customer's brand is the hero.** *UI implication:* keep chrome ink on white so that templates and customer sites carry the colour.
3. **Ink means act.** *UI implication:* fill every primary action and selected state with `#15181e`; keep chromatic colour out of actions.
4. **Proof over promise.** *UI implication:* show growth as counted figures, not adjectives.
5. **Flat and friendly.** *UI implication:* 8px corners, tinted rows instead of shadows.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Imweb user segments (Korean small-brand founders, creators and SMB operators), not individual people.*

**박민지, 27, 서울.** A fashion-brand founder leaving a marketplace to own her brand's look. Can't code, has strong taste; picks a template and swaps in her own photos without a developer.

**김도현, 34, 성남.** A YouTuber launching merchandise. Needs a shop, payments and a community in one place; the PG 가입비 면제 strip on the pricing page speaks to the setup cost he feared.

**이은영, 41, 대구.** Runs a small academy and started on the free plan years ago; upgraded as bookings grew, and trusts the FAQ to answer in plain Korean before she has to call.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover and pressed (header links)** | Text `#15181e` → `#717680` on all six links, on all three pages. |
| **Selected (header link)** | Weight 400 → 700 on the current page's link. |
| **Selected (template tab)** | Transparent → `#15181e` fill with `#ffffff` text, at rest and after two clicks. |
| **Disabled (imweb AI send)** | The send button was recorded as disabled while the prompt was empty. |
| **Transition frames (not declared)** | Template tab hover and pressed at `rgba(21, 24, 30, 0.26)` with text `#525459`, a tab focus frame at alpha 0.416 and a third clicked tab at alpha 0.886 — all mid-transition; header and plan action focus frames at `#171b21` and `#181b21`, not declared because focus is never taken from the capture. |

Focus rings, error, empty, loading and success treatments were not captured and are not described.

## 15. Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The template tabs were caught mid-transition several times — the ink fill arriving at alpha 0.26, 0.416 and 0.886 — which shows the tab change is animated without timing it. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/imweb.json (capturedAt 2026-09-30T07:05:31.157Z), deterministic collector, 1440x900, logged out: imweb.me, imweb.me/theme, imweb.me/price.
- §1, §3, §11 context: design.imweb.me (nonsense-path control 404), team.imweb.me, team.imweb.me/newsroom, imweb.me/blog, the imweb.me footer; 아이뉴스24 via Naver News for the 8조 원 milestone and the Canva MOU. All opened 2026-09-30.
- The imweb editor sits behind 로그인 and was not visited; the imweb AI prompt was neither typed into nor submitted.
- The founding year in the Partial record came from third-party profiles that disagreed and was not re-verified, so it is not stated.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
