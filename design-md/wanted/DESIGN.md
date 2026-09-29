---
id: wanted
name: Wanted
country: KR
category: productivity
homepage: "https://www.wanted.co.kr"
primary_color: "#0066ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wanted.co.kr&sz=256"
verified: "2026-07-12"
omd: "0.1"
ds:
  name: Wanted Montage
  url: "https://montage.wanted.co.kr/"
  type: system
  description: Wanted's official product-experience design system with foundations, cross-platform components, UI kits, utilities, and usage guidance.
verification_v2:
  schema: 2
  checked: "2026-09-29"
  surfaces:
    - { id: home, kind: product-home, url: "https://www.wanted.co.kr/", inspected: "2026-07-12" }
    - { id: jobs, kind: product-directory, url: "https://www.wanted.co.kr/wdlist/518", inspected: "2026-07-12" }
    - { id: company, kind: product-service, url: "https://www.wanted.co.kr/company", inspected: "2026-07-12" }
    - { id: montage, kind: official-design-system, url: "https://montage.wanted.co.kr/", inspected: "2026-07-12" }
    - { id: foundations, kind: official-design-system, url: "https://montage.wanted.co.kr/docs/foundations", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.wanted.co.kr/", captured: "2026-07-12" }
    - { id: wanted-component-index, kind: official-doc, url: "https://montage.wanted.co.kr/docs/components", captured: "2026-09-19" }
    - { id: jobs-live, kind: product-surface, url: "https://www.wanted.co.kr/wdlist/518", captured: "2026-07-12" }
    - { id: company-live, kind: product-surface, url: "https://www.wanted.co.kr/company", captured: "2026-07-12" }
    - { id: montage-live, kind: official-doc, url: "https://montage.wanted.co.kr/", captured: "2026-07-12" }
    - { id: foundations-live, kind: official-doc, url: "https://montage.wanted.co.kr/docs/foundations", captured: "2026-07-12" }
    - { id: typography-doc, kind: official-doc, url: "https://montage.wanted.co.kr/docs/utilities/web-utilities/typography-style", captured: "2026-07-12" }
    - { id: text-button-doc, kind: official-doc, url: "https://montage.wanted.co.kr/docs/components/actions/text-button/design", captured: "2026-07-12" }
    - { id: wanted-probe-home, kind: product-surface, url: "https://www.wanted.co.kr/", captured: "2026-09-29" }
    - { id: wanted-probe-jobs, kind: product-surface, url: "https://www.wanted.co.kr/wdlist/518", captured: "2026-09-29" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": *home_evidence
    "tokens.colors.heading": *home_evidence
    "tokens.colors.body": *home_evidence
    "tokens.colors.secondary": &jobs_evidence { surface_id: jobs, source_id: jobs-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.subtle-surface": *home_evidence
    "tokens.colors.hairline": *jobs_evidence
    "tokens.colors.on-primary": *home_evidence
    "tokens.typography.family.ui": *home_evidence
    "tokens.typography.heading.size": *jobs_evidence
    "tokens.typography.heading.weight": *jobs_evidence
    "tokens.typography.heading.lineHeight": *jobs_evidence
    "tokens.typography.heading.tracking": *jobs_evidence
    "tokens.typography.heading.use": *jobs_evidence
    "tokens.typography.subtitle.size": *jobs_evidence
    "tokens.typography.subtitle.weight": *jobs_evidence
    "tokens.typography.subtitle.lineHeight": *jobs_evidence
    "tokens.typography.subtitle.tracking": *jobs_evidence
    "tokens.typography.subtitle.use": *jobs_evidence
    "tokens.typography.body.size": *home_evidence
    "tokens.typography.body.weight": *home_evidence
    "tokens.typography.body.lineHeight": *home_evidence
    "tokens.typography.body.use": *home_evidence
    "tokens.typography.caption.size": *jobs_evidence
    "tokens.typography.caption.weight": *jobs_evidence
    "tokens.typography.caption.lineHeight": *jobs_evidence
    "tokens.typography.caption.tracking": *jobs_evidence
    "tokens.typography.caption.use": *jobs_evidence
    "tokens.spacing.xs": *jobs_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *jobs_evidence
    "tokens.spacing.lg": *home_evidence
    "tokens.spacing.xl": *home_evidence
    "tokens.rounded.control": *home_evidence
    "tokens.rounded.card": *jobs_evidence
    "tokens.rounded.menu": &montage_evidence { surface_id: montage, source_id: montage-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.rounded.full": *home_evidence
    "tokens.shadow.menu": *montage_evidence
    "tokens.components.header-action.type": *home_evidence
    "tokens.components.header-action.bg": *home_evidence
    "tokens.components.header-action.fg": *home_evidence
    "tokens.components.header-action.shadow": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "button.wds-wwzlv7 회원가입/로그인 (border none)", captured: "2026-09-29" }
    "tokens.components.header-action.radius": *home_evidence
    "tokens.components.header-action.padding": *home_evidence
    "tokens.components.header-action.height": *home_evidence
    "tokens.components.header-action.font": *home_evidence
    "tokens.components.header-action.hover": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "button.wds-wwzlv7 state layer div.wds-bi8qpk at :hover", captured: "2026-09-29" }
    "tokens.components.header-action.pressed": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "button.wds-wwzlv7 state layer div.wds-bi8qpk at :active", captured: "2026-09-29" }
    "tokens.components.header-action.focus": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "button.wds-wwzlv7 at :focus-visible, Tab stop 11", captured: "2026-09-29" }
    "tokens.components.header-action.states": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "button.wds-wwzlv7 회원가입/로그인", captured: "2026-09-29" }
    "tokens.components.header-action.use": *home_evidence
    "tokens.components.filter-button.type": *jobs_evidence
    "tokens.components.filter-button.bg": *jobs_evidence
    "tokens.components.filter-button.fg": *jobs_evidence
    "tokens.components.filter-button.shadow": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "button.TagList_TagList__tag__allTag 태그 전체 (border none)", captured: "2026-09-29" }
    "tokens.components.filter-button.radius": *jobs_evidence
    "tokens.components.filter-button.padding": *jobs_evidence
    "tokens.components.filter-button.height": *jobs_evidence
    "tokens.components.filter-button.font": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "button.TagList_TagList__tag__allTag label span 태그 전체", captured: "2026-09-29" }
    "tokens.components.filter-button.hover": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "button 태그 전체 state layer div.wds-bi8qpk at :hover", captured: "2026-09-29" }
    "tokens.components.filter-button.pressed": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "button 태그 전체 state layer div.wds-bi8qpk at :active", captured: "2026-09-29" }
    "tokens.components.filter-button.focus": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "button 태그 전체 at :focus-visible, Tab stop 19", captured: "2026-09-29" }
    "tokens.components.filter-button.states": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "button.TagList_TagList__tag__allTag 태그 전체", captured: "2026-09-29" }
    "tokens.components.filter-button.use": *jobs_evidence
    "tokens.components.mini-job-card.type": *home_evidence
    "tokens.components.mini-job-card.bg": *home_evidence
    "tokens.components.mini-job-card.radius": *home_evidence
    "tokens.components.mini-job-card.gap": *home_evidence
    "tokens.components.mini-job-card.font": *home_evidence
    "tokens.components.mini-job-card.hover": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.MiniJobCard_MiniJobCard__E1SH1 (first of 36) at :hover, fixed probe tool (raw/tool-fix-wanted-home.json)", captured: "2026-09-29" }
    "tokens.components.mini-job-card.pressed": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.MiniJobCard_MiniJobCard__E1SH1 (first of 36) at :active, fixed probe tool (raw/tool-fix-wanted-home.json)", captured: "2026-09-29" }
    "tokens.components.mini-job-card.focus": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.MiniJobCard_MiniJobCard__E1SH1 at :focus-visible, Tab stop 83", captured: "2026-09-29" }
    "tokens.components.mini-job-card.states": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.MiniJobCard_MiniJobCard__E1SH1 (first of 36)", captured: "2026-09-29" }
    "tokens.components.mini-job-card.use": *home_evidence
    "tokens.components.job-card.type": *jobs_evidence
    "tokens.components.job-card.bg": *jobs_evidence
    "tokens.components.job-card.radius": *jobs_evidence
    "tokens.components.job-card.bodyPadding": *jobs_evidence
    "tokens.components.job-card.gap": *jobs_evidence
    "tokens.components.job-card.font": *jobs_evidence
    "tokens.components.job-card.hover": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "li.Card_Card__aaatv a (first of 20) at :hover", captured: "2026-09-29" }
    "tokens.components.job-card.pressed": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "li.Card_Card__aaatv a (first of 20) at :active", captured: "2026-09-29" }
    "tokens.components.job-card.focus": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "li.Card_Card__aaatv a at :focus-visible, Tab stop 39", captured: "2026-09-29" }
    "tokens.components.job-card.states": { surface_id: jobs, source_id: wanted-probe-jobs, method: live-state-probe, selector: "li.Card_Card__aaatv a (first of 20)", captured: "2026-09-29" }
    "tokens.components.job-card.use": *jobs_evidence
    "tokens.components.search-dialog.type": *home_evidence
    "tokens.components.search-dialog.bg": *home_evidence
    "tokens.components.search-dialog.fg": *home_evidence
    "tokens.components.search-dialog.inputFont": *home_evidence
    "tokens.components.search-dialog.states": *home_evidence
    "tokens.components.search-dialog.use": *home_evidence
    "tokens.components.montage-menu.type": *montage_evidence
    "tokens.components.montage-menu.bg": *montage_evidence
    "tokens.components.montage-menu.radius": *montage_evidence
    "tokens.components.montage-menu.gap": *montage_evidence
    "tokens.components.montage-menu.shadow": *montage_evidence
    "tokens.components.montage-menu.states": *montage_evidence
    "tokens.components.montage-menu.use": *montage_evidence
    "tokens.components.explore-cta.type": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 탐색하기 (href /wdlist)", captured: "2026-09-29" }
    "tokens.components.explore-cta.bg": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 탐색하기 (href /wdlist)", captured: "2026-09-29" }
    "tokens.components.explore-cta.fg": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 탐색하기 (href /wdlist)", captured: "2026-09-29" }
    "tokens.components.explore-cta.radius": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 탐색하기 (href /wdlist)", captured: "2026-09-29" }
    "tokens.components.explore-cta.padding": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 탐색하기 (href /wdlist)", captured: "2026-09-29" }
    "tokens.components.explore-cta.height": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 탐색하기 (href /wdlist)", captured: "2026-09-29" }
    "tokens.components.explore-cta.font": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 탐색하기 (href /wdlist)", captured: "2026-09-29" }
    "tokens.components.explore-cta.hover": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 state layer div.wds-bi8qpk at :hover", captured: "2026-09-29" }
    "tokens.components.explore-cta.pressed": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 state layer div.wds-bi8qpk at :active", captured: "2026-09-29" }
    "tokens.components.explore-cta.focus": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 at :focus-visible, Tab stop 160", captured: "2026-09-29" }
    "tokens.components.explore-cta.states": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 탐색하기 (href /wdlist)", captured: "2026-09-29" }
    "tokens.components.explore-cta.use": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-uyh494 탐색하기 (href /wdlist)", captured: "2026-09-29" }
    "tokens.components.nav-link.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-link.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-link.fg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-link.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-link.font": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.nav-link.hover": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-u1wwx8 채용 at :hover", captured: "2026-09-29" }
    "tokens.components.nav-link.pressed": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-u1wwx8 채용 at :active", captured: "2026-09-29" }
    "tokens.components.nav-link.focus": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-u1wwx8 채용 label span at :focus-visible, Tab stop 2", captured: "2026-09-29" }
    "tokens.components.nav-link.states": { surface_id: home, source_id: wanted-probe-home, method: live-state-probe, selector: "a.wds-u1wwx8 채용", captured: "2026-09-29" }
    "tokens.components.nav-link.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-07-12" }
    "tokens.components.header-secondary-button.type": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.header-secondary-button.bg": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.header-secondary-button.radius": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.header-secondary-button.padding": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.header-secondary-button.height": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.header-secondary-button.shadow": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.header-secondary-button.states": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.header-secondary-button.use": { surface_id: home, source_id: home-live, method: computed-style, selector: "home::[data-omd-capture=\"10\"]", captured: "2026-07-12" }
    "tokens.components.tag-chip.type": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"18\"]", captured: "2026-07-12" }
    "tokens.components.tag-chip.bg": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"18\"]", captured: "2026-07-12" }
    "tokens.components.tag-chip.radius": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"18\"]", captured: "2026-07-12" }
    "tokens.components.tag-chip.padding": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"18\"]", captured: "2026-07-12" }
    "tokens.components.tag-chip.height": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"18\"]", captured: "2026-07-12" }
    "tokens.components.tag-chip.shadow": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"18\"]", captured: "2026-07-12" }
    "tokens.components.tag-chip.states": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"18\"]", captured: "2026-07-12" }
    "tokens.components.tag-chip.use": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"18\"]", captured: "2026-07-12" }
    "tokens.components.company-outline-button.type": { surface_id: company, source_id: company-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"11\"]", captured: "2026-07-12" }
    "tokens.components.company-outline-button.bg": { surface_id: company, source_id: company-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"11\"]", captured: "2026-07-12" }
    "tokens.components.company-outline-button.radius": { surface_id: company, source_id: company-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"11\"]", captured: "2026-07-12" }
    "tokens.components.company-outline-button.padding": { surface_id: company, source_id: company-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"11\"]", captured: "2026-07-12" }
    "tokens.components.company-outline-button.height": { surface_id: company, source_id: company-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"11\"]", captured: "2026-07-12" }
    "tokens.components.company-outline-button.shadow": { surface_id: company, source_id: company-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"11\"]", captured: "2026-07-12" }
    "tokens.components.company-outline-button.states": { surface_id: company, source_id: company-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"11\"]", captured: "2026-07-12" }
    "tokens.components.company-outline-button.use": { surface_id: company, source_id: company-live, method: computed-style, selector: "surface-4::[data-omd-capture=\"11\"]", captured: "2026-07-12" }
    "tokens.components.bookmark-button.type": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"38\"]", captured: "2026-07-12" }
    "tokens.components.bookmark-button.bg": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"38\"]", captured: "2026-07-12" }
    "tokens.components.bookmark-button.radius": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"38\"]", captured: "2026-07-12" }
    "tokens.components.bookmark-button.padding": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"38\"]", captured: "2026-07-12" }
    "tokens.components.bookmark-button.size": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"38\"]", captured: "2026-07-12" }
    "tokens.components.bookmark-button.states": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"38\"]", captured: "2026-07-12" }
    "tokens.components.bookmark-button.use": { surface_id: jobs, source_id: jobs-live, method: computed-style, selector: "surface-3::[data-omd-capture=\"38\"]", captured: "2026-07-12" }
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Six-surface current capture plus official Montage docs. Pretendard Variable is the visible UI family. Wanted Sans Variable and Pretendard JP Variable were declared but had zero visible use in the capture and are not promoted as UI tokens."
  colors:
    primary: "#0066ff"
    canvas: "#ffffff"
    heading: "#171719"
    body: "#333333"
    secondary: "#858688"
    subtle-surface: "#f8f8f8"
    hairline: "#e8e9ea"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Pretendard Variable" }
    heading: { size: 22, weight: 600, lineHeight: 1.36, tracking: -0.4268, use: "Current product section headings and Montage headings" }
    subtitle: { size: 16, weight: 600, lineHeight: 1.5, tracking: 0.0912, use: "Job-card position title" }
    body: { size: 14, weight: 400, lineHeight: 1.43, use: "Product lists, cards, actions, and supporting copy" }
    caption: { size: 12, weight: 500, lineHeight: 1.33, tracking: 0.3024, use: "Job-card industry and metadata" }
  spacing: { xs: 4, sm: 8, md: 14, lg: 20, xl: 40 }
  rounded: { control: 8, card: 12, menu: 16, full: 9999 }
  shadow:
    menu: "0 2px 4px -2px rgba(23,23,23,0.06), 0 4px 6px -1px rgba(23,23,23,0.06)"
  components_harvested: true
  components:
    header-action: { type: button, bg: "transparent", fg: "#0066ff", radius: "8px", padding: "7px 14px", height: "32px", font: "14px / 400 (the button's computed style; the visible label span's type was not read)", shadow: "rgba(112,115,124,0.16) 0 0 0 1px inset", hover: "overlay layer #171719 opacity 0 → 0.0375", pressed: "overlay layer #171719 opacity 0.09", focus: "outline #0066ff auto 1px, offset 0px (auto-style ring drawn in an authored colour) — measured 2026-09-29", states: "default captured 2026-07-12; hover and pressed measured 2026-09-29 on the empty state-layer child div.wds-bi8qpk (bg #171719, opacity 0 at rest); keyboard focus measured 2026-09-29 (Tab 11)", use: "Current product header account action" }
    filter-button: { type: button, bg: "transparent", fg: "#171719", radius: "8px", padding: "7px 11px", height: "36px", font: "15px / 500 / Pretendard Variable (label span; the button computes 14px / 400)", shadow: "rgba(112,115,124,0.16) 0 0 0 1px inset", hover: "overlay layer #171719 opacity 0 → 0.0375", pressed: "overlay layer #171719 opacity 0.09", focus: "outline 2px #0066ff, offset -2px, drawn inside the box (authored) — measured 2026-09-29", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 (Tab 19); no selected value inferred; rest transition background-color, color, box-shadow 0.3s", use: "All-tags and filter trigger on the job directory" }
    mini-job-card: { type: card, bg: "transparent", radius: "12px image", gap: "14px", font: "16px / 600 title", hover: "transform scale(1.025) on the media; the card's bookmark button goes visibility hidden → visible", pressed: "same as hover: transform scale(1.025) on the media, bookmark button visible", focus: "outline #0066ff auto 1px, offset 1px (auto-style ring in an authored colour) — measured 2026-09-29", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the first of 36 cards (Tab 83); the bookmark reveal was read by the fixed probe tool, which compares every descendant including visibility", use: "Horizontal recommended-job card on the current home surface" }
    job-card: { type: card, bg: "transparent", radius: "12px thumbnail", bodyPadding: "0px 6px", gap: "2px", font: "16px / 600 position title", hover: "transform scale(1.025) on the thumbnail image (308px → 315.7px wide)", pressed: "transform scale(1.025) on the thumbnail image (same as hover)", focus: "no visible indication: outline none and no other compared property changes on the link, its 12 descendants or 2 ancestors (measured 2026-09-29)", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the first of 20 cards (Tab 39), confirmed by a script that reads every descendant", use: "Vertical job result card on the current directory" }
    search-dialog: { type: input, bg: "#ffffff", fg: "#171719", inputFont: "16px / 400 / 24px", states: "dialog-open captured on four product surfaces", use: "Full-screen product search input revealed from the header" }
    montage-menu: { type: dialog, bg: "transparent", radius: "16px", gap: "4px", shadow: "0 2px 4px -2px rgba(23,23,23,0.06), 0 4px 6px -1px rgba(23,23,23,0.06)", states: "dialog-open captured on Montage pages", use: "Compact current Montage navigation/menu overlay" }
    explore-cta: { type: button, bg: "#0066ff", fg: "#ffffff", radius: "12px", padding: "12px 28px", height: "48px", font: "16px / 600 / Pretendard Variable (label span; the link computes 14px / 400)", hover: "overlay layer #171719 opacity 0 → 0.075", pressed: "overlay layer #171719 opacity 0.18", focus: "outline 2px #0066ff, offset 1px (authored, not the browser ring) — measured 2026-09-29", states: "rest, hover, pressed and keyboard focus measured 2026-09-29 (Tab 160); hover and pressed read on the empty state-layer child div.wds-bi8qpk; not in the 2026-07-12 capture", use: "Filled primary CTA 탐색하기 (link to /wdlist) at the bottom of the current home" }
    nav-link: { type: tab, bg: "transparent", fg: "#171719", height: "60px", font: "15px / 600 / Pretendard Variable, 0.144px tracking", hover: "no visible change (measured 2026-09-29)", pressed: "no visible change (measured 2026-09-29)", focus: "outline #0066ff auto 1px, offset 3px, on the label span (auto-style ring in an authored colour) — measured 2026-09-29", states: "default captured 2026-07-12 on the header of home, jobs and company; hover, pressed and keyboard focus measured 2026-09-29 on 채용 (Tab 2); the link declares transition color 0.2s yet shows no visible change", use: "Global header navigation link (채용, 이력서, 교육•이벤트 …)" }
    header-secondary-button: { type: button, bg: "transparent", radius: "8px", padding: "7px 14px", height: "32px", shadow: "rgba(112,115,124,0.16) 0 0 0 1px inset", states: "default captured 2026-07-12 on the home, jobs and company headers; no state was read; the label was not captured, so no text colour or type is declared", use: "Header employer-service button 기업 서비스 beside the account action" }
    tag-chip: { type: button, bg: "transparent", radius: "10px", padding: "7px 9px 7px 11px", height: "36px", shadow: "rgba(112,115,124,0.16) 0 0 0 1px inset", states: "default captured 2026-07-12 (three chips on the jobs directory); no state sample; the label was not captured, so no text colour or type is declared", use: "Job-directory tag chip beside the 태그 전체 trigger" }
    company-outline-button: { type: button, bg: "transparent", radius: "12px", padding: "12px 28px", height: "48px", shadow: "rgba(112,115,124,0.16) 0 0 0 1px inset", states: "default captured 2026-07-12 on /company; no state sample; the label was not captured, so no text colour or type is declared", use: "Large outline button on the company service page; same height, radius and padding as the filled explore CTA" }
    bookmark-button: { type: button, bg: "transparent", radius: "50%", padding: "8px", size: "40px x 40px", states: "default captured 2026-07-12 (one in each of the 20 job cards); not state-read on 2026-09-29, when hovering the card left its own state layer unchanged", use: "Bookmark icon button nested in each directory job card (24px icon)" }
---

# Design System Inspiration of Wanted (원티드)

## 1. Visual Theme & Atmosphere

Wanted is a Korean career platform that connects job discovery, company information, career content, and employer services around the idea that every working person should be able to work more like themselves. Its current product is quieter and denser than a campaign page: white surfaces, `#171719` headings, `#333333` body copy, restrained translucent metadata, and `#0066ff` reserved for recognizable actions. The signature visual unit is not a generic elevated card but a job result composed from a 12px media thumbnail, a compact 16px/600 position title, company and location metadata, and generous grid rhythm.

Montage is Wanted's current official product-experience design system. Its 2026 site frames reusable foundations and components as a way to combine individual parts into a consistent, intuitive service, and publishes cross-platform component guidance rather than only a static brand kit. The live product and Montage capture both visibly used Pretendard Variable. Wanted Sans Variable and Pretendard JP Variable were present as declared downloadable faces but had zero visible computed use in the inspected nodes, so this reference keeps their existence as font evidence without rendering either as the current UI family.

**Key Characteristics:**
- `#0066ff` interactive accent on a white product canvas
- Loaded Pretendard Variable with 1,575 visible uses across product and Montage
- 12px image/card geometry, 8px controls, and 16px overlay menus
- Product search dialog captured through safe interaction on four product routes
- Current job-card composition documented separately from Montage primitives

## Primary tasks

- Compare role, company, location, and reward across job postings
- Narrow a new career direction by searching openings
- Filter the job directory down to the tags you want
- Open a job recommended to you on the home page
- Check what Wanted offers employers on its company service

## 2. Color Palette & Roles

- **Primary action** (`#0066ff`): current account/action text across four product surfaces.
- **Heading** (`#171719`): product headings, position titles, and controls.
- **Body** (`#333333`): dominant product list and card copy.
- **Secondary** (`#858688`): the observed 61% metadata color resolved on white.
- **Canvas** (`#ffffff`): page, dialog, and content surface.
- **Subtle surface** (`#f8f8f8`): current secondary product background.
- **Hairline** (`#e8e9ea`): the observed 16% control boundary resolved on white.

The old marketing orange, pink, sky, violet, semantic error/success/warning, and `#f7f7f8` claims were not promoted because the current capture did not establish those roles at the same surface boundary.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Montage publishes Wanted's current product typography utilities and scale. |
| Live surface-use | Pretendard Variable loaded/high with 1,575 visible uses across six captured surfaces. |
| Official distributed asset | Montage links font resources; asset licensing must be checked per resource before redistribution. |
| Declared-only | Pretendard JP Variable and Wanted Sans Variable were declared with source files but zero visible use. |
| Unresolved | Campaign-only use of Wanted Sans and native-app overrides remain unresolved. |

### Current observed hierarchy

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Section heading | 22px | 600 | 30px | -0.4268px |
| Job position | 16px | 600 | 24px | 0.0912px |
| Supporting title | 15px | 600 | 22px | 0.144px |
| Product body | 14px | 400 | 20px | normal |
| Metadata | 12px | 500 | 16px | 0.3024px |

Montage's official typography utility documents a broader scale from Display 1 through Caption 2. That published scale is useful system context; the smaller machine token set above contains only roles grounded in this capture.

## 4. Component Stylings

### Current verified components

#### Header account action
- Transparent background, `#0066ff` label, 8px radius
- 1px translucent boundary drawn as an inset box-shadow, `rgba(112,115,124,0.16) 0 0 0 1px inset`; the border is none (the July wording "1px inset border" named the wrong property). 7px × 14px padding; 32px height
- Hover and pressed: an empty child layer (`div.wds-bi8qpk`, the button's full size, `#171719`, opacity 0 at rest) rises to opacity `0.0375` on hover and `0.09` pressed; nothing else on the button or its descendants changes (measured 2026-09-29 by a script that reads every descendant)
- Focus: an auto-style ring drawn in `#0066ff` (`outline #0066ff auto 1px`, offset 0), not the browser's default `#005fcc` (Tab 11, measured 2026-09-29)

#### Job filter trigger
- Transparent, `#171719`, 8px radius, the same inset box-shadow boundary `rgba(112,115,124,0.16) 0 0 0 1px inset` (border none)
- 7px × 11px padding; 36px height; label 15px/500 (the button element itself computes 14px/400)
- Hover and pressed: the same `#171719` state layer at opacity `0.0375` / `0.09`. Focus: an authored `outline 2px #0066ff` at offset -2px, drawn inside the box (Tab 19). Rest transition `background-color, color, box-shadow 0.3s` (all measured 2026-09-29)

#### Mini job card
- Horizontal 120×90 media with 12px radius and 14px content gap
- Position title 16px/600/24px
- Hover and pressed: the media scales `1.025`, and the card's bookmark button (with its svg) goes from `visibility: hidden` to visible. The first probe pass missed the reveal because it did not compare visibility; the fixed probe tool read it (2026-09-29, `probe-tool-fix.md`). Focus: an auto-style ring in `#0066ff`, offset 1px (Tab 83, measured 2026-09-29)

#### Directory job card
- 308×205 media thumbnail with 12px radius and 8px bottom margin
- Body uses 0 6px padding and 2px internal gap; position title 16px/600
- Hover and pressed: only the thumbnail image scales `1.025` (308px → 315.7px); the card does not lift or tint. Focus: no visible indication — `:focus-visible` matched and no outline or other compared property changed on the link, its 12 descendants or 2 ancestors (Tab 39, measured 2026-09-29, confirmed by a second script)

#### Search dialog
- White full-screen search surface revealed through the current header
- Input `#171719`, 16px/400/24px; `dialog-open` observed on four product routes
- UNMEASURED on 2026-09-29: the input exists only after the header search button is activated, and the probe never activates a control, so no state of it was read

#### Montage menu
- 16px radius, 4px gap, subtle two-layer shadow
- Open overlay captured on both Montage surfaces

A filled CTA now has a current sample: `explore-cta`, measured on 2026-09-29 and recorded below. No segmented control, form validation, toast, or native navigation token is promoted without a current matching sample.

### Measured and added components (captured 2026-07-12; states measured 2026-09-29)

Hover, pressed and keyboard focus below come from the 2026-09-29 live probe of the home and jobs pages (real `:hover`, `:active`, and Tab to `:focus-visible`). Rest values come from the July capture unless marked 2026-09-29.

#### Explore CTA (`explore-cta`, 2026-09-29)
- `#0066ff` fill, `#ffffff` label, 12px radius, padding 12px 28px, 48px tall, 240px wide; the label span is 16px/600 Pretendard Variable (the link element computes 14px/400)
- Hover and pressed: the `#171719` state layer at opacity `0.075` / `0.18`. Focus: an authored `outline 2px #0066ff`, offset 1px, not the browser ring (Tab 160)
- 탐색하기 (link to /wdlist) at the bottom of the current home. It is absent from the July capture, which is why §4 used to say no filled CTA had a current sample

#### Header nav link (`nav-link`)
- `#171719`, 15px/600 Pretendard Variable with 0.144px tracking, no fill, 60px tall inside the fixed 61px header
- Hover and pressed: no visible change, although the link declares `transition: color 0.2s` (measured 2026-09-29 on 채용; the probe tool and a descendant cross-check agree). Two July frames read `#1a1a1c` and `#18181a`, one to three channel units off rest with no sibling agreement; they are not declared
- Focus: an auto-style ring in `#0066ff`, offset 3px, drawn on the label span rather than on the link (Tab 2; found by the cross-check, which compares descendants' outlines)

#### Header secondary button (`header-secondary-button`)
- Transparent, 8px radius, padding 7px 14px, 32px tall (89px wide), with the inset box-shadow boundary `rgba(112,115,124,0.16) 0 0 0 1px inset`: 기업 서비스 on the home, jobs and company headers
- The label was not captured, so no text colour or type is declared; no state was read

#### Tag chip (`tag-chip`)
- Transparent, 10px radius, padding 7px 9px 7px 11px, 36px tall, the same inset box-shadow boundary; three chips beside 태그 전체 on the jobs directory
- The label was not captured; no state sample

#### Company outline button (`company-outline-button`)
- Transparent, 12px radius, padding 12px 28px, 48px tall (175px wide), the inset box-shadow boundary; on /company
- It shares the explore CTA's 48px height, 12px radius and 12px 28px padding: the outline counterpart of the filled button. The label was not captured; no state sample

#### Bookmark button (`bookmark-button`)
- Transparent, 50% radius, 8px padding, 40px × 40px around a 24px icon; one inside each of the 20 job cards on the jobs directory
- Not state-read. Hovering the card leaves the bookmark's own state layer (`div.wds-72zywr`, opacity 0) unchanged (2026-09-29)

Six controls have hover, pressed and keyboard focus all measured: header-action, filter-button, explore-cta, nav-link, mini-job-card and job-card.

### Published component roster (53 published, none measured here)

Wanted's Montage publishes **53 components** in six categories, read from the rendered navigation
of its own component index at `https://montage.wanted.co.kr/docs/components` on 2026-09-19. The
categories are Montage's own. No value, state or geometry below is asserted by this reference.

- **Actions (5)** — Action area, Button, Chip, Icon button, Text button
- **Contents (11)** — Accordion, Avatar, Avatar group, Card, Content badge, List card, List cell, Play badge, Section header, Table, Thumbnail
- **Feedback (8)** — Alert, Fallback view, Push badge, Section message, Snackbar, Toast, Loading, Skeleton
- **Navigations (9)** — Bottom navigation, Category, Page counter, Pagination, Pagination dots, Progress indicator, Progress tracker, Tab, Top navigation
- **Presentation (6)** — Autocomplete, Bottom sheet, Menu, Popover, Popup, Tooltip
- **Selection and input (14)** — Check mark, Checkbox, Date picker, Filter button, Framed style, Radio, Search field, Segmented control, Select, Slider, Switch, Text area, Text field, Time picker

### What this reference measured

The component stylings in §4 were captured on Wanted's product surfaces — the first reads "Current
product header account action" — not on the Montage documentation site. The `montage` strings
elsewhere in this file are source URLs, not classes on a capture. None of the 53 above carries a
measured value here.

## 5. Layout Principles

- Job discovery uses repeatable grid rhythm while the card body itself stays flat.
- Keep 12px media rounding distinct from 8px product controls and 16px overlays.
- Dense metadata belongs below a clear 16px/600 position title.
- Product composition and Montage documentation examples may share foundations but are not interchangeable evidence.

## 6. Depth & Elevation

Most current product cards are flat: on hover they zoom their media (`scale(1.025)`) and do not lift (measured 2026-09-29). Controls draw their 1px translucent boundary as an inset box-shadow (`rgba(112,115,124,0.16) 0 0 0 1px inset`), while the captured Montage menu uses a low-opacity two-layer shadow. No generic modal shadow is promoted.

## 7. Do's and Don'ts

### Do
- Reserve `#0066ff` for clear actions and selection meaning.
- Use the verified flat job-card composition for career listings.
- Keep declared fonts separate from visibly used fonts.

### Don't
- Do not render Wanted Sans as current product UI merely because its files are declared.
- Do not invent colored semantic states from an old snapshot. The only filled CTA with a current sample is the `#0066ff` 탐색하기 button.
- Do not turn every content block into a shadowed 12px card.

## 8. Responsive Behavior

The inspected product adapts repeated job units and search overlays while retaining the same type and radius hierarchy. Exact breakpoints and native-app navigation behavior were not promoted from these desktop captures.

## 9. Agent Prompt Guide

> Build a calm Korean career-discovery surface with a white canvas, `#171719` headings, `#333333` body text, `#0066ff` actions, Pretendard Variable, flat job cards, 12px media, and compact 8px filter controls. Press and hover Montage buttons through a `#171719` state layer at low opacity, zoom card media 1.025 on hover, and draw keyboard focus in `#0066ff`; omit speculative status colors and native patterns.

## 10. Voice & Tone

Wanted's official system language is practical, encouraging, and centered on helping working people become more themselves. Product copy should make the next career action legible without overpromising a match or outcome. Search, filter, and job-detail language should prioritize concrete role, company, location, and process information. Employer-facing or system documentation may be more technical, but should preserve the same directness and respect for the reader's decision. Use direct labels, specific role/company information, and respectful guidance rather than motivational clichés.

## 11. Brand Narrative

Wanted's service story connects career possibility with a concrete browsing and matching workflow. Montage extends that promise internally: separate foundations and components combine into one coherent product experience, emphasizing extensibility, consistency, and efficiency. The current product therefore feels systematic without looking like a component showcase—blue actions and job information carry the experience while decoration stays secondary. The relationship matters because career decisions require both emotional confidence and reliable comparison. Wanted's public product supplies the browsable opportunities, while Montage documents how repeatable interaction patterns keep that information coherent as teams add new features. Typography stays neutral and highly legible so role and company evidence can lead. Brand color marks actions and ownership without turning every listing into campaign content.

## 12. Principles

1. **Help people work more like themselves.** Career choices should remain understandable and user-directed.
2. **Compose consistency from reusable parts.** Follow Montage's published extensibility, consistency, and efficiency framing.
3. **Information leads decoration.** Job role, company, and metadata establish hierarchy before campaign color.
4. **Font truth follows visible use.** A declared asset is not automatically the current UI face.

## 13. Personas

Public surfaces establish task contexts, not verified biographical personas:
- A job seeker comparing role, company, location, and reward information.
- A working professional using search to narrow a new career direction.
- An employer or product maker consulting Wanted's company service or Montage guidance.

Project-specific names, ages, goals, company sizes, and conversion assumptions are intentionally unspecified and must come from the product brief.

## 14. States

Measured 2026-09-29 with real `:hover`, `:active` and Tab to `:focus-visible` on the home and jobs pages:

- **Hover and pressed.** Montage buttons darken through an empty `#171719` state layer: opacity `0.0375` / `0.09` on the outline header action and filter trigger, `0.075` / `0.18` on the filled CTA. Cards zoom their media `scale(1.025)` and do not lift; the mini job card also reveals its bookmark button (`visibility: hidden` → visible). The header nav link shows no visible change.
- **Focus.** An authored `outline 2px #0066ff` on the explore CTA (offset 1px) and the filter trigger (offset -2px); an auto-style ring in `#0066ff` on the header action, the mini job card and the nav link's label; no visible indication on the directory job card.
- **Open states.** The full-screen search dialog and the Montage menu open states were captured on 2026-07-12. The search dialog was not re-measured on 2026-09-29, because it exists only after a click.

Error, success, loading, empty, disabled, and application-completion states remain absent.

## 15. Motion & Easing

No reusable duration or easing token was established. Dialog/menu expansion proves state change only; it does not authorize a universal motion curve. Computed transitions read on 2026-09-29: the nav link declares `color 0.2s` (with no visible colour change), the filter trigger `background-color, color, box-shadow 0.3s`, and the header action and explore CTA `all 0s`.

---

**Verified:** 2026-07-12 (omd:migrate) · states re-measured 2026-09-29 (live probe of the home and jobs pages)
**Tier 1 sources:** https://www.wanted.co.kr/ ; https://www.wanted.co.kr/wdlist/518 ; https://www.wanted.co.kr/company ; https://montage.wanted.co.kr/ ; https://montage.wanted.co.kr/docs/foundations ; https://montage.wanted.co.kr/docs/utilities/web-utilities/typography-style ; https://montage.wanted.co.kr/docs/components/actions/text-button/design
**Tier 2 attempts:** getdesign.md/wanted and styles.refero.design search; unavailable as positive evidence
**Conflicts unresolved:** none
