---
id: wrtn
name: Wrtn
display_name_kr: 뤼튼
country: KR
category: ai
homepage: "https://wrtn.ai"
primary_color: "#f54211"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128"
verified: "2026-09-30"
added: "2026-06-17"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: product-web, url: "https://wrtn.ai/", inspected: "2026-09-30" }
    - { id: surface-2, kind: product-web, url: "https://wrtn.ai/tools", inspected: "2026-09-30" }
    - { id: surface-3, kind: corporate, url: "https://wrtn.io/", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://wrtn.ai/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://wrtn.ai/tools", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://wrtn.io/", captured: "2026-09-30" }
    - { id: company, kind: official-doc, url: "https://wrtn.io/company/", captured: "2026-09-30" }
    - { id: service-wrtn, kind: official-doc, url: "https://wrtn.io/service-wrtn/", captured: "2026-09-30" }
    - { id: news, kind: official-doc, url: "https://wrtn.io/news/", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.ink": &wbody { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.canvas": *wbody
    "tokens.colors.primary": &wrec { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-interaction-capture=\"tab-4-4\"]", captured: "2026-09-30" }
    "tokens.colors.muted": &wtaboff { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.colors.faint": &wsend { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"17\"]", captured: "2026-09-30" }
    "tokens.colors.surface": &wtrack { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.subtle": &wrole { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"16\"]", captured: "2026-09-30" }
    "tokens.colors.hairline": &wsign { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.colors.corp-ink": &cbody { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::body", captured: "2026-09-30" }
    "tokens.colors.corp-ink-strong": &csvc { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.colors.corp-surface": &cnews { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"8\"]", captured: "2026-09-30" }
    "tokens.colors.corp-muted": &cfoot { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"12\"]", captured: "2026-09-30" }
    "tokens.colors.corp-on-dark": &cdark { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.family.sans": *wbody
    "tokens.typography.family.display": &cdisp { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.body.size": *wbody
    "tokens.typography.body.weight": *wbody
    "tokens.typography.body.use": *wbody
    "tokens.typography.composer-tab.size": &wtabon { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.composer-tab.weight": *wtabon
    "tokens.typography.composer-tab.lineHeight": *wtabon
    "tokens.typography.composer-tab.use": *wtabon
    "tokens.typography.nav-label.size": &wnav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.nav-label.weight": *wnav
    "tokens.typography.nav-label.lineHeight": *wnav
    "tokens.typography.nav-label.use": *wnav
    "tokens.typography.page-title.size": &wpt { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.page-title.weight": *wpt
    "tokens.typography.page-title.lineHeight": *wpt
    "tokens.typography.page-title.use": *wpt
    "tokens.typography.tool-title.size": &wtool { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.tool-title.weight": *wtool
    "tokens.typography.tool-title.lineHeight": *wtool
    "tokens.typography.tool-title.use": *wtool
    "tokens.typography.tool-desc.size": &wtdesc { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.tool-desc.weight": *wtdesc
    "tokens.typography.tool-desc.lineHeight": *wtdesc
    "tokens.typography.tool-desc.use": *wtdesc
    "tokens.typography.caption.size": &wcap { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::p", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *wcap
    "tokens.typography.caption.lineHeight": *wcap
    "tokens.typography.caption.use": *wcap
    "tokens.typography.corp-body.size": *cbody
    "tokens.typography.corp-body.weight": *cbody
    "tokens.typography.corp-body.lineHeight": *cbody
    "tokens.typography.corp-body.use": *cbody
    "tokens.typography.corp-display.size": *cdisp
    "tokens.typography.corp-display.weight": *cdisp
    "tokens.typography.corp-display.lineHeight": *cdisp
    "tokens.typography.corp-display.tracking": *cdisp
    "tokens.typography.corp-display.use": *cdisp
    "tokens.typography.corp-section.size": &csec { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.typography.corp-section.weight": *csec
    "tokens.typography.corp-section.lineHeight": *csec
    "tokens.typography.corp-section.tracking": *csec
    "tokens.typography.corp-section.use": *csec
    "tokens.typography.corp-service.size": *csvc
    "tokens.typography.corp-service.weight": *csvc
    "tokens.typography.corp-service.lineHeight": *csvc
    "tokens.typography.corp-service.use": *csvc
    "tokens.typography.corp-card-title.size": &cct { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h3", captured: "2026-09-30" }
    "tokens.typography.corp-card-title.weight": *cct
    "tokens.typography.corp-card-title.lineHeight": *cct
    "tokens.typography.corp-card-title.tracking": *cct
    "tokens.typography.corp-card-title.use": *cct
    "tokens.typography.corp-nav.size": &cnav { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.corp-nav.weight": *cnav
    "tokens.typography.corp-nav.lineHeight": *cnav
    "tokens.typography.corp-nav.tracking": *cnav
    "tokens.typography.corp-nav.use": *cnav
    "tokens.spacing.pill-x": *wsign
    "tokens.spacing.track": *wtrack
    "tokens.spacing.popover": &wpop { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-09-30" }
    "tokens.spacing.card-x": *cnews
    "tokens.spacing.cta-x": &ccta { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"11\"]", captured: "2026-09-30" }
    "tokens.rounded.sm": &wside { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.rounded.md": &wpopitem { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-interaction-capture=\"dialog-0-1\"]", captured: "2026-09-30" }
    "tokens.rounded.lg": *wpop
    "tokens.rounded.xl": *cnews
    "tokens.rounded.pill": *wsign
    "tokens.rounded.full": *wrole
    "tokens.shadow.glow": *wpop
    "tokens.components.login-button.type": &wlogin { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"7\"]", captured: "2026-09-30" }
    "tokens.components.login-button.bg": *wlogin
    "tokens.components.login-button.border": *wlogin
    "tokens.components.login-button.radius": *wlogin
    "tokens.components.login-button.padding": *wlogin
    "tokens.components.login-button.height": *wlogin
    "tokens.components.login-button.states": *wlogin
    "tokens.components.login-button.use": *wlogin
    "tokens.components.signup-button.type": *wsign
    "tokens.components.signup-button.bg": *wsign
    "tokens.components.signup-button.border": *wsign
    "tokens.components.signup-button.radius": *wsign
    "tokens.components.signup-button.padding": *wsign
    "tokens.components.signup-button.height": *wsign
    "tokens.components.signup-button.states": *wsign
    "tokens.components.signup-button.use": *wsign
    "tokens.components.composer-mode-tabs.type": &wtab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-09-30" }
    "tokens.components.composer-mode-tabs.bg": *wtab
    "tokens.components.composer-mode-tabs.fg": *wtaboff
    "tokens.components.composer-mode-tabs.height": *wtab
    "tokens.components.composer-mode-tabs.font": *wtaboff
    "tokens.components.composer-mode-tabs.selected": *wtabon
    "tokens.components.composer-mode-tabs.states": &wtabsel { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.components.composer-mode-tabs.use": *wtrack
    "tokens.components.recording-action.type": *wrec
    "tokens.components.recording-action.bg": *wrec
    "tokens.components.recording-action.radius": *wrec
    "tokens.components.recording-action.size": *wrec
    "tokens.components.recording-action.shadow": *wrec
    "tokens.components.recording-action.states": *wrec
    "tokens.components.recording-action.use": *wrec
    "tokens.components.composer-textarea.type": &wta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"14\"]", captured: "2026-09-30" }
    "tokens.components.composer-textarea.bg": *wta
    "tokens.components.composer-textarea.fg": *wta
    "tokens.components.composer-textarea.font": *wta
    "tokens.components.composer-textarea.size": *wta
    "tokens.components.composer-textarea.states": { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-interaction-capture=\"tab-3-2\"]", captured: "2026-09-30" }
    "tokens.components.composer-textarea.use": *wta
    "tokens.components.composer-send-button.type": *wsend
    "tokens.components.composer-send-button.bg": *wsend
    "tokens.components.composer-send-button.fg": *wsend
    "tokens.components.composer-send-button.radius": *wsend
    "tokens.components.composer-send-button.padding": *wsend
    "tokens.components.composer-send-button.size": *wsend
    "tokens.components.composer-send-button.disabled": *wsend
    "tokens.components.composer-send-button.states": *wsend
    "tokens.components.composer-send-button.use": *wsend
    "tokens.components.composer-icon-button.type": &wicon { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.components.composer-icon-button.bg": *wicon
    "tokens.components.composer-icon-button.border": *wicon
    "tokens.components.composer-icon-button.radius": *wicon
    "tokens.components.composer-icon-button.padding": *wicon
    "tokens.components.composer-icon-button.size": *wicon
    "tokens.components.composer-icon-button.states": *wicon
    "tokens.components.composer-icon-button.use": *wicon
    "tokens.components.role-chip.type": *wrole
    "tokens.components.role-chip.bg": *wrole
    "tokens.components.role-chip.border": *wrole
    "tokens.components.role-chip.radius": *wrole
    "tokens.components.role-chip.padding": *wrole
    "tokens.components.role-chip.height": *wrole
    "tokens.components.role-chip.states": *wrole
    "tokens.components.role-chip.use": *wrole
    "tokens.components.option-pill.type": &wopt { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-interaction-capture=\"tab-4-2\"]", captured: "2026-09-30" }
    "tokens.components.option-pill.bg": *wopt
    "tokens.components.option-pill.border": *wopt
    "tokens.components.option-pill.radius": *wopt
    "tokens.components.option-pill.padding": *wopt
    "tokens.components.option-pill.height": *wopt
    "tokens.components.option-pill.states": *wopt
    "tokens.components.option-pill.use": *wopt
    "tokens.components.top-icon-button.type": *wside
    "tokens.components.top-icon-button.bg": *wside
    "tokens.components.top-icon-button.radius": *wside
    "tokens.components.top-icon-button.padding": *wside
    "tokens.components.top-icon-button.size": *wside
    "tokens.components.top-icon-button.states": { surface_id: home, source_id: surface-home, method: computed-style-state-sample, selector: "home::[data-omd-capture=\"5\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.top-icon-button.use": *wside
    "tokens.components.popover-menu.type": *wpop
    "tokens.components.popover-menu.bg": *wpop
    "tokens.components.popover-menu.border": *wpop
    "tokens.components.popover-menu.radius": *wpop
    "tokens.components.popover-menu.padding": *wpop
    "tokens.components.popover-menu.shadow": *wpop
    "tokens.components.popover-menu.use": *wpop
    "tokens.components.corp-news-card.type": *cnews
    "tokens.components.corp-news-card.bg": *cnews
    "tokens.components.corp-news-card.fg": *cnews
    "tokens.components.corp-news-card.radius": *cnews
    "tokens.components.corp-news-card.padding": *cnews
    "tokens.components.corp-news-card.size": *cnews
    "tokens.components.corp-news-card.use": *cnews
    "tokens.components.corp-careers-cta.type": *ccta
    "tokens.components.corp-careers-cta.bg": *ccta
    "tokens.components.corp-careers-cta.fg": *ccta
    "tokens.components.corp-careers-cta.radius": *ccta
    "tokens.components.corp-careers-cta.padding": *ccta
    "tokens.components.corp-careers-cta.height": *ccta
    "tokens.components.corp-careers-cta.font": *ccta
    "tokens.components.corp-careers-cta.states": *ccta
    "tokens.components.corp-careers-cta.use": *ccta
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    ink: "#262626"
    primary: "#f54211"
    muted: "#8a8a8a"
    faint: "#c5c5c5"
    canvas: "#ffffff"
    surface: "#f7f7f7"
    subtle: "#f1f1f1"
    hairline: "#d3d3d3"
    corp-ink: "#333333"
    corp-ink-strong: "#1a1a1a"
    corp-surface: "#f5f5f5"
    corp-muted: "#858e95"
    corp-on-dark: "#f6f6f6"
  typography:
    family: { sans: "Pretendard", display: "Manrope" }
    body: { size: 16, weight: 400, use: "wrtn.ai body text (line height computes normal)" }
    composer-tab: { size: 16, weight: 500, lineHeight: 1.5, use: "Composer mode tab labels on wrtn.ai" }
    nav-label: { size: 14, weight: 600, lineHeight: 1.4, use: "Navigation rail labels on wrtn.ai (홈, 도구, 혜택, 저장됨)" }
    page-title: { size: 20, weight: 700, lineHeight: 1.5, use: "Page title on the tools page (도구)" }
    tool-title: { size: 16, weight: 700, lineHeight: 1.0, use: "Tool name on tool cards" }
    tool-desc: { size: 14, weight: 500, lineHeight: 1.4, use: "Tool description and category chip labels on the tools page" }
    caption: { size: 12, weight: 500, lineHeight: 1.5, use: "Footnote on the tools page" }
    corp-body: { size: 16, weight: 400, lineHeight: 1.6, use: "wrtn.io body text" }
    corp-display: { size: 160, weight: 700, lineHeight: 0.88, tracking: -4.8, use: "Oversized section word on wrtn.io (ConsumerServices), Manrope" }
    corp-section: { size: 38, weight: 600, lineHeight: 1.35, tracking: -0.76, use: "wrtn.io section heading (주요 소식)" }
    corp-service: { size: 34, weight: 700, lineHeight: 1.4, use: "Service names on wrtn.io (뤼튼, 크랙, 캬라푸)" }
    corp-card-title: { size: 20, weight: 600, lineHeight: 1.4, tracking: -0.2, use: "News card headline on wrtn.io" }
    corp-nav: { size: 16, weight: 500, lineHeight: 1.5, tracking: -0.16, use: "wrtn.io top navigation" }
  spacing: { pill-x: 20, track: 6, popover: 12, card-x: 24, cta-x: 50 }
  rounded: { sm: 8, md: 12, lg: 16, xl: 24, pill: 36, full: 999 }
  shadow:
    glow: "rgba(0, 0, 0, 0.1) 0px 0px 15px 0px"
  components:
    login-button: { type: button, bg: "#262626", border: "1px solid #262626", radius: "36px", padding: "0px 20px", height: "36px", states: "rest only; no state frame", use: "Header 로그인 link on wrtn.ai at home::[data-omd-capture=\"7\"], 78 x 36; the anchor computes #262626 text on its own #262626 fill, so the visible label sits in a child that was not captured and no label colour or font is claimed; styles were read without following the link" }
    signup-button: { type: button, bg: "transparent", border: "1px solid #d3d3d3", radius: "36px", padding: "0px 20px", height: "36px", states: "rest only; no state frame", use: "Header 무료로 회원가입 link on wrtn.ai at home::[data-omd-capture=\"6\"], 130 x 36; label colour and font are not claimed for the same reason as the login pill; never followed" }
    composer-mode-tabs: { type: tab, bg: "transparent", fg: "#8a8a8a", height: "34px", font: "16px / 500 / 24px Pretendard", selected: "label #262626 at 500 (capture 9)", states: "selected variant read from rest values (capture 9 against 10-12); the collector selected three of the tabs in turn and each became aria-selected (interactions tab-2 to tab-4); the track's focus frame matched its rest values within the compared scope, so no focus value is declared", use: "Mode tabs (채팅, AI 탐지방어, 유튜브 요약, 실시간 녹음) above the home composer, inside a #f7f7f7 track with 300px radius and 6px padding (466 x 46) at home::[data-omd-capture=\"8\"]; the tab buttons are transparent and the label colour sits on the inner text" }
    recording-action: { type: button, bg: "#f54211", radius: "60px", size: "60px x 60px", shadow: "rgba(0, 0, 0, 0.1) 0px 0px 15px 0px", states: "rest only; it appeared when the collector selected the 실시간 녹음 tab (interaction tab-4); no pointer frame", use: "Round primary action in the 실시간 녹음 (live recording) panel of the home composer at home::[data-omd-interaction-capture=\"tab-4-4\"]; its icon was not captured, so no icon colour is claimed" }
    composer-textarea: { type: input, bg: "transparent", fg: "#262626", font: "16px / 400 / 24px Pretendard", size: "686px x 24px", states: "rest; in the 유튜브 요약 panel the field grows to 98px tall (interaction tab-3-2); the placeholder was not captured", use: "Chat composer text field on wrtn.ai at home::[data-omd-capture=\"14\"]" }
    composer-send-button: { type: button, bg: "#f1f1f1", fg: "#c5c5c5", radius: "100%", padding: "4px", size: "34px x 34px", disabled: "bg #f1f1f1, icon colour #c5c5c5 while the composer is empty", states: "disabled at rest; the enabled colours were not captured", use: "Send button at the right of the composer toolbar at home::[data-omd-capture=\"17\"]" }
    composer-icon-button: { type: button, bg: "#ffffff", border: "1px solid #f1f1f1", radius: "100%", padding: "4px", size: "32px x 32px", states: "rest only; no state frame", use: "Round icon button at the left of the composer toolbar at home::[data-omd-capture=\"15\"]" }
    role-chip: { type: button, bg: "transparent", border: "1px solid #f1f1f1", radius: "999px", padding: "4px 6px 4px 8px", height: "32px", states: "rest only; no state frame", use: "역할 chip in the composer toolbar at home::[data-omd-capture=\"16\"], 88 x 32" }
    option-pill: { type: button, bg: "transparent", border: "1px solid #f1f1f1", radius: "999px", padding: "6px 8px", height: "32px", states: "rest only; each declares aria-haspopup=dialog", use: "Two option pills in the 실시간 녹음 panel at home::[data-omd-interaction-capture=\"tab-4-2\"], 76 x 32" }
    top-icon-button: { type: button, bg: "transparent", radius: "8px", padding: "4px", size: "32px x 32px", states: "rest captured; its hover and pressed frames both read rgba(0, 0, 0, 0.1), but it is a single element with no sibling to agree, so no state value is declared", use: "Icon button at the top of wrtn.ai at home::[data-omd-capture=\"5\"]" }
    popover-menu: { type: card, bg: "#ffffff", border: "1px solid #f1f1f1", radius: "16px", padding: "12px", shadow: "rgba(0, 0, 0, 0.1) 0px 0px 15px 0px", use: "Popover opened during the collector's dialog pass (dialog-0-0 and dialog-1-0, 153 x 127); items are 127 x 32 with 12px radius and 6px 8px padding; the trigger was not recorded" }
    corp-news-card: { type: card, bg: "#f5f5f5", fg: "#333333", radius: "24px", padding: "20px 24px 24px", size: "363px x 187px", use: "News card (a.news-small-card) on wrtn.io at surface-3::[data-omd-capture=\"8\"]; headline 20px / 600 / 28px #333333 with -0.2px tracking" }
    corp-careers-cta: { type: button, bg: "oklab(0.999994 0.0000455678 0.0000200868 / 0.9)", fg: "#333333", radius: "40px", padding: "16px 50px", height: "56px", font: "16px / 600 / 24px Pretendard", states: "rest only; no state frame", use: "채용공고 보러가기 over the dark careers band on wrtn.io at surface-3::[data-omd-capture=\"11\"], 213 x 56; the fill is white at 0.9 alpha over a 17px backdrop blur (class names bg-white/90 and backdrop-blur-[17px])" }
  components_harvested: true
---

# Design System Inspiration of Wrtn

## 1. Visual Theme & Atmosphere

Wrtn (뤼튼) is the consumer AI service of Wrtn Technologies ((주)뤼튼테크놀로지스), headquartered at BLOCK77 in Seocho, Seoul, with an office in Toranomon, Tokyo; its CEO is 이세영. The company's own history page tells the story year by year: founded in April 2021 with the aim of making AI part of everyday life; in October 2022 it launched '뤼튼 카피라이팅', which it calls Korea's first generative-AI service, after writing its AI ethics guidelines first; in 2023 it made the service free for everyone and set up a Japanese entity; in 2024 it reached five million monthly users and launched the AI entertainment service now called 크랙; in 2025 it formed the 뤼튼 AX CIC for corporate and public-sector AI transformation; and its 2026 entry lists what it is now pursuing abroad: ¥1 billion in annual recurring revenue for the Japanese story service 캬라푸, a US AI-entertainment launch and global expansion of the AX CIC. In August 2026 it announced a ₩100 billion Series C, and in September it named underwriters for an IPO. The corporate site's tagline is "Bring AGI Close to People".

The product at wrtn.ai opens logged out on a chat composer. The chrome is near-monochrome: `#262626` ink on white `#ffffff`, a vertical navigation rail, header pills (a solid `#262626` 로그인 and a `#d3d3d3`-outlined 무료로 회원가입), mode tabs in a `#f7f7f7` pill track, and round, hairline-edged composer controls in `#f1f1f1`. Unselected tab labels drop to `#8a8a8a`. The one saturated colour is `#f54211`: it fills the round 60px action of the composer's 실시간 녹음 (live recording) mode. Popovers float on a soft 15px glow; everything else is flat.

The corporate site, wrtn.io, is a separate evidence domain with its own editorial register: `#333333` text, `#f5f5f5` news cards at a 24px radius, service names at 34px / 700 in `#1a1a1a`, and an oversized Manrope word — "ConsumerServices" at 160px with -4.8px tracking. Both sites set text in Pretendard. The brand renewal behind the current identity was developed with outside studios: Manual Graphics, which built the corporate site, describes the concept as "Inspire Economy", a circle motif, per-menu colour coding and a main colour it names Inspire Red, emphasised at the moment of interaction.

**Key Characteristics:**
- Near-monochrome product chrome: `#262626` on `#ffffff`, `#f7f7f7` and `#f1f1f1` greys, `#8a8a8a` secondary text
- One saturated action colour, `#f54211`, on the live-recording action
- Pills and circles: 36px header pills, a 300px tab track, 999px chips, 100% round composer buttons
- Hairline edges (`#d3d3d3`, `#f1f1f1`) instead of fills for secondary controls
- A single soft glow, `rgba(0, 0, 0, 0.1) 0px 0px 15px 0px`, on popovers and the recording action
- Pretendard throughout; Manrope only for the corporate site's oversized display word
- A separate corporate register on wrtn.io: `#333333` ink, `#f5f5f5` 24px cards, bold 34px service names

## Primary tasks

- Ask the assistant anything from the home composer
- Summarise a YouTube video, document or long text
- Record a lecture or meeting and get a live summary
- Draft an essay, cover letter or book report with a writing tool
- Generate marketing copy and social posts

## 2. Color Palette & Roles

Every token below was read by the deterministic collector on 2026-09-30 from wrtn.ai, wrtn.ai/tools and wrtn.io.

### Primary
- **Recording Red** (`#f54211`): The fill of the 60px round action in the home composer's 실시간 녹음 mode. It is the primary because it is the only saturated fill the captured product pages render in a primary-action role: exactly one element in the bundle computes `backgroundColor: rgb(245, 66, 17)`, reached when the collector selected that mode's tab. Every other action on wrtn.ai is monochrome — the login pill is `#262626`. Manual Graphics calls Wrtn's main colour "Inspire Red" but publishes no value; the token is the measured hex.

### Product (wrtn.ai)
- **Ink** (`#262626`): Body text, selected tab labels, the composer text and the login pill's fill.
- **Muted** (`#8a8a8a`): Unselected tab labels, tool descriptions and footnotes.
- **Faint** (`#c5c5c5`): The icon colour of the disabled send button.
- **Canvas** (`#ffffff`): Page background, popovers and the round composer icon button.
- **Surface** (`#f7f7f7`): The pill track behind the composer mode tabs.
- **Subtle** (`#f1f1f1`): Hairline borders on chips, pills, popovers and the icon button; the fill of the disabled send button.
- **Hairline** (`#d3d3d3`): The 1px border of the sign-up pill.

### Corporate (wrtn.io)
- **Corporate Ink** (`#333333`): Body text, headings, navigation, news-card text and the careers action label.
- **Corporate Strong** (`#1a1a1a`): Consumer service names and their taglines.
- **Corporate Surface** (`#f5f5f5`): News cards.
- **Corporate Muted** (`#858e95`): Footer links and company details.
- **Corporate On Dark** (`#f6f6f6`): Business-service names set on the dark band.

### Not carried forward
- The June record's three pastel "Open Space" menu tints, its mid-grey muted text colour, the near-black tool-chip border and the 12px accent dot were not observed on the three captured pages, so none is a token here (values in `.verification.md`).

## 3. Typography Rules

### Font Family
- **Live surface use**: `Pretendard` — `loaded / high`, 180 observed uses across wrtn.ai and wrtn.io; the bundle's Pretendard faces resolve to the v1.3.9 static files at `cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/`.
- **Live surface use (corporate only)**: `Manrope` — 2 observed uses on wrtn.io (the 160px display word and a 24px / 600 label), from fonts.gstatic.com.
- **Declared only (no visible use)**: `slick` and `swiper-icons`, carousel icon fonts, 0 uses.
- **Named in the stack but not loaded**: wrtn.ai's body stack ends in `IBMPlexMono-Regular` and wrtn.io's includes `Noto Sans JP`; no face with either name loaded, so neither is a token.
- **Licence**: no licence page for Pretendard or Manrope was opened this session; none is stated here.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Corporate Display | Manrope | 160px | 700 | 140.8px (0.88) | -4.8px | wrtn.io "ConsumerServices" |
| Corporate Section | Pretendard | 38px | 600 | 51.3px (1.35) | -0.76px | wrtn.io "주요 소식" |
| Corporate Service | Pretendard | 34px | 700 | 47.6px (1.4) | normal | wrtn.io service names |
| Page Title | Pretendard | 20px | 700 | 30px (1.5) | normal | Tools page "도구" |
| Corporate Card Title | Pretendard | 20px | 600 | 28px (1.4) | -0.2px | wrtn.io news cards |
| Composer Tab | Pretendard | 16px | 500 | 24px (1.5) | normal | Composer mode tabs |
| Tool Title | Pretendard | 16px | 700 | 16px (1.0) | normal | Tool cards |
| Body | Pretendard | 16px | 400 | normal | normal | wrtn.ai body |
| Corporate Body | Pretendard | 16px | 400 | 25.6px (1.6) | normal | wrtn.io body |
| Corporate Nav | Pretendard | 16px | 500 | 24px (1.5) | -0.16px | wrtn.io navigation |
| Nav Label | Pretendard | 14px | 600 | 19.6px (1.4) | normal | wrtn.ai navigation rail |
| Tool Description | Pretendard | 14px | 500 | 19.6px (1.4) | normal | Tool cards, category chips |
| Caption | Pretendard | 12px | 500 | 18px (1.5) | normal | Tools page footnote |

### Principles
- **Quiet product, loud company**: wrtn.ai stays at 12–20px with 500–700 used for labels and titles; wrtn.io goes to 34–38px and a 160px Manrope word.
- **Negative tracking only on the corporate site**: -0.16px to -0.76px on wrtn.io headings and navigation, -4.8px on the display word; wrtn.ai uses normal tracking.

## 4. Component Stylings

### Buttons

**Login pill**
- Background: `#262626`
- Border: 1px solid `#262626`
- Radius: 36px
- Padding: 0px 20px
- Height: 36px
- States: rest only
- Use: header 로그인 on wrtn.ai, 78 × 36; the label sits in an uncaptured child, so its colour is not claimed (read, never followed)

**Sign-up pill**
- Background: transparent
- Border: 1px solid `#d3d3d3`
- Radius: 36px
- Padding: 0px 20px
- Height: 36px
- States: rest only
- Use: header 무료로 회원가입, 130 × 36 (read, never followed)

**Recording action**
- Background: `#f54211`
- Radius: 60px
- Size: 60 × 60
- Shadow: `rgba(0, 0, 0, 0.1) 0px 0px 15px 0px`
- States: rest only; shown when the 실시간 녹음 tab is selected
- Use: the round primary action of the composer's live-recording mode

**Send button (disabled)**
- Background: `#f1f1f1`
- Icon: `#c5c5c5`
- Radius: 100%
- Padding: 4px
- Size: 34 × 34
- Disabled: `#f1f1f1` fill with a `#c5c5c5` icon while the composer is empty
- Use: right end of the composer toolbar; the enabled colours were not captured

**Composer icon button**
- Background: `#ffffff`
- Border: 1px solid `#f1f1f1`
- Radius: 100%
- Padding: 4px
- Size: 32 × 32
- States: rest only
- Use: left end of the composer toolbar

**Role chip and option pills**
- Background: transparent
- Border: 1px solid `#f1f1f1`
- Radius: 999px
- Padding: 4px 6px 4px 8px (역할 chip, 88 × 32); 6px 8px (option pills, 76 × 32)
- Height: 32px
- States: rest only; the option pills declare `aria-haspopup=dialog`
- Use: 역할 in the chat toolbar; two option pills in the live-recording panel

**Top icon button**
- Background: transparent
- Radius: 8px
- Padding: 4px
- Size: 32 × 32
- States: hover and pressed frames both read `rgba(0, 0, 0, 0.1)` on this one element; with no sibling to agree, no state value is declared

**Corporate careers action (wrtn.io)**
- Background: `oklab(0.999994 0.0000455678 0.0000200868 / 0.9)` — white at 0.9 over a 17px backdrop blur
- Text: `#333333`
- Radius: 40px
- Padding: 16px 50px
- Height: 56px
- Font: 16px / 600 / 24px Pretendard, -0.16px tracking
- States: rest only
- Use: 채용공고 보러가기 on the dark careers band, 213 × 56

### Tabs

**Composer mode tabs**
- Track: `#f7f7f7`, radius 300px, padding 6px, 466 × 46
- Tab: transparent, 34px tall
- Label: `#8a8a8a`, 16px / 500 / 24px Pretendard
- Selected: label `#262626` at 500
- States: selected read from rest values; the collector selected three tabs in turn and each became `aria-selected`; the track's focus frame matched its rest values within the compared scope, so no focus value is declared
- Use: 채팅, AI 탐지방어, 유튜브 요약, 실시간 녹음 above the composer

### Inputs & Forms

**Composer text field**
- Background: transparent
- Text: `#262626`
- Font: 16px / 400 / 24px Pretendard
- Size: 686 × 24, growing to 98px tall in the 유튜브 요약 mode
- States: rest; the placeholder was not captured
- Use: the chat composer on wrtn.ai

### Cards & Containers

**Popover menu**
- Background: `#ffffff`
- Border: 1px solid `#f1f1f1`
- Radius: 16px
- Padding: 12px
- Shadow: `rgba(0, 0, 0, 0.1) 0px 0px 15px 0px`
- Use: popover opened during the collector's dialog pass, 153 × 127; items 127 × 32 with 12px radius and 6px 8px padding

**Tool cards (wrtn.ai/tools)**
- The card links are transparent 231 × 148 blocks: a 16px / 700 tool name in `#262626` over a 14px / 500 description in `#8a8a8a`. The selected category chip's label is white on a fill that was not captured, so the chip fill is not claimed.

**Corporate news card (wrtn.io)**
- Background: `#f5f5f5`
- Text: `#333333`
- Radius: 24px
- Padding: 20px 24px 24px
- Size: 363 × 187
- Use: news cards; headline 20px / 600 / 28px `#333333` with -0.2px tracking

---

**Verified:** 2026-09-30 (deterministic collector capture of two logged-out wrtn.ai pages and the wrtn.io corporate home, plus first-party context)
**Tier 1 sources:** https://wrtn.ai/ ; https://wrtn.ai/tools ; https://wrtn.io/ ; https://wrtn.io/company/ ; https://wrtn.io/service-wrtn/ ; https://wrtn.io/news/
**Tier 2 sources:** getdesign.md/wrtn (HTTP 200, "wrtn — 0 DESIGN.md files", "No designs found") and styles.refero.design/?q=wrtn (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Header pills: 20px horizontal padding at 36px height
- Tab track: 6px inner padding
- Chips and pills: 4px 6px 4px 8px, or 6px 8px, at 32px height
- Popover: 12px padding
- Corporate cards: 20px 24px 24px; corporate action: 16px 50px

### Grid & Container
- wrtn.ai: a narrow vertical navigation rail (40px-wide items with 14px labels) beside a centred 720px composer column; the mode tabs sit above the text field and the toolbar below it.
- wrtn.ai/tools: a grid of 231 × 148 tool cards under the 20px "도구" title and a row of category chips (전체, 즐겨찾기, 취업, 부업, 학업, 업무).
- wrtn.io: full-width editorial bands — a row of news cards, the 160px Manrope word, 565 × 540 media panels with 24px corners, and a dark careers band.

### Whitespace Philosophy
- **Quiet product**: the logged-out home is little more than the composer; the page text totals under a hundred characters.
- **Editorial company site**: wrtn.io spends whitespace around oversized type and large media panels.

### Border Radius Scale
- 8px: small icon button
- 12px: popover items
- 16px: popover
- 24px: corporate cards and media panels
- 36px / 40px: header pills / corporate action
- 60px, 100%, 300px, 999px: recording action, round composer buttons, tab track, chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, navigation, tabs, chips, cards |
| Tint | `#f7f7f7` / `#f1f1f1` / `#f5f5f5` fill | Tab track, disabled send, corporate cards |
| Hairline | 1px solid `#f1f1f1` or `#d3d3d3` | Chips, pills, popover, sign-up pill |
| Glow | `rgba(0, 0, 0, 0.1) 0px 0px 15px 0px` | Popovers and the recording action |

**Shadow Philosophy**: Wrtn is flat. The single glow lifts the things that float or demand action — popovers and the red recording action — and nothing else carries a shadow.

## 7. Do's and Don'ts

### Do
- Keep the product chrome monochrome: `#262626` on `#ffffff`, with `#f7f7f7` and `#f1f1f1` greys
- Reserve `#f54211` for the primary action of a mode, like the live-recording button
- Use pills and circles for controls: 36px header pills, 999px chips, round composer buttons
- Draw secondary controls with 1px `#f1f1f1` or `#d3d3d3` hairlines instead of fills
- Keep the glow for floating surfaces and the primary action only
- Keep the corporate register (`#333333`, `#f5f5f5` 24px cards, bold 34–38px headings) on the company site

### Don't
- Don't spread `#f54211` across chrome; the captured product uses it once
- Don't add the retired pastel menu tints as if the product used them
- Don't put shadows on cards, chips or tabs
- Don't use Manrope in product UI; it appears only in the corporate display word
- Don't invent enabled or hover colours for controls that recorded none

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. wrtn.io's class names include responsive variants (`text-[28px] lg:text-[38px]`, `md:h-7`), so its headings shrink below the large breakpoint; no breakpoint was measured.

### Touch Targets
- Header pills: 36px tall
- Composer buttons and chips: 32–34px
- Recording action: 60 × 60
- Corporate action: 56px tall

### Collapsing Strategy
- Not measured.

### Image Behavior
- wrtn.io's media panels are 565 × 540 with 24px corners and no shadow.

## 9. Agent Prompt Guide

### Quick Color Reference
- Product text and dark pill: `#262626`; secondary text `#8a8a8a`; disabled icon `#c5c5c5`
- Page `#ffffff`; tab track `#f7f7f7`; hairlines and disabled fill `#f1f1f1`; sign-up outline `#d3d3d3`
- Primary action: `#f54211`
- Corporate: text `#333333`, strong `#1a1a1a`, cards `#f5f5f5`, footer `#858e95`, on dark `#f6f6f6`

### Example Component Prompts
- "Create Wrtn header pills: a solid `#262626` 로그인 pill and a transparent 무료로 회원가입 pill with a 1px `#d3d3d3` border, both 36px tall with 36px radius and 0 20px padding."
- "Build composer mode tabs: a `#f7f7f7` track with 300px radius and 6px padding; transparent 34px tabs with 16px / 500 Pretendard labels, `#8a8a8a` unselected and `#262626` selected."
- "Add the recording action: a 60px circle filled `#f54211` with `rgba(0, 0, 0, 0.1) 0px 0px 15px 0px`."
- "Design a wrtn.io news card: `#f5f5f5`, 24px radius, 20px 24px 24px padding; headline 20px / 600 Pretendard, `#333333`, -0.2px tracking."

### Iteration Guide
1. Monochrome product chrome; `#f54211` only for a mode's primary action
2. Pills and circles for controls; hairlines for secondary edges
3. One glow, for floating surfaces
4. Pretendard everywhere in product; Manrope only for the corporate display word
5. Keep wrtn.ai and wrtn.io registers apart

---

## 10. Voice & Tone

Wrtn's voice is **friendly, plain and generous** — AI presented as everyday help, free to use, rather than a technical tool. Product copy is short and functional; the reward pages turn playful; the company site speaks in confident, factual scale.

| Context | Tone |
|---|---|
| Product positioning | Open and free. "AI 글쓰기, AI 이미지 생성 등 전세계 최신 AI를 무료로." |
| Navigation and modes | Plain nouns. "홈", "도구", "혜택", "저장됨"; "채팅", "유튜브 요약", "실시간 녹음". |
| Tool descriptions | Promise-led and concrete. "유튜브, 문서, 웹사이트, 긴 글 무엇이든 완벽하게 요약해 주는 기능". |
| Rewards | Casual, spoken. "나랑 섬 키우면 미션마다 추가 캐시 줄게!" |
| Corporate | Confident and factual. "500만명이 선택한 대한민국 대표 AI 서비스". |
| Careers | Collaborative. "AI 시대를 함께 선도할 인재를 찾습니다." |

**Voice samples (verbatim, opened 2026-09-30):**
- "AI 글쓰기, AI 이미지 생성 등 전세계 최신 AI를 무료로" — wrtn.ai meta description.
- "500만명이 선택한 대한민국 대표 AI 서비스" — wrtn.io service line.
- "매일 쓰면 쓸수록 나를 잘 이해하는 AI 서포터" — wrtn.io 뤼튼 service page.
- "Bring AGI Close to People" — wrtn.io meta description.

**Forbidden register**: fear-of-missing-out pressure, jargon-heavy AI hype, cold instruction tone, stacked exclamation marks.

## 11. Brand Narrative

Wrtn Technologies describes its path as a series of decisions to bring AI into daily life. In 2021, when AI still felt like a laboratory technology, it was founded to make AI something many people use naturally. In 2022, before ChatGPT, it launched 뤼튼 카피라이팅 and set AI ethics guidelines before launch. In 2023 it chose to let people experience AI for free, ran its GAA conference and opened a Japanese entity. In 2024 it pushed usability and answer quality, launched 뤼튼 캐릭터챗 (now 크랙) and reached five million monthly users. In 2025 its code-agent and internal-agent teams and the 뤼튼 AX CIC took on AI transformation for companies and government, alongside an AI-literacy business (뤼튼 Edu). For 2026 it lists global goals: 캬라푸's ¥1 billion ARR in Japan, a US AI-entertainment service provisionally called Crack Global, and the AX CIC abroad.

The consumer product has grown from writing tools into an everyday "AI supporter" that, the service page says, lets people talk for free with the latest models — GPT, Gemini, Claude — alongside 뤼튼 스피킹, AI 밈 and AI 사주 운세. The brand renewal behind today's look was a collaboration: according to Manual Graphics, BAT developed the identity and Manual Graphics built the website, around the concept "Inspire Economy", a circle motif that opens a space of possibility, per-menu colour coding, and Inspire Red with the circle emphasised on interaction so that Wrtn feels like a guide to joy and inspiration. On the captured product pages, that idea survives as a monochrome canvas with one red, round action.

## 12. Principles

1. **AI for everyone, free.** *UI implication:* plain labels, an open composer and no gate before the first question.
2. **One spark.** *UI implication:* `#f54211` marks a mode's primary action; the rest stays monochrome.
3. **Round and open.** *UI implication:* pills, circles and hairlines rather than boxes and fills. (An editorial reading of the circle motif Manual Graphics describes.)
4. **Float only what floats.** *UI implication:* one glow, for popovers and the primary action.
5. **Quiet product, confident company.** *UI implication:* keep wrtn.ai small and calm; let wrtn.io carry the large type.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Wrtn user segments (Korean students, marketers and first-time AI users of a free consumer app), not individual people.*

**김민서, 22, 서울.** A university student who records lectures with 실시간 녹음 and turns them into summaries, then drafts reports with the writing tools. Chose Wrtn because it is free and in Korean.

**이준호, 34, 판교.** A marketer who uses 카피라이팅 and SNS 게시물 for first drafts. Likes that the interface stays out of the way.

**박지은, 41, 부산.** A small-business owner trying AI for the first time. Trusts Wrtn because it presents itself as Korea's representative AI service and the design feels calm rather than technical.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (composer mode tabs)** | Label `#262626` at 500; unselected labels `#8a8a8a`. Selecting a tab moves `aria-selected` and swaps the panel. |
| **Disabled (send)** | `#f1f1f1` fill with a `#c5c5c5` icon while the composer is empty. |
| **Disabled (summary submit)** | In the 유튜브 요약 panel, a 94 × 32 submit with 32px radius stays disabled on `#f1f1f1` with `#262626` text. |
| **Popover open** | White popover, 1px `#f1f1f1`, 16px radius, 12px padding, `rgba(0, 0, 0, 0.1) 0px 0px 15px 0px`. |
| **Not declared** | The top icon button's hover and pressed frames (`rgba(0, 0, 0, 0.1)`, one element); the tab track's focus frame, unchanged within the compared scope. |

Focus rings, error, empty, loading and success treatments were not captured and are not described.

## 15. Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. wrtn.io loads carousel libraries (slick and Swiper icon fonts are declared) and Manual Graphics describes circle-motif motion in the site's hero, which shows motion exists without timing it. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/wrtn.json (capturedAt 2026-09-30), deterministic collector, 1440x900, logged out: wrtn.ai (the logged-out home renders the composer; it does not redirect to login), wrtn.ai/tools, wrtn.io (corporate).
- §1, §10, §11 context: wrtn.io/company/, wrtn.io/service-wrtn/, wrtn.io/news/, opened headless 2026-09-30.
- Third-party context, labelled as such: manualgraphics.com/projects/wrtn-technologies-website/ (the agency's project page; opened 2026-09-30). The BAT case study (batcrew.co.kr) failed to load headless and was not retried or cited.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
