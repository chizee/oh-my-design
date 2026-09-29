---
id: ably
name: Ably
display_name_kr: Ably (에이블리)
country: KR
category: ecommerce
homepage: "https://m.a-bly.com"
primary_color: "#ff5160"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=a-bly.com&sz=128"
verified: "2026-07-12"
omd: "0.1"
ds:
  name: ABLY Team
  url: "https://ably.team/"
  type: brand
  description: ABLY's official mission, company, product-evolution, and culture surface; consumer app and Seller Square remain separate UI evidence domains.
verification_v2:
  schema: 2
  checked: "2026-09-29"
  surfaces:
    - { id: consumer, kind: mobile-consumer, url: "https://m.a-bly.com/", inspected: "2026-07-12" }
    - { id: team, kind: corporate-brand, url: "https://ably.team/", inspected: "2026-07-12" }
    - { id: seller, kind: seller-platform, url: "https://square.a-bly.com/", inspected: "2026-07-12" }
  sources:
    - { id: consumer-live, kind: product-surface, url: "https://m.a-bly.com/", captured: "2026-07-12" }
    - { id: team-live, kind: official-doc, url: "https://ably.team/", captured: "2026-07-12" }
    - { id: seller-live, kind: product-surface, url: "https://square.a-bly.com/", captured: "2026-07-12" }
    - { id: product-story, kind: official-doc, url: "https://ably.team/news/ZS8_IREAACIAr50Y", captured: "2026-07-12" }
    - { id: ably-probe, kind: product-surface, url: "https://m.a-bly.com/", captured: "2026-09-29" }
    - { id: ably-probe-team, kind: product-surface, url: "https://ably.team/", captured: "2026-09-29" }
    - { id: ably-probe-seller, kind: product-surface, url: "https://square.a-bly.com/", captured: "2026-09-29" }
  conflicts: []
  claims:
    "tokens.colors.primary": &team_evidence { surface_id: team, source_id: team-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": &consumer_evidence { surface_id: consumer, source_id: consumer-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.foreground": *consumer_evidence
    "tokens.colors.consumer-secondary": *consumer_evidence
    "tokens.colors.team-secondary": *team_evidence
    "tokens.colors.seller-body": &seller_evidence { surface_id: seller, source_id: seller-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.consumer-border": *consumer_evidence
    "tokens.colors.platform-border": *team_evidence
    "tokens.colors.team-accent-surface": *team_evidence
    "tokens.typography.family.consumer": *consumer_evidence
    "tokens.typography.family.corporate": *team_evidence
    "tokens.typography.family.seller": *seller_evidence
    "tokens.typography.consumer-label.size": *consumer_evidence
    "tokens.typography.consumer-label.weight": *consumer_evidence
    "tokens.typography.consumer-label.lineHeight": *consumer_evidence
    "tokens.typography.consumer-label.tracking": *consumer_evidence
    "tokens.typography.consumer-label.use": *consumer_evidence
    "tokens.typography.consumer-compact.size": *consumer_evidence
    "tokens.typography.consumer-compact.weight": *consumer_evidence
    "tokens.typography.consumer-compact.lineHeight": *consumer_evidence
    "tokens.typography.consumer-compact.tracking": *consumer_evidence
    "tokens.typography.consumer-compact.use": *consumer_evidence
    "tokens.typography.consumer-meta.size": *consumer_evidence
    "tokens.typography.consumer-meta.weight": *consumer_evidence
    "tokens.typography.consumer-meta.lineHeight": *consumer_evidence
    "tokens.typography.consumer-meta.use": *consumer_evidence
    "tokens.typography.corporate-display.size": *team_evidence
    "tokens.typography.corporate-display.weight": *team_evidence
    "tokens.typography.corporate-display.lineHeight": *team_evidence
    "tokens.typography.corporate-display.tracking": *team_evidence
    "tokens.typography.corporate-display.use": *team_evidence
    "tokens.typography.corporate-section.size": *team_evidence
    "tokens.typography.corporate-section.weight": *team_evidence
    "tokens.typography.corporate-section.lineHeight": *team_evidence
    "tokens.typography.corporate-section.tracking": *team_evidence
    "tokens.typography.corporate-section.use": *team_evidence
    "tokens.typography.corporate-card.size": *team_evidence
    "tokens.typography.corporate-card.weight": *team_evidence
    "tokens.typography.corporate-card.lineHeight": *team_evidence
    "tokens.typography.corporate-card.tracking": *team_evidence
    "tokens.typography.corporate-card.use": *team_evidence
    "tokens.typography.corporate-body.size": *team_evidence
    "tokens.typography.corporate-body.weight": *team_evidence
    "tokens.typography.corporate-body.lineHeight": *team_evidence
    "tokens.typography.corporate-body.tracking": *team_evidence
    "tokens.typography.corporate-body.use": *team_evidence
    "tokens.typography.seller-body.size": *seller_evidence
    "tokens.typography.seller-body.weight": *seller_evidence
    "tokens.typography.seller-body.lineHeight": *seller_evidence
    "tokens.typography.seller-body.use": *seller_evidence
    "tokens.spacing.xs": *consumer_evidence
    "tokens.spacing.sm": *consumer_evidence
    "tokens.spacing.md": *team_evidence
    "tokens.spacing.lg": *team_evidence
    "tokens.spacing.xl": *team_evidence
    "tokens.rounded.corporate-control": *team_evidence
    "tokens.rounded.pill": *team_evidence
    "tokens.rounded.consumer-action": *consumer_evidence
    "tokens.rounded.full": *seller_evidence
    "tokens.shadow.corporate-card": *team_evidence
    "tokens.components.consumer-open-app.type": *consumer_evidence
    "tokens.components.consumer-open-app.bg": *consumer_evidence
    "tokens.components.consumer-open-app.fg": *consumer_evidence
    "tokens.components.consumer-open-app.radius": *consumer_evidence
    "tokens.components.consumer-open-app.padding": *consumer_evidence
    "tokens.components.consumer-open-app.size": *consumer_evidence
    "tokens.components.consumer-open-app.font": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#상단앱설치배너-앱에서보기, label div.css-146c3p1 10px/400; the pressable computes 16px/400", captured: "2026-09-29" }
    "tokens.components.consumer-open-app.hover": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "앱에서 보기 pressable at :hover", captured: "2026-09-29" }
    "tokens.components.consumer-open-app.pressed": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "앱에서 보기 pressable at :active", captured: "2026-09-29" }
    "tokens.components.consumer-open-app.focus": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "앱에서 보기 pressable at :focus-visible, Tab stop 1", captured: "2026-09-29" }
    "tokens.components.consumer-open-app.states": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#상단앱설치배너-앱에서보기, border none on the control and its 3 ancestors", captured: "2026-09-29" }
    "tokens.components.consumer-open-app.use": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#상단앱설치배너 app-install banner; m.a-bly.com redirected to mobile.a-bly.com", captured: "2026-09-29" }
    "tokens.components.corporate-primary.type": *team_evidence
    "tokens.components.corporate-primary.bg": *team_evidence
    "tokens.components.corporate-primary.fg": *team_evidence
    "tokens.components.corporate-primary.radius": *team_evidence
    "tokens.components.corporate-primary.size": *team_evidence
    "tokens.components.corporate-primary.font": *team_evidence
    "tokens.components.corporate-primary.hover": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-550aa61b-0.blCHgg 채용공고 보러가기 at :hover", captured: "2026-09-29" }
    "tokens.components.corporate-primary.pressed": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-550aa61b-0.blCHgg 채용공고 보러가기 at :active", captured: "2026-09-29" }
    "tokens.components.corporate-primary.focus": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-550aa61b-0.blCHgg at :focus-visible, Tab stop 26", captured: "2026-09-29" }
    "tokens.components.corporate-primary.states": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-550aa61b-0.blCHgg 채용공고 보러가기", captured: "2026-09-29" }
    "tokens.components.corporate-primary.use": *team_evidence
    "tokens.components.corporate-soft-action.type": *team_evidence
    "tokens.components.corporate-soft-action.bg": *team_evidence
    "tokens.components.corporate-soft-action.fg": *team_evidence
    "tokens.components.corporate-soft-action.radius": *team_evidence
    "tokens.components.corporate-soft-action.size": *team_evidence
    "tokens.components.corporate-soft-action.font": *team_evidence
    "tokens.components.corporate-soft-action.hover": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-550aa61b-0.jZqjyn 새소식 더보기 at :hover", captured: "2026-09-29" }
    "tokens.components.corporate-soft-action.pressed": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-550aa61b-0.jZqjyn 새소식 더보기 at :active", captured: "2026-09-29" }
    "tokens.components.corporate-soft-action.focus": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-550aa61b-0.jZqjyn at :focus-visible, Tab stop 10", captured: "2026-09-29" }
    "tokens.components.corporate-soft-action.states": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-550aa61b-0.jZqjyn 새소식 더보기", captured: "2026-09-29" }
    "tokens.components.corporate-soft-action.use": *team_evidence
    "tokens.components.corporate-pill.type": *team_evidence
    "tokens.components.corporate-pill.bg": *team_evidence
    "tokens.components.corporate-pill.fg": *team_evidence
    "tokens.components.corporate-pill.radius": *team_evidence
    "tokens.components.corporate-pill.padding": *team_evidence
    "tokens.components.corporate-pill.size": *team_evidence
    "tokens.components.corporate-pill.font": *team_evidence
    "tokens.components.corporate-pill.hover": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-8a99240e-2.drYlhw 자세히 보기 at :hover", captured: "2026-09-29" }
    "tokens.components.corporate-pill.pressed": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-8a99240e-2.drYlhw 자세히 보기 at :active", captured: "2026-09-29" }
    "tokens.components.corporate-pill.focus": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-8a99240e-2.drYlhw at :focus-visible, Tab stop 7", captured: "2026-09-29" }
    "tokens.components.corporate-pill.states": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "button.sc-8a99240e-2.drYlhw 자세히 보기", captured: "2026-09-29" }
    "tokens.components.corporate-pill.use": *team_evidence
    "tokens.components.corporate-card.type": *team_evidence
    "tokens.components.corporate-card.bg": *team_evidence
    "tokens.components.corporate-card.fg": *team_evidence
    "tokens.components.corporate-card.radius": *team_evidence
    "tokens.components.corporate-card.shadow": *team_evidence
    "tokens.components.corporate-card.use": *team_evidence
    "tokens.components.corporate-card.states": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "carousel li, third ancestor of button.sc-8a99240e-2 자세히 보기; no Tab stop", captured: "2026-09-29" }
    "tokens.components.seller-primary.type": *seller_evidence
    "tokens.components.seller-primary.bg": *seller_evidence
    "tokens.components.seller-primary.fg": *seller_evidence
    "tokens.components.seller-primary.radius": *seller_evidence
    "tokens.components.seller-primary.padding": *seller_evidence
    "tokens.components.seller-primary.size": *seller_evidence
    "tokens.components.seller-primary.font": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "a._fade_link My 마켓, label span.text 16px/400; the link computes 14px/400", captured: "2026-09-29" }
    "tokens.components.seller-primary.hover": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "a._fade_link My 마켓 at :hover", captured: "2026-09-29" }
    "tokens.components.seller-primary.pressed": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "a._fade_link My 마켓 at :active", captured: "2026-09-29" }
    "tokens.components.seller-primary.focus": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "a._fade_link at :focus-visible, Tab stop 8", captured: "2026-09-29" }
    "tokens.components.seller-primary.states": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "a._fade_link My 마켓", captured: "2026-09-29" }
    "tokens.components.seller-primary.use": *seller_evidence
    "tokens.components.consumer-category-chip.type": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.bg": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.fg": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.border": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.radius": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.padding": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.size": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.font": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.hover": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "상의 chip at :hover", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.pressed": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "상의 chip at :active", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.focus": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "상의 chip at :focus-visible, Tab stop 88", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.states": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.consumer-category-chip.use": { surface_id: consumer, source_id: ably-probe, method: live-state-probe, selector: "div#FILTER_LIST?LIST_IND pressable 상의, rest at page top; label div.css-146c3p1.r-dnmrzs", captured: "2026-09-29" }
    "tokens.components.team-nav-link.type": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "ul.sc-23801658-10 > li > a 팀 문화, rest at page top", captured: "2026-09-29" }
    "tokens.components.team-nav-link.bg": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "ul.sc-23801658-10 > li > a 팀 문화, rest at page top", captured: "2026-09-29" }
    "tokens.components.team-nav-link.fg": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "ul.sc-23801658-10 > li > a 팀 문화, rest at page top", captured: "2026-09-29" }
    "tokens.components.team-nav-link.radius": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "ul.sc-23801658-10 > li > a 팀 문화, rest at page top", captured: "2026-09-29" }
    "tokens.components.team-nav-link.padding": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "ul.sc-23801658-10 > li > a 팀 문화, rest at page top", captured: "2026-09-29" }
    "tokens.components.team-nav-link.size": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "ul.sc-23801658-10 > li > a 팀 문화, rest at page top", captured: "2026-09-29" }
    "tokens.components.team-nav-link.font": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "ul.sc-23801658-10 > li > a 팀 문화, rest at page top", captured: "2026-09-29" }
    "tokens.components.team-nav-link.hover": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "a 팀 문화 at :hover", captured: "2026-09-29" }
    "tokens.components.team-nav-link.pressed": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "a 팀 문화 at :active", captured: "2026-09-29" }
    "tokens.components.team-nav-link.focus": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "a 팀 문화 at :focus-visible, Tab stop 3", captured: "2026-09-29" }
    "tokens.components.team-nav-link.states": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "ul.sc-23801658-10 > li > a 팀 문화, rest at page top", captured: "2026-09-29" }
    "tokens.components.team-nav-link.use": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "ul.sc-23801658-10 > li > a 팀 문화, rest at page top", captured: "2026-09-29" }
    "tokens.components.team-story-card.type": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "li.sc-5406aefe-2 > a, first news story card, rest at page top; title p", captured: "2026-09-29" }
    "tokens.components.team-story-card.bg": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "li.sc-5406aefe-2 > a, first news story card, rest at page top; title p", captured: "2026-09-29" }
    "tokens.components.team-story-card.fg": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "li.sc-5406aefe-2 > a, first news story card, rest at page top; title p", captured: "2026-09-29" }
    "tokens.components.team-story-card.radius": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "li.sc-5406aefe-2 > a, first news story card, rest at page top; title p", captured: "2026-09-29" }
    "tokens.components.team-story-card.size": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "li.sc-5406aefe-2 > a, first news story card, rest at page top; title p", captured: "2026-09-29" }
    "tokens.components.team-story-card.font": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::div.card-description (24px/600/32px) and div.card-meta (16px/400/24px)", captured: "2026-07-12" }
    "tokens.components.team-story-card.hover": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "story link at :hover, descendant img", captured: "2026-09-29" }
    "tokens.components.team-story-card.pressed": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "story link at :active, descendant img", captured: "2026-09-29" }
    "tokens.components.team-story-card.focus": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "story link at :focus-visible, Tab stop 11", captured: "2026-09-29" }
    "tokens.components.team-story-card.states": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "li.sc-5406aefe-2 > a, first news story card, rest at page top; title p", captured: "2026-09-29" }
    "tokens.components.team-story-card.use": { surface_id: team, source_id: ably-probe-team, method: live-state-probe, selector: "li.sc-5406aefe-2 > a, first news story card, rest at page top; title p", captured: "2026-09-29" }
    "tokens.components.team-news-row.type": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::li.sc-6b01d165-2 (two rows)", captured: "2026-07-12" }
    "tokens.components.team-news-row.bg": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::li.sc-6b01d165-2 (two rows)", captured: "2026-07-12" }
    "tokens.components.team-news-row.fg": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::div.card-title (24px/600/32px)", captured: "2026-07-12" }
    "tokens.components.team-news-row.radius": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::li.sc-6b01d165-2 (two rows)", captured: "2026-07-12" }
    "tokens.components.team-news-row.padding": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::li.sc-6b01d165-2 (two rows)", captured: "2026-07-12" }
    "tokens.components.team-news-row.size": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::li.sc-6b01d165-2 (two rows)", captured: "2026-07-12" }
    "tokens.components.team-news-row.font": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::div.card-title and div.card-date (18px/400/28px)", captured: "2026-07-12" }
    "tokens.components.team-news-row.states": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::li.sc-6b01d165-2 (two rows)", captured: "2026-07-12" }
    "tokens.components.team-news-row.use": { surface_id: team, source_id: team-live, method: live-inspect, selector: "surface-3::li.sc-6b01d165-2 (two rows)", captured: "2026-07-12" }
    "tokens.components.seller-nav-link.type": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "li#dropdown_m20220930d3caa282fded6 > a 입점 소개, rest at page top; label span", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.bg": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "li#dropdown_m20220930d3caa282fded6 > a 입점 소개, rest at page top; label span", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.fg": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "li#dropdown_m20220930d3caa282fded6 > a 입점 소개, rest at page top; label span", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.radius": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "li#dropdown_m20220930d3caa282fded6 > a 입점 소개, rest at page top; label span", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.padding": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "li#dropdown_m20220930d3caa282fded6 > a 입점 소개, rest at page top; label span", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.size": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "li#dropdown_m20220930d3caa282fded6 > a 입점 소개, rest at page top; label span", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.font": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "li#dropdown_m20220930d3caa282fded6 > a 입점 소개, rest at page top; label span", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.hover": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "a 입점 소개 at :hover", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.pressed": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "a 입점 소개 at :active", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.focus": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "a 입점 소개 at :focus-visible, Tab stop 2", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.states": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "li#dropdown_m20220930d3caa282fded6 > a 입점 소개, rest at page top; label span", captured: "2026-09-29" }
    "tokens.components.seller-nav-link.use": { surface_id: seller, source_id: ably-probe-seller, method: live-state-probe, selector: "li#dropdown_m20220930d3caa282fded6 > a 입점 소개, rest at page top; label span", captured: "2026-09-29" }
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Fresh consumer mobile web, ABLY Team, and Seller Square capture. Each evidence domain keeps its own font and component roles; native-app commerce patterns are not inferred from brand or seller surfaces."
  colors:
    primary: "#ff5160"
    canvas: "#ffffff"
    foreground: "#1f1f1f"
    consumer-secondary: "#777777"
    team-secondary: "#757575"
    seller-body: "#5b5b5b"
    consumer-border: "#dddddd"
    platform-border: "#e5e7eb"
    team-accent-surface: "#fff2ea"
  typography:
    family: { consumer: "Pretendard", corporate: "Pretendard", seller: "Noto Sans Korean" }
    consumer-label: { size: 16, weight: 600, lineHeight: 1.25, tracking: -0.4, use: "Current mobile consumer labels" }
    consumer-compact: { size: 12, weight: 600, lineHeight: 1.33, tracking: -0.2, use: "Mobile-web app-entry label as captured 2026-07-12; the rebuilt control measured 2026-09-29 renders a 10px / 400 label" }
    consumer-meta: { size: 11, weight: 400, lineHeight: 1.27, use: "Current mobile consumer metadata" }
    corporate-display: { size: 48, weight: 600, lineHeight: 1.33, tracking: -0.3, use: "Current ABLY Team display heading" }
    corporate-section: { size: 40, weight: 600, lineHeight: 1.4, tracking: -0.3, use: "Current ABLY Team repeated section heading" }
    corporate-card: { size: 24, weight: 600, lineHeight: 1.33, tracking: -0.3, use: "Current ABLY Team card heading" }
    corporate-body: { size: 16, weight: 400, lineHeight: 1.5, tracking: -0.3, use: "Current ABLY Team body and card copy" }
    seller-body: { size: 16, weight: 400, lineHeight: 1.6, use: "Current Seller Square body and navigation text" }
  spacing: { xs: 8, sm: 10, md: 16, lg: 24, xl: 32 }
  rounded: { corporate-control: 12, pill: 24, consumer-action: 20, full: 9999 }
  shadow:
    corporate-card: "0 4px 48px rgba(0,0,0,0.08)"
  components_harvested: true
  components:
    consumer-open-app: { type: button, bg: "#ffffff", fg: "#1f1f1f", radius: "20px", padding: "0px 8px", size: "62px x 28px", font: "10px / 400 (visible label; the pressable itself computes 16px / 400 Pretendard-Regular)", hover: "no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29", pressed: "no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29", focus: "outline browser default ring (outline-style auto), not brand — measured 2026-09-29", states: "captured 2026-07-12 as a bordered button (1px #dddddd, 12px / 600 label); re-measured 2026-09-29 as a React Native Web pressable with no border on the control or its 3 ancestors and a 10px / 400 label; hover, pressed and keyboard focus measured 2026-09-29 (Tab 1); transition all 0s", use: "Mobile-web app-install banner action 앱에서 보기, reached through the declared m.a-bly.com redirect to mobile.a-bly.com" }
    corporate-primary: { type: button, bg: "#ff5160", fg: "#ffffff", radius: "12px", size: "160px x 56px", font: "18px / 600", hover: "bg #db3b57", pressed: "bg #db3b57", focus: "outline browser default ring (outline-style auto), not brand — measured 2026-09-29", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the floating 채용공고 보러가기 button (Tab 26); pressed equals hover; transition all 0s", use: "Current ABLY Team primary action" }
    corporate-soft-action: { type: button, bg: "#fff2ea", fg: "#ff5160", radius: "12px", size: "312px x 48px", font: "16px / 600", hover: "bg #ffe5dc", pressed: "bg #ffe5dc", focus: "outline browser default ring (outline-style auto), not brand — measured 2026-09-29", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on 새소식 더보기, a button inside a link (Tab 10); pressed equals hover; transition all 0s", use: "Current ABLY Team low-emphasis action" }
    corporate-pill: { type: button, bg: "#ffffff", fg: "#4e4e4e", radius: "24px", padding: "14px 16px", size: "105px x 48px", font: "16px / 400", hover: "no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29", pressed: "no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29", focus: "outline browser default ring (outline-style auto), not brand — measured 2026-09-29", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on 자세히 보기 (Tab 7); the shadowed carousel item around it (corporate-card) is inside the compared ancestor levels and did not change either", use: "Current ABLY Team compact editorial action" }
    corporate-card: { type: card, bg: "#ffffff", fg: "#1f1f1f", radius: "12px", shadow: "0 4px 48px rgba(0,0,0,0.08)", states: "not a control: a list item with no Tab stop; read 2026-09-29 as an ancestor of corporate-pill, where hover and press changed nothing on it", use: "Non-interactive ABLY Team card: the white mission cards and the image carousel list item that holds the 자세히 보기 pill. The shadow is on the list item, not on a link; the clickable news story is team-story-card" }
    seller-primary: { type: button, bg: "#ff5160", fg: "#ffffff", radius: "9999px", padding: "13px 30px", size: "114px x 49px", font: "16px / 400 / Noto Sans Korean (visible label span; the link itself computes 14px / 400)", hover: "bg #bf3c47", pressed: "bg #bf3c47", focus: "no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29", states: "default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on My 마켓 (Tab 8); pressed equals hover; transition all 0.3s", use: "Current Seller Square primary entry action" }
    consumer-category-chip: { type: tab, bg: "transparent", fg: "#777777", border: "1px solid #dddddd", radius: "18px", padding: "9px 12px", size: "48px x 36px", font: "13px / 400 (visible label; the pressable itself computes 16px / 400 Pretendard-Regular)", hover: "no change in the compared scope (self, its ::before/::after, 2 descendants, 3 ancestor levels) — measured 2026-09-29", pressed: "bg #eeeeee", focus: "outline browser default ring (outline-style auto), not brand — measured 2026-09-29", states: "unselected chip 상의; hover, pressed and keyboard focus measured 2026-09-29 (Tab 88); the fill appears on press only, with no hover change; transition all 0s; the selected chip was not read", use: "Consumer mobile-web category chip row (상의 and its siblings) on mobile.a-bly.com, reached through the declared m.a-bly.com redirect; the mobile web renders as a 600px column at desktop width" }
    team-nav-link: { type: tab, bg: "transparent", fg: "#1f1f1f", radius: "24px", padding: "14px 16px", size: "76px x 48px", font: "16px / 600 / Pretendard", hover: "bg rgba(0,0,0,0.05)", pressed: "bg rgba(0,0,0,0.05)", focus: "outline browser default ring (outline-style auto, offset 1px), not brand — measured 2026-09-29", states: "default, hover, pressed and keyboard focus measured 2026-09-29 on 팀 문화 (Tab 3); pressed equals hover; transition all 0s; a menu it may open would be a sibling and was not compared", use: "ABLY Team fixed header link (팀 문화 and its siblings)" }
    team-story-card: { type: card, bg: "transparent", fg: "#1f1f1f", radius: "0px", size: "464px x 544px", font: "24px / 600 / Pretendard (story title; the meta line is 16px / 400 #757575)", hover: "transform matrix(1.05, 0, 0, 1.05, 0, 0) on the card image (scale 1.05); the link itself does not change", pressed: "transform matrix(1.05, 0, 0, 1.05, 0, 0) on the card image, as on hover", focus: "outline browser default ring (outline-style auto, offset 1px), not brand — measured 2026-09-29", states: "default captured 2026-07-12 (two 464 x 544 story items); hover, pressed and keyboard focus measured 2026-09-29 on the first story link (Tab 11); the image transition is 400 ms; the link has no radius and no shadow", use: "ABLY Team news story card: one link wrapping image, title and meta. It is not corporate-card, whose shadow sits on non-interactive list items" }
    team-news-row: { type: listItem, bg: "#ffffff", fg: "#1f1f1f", radius: "12px", padding: "16px", size: "960px x 104px", font: "24px / 600 / Pretendard (row title; the date line is 18px / 400 #757575)", states: "default captured 2026-07-12 (two rows); not probed", use: "ABLY Team news row list above the 새소식 더보기 soft action" }
    seller-nav-link: { type: tab, bg: "transparent", fg: "#1f1f1f", radius: "0px", padding: "0px 17px", size: "104px x 90px", font: "18px / 700 / Noto Sans Korean", hover: "fg #ff5160", pressed: "fg #ff5160", focus: "no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29", states: "default, hover, pressed and keyboard focus measured 2026-09-29 on 입점 소개 (Tab 2); the label span turns with the link; transition all 0.3s; a dropdown it may open is a sibling and was not compared", use: "Seller Square header navigation item (입점 소개 and its siblings), 90px tall" }
---

# Design System Inspiration of Ably (에이블리)

## 1. Visual Theme & Atmosphere

ABLY is a Korean style-commerce platform organized around personal taste, discovery, and the connection between consumers and sellers. Its official product story describes an AI-personalized commerce experience that expanded beyond fashion into beauty, home, stationery, food, and community/content. The current company mission frames this more broadly as expanding style commerce and a chain platform globally: people should be able to discover, buy, make, and sell styles with lower friction. Personalization and an accessible seller ecosystem are presented as two connected sides of that next-commerce direction.

The current public ecosystem has three visibly different surfaces. The consumer mobile web is narrow and app-directed, using a Next.js-loaded Pretendard alias, dense 11–16px type, white, `#1f1f1f`, and a compact 28px app-entry action. ABLY Team is a large editorial brand and recruiting surface with Pretendard, 40–48px headings, wide story cards, pale peach accent panels, and `#ff5160` actions. Seller Square uses Noto Sans Korean and its own information architecture for onboarding, market operations, advertising, guides, and global expansion.

The stable cross-surface signal is the current coral-pink `#ff5160`, not the older `#fa2e5f` snapshot. Even this shared color does not make the component systems interchangeable. A Seller Square pill, an ABLY Team recruiting CTA, and a native consumer purchase button are three different claims. The current public capture verifies the first two and only a compact app-entry action on mobile web; native shopping cards, price stacks, checkout actions, bottom navigation, badges, and sheets remain absent.

**Key Characteristics:**
- Current coral-pink `#ff5160` across consumer/corporate/seller identity moments
- Consumer mobile web: dense Pretendard, 11–16px type, app-directed entry
- ABLY Team: editorial Pretendard, 40–48px headings, story cards, 12–24px control geometry
- Seller Square: Noto Sans Korean and full-pill onboarding actions
- Personal taste and recommendation as the consumer narrative
- Seller/user ecosystem and global chain-platform expansion as the company narrative
- Strict separation of consumer web, native app, corporate, and seller evidence

## Primary tasks

- Discover and buy products that match your personal taste
- Browse taste categories beyond fashion into beauty, home, stationery and food
- Start and run a market as a seller on the platform

## 2. Color Palette & Roles

- **Current ABLY coral** (`#ff5160`): live identity/action color across current official surfaces.
- **Canvas** (`#ffffff`) and **foreground** (`#1f1f1f`): current consumer and corporate base.
- **Consumer secondary** (`#777777`): current mobile-web supporting text.
- **Team secondary** (`#757575`): current company/editorial supporting copy.
- **Seller body** (`#5b5b5b`): current Seller Square explanatory text.
- **Consumer border** (`#dddddd`): the 1px outline of the mobile-web category chips (re-measured 2026-09-29). In July it also outlined the compact app-entry action; the rebuilt control has no border.
- **Platform border** (`#e5e7eb`): repeated Team and Seller Square boundary.
- **Team accent surface** (`#fff2ea`): current pale peach corporate action surface.

Older hot-deal pink, discount red, shipping mint, success, error, link, tab, and native surface colors are omitted. A yellow Seller Square campaign action was captured as a local promotion, not a canonical ABLY semantic color.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Consumer mobile web establishes Pretendard; ABLY Team establishes Pretendard; Seller Square establishes Noto Sans Korean. |
| Live surface-use | `__Pretendard_a4ae19` loaded/high with 85 consumer uses; Pretendard loaded/high with 117 corporate uses; Noto Sans Korean loaded/high with 119 seller uses. |
| Official distributed asset | Pretendard is loaded from first-party and public distribution paths; Noto Sans Korean is delivered on Seller Square. Neither is an ABLY-exclusive font. |
| Declared-only | Pretendard fallback, Black Tie, Font Awesome, Glyphicons, and other vendor icon families had zero visible text use. |
| Unresolved | Native iOS/Android consumer typography and campaign-specific type remain unresolved. |

| Domain/role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Consumer label | Pretendard | 16px | 600 | 20px | -0.4px |
| Consumer compact action (July 2026-07-12; the rebuilt control renders a 10px / 400 label) | Pretendard | 12px | 600 | 16px | -0.2px |
| Consumer metadata | Pretendard | 11px | 400 | 14px | normal |
| Team display | Pretendard | 48px | 600 | 64px | -0.3px |
| Team section | Pretendard | 40px | 600 | 56px | -0.3px |
| Team card title | Pretendard | 24px | 600 | 32px | -0.3px |
| Team body | Pretendard | 16px | 400 | 24px | -0.3px |
| Seller body | Noto Sans Korean | 16px | 400 | 25.6px | normal |

Do not render Noto Sans Korean as the consumer app font or Pretendard as Seller Square truth. Surface ownership matters more than visual similarity.

## 4. Component Stylings

Rest values are the July 2026-07-12 capture unless marked. Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe (one load per surface, logged out, keyboard walk first); "no change" below means no computed change across the control, its ::before/::after, every descendant and 3 ancestor levels.

### Consumer mobile web

The declared `m.a-bly.com` now redirects to `mobile.a-bly.com`, a React Native Web build that renders as a 600px column at desktop width.

#### Compact app-entry action (앱에서 보기)
- White / `#1f1f1f` label, 20px radius, 62×28px, `0px 8px`
- Re-measured 2026-09-29: no border on the control or its 3 ancestors, and a 10px/400 label (the pressable itself computes 16px/400). July read a bordered button (1px `#dddddd`, Pretendard 12px/600); the site has since been rebuilt.
- Hover and pressed: no change within scope (1 descendant). Keyboard focus: the browser's default ring only.
- No native purchase meaning is attached

#### Category chip (probe rest reading, 2026-09-29)
- Transparent, 1px `#dddddd` outline, 18px radius, 48×36px, `9px 12px`; visible label `#777777` 13px/400
- Hover: no change within scope (2 descendants). Pressed: fill `#eeeeee`, on press only. Keyboard focus: browser default ring.

### ABLY Team

#### Primary action
- `#ff5160` / white, 12px radius, 160×56px, Pretendard 18px/600
- Hover = pressed: fill `#db3b57`. Keyboard focus: browser default ring (not a brand token).

#### Soft action
- `#fff2ea` / `#ff5160`, 12px radius, 312×48px, 16px/600
- Hover = pressed: fill `#ffe5dc`. Keyboard focus: browser default ring.

#### Editorial pill
- White / `#4e4e4e`, 24px radius, 105×48px, `14px 16px`, 16px/400
- Hover and pressed: no change within scope (0 descendants). Keyboard focus: browser default ring.

#### Mission and carousel card (non-interactive)
- White / near-black, 12px radius
- `0 4px 48px rgba(0,0,0,.08)` shadow on list items with no Tab stop: the white mission cards and the image carousel item that holds the editorial pill. It is not a link, and the pill's hover and press change nothing on it.

#### News story card
- One link wrapping image, title and meta; 464×544px, no radius, no shadow; title `#1f1f1f` 24px/600, meta `#757575` 16px/400
- Hover = pressed: the image scales to 1.05 (`matrix(1.05, 0, 0, 1.05, 0, 0)`); the link's own fill, border, radius and shadow do not change. Keyboard focus: browser default ring.

#### News row
- White, 12px radius, `16px` padding, 960×104px; title `#1f1f1f` 24px/600, date `#757575` 18px/400
- Default only (July capture); not probed

#### Header link (probe rest reading, 2026-09-29)
- Transparent, `#1f1f1f` 16px/600, 24px radius, `14px 16px`, 76×48px
- Hover = pressed: fill `rgba(0,0,0,0.05)`. Keyboard focus: browser default ring.

### Seller Square

#### Primary entry action
- `#ff5160` / white, full-pill, 114×49px, `13px 30px`
- Visible label Noto Sans Korean 16px/400 (the link itself computes the 14px/400 that July recorded)
- Hover = pressed: fill `#bf3c47`, a different darkening from ABLY Team's. Keyboard focus: nothing within scope (1 descendant).

#### Header navigation item (probe rest reading, 2026-09-29)
- Transparent, label `#1f1f1f` Noto Sans Korean 18px/700, `0px 17px`, 90px tall
- Hover = pressed: label `#ff5160`. Keyboard focus: nothing within scope (1 descendant).

The Channel.io chat launcher on Seller Square is third-party and excluded. Native consumer product cards, price stacks, shipping/deal badges, native filters, checkout CTAs, bottom tabs, bottom sheets, dialogs, and transactional states are absent until an inspectable native surface verifies them.

## 5. Layout Principles

- Keep consumer mobile web compact and direct users toward the full app without pretending it is the app.
- Use large editorial sections and paired story cards on ABLY Team.
- Use Seller Square's own content density and onboarding hierarchy for seller tasks.
- Share `#ff5160` as identity, not as proof of identical control geometry.
- Let product imagery and taste categories carry consumer variety; do not fabricate their layout from memory.

## 6. Depth & Elevation

Consumer mobile web and Seller Square promoted controls are flat. ABLY Team uses a specific large-card shadow (`0 4px 48px rgba(0,0,0,.08)`) on 12px non-interactive cards: the mission cards and the image carousel item. The clickable news story card has no radius and no shadow, and its hover scales the image instead of lifting the card. That corporate editorial shadow is not a native commerce sheet token.

## 7. Do's and Don'ts

### Do
- Use current `#FF5160` and name the surface that gives a component its role.
- Keep consumer, corporate, and seller font evidence separate.
- Preserve ABLY's taste-discovery, personalization, and seller-ecosystem narrative.
- Omit native details until an inspectable native path exists.

### Don't
- Do not restore the older `#FA2E5F` as current primary without new proof.
- Do not infer purchase buttons, deal badges, price typography, tabs, or sheets from commerce convention.
- Do not show Noto Sans Korean as the consumer product font.
- Do not turn ABLY Team recruiting cards into consumer product cards.

## 8. Responsive Behavior

The consumer surface is explicitly mobile web and uses compact type/actions. ABLY Team reflows large editorial stories and card compositions. Seller Square has its own desktop-oriented seller information hierarchy. Native-app safe areas, bottom navigation, checkout keyboards, and product-grid breakpoints remain unresolved.

## 9. Agent Prompt Guide

> Build only the verified ABLY surface: use `#ff5160`, white, and `#1f1f1f`; Pretendard for consumer/Team or Noto Sans Korean for Seller Square; apply the exact domain-specific component geometry above. For native shopping UI, omit unverified cards, price stacks, badges, tabs, and checkout controls. Keep state values on their own surface: the ABLY Team primary darkens to `#db3b57`, the Seller Square pill to `#bf3c47`. Keyboard focus is the browser's default ring or nothing, so supply an accessible focus style without presenting it as ABLY's.

## 10. Voice & Tone

ABLY's official voice is energetic, friendly, and direct. Consumer and product stories emphasize discovering one's taste quickly; seller content emphasizes starting and operating a market easily; company content speaks in terms of next commerce, ecosystem, and expansion. Category or community copy can be playful, but transactional language should state price, choice, or next action without manufactured urgency. Seller guidance should distinguish onboarding, operations, advertising, and global expansion. Keep Korean copy conversational but task-clear. Avoid invented discounts, conversion claims, urgency phrases, and seller-growth numbers.

## 11. Brand Narrative

ABLY began as a personalized style-commerce experience and expanded its concept of taste beyond fashion into beauty, life, food, content, and community. The company connects that consumer discovery layer to a seller and production/distribution ecosystem, then frames global expansion through style commerce and a chain platform. The visual system mirrors that ecosystem: a shared coral identity with different tools for consumers, company storytelling, and sellers. Consumer value comes from a feed and discovery experience shaped by taste; seller value comes from easier onboarding, operations, distribution, and access to audiences. ABLY Team explains the mission and culture that connect those sides, while Seller Square turns the seller relationship into a separate operational surface. The shared color signals one company, but the different typography and geometry reveal genuinely different tasks.

## 12. Principles

1. **Start from taste.** Discovery should adapt to what a person is trying to express or find.
2. **Connect both sides of commerce.** Consumer ease and seller opportunity are related, not identical interfaces.
3. **Move quickly without inventing truth.** Fast commerce language cannot excuse unsupported UI claims.
4. **Respect surface ownership.** Mobile web, native app, company, and seller systems have distinct evidence.

## 13. Personas

First-party material establishes task contexts only:
- A consumer discovering and purchasing products aligned with personal taste.
- A seller evaluating onboarding, market operations, advertising, or global expansion.
- A candidate or partner learning about ABLY's mission, culture, and platform direction.

Project-specific names, ages, spending, seller revenue, category preference, conversion rate, and success metrics are intentionally unspecified and must come from the product brief.

## 14. States

Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe; nine controls have all three.

| Control (surface) | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| 앱에서 보기 (consumer) | no change in scope | no change in scope | browser default ring |
| Category chip 상의 (consumer) | no change in scope | fill `#eeeeee` | browser default ring |
| Primary action (Team) | fill `#db3b57` | fill `#db3b57` | browser default ring |
| Soft action (Team) | fill `#ffe5dc` | fill `#ffe5dc` | browser default ring |
| Editorial pill (Team) | no change in scope | no change in scope | browser default ring |
| Header link 팀 문화 (Team) | fill `rgba(0,0,0,0.05)` | fill `rgba(0,0,0,0.05)` | browser default ring |
| News story card (Team) | image scale 1.05 | image scale 1.05 | browser default ring |
| My 마켓 (Seller) | fill `#bf3c47` | fill `#bf3c47` | nothing in scope |
| 입점 소개 (Seller) | label `#ff5160` | label `#ff5160` | nothing in scope |

No control has an authored focus style. The browser's default ring (`auto 1px`, `#005fcc`) is recorded as what renders, not as an ABLY token, and Seller Square shows no focus indication at all within the compared scope. "In scope" means the control, its ::before/::after, every descendant and 3 ancestor levels; a menu opened as a sibling, canvas and pixels are outside it. Loading, empty, cart, payment, order-success and error states remain absent.

## 15. Motion & Easing

No reusable duration or easing curve is promoted. Measured transitions are surface-local: `all 0s` on the consumer and ABLY Team controls, `all 0.3s` on Seller Square, and a 400 ms image transition inside the ABLY Team news story card. Native app motion and a cross-domain animation system remain unobserved.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://m.a-bly.com/ ; https://ably.team/ ; https://square.a-bly.com/ ; https://ably.team/news/ZS8_IREAACIAr50Y
**Tier 2 attempts:** getdesign.md had no reliable ABLY consumer record; Refero produced no authoritative current ABLY surface
**Conflicts unresolved:** none
