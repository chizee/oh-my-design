---
id: naver
name: Naver
country: KR
category: consumer-tech
homepage: "https://www.naver.com"
primary_color: "#03c75a"
logo:
  type: simpleicons
  slug: naver
verified: "2026-07-11"
omd: "0.1"
ds:
  name: NAVER Brand Resource
  url: "https://www.navercorp.com/company/brandGuide"
  type: brand
  description: "Official NAVER logo, color, and usage guidance; it is not a public product design system."
verification_v2:
  schema: 2
  checked: "2026-09-29"
  surfaces:
    - { id: portal-home, kind: product, url: "https://www.naver.com/", inspected: "2026-07-11" }
    - { id: search-results, kind: product, url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%9E%90%EC%9D%B8", inspected: "2026-07-11" }
    - { id: corporate-brand, kind: brand, url: "https://www.navercorp.com/company/brandGuide", inspected: "2026-07-11" }
  sources:
    - { id: portal-live, kind: product-surface, url: "https://www.naver.com/", captured: "2026-07-11" }
    - { id: search-live, kind: product-surface, url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%9E%90%EC%9D%B8", captured: "2026-07-11" }
    - { id: brand-live, kind: product-surface, url: "https://www.navercorp.com/company/brandGuide", captured: "2026-07-11" }
    - { id: brand-guide, kind: official-doc, url: "https://www.navercorp.com/company/brandGuide", captured: "2026-07-11" }
    - { id: company-about, kind: official-doc, url: "https://www.navercorp.com/company/about", captured: "2026-07-11" }
    - { id: naver-probe, kind: product-surface, url: "https://www.naver.com/", captured: "2026-09-29" }
  claims:
    "tokens.colors.brand": &brand_doc { surface_id: corporate-brand, source_id: brand-guide, method: official-doc, captured: "2026-07-11" }
    "tokens.colors.canvas": &portal_style { surface_id: portal-home, source_id: portal-live, method: computed-style, captured: "2026-07-11" }
    "tokens.colors.portal-ink": *portal_style
    "tokens.colors.search-ink": &search_style { surface_id: search-results, source_id: search-live, method: computed-style, captured: "2026-07-11" }
    "tokens.colors.search-link": *search_style
    "tokens.colors.search-muted": *search_style
    "tokens.colors.hairline": *search_style
    "tokens.colors.corporate-ink": &brand_style { surface_id: corporate-brand, source_id: brand-live, method: computed-style, captured: "2026-07-11" }
    "tokens.colors.corporate-muted": *brand_style
    "tokens.colors.login-fill": { surface_id: portal-home, source_id: portal-live, method: computed-style, selector: "home::[data-omd-capture=\"87\"]", captured: "2026-07-11" }
    "tokens.typography.family.portal": *portal_style
    "tokens.typography.family.corporate": *brand_style
    "tokens.typography.portal-search.size": *portal_style
    "tokens.typography.portal-search.weight": *portal_style
    "tokens.typography.portal-search.lineHeight": *portal_style
    "tokens.typography.portal-search.tracking": *portal_style
    "tokens.typography.portal-ui.size": *portal_style
    "tokens.typography.portal-ui.weight": *portal_style
    "tokens.typography.portal-ui.lineHeight": *portal_style
    "tokens.typography.portal-ui.tracking": *portal_style
    "tokens.typography.search-tab.size": *search_style
    "tokens.typography.search-tab.weight": *search_style
    "tokens.typography.search-tab.lineHeight": *search_style
    "tokens.typography.search-tab.tracking": *search_style
    "tokens.typography.search-title.size": *search_style
    "tokens.typography.search-title.weight": *search_style
    "tokens.typography.search-title.lineHeight": *search_style
    "tokens.typography.search-title.tracking": *search_style
    "tokens.typography.corporate-tab.size": *brand_style
    "tokens.typography.corporate-tab.weight": *brand_style
    "tokens.typography.corporate-tab.lineHeight": *brand_style
    "tokens.typography.corporate-tab.tracking": *brand_style
    "tokens.spacing.xs": *search_style
    "tokens.spacing.sm": *portal_style
    "tokens.spacing.md": *search_style
    "tokens.spacing.lg": *portal_style
    "tokens.spacing.xl": *search_style
    "tokens.rounded.sm": *portal_style
    "tokens.rounded.md": *search_style
    "tokens.rounded.lg": *search_style
    "tokens.rounded.full": *portal_style
    "tokens.components.search-input.type": &portal_search { surface_id: portal-home, source_id: portal-live, method: computed-style, captured: "2026-07-11" }
    "tokens.components.search-input.bg": *portal_search
    "tokens.components.search-input.fg": *portal_search
    "tokens.components.search-input.radius": *portal_search
    "tokens.components.search-input.height": *portal_search
    "tokens.components.search-input.padding": *portal_search
    "tokens.components.search-input.font": *portal_search
    "tokens.components.search-input.states": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "input#query.search_input and six ancestors at :focus-visible, Tab stop 15", captured: "2026-09-29" }
    "tokens.components.search-input.use": *portal_search
    "tokens.components.search-submit.type": *portal_search
    "tokens.components.search-submit.bg": *portal_search
    "tokens.components.search-submit.fg": *portal_search
    "tokens.components.search-submit.radius": *portal_search
    "tokens.components.search-submit.height": *portal_search
    "tokens.components.search-submit.padding": *portal_search
    "tokens.components.search-submit.states": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "button#search-ai-tab-button at :hover, :active and :focus-visible", captured: "2026-09-29" }
    "tokens.components.search-submit.hover": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "button#search-ai-tab-button descendant layers at :hover", captured: "2026-09-29" }
    "tokens.components.search-submit.pressed": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "button#search-ai-tab-button descendant layers at :active", captured: "2026-09-29" }
    "tokens.components.search-submit.focus": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "button#search-ai-tab-button descendant layers at :focus-visible, Tab stop 16", captured: "2026-09-29" }
    "tokens.components.search-submit.use": *portal_search
    "tokens.components.serp-tab.type": &serp_component { surface_id: search-results, source_id: search-live, method: computed-style, captured: "2026-07-11" }
    "tokens.components.serp-tab.bg": *serp_component
    "tokens.components.serp-tab.fg": *serp_component
    "tokens.components.serp-tab.radius": *serp_component
    "tokens.components.serp-tab.padding": *serp_component
    "tokens.components.serp-tab.font": *serp_component
    "tokens.components.serp-tab.hover": *serp_component
    "tokens.components.serp-tab.pressed": *serp_component
    "tokens.components.serp-tab.states": *serp_component
    "tokens.components.serp-tab.use": *serp_component
    "tokens.components.filter-chip.type": *serp_component
    "tokens.components.filter-chip.bg": *serp_component
    "tokens.components.filter-chip.fg": *serp_component
    "tokens.components.filter-chip.border": *serp_component
    "tokens.components.filter-chip.radius": *serp_component
    "tokens.components.filter-chip.padding": *serp_component
    "tokens.components.filter-chip.font": *serp_component
    "tokens.components.filter-chip.use": *serp_component
    "tokens.components.result-card.type": *serp_component
    "tokens.components.result-card.bg": *serp_component
    "tokens.components.result-card.fg": *serp_component
    "tokens.components.result-card.radius": *serp_component
    "tokens.components.result-card.use": *serp_component
    "tokens.components.paging-button.type": *portal_search
    "tokens.components.paging-button.bg": *portal_search
    "tokens.components.paging-button.fg": *portal_search
    "tokens.components.paging-button.border": *portal_search
    "tokens.components.paging-button.radius": *portal_search
    "tokens.components.paging-button.height": *portal_search
    "tokens.components.paging-button.shadow": *portal_search
    "tokens.components.paging-button.hover": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "button.ContentPagingView-module__btn_prev 이전 페이지 at :hover", captured: "2026-09-29" }
    "tokens.components.paging-button.pressed": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "button.ContentPagingView-module__btn_prev 이전 페이지 at :active", captured: "2026-09-29" }
    "tokens.components.paging-button.states": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "button.ContentPagingView-module__btn_prev 이전 페이지", captured: "2026-09-29" }
    "tokens.components.paging-button.use": *portal_search
    "tokens.components.corporate-tab.type": &corporate_component { surface_id: corporate-brand, source_id: brand-live, method: computed-style, captured: "2026-07-11" }
    "tokens.components.corporate-tab.bg": *corporate_component
    "tokens.components.corporate-tab.fg": *corporate_component
    "tokens.components.corporate-tab.radius": *corporate_component
    "tokens.components.corporate-tab.padding": *corporate_component
    "tokens.components.corporate-tab.font": *corporate_component
    "tokens.components.corporate-tab.states": *corporate_component
    "tokens.components.corporate-tab.use": *corporate_component
    "tokens.components.portal-menu.type": *portal_search
    "tokens.components.portal-menu.bg": *portal_search
    "tokens.components.portal-menu.fg": *portal_search
    "tokens.components.portal-menu.font": *portal_search
    "tokens.components.portal-menu.states": *portal_search
    "tokens.components.portal-menu.use": *portal_search
    "tokens.components.login-cta.type": &nLoginCta { surface_id: portal-home, source_id: portal-live, method: computed-style, selector: "home::[data-omd-capture=\"87\"]", captured: "2026-07-11" }
    "tokens.components.login-cta.bg": *nLoginCta
    "tokens.components.login-cta.fg": *nLoginCta
    "tokens.components.login-cta.border": *nLoginCta
    "tokens.components.login-cta.radius": *nLoginCta
    "tokens.components.login-cta.padding": *nLoginCta
    "tokens.components.login-cta.size": *nLoginCta
    "tokens.components.login-cta.font": *nLoginCta
    "tokens.components.login-cta.shadow": *nLoginCta
    "tokens.components.login-cta.hover": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a.MyView-module__link_login at :hover", captured: "2026-09-29" }
    "tokens.components.login-cta.pressed": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a.MyView-module__link_login at :active", captured: "2026-09-29" }
    "tokens.components.login-cta.states": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a.MyView-module__link_login NAVER로그인", captured: "2026-09-29" }
    "tokens.components.login-cta.use": *nLoginCta
    "tokens.components.search-assembly.type": &nSearchAssembly { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "div#search_area, sixth ancestor of input#query, rest with focus elsewhere", captured: "2026-09-29" }
    "tokens.components.search-assembly.bg": *nSearchAssembly
    "tokens.components.search-assembly.border": *nSearchAssembly
    "tokens.components.search-assembly.hover": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "div#search_area while input#query is at :hover", captured: "2026-09-29" }
    "tokens.components.search-assembly.pressed": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "div#search_area while input#query is at :active", captured: "2026-09-29" }
    "tokens.components.search-assembly.states": *nSearchAssembly
    "tokens.components.search-assembly.use": *nSearchAssembly
    "tokens.components.portal-content-tab.type": &nContentTab { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a[role=tab] 엔터 (ContentHeaderView tab), rest", captured: "2026-09-29" }
    "tokens.components.portal-content-tab.bg": *nContentTab
    "tokens.components.portal-content-tab.fg": *nContentTab
    "tokens.components.portal-content-tab.height": *nContentTab
    "tokens.components.portal-content-tab.font": *nContentTab
    "tokens.components.portal-content-tab.selected": { surface_id: portal-home, source_id: portal-live, method: computed-style, selector: "home::[data-omd-capture=\"24\"]", captured: "2026-07-11" }
    "tokens.components.portal-content-tab.hover": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a[role=tab] 엔터 at :hover", captured: "2026-09-29" }
    "tokens.components.portal-content-tab.pressed": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a[role=tab] 엔터 at :active", captured: "2026-09-29" }
    "tokens.components.portal-content-tab.states": *nContentTab
    "tokens.components.portal-content-tab.use": *nContentTab
    "tokens.components.service-shortcut.type": &nServiceShortcut { surface_id: portal-home, source_id: portal-live, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-07-11" }
    "tokens.components.service-shortcut.bg": *nServiceShortcut
    "tokens.components.service-shortcut.fg": *nServiceShortcut
    "tokens.components.service-shortcut.size": *nServiceShortcut
    "tokens.components.service-shortcut.font": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a.link_service 뉴스, span.service_name label", captured: "2026-09-29" }
    "tokens.components.service-shortcut.states": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a.link_service 뉴스", captured: "2026-09-29" }
    "tokens.components.service-shortcut.hover": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a.link_service 뉴스, span.service_icon::before background-position at :hover (sprite check)", captured: "2026-09-29" }
    "tokens.components.service-shortcut.pressed": { surface_id: portal-home, source_id: naver-probe, method: live-state-probe, selector: "a.link_service 뉴스, span.service_icon::before background-position at :active (sprite check)", captured: "2026-09-29" }
    "tokens.components.service-shortcut.use": *nServiceShortcut
    "tokens.components.subscribe-pill.type": &nSubscribePill { surface_id: portal-home, source_id: portal-live, method: computed-style, selector: "home::[data-omd-interaction-capture=\"tab-2-5\"]", captured: "2026-07-11" }
    "tokens.components.subscribe-pill.bg": *nSubscribePill
    "tokens.components.subscribe-pill.fg": *nSubscribePill
    "tokens.components.subscribe-pill.border": *nSubscribePill
    "tokens.components.subscribe-pill.radius": *nSubscribePill
    "tokens.components.subscribe-pill.padding": *nSubscribePill
    "tokens.components.subscribe-pill.height": *nSubscribePill
    "tokens.components.subscribe-pill.font": *nSubscribePill
    "tokens.components.subscribe-pill.states": *nSubscribePill
    "tokens.components.subscribe-pill.use": *nSubscribePill
    "tokens.components.corporate-nav-link.type": &nCorporateNav { surface_id: corporate-brand, source_id: brand-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"1\"]", captured: "2026-07-11" }
    "tokens.components.corporate-nav-link.bg": *nCorporateNav
    "tokens.components.corporate-nav-link.fg": *nCorporateNav
    "tokens.components.corporate-nav-link.height": *nCorporateNav
    "tokens.components.corporate-nav-link.font": *nCorporateNav
    "tokens.components.corporate-nav-link.hover": { surface_id: corporate-brand, source_id: brand-live, method: computed-style-state-sample, selector: "surface-3::[data-omd-capture=\"1\"]::state-hover", captured: "2026-07-11" }
    "tokens.components.corporate-nav-link.pressed": { surface_id: corporate-brand, source_id: brand-live, method: computed-style-state-sample, selector: "surface-3::[data-omd-capture=\"1\"]::state-pressed", captured: "2026-07-11" }
    "tokens.components.corporate-nav-link.states": *nCorporateNav
    "tokens.components.corporate-nav-link.use": *nCorporateNav
    "tokens.components.serp-share-button.type": &nSerpShare { surface_id: search-results, source_id: search-live, method: computed-style, selector: "surface-2::[data-omd-capture=\"17\"]", captured: "2026-07-11" }
    "tokens.components.serp-share-button.bg": *nSerpShare
    "tokens.components.serp-share-button.fg": *nSerpShare
    "tokens.components.serp-share-button.padding": *nSerpShare
    "tokens.components.serp-share-button.height": *nSerpShare
    "tokens.components.serp-share-button.font": *nSerpShare
    "tokens.components.serp-share-button.hover": { surface_id: search-results, source_id: search-live, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"17\"]::state-hover", captured: "2026-07-11" }
    "tokens.components.serp-share-button.pressed": { surface_id: search-results, source_id: search-live, method: computed-style-state-sample, selector: "surface-2::[data-omd-capture=\"17\"]::state-pressed", captured: "2026-07-11" }
    "tokens.components.serp-share-button.states": *nSerpShare
    "tokens.components.serp-share-button.use": *nSerpShare
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-11"
  note: "Portal/search and NAVER Corp brand surfaces are separate domains. System is the live portal/search family; InterVariable is loaded on the corporate brand page. Declared-only Naver fonts are not promoted."
  colors:
    brand: "#03c75a"
    canvas: "#ffffff"
    portal-ink: "#2e2e2e"
    search-ink: "#1c1c1c"
    search-link: "#0c43b7"
    search-muted: "#8c8c8c"
    hairline: "#e5e5e5"
    corporate-ink: "#1a1d24"
    corporate-muted: "#717680"
    login-fill: "#03a94d"
  typography:
    family:
      portal: "System"
      corporate: "InterVariable"
    portal-search: { size: 21, weight: 700, lineHeight: "24px", tracking: "-0.4px" }
    portal-ui: { size: 14.7, weight: 500, lineHeight: "17.85px", tracking: "-0.4px" }
    search-tab: { size: 16, weight: 600, lineHeight: "21px", tracking: "-0.3px" }
    search-title: { size: 18, weight: 600, lineHeight: "24px", tracking: "-0.16px" }
    corporate-tab: { size: 20, weight: 600, lineHeight: "28px", tracking: "-0.6px" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  components_harvested: true
  components:
    search-input: { type: input, bg: "transparent", fg: "#000000", radius: "0px", height: "58px", padding: "17px 0", font: "21px / 700 / System", states: "autocomplete listbox expansion observed 2026-07-11; keyboard focus measured 2026-09-29 (Tab stop 15, :focus-visible matched) leaves the input and its six ancestors as at rest, with outline none; the 1px #03c75a ring belongs to the search assembly (div#search_area) and is there without focus; hover adds a shadow to that assembly, not to the input; the input is autofocused on load", use: "Portal-home search query input inside the branded search assembly" }
    search-submit: { type: button, bg: "transparent", fg: "#2e2e2e", radius: "0px", height: "58px", padding: "9px 9px 9px 10px", hover: "opacity 0→0.5 blur(4px) glow layer, 0→1 two conic-gradient layers, 1→0 two pale gradient fills; image swap @img_ai_tab_light.png → @img_ai_tab_highlight.png", pressed: "opacity 0→0.5 blur(4px) glow layer, 0→1 two conic-gradient layers, 1→0 two pale gradient fills; image swap @img_ai_tab_light.png → @img_ai_tab_highlight.png", focus: "opacity 0→0.5 glow layer, 0→1 conic-gradient layers, 1→0 pale fills; image swap to @img_ai_tab_highlight.png; shown beside the browser default ring, which is not declared", states: "default observed 2026-07-11; hover, pressed and keyboard focus measured 2026-09-29 with :hover, :active and :focus-visible matched: seven text-free layers inside the button change opacity. A blur(4px) glow layer (75 x 44) goes 0 → 0.5 and two 148 x 148 conic-gradient layers go 0 → 1, their gradient angle rotating between reads (no timing is stated); two pale linear-gradient fills, rgb(236, 247, 252) → rgb(232, 249, 245), go 1 → 0; the label image @img_ai_tab_light.png fades out while @img_ai_tab_highlight.png fades in. Pressed equals hover. Keyboard focus runs the same change next to the browser default ring (outline auto) and reverts on blur. Reproduced on a second load (corrected 2026-09-29: earlier text said every compared property stayed at rest, from a read that skipped empty layers)", use: "Portal AI search control (button#search-ai-tab-button) beside the query field" }
    serp-tab: { type: tab, bg: "transparent", fg: "#8c8c8c", radius: "0px", padding: "6px 12px 14px", font: "16px / 600 / System", hover: "fg #595959", pressed: "fg #595959", states: "default #8c8c8c; hover and pressed fg #595959", use: "Search-result vertical navigation" }
    filter-chip: { type: badge, bg: "#ffffff", fg: "#0c43b7", border: "1px solid #e5e5e5", radius: "18px", padding: "4px 12px 4px 4px", font: "13px / 400 / System", use: "Search-result image/filter chip" }
    result-card: { type: card, bg: "#ffffff", fg: "#1c1c1c", radius: "12px", use: "Search-result grouped content card" }
    paging-button: { type: button, bg: "#ffffff", fg: "#2e2e2e", border: "1px solid rgba(0,0,0,0.15)", radius: "9999px", height: "36px", shadow: "0 1px 2px rgba(0,0,0,0.06)", hover: "bg rgba(0, 0, 0, 0.06), shadow 0 2px 4px rgba(0, 0, 0, 0.12)", pressed: "bg rgba(0, 0, 0, 0.06), shadow 0 2px 4px rgba(0, 0, 0, 0.12)", states: "hover and pressed measured 2026-09-29 on the portal-home previous button with :hover and :active matched (transition: all 0s): bg rgba(0, 0, 0, 0.06) and shadow 0 2px 4px rgba(0, 0, 0, 0.12); keyboard focus draws only the browser default ring (outline auto), so no focus value is declared; corrected 2026-09-29: earlier text said hover and pressed were not retained, and the 2026-09-17 check had measured a search-results control", use: "Portal carousel previous/next control" }
    corporate-tab: { type: tab, bg: "transparent", fg: "#1a1d24", radius: "0px", padding: "17px 0 18px", font: "20px / 600 / InterVariable", states: "selected observed", use: "NAVER Corp brand-resource section switcher" }
    portal-menu: { type: listItem, bg: "transparent", fg: "#2e2e2e", font: "14.7px / 500 / System", states: "expanded listbox and option observed", use: "Portal content-header overflow menu option" }
    login-cta: { type: button, bg: "#03a94d", fg: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", radius: "4px", padding: "17px 0px", size: "380px x 56px", font: "14.7px / 500 / System", shadow: "0 2px 4px rgba(3, 199, 90, 0.12)", hover: "shadow 0 2px 4px rgba(3, 199, 90, 0.24); overlay rgba(0, 0, 0, 0.06) via ::before", pressed: "shadow 0 2px 4px rgba(3, 199, 90, 0.24); overlay rgba(0, 0, 0, 0.06) via ::before", states: "default captured 2026-07-11 and the same on 2026-09-29; the fill is #03a94d, darker than brand green #03c75a, which tints only the shadow; hover and pressed measured 2026-09-29 with :hover and :active matched: shadow alpha 0.12 to 0.24 plus a rgba(0, 0, 0, 0.06) ::before overlay (transition: all 0s); keyboard focus draws only the browser default ring (outline auto), so no focus value is declared; no sign-in was attempted", use: "Portal-home sign-in CTA (NAVER로그인, a.MyView-module__link_login); tracking -0.4px" }
    search-assembly: { type: input, bg: "#ffffff", border: "1px solid #03c75a", hover: "shadow 0 2px 4px rgba(0, 0, 0, 0.12)", pressed: "shadow 0 2px 4px rgba(0, 0, 0, 0.12)", states: "measured 2026-09-29: the 1px #03c75a border is present at rest with focus elsewhere and stays through hover, press and keyboard focus; hover and pressed (:hover and :active matched on the input) add shadow 0 2px 4px rgba(0, 0, 0, 0.12) to this container; keyboard focus in the input (Tab stop 15) adds nothing; radius and size were not read, so none is declared", use: "Portal-home search assembly (div#search_area) that frames the query input, AI search and input tools" }
    portal-content-tab: { type: tab, bg: "transparent", fg: "rgba(0, 0, 0, 0.5)", height: "23px", font: "17px / 800 / System", selected: "fg #000000", hover: "underline rgba(0, 0, 0, 0.5)", pressed: "underline rgba(0, 0, 0, 0.5)", states: "inactive rest, hover and pressed measured 2026-09-29 with :hover and :active matched (tab 엔터): an underline in rgba(0, 0, 0, 0.5) appears and the text colour stays; the selected tab reads fg #000000 in the 2026-07-11 capture (tab-selected); keyboard focus draws only the browser default ring (outline auto), so no focus value is declared", use: "Portal-home content-header tab (role=tab) above the news and content feed; tracking -0.4px" }
    service-shortcut: { type: button, bg: "transparent", fg: "#2e2e2e", size: "64px x 68px", font: "13.65px / 500 / System", hover: "background-position -156px -144px → -104px -144px (icon backdrop tile, span.service_icon::before, in its sprite)", pressed: "background-position -156px -144px → -104px -144px (icon backdrop tile, span.service_icon::before, in its sprite)", states: "default captured 2026-07-11 (11 shortcuts, each 64 x 68); on 2026-09-29, with :hover and :active matched, hover and pressed move the icon's 50 x 50 backdrop tile (span.service_icon::before) in its sprite sheet (sp_main.38ce5a51, 484 x 476) from background-position -156px -144px to -104px -144px, on 뉴스 and on 메일, while the glyph (::after) and the label stay; pixels were not diffed, so how the tile looks is not stated; the state probe does not compare background-position, so the value comes from a separate sprite check (corrected 2026-09-29: earlier text said the icon and label stayed at rest); keyboard focus does not move the tile and draws only the browser default ring (outline auto); font is the label (span.service_name), not the anchor (14.7px / 500)", use: "Portal-home header service shortcut (a.link_service: icon plus label, e.g. 뉴스)" }
    subscribe-pill: { type: button, bg: "transparent", fg: "#406cdc", border: "1px solid #e0ecff", radius: "13px", padding: "0px 5px 0px 7px", height: "26px", font: "12.6px / 800 / System", states: "default captured 2026-07-11 on four items of the news tab (tab interaction captures); no pointer-state sample", use: "Portal-home press subscribe button in the news media tab (btn_subscribe, two characters); tracking -0.4px" }
    corporate-nav-link: { type: tab, bg: "transparent", fg: "#1a1d24", height: "26px", font: "16px / 400 / InterVariable", hover: "font-weight 600", pressed: "font-weight 600", states: "default, hover and pressed sampled 2026-07-11 on eight sibling links of the brand-resource page (surface-3 captures 1 to 8): weight 400 to 600 while the colour stays #1a1d24; focus not sampled (the 2026-09-29 probe covered the portal only)", use: "NAVER Corp site header navigation link (a.nav__link) on the brand-resource page; tracking -0.5px" }
    serp-share-button: { type: button, bg: "transparent", fg: "#8c8c8c", padding: "6px 6px 14px", height: "41px", font: "13px / 400 / System", hover: "fg #595959", pressed: "fg #595959", states: "default, hover and pressed sampled 2026-07-11 (surface-2::[data-omd-capture=\"17\"]): fg #8c8c8c to #595959, the hover colour of the ten vertical tabs beside it; focus not sampled", use: "Search-results share control at the end of the vertical-tab row (a.bt_share, role=button); tracking -0.3px" }
---

# Design System Inspiration of Naver (네이버)

## 1. Visual Theme & Atmosphere

NAVER is a Korean search and discovery platform whose public identity spans the portal home, search results, and a much broader family of local services. Its familiar green is the stable connective tissue, while each product surface optimizes independently for dense information retrieval, quick navigation, and local task completion. NAVER does not expose one public product design system that governs every service, so this reference deliberately separates three inspected domains: the portal home, search results, and the NAVER Corp brand-resource page. That separation preserves the recognizable company identity without turning a corporate font, a search-only pattern, or a portal measurement into a universal product rule.

The official identity constant is NAVER Green (`#03C75A`). Product chrome is otherwise neutral and information-dense. The portal/search surfaces use a System-first Korean stack, while the corporate brand page loads and visibly uses `InterVariable`. Values from one surface must not be silently generalized to the others.

**Key characteristics:**
- Official brand green `#03C75A`, backed by the NAVER brand guide
- Dense portal/search composition on white with dark gray text
- System-first portal/search typography
- `InterVariable` on the corporate brand page
- Search, filters, tabs, cards, menus, and paging controls grounded in live computed evidence

## Primary tasks

- Enter a query and compare the results it returns
- Scan the portal for news, shopping, maps, and mail
- Narrow a result set to one vertical or filter

## 2. Color Palette & Roles

### Official identity
- **NAVER Green** (`#03C75A`): official logo and identity color. The guide specifies RGB 3/199/90, CMYK 72/0/88/0, and Pantone 2270C.

### Portal and search
- **Canvas** (`#FFFFFF`): portal and result surfaces.
- **Portal Ink** (`#2E2E2E`): common portal control and chrome text.
- **Search Ink** (`#1C1C1C`): primary search-result text.
- **Search Link** (`#0C43B7`): current search-result link/chip blue.
- **Search Muted** (`#8C8C8C`): inactive tabs and secondary labels.
- **Hairline** (`#E5E5E5`): filter-chip and light container border.
- **Login fill** (`#03A94D`): the portal-home sign-in button's fill (2026-07-11 capture, the same on 2026-09-29). It is darker than NAVER Green; on that button the brand green `#03C75A` appears only as the shadow tint `rgba(3, 199, 90, 0.12)`.

### Corporate brand page
- **Corporate Ink** (`#1A1D24`): brand-page navigation and section labels.
- **Corporate Muted** (`#717680`): secondary corporate copy.

Do not promote older `#0068C3`, `#6633B9`, or estimated semantic colors as current universal NAVER tokens without surface-specific live evidence.

## 3. Typography Rules

### Font resolution

| Evidence class | Resolution |
|---|---|
| Official product-use | No single official family is published for every NAVER product surface. |
| Live surface-use | Portal/search use a System-first stack; the corporate brand page visibly uses loaded `InterVariable`. |
| Official distributed asset | NAVER distributes Nanum and D2Coding, but distribution alone is not UI usage. |
| Declared-only | NanumSquare, NanumSquareNeo, NanumHuman, and Pretendard were declared without visible use. |
| Unresolved | A minority `나눔고딕` usage had no matching loaded FontFace. |

Specimen availability is evaluated per surface and never substitutes one NAVER-published font for another.
- **Portal and search:** `System`. Computed stacks begin with `-apple-system` and continue through Korean platform fallbacks.
- **Corporate brand page:** `InterVariable`, loaded from `https://www.navercorp.com/font/InterVariable.woff2` and visibly used.
- **Declared only in this capture:** NanumSquare, NanumSquareNeo, NanumHuman, and Pretendard. Declaration is not visible use.
- **Unresolved minority:** `나눔고딕` appeared on four search elements without a matching loaded FontFace.
- **No canonical UI monospace:** D2Coding is a NAVER-published font, not evidence that current portal/search UI uses it.

| Role | Surface | Font | Size | Weight | Line height | Tracking |
|---|---|---|---:|---:|---:|---:|
| Portal Search | Portal | System | 21px | 700 | 24px | -0.4px |
| Portal UI | Portal | System | 14.7px | 500 | 17.85px | -0.4px |
| Search Tab | Search | System | 16px | 600 | 21px | -0.3px |
| Search Title | Search | System | 18px | 600 | 24px | -0.16px |
| Corporate Tab | Brand resource | InterVariable | 20px | 600 | 28px | -0.6px |

## 4. Component Stylings

### Portal Search

**Search Input**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 17px 0
- Height: 58px
- Font: 21px / 700 / System
- States: autocomplete listbox expansion observed on 2026-07-11. Keyboard focus (2026-09-29, Tab stop 15, `:focus-visible` matched) leaves the input and all six ancestors as at rest, with `outline: none`: as of 2026-09-29 the field has no focus indicator of its own. Hover and press add a shadow to the surrounding assembly, not to the input.
- Use: Query field inside the portal's branded search assembly; it is autofocused on load

**Search Assembly**
- Background: `#FFFFFF`
- Border: 1px solid `#03C75A`, the same at rest with focus elsewhere, on hover, on press and under keyboard focus
- Hover and pressed: shadow `0 2px 4px rgba(0, 0, 0, 0.12)`
- Radius and size: not read, so not declared
- Use: `div#search_area`, the green-framed box around the query input, AI search and input tools

**Search Submit**
- Background: transparent
- Text: `#2E2E2E`
- Radius: 0px
- Padding: 9px 9px 9px 10px
- Height: 58px
- States: default observed. Hover and pressed (2026-09-29, `:hover` and `:active` matched) run a layered glow inside the button: a `blur(4px)` glow layer fades in to opacity 0.5 and two conic-gradient layers to opacity 1, their gradient angle rotating; the two pale gradient fills (`rgb(236, 247, 252)` → `rgb(232, 249, 245)`) fade from 1 to 0; and the label image swaps from `@img_ai_tab_light.png` to `@img_ai_tab_highlight.png`. Pressed equals hover. Keyboard focus runs the same effect next to the browser's default ring. (Corrected 2026-09-29: an earlier reading skipped the button's empty layers and reported no pointer response; before that, "not retained" read as a capture gap.)
- Use: the `AI 검색` control (`button#search-ai-tab-button`) adjacent to the query field

### Search Results

**Vertical Tab**
- Background: transparent
- Text: `#8C8C8C`
- Radius: 0px
- Padding: 6px 12px 14px
- Font: 16px / 600 / System
- Hover: fg `#595959`
- Pressed: fg `#595959`
- Use: Search vertical/category navigation

**Share Control**
- Background: transparent
- Text: `#8C8C8C`, 13px / 400 / System, tracking -0.3px
- Padding: 6px 6px 14px; height 41px
- Hover and pressed: fg `#595959`, the vertical tabs' hover colour
- Use: share control at the end of the vertical-tab row (`a.bt_share`, `role=button`)

**Filter Chip**
- Background: `#FFFFFF`
- Text: `#0C43B7`
- Border: 1px solid `#E5E5E5`
- Radius: 18px
- Padding: 4px 12px 4px 4px
- Font: 13px / 400 / System
- Use: Image and result refinement filter

**Result Card**
- Background: `#FFFFFF`
- Text: `#1C1C1C`
- Radius: 12px
- Use: Grouped search-result content surface

### Portal Utilities

**Paging Button**
- Background: `#FFFFFF`
- Text: `#2E2E2E`
- Border: 1px solid rgba(0,0,0,0.15)
- Radius: 9999px
- Height: 36px
- Shadow: 0 1px 2px rgba(0,0,0,0.06)
- Hover and pressed: bg `rgba(0, 0, 0, 0.06)` and shadow `0 2px 4px rgba(0, 0, 0, 0.12)` (2026-09-29, `:hover` and `:active` matched, `transition: all 0s`)
- Focus: the browser's default ring only
- States: corrected 2026-09-29. Earlier text said hover and pressed were not retained, and a 2026-09-17 check found background and text identical across states on a paging control; that check measured a search-results control (`#1C1C1C` text), not this portal-home button.
- Use: Carousel previous/next action (`이전 페이지` / `다음 페이지`)

**Overflow Menu**
- Background: transparent
- Text: `#2E2E2E`
- Font: 14.7px / 500 / System
- States: expanded listbox and option observed
- Use: Content-header overflow navigation

**Sign-in CTA**
- Background: `#03A94D`, darker than NAVER Green; `#03C75A` tints only the shadow
- Text: `#FFFFFF`, 14.7px / 500 / System, tracking -0.4px
- Border: 1px solid `rgba(0, 0, 0, 0.06)`
- Radius: 4px; padding 17px 0; 380 × 56px
- Shadow: `0 2px 4px rgba(3, 199, 90, 0.12)`
- Hover and pressed: shadow `0 2px 4px rgba(3, 199, 90, 0.24)` plus a `rgba(0, 0, 0, 0.06)` overlay drawn by `::before`
- Focus: the browser's default ring only
- Use: `NAVER로그인` on the portal home (measured without signing in)

**Content Tab**
- Text: `rgba(0, 0, 0, 0.5)` inactive, `#000000` selected; 17px / 800 / System, tracking -0.4px; height 23px
- Hover and pressed: underline `rgba(0, 0, 0, 0.5)`; the text colour stays
- Focus: the browser's default ring only
- Use: content-header tabs (`role=tab`) above the news and content feed

**Service Shortcut**
- Background: transparent
- Label: `#2E2E2E`, 13.65px / 500 / System (the anchor is 14.7px / 500)
- Size: 64 × 68px, icon plus label
- States: on 2026-09-29 hover and pressed (`:hover`, `:active` matched) move the icon's backdrop tile in its sprite sheet from `background-position: -156px -144px` to `-104px -144px`; the glyph and the label stay, and 메일 does the same. Pixels were not compared, so how the tile looks is not stated. Focus does not move the tile and shows only the browser's default ring
- Use: header service shortcuts (`a.link_service`, e.g. `뉴스`)

**Subscribe Button**
- Background: transparent
- Text: `#406CDC`, 12.6px / 800 / System, tracking -0.4px
- Border: 1px solid `#E0ECFF`
- Radius: 13px; padding 0 5px 0 7px; height 26px
- States: default only
- Use: press subscribe button in the news media tab

### Corporate Brand Resource

**Section Tab**
- Background: transparent
- Text: `#1A1D24`
- Radius: 0px
- Padding: 17px 0 18px
- Font: 20px / 600 / InterVariable
- States: selected observed
- Use: Brand guide versus official-photo section switching

**Header Navigation Link**
- Text: `#1A1D24`, 16px / 400 / InterVariable, tracking -0.5px; height 26px
- Hover and pressed: font-weight 600 while the colour stays `#1A1D24` (eight sibling links, 2026-07-11)
- Use: NAVER Corp site header navigation (`a.nav__link`)

### Keyboard focus (2026-09-29)

A real Tab walk on the portal home reached six controls. Four of them (sign-in CTA, content tab, paging button, service shortcut) draw only the browser's default ring (`outline: auto`, rendered `#005fcc`). AI search draws that ring too and also runs its hover effect: the glow layers fade in, the pale fills fade out and the label image switches to `@img_ai_tab_highlight.png`, the only authored focus change among the six. The ring is Chrome's, not NAVER's, and no component carries it as a focus value. The query input showed no focus change at all: as of 2026-09-29 the portal's search field has no visible keyboard-focus indicator beyond the permanent green frame of its assembly.

## 5. Layout Principles

- Use the observed 4/8/12/16/20px spacing clusters for compact UI composition.
- Portal and SERP density are surface properties, not permission to remove hierarchy.
- Search remains the primary spatial anchor on the portal.
- Cards may use 12px rounding on search surfaces; utility controls range from square to fully circular.
- Corporate pages use more generous rhythm and must not inherit portal density automatically.

## 6. Depth & Elevation

- Most sampled portal/search controls use no shadow.
- The portal paging button uses a restrained `0 1px 2px rgba(0,0,0,0.06)` shadow.
- The portal sign-in CTA casts a green-tinted `0 2px 4px rgba(3, 199, 90, 0.12)`; hover doubles the alpha.
- Hover lifts the search assembly and the paging buttons with `0 2px 4px rgba(0, 0, 0, 0.12)`.
- Prefer border, spacing, and type hierarchy before introducing elevation.
- No universal NAVER shadow scale is claimed.

## 7. Do's and Don'ts

### Do
- Use official NAVER Green exactly as `#03C75A` for identity applications.
- Keep portal/search System typography separate from corporate InterVariable typography.
- Preserve compact Korean text rhythm and explicit interactive states.
- Treat live product evidence and the official brand guide as different authorities.

### Don't
- Do not infer native-app typography from these web surfaces.
- Do not promote declared-only Nanum/Pretendard faces as current UI fonts.
- Do not invent a public NAVER product design system from brand-resource guidance.
- Do not alter the official logo's proportions, color, or style.
- Do not paint the portal sign-in CTA with NAVER Green: its measured fill is `#03A94D`, and `#03C75A` only tints its shadow.

## 8. Responsive Behavior

- The inspected evidence is desktop at 1440×900; mobile-native claims are intentionally absent.
- Preserve 44px-or-larger touch targets when adapting dense portal utilities to narrow layouts.
- Allow search-result cards to stack before shrinking readable Korean type.
- Keep the search control visually dominant and avoid horizontal overflow in tab/filter rows.

## 9. Agent Prompt Guide

> Build a NAVER-inspired information surface using a white canvas, System-first Korean typography, compact 4/8/12/16/20px spacing, dark neutral text, and `#03C75A` only where identity or a verified action requires it. Separate portal/search components from NAVER Corp brand-page components. Use 12px result cards, 18px filter chips, and explicit hover/pressed/selected states. Do not claim Nanum, Pretendard, or InterVariable outside the surfaces where they were actually observed.

## 10. Voice & Tone

The inspected public copy is direct, functional, and navigation-led. Labels such as “검색하기”, “삭제”, “전체 서비스”, and “브랜드 리소스” describe the action or destination without promotional filler.

| Do | Don't |
|---|---|
| Use short Korean action labels | Add decorative slogans to utility controls |
| Explain the next recoverable action | Blame the user |
| Name destinations consistently | Rename familiar portal concepts for novelty |

Verified live samples:
- “검색하기” — corporate-site integrated search. <!-- verified: https://www.navercorp.com/company/brandGuide -->
- “브랜드 리소스” — official brand-resource section. <!-- verified: https://www.navercorp.com/company/brandGuide -->
- “기술과 서비스로 세상의 모든 가능성을 연결합니다” — corporate navigation statement. <!-- verified: https://www.navercorp.com/company/about -->

## 11. Brand Narrative

NAVER's official company page describes its beginning in 1999 and frames the organization as “Navigators” connecting possibilities through technology and services. The same official timeline presents integrated search in 2000, HyperCLOVA in 2021, and the 1784 robot-friendly headquarters in 2022.

The official brand guide describes NAVER Green as carrying trust, challenge, exploration, familiarity, and an eco-friendly image. This reference uses those statements only as sourced brand context; it does not infer unpublished product principles.

In product terms, this produces a useful tension: NAVER must remain instantly recognizable while supporting services with very different densities and jobs. Search favors fast scanning and compact labels; the portal coordinates many destinations; the corporate brand surface explains the shared identity. Green, logo rules, and company statements stay at brand level, while typography, spacing, and components remain attached to the surface where they were observed.

## 12. Principles

1. **Keep identity consistent.** The official logo and `#03C75A` must not be arbitrarily recolored, distorted, outlined, or given effects.
   - *UI implication:* isolate brand identity tokens from transient service colors.
2. **Connect people to destinations quickly.** Public navigation and search copy is literal and compact.
   - *UI implication:* prioritize recognizable labels and scanning speed.
3. **Separate service surfaces.** NAVER operates many products with different local systems.
   - *UI implication:* never treat one service's typography or component geometry as a universal NAVER token.

## 13. Personas

NAVER has not published validated product personas for the inspected portal, search, and brand-resource surfaces. The evidence supports usage contexts instead: people entering a query and comparing results; portal visitors scanning news, shopping, maps, mail, and other destinations; and designers or partners retrieving official identity assets. These are task contexts, not demographic profiles. Implementations should validate the specific NAVER service, language, device, and task before turning them into research personas.

## 14. States

- **Hover / pressed:** captured on search tabs and utility actions (2026-07-11). On 2026-09-29, with `:hover` and `:active` matched, the paging button took bg `rgba(0, 0, 0, 0.06)` and shadow `0 2px 4px rgba(0, 0, 0, 0.12)`, the sign-in CTA a shadow alpha of 0.24 plus a `rgba(0, 0, 0, 0.06)` overlay, the content tab an underline and the search assembly a shadow; the AI search control fades in a blurred conic-gradient glow, fades out its pale fills and swaps its label image to `@img_ai_tab_highlight.png`, and the service shortcut moves its icon's backdrop tile in the sprite sheet (`-156px -144px` → `-104px -144px`).
- **Focus:** walked with real Tab presses on 2026-09-29. Four controls show only the browser's default ring and the query input shows none. AI search shows the ring plus its authored hover effect (glow in, fills out, label image swap), the only authored focus style found.
- **Selected:** captured on portal/search/corporate tabs.
- **Expanded:** captured for the portal listbox/menu.
- **Checked / unchecked:** captured for portal display controls and a search switch.
- **Empty, loading, error, success, disabled:** no safe representative live evidence was captured in this run.

Do not fill absent states with generic NAVER-looking values.

## 15. Motion & Easing

The collector captured state changes but did not establish a canonical duration or easing scale. Use motion only to clarify menu expansion, tab selection, and focus transitions; respect reduced-motion preferences. All six controls probed on 2026-09-29 computed `transition: all 0s`, so their state changes are instant.

Official product motion tokens were not found in the inspected public sources.

---

**Verified:** 2026-07-11 (omd:migrate) · states re-measured 2026-09-29 (live portal-home probe)
**Tier 1 sources:** https://www.naver.com/ · https://search.naver.com/search.naver?query=%EB%94%94%EC%9E%90%EC%9D%B8 · https://www.navercorp.com/company/brandGuide · https://www.navercorp.com/company/about
**Tier 2 sources:** https://getdesign.md/naver (no importable record in available path) · https://styles.refero.design/?q=naver (no importable result in available path)
**Tier 2 status:** unavailable; no Tier 2 value promoted
**Conflicts unresolved:** none
**Migration depth:** Apple-tier evidence graph; visual smoke pending
