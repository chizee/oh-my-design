---
id: liner
name: Liner
display_name_kr: 라이너
country: KR
category: ai
homepage: "https://liner.com"
primary_color: "#2c783c"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=liner.com&sz=128"
verified: "2026-09-30"
added: "2026-06-22"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://liner.com/ko", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://liner.com/ko/pricing", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://liner.com/ko/about", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://liner.com/ko", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://liner.com/ko/pricing", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://liner.com/ko/about", captured: "2026-09-30" }
    - { id: liner-blog, kind: official-doc, url: "https://liner.com/ko/blog", captured: "2026-09-30" }
    - { id: design-system-post, kind: official-doc, url: "https://liner.com/ko/blog/liner-design-system-fronted-1", captured: "2026-09-30" }
    - { id: pretendard-license, kind: license, url: "https://raw.githubusercontent.com/orioncactus/pretendard/main/LICENSE", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &lcta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.primary-hover": *lcta
    "tokens.colors.on-primary": *lcta
    "tokens.colors.brand-line": &lobrand { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.colors.tab-selected": &ltabon { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.colors.scholar": &lsch { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"18\"]", captured: "2026-09-30" }
    "tokens.colors.write": &lwri { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &lh2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.colors.muted": &lh1 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h1", captured: "2026-09-30" }
    "tokens.colors.surface": &lmenu { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-interaction-capture=\"menu-0-0\"]", captured: "2026-09-30" }
    "tokens.colors.outline": *lmenu
    "tokens.colors.discount": &ldisc { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.family.body": *lh2
    "tokens.typography.family.ui": &lbody { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.typography.display-hero.size": &labout { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.typography.display-hero.weight": *labout
    "tokens.typography.display-hero.lineHeight": *labout
    "tokens.typography.display-hero.tracking": *labout
    "tokens.typography.display-hero.use": *labout
    "tokens.typography.display.size": *lh2
    "tokens.typography.display.weight": *lh2
    "tokens.typography.display.lineHeight": *lh2
    "tokens.typography.display.tracking": *lh2
    "tokens.typography.display.use": *lh2
    "tokens.typography.section.size": *lh2
    "tokens.typography.section.weight": *lh2
    "tokens.typography.section.lineHeight": *lh2
    "tokens.typography.section.use": *lh2
    "tokens.typography.page-title.size": &lpt { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::#pricing-plan", captured: "2026-09-30" }
    "tokens.typography.page-title.weight": *lpt
    "tokens.typography.page-title.lineHeight": *lpt
    "tokens.typography.page-title.use": *lpt
    "tokens.typography.title.size": &lh3 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.title.weight": *lh3
    "tokens.typography.title.lineHeight": *lh3
    "tokens.typography.title.use": *lh3
    "tokens.typography.card-title.size": &lh3p { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *lh3p
    "tokens.typography.card-title.lineHeight": *lh3p
    "tokens.typography.card-title.use": *lh3p
    "tokens.typography.subtitle.size": *lh1
    "tokens.typography.subtitle.weight": *lh1
    "tokens.typography.subtitle.lineHeight": *lh1
    "tokens.typography.subtitle.use": *lh1
    "tokens.typography.tab-label.size": &ltabp { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.tab-label.weight": *ltabp
    "tokens.typography.tab-label.lineHeight": *ltabp
    "tokens.typography.tab-label.use": *ltabp
    "tokens.typography.feature-title.size": &lh4 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.typography.feature-title.weight": *lh4
    "tokens.typography.feature-title.lineHeight": *lh4
    "tokens.typography.feature-title.use": *lh4
    "tokens.typography.lead.size": *lh3
    "tokens.typography.lead.weight": *lh3
    "tokens.typography.lead.lineHeight": *lh3
    "tokens.typography.lead.use": *lh3
    "tokens.typography.body.size": *labout
    "tokens.typography.body.weight": *labout
    "tokens.typography.body.lineHeight": *labout
    "tokens.typography.body.use": *labout
    "tokens.typography.button.size": *lcta
    "tokens.typography.button.weight": *lcta
    "tokens.typography.button.lineHeight": *lcta
    "tokens.typography.button.use": *lcta
    "tokens.typography.button-xl.size": &lxl { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.typography.button-xl.weight": *lxl
    "tokens.typography.button-xl.lineHeight": *lxl
    "tokens.typography.button-xl.use": *lxl
    "tokens.typography.nav.size": *ltabp
    "tokens.typography.nav.weight": *ltabp
    "tokens.typography.nav.lineHeight": *ltabp
    "tokens.typography.nav.use": *ltabp
    "tokens.typography.caption.size": *ldisc
    "tokens.typography.caption.weight": *ldisc
    "tokens.typography.caption.lineHeight": *ldisc
    "tokens.typography.caption.use": *ldisc
    "tokens.typography.fine.size": *ldisc
    "tokens.typography.fine.weight": *ldisc
    "tokens.typography.fine.lineHeight": *ldisc
    "tokens.typography.fine.use": *ldisc
    "tokens.spacing.tab-x": *ltabon
    "tokens.spacing.card-y": &lcard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.spacing.card-x": *lcard
    "tokens.spacing.card-gap": *lcard
    "tokens.spacing.menu": *lmenu
    "tokens.rounded.nav": &lnav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.rounded.button": *lcta
    "tokens.rounded.button-xl": *lxl
    "tokens.rounded.menu-item": &lmitem { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-interaction-capture=\"menu-0-3\"]", captured: "2026-09-30" }
    "tokens.rounded.pill": &lpill { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.rounded.tab": *ltabon
    "tokens.shadow.menu": *lmenu
    "tokens.components.primary-button.type": *lcta
    "tokens.components.primary-button.bg": *lcta
    "tokens.components.primary-button.fg": *lcta
    "tokens.components.primary-button.radius": *lcta
    "tokens.components.primary-button.height": *lcta
    "tokens.components.primary-button.font": *lcta
    "tokens.components.primary-button.hover": *lcta
    "tokens.components.primary-button.states": *lcta
    "tokens.components.primary-button.use": *lcta
    "tokens.components.primary-button-xl.type": *lxl
    "tokens.components.primary-button-xl.bg": *lxl
    "tokens.components.primary-button-xl.fg": *lxl
    "tokens.components.primary-button-xl.radius": *lxl
    "tokens.components.primary-button-xl.height": *lxl
    "tokens.components.primary-button-xl.font": *lxl
    "tokens.components.primary-button-xl.hover": *lxl
    "tokens.components.primary-button-xl.use": *lxl
    "tokens.components.outline-brand-button.type": *lobrand
    "tokens.components.outline-brand-button.bg": *lobrand
    "tokens.components.outline-brand-button.fg": *lobrand
    "tokens.components.outline-brand-button.border": *lobrand
    "tokens.components.outline-brand-button.radius": *lobrand
    "tokens.components.outline-brand-button.height": *lobrand
    "tokens.components.outline-brand-button.font": *lobrand
    "tokens.components.outline-brand-button.hover": *lobrand
    "tokens.components.outline-brand-button.use": *lobrand
    "tokens.components.outline-neutral-button.type": &loneut { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.components.outline-neutral-button.bg": *loneut
    "tokens.components.outline-neutral-button.fg": *loneut
    "tokens.components.outline-neutral-button.border": *loneut
    "tokens.components.outline-neutral-button.radius": *loneut
    "tokens.components.outline-neutral-button.height": *loneut
    "tokens.components.outline-neutral-button.font": *loneut
    "tokens.components.outline-neutral-button.hover": *loneut
    "tokens.components.outline-neutral-button.use": *loneut
    "tokens.components.product-cta-pill.type": &lpcta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.components.product-cta-pill.bg": *lpcta
    "tokens.components.product-cta-pill.fg": *lpcta
    "tokens.components.product-cta-pill.radius": *lpcta
    "tokens.components.product-cta-pill.height": *lpcta
    "tokens.components.product-cta-pill.font": *lpcta
    "tokens.components.product-cta-pill.hover": *lpcta
    "tokens.components.product-cta-pill.use": *lpcta
    "tokens.components.product-outline-pill.type": *lpill
    "tokens.components.product-outline-pill.bg": *lpill
    "tokens.components.product-outline-pill.fg": *lpill
    "tokens.components.product-outline-pill.border": *lpill
    "tokens.components.product-outline-pill.radius": *lpill
    "tokens.components.product-outline-pill.height": *lpill
    "tokens.components.product-outline-pill.font": *lpill
    "tokens.components.product-outline-pill.hover": *lpill
    "tokens.components.product-outline-pill.use": *lpill
    "tokens.components.product-tab.type": &ltaboff { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.components.product-tab.bg": *ltaboff
    "tokens.components.product-tab.fg": *ltabp
    "tokens.components.product-tab.radius": *ltaboff
    "tokens.components.product-tab.padding": *ltaboff
    "tokens.components.product-tab.height": *ltaboff
    "tokens.components.product-tab.font": *ltabp
    "tokens.components.product-tab.selected": *ltabon
    "tokens.components.product-tab.states": *ltaboff
    "tokens.components.product-tab.use": *ltaboff
    "tokens.components.billing-toggle.type": &lbill { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.components.billing-toggle.bg": *lbill
    "tokens.components.billing-toggle.fg": *lbill
    "tokens.components.billing-toggle.radius": *lbill
    "tokens.components.billing-toggle.height": *lbill
    "tokens.components.billing-toggle.font": *lbill
    "tokens.components.billing-toggle.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.components.billing-toggle.states": *lbill
    "tokens.components.billing-toggle.use": *lbill
    "tokens.components.header-nav-item.type": *lnav
    "tokens.components.header-nav-item.bg": *lnav
    "tokens.components.header-nav-item.fg": *ltabp
    "tokens.components.header-nav-item.radius": *lnav
    "tokens.components.header-nav-item.padding": *lnav
    "tokens.components.header-nav-item.height": *lnav
    "tokens.components.header-nav-item.font": *ltabp
    "tokens.components.header-nav-item.hover": *lnav
    "tokens.components.header-nav-item.use": *lnav
    "tokens.components.language-select.type": &lsel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"75\"]", captured: "2026-09-30" }
    "tokens.components.language-select.bg": *lsel
    "tokens.components.language-select.fg": *lsel
    "tokens.components.language-select.border": *lsel
    "tokens.components.language-select.radius": *lsel
    "tokens.components.language-select.height": *lsel
    "tokens.components.language-select.font": *lsel
    "tokens.components.language-select.states": *lsel
    "tokens.components.language-select.use": *lsel
    "tokens.components.select-menu.type": *lmenu
    "tokens.components.select-menu.bg": *lmenu
    "tokens.components.select-menu.border": *lmenu
    "tokens.components.select-menu.radius": *lmenu
    "tokens.components.select-menu.padding": *lmenu
    "tokens.components.select-menu.shadow": *lmenu
    "tokens.components.select-menu.selected": *lmitem
    "tokens.components.select-menu.use": *lmenu
    "tokens.components.faq-accordion.type": &lfaq { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-09-30" }
    "tokens.components.faq-accordion.bg": *lfaq
    "tokens.components.faq-accordion.fg": *lfaq
    "tokens.components.faq-accordion.radius": *lfaq
    "tokens.components.faq-accordion.padding": *lfaq
    "tokens.components.faq-accordion.height": *lfaq
    "tokens.components.faq-accordion.font": *lfaq
    "tokens.components.faq-accordion.states": *lfaq
    "tokens.components.faq-accordion.use": *lfaq
    "tokens.components.hero-card.type": *lcard
    "tokens.components.hero-card.bg": *lcard
    "tokens.components.hero-card.border": *lcard
    "tokens.components.hero-card.padding": *lcard
    "tokens.components.hero-card.size": *lcard
    "tokens.components.hero-card.use": *lcard
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#2c783c"
    primary-hover: "#256a33"
    on-primary: "#ffffff"
    brand-line: "#349749"
    tab-selected: "#edf3ed"
    scholar: "#747a4d"
    write: "#536c7a"
    ink: "#1e1e1f"
    muted: "#818184"
    surface: "#ffffff"
    outline: "#e8e8e9"
    discount: "#f58800"
  typography:
    family: { body: "Pretendard Variable", ui: "Pretendard JP Variable" }
    display-hero: { size: 72, weight: 500, lineHeight: 1.1, tracking: -2.16, use: "About-page hero line (Explore without doubt), Pretendard Variable" }
    display: { size: 52, weight: 700, lineHeight: 1.3, tracking: -1.04, use: "Home hero heading (필요할 때 믿고 쓰는 정확한 AI), Pretendard Variable" }
    section: { size: 42, weight: 600, lineHeight: 1.3, use: "Home section heading (어떤 일을 끝내고 싶으세요?) and the about-page statements, Pretendard Variable" }
    page-title: { size: 32, weight: 500, lineHeight: 1.3, use: "Pricing page title (라이너 플랜) and its section headings, Pretendard Variable" }
    title: { size: 28, weight: 600, lineHeight: 1.3, use: "Feature block headings on home (출처가 분명한 답변을 쉽게 이해해 보세요), Pretendard Variable" }
    card-title: { size: 24, weight: 600, lineHeight: 1.3, use: "Benefit headings on pricing and value headings on the about page, Pretendard Variable" }
    subtitle: { size: 24, weight: 400, lineHeight: 1.3, use: "Home hero subtitle (the h1, 목적에 맞는 AI로 결과의 완성도를 높이세요), Pretendard JP Variable" }
    tab-label: { size: 20, weight: 500, lineHeight: 1.3, use: "Labels of the 검색 / 연구 / 글쓰기 selector, Pretendard Variable" }
    feature-title: { size: 18, weight: 600, lineHeight: 1.3, use: "Feature and testimonial headings on home, Pretendard Variable" }
    lead: { size: 17, weight: 400, lineHeight: 1.3, use: "Product-section lead lines on home (넘쳐나는 정보와 불확실한 답변에 지치셨나요?), Pretendard Variable" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Long paragraphs on the about page and the hero card labels, Pretendard Variable" }
    button: { size: 15, weight: 500, lineHeight: 1.3, use: "Labels of the 40px buttons, Pretendard Variable" }
    button-xl: { size: 16, weight: 500, lineHeight: 1.3, use: "Labels of the 48px about-page buttons, Pretendard Variable" }
    nav: { size: 14, weight: 400, lineHeight: 1.3, use: "Header menu labels (제품, API/MCP, 요금제, 더 알아보기, 회사 소개), Pretendard Variable" }
    caption: { size: 13, weight: 400, lineHeight: 1.3, use: "Price captions and the small plan-table buttons on pricing, Pretendard Variable" }
    fine: { size: 12, weight: 500, lineHeight: 1.3, use: "The 20% 할인 note on the annual billing option, Pretendard Variable" }
  spacing: { tab-x: 20, card-y: 40, card-x: 24, card-gap: 48, menu: 8 }
  rounded: { nav: 8, button: 10, button-xl: 12, menu-item: 6, pill: 200, tab: 9999 }
  shadow:
    menu: "rgba(0, 0, 0, 0.05) 0px 4px 12px 0px"
  components:
    primary-button: { type: button, bg: "#2c783c", fg: "#ffffff", radius: "10px", height: "40px", font: "15px / 500 / 19.5px Pretendard Variable", hover: "bg #256a33 — the same settled value on all nine captured instances of this green fill across home, pricing and about; the pressed frame reads the same #256a33, so no separate pressed treatment is declared", states: "rest and hover; focus was not measured", use: "시작하기 in the header on home and pricing (84 x 40), Pro 선택하기 and Max 선택하기 on the plan cards (260 x 40) and 팀 플랜 시작하기 (156 x 40) at home::[data-omd-capture=\"6\"]; the label sits on a 0px-padded button" }
    primary-button-xl: { type: button, bg: "#2c783c", fg: "#ffffff", radius: "12px", height: "48px", font: "16px / 500 / 20.8px Pretendard Variable", hover: "bg #256a33", use: "Start Your Search on the about page (240 x 48) at surface-3::[data-omd-capture=\"7\"]; Try for free beside it is the white variant (#ffffff, text #1e1e1f, hover #fafafb)" }
    outline-brand-button: { type: button, bg: "transparent", fg: "#349749", border: "1px solid #349749", radius: "10px", height: "40px", font: "15px / 500 / 19.5px Pretendard Variable", hover: "bg rgba(44, 120, 60, 0.12) on both captured instances", use: "문의하기 on the contact plan card (260 x 40) and 영업팀 문의하기 (128 x 40) on pricing at surface-2::[data-omd-capture=\"12\"]" }
    outline-neutral-button: { type: button, bg: "#ffffff", fg: "#1e1e1f", border: "1px solid rgba(148, 148, 151, 0.24)", radius: "10px", height: "40px", font: "15px / 500 / 19.5px Pretendard Variable", hover: "bg #fafafb on all three captured instances", use: "바로 사용하기 on the Free plan card (260 x 40) and 자세히 보기 beside 팀 플랜 시작하기 at surface-2::[data-omd-capture=\"9\"]" }
    product-cta-pill: { type: button, bg: "#2c783c", fg: "#ffffff", radius: "200px", height: "48px", font: "16px / 400 / 20.8px Pretendard Variable (label)", hover: "bg #256a33; the Scholar pill #747a4d turns #686e45 and the Write pill #536c7a turns #4b616e", use: "바로 검색하기 in the 검색 section of home (141 x 48); the 연구 section repeats it in #747a4d (바로 시작하기) and the 글쓰기 section in #536c7a (바로 써보기) at home::[data-omd-capture=\"16\"]; the white label sits on a child p" }
    product-outline-pill: { type: button, bg: "transparent", fg: "#349749", border: "1px solid #349749", radius: "200px", height: "48px", font: "16px / 400 / 20.8px Pretendard Variable (label)", hover: "bg rgba(148, 148, 151, 0.08), the same on the green, Scholar and Write siblings", use: "자세히 보기 beside each product CTA (107 x 48) at home::[data-omd-capture=\"17\"]; the Scholar and Write siblings take #747a4d and #536c7a borders and labels, and the three hero cards carry the same green-outlined 시작하기 pill (111 x 48)" }
    product-tab: { type: tab, bg: "transparent", fg: "#1e1e1f", radius: "9999px", padding: "0px 20px", height: "48px", font: "20px / 500 / 26px Pretendard Variable (label)", selected: "bg #edf3ed on the selected option (capture 10 against 11 and 12)", states: "selected read from rest values; no pointer frame", use: "검색 / 연구 / 글쓰기 selector on home at home::[data-omd-capture=\"11\"]; captures 13-15 repeat the same selector" }
    billing-toggle: { type: tab, bg: "transparent", fg: "#1e1e1f", radius: "200px", height: "44px", font: "15px / 500 / 19.5px Pretendard Variable", selected: "bg #ffffff with shadow rgba(0, 0, 0, 0.05) 0px 4px 12px 0px (capture 8, 연간 20% 할인)", states: "selected read from rest values; the unselected option has one pointer frame, so no hover is declared", use: "월간 / 연간 20% 할인 switch on pricing at surface-2::[data-omd-capture=\"7\"]" }
    header-nav-item: { type: button, bg: "transparent", fg: "#1e1e1f", radius: "8px", padding: "0px 4px", height: "36px", font: "14px / 400 / 18.2px Pretendard Variable (label)", hover: "bg rgba(12, 137, 59, 0.08), the same on all five items on each of the three pages", use: "제품, API/MCP, 요금제, 더 알아보기 and 회사 소개 in the header at home::[data-omd-capture=\"1\"]; over the dark about-page hero the labels turn #ffffff and 시작하기 becomes a white button" }
    language-select: { type: button, bg: "#ffffff", fg: "#1e1e1f", border: "1px solid rgba(148, 148, 151, 0.24)", radius: "8px", height: "32px", font: "13px / 400 / 16.9px Pretendard Variable", states: "expanded: the collector opened it and read the menu below", use: "Select language, KO in the footer at home::[data-omd-capture=\"75\"], 86 x 32" }
    select-menu: { type: card, bg: "#ffffff", border: "1px solid #e8e8e9", radius: "10px", padding: "8px", shadow: "rgba(0, 0, 0, 0.05) 0px 4px 12px 0px", selected: "item bg rgba(148, 148, 151, 0.08), radius 6px (menu-0-3)", use: "Language menu opened from the footer select, 320 x 150, at home::[data-omd-interaction-capture=\"menu-0-0\"]; the same menu opens on all three pages" }
    faq-accordion: { type: button, bg: "transparent", fg: "#1e1e1f", radius: "10px", padding: "0px 8px 0px 4px", height: "56px", font: "16px / 500 / 20.8px Pretendard Variable", states: "rest only; no row was opened and no pointer frame was recorded", use: "Questions under 자주 묻는 질문 on home and pricing (944 x 56) at home::[data-omd-capture=\"28\"]" }
    hero-card: { type: card, bg: "transparent", border: "1px solid rgba(20, 55, 27, 0.3) on the right edge only", padding: "40px 24px", size: "389px x 244px", use: "The three hero cards on home (정확한 정보를 찾을 때, 학술 연구를 준비할 때, 논리적인 글이 필요할 때) at home::div, 48px between label and pill; labels 16px uppercase in #818184" }
  components_harvested: true
---

# Design System Inspiration of Liner

## 1. Visual Theme & Atmosphere

Liner (라이너) is the AI search and research service of 주식회사 라이너, a Seoul company whose site footer lists 김진우 as chief executive. According to a 2024 interview in 이코노미조선, 김진우 and 우찬민 founded it in 2015 while studying computer science at Yonsei University. Its first product, 웹 하이라이트, let people highlight text on web pages and PDFs and leave notes on it; the company set up a US entity in February 2017 and built users in 150 countries. The highlights it collected became the idea behind the current product: the interview describes using that data to rank what people consider important. Today the about page calls Liner "the most accurate AI research agent", used by over 10 million academics and professionals, and states the team's aim as "zero hallucinations as the gold standard of credibility". The Korean home sells three agents — Liner for search, Liner Scholar for research and Liner Write for writing — under the line "필요할 때 믿고 쓰는 정확한 AI".

The captured Korean pages (liner.com/ko, its pricing page and its about page) read as a calm white product site. One green, `#2c783c`, fills every primary action, and turns `#256a33` on hover. A second, brighter green, `#349749`, draws the outlined buttons, the green labels and the hero-card pills. Selection is a soft mint, `#edf3ed`, behind the chosen product tab. Each agent has its own colour in its home-page section: green for search, olive `#747a4d` for Scholar and slate `#536c7a` for Write. Text is near-black `#1e1e1f` with muted grey `#818184`, and a single orange, `#f58800`, marks the annual saving on pricing.

Everything on these pages is set in Pretendard: Pretendard Variable for headings, paragraphs and button labels, Pretendard JP Variable as the page default and on the 24px hero subtitle. Headings get their weight from 500–700 and tight tracking at display sizes (`-1.04px` at 52px, `-2.16px` at 72px). Liner's engineering blog describes building a design system with a dedicated TF, and the live pages carry its type-scale class names (`lp-sys-typo-display2` to `caption2`).

**Key Characteristics:**
- One action green, `#2c783c`, on every primary button and product CTA; hover `#256a33`
- A brighter line green, `#349749`, for outlined buttons, green labels and pill borders
- Mint `#edf3ed` for the selected product tab; olive `#747a4d` and slate `#536c7a` for the Scholar and Write sections
- Pretendard Variable and Pretendard JP Variable throughout; no display serif renders on these pages
- Radii by size: 8px header items and small buttons, 10px standard buttons, 12px large buttons, 200px pills, 9999px tabs
- Flat surfaces; the only shadow is a soft `rgba(0, 0, 0, 0.05) 0px 4px 12px 0px` under menus and the selected billing option
- Near-black `#1e1e1f` text with `#818184` for subtitles and captions

## Primary tasks

- Search the web and get an answer with its sources cited
- Run a literature review with Liner Scholar before writing a paper
- Draft a piece of writing with Liner Write
- Compare the Free, Pro and Max plans and the team plan
- Contact sales about a team or enterprise plan

## 2. Color Palette & Roles

Every token below was read by the deterministic collector on 2026-09-30 from liner.com/ko, liner.com/ko/pricing and liner.com/ko/about (liner.com redirects to /ko for a Korean browser).

### Primary
- **Action Green** (`#2c783c`): The fill of every primary action — 시작하기 in the header, Pro 선택하기 and Max 선택하기 on the plan cards and in the comparison table, 팀 플랜 시작하기, Start Your Search on the about page and the 바로 검색하기 pill on home. It is the primary because the captured pages render it in that role: nine captured buttons compute `backgroundColor: rgb(44, 120, 60)`, across all three pages. It is the only colour that fills a primary action; the olive and slate pills below belong to the Scholar and Write sections.
- **Action Green Hover** (`#256a33`): The same nine buttons read `rgb(37, 106, 51)` in their hover frames.
- **On Primary** (`#ffffff`): Labels on the green buttons and pills.
- **Line Green** (`#349749`): Border and label of the outlined 문의하기 buttons, border of the hero-card and 자세히 보기 pills, and green text such as the hero-card 시작하기 labels.

### Product accents
- **Selected Tab** (`#edf3ed`): Background of the selected option in the 검색 / 연구 / 글쓰기 selector.
- **Scholar Olive** (`#747a4d`): The 연구 (Liner Scholar) section's CTA pill and its outline sibling; hover `#686e45`.
- **Write Slate** (`#536c7a`): The 글쓰기 (Liner Write) section's CTA pill and its outline sibling; hover `#4b616e`.

### Neutral & Surface
- **Surface** (`#ffffff`): Menu panels, the footer language select, the selected billing option and the outlined neutral buttons.
- **Outline** (`#e8e8e9`): The 1px border of the language menu.
- **Hover fill** (`#fafafb`): The hover fill of the outlined neutral and white buttons.
- Translucent values stay in component fields: the neutral button border `rgba(148, 148, 151, 0.24)`, the header-item hover `rgba(12, 137, 59, 0.08)`, the outline-button hover `rgba(44, 120, 60, 0.12)`, and the 30% forest-green divider `rgba(20, 55, 27, 0.3)` on the hero cards.

### Text
- **Ink** (`#1e1e1f`): Headings, paragraphs, plan names and button labels on white.
- **Muted** (`#818184`): The hero subtitle, hero-card labels, price captions and FAQ answers.
- **Discount** (`#f58800`): The "20% 할인" note on the annual billing option.

### Brand assets, not tokens
- The Liner logo and favicon were not measured, and no logo colour is a token here.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard Variable` (524 observed uses) and `Pretendard JP Variable` (301), both loaded from jsDelivr (`cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/.../woff2-dynamic-subset/`). The body stack is `"Pretendard JP Variable", "Pretendard JP", "Pretendard Variable", sans-serif`; headings, paragraphs and button labels set `Pretendard Variable`.
- **Official product use**: no Liner-owned typeface renders on these pages; the product text is set in the public Pretendard distribution.
- **Licence**: Pretendard is published by its author under the SIL Open Font License, Version 1.1 (the project's LICENSE file, opened 2026-09-30).
- **Declared only (no visible use)**: a face named `flare`, declared from `assets.liner.com/fonts/arizona-flare/` (files named `ABCArizonaFlare-*.woff2`), and `Inter` from `liner.com/_next/static/media/`. Neither renders any text on the three captured pages, so neither is a token and no specimen is shown. No licence page for either was opened.
- **Unresolved**: none.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display Hero | Pretendard Variable | 72px | 500 | 79.2px (1.1) | -2.16px | "Explore without doubt", about page |
| Display | Pretendard Variable | 52px | 700 | 67.6px (1.3) | -1.04px | Home hero heading |
| Section | Pretendard Variable | 42px | 600 | 54.6px (1.3) | normal | Home section heading, about statements |
| Plan Price | Pretendard JP Variable | 36px | 500 | normal | normal | Plan prices on pricing |
| Page Title | Pretendard Variable | 32px | 500 | 41.6px (1.3) | normal | 라이너 플랜 and pricing section headings |
| Title | Pretendard Variable | 28px | 600 | 36.4px (1.3) | normal | Feature block headings on home |
| Card Title | Pretendard Variable | 24px | 600 | 31.2px (1.3) | normal | Pricing benefits, about-page values |
| Subtitle | Pretendard JP Variable | 24px | 400 | 31.2px (1.3) | normal | Home hero subtitle (h1) in `#818184` |
| Plan Name | Pretendard JP Variable | 22px | 500 | 33px (1.5) | normal | Free, Pro, Max |
| Tab Label | Pretendard Variable | 20px | 500 | 26px (1.3) | normal | 검색 / 연구 / 글쓰기 |
| Feature Title | Pretendard Variable | 18px | 600 | 23.4px (1.3) | normal | Feature and testimonial headings |
| Lead | Pretendard Variable | 17px | 400 | 22.1px (1.3) | normal | Product-section lead lines |
| Body | Pretendard Variable | 16px | 400 | 24px (1.5) | normal | About-page paragraphs |
| Button | Pretendard Variable | 15px | 500 | 19.5px (1.3) | normal | 40px buttons |
| Nav | Pretendard Variable | 14px | 400 | 18.2px (1.3) | normal | Header menu |
| Caption | Pretendard Variable | 13px | 400 | 16.9px (1.3) | normal | Price captions, table buttons |
| Fine | Pretendard Variable | 12px | 500 | 15.6px (1.3) | normal | "20% 할인" |

### Principles
- **One family, two builds**: Pretendard Variable carries the reading and action text; Pretendard JP Variable is the page default and the hero subtitle.
- **Tight only at display sizes**: `-1.04px` at 52px and `-2.16px` at 72px; everything from 42px down keeps normal tracking.
- **A 1.3 line-height rhythm**: almost every styled size computes a 1.3 line height; long paragraphs open to 1.5.
- **Named scale**: the live classes follow Liner's design-system scale — `display2`/`display3`, `title1`–`title5`, `paragraph1`–`paragraph4`, `caption1`/`caption2`.

## 4. Component Stylings

### Buttons

**Primary button**
- Background: `#2c783c`
- Text: `#ffffff`
- Radius: 10px
- Height: 40px
- Font: 15px / 500 / 19.5px Pretendard Variable
- Hover: background `#256a33`
- Use: 시작하기 in the header, Pro 선택하기 and Max 선택하기 on the plan cards, 팀 플랜 시작하기

**Large primary button**
- Background: `#2c783c`
- Text: `#ffffff`
- Radius: 12px
- Height: 48px
- Font: 16px / 500 / 20.8px Pretendard Variable
- Hover: background `#256a33`
- Use: Start Your Search on the about page; its white partner, Try for free, is `#ffffff` with `#1e1e1f` text and a `#fafafb` hover

**Outlined brand button**
- Background: transparent
- Text: `#349749`
- Border: 1px solid `#349749`
- Radius: 10px
- Height: 40px
- Font: 15px / 500 / 19.5px Pretendard Variable
- Hover: background `rgba(44, 120, 60, 0.12)`
- Use: 문의하기 and 영업팀 문의하기 on pricing

**Outlined neutral button**
- Background: `#ffffff`
- Text: `#1e1e1f`
- Border: 1px solid `rgba(148, 148, 151, 0.24)`
- Radius: 10px
- Height: 40px
- Font: 15px / 500 / 19.5px Pretendard Variable
- Hover: background `#fafafb`
- Use: 바로 사용하기 on the Free plan, 자세히 보기 beside the team plan

**Plan-table buttons**
- The comparison table repeats the three buttons at 32px tall with an 8px radius and 13px / 400 / 16.9px labels (168 × 32): green `#2c783c` for Pro and Max, outlined `#349749` for 문의하기, outlined neutral for 바로 사용하기, with the same hovers.

**Product CTA pill**
- Background: `#2c783c`
- Text: `#ffffff`
- Radius: 200px
- Height: 48px
- Font: 16px / 400 / 20.8px Pretendard Variable
- Hover: background `#256a33`
- Use: 바로 검색하기 in the 검색 section of home; the 연구 section uses `#747a4d` (hover `#686e45`) and the 글쓰기 section `#536c7a` (hover `#4b616e`)

**Product outline pill**
- Background: transparent
- Text: `#349749`
- Border: 1px solid `#349749`
- Radius: 200px
- Height: 48px
- Font: 16px / 400 / 20.8px Pretendard Variable
- Hover: background `rgba(148, 148, 151, 0.08)`
- Use: 자세히 보기 beside each product CTA, in each section's colour; the three hero cards carry the same green-outlined 시작하기 pill at 111 × 48

### Navigation & Tabs

**Header menu item**
- Background: transparent
- Text: `#1e1e1f`
- Radius: 8px
- Padding: 0px 4px
- Height: 36px
- Font: 14px / 400 / 18.2px Pretendard Variable
- Hover: background `rgba(12, 137, 59, 0.08)`
- Use: 제품, API/MCP, 요금제, 더 알아보기, 회사 소개; over the dark about-page hero the labels turn `#ffffff` and 시작하기 becomes a white button with a `#fafafb` hover

**Product selector tab**
- Background: transparent
- Text: `#1e1e1f`
- Radius: 9999px
- Padding: 0px 20px
- Height: 48px
- Font: 20px / 500 / 26px Pretendard Variable
- Selected: background `#edf3ed`
- Use: 검색 / 연구 / 글쓰기 on home

**Billing toggle**
- Background: transparent
- Text: `#1e1e1f`
- Radius: 200px
- Height: 44px
- Font: 15px / 500 / 19.5px Pretendard Variable
- Selected: background `#ffffff` with `rgba(0, 0, 0, 0.05) 0px 4px 12px 0px`
- Use: 월간 / 연간 20% 할인 on pricing; the annual option carries the orange `#f58800` "20% 할인" note

### Inputs & Menus

**Language select**
- Background: `#ffffff`
- Text: `#1e1e1f`
- Border: 1px solid `rgba(148, 148, 151, 0.24)`
- Radius: 8px
- Height: 32px
- Font: 13px / 400 / 16.9px Pretendard Variable
- Use: Select language, KO in the footer of every page

**Select menu**
- Background: `#ffffff`
- Border: 1px solid `#e8e8e9`
- Radius: 10px
- Padding: 8px
- Shadow: `rgba(0, 0, 0, 0.05) 0px 4px 12px 0px`
- Selected: item background `rgba(148, 148, 151, 0.08)`, radius 6px
- Use: the language menu, 320 × 150

### Cards & Containers

**Hero card**
- Background: transparent
- Border: 1px `rgba(20, 55, 27, 0.3)` on the right edge only
- Padding: 40px 24px
- Size: 389 × 244
- Use: 정확한 정보를 찾을 때, 학술 연구를 준비할 때, 논리적인 글이 필요할 때 — a 16px uppercase `#818184` label above a green-outlined 시작하기 pill, 48px apart

**FAQ row**
- Background: transparent
- Text: `#1e1e1f`
- Radius: 10px
- Padding: 0px 8px 0px 4px
- Height: 56px
- Font: 16px / 500 / 20.8px Pretendard Variable
- Use: questions under 자주 묻는 질문 on home and pricing; answers are 15px `#818184`

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of liner.com/ko, logged out, plus first-party company pages and one Korean press interview)
**Tier 1 sources:** https://liner.com/ko ; https://liner.com/ko/pricing ; https://liner.com/ko/about ; https://liner.com/ko/blog ; https://liner.com/ko/blog/liner-design-system-fronted-1
**Tier 2 sources:** getdesign.md/liner (HTTP 200, the name does not appear on the page) and styles.refero.design/?q=liner (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Product tabs: 20px horizontal padding at 48px height
- Hero cards: 40px 24px padding, 48px between the label and the pill
- Menus: 8px padding; items `8px 6px 8px 8px`
- Header items: 36px tall with 4px horizontal padding around the label

### Grid & Container
- Home: a centred hero (52px heading, 24px subtitle), three hero cards side by side, then one section per agent — lead line, CTA pill pair, feature headings — followed by testimonials and the FAQ.
- Pricing: a centred 32px title, the monthly/annual toggle, plan cards with 260px-wide buttons, a team-plan band, the comparison table and the FAQ.
- About: a dark full-bleed hero with a 72px line, then 42px statements beside long 16px paragraphs and three value columns.

### Whitespace Philosophy
- **Colour marks the agent**: each product section is keyed by its own pill colour instead of by background changes.
- **Actions in pairs**: a filled pill beside an outlined 자세히 보기 pill, a green plan button beside an outlined one.

### Border Radius Scale
- 6px: menu items
- 8px: header items, the language select, table buttons
- 10px: standard buttons, menus, FAQ rows
- 12px: large about-page buttons
- 200px: product pills and the billing toggle
- 9999px: product selector tabs

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, buttons, tabs, cards |
| Divider | 1px `rgba(20, 55, 27, 0.3)` | Right edge of the hero cards |
| Raised | `rgba(0, 0, 0, 0.05) 0px 4px 12px 0px` | Menus, the selected billing option |

**Shadow Philosophy**: Liner's pages are flat. Buttons, tabs and cards compute `box-shadow: none`; depth comes from colour — green fills, a mint selected tab, a white option on the billing toggle. The one soft shadow belongs to things that sit above the page: the language menu and the chosen billing option.

## 7. Do's and Don'ts

### Do
- Fill primary actions with `#2c783c` and use the measured `#256a33` for their hover
- Use `#349749` for outlined buttons, green labels and pill borders
- Mark the selected product tab with `#edf3ed`
- Key product sections to their colours: green for search, `#747a4d` for Scholar, `#536c7a` for Write
- Set text in Pretendard Variable (Pretendard JP Variable for the page default), 15px / 500 on buttons
- Pick the radius by size: 10px at 40px, 12px at 48px, 8px at 32px, 200px for pills

### Don't
- Don't render a serif display face; the declared `flare` face renders nothing on these pages
- Don't put the primary green on decoration; it marks actions
- Don't add shadows to cards or buttons; only menus and the selected toggle option carry one
- Don't fill the Scholar or Write CTAs with the search green
- Don't invent focus rings or pressed colours; none were measured

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. The product tabs carry a `max-s:h-[40px]` class and the hero cards a `@max-[763px]:gap-[24px]` class, signs that both tighten on small screens; no breakpoint was measured.

### Touch Targets
- Primary and outlined buttons: 40px (48px on the about page)
- Product pills and tabs: 48px
- Billing toggle: 44px
- Header items: 36px
- FAQ rows: 56px

### Collapsing Strategy
- Not measured.

### Image Behavior
- Not measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: `#2c783c`, hover `#256a33`, labels `#ffffff`
- Line green (outlines, green text): `#349749`
- Selected tab: `#edf3ed`
- Scholar `#747a4d` (hover `#686e45`); Write `#536c7a` (hover `#4b616e`)
- Text `#1e1e1f`; muted `#818184`; discount `#f58800`
- White surfaces `#ffffff`; menu border `#e8e8e9`; neutral hover `#fafafb`

### Example Component Prompts
- "Create a Liner primary button: `#2c783c` background, `#ffffff` 15px Pretendard Variable label at weight 500, 40px tall, 10px radius, no shadow; hover `#256a33`."
- "Pair it with an outlined contact button: transparent background, 1px solid `#349749` border, `#349749` label, same geometry; hover fill `rgba(44, 120, 60, 0.12)`."
- "Build the product selector: three 48px pills with 9999px radius and 20px horizontal padding, 20px / 500 `#1e1e1f` labels; the selected one fills `#edf3ed`."
- "Make a product CTA pair: a 48px, 200px-radius `#2c783c` pill with a white 16px label, beside a transparent pill with a 1px `#349749` border and a `#349749` label."

### Iteration Guide
1. `#2c783c` fills actions; `#349749` draws outlines
2. Each agent keeps its colour: green, olive `#747a4d`, slate `#536c7a`
3. Pretendard everywhere; tight tracking only at 52px and above
4. Radius follows height: 8 / 10 / 12, pills 200, tabs 9999
5. Flat, with one soft shadow for menus

---

## 10. Voice & Tone

Liner speaks plainly about accuracy and getting work done. Korean pages address the reader politely and directly, lead with the outcome, and keep actions short.

| Context | Tone |
|---|---|
| Page title | Audience-first. "라이너 \| 일 잘하는 사람들의 AI". |
| Hero | A promise of reliability. "필요할 때 믿고 쓰는 정확한 AI". |
| Section prompts | A question to the reader. "어떤 일을 끝내고 싶으세요?" |
| Actions | Short and concrete: "시작하기", "바로 검색하기", "바로 써보기", "자세히 보기", "Pro 선택하기", "문의하기". |
| About page (English) | Mission language. "Explore without doubt", "Line-by-line accuracy", "Safety, by default", "Mission First". |

**Voice samples (verbatim, opened 2026-09-30):**
- "필요할 때 믿고 쓰는 정확한 AI" — liner.com/ko hero heading.
- "목적에 맞는 AI로 결과의 완성도를 높이세요" — liner.com/ko hero subtitle.
- "출처가 분명한 답변을 쉽게 이해해 보세요" — search section heading on home.
- "리서치할 때 Pro를 사용해야 하는 이유" — pricing page heading.
- "Meet Liner, the most accurate AI research agent" — liner.com/ko/about.

**Forbidden register**: unverifiable superlatives about AI, urgency tactics, casual slang that undercuts the research context, claims without sources.

## 11. Brand Narrative

Liner started as a highlighter for the web. 이코노미조선's 2024 interview with co-founder 김진우 describes the first product, 웹 하이라이트, as a way to mark text on web pages and PDFs and keep notes, released without marketing and downloaded by 500 people on its first day. The founders — 김진우 and 우찬민, then computer-science students at Yonsei — had started the company in 2015, set up a US entity in February 2017 and spent four years refining the highlighter for users in 150 countries. The highlights became a database of what people found important, and that idea turned Liner toward search.

The current Liner is an AI research agent. Its about page puts accuracy first: the team aims for "zero hallucinations", cites sources for every sentence ("Line-by-line accuracy"), and names safety and "Mission First" as the other two values. The product is now three agents — Liner, Liner Scholar and Liner Write — with an API and MCP servers for developers. On the engineering blog the company writes about its data platform for 13 million users, its own rankers and embedding models, and building a design system with limited resources.

The captured pages carry that story in their colours: a green for search and action, a mint for selection, and a separate colour for each agent.

## 12. Principles

1. **Accuracy first.** The about page sets zero hallucinations as the aim. *UI implication:* show sources beside answers and keep the interface quiet around them.
2. **Line by line.** Liner cites a source for every sentence. *UI implication:* design for citation density — clear links, readable 15–16px text.
3. **One green for action.** *UI implication:* `#2c783c` means "do this"; outlines use `#349749`.
4. **Each agent has its colour.** *UI implication:* keep search green, Scholar olive and Write slate apart. (An editorial reading of the home page, not a Liner statement.)
5. **Safety by default.** *UI implication:* no dark patterns in plan choice; the free plan sits first with its own action.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Liner user segments (students, researchers, knowledge workers), not individual people.*

**박지민, 27, 서울.** A graduate student who runs literature reviews in Liner Scholar before writing a paper, and checks every cited source.

**최서연, 34, 성남.** A product manager who uses Liner search for fact-checks and moved to the Pro plan for more agent credits.

**이준호, 38, 서울.** An engineering lead who read Liner's design-system blog post and is evaluating the Liner API for internal research tools.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover (primary)** | Every green button and the search pill turn from `#2c783c` to `#256a33`; the pressed frame reads the same value. |
| **Hover (outlined)** | Outlined brand buttons fill `rgba(44, 120, 60, 0.12)`; outlined neutral and white buttons fill `#fafafb`; outline pills fill `rgba(148, 148, 151, 0.08)`. |
| **Hover (product pills)** | Scholar `#747a4d` → `#686e45`; Write `#536c7a` → `#4b616e`. |
| **Hover (header)** | Header items fill `rgba(12, 137, 59, 0.08)`. |
| **Selected** | The product tab fills `#edf3ed`; the chosen billing option turns white with a soft shadow; the chosen language menu item fills `rgba(148, 148, 151, 0.08)`. |
| **Expanded** | The footer language select opens a white menu with a `#e8e8e9` border. |

The hero-card 시작하기 pills show no computed change in their hover frames. Focus was not measured, and error, empty, loading and success states were not captured, so none is described.

## 15. Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. Class names on the tabs and hero cards mention transitions, which shows motion exists without timing it. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/liner.json (capturedAt 2026-09-30T07:52:02Z), deterministic collector, 1440x900, logged out: liner.com/ko (the frontmatter homepage liner.com redirects there for a Korean browser), liner.com/ko/pricing (liner.com/pricing redirects there), liner.com/ko/about. Labels were matched to captures with a headless read-only survey of the same pages.
- §1 and §11 company facts: liner.com/ko/about (values, "over 10 million"), the liner.com/ko footer (주식회사 라이너, 대표 김진우), liner.com/ko/blog (post titles, including the 13 million users data-platform post), liner.com/ko/blog/liner-design-system-fronted-1 (design-system TF), and 이코노미조선, "[Interview] 글로벌 생성 AI 4위 라이너 김진우 공동 대표 …" (2024-06-03): 2015 founding by 김진우·우찬민, 웹 하이라이트, US entity February 2017, 150 countries.
- §3 licence: github.com/orioncactus/pretendard LICENSE (SIL Open Font License, Version 1.1).
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
