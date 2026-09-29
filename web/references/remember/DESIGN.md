---
id: remember
name: Remember
country: KR
category: productivity
homepage: "https://www.rememberapp.co.kr"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://cdn.rememberapp.co.kr/logos/remember/rmbr_og_image.png"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Remember UI
  url: "https://dramancompany.github.io/remember-ui/"
  type: system
  description: Public Remember UI Storybook deployment.
  og_image: "https://cdn.rememberapp.co.kr/logos/remember/rmbr_og_image.png"
verification_v2:
  schema: 2
  checked: "2026-09-29"
  surfaces:
    - { id: career-postings, kind: product, url: "https://career.rememberapp.co.kr/job/postings", inspected: "2026-07-13" }
    - { id: career-postings-repeat, kind: product, url: "https://career.rememberapp.co.kr/job/postings", inspected: "2026-07-13" }
    - { id: corporate-home, kind: marketing, url: "https://corp.remember.co.kr/", inspected: "2026-07-13" }
  sources:
    - { id: career-postings-live, kind: product-surface, url: "https://career.rememberapp.co.kr/job/postings", captured: "2026-07-13" }
    - { id: remember-component-index, kind: official-doc, url: "https://dramancompany.github.io/remember-ui/", captured: "2026-09-19" }
    - { id: corporate-home-live, kind: product-surface, url: "https://corp.remember.co.kr/", captured: "2026-07-13" }
    - { id: company-context, kind: official-doc, url: "https://corp.remember.co.kr/company", captured: "2026-07-13" }
    - { id: brand-guideline, kind: brand-asset, url: "https://static.rememberapp.co.kr/brand/brand_guideline_logo.pdf", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
    - { id: remember-probe, kind: product-surface, url: "https://career.rememberapp.co.kr/job/postings", captured: "2026-09-29" }
  conflicts: []
  claims:
    "tokens.colors.action-black": &career { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.surface": *career
    "tokens.colors.foreground": *career
    "tokens.colors.input-surface": *career
    "tokens.colors.muted": *career
    "tokens.colors.hairline": *career
    "tokens.colors.corporate-orange": &corporate { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.family.ui": *career
    "tokens.typography.body.size": *career
    "tokens.typography.body.weight": *career
    "tokens.typography.body.lineHeight": *career
    "tokens.typography.body.use": *career
    "tokens.typography.heading.size": *career
    "tokens.typography.heading.weight": *career
    "tokens.typography.heading.lineHeight": *career
    "tokens.typography.heading.use": *career
    "tokens.typography.card-title.size": *career
    "tokens.typography.card-title.weight": *career
    "tokens.typography.card-title.lineHeight": *career
    "tokens.typography.card-title.use": *career
    "tokens.spacing.xs": *career
    "tokens.spacing.sm": *career
    "tokens.spacing.md": *career
    "tokens.spacing.lg": *career
    "tokens.spacing.xl": *career
    "tokens.rounded.sm": *career
    "tokens.rounded.md": *career
    "tokens.rounded.lg": *career
    "tokens.components.career-outline-dialog-button.type": *career
    "tokens.components.career-outline-dialog-button.bg": *career
    "tokens.components.career-outline-dialog-button.fg": *career
    "tokens.components.career-outline-dialog-button.border": *career
    "tokens.components.career-outline-dialog-button.radius": *career
    "tokens.components.career-outline-dialog-button.padding": *career
    "tokens.components.career-outline-dialog-button.font": *career
    "tokens.components.career-outline-dialog-button.hover": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.fWHJNX 기업 서비스 at :hover, ::before", captured: "2026-09-29" }
    "tokens.components.career-outline-dialog-button.pressed": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.fWHJNX 기업 서비스 at :active, ::before", captured: "2026-09-29" }
    "tokens.components.career-outline-dialog-button.focus": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.fWHJNX at :focus-visible, Tab stop 10", captured: "2026-09-29" }
    "tokens.components.career-outline-dialog-button.states": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.fWHJNX 기업 서비스, aria-expanded false", captured: "2026-09-29" }
    "tokens.components.career-outline-dialog-button.use": *career
    "tokens.components.career-job-list-item.type": *career
    "tokens.components.career-job-list-item.fg": *career
    "tokens.components.career-job-list-item.radius": *career
    "tokens.components.career-job-list-item.font": *career
    "tokens.components.career-job-list-item.use": *career
    "tokens.components.career-job-list-item.hover": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "li.sc-3c9cd5df-0 > a.sc-567718ed-0 (first curated posting, second load) at :hover", captured: "2026-09-29" }
    "tokens.components.career-job-list-item.pressed": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "li.sc-3c9cd5df-0 > a.sc-567718ed-0 (second load) at :active", captured: "2026-09-29" }
    "tokens.components.career-job-list-item.focus": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "a.sc-567718ed-0 at :focus-visible, Tab stop 75 (second load)", captured: "2026-09-29" }
    "tokens.components.career-job-list-item.states": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "li.sc-3c9cd5df-0 > a.sc-567718ed-0, title label div.sc-3c9cd5df-6", captured: "2026-09-29" }
    "tokens.components.filled-auth-control.type": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.filled-auth-control.bg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.filled-auth-control.fg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.filled-auth-control.radius": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.filled-auth-control.padding": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.filled-auth-control.size": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.filled-auth-control.font": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.filled-auth-control.hover": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-613fcc33-3 로그인 at :hover", captured: "2026-09-29" }
    "tokens.components.filled-auth-control.pressed": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-613fcc33-3 로그인 at :active", captured: "2026-09-29" }
    "tokens.components.filled-auth-control.focus": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-613fcc33-3 로그인 at :focus-visible, Tab stop 8", captured: "2026-09-29" }
    "tokens.components.filled-auth-control.states": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-613fcc33-3 로그인", captured: "2026-09-29" }
    "tokens.components.filled-auth-control.use": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"8\"]", captured: "2026-07-13" }
    "tokens.components.white-header-control.type": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.white-header-control.bg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.white-header-control.fg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.white-header-control.radius": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.white-header-control.padding": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.white-header-control.size": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.white-header-control.font": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.white-header-control.hover": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.dHAHdk 회원가입 at :hover", captured: "2026-09-29" }
    "tokens.components.white-header-control.pressed": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.dHAHdk 회원가입 at :active", captured: "2026-09-29" }
    "tokens.components.white-header-control.focus": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.dHAHdk 회원가입 at :focus-visible, Tab stop 9", captured: "2026-09-29" }
    "tokens.components.white-header-control.states": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.dHAHdk 회원가입", captured: "2026-09-29" }
    "tokens.components.white-header-control.use": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"9\"]", captured: "2026-07-13" }
    "tokens.components.search-input.type": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.search-input.bg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.search-input.fg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.search-input.radius": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.search-input.padding": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.search-input.size": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.search-input.font": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.search-input.hover": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "section#topSearchBar input at :hover", captured: "2026-09-29" }
    "tokens.components.search-input.pressed": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "section#topSearchBar input at :active", captured: "2026-09-29" }
    "tokens.components.search-input.focus": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "section#topSearchBar input at :focus-visible, Tab stop 25", captured: "2026-09-29" }
    "tokens.components.search-input.states": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "section#topSearchBar input", captured: "2026-09-29" }
    "tokens.components.search-input.use": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.filter-control.type": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"129\"] through [data-omd-capture=\"134\"]", captured: "2026-07-13" }
    "tokens.components.filter-control.bg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"129\"] through [data-omd-capture=\"134\"]", captured: "2026-07-13" }
    "tokens.components.filter-control.fg": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button 직무, visible label div.sc-db17a579-0", captured: "2026-09-29" }
    "tokens.components.filter-control.border": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"129\"] through [data-omd-capture=\"134\"]", captured: "2026-07-13" }
    "tokens.components.filter-control.radius": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"129\"] through [data-omd-capture=\"134\"]", captured: "2026-07-13" }
    "tokens.components.filter-control.padding": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"129\"] through [data-omd-capture=\"134\"]", captured: "2026-07-13" }
    "tokens.components.filter-control.size": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"129\"] through [data-omd-capture=\"134\"]", captured: "2026-07-13" }
    "tokens.components.filter-control.font": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button 직무, visible label div.sc-db17a579-0", captured: "2026-09-29" }
    "tokens.components.filter-control.hover": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-31c2a97b-0 직무 at :hover", captured: "2026-09-29" }
    "tokens.components.filter-control.pressed": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-31c2a97b-0 직무 at :active", captured: "2026-09-29" }
    "tokens.components.filter-control.focus": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-31c2a97b-0 직무 at :focus-visible, Tab stop 153", captured: "2026-09-29" }
    "tokens.components.filter-control.states": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-31c2a97b-0 직무", captured: "2026-09-29" }
    "tokens.components.filter-control.use": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"129\"] through [data-omd-capture=\"134\"]", captured: "2026-07-13" }
    "tokens.components.header-nav-link.type": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "nav a.sc-613fcc33-2 채용공고, rest at page top", captured: "2026-09-29" }
    "tokens.components.header-nav-link.bg": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "nav a.sc-613fcc33-2 채용공고, rest at page top", captured: "2026-09-29" }
    "tokens.components.header-nav-link.fg": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "nav a.sc-613fcc33-2 채용공고, rest at page top", captured: "2026-09-29" }
    "tokens.components.header-nav-link.padding": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "nav a.sc-613fcc33-2 채용공고, rest at page top", captured: "2026-09-29" }
    "tokens.components.header-nav-link.size": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "nav a.sc-613fcc33-2 채용공고, rest at page top", captured: "2026-09-29" }
    "tokens.components.header-nav-link.font": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "nav a.sc-613fcc33-2 채용공고, rest at page top", captured: "2026-09-29" }
    "tokens.components.header-nav-link.selected": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "nav a.sc-613fcc33-2 채용공고, rest at page top", captured: "2026-09-29" }
    "tokens.components.header-nav-link.hover": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "a 채용공고 at :hover", captured: "2026-09-29" }
    "tokens.components.header-nav-link.pressed": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "a 채용공고 at :active", captured: "2026-09-29" }
    "tokens.components.header-nav-link.focus": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "a 채용공고 at :focus-visible, Tab stop 2", captured: "2026-09-29" }
    "tokens.components.header-nav-link.states": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "nav a.sc-613fcc33-2 채용공고, rest at page top", captured: "2026-09-29" }
    "tokens.components.header-nav-link.use": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "nav a.sc-613fcc33-2 채용공고, rest at page top", captured: "2026-09-29" }
    "tokens.components.search-submit.type": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"21\"]", captured: "2026-07-13" }
    "tokens.components.search-submit.bg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"21\"]", captured: "2026-07-13" }
    "tokens.components.search-submit.fg": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button 검색, visible label div.sc-db17a579-0", captured: "2026-09-29" }
    "tokens.components.search-submit.radius": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"21\"]", captured: "2026-07-13" }
    "tokens.components.search-submit.padding": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"21\"]", captured: "2026-07-13" }
    "tokens.components.search-submit.size": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"21\"]", captured: "2026-07-13" }
    "tokens.components.search-submit.font": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button 검색, visible label div.sc-db17a579-0", captured: "2026-09-29" }
    "tokens.components.search-submit.hover": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.lnGUHB 검색 at :hover", captured: "2026-09-29" }
    "tokens.components.search-submit.pressed": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.lnGUHB 검색 at :active", captured: "2026-09-29" }
    "tokens.components.search-submit.focus": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.lnGUHB 검색 at :focus-visible, Tab stop 26", captured: "2026-09-29" }
    "tokens.components.search-submit.states": { surface_id: career-postings, source_id: remember-probe, method: live-state-probe, selector: "button.sc-88df8ec2-0.lnGUHB 검색", captured: "2026-09-29" }
    "tokens.components.search-submit.use": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"21\"]", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.type": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.bg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.fg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.radius": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.padding": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.size": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.font": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-1\"] menu link", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.shadow": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.states": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-07-13" }
    "tokens.components.career-header-dialog.use": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-interaction-capture=\"dialog-0-0\"]", captured: "2026-07-13" }
    "tokens.components.career-card-icon-button.type": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"89\"] (100 occurrences)", captured: "2026-07-13" }
    "tokens.components.career-card-icon-button.bg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"89\"] (100 occurrences)", captured: "2026-07-13" }
    "tokens.components.career-card-icon-button.fg": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"89\"] (100 occurrences)", captured: "2026-07-13" }
    "tokens.components.career-card-icon-button.padding": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"89\"] (100 occurrences)", captured: "2026-07-13" }
    "tokens.components.career-card-icon-button.size": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"89\"] (100 occurrences)", captured: "2026-07-13" }
    "tokens.components.career-card-icon-button.states": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"89\"] (100 occurrences)", captured: "2026-07-13" }
    "tokens.components.career-card-icon-button.use": { surface_id: career-postings, source_id: career-postings-live, method: live-inspect, selector: "career-postings::[data-omd-capture=\"89\"] (100 occurrences)", captured: "2026-07-13" }
    "tokens.components.corporate-footer-link.type": { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, selector: "corporate-home::[data-omd-capture=\"17\"] to [data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.corporate-footer-link.bg": { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, selector: "corporate-home::[data-omd-capture=\"17\"] to [data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.corporate-footer-link.fg": { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, selector: "corporate-home::[data-omd-capture=\"17\"] to [data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.corporate-footer-link.font": { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, selector: "corporate-home::[data-omd-capture=\"17\"] to [data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.corporate-footer-link.hover": { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, selector: "corporate-home::[data-omd-capture=\"17\"]::state-hover (same on 18-20)", captured: "2026-07-13" }
    "tokens.components.corporate-footer-link.pressed": { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, selector: "corporate-home::[data-omd-capture=\"17\"]::state-pressed (same on 18-20)", captured: "2026-07-13" }
    "tokens.components.corporate-footer-link.states": { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, selector: "corporate-home::[data-omd-capture=\"17\"] to [data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.corporate-footer-link.use": { surface_id: corporate-home, source_id: corporate-home-live, method: live-inspect, selector: "corporate-home::[data-omd-capture=\"17\"] to [data-omd-capture=\"20\"]", captured: "2026-07-13" }
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Selector-backed career-product and corporate-marketing observations remain separate. No authenticated product, documentation chrome, or source-uncorroborated corporate display face is made a shared token."
  colors:
    action-black: "#000000"
    surface: "#ffffff"
    foreground: "#222222"
    input-surface: "#f2f2f2"
    muted: "#808080"
    hairline: "#d4d4d4"
    corporate-orange: "#fc5d11"
  typography:
    family: { ui: "Pretendard" }
    body: { size: 16, weight: 400, lineHeight: 1.45, use: "Repeated career posting text and controls" }
    heading: { size: 20, weight: 600, lineHeight: 1.30, use: "Career posting section heading" }
    card-title: { size: 16, weight: 400, lineHeight: 1.45, use: "Career posting card title" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 }
  rounded: { sm: 4, md: 6, lg: 8 }
  components:
    career-outline-dialog-button: { type: button, bg: "transparent", fg: "#ffffff", border: "1px solid #ffffff", radius: "6px", padding: "0px 12px", font: "14px/400 Pretendard", hover: "overlay layer opacity 0 → 0.1 (::before #ffffff over the transparent button on the #000000 header: it lightens the button by compositing arithmetic; not pixel-checked)", pressed: "overlay layer opacity 0 → 0.2 (the same #ffffff layer; it lightens the button by arithmetic; not pixel-checked)", focus: "outline 2px #000000, offset 2px (authored ring); black on the black header, so its visibility is doubtful by arithmetic — measured 2026-09-29, not pixel-checked", states: "dialog-open observed from this trigger 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 (Tab 10); the probe never clicks, so the dialog was not re-opened; aria-expanded false at rest", use: "Career postings header control at career-postings::[data-omd-capture=10]" }
    career-job-list-item: { type: listItem, fg: "#222222", radius: "0px", font: "16px/400 Pretendard", hover: "no change in the compared scope (the card link, its ::before/::after, 18 descendants incl. 1 svg, 1 path and 1 img, 3 ancestor levels) — measured 2026-09-29", pressed: "no change in the compared scope (same scope as hover) — measured 2026-09-29", focus: "no focus indication in the compared scope (same scope as hover) — measured 2026-09-29", states: "default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on the link inside the first curated posting item (Tab 75, second load); its title label is 16px / 600 #000000", use: "Chromeless job-list item at career-postings::li; 162px-wide representative capture" }
    filled-auth-control: { type: button, bg: "#000000", fg: "#ffffff", radius: "4px", padding: "0px", size: "36px x 32px", font: "14px / 400 / Pretendard", hover: "no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29", pressed: "no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29", focus: "no focus indication in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 로그인 (Tab 8), logged out and never activated; transition all 0s", use: "Career header 로그인 control" }
    white-header-control: { type: button, bg: "#ffffff", fg: "#000000", radius: "6px", padding: "0px 12px", size: "72px x 32px", font: "14px / 400 / Pretendard", hover: "overlay layer opacity 0 → 0.1 (::before #ffffff over the #ffffff fill: invisible by compositing arithmetic; not pixel-checked)", pressed: "overlay layer opacity 0 → 0.2 (the same #ffffff layer: invisible by compositing arithmetic; not pixel-checked)", focus: "outline 2px #000000, offset 2px (authored ring) — measured 2026-09-29", states: "default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 회원가입 (Tab 9), never activated; the ::before layer is full-size", use: "Career header 회원가입 control" }
    search-input: { type: input, bg: "#f2f2f2", fg: "#808080", radius: "4px", padding: "0px 0px 0px 56px", size: "817px x 52px", font: "16px / 400 / Pretendard", hover: "no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29", pressed: "no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29", focus: "no focus indication in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 (Tab 25); nothing was typed; the placeholder colour was not read separately", use: "Career search field (직무, 회사를 검색해 주세요)" }
    filter-control: { type: button, bg: "transparent", fg: "#000000", border: "1px solid #d4d4d4", radius: "4px", padding: "10px 16px", size: "82px x 42px", font: "14px / 400 / Pretendard (visible label; the button itself computes #222222 16px / 400)", hover: "no change in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29", pressed: "no change in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29", focus: "no focus indication in the compared scope (self, its ::before/::after, 4 descendants incl. 1 svg and 1 path, 3 ancestor levels) — measured 2026-09-29", states: "six controls captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 직무 only (Tab 153); 연봉 and 지역 share its class", use: "Career posting filter button (직무, 연봉, 지역 and three more)" }
    header-nav-link: { type: tab, bg: "transparent", fg: "#ffffff", padding: "4px 8px 0px", size: "71px x 60px", font: "16px / 600 / Pretendard", selected: "::after bg #ff6a0d, a 2px bar under the current section link; unchanged in every state", hover: "fg #808080", pressed: "fg #808080", focus: "fg #808080 (text colour only, no outline) — measured 2026-09-29", states: "default, hover, pressed and keyboard focus measured 2026-09-29 on 채용공고 (Tab 2); transition color 0.1s; the July hover, pressed and focus frames on these links (#f8f8f8, #e7e7e7, #dcdcdc and others) are mid-transition greys on the way to #808080 and are not used", use: "Career header product link (채용공고 and its siblings) on the black header" }
    search-submit: { type: button, bg: "#000000", fg: "#ffffff", radius: "6px", padding: "0px 12px", size: "116px x 52px", font: "18px / 400 / Pretendard (visible label; the button itself computes #000000 14px / 400)", hover: "overlay layer opacity 0 → 0.1 (::before #000000 over the #000000 fill: invisible by compositing arithmetic; not pixel-checked)", pressed: "overlay layer opacity 0 → 0.2 (the same #000000 layer: invisible by compositing arithmetic; not pixel-checked)", focus: "outline 2px #000000, offset 2px (authored ring) — measured 2026-09-29", states: "default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 검색 (Tab 26), never submitted", use: "Career search submit (검색) beside the search field" }
    career-header-dialog: { type: dialog, bg: "#ffffff", fg: "#000000", radius: "4px", padding: "8px 0px", size: "170px x 280px", font: "16px / 400 / Pretendard (menu links 170px x 44px, padding 0px 12px)", shadow: "rgba(0,0,0,0.1) 0px 4px 12px 0px", states: "open state captured 2026-07-13 after the 기업 서비스 trigger (dialog-open); the 2026-09-29 probe never clicks, so it was not re-opened", use: "Menu dialog opened from the career header 기업 서비스 control" }
    career-card-icon-button: { type: button, bg: "transparent", fg: "#222222", padding: "7px", size: "38px x 41px", states: "default captured 2026-07-13; no text node; not probed", use: "Icon-only button at the top edge of each career posting card; the probe report treats the posting card bookmark control as login-gated, and this button was not probed" }
    corporate-footer-link: { type: tab, bg: "transparent", fg: "#4c4e52", font: "12px / 400, line height 24px", hover: "fg #999999", pressed: "fg #999999", states: "default, hover and pressed captured 2026-07-13 on four footer links, identical in both states on all four, so settled rather than mid-transition; keyboard focus not measured", use: "Corporate site (corp.remember.co.kr) footer text link; marketing domain only" }
  components_harvested: true
---

# Design System Inspiration of Remember (리멤버)

## 1. Visual Theme & Atmosphere

Remember began with digitising business cards and has since expanded into a professional network that connects career opportunities, recruiting, community, and business relationships. The company describes its mission as connecting working people with opportunities for success; its company history records the 2014 app launch, 2019 recruiting launch, and 2024 company-name change to Remember & Company. On the supplied career-postings surface, that professional focus appears as dense, low-chrome information design: a white field, `#222222` reading text, `#000000` action elements, and narrow 4–6px corners. The separately captured corporate marketing site is deliberately more expressive, with `#fc5d11` display accents; it is not evidence that orange is the career product’s default action color. The official identity guideline likewise reserves black and off-white for the logotype rather than defining a universal application palette.

**Key characteristics:**

- Dense, chromeless career listings rather than elevated cards.
- Career-product action black (`#000000`) and reading foreground (`#222222`).
- Border-led 4px filter controls on a white (`#ffffff`) surface.
- Loaded Pretendard on the career route, backed by Remember-hosted font files.
- A corporate-only orange (`#fc5d11`) display treatment, not a general CTA token.

## Primary tasks

- Search the career postings for a role that fits
- Narrow the posting list with the filter controls
- Compare postings against each other in one dense list
- Read a posting for its qualification and its next action

## 2. Color Palette & Roles

### Career product surface

- **Action Black** (`#000000`): observed on the career header’s filled auth control and search submit. This is a career-route observation, not a whole-company rule.
- **White Surface** (`#ffffff`): observed filled header control and dialog surface.
- **Reading Foreground** (`#222222`): repeated career body, list, and filter-control text.
- **Input Surface** (`#f2f2f2`): observed career search field fill.
- **Muted Text** (`#808080`): observed career search input text/placeholder value.
- **Hairline** (`#d4d4d4`): observed 1px border on career filter controls.

### Corporate marketing surface

- **Corporate Orange** (`#fc5d11`): observed corporate-home display-heading color. It remains local to that marketing surface.

### Boundary

The July packet did not establish hover or focus colours; the 2026-09-29 live state probe did, on the career route only. Header product links turn `#808080` on hover, press and keyboard focus; a 2px `::after` bar in `#ff6a0d` marks the current section (a career-route value, distinct from the corporate `#fc5d11`); and three header and search buttons draw an authored `#000000` 2px focus ring. Product error, success, selected-filter, disabled, and authenticated-app colors remain omitted rather than inferred from older captures or adjacent Korean products.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party typography guide assigns a general Remember product type role in this pass. |
| Live computed surface-use | **Pretendard** is computed on the career route and is FontFaceSet-backed with six Remember CDN source URLs; it has 1,053 recorded uses across body, controls, cards, headings, input, list items, and dialog content. |
| Official distributed brand asset | The official brand guideline is a logo/identity guide, not a distributed type asset. |
| Declared-only | Inter and several placeholder family declarations occur with zero visible use; they are excluded from `tokens.typography.family`. |
| System / unresolved | Generic `sans-serif` is a system fallback. Founders Grotesk Condensed appears in computed corporate-marketing text but its packet record has no source URL; it remains outside shared machine tokens until its source provenance is corroborated. |

### Captured hierarchy

| Role | Family | Size | Weight | Line Height | Surface boundary |
|---|---|---:|---:|---:|---|
| Career section heading | Pretendard | 20px | 600 | 26px | `career-postings::h2` |
| Career card title | Pretendard | 16px | 400 | 23.2px | `career-postings::h3` |
| Repeated career body/control | Pretendard | 16px | 400 | 23.2px | career list, input, and controls |
| Corporate display heading | Founders Grotesk Condensed Medium | 100px | 400 | 92px | corporate marketing only; source provenance unresolved |

Do not substitute a system font for Pretendard or a named Founders face. The corporate display sample is useful observational context, but not a reusable UI-family token.

## 4. Component Stylings

### Career header controls

Rest values are the July 2026-07-13 capture unless marked. Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe (logged out, keyboard walk first, nothing activated); "no change" means no computed change across the control, its ::before/::after, every descendant and 3 ancestor levels.

**Filled Auth Control** (로그인)
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px
- Font: 14px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="8"]`; header auth control.
- Hover, pressed and keyboard focus: no change within scope (0 descendants). It has no focus indication.

**White Header Control** (회원가입)
- Background: `#ffffff`
- Text: `#000000`
- Radius: 6px
- Padding: 0px 12px
- Font: 14px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="9"]`; header control.
- Hover / pressed: a full-size `::before` layer in `#ffffff` goes from opacity 0 to 0.1 / 0.2. It is the fill's own colour, so by compositing arithmetic nothing visible changes; this was not pixel-checked.
- Keyboard focus: an authored `2px solid #000000` outline, offset 2px.

**Outline Dialog Trigger** (기업 서비스)
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 6px
- Padding: 0px 12px
- Font: 14px / 400 / Pretendard
- States: dialog-open observed after this trigger at `career-postings::[data-omd-capture="10"]`.
- Use: Career-postings header control.
- Hover / pressed: the same `::before` layer in `#ffffff`, opacity 0.1 / 0.2. Over the transparent button on the `#000000` header it lightens the button by arithmetic (not pixel-checked).
- Keyboard focus: the same `2px solid #000000` ring, offset 2px. It is black on the black header, so its visibility is doubtful by arithmetic.

**Header product link** (채용공고; probe rest reading, 2026-09-29)
- Transparent, `#ffffff` 16px / 600 Pretendard, padding 4px 8px 0px, 60px tall. A 2px `::after` bar in `#ff6a0d` marks the current section and never changes.
- Hover, pressed and keyboard focus: text `#ffffff` → `#808080` (`transition: color 0.1s`); no outline on focus.

**Header menu dialog**
- Background `#ffffff`, text `#000000`, 4px radius, padding 8px 0px, 170×280px, shadow `rgba(0,0,0,0.1) 0px 4px 12px 0px`; 16px / 400 menu links, 170×44px, padding 0px 12px.
- Use: the dialog opened from 기업 서비스 (July interaction capture). The probe never clicks, so it was not re-opened.

### Career search and filters

**Search Input**
- Background: `#f2f2f2`
- Text: `#808080`
- Radius: 4px
- Padding: 0px 0px 0px 56px
- Font: 16px / 400 / Pretendard
- Use: `career-postings::[data-omd-capture="20"]`.
- Hover, pressed and keyboard focus: no change within scope (0 descendants). No focus indication.

**Search submit** (검색)
- Background `#000000`, visible label `#ffffff` 18px / 400 (the button itself computes `#000000` 14px / 400), 6px radius, padding 0px 12px, 116×52px; `career-postings::[data-omd-capture="21"]`.
- Hover / pressed: a `::before` layer in `#000000`, opacity 0.1 / 0.2. It is the fill's own colour, so it is invisible by compositing arithmetic (not pixel-checked).
- Keyboard focus: `2px solid #000000` outline, offset 2px.

**Filter Control**
- Background: transparent
- Text: `#000000` visible label (the button itself computes `#222222`)
- Border: 1px solid `#d4d4d4`
- Radius: 4px
- Padding: 10px 16px
- Font: 14px / 400 / Pretendard visible label (the button itself computes 16px / 400)
- Use: `career-postings::[data-omd-capture="129"]` through `[data-omd-capture="134"]`; six controls.
- Hover, pressed and keyboard focus (measured on 직무): no change within scope (4 descendants including 1 svg and 1 path). No focus indication.

### Career list

**Job List Item**
- Text: `#222222`
- Radius: 0px
- Padding: 0px
- Font: 16px / 400 / Pretendard; the posting title label is 16px / 600 `#000000`
- Use: `career-postings::li`, representative 162px-wide, 250px-high chromeless job item; no card border, fill, or shadow was captured.
- Hover, pressed and keyboard focus (on the link inside the first curated item): no change within scope (18 descendants including 1 svg, 1 path and 1 img). No focus indication.

**Card icon button**
- Transparent, `#222222`, padding 7px, 38×41px, no text node; `career-postings::[data-omd-capture="89"]`, 100 occurrences at the top edge of the posting cards.
- Default only; not probed. The probe report treats the posting card's bookmark control as login-gated.

### Corporate marketing

**Footer link**
- Transparent, `#4c4e52` 12px / 400, line height 24px.
- Hover and pressed: `#999999`, identical on four links in both states (July capture, `corporate-home` only). Keyboard focus not measured.

---
**Verified:** 2026-07-13

**Tier 1 sources:** https://career.rememberapp.co.kr/job/postings · https://corp.remember.co.kr/ · https://corp.remember.co.kr/company · https://static.rememberapp.co.kr/brand/brand_guideline_logo.pdf

**Tier 2 sources:** https://getdesign.md/remember (attempted; no raw entry retrieved) · https://styles.refero.design/?q=remember (attempted; no raw result retrieved)

**Conflicts unresolved:** none

### Published component roster (32 published, none measured here)

remember-ui publishes **32 components**, read from its own index at `https://dramancompany.github.io/remember-ui/` on
2026-09-19. The groupings are the host's own. Every host in this group serves a shell to a plain
fetch, so the names come from the rendered page in a browser. No value, state or geometry below
is asserted by this reference.

- **BUTTONS** — BaseButton, CustomButton, LinkButton, MoreButton, NewBaseButton, TopButton
- **COMMON** — Chip, Container, Pagination, Spinner
- **CONTROL** — Accordion, BasePopover, BaseTooltip, Checkbox, InfoTooltip, PopoverItem, Radio, Select, Switch
- **ICON** — ProfileAvatar
- **INPUT** — BaseInput, DoubleInput, ImageInput, MaskingInput, Textarea
- **LOGO** — RememberLogo
- **MODAL** — BaseModal, ConfirmModal, DesignedModal, MessageModal, MobileFullModal, ProgressModal

Read from the Storybook sidebar. The seventh sidebar entry, `RDS`, is the documentation canvas
rather than a component group, and is excluded.

## 5. Layout Principles

### Career route

- Repeated list and control text is 16px; captured spacing clusters include 4px, 8px, 12px, 16px, and 24px.
- The representative job item is 162px wide and chromeless. Preserve the content-led list rhythm rather than turning it into a generic elevated card grid.
- The search input reserves 56px on its leading edge; do not generalise that offset to unrelated inputs.

### Corporate route

Corporate marketing typography and large display compositions are a separate surface. Its display treatment is not a layout specification for career search or signed-in product screens.

## 6. Depth & Elevation

The captured career list items and header/search controls record no box shadow. Use border and background contrast only where a selector-backed component above calls for it. No general modal elevation token is promoted from the captured dialog; its own `rgba(0,0,0,0.1) 0px 4px 12px 0px` shadow is recorded on the header menu dialog component only.

## 7. Do's and Don'ts

### Do

- Keep career lists dense, text-forward, and visually quiet.
- Use `#000000` only for the observed career action contexts; retain `#222222` for repeated reading text.
- Keep observed filter controls border-led with 4px corners.
- Keep corporate orange (`#fc5d11`) scoped to the observed corporate marketing expression.

### Don't

- Treat the corporate site’s Founders display face as a source-proven shared app font.
- Invent selected-filter, error, or disabled colors from an unobserved state, or read the July mid-transition greys on the header links as hover values.
- Add shadows or card fills to chromeless career list items.
- Use a system substitute while labelling it as Pretendard.

## 8. Iconography & Imagery

The official identity guide defines a renewed R symbol containing the Remember Square and permits black and off-white logotype colours. It specifies usage, clear-space, and minimum-size rules for the logo, symbol, and app icon. Those brand-asset rules are not component tokens for the captured career web route.

## 9. Overall Personality

On the career surface, Remember is compact, professional, and scan-oriented: white space is functional rather than decorative, corners are restrained, and primary actions are high-contrast. The corporate site adds more expressive editorial scale and orange display accents, but the two surface purposes should not be blended into a single generic system.

## 10. Voice & Tone

The official identity guideline frames the persona as an experienced, friendly career expert and lists confident, positive, agile, polished, and friendly qualities. Use direct, capable language that clarifies an opportunity and its next step; avoid slang, empty urgency, or unsupported promises.

| Do | Don't |
|---|---|
| Describe the opportunity and the user’s next action plainly. | Inflate a listing with vague superlatives. |
| Sound professional and approachable. | Sound bureaucratic or overly casual. |
| Be positive without hiding relevant constraints. | Use pressure language to manufacture urgency. |

## 11. Brand Narrative

Remember’s official company account starts with the business card: not merely paper, but a professional identity exchanged at moments of connection. The company says the service launched in 2014, then expanded from a “national business-card app” into career opportunities, community, and a professional-network direction.

Its stated mission is to connect working people with opportunities and lead them to success. The official timeline records a 2019 recruiting-service launch, a 2024 premium-job-posting launch, and the October 2024 name change to Remember & Company. These are company/history facts, not proof that every corporate page shares the career route’s CSS tokens.

## 12. Principles

1. **Connect people and opportunities.** *UI implication:* make the opportunity, qualification, and next action easy to scan.
2. **Select high-quality, relevant opportunities.** *UI implication:* use dense but legible comparison information instead of decorative marketing cards.
3. **Help professionals be productive.** *UI implication:* keep repeated controls and reading text quiet, consistent, and easy to parse.
4. **Integrate related services.** *UI implication:* preserve surface boundaries; shared branding does not authorise a token from one product purpose to overwrite another.

## 13. Personas

The official guideline’s archetype is an experienced, friendly career expert. The company’s public narrative also names professionals building career records, companies seeking talent, and people creating business connections. These are stakeholder groups from official positioning, not synthetic named user personas or behavioural metrics.

## 14. States

| State | Evidence boundary |
|---|---|
| Default header auth | Filled and white baseline controls observed on the career route. |
| Default search | Baseline `#f2f2f2` input observed on the career route. |
| Default filter | Six baseline border controls observed on the career route. |
| Dialog open | One dialog-open interaction observed from the outline header trigger. |
| Hover | Measured 2026-09-29: header product links `#808080`; a `::before` layer at opacity 0.1 on 회원가입, 기업 서비스 and 검색 (visible only on 기업 서비스, by arithmetic); no change within scope on 로그인, the search input, the filter or the job card. |
| Focus | Measured 2026-09-29: an authored `2px solid #000000` ring on 회원가입, 기업 서비스 (doubtful against the black header) and 검색; header product links turn `#808080`; no indication within scope on 로그인, the search input, the filter or the job card. |
| Pressed | Measured 2026-09-29: header product links `#808080`; the `::before` layer at opacity 0.2 on the same three buttons; no change within scope on the other four. |
| Disabled | No disabled state captured. |
| Error | No error state captured. |
| Success | No success state captured. |
| Loading | No loading state captured. |
| Empty | No empty state captured. |

## 15. Motion & Easing

The 2026-09-29 probe read `transition: color 0.1s` on the header product links; the other probed controls compute `transition: all 0s` on the element itself. No easing curve or loading motion is promoted. Do not infer a motion scale from the dialog-open interaction or from unrelated product surfaces.
