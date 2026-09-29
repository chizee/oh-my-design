---
id: channeltalk
name: Channel Talk
country: KR
category: saas
homepage: "https://channel.io"
primary_color: "#242428"
logo:
  type: github
  slug: channel-io
verified: "2026-07-12"
omd: "0.1"
ds:
  name: Bezier
  url: "https://github.com/channel-io/bezier-react"
  type: system
  description: Channel Talk's open-source product design system and component implementation. It is retained as official product-system context, not used to overwrite current public marketing tokens.
  og_image: "https://opengraph.githubassets.com/d5fd6836ec938de2c8399cf28b2ceabc49104fbbf86e937f9e89983f1b50d638/channel-io/bezier-react"
verification_v2:
  schema: 2
  checked: "2026-09-29"
  surfaces:
    - { id: home, kind: marketing-product, url: "https://channel.io/kr", inspected: "2026-07-12" }
    - { id: home-states, kind: marketing-product, url: "https://channel.io/kr", inspected: "2026-09-17" }
    - { id: us, kind: marketing-product, url: "https://channel.io/us", inspected: "2026-07-12" }
    - { id: updates, kind: product-doc, url: "https://docs.channel.io/updates/en/articles/Notice-Channel-Talk-Major-Updates--b3d45997", inspected: "2026-07-12" }
    - { id: help, kind: product-doc, url: "https://docs.channel.io/help/en/articles/94f34984", inspected: "2026-07-12" }
    - { id: rebrand, kind: official-history, url: "https://channel.io/kr/blog/articles/rebranding-channeltalk-3aff8113", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://channel.io/kr", captured: "2026-07-12" }
    - { id: home-states, kind: product-surface, url: "https://channel.io/kr", captured: "2026-09-17" }
    - { id: us-live, kind: product-surface, url: "https://channel.io/us", captured: "2026-07-12" }
    - { id: updates-live, kind: official-doc, url: "https://docs.channel.io/updates/en/articles/Notice-Channel-Talk-Major-Updates--b3d45997", captured: "2026-07-12" }
    - { id: help-live, kind: official-doc, url: "https://docs.channel.io/help/en/articles/94f34984", captured: "2026-07-12" }
    - { id: rebrand-official, kind: official-doc, url: "https://channel.io/kr/blog/articles/rebranding-channeltalk-3aff8113", captured: "2026-07-12" }
    - { id: bezier-official, kind: official-doc, url: "https://github.com/channel-io/bezier-react", captured: "2026-07-12" }
    - { id: channeltalk-component-index, kind: official-doc, url: "https://github.com/channel-io/bezier-react/blob/main/packages/bezier-react/src/index.ts", captured: "2026-09-19" }
    - { id: channeltalk-probe, kind: product-surface, url: "https://channel.io/kr", captured: "2026-09-29" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": *home_evidence
    "tokens.colors.surface": *home_evidence
    "tokens.colors.foreground": *home_evidence
    "tokens.colors.secondary": *home_evidence
    "tokens.colors.dark-surface": *home_evidence
    "tokens.colors.hairline": *home_evidence
    "tokens.colors.on-primary": *home_evidence
    "tokens.typography.family.ui": *home_evidence
    "tokens.typography.family.marketing": *home_evidence
    "tokens.typography.family.docs": &docs_evidence { surface_id: updates, source_id: updates-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.typography.marketing-heading.size": *home_evidence
    "tokens.typography.marketing-heading.weight": *home_evidence
    "tokens.typography.marketing-heading.lineHeight": *home_evidence
    "tokens.typography.marketing-heading.tracking": *home_evidence
    "tokens.typography.marketing-heading.use": *home_evidence
    "tokens.typography.marketing-body.size": *home_evidence
    "tokens.typography.marketing-body.weight": *home_evidence
    "tokens.typography.marketing-body.lineHeight": *home_evidence
    "tokens.typography.marketing-body.tracking": *home_evidence
    "tokens.typography.marketing-body.use": *home_evidence
    "tokens.typography.marketing-tab.size": *home_evidence
    "tokens.typography.marketing-tab.weight": *home_evidence
    "tokens.typography.marketing-tab.lineHeight": *home_evidence
    "tokens.typography.marketing-tab.tracking": *home_evidence
    "tokens.typography.marketing-tab.use": *home_evidence
    "tokens.typography.docs-body.size": *docs_evidence
    "tokens.typography.docs-body.weight": *docs_evidence
    "tokens.typography.docs-body.lineHeight": *docs_evidence
    "tokens.typography.docs-body.tracking": *docs_evidence
    "tokens.typography.docs-body.use": *docs_evidence
    "tokens.spacing.xs": *home_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.spacing.lg": *home_evidence
    "tokens.spacing.xl": *home_evidence
    "tokens.rounded.control": *docs_evidence
    "tokens.rounded.utility": *docs_evidence
    "tokens.rounded.card": *home_evidence
    "tokens.rounded.full": *home_evidence
    "tokens.shadow.flat": *home_evidence
    "tokens.components.marketing-primary.type": *home_evidence
    "tokens.components.marketing-primary.hover": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "button.Hero-styled__CtaButton-sc-f575346f-9 무료로 시작하기 at :hover", captured: "2026-09-29" }
    "tokens.components.marketing-primary.pressed": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "button.Hero-styled__CtaButton-sc-f575346f-9 무료로 시작하기 at :active", captured: "2026-09-29" }
    "tokens.components.marketing-primary.focus": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "button.Hero-styled__CtaButton-sc-f575346f-9 at :focus-visible, Tab stop 6", captured: "2026-09-29" }
    "tokens.components.marketing-primary.bg": *home_evidence
    "tokens.components.marketing-primary.fg": *home_evidence
    "tokens.components.marketing-primary.radius": *home_evidence
    "tokens.components.marketing-primary.padding": *home_evidence
    "tokens.components.marketing-primary.font": *home_evidence
    "tokens.components.marketing-primary.states": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "button.Hero-styled__CtaButton-sc-f575346f-9 무료로 시작하기 (hero)", captured: "2026-09-29" }
    "tokens.components.marketing-primary.use": *home_evidence
    "tokens.components.marketing-outline.type": *home_evidence
    "tokens.components.marketing-outline.bg": *home_evidence
    "tokens.components.marketing-outline.fg": *home_evidence
    "tokens.components.marketing-outline.border": *home_evidence
    "tokens.components.marketing-outline.radius": *home_evidence
    "tokens.components.marketing-outline.padding": *home_evidence
    "tokens.components.marketing-outline.font": *home_evidence
    "tokens.components.marketing-outline.hover": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.SectionHeader-styled__OutlineButton-sc-5af82035-7 자세히 보기 (first of three) at :hover", captured: "2026-09-29" }
    "tokens.components.marketing-outline.pressed": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.SectionHeader-styled__OutlineButton-sc-5af82035-7 자세히 보기 (first of three) at :active", captured: "2026-09-29" }
    "tokens.components.marketing-outline.focus": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.SectionHeader-styled__OutlineButton-sc-5af82035-7 at :focus-visible, Tab stop 13", captured: "2026-09-29" }
    "tokens.components.marketing-outline.states": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.SectionHeader-styled__OutlineButton-sc-5af82035-7 자세히 보기", captured: "2026-09-29" }
    "tokens.components.marketing-outline.use": *home_evidence
    "tokens.components.marketing-card.type": *home_evidence
    "tokens.components.marketing-card.bg": *home_evidence
    "tokens.components.marketing-card.border": *home_evidence
    "tokens.components.marketing-card.radius": *home_evidence
    "tokens.components.marketing-card.padding": *home_evidence
    "tokens.components.marketing-card.use": *home_evidence
    "tokens.components.marketing-tab.type": *home_evidence
    "tokens.components.marketing-tab.bg": *home_evidence
    "tokens.components.marketing-tab.fg": *home_evidence
    "tokens.components.marketing-tab.radius": *home_evidence
    "tokens.components.marketing-tab.padding": *home_evidence
    "tokens.components.marketing-tab.font": *home_evidence
    "tokens.components.marketing-tab.selected": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "button#customer-case-tab-라이프스타일 (selected), label span.CustomerCaseSection-styled__TabText", captured: "2026-09-29" }
    "tokens.components.marketing-tab.hover": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "button#customer-case-tab-패션 and #customer-case-tab-라이프스타일 at :hover", captured: "2026-09-29" }
    "tokens.components.marketing-tab.pressed": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "button#customer-case-tab-패션 and #customer-case-tab-라이프스타일 at :active", captured: "2026-09-29" }
    "tokens.components.marketing-tab.focus": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "button#customer-case-tab-라이프스타일 at :focus-visible, Tab stop 14", captured: "2026-09-29" }
    "tokens.components.marketing-tab.states": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "CustomerCaseSection tablist, roving tabindex; 패션 tabIndex -1", captured: "2026-09-29" }
    "tokens.components.marketing-tab.use": *home_evidence
    "tokens.components.docs-icon-button.type": *docs_evidence
    "tokens.components.docs-icon-button.bg": *docs_evidence
    "tokens.components.docs-icon-button.fg": *docs_evidence
    "tokens.components.docs-icon-button.radius": *docs_evidence
    "tokens.components.docs-icon-button.hover": { surface_id: updates, source_id: channeltalk-probe, method: live-state-probe, selector: "button.b-1oeNI.b-r4Bne (first sidebar chevron) at :hover", captured: "2026-09-29" }
    "tokens.components.docs-icon-button.pressed": { surface_id: updates, source_id: channeltalk-probe, method: live-state-probe, selector: "button.b-1oeNI.b-r4Bne (first sidebar chevron) at :active", captured: "2026-09-29" }
    "tokens.components.docs-icon-button.focus": { surface_id: updates, source_id: channeltalk-probe, method: live-state-probe, selector: "button.b-1oeNI.b-r4Bne at :focus-visible, Tab stop 5", captured: "2026-09-29" }
    "tokens.components.docs-icon-button.states": { surface_id: updates, source_id: channeltalk-probe, method: live-state-probe, selector: "button.b-1oeNI.b-r4Bne (first of three)", captured: "2026-09-29" }
    "tokens.components.docs-icon-button.use": *docs_evidence
    "tokens.components.header-cta.type": &ctHeaderCta { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-07-12" }
    "tokens.components.header-cta.bg": *ctHeaderCta
    "tokens.components.header-cta.fg": *ctHeaderCta
    "tokens.components.header-cta.radius": *ctHeaderCta
    "tokens.components.header-cta.padding": *ctHeaderCta
    "tokens.components.header-cta.size": *ctHeaderCta
    "tokens.components.header-cta.font": *ctHeaderCta
    "tokens.components.header-cta.hover": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.Header-styled__CTAButton-sc-8458131e-13 무료로 시작하기 at :hover", captured: "2026-09-29" }
    "tokens.components.header-cta.pressed": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.Header-styled__CTAButton-sc-8458131e-13 무료로 시작하기 at :active", captured: "2026-09-29" }
    "tokens.components.header-cta.states": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.Header-styled__CTAButton-sc-8458131e-13 무료로 시작하기, no href attribute, not reached in 81 Tab presses", captured: "2026-09-29" }
    "tokens.components.header-cta.use": *ctHeaderCta
    "tokens.components.nav-link.type": &ctNav { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"1\"] to [data-omd-capture=\"5\"]", captured: "2026-07-12" }
    "tokens.components.nav-link.bg": *ctNav
    "tokens.components.nav-link.fg": *ctNav
    "tokens.components.nav-link.radius": *ctNav
    "tokens.components.nav-link.padding": *ctNav
    "tokens.components.nav-link.height": *ctNav
    "tokens.components.nav-link.font": *ctNav
    "tokens.components.nav-link.hover": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.NavItem-styled__Trigger-sc-a57ddd15-1 가격 안내 at :hover", captured: "2026-09-29" }
    "tokens.components.nav-link.pressed": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.NavItem-styled__Trigger-sc-a57ddd15-1 가격 안내 at :active", captured: "2026-09-29" }
    "tokens.components.nav-link.focus": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.NavItem-styled__Trigger-sc-a57ddd15-1 가격 안내 at :focus-visible, Tab stop 4", captured: "2026-09-29" }
    "tokens.components.nav-link.states": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "a.NavItem-styled__Trigger-sc-a57ddd15-1 가격 안내", captured: "2026-09-29" }
    "tokens.components.nav-link.use": *ctNav
    "tokens.components.header-login-link.type": &ctLogin { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-07-12" }
    "tokens.components.header-login-link.bg": *ctLogin
    "tokens.components.header-login-link.fg": *ctLogin
    "tokens.components.header-login-link.radius": *ctLogin
    "tokens.components.header-login-link.padding": *ctLogin
    "tokens.components.header-login-link.height": *ctLogin
    "tokens.components.header-login-link.font": *ctLogin
    "tokens.components.header-login-link.states": { surface_id: home, source_id: channeltalk-probe, method: live-state-probe, selector: "survey raw/channeltalk-survey-home.json: header 로그인 anchor without href", captured: "2026-09-29" }
    "tokens.components.header-login-link.use": *ctLogin
    "tokens.components.marketing-band-cta.type": &ctBand { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-07-12" }
    "tokens.components.marketing-band-cta.bg": *ctBand
    "tokens.components.marketing-band-cta.fg": *ctBand
    "tokens.components.marketing-band-cta.radius": *ctBand
    "tokens.components.marketing-band-cta.padding": *ctBand
    "tokens.components.marketing-band-cta.size": *ctBand
    "tokens.components.marketing-band-cta.font": *ctBand
    "tokens.components.marketing-band-cta.states": *ctBand
    "tokens.components.marketing-band-cta.use": *ctBand
    "tokens.components.customer-case-carousel-nav.type": &ctCarousel { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"23\"]", captured: "2026-07-12" }
    "tokens.components.customer-case-carousel-nav.bg": *ctCarousel
    "tokens.components.customer-case-carousel-nav.fg": *ctCarousel
    "tokens.components.customer-case-carousel-nav.radius": *ctCarousel
    "tokens.components.customer-case-carousel-nav.padding": *ctCarousel
    "tokens.components.customer-case-carousel-nav.size": *ctCarousel
    "tokens.components.customer-case-carousel-nav.states": *ctCarousel
    "tokens.components.customer-case-carousel-nav.use": *ctCarousel
    "tokens.components.demo-input.type": &ctDemo { surface_id: home, source_id: home-live, method: live-inspect, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.demo-input.bg": *ctDemo
    "tokens.components.demo-input.fg": *ctDemo
    "tokens.components.demo-input.padding": *ctDemo
    "tokens.components.demo-input.size": *ctDemo
    "tokens.components.demo-input.font": *ctDemo
    "tokens.components.demo-input.states": *ctDemo
    "tokens.components.demo-input.use": *ctDemo
    "tokens.components.docs-search-button.type": &ctDocsSearch { surface_id: updates, source_id: updates-live, method: live-inspect, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.docs-search-button.bg": *ctDocsSearch
    "tokens.components.docs-search-button.fg": *ctDocsSearch
    "tokens.components.docs-search-button.radius": *ctDocsSearch
    "tokens.components.docs-search-button.padding": *ctDocsSearch
    "tokens.components.docs-search-button.size": *ctDocsSearch
    "tokens.components.docs-search-button.states": *ctDocsSearch
    "tokens.components.docs-search-button.use": *ctDocsSearch
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Five current first-party surfaces. Marketing and product-doc domains are intentionally separate. Legacy universal Cobalt, BildV5, generic form, synthetic state, and inferred motion claims are not promoted."
  colors:
    primary: "#242428"
    canvas: "#ffffff"
    surface: "#f7f6f3"
    foreground: "#000000"
    secondary: "#716f6d"
    dark-surface: "#3a3530"
    hairline: "#e4e4e5"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Pretendard", marketing: "Pretendard", docs: "Inter" }
    marketing-heading: { size: 44, weight: 600, lineHeight: 1.41, tracking: -0.88, use: "Large current marketing headings" }
    marketing-body: { size: 18, weight: 400, lineHeight: 1.56, tracking: -0.18, use: "Current marketing body and action copy" }
    marketing-tab: { size: 16, weight: 600, lineHeight: 1.56, tracking: -0.16, use: "Interactive marketing category tabs" }
    docs-body: { size: 17, weight: 400, lineHeight: 1.59, tracking: -0.1, use: "English product documentation body" }
  spacing: { xs: 4, sm: 6, md: 10, lg: 20, xl: 30 }
  rounded: { control: 6, utility: 8, card: 35, full: 9999 }
  shadow:
    flat: "none"
  components_harvested: true
  components:
    marketing-primary: { type: button, bg: "#242428", fg: "#ffffff", radius: "9999px", padding: "10px 22px", font: "18px / 400", hover: "opacity 1 → 0.85 (bg unchanged)", pressed: "opacity 1 → 0.85 (bg unchanged)", focus: "no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the hero 무료로 시작하기 button (156px x 48px, Tab 6), never activated; hover equals pressed; the #3a3a3f promoted here on 2026-09-17 belongs to the sticky-header link (header-cta), whose 43px height and 9px 14px padding that re-verify reproduced", use: "Primary signup and conversion action on current KR/US marketing" }
    marketing-outline: { type: button, bg: "transparent", fg: "#000000", border: "1px solid #242428", radius: "9999px", padding: "10px 22px", font: "18px / 400", hover: "bg rgba(0, 0, 0, 0.04)", pressed: "bg rgba(0, 0, 0, 0.04)", focus: "no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the first SectionHeader 자세히 보기 pill (127px x 50px, Tab 13); hover equals pressed; the computed radius is 1368.71px, a pill", use: "Secondary marketing conversion action" }
    marketing-card: { type: card, bg: "#f7f6f3", border: "1px solid #e4e4e5", radius: "35px", padding: "30px 35px", use: "Current KR/US marketing information card" }
    marketing-tab: { type: tab, bg: "transparent", fg: "#716f6d", radius: "9999px", padding: "6px 35px", font: "16px / 600", selected: "fg #ffffff (the dark pill behind the label is drawn by another element, not compared)", hover: "no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) on both 패션 and the selected 라이프스타일 — measured 2026-09-29", pressed: "no change in the compared scope (same scope, both tabs) — measured 2026-09-29", focus: "no focus indication in the compared scope (same scope) on the selected tab (Tab 14) — measured 2026-09-29", states: "selected and tab-selected observed in six safe expansions 2026-07-12; hover and pressed measured 2026-09-29 on 패션 and 라이프스타일; keyboard focus measured on the selected tab only: the tablist uses a roving tabindex, 패션 is tabIndex -1 and was not reached by Tab, so its focus is unmeasured", use: "Interactive category switcher on current marketing (KR home; the US page read 6px 20px padding on 2026-07-12)" }
    docs-icon-button: { type: button, bg: "transparent", fg: "rgba(0,0,0,0.85)", radius: "6px", hover: "bg rgba(28, 28, 28, 0.08); fg rgba(0, 0, 0, 0.6) → rgba(0, 0, 0, 0.85) on the svg icon", pressed: "bg rgba(28, 28, 28, 0.08); fg rgba(0, 0, 0, 0.6) → rgba(0, 0, 0, 0.85) on the svg icon", focus: "outline 3px rgba(97, 87, 234, 0.3), offset 0 (authored ring) — measured 2026-09-29", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the first sidebar chevron (20px x 20px, Tab 5); pressed equals hover; the July pressed frames were alpha-0 transition frames with no value", use: "Compact icon action in product documentation" }
    header-cta: { type: button, bg: "#242428", fg: "#ffffff", radius: "999px", padding: "9px 14px", size: "127px x 43px", font: "16px / 600", hover: "bg #3a3a3f", pressed: "bg #3a3a3f", states: "default captured 2026-07-12 on home, us and the rebrand page; hover and pressed measured 2026-09-29, the same #3a3a3f the 2026-09-17 re-verify read on this link; keyboard focus unmeasured: the link has no href attribute, so Tab never reaches it", use: "Sticky-header 무료로 시작하기 link at home::[data-omd-capture=\"7\"]" }
    nav-link: { type: tab, bg: "transparent", fg: "#000000", radius: "999px", padding: "6px 12px", height: "37px", font: "16px / 400", hover: "bg rgba(36, 36, 40, 0.05)", pressed: "bg rgba(36, 36, 40, 0.05)", focus: "outline 2px #242428, offset 2px (authored ring); bg rgba(36, 36, 40, 0.05) — measured 2026-09-29", states: "default captured 2026-07-12 on five header triggers; hover, pressed and keyboard focus measured 2026-09-29 on 가격 안내 (Tab 4), the only one with an href; the other four are anchors without href that Tab skips, so their focus is unmeasured", use: "Header navigation trigger at home::[data-omd-capture=\"1\"] to [data-omd-capture=\"5\"]" }
    header-login-link: { type: button, bg: "transparent", fg: "#000000", radius: "999px", padding: "6px 12px", height: "37px", font: "16px / 400", states: "default captured 2026-07-12 on home, us and the rebrand page; not probed: on 2026-09-29 it had no href attribute, so Tab never reaches it", use: "Header 로그인 control at home::[data-omd-capture=\"6\"]" }
    marketing-band-cta: { type: button, bg: "#242428", fg: "#ffffff", radius: "1368.71px", padding: "10px 22px", size: "125px x 48px", font: "18px / 400", states: "default captured 2026-07-12 (six occurrences on home and us); the computed radius makes it a pill; not probed", use: "Dark 자세히 보기 pill in the section intro band at home::[data-omd-capture=\"9\"]" }
    customer-case-carousel-nav: { type: button, bg: "rgba(255, 255, 255, 0.2)", fg: "#ffffff", radius: "9999px", padding: "0px", size: "48px x 48px", states: "default captured 2026-07-12 (four occurrences on home and us); not probed", use: "Translucent carousel arrow over the dark customer-case media at home::[data-omd-capture=\"23\"]" }
    demo-input: { type: input, bg: "transparent", fg: "#0a0b0b", padding: "0px 4px", size: "428px x 27px", font: "17px / 400", states: "default captured 2026-07-12 on home and us; not probed; its submit button was captured disabled, so no value is taken from it", use: "Marketing demo prompt input (role=combobox) at home::[data-omd-capture=\"10\"]" }
    docs-search-button: { type: button, bg: "rgba(0, 0, 0, 0.05)", fg: "rgba(0, 0, 0, 0.85)", radius: "12px", padding: "11px 14px", size: "250px x 44px", states: "default captured 2026-07-12 on both documentation pages; not probed", use: "Documentation header search trigger at surface-3::[data-omd-capture=\"1\"]" }
---

# Design System Inspiration of Channel Talk

## 1. Visual Theme & Atmosphere

Channel Talk is a customer-service platform that joins live chat, team inbox, calls, marketing, workflows, and AI assistance around one ongoing customer relationship. Its public identity has evolved from a bright SaaS-accent story toward a warmer editorial system: current Korean and US pages pair black type with cream `#f7f6f3`, dark charcoal `#242428` conversion controls, generous photography, and rounded 35px information cards. The result feels conversational and human despite the product's operational depth. Official rebrand writing explains that this warmth is intentional—Channel Talk wanted a clearer, more authentic expression of its customer-first culture rather than a generic software identity.

The product-documentation domain is visually related but technically separate. Marketing loads Pretendard and uses 18px reading copy, 44px sectional headings, and full-pill actions. English documentation loads an Inter alias and uses a tighter 17px/27px reading scale with compact 6–8px controls. This reference does not merge those two surfaces into a fictional universal stack. Bezier remains valuable official evidence that Channel maintains a real product design system, but a Bezier color does not become a current marketing token unless the inspected surface confirms it.

**Key Characteristics:**
- Warm cream `#f7f6f3` marketing surfaces with black type and `#242428` primary actions
- Pretendard on current KR/US marketing; loaded Inter alias on English product documentation
- 35px editorial cards and full-pill conversion controls
- Selected marketing tabs captured through six safe interaction expansions
- Measured 2026-09-29: the hero CTA fades to opacity 0.85 on hover and press while the sticky-header CTA darkens to `#3a3a3f`; only the header nav link and the docs chevron draw a focus ring
- Public Bezier implementation retained as product-system context, not substituted for uninspected app UI

## Primary tasks

- Answer a customer in live chat from the team inbox
- Review the conversations a support team has handled
- Configure a customer channel using the product documentation
- Judge whether the platform fits an ongoing customer workflow

## 2. Color Palette & Roles

### Current marketing roles
- **Primary / conversion** (`#242428`): repeated filled signup and conversion controls.
- **Canvas** (`#ffffff`): page and neutral content canvas.
- **Warm surface** (`#f7f6f3`): repeated card and section background.
- **Foreground** (`#000000`): dominant marketing and documentation text.
- **Secondary** (`#716f6d`): marketing supporting copy and inactive tab labels.
- **Dark editorial surface** (`#3a3530`): repeated customer-case media field.
- **Hairline** (`#e4e4e5`): current 1px marketing-card border.

Bezier's historical Cobalt `#329BE7` is not promoted as a universal current primary: it was not the conversion color on the five captured public surfaces. Authenticated Inbox status colors remain unresolved.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Bezier is an official product design-system implementation, but the inspected repository context is not treated as proof for every current private app surface. |
| Live surface-use | Pretendard loaded/high with 484 visible uses on marketing; Inter aliases loaded/high with 581 combined visible uses on product docs. |
| Official distributed asset | No Channel-exclusive redistributable brand font is promoted. |
| Declared-only | NotoSansKR, Poppins, fallback faces, and unused locale declarations remain metadata only. |
| Unresolved | Authenticated app overrides and unobserved locale behavior remain unresolved. |

`NotoSansJP` was loaded for one visible body use and remains a surface-local observation, not the universal family. No BildV5 declaration or visible use appeared in the fresh capture, so it is omitted.

### Current observed hierarchy

| Role | Surface | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Section heading | Marketing | 44px | 600 | 62px | -0.88px |
| Card heading | Marketing | 25px | 600 | 32px | -0.5px |
| Body / CTA | Marketing | 18px | 400 | 28px | -0.18px |
| Category tab | Marketing | 16px | 600 | 25px | -0.16px |
| Article heading | Docs | 24px | 700 | 34px | -0.5px |
| Article body | Docs | 17px | 400 | 27px | -0.1px |

## 4. Component Stylings

### Current verified components

Rest values are the July 2026-07-12 capture unless marked. Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe (logged out, keyboard walk first, nothing activated); "no change" means no computed change across the control, its ::before/::after, every descendant and 3 ancestor levels, and nothing wider.

#### Marketing primary action
- `#242428` background, white label, full-pill radius
- 10px × 22px padding; Pretendard 18px/400/28px
- Hover and pressed (2026-09-29): opacity 1 → 0.85; the background stays `#242428`. The `#3a3a3f` darkening belongs to the header link below
- Keyboard focus: no change within scope (1 descendant, 3 ancestor levels)

#### Marketing outline action
- Transparent background, black label, 1px `#242428` border
- Same full-pill geometry and type as the primary action
- Hover and pressed (2026-09-29): background `rgba(0, 0, 0, 0.04)`; keyboard focus: no change within scope

#### Marketing information card
- `#f7f6f3` surface, 1px `#e4e4e5` border, 35px radius
- 30px × 35px padding, with 10px internal gap in the captured variant
- July values only: no interactive element on the 2026-09-29 home matches it, so it was not probed

#### Marketing category tab
- Transparent surface, `#716f6d` label, full-pill hit area
- 6px × 35px padding on the KR home (July and 2026-09-29); the US page read 6px × 20px in July; Pretendard 16px/600/25px
- Selected state was observed in six safe tab expansions across KR/US pages; the selected label is `#ffffff`, and the dark pill behind it is drawn by another element
- Hover and pressed (2026-09-29): no change within scope on an unselected and the selected tab
- Keyboard focus: no change within scope on the selected tab; the tablist uses a roving tabindex, so the unselected tabs (tabIndex -1) are not reached by Tab and their focus is unmeasured

#### Documentation icon action
- Transparent compact control with 6px radius
- Loaded Inter alias; 20×20px
- Hover and pressed (2026-09-29): background `rgba(28, 28, 28, 0.08)` and the icon `rgba(0, 0, 0, 0.6)` → `rgba(0, 0, 0, 0.85)`; its parent sidebar item takes `rgba(0, 0, 0, 0.05)` at the same time
- Keyboard focus: a 3px `rgba(97, 87, 234, 0.3)` outline, offset 0

#### Header CTA link
- `#242428` background, `#ffffff` label, 999px pill radius
- 9px × 14px padding, 127×43px; Pretendard 16px/600
- Hover and pressed (2026-09-29): background `#3a3a3f`
- Keyboard focus: unmeasured. The link has no href attribute, so Tab never reaches it

#### Header navigation link
- Transparent, `#000000` label, 999px radius, 6px × 12px padding, 37px tall; Pretendard 16px/400
- Hover and pressed (2026-09-29, on 가격 안내): background `rgba(36, 36, 40, 0.05)`
- Keyboard focus: a 2px `#242428` outline, offset 2px, over the same background. The other four triggers are anchors without href that Tab skips; their focus is unmeasured

#### Header 로그인
- Transparent, `#000000` label, 999px radius, 6px × 12px padding, 37px tall; Pretendard 16px/400
- Default only; not probed. On 2026-09-29 it had no href attribute

#### Section band CTA
- `#242428` background, `#ffffff` label, pill (computed radius 1368.71px)
- 10px × 22px padding, 125×48px; Pretendard 18px/400; six July occurrences
- Default only; not probed

#### Customer-case carousel arrow
- `rgba(255, 255, 255, 0.2)` over the dark media, `#ffffff` icon colour, 9999px radius, 48×48px
- Default only; not probed

#### Demo prompt input
- Transparent, `#0a0b0b` text, 0px × 4px padding, 428×27px; Pretendard 17px/400; `role=combobox`
- Default only; not probed. Its submit button was captured disabled, so it gives no rest value

#### Documentation search trigger
- `rgba(0, 0, 0, 0.05)` background, `rgba(0, 0, 0, 0.85)` text, 12px radius, 11px × 14px padding, 250×44px
- Default only; not probed

Dialogs, toasts, authenticated inbox rows, and error/success patterns are not promoted because current inspectable evidence did not establish them at the required boundary. The Channel Talk messenger widget is excluded.

### Published component roster (60 not measured here)

Bezier publishes **60 components** from `@channel.io/bezier-react`, enumerated by that package's
own public export index (`packages/bezier-react/src/index.ts`, read 2026-09-19). The repository
carries 71 directories under `src/components/`, but five of them — `AlphaTokenProvider`,
`BetaTokenProvider`, `TokenProvider`, `BaseButton`, `BaseTagBadge` — are never exported, so the
package does not publish them. Of the 66 entries the index does export, six are providers and
render utilities rather than components — `AppProvider`, `ThemeProvider`, `FeatureProvider`,
`WindowProvider`, `AutoFocus`, `VisuallyHidden` — and are excluded here. That leaves 60.

None of the 60 is measured in this reference. The stylings above were captured from
`channel.io/kr`, `channel.io/us`, and `docs.channel.io` — marketing and product-documentation
surfaces, a different evidence domain from the Bezier package, as §1 and §3 already set out. They
are not a subset of the list below, and no value, state, or geometry is asserted for any name in
it.

Published without either prefix (44): Avatar, AvatarGroup, Badge, Banner, Box, Button, ButtonGroup, Center, CheckableAvatar, Checkbox, ConfirmModal, Divider, Emoji, FormControl, FormGroup, FormHelperText, FormLabel, Help, Icon, KeyValueItem, ListItem, Modal, NavGroup, NavItem, OutlineItem, Overlay, ProgressBar, RadioGroup, SectionLabel, SegmentedControl, Select, Slider, SmoothCornersBox, Spinner, Stack, Status, Switch, Tabs, Tag, Text, TextArea, TextField, Toast, Tooltip

Alpha-prefixed (13): AlphaAvatar, AlphaAvatarGroup, AlphaButton, AlphaDialogPrimitive, AlphaFloatingButton, AlphaFloatingIconButton, AlphaIconButton, AlphaLoader, AlphaStatusBadge, AlphaToggleButton, AlphaToggleButtonGroup, AlphaToggleEmojiButtonGroup, AlphaTooltipPrimitive

Legacy-prefixed and deprecated (3): LegacyIcon, LegacyStack, LegacyTooltip

The three-way split is the repository's own, not a grouping added here. Bezier's changelog for
2.0.1 records "Remove the `/alpha` directory and add the `Alpha` prefix to alpha components"
(PR #2140, `https://github.com/channel-io/bezier-react/blob/main/packages/bezier-react/CHANGELOG.md`),
so the prefix is how the package marks its alpha track, in the repository's own words. The three
`Legacy*` entries are deprecated by the repository itself: `LegacyIcon` and `LegacyTooltip` carry
`@deprecated` in source, and `LegacyStack`'s own documentation page warns that it "is no longer
supported for updates and may be removed in the next major version." Both tracks are published;
neither should be read as the package's current recommended surface.

## 5. Layout Principles

- Marketing uses wide centered sections with strong vertical breaks and generous 30–45px internal spacing.
- Editorial cards use large 35px corners; documentation controls remain compact at 6–8px.
- Do not transfer marketing's full-pill geometry to uninspected product controls.
- Preserve the separation between marketing composition and documentation density.

## 6. Depth & Elevation

Current promoted surfaces are flat. Marketing cards use background, border, radius, and photography for separation; no reusable shadow token was established. Documentation overlays and authenticated product elevation remain unresolved.

## 7. Do's and Don'ts

### Do
- Use current surface-local evidence and label marketing versus documentation roles.
- Keep warm cream, charcoal actions, and editorial card geometry together on marketing surfaces.
- Preserve Bezier as official system history and implementation context.

### Don't
- Do not call Cobalt the universal current primary without current product evidence.
- Do not substitute a system font, BildV5, or Noto declaration for the loaded surface family.
- Do not generate Inbox components or semantic states from generic SaaS conventions.
- Do not give the hero CTA the header link's `#3a3a3f` hover; the hero fades to opacity 0.85.

## 8. Responsive Behavior

The public marketing system retains full-pill controls and rounded editorial cards while reducing horizontal section padding and tab padding on narrower layouts. Exact private-product breakpoints and mobile-native behavior are unresolved and should not be inferred from the marketing site.

## 9. Agent Prompt Guide

> Build a warm, editorial customer-conversation surface using a white and cream canvas, black text, charcoal full-pill conversion actions, Pretendard marketing typography, and 35px bordered cards. Use the Inter documentation scale only for documentation-like surfaces. Do not add Cobalt product controls, inbox states, product inputs, or dialogs unless a current product source is supplied.

## 10. Voice & Tone

Official Channel Talk writing centers customers, conversations, and practical operational improvement. The tone is direct and optimistic rather than ceremonial: explain what a team can do, why it improves a customer relationship, and where AI removes routine work. Product updates should name the affected workflow, the person who benefits, and the next available action. Support guidance should stay calm and procedural, while brand stories may be warmer and more reflective. Avoid unsupported performance numbers, excessive futurism, and generic “all-in-one revolution” language.

## 11. Brand Narrative

Channel Talk presents customer communication as a durable operating capability rather than a support widget. Official rebrand material describes the visual change as a way to express the company's identity and culture more honestly, while official product updates show the platform continuing to combine messaging operations with AI-assisted service. The public Bezier repository is a separate but complementary signal: Channel has invested in reusable product primitives, even though this reference does not use that repository to fabricate current private-app values. Across these sources, the company consistently frames conversation as the place where support, sales, and long-term customer understanding meet. The visual move toward warmer editorial surfaces supports that human relationship, while the operational product story remains structured around inboxes, configuration, documentation, and AI-assisted work. Reuse should therefore strengthen continuity between people and tools, not flatten every surface into one marketing style.

## 12. Principles

1. **The customer is the answer.** Start from a real conversation or task rather than feature spectacle.
2. **Warmth supports operational clarity.** Editorial cream, photography, and rounded cards humanize a complex service platform.
3. **Evidence domains stay separate.** Marketing, documentation, Bezier, and private product surfaces cannot silently overwrite one another.
4. **AI should remove routine work.** Describe assistance in terms of what people can focus on next, without inventing outcomes.

## 13. Personas

Public product material supports task contexts, not verified biographical personas:
- A support lead reviewing conversations and adopting current AI-assisted operations.
- A frontline agent using product documentation to configure or troubleshoot a customer channel.
- A growth or commerce operator evaluating whether Channel Talk fits an ongoing customer relationship workflow.

Project-specific names, ages, company sizes, locations, and quantitative goals are intentionally unspecified and must come from the product brief rather than this public reference.

## 14. States

The July capture safely observed the marketing tab's selected state; its documentation "pressed" frames were transition frames with no value. The 2026-09-29 live state probe measured hover, pressed and keyboard focus on five controls — the hero CTA (opacity 0.85; no focus change), the outline pill (`rgba(0, 0, 0, 0.04)`; no focus change), the selected customer-case tab (no change in any state), the 가격 안내 nav link (`rgba(36, 36, 40, 0.05)`; a 2px `#242428` outline) and the docs chevron (`rgba(28, 28, 28, 0.08)`; a 3px `rgba(97, 87, 234, 0.3)` outline) — and hover and pressed on two more: the header CTA (`#3a3a3f`) and the unselected 패션 tab (no change). Their keyboard focus is unmeasured because Tab never reaches them. No canonical empty, loading, error, success, disabled, or authenticated Inbox state is promoted.

## 15. Motion & Easing

No reusable current duration or easing token was established by this capture. The six tab expansions prove state change, not a universal animation specification; motion values remain absent. The 2026-09-29 probe read transition declarations on the marketing and documentation controls; none is promoted as a motion token.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://channel.io/kr ; https://channel.io/us ; https://docs.channel.io/updates/en/articles/Notice-Channel-Talk-Major-Updates--b3d45997 ; https://docs.channel.io/help/en/articles/94f34984 ; https://channel.io/kr/blog/articles/rebranding-channeltalk-3aff8113 ; https://github.com/channel-io/bezier-react
**Tier 2 attempts:** getdesign.md/channeltalk and styles.refero.design search; unavailable as positive evidence
**Conflicts unresolved:** none
