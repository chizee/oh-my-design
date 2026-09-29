---
id: hyundai
name: Hyundai
display_name_kr: 현대자동차
country: KR
category: automotive
homepage: "https://www.hyundai.com/kr/ko/e"
primary_color: "#002c5f"
logo:
  type: simpleicons
  slug: hyundai
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-21"
  surfaces:
    - { id: home, kind: product, url: "https://www.hyundai.com/kr/ko/e", inspected: "2026-07-13" }
    - { id: vehicles, kind: product, url: "https://www.hyundai.com/kr/ko/e/vehicles", inspected: "2026-07-13" }
    - { id: ioniq6, kind: product, url: "https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq-6/intro", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.hyundai.com/kr/ko/e", captured: "2026-07-13" }
    - { id: vehicles-live, kind: product-surface, url: "https://www.hyundai.com/kr/ko/vehicles", captured: "2026-09-21" }
    - { id: ioniq6-live, kind: product-surface, url: "https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq6/intro", captured: "2026-09-21" }
    - { id: design, kind: official-doc, url: "https://www.hyundai.com/worldwide/en/company/innovation/design", captured: "2026-07-13" }
    - { id: typeface, kind: official-doc, url: "https://www.hyundai.com/worldwide/en/newsroom/detail/0000000287", captured: "2026-07-13" }
    - { id: history, kind: official-doc, url: "https://www.hyundai.com/worldwide/en/footer/corporate/history/1967-2000", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.accent-cyan": &live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.accent-teal": *live
    "tokens.colors.footer": *live
    "tokens.colors.ink": *live
    "tokens.colors.muted": *live
    "tokens.colors.on-primary": *live
    "tokens.colors.primary": *live
    "tokens.colors.utility": *live
    "tokens.components.selected-carousel-indicator.active": *live
    "tokens.components.selected-carousel-indicator.fg": *live
    "tokens.components.selected-carousel-indicator.radius": *live
    "tokens.components.selected-carousel-indicator.type": *live
    "tokens.components.selected-carousel-indicator.use": *live
    "tokens.rounded.none": *live
    "tokens.rounded.pager": *live
    "tokens.shadow.chatbot": *live
    "tokens.typography.action.lineHeight": *live
    "tokens.typography.action.size": *live
    "tokens.typography.action.tracking": *live
    "tokens.typography.action.use": *live
    "tokens.typography.action.weight": *live
    "tokens.typography.body.lineHeight": *live
    "tokens.typography.body.size": *live
    "tokens.typography.body.use": *live
    "tokens.typography.body.weight": *live
    "tokens.typography.display-h2.lineHeight": *live
    "tokens.typography.display-h2.size": *live
    "tokens.typography.display-h2.tracking": *live
    "tokens.typography.display-h2.use": *live
    "tokens.typography.display-h2.weight": *live
    "tokens.typography.family.body": *live
    "tokens.typography.family.display": *live
    "tokens.components.vehicle-action.type": { surface_id: vehicles, source_id: vehicles-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.vehicle-action.bg": { surface_id: vehicles, source_id: vehicles-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.vehicle-action.fg": { surface_id: vehicles, source_id: vehicles-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.vehicle-action.radius": { surface_id: vehicles, source_id: vehicles-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.vehicle-action.padding": { surface_id: vehicles, source_id: vehicles-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.vehicle-action.height": { surface_id: vehicles, source_id: vehicles-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.vehicle-action.font": { surface_id: vehicles, source_id: vehicles-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.vehicle-action.states": { surface_id: vehicles, source_id: vehicles-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.vehicle-action.use": { surface_id: vehicles, source_id: vehicles-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.primary-nav-trigger.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.primary-nav-trigger.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.primary-nav-trigger.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.primary-nav-trigger.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.primary-nav-trigger.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.primary-nav-trigger.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.primary-nav-trigger.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.primary-nav-trigger.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.primary-nav-trigger.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.external-link-sm.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"128\"]", captured: "2026-07-13" }
    "tokens.components.external-link-sm.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"128\"]", captured: "2026-07-13" }
    "tokens.components.external-link-sm.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"128\"]", captured: "2026-07-13" }
    "tokens.components.external-link-sm.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"128\"]", captured: "2026-07-13" }
    "tokens.components.external-link-sm.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"128\"]", captured: "2026-07-13" }
    "tokens.components.external-link-sm.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"128\"]", captured: "2026-07-13" }
    "tokens.components.external-link-sm.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"128\"]", captured: "2026-07-13" }
    "tokens.components.external-link-sm.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"128\"]", captured: "2026-07-13" }
    "tokens.components.external-link-sm.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"128\"]", captured: "2026-07-13" }
    "tokens.components.carousel-pager.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"76\"]", captured: "2026-07-13" }
    "tokens.components.carousel-pager.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"76\"]", captured: "2026-07-13" }
    "tokens.components.carousel-pager.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"76\"]", captured: "2026-07-13" }
    "tokens.components.carousel-pager.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"76\"]", captured: "2026-07-13" }
    "tokens.components.carousel-pager.selected": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"75\"]", captured: "2026-07-13" }
    "tokens.components.carousel-pager.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"76\"]", captured: "2026-07-13" }
    "tokens.components.carousel-pager.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"76\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.border": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.family-site-control.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"146\"]", captured: "2026-07-13" }
    "tokens.components.chatbot-trigger.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"122\"]", captured: "2026-07-13" }
    "tokens.components.chatbot-trigger.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"122\"]", captured: "2026-07-13" }
    "tokens.components.chatbot-trigger.border": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"122\"]", captured: "2026-07-13" }
    "tokens.components.chatbot-trigger.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"122\"]", captured: "2026-07-13" }
    "tokens.components.chatbot-trigger.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"122\"]", captured: "2026-07-13" }
    "tokens.components.chatbot-trigger.shadow": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"122\"]", captured: "2026-07-13" }
    "tokens.components.chatbot-trigger.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"122\"]", captured: "2026-07-13" }
    "tokens.components.chatbot-trigger.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"122\"]", captured: "2026-07-13" }
    "tokens.components.quick-menu-link.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-07-13" }
    "tokens.components.quick-menu-link.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-07-13" }
    "tokens.components.quick-menu-link.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-07-13" }
    "tokens.components.quick-menu-link.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-07-13" }
    "tokens.components.quick-menu-link.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-07-13" }
    "tokens.components.quick-menu-link.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-07-13" }
    "tokens.components.quick-menu-link.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-07-13" }
    "tokens.components.quick-menu-link.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-07-13" }
    "tokens.components.quick-menu-link.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"36\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.selected": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"51\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-07-13" }
    "tokens.components.slide-tab.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"52\"]", captured: "2026-07-13" }
    "tokens.components.slide-dot.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-13" }
    "tokens.components.slide-dot.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-13" }
    "tokens.components.slide-dot.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-13" }
    "tokens.components.slide-dot.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-13" }
    "tokens.components.slide-dot.selected": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"28\"]", captured: "2026-07-13" }
    "tokens.components.slide-dot.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-13" }
    "tokens.components.slide-dot.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"29\"]", captured: "2026-07-13" }
    "tokens.components.more-link.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"58\"]", captured: "2026-07-13" }
    "tokens.components.more-link.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"58\"]", captured: "2026-07-13" }
    "tokens.components.more-link.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"58\"]", captured: "2026-07-13" }
    "tokens.components.more-link.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"58\"]", captured: "2026-07-13" }
    "tokens.components.more-link.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"58\"]", captured: "2026-07-13" }
    "tokens.components.more-link.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"58\"]", captured: "2026-07-13" }
    "tokens.components.more-link.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"58\"]", captured: "2026-07-13" }
    "tokens.components.more-link.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"58\"]", captured: "2026-07-13" }
    "tokens.components.more-link.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"58\"]", captured: "2026-07-13" }
    "tokens.components.footer-disclosure-toggle.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::span", captured: "2026-07-13" }
    "tokens.components.footer-disclosure-toggle.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::span", captured: "2026-07-13" }
    "tokens.components.footer-disclosure-toggle.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::span", captured: "2026-07-13" }
    "tokens.components.footer-disclosure-toggle.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::span", captured: "2026-07-13" }
    "tokens.components.footer-disclosure-toggle.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::span", captured: "2026-07-13" }
    "tokens.components.footer-disclosure-toggle.size": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::span", captured: "2026-07-13" }
    "tokens.components.footer-disclosure-toggle.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::span", captured: "2026-07-13" }
    "tokens.components.footer-disclosure-toggle.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::span", captured: "2026-07-13" }
    "tokens.components.footer-disclosure-toggle.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::span", captured: "2026-07-13" }
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  note: "Only values observed in the supplied three-surface KR product capture are tokenized. HyundaiSansTextKR and HyundaiSansHeadKR have visible computed use backed by loaded FontFaceSet entries. HyundaiSansHeadKRR and HyundaiSansTextKRR are loaded regional variants; Arial is system chrome and element-icons is declared-only."
  colors:
    primary: "#002c5f"
    accent-teal: "#007fa8"
    accent-cyan: "#00aad2"
    ink: "#000000"
    on-primary: "#ffffff"
    muted: "#999999"
    utility: "#444444"
    footer: "#1c1b1b"
  typography:
    family: { display: "HyundaiSansHeadKR", body: "HyundaiSansTextKR" }
    display-h2: { size: 44, weight: 400, lineHeight: 1.32, tracking: -0.4, use: "Observed h2 on the KR product home surface" }
    body: { size: 16, weight: 400, lineHeight: 1.15, use: "Observed product-surface text" }
    action: { size: 16, weight: 500, lineHeight: 1.15, tracking: -0.4, use: "Observed navy vehicle action" }
  spacing: {}
  rounded: { none: 0, pager: 6 }
  shadow: { chatbot: "rgba(0,0,0,0.15) 0px 0px 20px 0px" }
  components:
    selected-carousel-indicator: { type: tab, fg: "#000000", radius: "0px", active: true, use: "Selected shell observed on the home surface; its #000000 text colour is inherited and styles no visible label, and the visible mark is the carousel-pager button" }
    vehicle-action: { type: button, bg: "#002c5f", fg: "#ffffff", radius: "0px", padding: "0px", height: "50px", font: "16px / 500 / HyundaiSansTextKR", states: "default captured; the bundle holds no pointer-state frame for any Hyundai element", use: "Vehicle catalogue filled action (a.btn.nuxt-link-active) at surface-2::[data-omd-capture=\"15\"], 180 x 50; the IONIQ 6 intro carries the same values" }
    primary-nav-trigger: { type: button, bg: "transparent", fg: "#000000", radius: "0px", padding: "0px", height: "30px", font: "16px / 400 / HyundaiSansHeadKRR", states: "default captured; the bundle holds no pointer-state frame for any Hyundai element", use: "Top-level menu trigger (button.lnb_depth0_btn) at home::[data-omd-capture=\"2\"]; 15 instances across the three product surfaces" }
    external-link-sm: { type: button, bg: "transparent", fg: "#444444", radius: "0px", padding: "10px 0px", height: "34px", font: "14px / 500 / HyundaiSansHeadKR", states: "default captured; the bundle holds no pointer-state frame for any Hyundai element", use: "Inline external link (a.btn.btn-external-sm.in-phrase) at home::[data-omd-capture=\"128\"]; 9 instances across the three product surfaces" }
    carousel-pager: { type: button, bg: "rgba(0, 0, 0, 0.1)", radius: "6px", size: "12px x 12px", selected: "bg #007fa8", states: "rest and selected variants captured; the label is hidden (font-size 0, transparent text); no pointer-state frame", use: "Home carousel pager (button.el-carousel__button) at home::[data-omd-capture=\"76\"]; the selected one is home::[data-omd-capture=\"75\"], paired one-to-one in document order with the aria-selected indicator li" }
    family-site-control: { type: button, bg: "#1c1b1b", fg: "#999999", border: "1px solid #676767", radius: "0px", padding: "0px 13px", height: "30px", font: "13.3333px / 400 / Arial", states: "default captured; the bundle holds no pointer-state frame for any Hyundai element", use: "Footer Family Site control at home::[data-omd-capture=\"146\"], 190 x 30; present on all three product surfaces" }
    chatbot-trigger: { type: button, bg: "#00aad2", border: "4px solid transparent", radius: "100%", size: "60px x 60px", shadow: "rgba(0, 0, 0, 0.15) 0px 0px 20px 0px", states: "default captured; the bundle holds no pointer-state frame for any Hyundai element", use: "Home chatbot button (button.btn.ibtn.chatbot) at home::[data-omd-capture=\"122\"]; one instance" }
    quick-menu-link: { type: button, bg: "transparent", fg: "#333333", radius: "0px", padding: "82px 0px 0px", size: "100px x 100px", font: "15px / 500 / HyundaiSansTextKR", states: "default captured; the bundle holds no pointer-state frame for any Hyundai element", use: "Home quick-menu link (a.btn.menu-link.btn-text) at home::[data-omd-capture=\"36\"]; 13 instances; the 82px top padding leaves room for an icon that the style dump does not record" }
    slide-tab: { type: tab, bg: "transparent", fg: "#666666", radius: "0px", padding: "0px", height: "30px", font: "16px / 400 / HyundaiSansTextKRR", selected: "fg #007fa8 (class is-active)", states: "rest and is-active variants captured (role=tab, no aria-selected); no pointer-state frame", use: "Home slide-information tab (button.slideinfo-list__link, role=tab) at home::[data-omd-capture=\"52\"] through \"54\"; the active one is home::[data-omd-capture=\"51\"]" }
    slide-dot: { type: button, bg: "rgba(0, 0, 0, 0.1)", radius: "60%", size: "12px x 12px", selected: "bg #007fa8 (class is-active)", states: "rest and is-active variants captured; no pointer-state frame", use: "Home slide dot (button.slideinfo-list__link) at home::[data-omd-capture=\"29\"] through \"34\"; the active one is home::[data-omd-capture=\"28\"]" }
    more-link: { type: button, bg: "transparent", fg: "#002c5f", radius: "0px", padding: "0px", height: "18px", font: "16px / 500 / HyundaiSansHeadKR", states: "default captured; the bundle holds no pointer-state frame for any Hyundai element", use: "Home navy more link (a.btn.btn-more-blue) at home::[data-omd-capture=\"58\"]; a white-text instance at \"57\" stands on a backdrop that is not claimed" }
    footer-disclosure-toggle: { type: toggle, bg: "transparent", fg: "#000000", radius: "0px", padding: "24px 50px 21px", size: "1118px x 69px", font: "16px / 400 / HyundaiSansHeadKR", states: "default captured; the expanded state was not captured", use: "Footer disclosure toggle (span.button-toggle.area-icon) recorded as home::span at 1118 x 69 (top 6619); present on all three product surfaces" }
---

# Design System Inspiration of Hyundai

## 1. Visual Theme & Atmosphere

Founded in 1967, Hyundai Motor Company now presents itself as a mobility company as well as an automaker, with its official history tracing the shift from the Ulsan assembly plant to current IONIQ electric vehicles. On the captured Korean product surfaces, that broad automotive identity resolves into a restrained interface: black and white text, a deep navy action color (`#002c5f`), and loaded HyundaiSans families. The documented vehicle-design direction, Sensuous Sportiness, has been Hyundai's design philosophy since 2018; it connects emotional appeal with structure, proportion, styling, and technology. This reference keeps that official vehicle-design context separate from web claims: it describes the captured KR product UI, not a universal Hyundai design system.

The product capture favors flat, rectangular actions for its repeated navy vehicle CTA, but it is not a zero-radius system: the selected carousel control has a 6px radius and the chatbot is circular. Deep navy (`#002c5f`) is the repeated product action color; teal (`#007fa8`) appears in captured carousel controls, while cyan (`#00aad2`) appears on the chatbot. Black (`#000000`), white (`#ffffff`), muted gray (`#999999`), utility gray (`#444444`), and the dark footer (`#1c1b1b`) are also directly observed.

## Primary tasks

- Browse the vehicle catalogue and open a model's intro page
- Move between top-level menus on every product page
- Open the chatbot from the home page

## 2. Color Palette & Roles

### Product-surface colors

- **Primary navy** (`#002c5f`): observed filled vehicle action on both the catalogue and IONIQ 6 product surfaces.
- **Teal** (`#007fa8`): observed on home-surface carousel controls: it fills the selected carousel pager and the active slide dot, and colours the active slide tab's text. It marks the selected position in those controls; no broader semantic role is inferred.
- **Cyan** (`#00aad2`): observed as the home-surface chatbot button background.
- **Ink** (`#000000`) and **white** (`#ffffff`): repeatedly observed text and border values across the three product surfaces.
- **Muted gray** (`#999999`) and **utility gray** (`#444444`): observed in footer/list and inline external-link chrome respectively.
- **Footer dark** (`#1c1b1b`): observed on the Family Site control in the KR product footer.

Component-scoped neutrals stay in their components rather than becoming palette roles: `#333333` is the quick-menu link text, `#666666` the resting slide-tab text, and `#676767` the Family Site control border. The resting carousel pagers and slide dots are translucent `rgba(0, 0, 0, 0.1)`, kept in prose because it has no opaque hex.

## 3. Typography Rules

### Evidence classes

- **Live computed product use, FontFaceSet-backed:** `HyundaiSansTextKR` (287 observed uses) and `HyundaiSansHeadKR` (84) are visible computed families with matching loaded FontFaceSet entries in the supplied KR product capture. `HyundaiSansHeadKRR` (43) and `HyundaiSansTextKRR` (35) are likewise loaded and visibly used variants.
- **Computed stack as recorded:** on `body` and about 230 other home elements the computed `font-family` reads `HyundaiSansTextKR, "Magul Gothic"`; it is recorded here as observed.
- **Official brand/type context:** Hyundai's 2023 official newsroom describes Hyundai Sans UI as a next-generation mobility UX typeface that inherits the formative characteristics of Hyundai Sans. That statement concerns the ccNC infotainment context; it does not establish Hyundai Sans UI as the web product-surface family.
- **System / declared-only:** Arial is a system family observed in utility chrome. `element-icons` is declared in the capture but has no visible usage. Neither is promoted to the UI family token.
- **License and distribution boundary:** the supplied capture records no font source URLs, and this review found no public first-party web-font licence for the KR files. The loaded families may be described by name and observed metrics, but no downloadable asset or reuse licence is asserted.

### Observed hierarchy

| Role | Family | Size | Weight | Line Height | Tracking | Surface |
|------|--------|------|--------|-------------|----------|---------|
| H2 | HyundaiSansHeadKR | 44px | 400 | 58px | -0.4px | home |
| Body/list | HyundaiSansTextKR | 16px | 400 | 18.4px | normal | all three product surfaces |
| Vehicle action | HyundaiSansTextKR | 16px | 500 | 18.4px | -0.4px | catalogue and IONIQ 6 |
| Primary nav trigger | HyundaiSansHeadKRR | 16px | 400 | 30px | -0.4px | all three product surfaces |
| Inline external link | HyundaiSansHeadKR | 14px | 500 | 14px | -0.4px | all three product surfaces |
| Quick-menu link | HyundaiSansTextKR | 15px | 500 | 15px | -0.4px | home |
| Slide tab | HyundaiSansTextKRR | 16px | 400 | 30px | -0.24px | home |

## 4. Component Stylings

Only the variants below are retained because the supplied collector evidence records their selector, surface, and computed values. The bundle holds no `::state-hover`, `::state-pressed`, or `::state-focus` frame for any element on the three surfaces, and `interactionCount: 0` records that no dialog, menu, or tab was expanded, so hover, focus, pressed, disabled, menu-open, and validation values are not asserted. The selected variants below come from the elements' own attributes: `aria-selected="true"` on the carousel indicator and the `is-active` class on the slide tabs and dots.

### Vehicle action

**Navy filled action**
- Background: `#002c5f`
- Text: `#ffffff`
- Radius: 0px
- Padding: 0px
- Height: 50px
- Font: 16px / 500 / HyundaiSansTextKR, letter-spacing -0.4px
- Use: `surface-2::[data-omd-capture="15"]`, class `btn nuxt-link-active`, 180 × 50; observed on `surface-2` (vehicle catalogue) and `surface-3` (IONIQ 6 intro), 2 occurrences, no state captured. The home page repeats the colours and size on 13 `a.btn.btn` actions (`home::[data-omd-capture="60"]`) with 10px 20px padding, and has one smaller `a.btn.btn-md` (`home::[data-omd-capture="88"]`, 120 × 40, 15px / 500 / HyundaiSansHeadKRR).

### Primary navigation

**Top-level trigger**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Font: 16px / 400 / HyundaiSansHeadKRR
- Use: `home::[data-omd-capture="2"]`, class `lnb_depth0_btn`; observed on home, vehicle catalogue, and IONIQ 6 intro, 15 occurrences, no state captured.

### Inline external link

**Small external link**
- Background: transparent
- Text: `#444444`
- Radius: 0px
- Padding: 10px 0px
- Font: 14px / 500 / HyundaiSansHeadKR
- Use: `home::[data-omd-capture="128"]`, class `btn btn-external-sm in-phrase`; observed on all three product surfaces, 9 occurrences, no state captured.

### Carousel pagination

**Carousel pager**
- Background: `rgba(0, 0, 0, 0.1)`
- Radius: 6px
- Size: 12px × 12px
- Selected: background `#007fa8`
- Label: hidden (font-size 0, transparent text)
- Use: `button.el-carousel__button` on home; resting pagers at `home::[data-omd-capture="76"]` through `"87"` and `"110"`, the two teal selected pagers at `home::[data-omd-capture="75"]` and `"109"`. The two home carousels hold 13 and 2 pagers. In each, exactly one indicator `li` has `aria-selected="true"` and exactly one pager is teal, both first in document order, and the pager label lengths repeat the indicator label lengths one for one; that is what ties the teal fill to the selected indicator, since the button itself carries no active class or ARIA state. No pointer-state frame was captured.

**Selected indicator shell**
- Background: transparent
- Radius: 0px
- Padding: 0px 4px (first carousel); 12px 4px (second carousel)
- Use: `home::li`, class `el-carousel__indicator el-carousel__indicator--horizontal is-active`, `aria-selected="true"`; one per carousel on home, among 13 and 2 indicators. The shell's computed text colour (`#000000`) and 16px / 400 HyundaiSansTextKR font are inherited: its label is hidden and the visible mark is the pager button above, so they are not a label style. The July text said this child control was not separately measured; it was, as the teal pager.

### Footer utility control

**Family Site control**
- Background: `#1c1b1b`
- Text: `#999999`
- Border: 1px solid `#676767`
- Radius: 0px
- Padding: 0px 13px
- Use: `home::[data-omd-capture="146"]`; observed on all three product surfaces, 3 occurrences. It uses system Arial and is retained as footer utility chrome, not a HyundaiSans UI token.

### Chatbot trigger

**Circular chatbot button**
- Background: `#00aad2`
- Radius: 100%
- Shadow: rgba(0,0,0,0.15) 0px 0px 20px 0px
- Font: 16px / 500 / HyundaiSansTextKR
- Use: `home::[data-omd-capture="122"]`, class `btn ibtn chatbot`; observed once on the home product surface, no state captured. This is single-surface, low-confidence component evidence and does not establish a general floating-action pattern.

### Quick-menu link

**Icon-over-label link**
- Background: transparent
- Text: `#333333`
- Radius: 0px
- Padding: 82px 0px 0px
- Size: 100px × 100px
- Font: 15px / 500 / HyundaiSansTextKR, 15px line height, letter-spacing -0.4px
- Observed-state summary: Default captured; no pointer-state frame.
- Use: `a.btn.menu-link.btn-text` at `home::[data-omd-capture="36"]`; 13 instances on home. The 82px top padding leaves room for an icon above the label; the icon is not part of the computed style and is not claimed.

### Slide information tabs and dots

**Slide tab**
- Background: transparent
- Text: `#666666`
- Radius: 0px
- Padding: 0px
- Height: 30px
- Font: 16px / 400 / HyundaiSansTextKRR, 30px line height, letter-spacing -0.24px
- Active (class `is-active`): text `#007fa8`; every other dumped value equals the resting tab
- Observed-state summary: Resting and active variants captured (`role="tab"`, no `aria-selected`); no pointer-state frame.
- Use: `button.slideinfo-list__link` at `home::[data-omd-capture="52"]` through `"54"`; the active tab is `home::[data-omd-capture="51"]`.

**Slide dot**
- Background: `rgba(0, 0, 0, 0.1)`
- Radius: 60%
- Size: 12px × 12px
- Active (class `is-active`): background `#007fa8`
- Observed-state summary: Resting and active variants captured; no pointer-state frame.
- Use: `button.slideinfo-list__link` at `home::[data-omd-capture="29"]` through `"34"`; the active dot is `home::[data-omd-capture="28"]`. An 18px toggle control (`button.btn-control--toggle`, `home::[data-omd-capture="35"]`, background `#575757`, 10px radius) sits in the same row; it is recorded here and not tokenized.

### More link

**Navy more link**
- Background: transparent
- Text: `#002c5f`
- Radius: 0px
- Padding: 0px
- Height: 18px
- Font: 16px / 500 / HyundaiSansHeadKR, letter-spacing -0.4px
- Observed-state summary: Default captured; no pointer-state frame.
- Use: `a.btn.btn-more-blue` at `home::[data-omd-capture="58"]`; a white-text instance at `"57"` stands on a backdrop that is not claimed.

### Footer disclosure toggle

**Full-width toggle row**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 24px 50px 21px
- Size: 1118px × 69px
- Font: 16px / 400 / HyundaiSansHeadKR, 24px line height, letter-spacing -0.4px
- Observed-state summary: Default captured; the expanded state was not captured.
- Use: `span.button-toggle.area-icon`, recorded as `home::span` at top 6619; present on all three product surfaces.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.hyundai.com/kr/ko/e; https://www.hyundai.com/kr/ko/e/vehicles; https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq-6/intro; https://www.hyundai.com/worldwide/en/company/innovation/design; https://www.hyundai.com/worldwide/en/newsroom/detail/0000000287; https://www.hyundai.com/worldwide/en/footer/corporate/history/1967-2000

**Tier 2 sources:** https://getdesign.md/hyundai — attempted 2026-07-13, web fetch returned an internal error; https://styles.refero.design/?q=hyundai — attempted 2026-07-13, web fetch returned an internal error.
**Conflicts unresolved:** none

Tier 2 data was unavailable, so it was not used to establish any token or component value.

## 5. Layout Principles

The supplied evidence establishes three desktop product routes, but it does not contain a responsive breakpoint or grid measurement. The catalogue and IONIQ 6 routes share the navy filled vehicle action; no universal card, spacing scale, or layout grid is promoted from the capture.

## 6. Depth & Elevation

The repeated captured components in §4 have `box-shadow: none`, except the single home-surface chatbot trigger, which has `rgba(0,0,0,0.15) 0px 0px 20px 0px`. No broader elevation scale is asserted.

## 7. Do's and Don'ts

### Do

- Use the observed navy vehicle action only when the same product action pattern is intended.
- Use the loaded HyundaiSans KR families only where licensed assets are provided by Hyundai.
- Preserve a component's surface and state boundary when reusing this reference.

### Don't

- Treat teal, cyan, or the circular chatbot as a general-purpose accent or floating-action system.
- Substitute a system font while labelling it Hyundai Sans.
- Invent hover, focus, disabled, form-error, or responsive variants from this capture.

## 8. Responsive Behavior

No responsive viewport comparison was supplied. Breakpoints, touch-target rules, and collapse behavior remain unresolved.

## 9. Agent Prompt Guide

Apply only source-bound values: a navy vehicle action (`#002c5f`, white text, 0px radius, 16px/500 HyundaiSansTextKR) is supported on the two vehicle product surfaces. The home carousels and slide lists mark the selected position with teal `#007fa8` (pager fill, dot fill, tab text). Do not derive card, input, error-state, hover, or motion specifications from this reference.

## 10. Voice & Tone

Official corporate language frames Hyundai around “Progress for Humanity,” while the official design material describes Sensuous Sportiness as combining emotional appeal with structure, proportion, styling, and technology. The supplied capture does not preserve reliable product-copy text, so no verbatim voice samples or prescriptive copy rules are claimed here.

## 11. Brand Narrative

Hyundai Motor Company was incorporated in 1967; its official history records the Ulsan assembly plant in 1968, the Pony launch in 1976, and its present framing as a mobility solution provider. The 2024 milestone account connects that history to the current dedicated IONIQ electric-vehicle lineup.

Since 2018, Hyundai has described Sensuous Sportiness as the evolution of its design identity. Its official design page names structure, proportion, and styling, while the 2023 newsroom account separates vehicle infotainment work: the Seon design system and Hyundai Sans UI are an in-vehicle ccNC context, not proof of the KR public-web component rules above.

## 12. Principles

1. **Progress for Humanity.** Hyundai's official materials frame this as a mobility and sustainability vision. *UI implication:* none is inferred beyond the recorded product surfaces.
2. **Sensuous Sportiness.** The official vehicle-design philosophy combines emotional appeal with structure, proportion, styling, and technology. *UI implication:* do not turn that vehicle philosophy into unsupported web tokens.
3. **Legibility in mobility UX.** Hyundai's official Hyundai Sans UI description stresses legibility and hierarchy for driving environments. *UI implication:* this supports the typeface's brand context, not a substitution or web licence.

## 13. Personas

No first-party audience segmentation with enough detail to define personas was collected in this reverify packet. Do not use synthetic personas as evidence for Hyundai product decisions.

## 14. States

The bundle holds no pointer-state frame (`::state-hover`, `::state-pressed`, `::state-focus`) for any element on the three surfaces, and `interactionCount: 0` records that no dialog, menu, or tab was expanded. Hover and pressed values are therefore unresolved. Focus is not declared: this bundle has no focus frame, and where the collector samples one it follows a mouse press, which is not a keyboard `:focus-visible` measurement. The observed state variants are selections carried by the elements themselves:

| Variant | Evidence |
|---|---|
| Carousel indicator selected | `aria-selected="true"` on one indicator `li` per carousel; its pager button is filled `#007fa8`, the other pagers `rgba(0, 0, 0, 0.1)`. |
| Slide tab active | class `is-active`: text `#666666` → `#007fa8`. |
| Slide dot active | class `is-active`: fill `rgba(0, 0, 0, 0.1)` → `#007fa8`. |

Empty, loading, error, success, skeleton, and disabled treatments are unresolved.

## 15. Motion & Easing

No duration, easing, animation, or reduced-motion behavior was captured. Motion tokens and rules are unresolved.
