---
id: kia
name: Kia
display_name_kr: 기아
country: KR
category: automotive
homepage: "https://www.kia.com/kr/"
primary_color: "#05141f"
logo:
  type: simpleicons
  slug: kia
verified: "2026-09-30"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.kia.com/kr", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing-product, url: "https://www.kia.com/kr/vehicles/ev", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing-product, url: "https://www.kia.com/kr/vehicles/ev6/features", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.kia.com/kr", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.kia.com/kr/vehicles/ev", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.kia.com/kr/vehicles/ev6/features", captured: "2026-09-30" }
    - { id: brand-logo-story, kind: official-doc, url: "https://worldwide.kia.com/ko/brand/our-brand/brand-elements/brand-logo-story", captured: "2026-09-30" }
    - { id: who-we-are, kind: official-doc, url: "https://worldwide.kia.com/ko/brand/our-brand/brand-identity/who-we-are", captured: "2026-09-30" }
    - { id: opposites-united, kind: official-doc, url: "https://worldwide.kia.com/ko/design/design-philosophy/opposites-united", captured: "2026-09-30" }
    - { id: heritage, kind: official-doc, url: "https://worldwide.kia.com/ko/brand/our-brand/heritage/", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.ink": &kbody { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::#home-page-7b00d23552", captured: "2026-09-30" }
    "tokens.colors.canvas": *kbody
    "tokens.colors.primary": &kprim { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *kprim
    "tokens.colors.primary-deep": &kfoot { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"85\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &klink { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"59\"]", captured: "2026-09-30" }
    "tokens.colors.body": &kspec { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.muted": &kdesc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.muted-alt": &kpol { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"86\"]", captured: "2026-09-30" }
    "tokens.colors.outline": &kout { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"47\"]", captured: "2026-09-30" }
    "tokens.colors.disabled": &kdis { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"57\"]", captured: "2026-09-30" }
    "tokens.typography.family.display": &kh2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.family.body": *kbody
    "tokens.typography.family.light": *kdesc
    "tokens.typography.display-hero.size": &kmain { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.display-hero.weight": *kmain
    "tokens.typography.display-hero.lineHeight": *kmain
    "tokens.typography.display-hero.use": *kmain
    "tokens.typography.display.size": &kteaser { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.display.weight": *kteaser
    "tokens.typography.display.lineHeight": *kteaser
    "tokens.typography.display.use": *kteaser
    "tokens.typography.section.size": *kh2
    "tokens.typography.section.weight": *kh2
    "tokens.typography.section.lineHeight": *kh2
    "tokens.typography.section.use": *kh2
    "tokens.typography.subsection.size": &ksubt { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.subsection.weight": *ksubt
    "tokens.typography.subsection.lineHeight": *ksubt
    "tokens.typography.subsection.use": *ksubt
    "tokens.typography.card-title.size": &kh3 { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.card-title.weight": *kh3
    "tokens.typography.card-title.lineHeight": *kh3
    "tokens.typography.card-title.use": *kh3
    "tokens.typography.model-name.size": &kh4 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h4", captured: "2026-09-30" }
    "tokens.typography.model-name.weight": *kh4
    "tokens.typography.model-name.lineHeight": *kh4
    "tokens.typography.model-name.use": *kh4
    "tokens.typography.tab.size": &ktabon { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"41\"]", captured: "2026-09-30" }
    "tokens.typography.tab.weight": *ktabon
    "tokens.typography.tab.lineHeight": *ktabon
    "tokens.typography.tab.use": *ktabon
    "tokens.typography.news-title.size": &knews { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"65\"]", captured: "2026-09-30" }
    "tokens.typography.news-title.weight": *knews
    "tokens.typography.news-title.lineHeight": *knews
    "tokens.typography.news-title.use": *knews
    "tokens.typography.body.size": *kbody
    "tokens.typography.body.weight": *kbody
    "tokens.typography.body.use": *kbody
    "tokens.typography.body-long.size": *kspec
    "tokens.typography.body-long.weight": *kspec
    "tokens.typography.body-long.lineHeight": *kspec
    "tokens.typography.body-long.use": *kspec
    "tokens.typography.button.size": *kprim
    "tokens.typography.button.weight": *kprim
    "tokens.typography.button.lineHeight": *kprim
    "tokens.typography.button.use": *kprim
    "tokens.typography.caption.size": &kcap { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"73\"]", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *kcap
    "tokens.typography.caption.lineHeight": *kcap
    "tokens.typography.caption.use": *kcap
    "tokens.typography.fine.size": &kaward { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"92\"]", captured: "2026-09-30" }
    "tokens.typography.fine.weight": *kaward
    "tokens.typography.fine.lineHeight": *kaward
    "tokens.typography.fine.use": *kaward
    "tokens.spacing.button-y": *kprim
    "tokens.spacing.button-x": *kprim
    "tokens.spacing.link-card": *klink
    "tokens.spacing.tab-gap": &kcatli { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::li", captured: "2026-09-30" }
    "tokens.spacing.badge-x": &klabel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.rounded.none": *kprim
    "tokens.rounded.badge": *klabel
    "tokens.rounded.segment": &kseg { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"39\"]", captured: "2026-09-30" }
    "tokens.shadow.chat": &kchat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"40\"]", captured: "2026-09-30" }
    "tokens.shadow.float": &ktop { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"94\"]", captured: "2026-09-30" }
    "tokens.components.primary-button.type": *kprim
    "tokens.components.primary-button.bg": *kprim
    "tokens.components.primary-button.fg": *kprim
    "tokens.components.primary-button.border": *kprim
    "tokens.components.primary-button.radius": *kprim
    "tokens.components.primary-button.padding": *kprim
    "tokens.components.primary-button.height": *kprim
    "tokens.components.primary-button.font": *kprim
    "tokens.components.primary-button.states": *kprim
    "tokens.components.primary-button.use": *kprim
    "tokens.components.hero-secondary-button.type": &khero { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.components.hero-secondary-button.bg": *khero
    "tokens.components.hero-secondary-button.fg": *khero
    "tokens.components.hero-secondary-button.border": *khero
    "tokens.components.hero-secondary-button.radius": *khero
    "tokens.components.hero-secondary-button.padding": *khero
    "tokens.components.hero-secondary-button.height": *khero
    "tokens.components.hero-secondary-button.font": *khero
    "tokens.components.hero-secondary-button.states": *khero
    "tokens.components.hero-secondary-button.use": *khero
    "tokens.components.outline-button.type": *kout
    "tokens.components.outline-button.bg": *kout
    "tokens.components.outline-button.fg": *kout
    "tokens.components.outline-button.border": *kout
    "tokens.components.outline-button.radius": *kout
    "tokens.components.outline-button.padding": *kout
    "tokens.components.outline-button.height": *kout
    "tokens.components.outline-button.font": *kout
    "tokens.components.outline-button.states": *kout
    "tokens.components.outline-button.use": *kout
    "tokens.components.header-utility-button.type": &kutil { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.components.header-utility-button.bg": *kutil
    "tokens.components.header-utility-button.fg": *kutil
    "tokens.components.header-utility-button.height": *kutil
    "tokens.components.header-utility-button.font": *kutil
    "tokens.components.header-utility-button.states": &kutil2 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.components.header-utility-button.use": *kutil
    "tokens.components.footer-family-select.type": *kfoot
    "tokens.components.footer-family-select.bg": *kfoot
    "tokens.components.footer-family-select.fg": *kfoot
    "tokens.components.footer-family-select.border": *kfoot
    "tokens.components.footer-family-select.radius": *kfoot
    "tokens.components.footer-family-select.padding": *kfoot
    "tokens.components.footer-family-select.height": *kfoot
    "tokens.components.footer-family-select.font": *kfoot
    "tokens.components.footer-family-select.states": *kfoot
    "tokens.components.footer-family-select.use": *kfoot
    "tokens.components.calculator-select.type": &ksel { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"58\"]", captured: "2026-09-30" }
    "tokens.components.calculator-select.bg": *ksel
    "tokens.components.calculator-select.fg": *ksel
    "tokens.components.calculator-select.border": *ksel
    "tokens.components.calculator-select.radius": *ksel
    "tokens.components.calculator-select.padding": *ksel
    "tokens.components.calculator-select.height": *ksel
    "tokens.components.calculator-select.font": *ksel
    "tokens.components.calculator-select.disabled": *kdis
    "tokens.components.calculator-select.states": *ksel
    "tokens.components.calculator-select.use": *ksel
    "tokens.components.best-kia-tab.type": &ktaboff { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"42\"]", captured: "2026-09-30" }
    "tokens.components.best-kia-tab.bg": *ktaboff
    "tokens.components.best-kia-tab.fg": *ktaboff
    "tokens.components.best-kia-tab.height": *ktaboff
    "tokens.components.best-kia-tab.font": *ktaboff
    "tokens.components.best-kia-tab.selected": *ktabon
    "tokens.components.best-kia-tab.states": *ktaboff
    "tokens.components.best-kia-tab.use": *ktaboff
    "tokens.components.vehicle-category-tab.type": &kcatoff { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.components.vehicle-category-tab.bg": *kcatoff
    "tokens.components.vehicle-category-tab.fg": *kcatoff
    "tokens.components.vehicle-category-tab.padding": *kcatoff
    "tokens.components.vehicle-category-tab.height": *kcatoff
    "tokens.components.vehicle-category-tab.font": *kcatoff
    "tokens.components.vehicle-category-tab.selected": { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.components.vehicle-category-tab.states": *kcatoff
    "tokens.components.vehicle-category-tab.use": *kcatoff
    "tokens.components.vehicle-subnav-link.type": &ksuboff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.components.vehicle-subnav-link.bg": *ksuboff
    "tokens.components.vehicle-subnav-link.fg": *ksuboff
    "tokens.components.vehicle-subnav-link.height": *ksuboff
    "tokens.components.vehicle-subnav-link.font": *ksuboff
    "tokens.components.vehicle-subnav-link.selected": { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.components.vehicle-subnav-link.states": *ksuboff
    "tokens.components.vehicle-subnav-link.use": *ksuboff
    "tokens.components.trim-segmented-control.type": &ksegoff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"40\"]", captured: "2026-09-30" }
    "tokens.components.trim-segmented-control.bg": *ksegoff
    "tokens.components.trim-segmented-control.fg": *ksegoff
    "tokens.components.trim-segmented-control.border": &ktrack { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::#pdp__tab", captured: "2026-09-30" }
    "tokens.components.trim-segmented-control.radius": *ksegoff
    "tokens.components.trim-segmented-control.padding": *ktrack
    "tokens.components.trim-segmented-control.height": *ksegoff
    "tokens.components.trim-segmented-control.font": *ksegoff
    "tokens.components.trim-segmented-control.selected": *kseg
    "tokens.components.trim-segmented-control.states": *ksegoff
    "tokens.components.trim-segmented-control.use": *ksegoff
    "tokens.components.label-badge.type": *klabel
    "tokens.components.label-badge.bg": *klabel
    "tokens.components.label-badge.fg": *klabel
    "tokens.components.label-badge.radius": *klabel
    "tokens.components.label-badge.padding": *klabel
    "tokens.components.label-badge.height": *klabel
    "tokens.components.label-badge.font": *klabel
    "tokens.components.label-badge.use": *klabel
    "tokens.components.best-label-badge.type": &kbest { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::p", captured: "2026-09-30" }
    "tokens.components.best-label-badge.bg": *kbest
    "tokens.components.best-label-badge.fg": *kbest
    "tokens.components.best-label-badge.radius": *kbest
    "tokens.components.best-label-badge.padding": *kbest
    "tokens.components.best-label-badge.height": *kbest
    "tokens.components.best-label-badge.font": *kbest
    "tokens.components.best-label-badge.use": *kbest
    "tokens.components.quick-link-card.type": *klink
    "tokens.components.quick-link-card.bg": *klink
    "tokens.components.quick-link-card.radius": *klink
    "tokens.components.quick-link-card.padding": *klink
    "tokens.components.quick-link-card.size": *klink
    "tokens.components.quick-link-card.use": *klink
    "tokens.components.floating-chat-button.type": *kchat
    "tokens.components.floating-chat-button.bg": *kchat
    "tokens.components.floating-chat-button.radius": *kchat
    "tokens.components.floating-chat-button.size": *kchat
    "tokens.components.floating-chat-button.shadow": *kchat
    "tokens.components.floating-chat-button.states": *kchat
    "tokens.components.floating-chat-button.use": *kchat
    "tokens.components.top-button.type": *ktop
    "tokens.components.top-button.bg": *ktop
    "tokens.components.top-button.radius": *ktop
    "tokens.components.top-button.size": *ktop
    "tokens.components.top-button.shadow": *ktop
    "tokens.components.top-button.states": *ktop
    "tokens.components.top-button.use": *ktop
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    ink: "#05141f"
    primary: "#05141f"
    primary-deep: "#010e18"
    canvas: "#ffffff"
    surface: "#f8f8f8"
    body: "#37434b"
    muted: "#697278"
    muted-alt: "#79838b"
    outline: "#9fa5a9"
    disabled: "#dadbdc"
    on-primary: "#ffffff"
  typography:
    family: { display: "Kia Signature Bold", body: "Kia Signature Regular", light: "Kia Signature Light" }
    display-hero: { size: 52, weight: 400, lineHeight: 1.23, use: "Vehicle hero title on the EV6 page (h2.main-title), Kia Signature Bold" }
    display: { size: 48, weight: 400, lineHeight: 1.25, use: "Section teaser titles on the EV6 page (h2.cmp-teaser__title), Kia Signature Bold" }
    section: { size: 42, weight: 400, lineHeight: 1.29, use: "Home section heading (Best Kia), Kia Signature Bold" }
    subsection: { size: 28, weight: 400, lineHeight: 1.43, use: "Model name at the head of the EV6 sub-navigation, Kia Signature Bold" }
    card-title: { size: 24, weight: 400, lineHeight: 1.5, use: "Feature and gallery headings on the EV6 page (h3), Kia Signature Bold" }
    model-name: { size: 24, weight: 400, lineHeight: 1.43, use: "Model and trim name on Best Kia and recommended-model cards (h4.name), Kia Signature Regular" }
    tab: { size: 20, weight: 400, lineHeight: 1.6, use: "Best Kia tabs on home, Kia Signature Bold (the lineup and EV6 tabs use 20px with a 28.6px line)" }
    news-title: { size: 18, weight: 400, lineHeight: 1.67, use: "News headlines on home, Kia Signature Bold" }
    body: { size: 16, weight: 400, use: "Page body text, Kia Signature Regular (line height computes normal)" }
    body-long: { size: 16, weight: 400, lineHeight: 1.75, use: "Card specification lines, Kia Signature Regular" }
    button: { size: 14, weight: 400, lineHeight: 1.0, use: "Action labels on the square buttons, Kia Signature Bold" }
    caption: { size: 14, weight: 400, lineHeight: 1.43, use: "Footer utility links, Kia Signature Regular" }
    fine: { size: 12, weight: 400, lineHeight: 2.0, use: "Footer award notes, Kia Signature Regular" }
  spacing: { button-y: 16, button-x: 24, link-card: 24, tab-gap: 40, badge-x: 17 }
  rounded: { none: 0, badge: 15, segment: 32 }
  shadow:
    chat: "rgb(78, 78, 78) 1px 1px 10px 0px"
    float: "rgba(0, 0, 0, 0.2) 0px 7px 15px 0px"
  components:
    primary-button: { type: button, bg: "#05141f", fg: "#ffffff", border: "1px solid #05141f", radius: "0px", padding: "16px 24px", height: "48px", font: "14px / 400 / 14px Kia Signature Bold", states: "rest on 17 captured instances across home and the EV6 page; no hover or pressed frame was recorded for them, and the collector's expansion pass recorded no interaction events, so no state value is declared", use: "Primary square action (바로가기 and 견적 내기 on the home hero slides, 견적 내기 on the EV6 page) at home::[data-omd-capture=\"13\"], 102 x 48" }
    hero-secondary-button: { type: button, bg: "#ffffff", fg: "#05141f", border: "1px solid #ffffff", radius: "0px", padding: "16px 24px", height: "48px", font: "14px / 400 / 14px Kia Signature Bold", states: "rest on 12 captured instances; no state frame", use: "White action paired with the dark one over hero imagery (렌터카 견적 내기, 자세히 보기) at home::[data-omd-capture=\"12\"], 149 x 48" }
    outline-button: { type: button, bg: "#ffffff", fg: "#05141f", border: "1px solid #9fa5a9", radius: "0px", padding: "16px 24px", height: "48px", font: "14px / 400 / 14px Kia Signature Bold", states: "rest on 10 captured instances; no state frame", use: "Outlined action on white (Best Kia cards on home, 시승 신청 in the EV6 sub-navigation) at home::[data-omd-capture=\"47\"], 119 x 48" }
    header-utility-button: { type: button, bg: "transparent", fg: "#ffffff", height: "23px", font: "16px / 400 / 22.88px Kia Signature Regular", states: "rest only; the same language, search and sign-in controls read #37434b on the white header of the lineup page (surface-2 captures 9-11), so the header recolours with the page", use: "Header utility controls (KR, 통합검색, 로그인) over the home and EV6 heroes at home::[data-omd-capture=\"10\"]; styles were read without following the sign-in link" }
    footer-family-select: { type: button, bg: "#010e18", fg: "#f8f8f8", border: "1px solid #010e18", radius: "0px", padding: "16px 24px", height: "48px", font: "14px / 400 / 20.02px Kia Signature Regular", states: "rest on all three pages; no state frame", use: "Family-site dropdown in the footer at home::[data-omd-capture=\"85\"], 270 x 48" }
    calculator-select: { type: button, bg: "#ffffff", fg: "#05141f", border: "1px solid #ffffff", radius: "0px", padding: "16px 44px 16px 24px", height: "57px", font: "16px / 400 / 22.88px Kia Signature Bold", disabled: "fg #dadbdc (capture 57, disabled at rest)", states: "enabled rest (capture 58) and a disabled sibling (capture 57); no pointer frame", use: "Dropdown selects in the EV driving-range calculator on the EV6 page at surface-3::[data-omd-capture=\"58\"], 384 x 57" }
    best-kia-tab: { type: tab, bg: "transparent", fg: "#697278", height: "46px", font: "20px / 400 / 32px Kia Signature Bold", selected: "fg #05141f on the li.is-on tab (capture 41)", states: "selected variant read from rest values (capture 41 against 42-44); no pointer frame", use: "Best Kia category tabs on home (최근 출시, 연비 효율, 적재공간, 안전성) at home::[data-omd-capture=\"42\"]" }
    vehicle-category-tab: { type: tab, bg: "transparent", fg: "#697279", padding: "16px 0px", height: "56px", font: "20px / 400 / 28.6px Kia Signature Bold", selected: "fg #05141f on the is-active item (capture 12)", states: "selected variant read from rest values (capture 12 against 13-16); no pointer frame", use: "Lineup category tabs (EV, PBV, 승용, RV, 택시 & 버스 & 상용) on the vehicles page at surface-2::[data-omd-capture=\"13\"]; items are spaced by 40px right padding" }
    vehicle-subnav-link: { type: tab, bg: "transparent", fg: "#697278", height: "52px", font: "20px / 400 / 28.6px Kia Signature Bold", selected: "fg #05141f on the is-active link (capture 15)", states: "selected variant read from rest values (capture 15 against 16-22); no pointer frame", use: "EV6 sub-navigation (특징, 제원, 갤러리, 모델 비교, 가격, EV TCO 계산기) at surface-3::[data-omd-capture=\"16\"]" }
    trim-segmented-control: { type: tab, bg: "transparent", fg: "#05141f", border: "1px solid #05141f (track)", radius: "32px", padding: "6px (track)", height: "47px", font: "16px / 400 / 22.88px Kia Signature Bold", selected: "bg #05141f, fg #ffffff (capture 39)", states: "selected variant read from rest values (capture 39 against 40); no pointer frame", use: "Two-option switch on the EV6 page at surface-3::[data-omd-capture=\"40\"], 130 x 47 per option inside a 278 x 61 track (surface-3::#pdp__tab)" }
    label-badge: { type: badge, bg: "#f8f8f8", fg: "#05141f", radius: "15px", padding: "0px 17px", height: "32px", font: "14px / 400 / 14px Kia Signature Regular", use: "Label on recommended-model cards on the EV6 page (p.label-txt), 103 x 32" }
    best-label-badge: { type: badge, bg: "#05141f", fg: "#ffffff", radius: "15px", padding: "0px 17px", height: "32px", font: "14px / 400 / 25px Kia Signature Regular", use: "Highlighted variant of the same label (p.label-txt.best), 99 x 32" }
    quick-link-card: { type: card, bg: "#f8f8f8", radius: "0px", padding: "24px", size: "250px x 244px", use: "Grey link panel (a.pdp-link__btn) near the foot of home at home::[data-omd-capture=\"59\"]; the EV6 page repeats it at 432 x 244; its label sits in children that were not captured, so no text colour is claimed" }
    floating-chat-button: { type: button, bg: "#ffffff", radius: "50%", size: "56px x 56px", shadow: "rgb(78, 78, 78) 1px 1px 10px 0px", states: "rest; its only pressed frame changes the anchor to the browser's default active red, which is not a brand value, so nothing is declared", use: "채팅 상담 button beside the hero at home::[data-omd-capture=\"40\"]; lower on the page the same control carries rgba(0, 0, 0, 0.2) 0px 7px 15px 0px" }
    top-button: { type: button, bg: "#ffffff", radius: "50%", size: "56px x 56px", shadow: "rgba(0, 0, 0, 0.2) 0px 7px 15px 0px", states: "rest on all three pages; no state frame", use: "Back-to-top button at home::[data-omd-capture=\"94\"]" }
  components_harvested: true
---

# Design System Inspiration of Kia

## 1. Visual Theme & Atmosphere

Kia (기아) is the Korean carmaker Kia Corporation, whose heritage archive traces its story back to 1944. Kia describes that history as a line of movement — from bicycles to cars, electric vehicles and purpose-built vehicles (PBV) — and now calls itself a sustainable mobility solutions provider under the brand line "Movement that inspires". The current identity dates from 2021, when Kia introduced a new logo together with what its brand site calls a bold challenge and promise for the future. That logo is built on three ideas the brand names Symmetry, Rhythm and Rising, and its closing diagonal stroke carries 起, "to rise". Kia's design philosophy, Opposites United, frames creativity as the meeting of contrasts — light and shadow, nature and technology, order and change. On the Korean site the catalogue now leads with electric models: the EV lineup page lists Ray EV, EV3, EV4, EV5, EV6 and EV9 before the PBV and passenger ranges.

The captured pages of www.kia.com/kr read as a monochrome showroom. Text and the main actions share one deep navy, `#05141f`, on a white `#ffffff` page, and every action is a sharp-cornered 48px rectangle: dark `#05141f` with white labels, white with navy labels over hero photography, or white with a 1px `#9fa5a9` outline. Grey `#f8f8f8` panels and 15px-radius labels are the only softer shapes, and a 32px-radius segmented switch on the EV6 page is the one pill. Selection is shown by colour, not fills: unselected tabs sit in steel grey `#697278` and turn navy `#05141f` when selected. Shadows appear only on the floating chat and back-to-top buttons.

Everything is set in Kia's own typeface family, Kia Signature, self-hosted on www.kia.com. Headings and action labels use Kia Signature Bold at weight 400, body copy Kia Signature Regular, and long descriptions Kia Signature Light.

**Key Characteristics:**
- One navy, `#05141f`, for text, primary actions, selected tabs and the selected segment
- Square 48px actions (`border-radius: 0px`, `16px 24px` padding) in three treatments: dark, white-on-photo and outlined `#9fa5a9`
- Selection by colour: `#697278` / `#697279` grey tabs turn `#05141f`
- Kia Signature Bold / Regular / Light, served from www.kia.com
- Grey `#f8f8f8` link panels and 15px-radius labels as the only soft surfaces; a 32px segmented switch on the EV6 page
- Flat actions and cards; shadows only on the round floating buttons
- A header that recolours with the page: white controls over photography, `#37434b` on the white lineup header
- Photography and product film carry the hero; the interface frames the vehicle

## Primary tasks

- Compare trims and calculate a monthly payment
- Book a test drive for a model you are considering
- Check this month's purchase benefits before buying
- See a car's colour options without visiting a dealer
- Estimate what an EV costs to own over time

## 2. Color Palette & Roles

Every token below was read by the deterministic collector on 2026-09-30 from www.kia.com/kr, the EV lineup page and the EV6 page.

### Primary
- **Kia Navy** (`#05141f`): The fill of every primary action (바로가기, 견적 내기), the selected option of the EV6 page's segmented switch and the highlighted label badge, as well as all body text and headings. It is the primary because the captured pages render it in those primary roles: 19 captured elements compute `backgroundColor: rgb(5, 20, 31)` — 17 primary action buttons (13 on home, 4 on the EV6 page), the selected segment and the highlighted label. The pages are otherwise monochrome, so the measured primary action fill is the primary.
- **Deep Navy** (`#010e18`): The footer's family-site dropdown on all three pages.
- **On Primary** (`#ffffff`): Labels on the navy actions and on the selected segment.

### Neutral & Surface
- **Canvas** (`#ffffff`): Page background and the white actions.
- **Surface** (`#f8f8f8`): Grey link panels and the default label badge; also the label text of the footer dropdown.
- **Outline** (`#9fa5a9`): The 1px border of the outlined action.

### Text
- **Ink** (`#05141f`): Body text, headings, model names and selected tabs.
- **Body Slate** (`#37434b`): Specification lines on vehicle cards, and the header controls on the white lineup header.
- **Steel Grey** (`#697278`): Descriptions, unselected Best Kia and EV6 tabs, news categories. The lineup page's unselected category tabs and the footer's award notes use `#697279`, one unit away.
- **Steel Light** (`#79838b`): Footer utility links.
- **Disabled** (`#dadbdc`): The label of a disabled dropdown in the EV6 range calculator.

### Brand assets, not tokens
- The Kia logo is published for download on the global brand site's logo story page; the logo artwork was not measured, and no logo colour is a token here.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Kia Signature Regular` (581 observed uses), `Kia Signature Bold` (205) and `Kia Signature Light` (9), all loaded from `www.kia.com/etc.clientlibs/kwp-global/clientlibs/clientlib-site/resources/fonts/` (`KiaSignatureRegular.woff2`, `KiaSignatureBold.woff2`, `KiaSignatureLight.woff2`, with eot/woff/ttf companions). The declared stack falls back to Arial and sans-serif.
- **Official product use**: Kia's global brand site loads the same Kia Signature faces, so the family is Kia's own and not a page-level choice. No licence or distribution page for Kia Signature was opened this session, so no licence is stated.
- **Declared only (no visible use)**: `Kia Signature Fix Regular`, `Kia Signature Fix Bold`, `Kia Signature Fix Light` — declared from the same folder, 0 observed uses.
- **Unresolved**: `KiaSignatureOTF` — 34 list items on the specification lists ask for this family name, and no loaded face matches it, so those items render in a fallback face. No token is created for it.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Vehicle Hero | Kia Signature Bold | 52px | 400 | 63.96px (1.23) | EV6 hero title |
| Display | Kia Signature Bold | 48px | 400 | 60px (1.25) | EV6 section teasers |
| Section | Kia Signature Bold | 42px | 400 | 54.18px (1.29) | "Best Kia" on home |
| Subsection | Kia Signature Bold | 28px | 400 | 40.04px (1.43) | "EV6" at the head of the sub-navigation |
| Card Title | Kia Signature Bold | 24px | 400 | 36px (1.5) | EV6 feature headings |
| Model Name | Kia Signature Regular | 24px | 400 | 34.32px (1.43) | Best Kia and recommended-model cards |
| Tab | Kia Signature Bold | 20px | 400 | 32px (1.6); 28.6px on lineup and EV6 tabs | Tabs and sub-navigation |
| News Title | Kia Signature Bold | 18px | 400 | 30.06px (1.67) | News headlines on home |
| Body | Kia Signature Regular | 16px | 400 | normal | Page body |
| Body Long | Kia Signature Regular | 16px | 400 | 28px (1.75) | Specification lines; Kia Signature Light for descriptions |
| Button | Kia Signature Bold | 14px | 400 | 14px (1.0) | Square action labels |
| Caption | Kia Signature Regular | 14px | 400 | 20.02px (1.43) | Footer utility links |
| Fine | Kia Signature Regular | 12px | 400 | 24px (2.0) | Footer award notes |

### Principles
- **Weight lives in the face, not the number**: every heading and action label computes `font-weight: 400`; the Bold, Regular and Light faces carry the hierarchy.
- **Normal tracking throughout**: no captured heading or label sets letter-spacing.
- **Bold for action and headings, Regular for reading, Light for long descriptions.**

## 4. Component Stylings

### Buttons

**Primary action**
- Background: `#05141f`
- Text: `#ffffff`
- Border: 1px solid `#05141f`
- Radius: 0px
- Padding: 16px 24px
- Height: 48px
- Font: 14px / 400 / 14px Kia Signature Bold
- States: rest on 17 instances; no hover or pressed frame was recorded and no state value is declared
- Use: 바로가기 and 견적 내기 on home, 견적 내기 on the EV6 page

**White action over imagery**
- Background: `#ffffff`
- Text: `#05141f`
- Border: 1px solid `#ffffff`
- Radius: 0px
- Padding: 16px 24px
- Height: 48px
- Font: 14px / 400 / 14px Kia Signature Bold
- States: rest only
- Use: the partner of the dark action on hero slides (렌터카 견적 내기, 자세히 보기)

**Outlined action**
- Background: `#ffffff`
- Text: `#05141f`
- Border: 1px solid `#9fa5a9`
- Radius: 0px
- Padding: 16px 24px
- Height: 48px
- Font: 14px / 400 / 14px Kia Signature Bold
- States: rest only
- Use: Best Kia cards on home, 시승 신청 in the EV6 sub-navigation

**Footer family-site dropdown**
- Background: `#010e18`
- Text: `#f8f8f8`
- Border: 1px solid `#010e18`
- Radius: 0px
- Padding: 16px 24px
- Height: 48px
- Font: 14px / 400 / 20.02px Kia Signature Regular
- States: rest only
- Use: footer, 270 × 48, on all three pages

**Range-calculator dropdown**
- Background: `#ffffff`
- Text: `#05141f`
- Border: 1px solid `#ffffff`
- Radius: 0px
- Padding: 16px 44px 16px 24px
- Height: 57px
- Font: 16px / 400 / 22.88px Kia Signature Bold
- Disabled: text `#dadbdc`
- States: enabled and disabled siblings read at rest; no pointer frame
- Use: EV driving-range calculator on the EV6 page, 384 × 57

**Floating buttons**
- Chat (채팅 상담): `#ffffff`, 56 × 56, radius 50%, shadow `rgb(78, 78, 78) 1px 1px 10px 0px` beside the hero; lower on the page `rgba(0, 0, 0, 0.2) 0px 7px 15px 0px`
- Back to top: `#ffffff`, 56 × 56, radius 50%, shadow `rgba(0, 0, 0, 0.2) 0px 7px 15px 0px`
- States: rest only; the chat anchor's pressed frame shows only the browser's default active colour, which is not declared

### Navigation & Tabs

**Header utility controls**
- Background: transparent
- Text: `#ffffff` over the home and EV6 heroes; `#37434b` on the white header of the lineup page
- Height: 23px
- Font: 16px / 400 / 22.88px Kia Signature Regular
- Use: KR, 통합검색 and 로그인 at the right of a 60px header (read, never followed). The main menu items (차량, 구매, 체험, 이벤트, 고객 지원, Discover Kia, Kia Connect, PBV) keep their labels in children that were not captured, so no menu text colour is claimed.

**Best Kia tabs**
- Background: transparent
- Text: `#697278`
- Height: 46px
- Font: 20px / 400 / 32px Kia Signature Bold
- Selected: text `#05141f`
- Use: 최근 출시, 연비 효율, 적재공간, 안전성 on home

**Lineup category tabs**
- Background: transparent
- Text: `#697279`
- Padding: 16px 0px, with 40px between items
- Height: 56px
- Font: 20px / 400 / 28.6px Kia Signature Bold
- Selected: text `#05141f`
- Use: EV, PBV, 승용, RV, 택시 & 버스 & 상용 on the vehicles page

**EV6 sub-navigation**
- Background: transparent
- Text: `#697278`
- Height: 52px
- Font: 20px / 400 / 28.6px Kia Signature Bold
- Selected: text `#05141f`
- Use: 특징, 제원, 갤러리, 모델 비교, 가격, EV TCO 계산기, next to the 28px model name and the 시승 신청 / 견적 내기 pair

**Segmented switch**
- Track: 1px solid `#05141f`, radius 32px, padding 6px, 278 × 61
- Option: transparent, text `#05141f`, radius 32px, 130 × 47, 16px / 400 / 22.88px Kia Signature Bold
- Selected: background `#05141f`, text `#ffffff`
- Use: two-option switch on the EV6 page

### Badges

**Label**
- Background: `#f8f8f8`
- Text: `#05141f`
- Radius: 15px
- Padding: 0px 17px
- Height: 32px
- Font: 14px / 400 / 14px Kia Signature Regular
- Use: labels on recommended-model cards on the EV6 page

**Highlighted label**
- Background: `#05141f`
- Text: `#ffffff`
- Radius: 15px
- Padding: 0px 17px
- Height: 32px
- Font: 14px / 400 / 25px Kia Signature Regular
- Use: the highlighted variant of the same label

### Cards & Containers

**Grey link panel**
- Background: `#f8f8f8`
- Radius: 0px
- Padding: 24px
- Size: 250 × 244 on home; 432 × 244 on the EV6 page
- Use: link panels near the foot of the page; label colours were not captured

**Vehicle cards**
- The lineup cards (`vc-card__wrap`, 432 × 380) are transparent containers with `32px 0px 40px` padding: an image, an 18px / 400 / 25.74px Kia Signature Bold model name in `#05141f` and a 16px `#697278` caption. No card border, fill or radius was observed.

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of www.kia.com/kr, logged out, plus first-party brand context)
**Tier 1 sources:** https://www.kia.com/kr ; https://www.kia.com/kr/vehicles/ev ; https://www.kia.com/kr/vehicles/ev6/features ; https://worldwide.kia.com/ko/brand/our-brand/brand-elements/brand-logo-story ; https://worldwide.kia.com/ko/brand/our-brand/brand-identity/who-we-are ; https://worldwide.kia.com/ko/design/design-philosophy/opposites-united ; https://worldwide.kia.com/ko/brand/our-brand/heritage/
**Tier 2 sources:** getdesign.md/kia (HTTP 200, "kia — 0 DESIGN.md files", "No designs found") and styles.refero.design/?q=kia (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Actions: 16px vertical, 24px horizontal padding at 48px height
- Link panels: 24px padding
- Lineup tabs: 16px vertical padding, 40px between items
- Labels: 17px horizontal padding at 32px height

### Grid & Container
- Full-bleed hero slides with a navy action and a white action side by side.
- The lineup page arranges 432px vehicle cards in rows under a 56px category tab bar.
- The EV6 page stacks a full-bleed hero (52px title, price, a white 견적 내기 action), a 52px sub-navigation with the model name and two actions, then feature sections under 48px teaser titles.

### Whitespace Philosophy
- **Photography first**: the interface chrome stays thin so vehicle imagery and film lead each section.
- **Paired actions**: hero slides and the sub-navigation pair a dark action with a white or outlined one.

### Border Radius Scale
- 0px: every action, dropdown, link panel and card
- 15px: labels
- 32px: the EV6 segmented switch
- 50%: the floating chat and back-to-top buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, actions, tabs, cards, link panels |
| Surface | `#f8f8f8` fill | Link panels and labels |
| Outline | 1px solid `#9fa5a9` | Outlined action |
| Dark | `#05141f` / `#010e18` fill | Primary actions, selected segment, footer dropdown |
| Floating | `rgba(0, 0, 0, 0.2) 0px 7px 15px 0px`; `rgb(78, 78, 78) 1px 1px 10px 0px` | Back-to-top and chat buttons |

**Shadow Philosophy**: Kia's pages are flat. Actions, cards and panels computed `box-shadow: none`; depth comes from navy against white and from photography. The two measured shadows belong to the round buttons that float over the page.

## 7. Do's and Don'ts

### Do
- Use `#05141f` for text, primary actions and selected states — not pure black
- Keep actions square: 0px radius, 48px tall, `16px 24px` padding, 14px Kia Signature Bold labels
- Pair a navy action with a white one over photography, or with a `#9fa5a9` outlined one on white
- Show selection by turning grey `#697278` text navy `#05141f`
- Use Kia Signature Bold for headings and actions, Regular for reading, Light for long descriptions
- Keep shadows for floating buttons only

### Don't
- Don't add a saturated accent to the interface; the captured pages use none
- Don't round the actions; the only soft shapes are 15px labels and the 32px segmented switch
- Don't put drop shadows on cards or actions
- Don't substitute Arial or another face and present it as Kia Signature
- Don't use negative tracking; none of the captured type sets letter-spacing
- Don't invent hover colours; none were recorded

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. One sub-navigation link carries the class `mo-none`, a sign that it is hidden on mobile; no breakpoint was measured.

### Touch Targets
- Square actions: 48px tall
- Range-calculator dropdowns: 57px tall
- Tabs: 46px (home), 52px (EV6), 56px (lineup)
- Floating buttons: 56 × 56

### Collapsing Strategy
- Not measured.

### Image Behavior
- Vehicle images sit flat in the lineup cards, without borders or shadows.

## 9. Agent Prompt Guide

### Quick Color Reference
- Text, primary action, selected state: `#05141f`; labels on it `#ffffff`
- Footer dark: `#010e18` with `#f8f8f8` text
- Page `#ffffff`; grey panels and labels `#f8f8f8`
- Outline `#9fa5a9`
- Secondary text `#37434b`; unselected tabs and descriptions `#697278` (`#697279` on lineup tabs); footer links `#79838b`; disabled `#dadbdc`

### Example Component Prompts
- "Create a Kia primary action: `#05141f` background, `#ffffff` 14px Kia Signature Bold label (weight 400, line height 14px), 1px solid `#05141f` border, 0px radius, 16px 24px padding, 48px tall, no shadow."
- "Pair it with a white action for a photo hero: `#ffffff` background and border, `#05141f` label, same geometry."
- "Build lineup category tabs: 20px Kia Signature Bold, unselected `#697279`, selected `#05141f`, 16px vertical padding, 40px between items, no underline or fill."
- "Make a segmented switch: 1px solid `#05141f` track with 32px radius and 6px padding; selected option `#05141f` with `#ffffff` text, unselected transparent with `#05141f` text, 47px tall."

### Iteration Guide
1. One navy, `#05141f`, for text, actions and selection
2. Square 48px actions; 15px only on labels, 32px only on the segmented switch
3. Kia Signature faces carry the hierarchy at weight 400
4. Selection by colour change, not by fills (except the segmented switch)
5. No shadows except floating buttons
6. Photography leads; chrome stays thin

---

## 10. Voice & Tone

Kia's voice centres on the brand line **"Movement that inspires"**: confident, forward-looking and plain. Product pages pair short English model lines with direct Korean actions.

| Context | Tone |
|---|---|
| Brand line | Declarative. "Movement that inspires." |
| Vehicle naming | Model year and name in English: "The 2027 EV6", "The 2027 Sportage". |
| Product lines | Short and energetic: "The Energetic Vehicle", "Open Road SUV", "시대의 Mainstream". |
| Actions | Functional: "견적 내기", "자세히 보기", "시승 신청", "바로가기". |
| Brand pages | Reflective, first-person plural: values stated as Progressive, Bold, Simple, Responsible. |

**Voice samples (verbatim, opened 2026-09-30):**
- "기아 - Movement that inspires" — www.kia.com/kr page title.
- "Best Kia" — home section heading.
- "The 2027 EV6" / "The Energetic Vehicle" — EV6 page hero.
- "우리는 움직임이 새로운 생각에 영감을 준다고 믿습니다." — Who We Are, Kia global brand site.

**Forbidden register**: horsepower bravado, fear-based urgency, patronising "simplicity" copy, stacked exclamation marks.

## 11. Brand Narrative

Kia's heritage archive opens with "1944년부터 이어진 도전과 분발의 역사" — a history of challenge that began in 1944. Its logo story walks through each mark: a first logo of set square, gear and benzene ring for an industrial company; a second joining ㄱ and ㅇ into a wheel as Kia moved into bicycles, motorcycles and three-wheelers; the 1986 flag-like mark; the 1994 red oval, introduced for Kia's 50th anniversary, whose ellipse stood for the globe; and the refined oval of 2004.

In 2021 Kia replaced the oval with the current logo and, with it, redefined itself as a sustainable mobility solutions provider. The brand site explains the new mark through three directions: Symmetry, the balance that earns trust; Rhythm, lines that run on without a break; and Rising, a closing diagonal stroke that carries 起. The brand line "Movement that inspires" states the belief behind it — that movement opens new thinking — and four values follow from it: Progressive, Bold, Simple and Responsible.

Kia's design philosophy, Opposites United, treats contrast as the source of creative inspiration and describes Kia's makers as culture vanguards and creative risk-takers. On www.kia.com/kr that tension reads as navy against white, square actions against photography, and English model lines on a Korean site. The footer links to Hyundai Motor Group among Kia's family sites.

## 12. Principles

1. **Movement that inspires.** *UI implication:* actions invite the next step — a quote, a test drive — plainly and without pressure.
2. **Opposites united.** *UI implication:* let contrast do the work — navy and white, square actions and photography — instead of adding colours.
3. **Simple by value.** Simple is one of Kia's four stated values. *UI implication:* one navy, one typeface family, one action shape.
4. **The vehicle is the content.** *UI implication:* keep chrome thin and flat so imagery and film lead. (An editorial reading of the captured pages, not a Kia statement.)
5. **Precise geometry.** *UI implication:* 0px actions and dropdowns; 15px only for labels and 32px only for the segmented switch.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Kia user segments (Korean car buyers, EV early adopters, family SUV buyers), not individual people.*

**이준혁, 38, 경기 수원.** A software engineer considering his first EV. Compares EV3, EV5 and EV6 on the lineup page, then opens the EV6 page's EV TCO 계산기 and range calculator before deciding on a trim.

**최수민, 45, 서울 강남.** A family buyer moving to a Carnival. Checks 이 달의 구매 혜택 for monthly offers, then books a test drive with 시승 신청.

**박지훈, 31, 대전.** A Kia fan who followed the 2021 logo change. Reads the logo story and Opposites United on the global brand site before recommending Kia to friends.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (tabs)** | Best Kia tabs, lineup category tabs and the EV6 sub-navigation turn text from `#697278` / `#697279` to `#05141f`. |
| **Selected (segmented switch)** | The selected option fills `#05141f` with `#ffffff` text; the other is transparent with `#05141f` text. |
| **Disabled** | A range-calculator dropdown shows its label in `#dadbdc`; the disabled carousel arrow reads `rgba(16, 16, 16, 0.3)`. |
| **Header over imagery** | Utility controls are `#ffffff` over the home and EV6 heroes and `#37434b` on the white lineup header. |

The only pointer frames recorded are the browser's default active colour on links, which is not a brand value. The collector's expansion pass recorded no interaction events, so hover, pressed and focus treatments are unmeasured rather than absent. Error, empty, loading and success states were not captured and are not described.

## 15. Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The hero and card rows are carousels with pagination bullets, which shows motion exists without timing it. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/kia.json (capturedAt 2026-09-30), deterministic collector, 1440x900, logged out: www.kia.com/kr (the frontmatter homepage www.kia.com/kr/ lands there), www.kia.com/kr/vehicles/ev (www.kia.com/kr/vehicles redirects there), www.kia.com/kr/vehicles/ev6/features.
- §1, §3, §10, §11 context: worldwide.kia.com/ko brand pages (logo story, Who We Are, Opposites United, heritage archive), opened headless 2026-09-30. The Korean site's own "New Kia" link (www.kia.com/kr/discover-kia/new-kia) redirects to the global logo story page; these pages are narrative context and supply no token.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
