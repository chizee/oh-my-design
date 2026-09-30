---
id: payhere
name: Payhere
display_name_kr: 페이히어
country: KR
category: fintech
homepage: "https://payhere.in/"
primary_color: "#0077fe"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=payhere.in&sz=128"
verified: "2026-09-30"
added: "2026-07-02"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://payhere.in/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing-product, url: "https://payhere.in/table-order/", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing-product, url: "https://payhere.in/hardware/terminal/", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://payhere.in/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://payhere.in/table-order/", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://payhere.in/hardware/terminal/", captured: "2026-09-30" }
    - { id: payhere-probe-terminal, kind: product-surface, url: "https://payhere.in/hardware/terminal/", captured: "2026-09-30" }
    - { id: company-info, kind: official-doc, url: "https://payhere.in/company-info", captured: "2026-09-30" }
    - { id: welcome-kit, kind: official-doc, url: "https://tech.payhere.in/post/design-payhere-welcome-kit/", captured: "2026-09-30" }
    - { id: careers, kind: official-doc, url: "https://careers.payhere.in/recruit/", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &pbuy { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"26\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary": *pbuy
    "tokens.colors.header-action": &phead { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.ink": &pbody { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.canvas": &pcanvas { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.navy": &pcat { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.colors.deep-navy": &pinput { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"76\"]", captured: "2026-09-30" }
    "tokens.colors.slate": &pslate { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h2", captured: "2026-09-30" }
    "tokens.colors.body-muted": &plabeloff { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span", captured: "2026-09-30" }
    "tokens.colors.muted": &psubmit { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"78\"]", captured: "2026-09-30" }
    "tokens.colors.inactive": &pinactive { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.colors.surface": *pcat
    "tokens.colors.surface-alt": &palt { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.line": *pinput
    "tokens.colors.inverse": &pdark { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.selected-on-dark": &pdarkon { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"72\"]", captured: "2026-09-30" }
    "tokens.colors.night": &pnight { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"42\"]", captured: "2026-09-30" }
    "tokens.colors.badge-event": &pbadge { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.colors.badge-hot": *pbadge
    "tokens.colors.badge-official": &pnaver { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.typography.family.primary": *pbody
    "tokens.typography.display-xl.size": &pxl { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h3", captured: "2026-09-30" }
    "tokens.typography.display-xl.weight": *pxl
    "tokens.typography.display-xl.lineHeight": *pxl
    "tokens.typography.display-xl.tracking": *pxl
    "tokens.typography.display-xl.use": *pxl
    "tokens.typography.display.size": &pdisp { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::h1", captured: "2026-09-30" }
    "tokens.typography.display.weight": *pdisp
    "tokens.typography.display.lineHeight": *pdisp
    "tokens.typography.display.tracking": *pdisp
    "tokens.typography.display.use": *pdisp
    "tokens.typography.section.size": &ph2 { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h2", captured: "2026-09-30" }
    "tokens.typography.section.weight": *ph2
    "tokens.typography.section.lineHeight": *ph2
    "tokens.typography.section.tracking": *ph2
    "tokens.typography.section.use": *ph2
    "tokens.typography.subsection.size": &psub { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h3", captured: "2026-09-30" }
    "tokens.typography.subsection.weight": *psub
    "tokens.typography.subsection.lineHeight": *psub
    "tokens.typography.subsection.tracking": *psub
    "tokens.typography.subsection.use": *psub
    "tokens.typography.title.size": &ptitle { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::h3", captured: "2026-09-30" }
    "tokens.typography.title.weight": *ptitle
    "tokens.typography.title.lineHeight": *ptitle
    "tokens.typography.title.tracking": *ptitle
    "tokens.typography.title.use": *ptitle
    "tokens.typography.card-title.size": *pcat
    "tokens.typography.card-title.weight": *pcat
    "tokens.typography.card-title.lineHeight": *pcat
    "tokens.typography.card-title.tracking": *pcat
    "tokens.typography.card-title.use": *pcat
    "tokens.typography.card-heading.size": &pcard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p", captured: "2026-09-30" }
    "tokens.typography.card-heading.weight": *pcard
    "tokens.typography.card-heading.lineHeight": *pcard
    "tokens.typography.card-heading.tracking": *pcard
    "tokens.typography.card-heading.use": *pcard
    "tokens.typography.lead.size": *pslate
    "tokens.typography.lead.weight": *pslate
    "tokens.typography.lead.lineHeight": *pslate
    "tokens.typography.lead.tracking": *pslate
    "tokens.typography.lead.use": *pslate
    "tokens.typography.tab.size": &ptabon { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"13\"]", captured: "2026-09-30" }
    "tokens.typography.tab.weight": *ptabon
    "tokens.typography.tab.lineHeight": *ptabon
    "tokens.typography.tab.tracking": *ptabon
    "tokens.typography.tab.use": *ptabon
    "tokens.typography.body-lg.size": &pdesc { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::span", captured: "2026-09-30" }
    "tokens.typography.body-lg.weight": *pdesc
    "tokens.typography.body-lg.lineHeight": *pdesc
    "tokens.typography.body-lg.tracking": *pdesc
    "tokens.typography.body-lg.use": *pdesc
    "tokens.typography.button.size": &pdetail { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"32\"]", captured: "2026-09-30" }
    "tokens.typography.button.weight": *pdetail
    "tokens.typography.button.lineHeight": *pdetail
    "tokens.typography.button.tracking": *pdetail
    "tokens.typography.button.use": *pdetail
    "tokens.typography.field.size": *pinput
    "tokens.typography.field.weight": *pinput
    "tokens.typography.field.lineHeight": *pinput
    "tokens.typography.field.use": *pinput
    "tokens.typography.body.size": *pbody
    "tokens.typography.body.weight": *pbody
    "tokens.typography.body.lineHeight": *pbody
    "tokens.typography.body.use": *pbody
    "tokens.typography.badge.size": *pbadge
    "tokens.typography.badge.weight": *pbadge
    "tokens.typography.badge.lineHeight": *pbadge
    "tokens.typography.badge.tracking": *pbadge
    "tokens.typography.badge.use": *pbadge
    "tokens.typography.menu.size": &pmenu { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"95\"]", captured: "2026-09-30" }
    "tokens.typography.menu.weight": *pmenu
    "tokens.typography.menu.lineHeight": *pmenu
    "tokens.typography.menu.tracking": *pmenu
    "tokens.typography.menu.use": *pmenu
    "tokens.typography.caption.size": &pextra { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"164\"]", captured: "2026-09-30" }
    "tokens.typography.caption.weight": *pextra
    "tokens.typography.caption.lineHeight": *pextra
    "tokens.typography.caption.tracking": *pextra
    "tokens.typography.caption.use": *pextra
    "tokens.spacing.header-x": *phead
    "tokens.spacing.pill-y": &ptaboff { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"14\"]", captured: "2026-09-30" }
    "tokens.spacing.pill-x": *ptaboff
    "tokens.spacing.field": *pinput
    "tokens.spacing.card": &pcontact { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div", captured: "2026-09-30" }
    "tokens.spacing.contact-card": *pcontact
    "tokens.rounded.header": *phead
    "tokens.rounded.field": *pinput
    "tokens.rounded.action": *pdetail
    "tokens.rounded.float": &pfab { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"173\"]", captured: "2026-09-30" }
    "tokens.rounded.card": *pcontact
    "tokens.rounded.pill": *ptaboff
    "tokens.rounded.badge": *pbadge
    "tokens.rounded.capsule": &ppricecta { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-09-30" }
    "tokens.shadow.float": *pfab
    "tokens.shadow.card": &pprice { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::div", captured: "2026-09-30" }
    "tokens.shadow.header-ring": &poutline { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-09-30" }
    "tokens.components.purchase-button.type": *pbuy
    "tokens.components.purchase-button.bg": *pbuy
    "tokens.components.purchase-button.fg": *pbuy
    "tokens.components.purchase-button.radius": *pbuy
    "tokens.components.purchase-button.padding": *pbuy
    "tokens.components.purchase-button.height": *pbuy
    "tokens.components.purchase-button.width": *pbuy
    "tokens.components.purchase-button.font": *pbuy
    "tokens.components.purchase-button.states": *pbuy
    "tokens.components.purchase-button.use": *pbuy
    "tokens.components.detail-button.type": *pdetail
    "tokens.components.detail-button.bg": *pdetail
    "tokens.components.detail-button.fg": *pdetail
    "tokens.components.detail-button.radius": *pdetail
    "tokens.components.detail-button.padding": *pdetail
    "tokens.components.detail-button.height": *pdetail
    "tokens.components.detail-button.width": *pdetail
    "tokens.components.detail-button.font": *pdetail
    "tokens.components.detail-button.states": *pdetail
    "tokens.components.detail-button.use": *pdetail
    "tokens.components.header-button.type": *phead
    "tokens.components.header-button.bg": *phead
    "tokens.components.header-button.fg": *phead
    "tokens.components.header-button.radius": *phead
    "tokens.components.header-button.padding": *phead
    "tokens.components.header-button.height": *phead
    "tokens.components.header-button.font": *phead
    "tokens.components.header-button.hover": &pheadprobe { surface_id: surface-3, source_id: payhere-probe-terminal, method: live-state-probe, selector: "a 카드 단말기 (110.1 x 40, header, href /hardware/): rest bg rgb(0, 140, 255); hover and pressed NO CHANGE across self and 3 ancestor levels, transition all 0s", captured: "2026-09-30" }
    "tokens.components.header-button.pressed": *pheadprobe
    "tokens.components.header-button.use": *phead
    "tokens.components.header-outline-button.type": *poutline
    "tokens.components.header-outline-button.bg": *poutline
    "tokens.components.header-outline-button.fg": *poutline
    "tokens.components.header-outline-button.radius": *poutline
    "tokens.components.header-outline-button.padding": *poutline
    "tokens.components.header-outline-button.height": *poutline
    "tokens.components.header-outline-button.font": *poutline
    "tokens.components.header-outline-button.shadow": *poutline
    "tokens.components.header-outline-button.hover": &poutprobe { surface_id: surface-3, source_id: payhere-probe-terminal, method: live-state-probe, selector: "a 테이블 오더 (110.1 x 40, header, href /table-order/): rest inset ring rgb(0, 140, 255); hover and pressed NO CHANGE across self and 3 ancestor levels", captured: "2026-09-30" }
    "tokens.components.header-outline-button.pressed": *poutprobe
    "tokens.components.header-outline-button.use": *poutline
    "tokens.components.header-text-button.type": &plogin { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"3\"]", captured: "2026-09-30" }
    "tokens.components.header-text-button.bg": *plogin
    "tokens.components.header-text-button.fg": *plogin
    "tokens.components.header-text-button.radius": *plogin
    "tokens.components.header-text-button.padding": *plogin
    "tokens.components.header-text-button.height": *plogin
    "tokens.components.header-text-button.font": *plogin
    "tokens.components.header-text-button.states": *plogin
    "tokens.components.header-text-button.use": *plogin
    "tokens.components.pill-tab.type": *ptaboff
    "tokens.components.pill-tab.bg": *ptaboff
    "tokens.components.pill-tab.fg": *ptaboff
    "tokens.components.pill-tab.radius": *ptaboff
    "tokens.components.pill-tab.padding": *ptaboff
    "tokens.components.pill-tab.height": *ptaboff
    "tokens.components.pill-tab.font": *ptaboff
    "tokens.components.pill-tab.selected": *ptabon
    "tokens.components.pill-tab.states": *ptaboff
    "tokens.components.pill-tab.use": *ptaboff
    "tokens.components.toggle-tab.type": &ptogoff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"33\"]", captured: "2026-09-30" }
    "tokens.components.toggle-tab.bg": *ptogoff
    "tokens.components.toggle-tab.fg": *ptogoff
    "tokens.components.toggle-tab.radius": *ptogoff
    "tokens.components.toggle-tab.padding": *ptogoff
    "tokens.components.toggle-tab.height": *ptogoff
    "tokens.components.toggle-tab.font": *ptogoff
    "tokens.components.toggle-tab.selected": &ptogon { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"32\"]", captured: "2026-09-30" }
    "tokens.components.toggle-tab.states": *ptogoff
    "tokens.components.toggle-tab.use": *ptogoff
    "tokens.components.step-tab.type": &pstepoff { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"41\"]", captured: "2026-09-30" }
    "tokens.components.step-tab.bg": *pstepoff
    "tokens.components.step-tab.fg": *pstepoff
    "tokens.components.step-tab.border": *pstepoff
    "tokens.components.step-tab.padding": *pstepoff
    "tokens.components.step-tab.height": *pstepoff
    "tokens.components.step-tab.font": *pstepoff
    "tokens.components.step-tab.selected": &pstep { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"40\"]", captured: "2026-09-30" }
    "tokens.components.step-tab.states": *pstepoff
    "tokens.components.step-tab.use": *pstepoff
    "tokens.components.category-card.type": *pcat
    "tokens.components.category-card.bg": *pcat
    "tokens.components.category-card.fg": *pcat
    "tokens.components.category-card.radius": *pcat
    "tokens.components.category-card.padding": *pcat
    "tokens.components.category-card.height": *pcat
    "tokens.components.category-card.font": *pcat
    "tokens.components.category-card.use": *pcat
    "tokens.components.category-badge.type": *pbadge
    "tokens.components.category-badge.bg": *pbadge
    "tokens.components.category-badge.fg": *pbadge
    "tokens.components.category-badge.radius": *pbadge
    "tokens.components.category-badge.padding": *pbadge
    "tokens.components.category-badge.height": *pbadge
    "tokens.components.category-badge.font": *pbadge
    "tokens.components.category-badge.use": *pbadge
    "tokens.components.hero-badge.type": &pbanner { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::span", captured: "2026-09-30" }
    "tokens.components.hero-badge.bg": *pbanner
    "tokens.components.hero-badge.fg": *pbanner
    "tokens.components.hero-badge.radius": *pbanner
    "tokens.components.hero-badge.padding": *pbanner
    "tokens.components.hero-badge.height": *pbanner
    "tokens.components.hero-badge.font": *pbanner
    "tokens.components.hero-badge.use": *pbanner
    "tokens.components.content-card.type": *pcontact
    "tokens.components.content-card.bg": *pcontact
    "tokens.components.content-card.border": *pcontact
    "tokens.components.content-card.radius": *pcontact
    "tokens.components.content-card.padding": *pcontact
    "tokens.components.content-card.use": *pcontact
    "tokens.components.price-card.type": *pprice
    "tokens.components.price-card.bg": *pprice
    "tokens.components.price-card.border": *pprice
    "tokens.components.price-card.radius": *pprice
    "tokens.components.price-card.padding": *pprice
    "tokens.components.price-card.shadow": *pprice
    "tokens.components.price-card.use": *pprice
    "tokens.components.text-field.type": *pinput
    "tokens.components.text-field.bg": *pinput
    "tokens.components.text-field.fg": *pinput
    "tokens.components.text-field.border": *pinput
    "tokens.components.text-field.radius": *pinput
    "tokens.components.text-field.padding": *pinput
    "tokens.components.text-field.height": *pinput
    "tokens.components.text-field.font": *pinput
    "tokens.components.text-field.states": *pinput
    "tokens.components.text-field.use": *pinput
    "tokens.components.form-submit.type": *psubmit
    "tokens.components.form-submit.bg": *psubmit
    "tokens.components.form-submit.fg": *psubmit
    "tokens.components.form-submit.radius": *psubmit
    "tokens.components.form-submit.padding": *psubmit
    "tokens.components.form-submit.height": *psubmit
    "tokens.components.form-submit.font": *psubmit
    "tokens.components.form-submit.states": *psubmit
    "tokens.components.form-submit.use": *psubmit
    "tokens.components.pricing-cta.type": *ppricecta
    "tokens.components.pricing-cta.bg": *ppricecta
    "tokens.components.pricing-cta.fg": *ppricecta
    "tokens.components.pricing-cta.radius": *ppricecta
    "tokens.components.pricing-cta.padding": *ppricecta
    "tokens.components.pricing-cta.height": *ppricecta
    "tokens.components.pricing-cta.font": *ppricecta
    "tokens.components.pricing-cta.states": *ppricecta
    "tokens.components.pricing-cta.use": *ppricecta
    "tokens.components.floating-cta.type": &pfloat { surface_id: surface-3, source_id: payhere-probe-terminal, method: live-state-probe, selector: "button 지금 25% 할인받기 (384 x 64): own bg transparent, ancestors 1-3 transparent; background-image linear-gradient(290.64deg, rgb(22, 59, 216) 6.63%, rgb(61, 167, 255) 107.33%); hover and pressed NO CHANGE, transition all 0s", captured: "2026-09-30" }
    "tokens.components.floating-cta.bg": *pfloat
    "tokens.components.floating-cta.fg": *pfloat
    "tokens.components.floating-cta.radius": *pfloat
    "tokens.components.floating-cta.height": *pfloat
    "tokens.components.floating-cta.width": *pfloat
    "tokens.components.floating-cta.shadow": *pfloat
    "tokens.components.floating-cta.font": *pfloat
    "tokens.components.floating-cta.hover": *pfloat
    "tokens.components.floating-cta.pressed": *pfloat
    "tokens.components.floating-cta.use": *pfloat
    "tokens.components.floating-secondary.type": &pfloat2 { surface_id: surface-3, source_id: payhere-probe-terminal, method: live-state-probe, selector: "button 올인원 카드 단말기 (384 x 64): bg rgb(245, 248, 250), border 1px solid rgb(245, 248, 250), radius 50px, shadow rgba(0, 0, 0, 0.21) 0px 4px 12px 0px; hover and pressed NO CHANGE", captured: "2026-09-30" }
    "tokens.components.floating-secondary.bg": *pfloat2
    "tokens.components.floating-secondary.fg": &pfloat2label { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::span", captured: "2026-09-30" }
    "tokens.components.floating-secondary.border": *pfloat2
    "tokens.components.floating-secondary.radius": *pfloat2
    "tokens.components.floating-secondary.height": *pfloat2
    "tokens.components.floating-secondary.width": *pfloat2
    "tokens.components.floating-secondary.shadow": *pfloat2
    "tokens.components.floating-secondary.hover": *pfloat2
    "tokens.components.floating-secondary.use": *pfloat2
    "tokens.components.carousel-arrow.type": &parrow { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"6\"]", captured: "2026-09-30" }
    "tokens.components.carousel-arrow.bg": *parrow
    "tokens.components.carousel-arrow.border": *parrow
    "tokens.components.carousel-arrow.radius": *parrow
    "tokens.components.carousel-arrow.height": *parrow
    "tokens.components.carousel-arrow.width": *parrow
    "tokens.components.carousel-arrow.hover": &parrowst { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"6\"]::state-hover", captured: "2026-09-30" }
    "tokens.components.carousel-arrow.pressed": *parrowst
    "tokens.components.carousel-arrow.use": *parrow
    "tokens.components.floating-button.type": *pfab
    "tokens.components.floating-button.bg": *pfab
    "tokens.components.floating-button.radius": *pfab
    "tokens.components.floating-button.height": *pfab
    "tokens.components.floating-button.width": *pfab
    "tokens.components.floating-button.shadow": *pfab
    "tokens.components.floating-button.states": *pfab
    "tokens.components.floating-button.use": *pfab
    "tokens.components.contact-card.type": &pcontactcard { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, selector: "surface-3::[data-omd-capture=\"42\"]", captured: "2026-09-30" }
    "tokens.components.contact-card.bg": *pcontactcard
    "tokens.components.contact-card.fg": *pcontactcard
    "tokens.components.contact-card.radius": *pcontactcard
    "tokens.components.contact-card.padding": *pcontactcard
    "tokens.components.contact-card.height": *pcontactcard
    "tokens.components.contact-card.width": *pcontactcard
    "tokens.components.contact-card.use": *pcontactcard
    "tokens.components.download-button.type": &pdl { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"22\"]", captured: "2026-09-30" }
    "tokens.components.download-button.bg": *pdl
    "tokens.components.download-button.border": *pdl
    "tokens.components.download-button.radius": *pdl
    "tokens.components.download-button.height": *pdl
    "tokens.components.download-button.width": *pdl
    "tokens.components.download-button.states": *pdl
    "tokens.components.download-button.use": *pdl
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#0077fe"
    on-primary: "#ffffff"
    header-action: "#008cff"
    ink: "#000000"
    canvas: "#ffffff"
    navy: "#1c2638"
    deep-navy: "#101a2e"
    slate: "#2b3648"
    body-muted: "#5f6976"
    muted: "#919ba5"
    inactive: "#c1cad2"
    surface: "#f5f8fa"
    surface-alt: "#f4f8f9"
    line: "#e2e8ee"
    inverse: "#000000"
    selected-on-dark: "#33abff"
    night: "#0e1d40"
    badge-event: "#f96eae"
    badge-hot: "#ff5b46"
    badge-official: "#08d07e"
  typography:
    family: { primary: "Noto Sans KR" }
    display-xl: { size: 56, weight: 700, lineHeight: 1.39, tracking: -1, use: "Feature headline on the table-order page (NaverPlace sub-section), #0e1d40" }
    display: { size: 48, weight: 700, lineHeight: 1.375, tracking: -1, use: "Terminal page hero title (h1) and the home dark-section title" }
    section: { size: 44, weight: 700, lineHeight: 1.41, tracking: -1, use: "Section titles (SectionTitle h2); the #1c2638 variant keeps normal tracking" }
    subsection: { size: 36, weight: 700, lineHeight: 1.5, tracking: -1, use: "Stand and hardware sub-titles (h3)" }
    title: { size: 32, weight: 700, lineHeight: 1.5, tracking: -1, use: "Scroll-slider titles and the 구입하기 → label" }
    card-title: { size: 26, weight: 700, lineHeight: 1.38, tracking: -1, use: "Category selector labels and blue section descriptions" }
    card-heading: { size: 24, weight: 700, lineHeight: 1.5, tracking: -1, use: "Feature-card titles (#101a2e) and FAQ questions" }
    lead: { size: 24, weight: 400, lineHeight: 1.5, tracking: -1, use: "Section description under the title on the terminal page (#2b3648)" }
    tab: { size: 20, weight: 700, lineHeight: 1.6, tracking: -1, use: "Selected pill-tab label; unselected labels use weight 400" }
    body-lg: { size: 20, weight: 400, lineHeight: 1.6, tracking: -0.5, use: "Feature-card description lines (#1c2638)" }
    button: { size: 18, weight: 700, lineHeight: 1.0, tracking: -0.5, use: "자세히 보기 action label" }
    field: { size: 16, weight: 400, lineHeight: 1.5, use: "Form inputs; they render in Arial because they do not inherit Noto Sans KR" }
    body: { size: 16, weight: 400, lineHeight: 1.0, use: "Document default on body (computed 16px line height)" }
    badge: { size: 16, weight: 700, lineHeight: 1.0, tracking: -0.5, use: "Category badges (BEST, EVENT, HOT)" }
    menu: { size: 14, weight: 400, lineHeight: 1.86, tracking: -1, use: "Footer category menu links (#c1cad2)" }
    caption: { size: 12, weight: 400, lineHeight: 1.83, tracking: -1, use: "Footer legal and external links" }
  spacing: { header-x: 16, pill-y: 12, pill-x: 24, field: 12, card: 32, contact-card: 48 }
  rounded: { header: 5, field: 8, action: 12, float: 16, card: 24, pill: 30, badge: 50, capsule: 100 }
  shadow:
    float: "rgba(0, 0, 0, 0.21) 0px 4px 12px 0px"
    card: "rgba(0, 0, 0, 0.08) 0px 3px 15px 0px"
    header-ring: "rgb(0, 140, 255) 0px 0px 0px 1px inset"
  components:
    purchase-button: { type: "button", bg: "#0077fe", fg: "#ffffff", radius: "0px 0px 24px 24px", padding: "24px 0px", height: "96px", width: "586px", font: "32px / 700 / 48px Noto Sans KR, letter-spacing -1px", states: "rest only; not probed", use: "구입하기 → closing the two hardware cards on the home (capture 26)" }
    detail-button: { type: "button", bg: "#0077fe", fg: "#ffffff", radius: "12px", padding: "16px", height: "50px", width: "334px", font: "18px / 700 / 18px Noto Sans KR, letter-spacing -0.5px", states: "rest only; not probed", use: "자세히 보기 under the three feature cards on the home (capture 32)" }
    header-button: { type: "button", bg: "#008cff", fg: "#ffffff", radius: "5px", padding: "0px 16px", height: "40px", font: "16px / 700 / 16px Noto Sans KR", hover: "no change within the compared scope (self and three ancestor levels; transition 0s) (probe)", pressed: "no change within the compared scope (probe)", use: "카드 단말기 in the header of all three pages; links to /hardware/" }
    header-outline-button: { type: "button", bg: "#ffffff", fg: "#008cff", radius: "5px", padding: "0px 16px", height: "40px", font: "16px / 700 / 16px Noto Sans KR", shadow: "rgb(0, 140, 255) 0px 0px 0px 1px inset", hover: "no change within the compared scope (probe)", pressed: "no change within the compared scope (probe)", use: "테이블 오더 in the header of all three pages; links to /table-order/" }
    header-text-button: { type: "button", bg: "#ffffff", fg: "#1c2638", radius: "5px", padding: "0px 12px", height: "40px", font: "16px / 700 / 16px Noto Sans KR (label span)", states: "rest only; not probed", use: "The text link at the left of the two header buttons (로그인)" }
    pill-tab: { type: "tab", bg: "#ffffff", fg: "#5f6976", radius: "30px", padding: "12px 24px", height: "56px", font: "20px / 400 / 32px Noto Sans KR, letter-spacing -1px (label span)", selected: "bg #0077fe, label #ffffff at 20px / 700 (capture 13 on the home, 17 on table-order)", states: "selected variant read from rest values (capture 13 against 14); no pointer frame", use: "Feature and industry pill tabs: NFC, 비대면 결제, 선불권 on the home; 한식 · 음식점 and others on table-order" }
    toggle-tab: { type: "toggle", bg: "#e2e8ee", fg: "#5f6976", radius: "30px", padding: "12px 24px", height: "56px", font: "20px / 400 / 32px Noto Sans KR (label span)", selected: "bg #ffffff, label #008cff at 20px / 700 (capture 32)", states: "selected variant read from rest values (capture 32 against 33); no pointer frame", use: "POS-type and industry toggles in a #e2e8ee track (30px radius, 4px padding) on the terminal page" }
    step-tab: { type: "tab", bg: "transparent", fg: "#c1cad2", border: "bottom 3px solid #c1cad2", padding: "16px 24px", height: "67px", font: "20px / 700 / 32px Noto Sans KR, letter-spacing -1px", selected: "fg #0077fe with a 3px #0077fe bottom border (capture 40)", states: "selected variant read from rest values (capture 40 against 41); no pointer frame", use: "The two onboarding steps on the terminal page (포스를 변경하려는 기존 사업자, 포스를 처음 사용하는 신규 사업자)" }
    category-card: { type: "card", bg: "#f5f8fa", fg: "#1c2638", radius: "12px", padding: "20px 0px", height: "84px", font: "26px / 700 / 36px Noto Sans KR, letter-spacing -1px", use: "카드 단말기, 테이블 오더, 키오스크 and 인터넷 패키지 selectors under the home hero (capture 9)" }
    category-badge: { type: "badge", bg: "#0077fe", fg: "#ffffff", radius: "50px", padding: "4px 8px 5px", height: "25px", font: "16px / 700 / 16px Noto Sans KR, letter-spacing -0.5px", use: "BEST over a category card; EVENT uses #f96eae and HOT #ff5b46" }
    hero-badge: { type: "badge", bg: "#0077fe", fg: "#ffffff", radius: "50px", padding: "8px 20px", height: "44px", font: "18px / 700 / 28px Noto Sans KR, letter-spacing -0.5px", use: "사장님 맞춤형 1:1 밀착 컨설팅 above the table-order hero title" }
    content-card: { type: "card", bg: "#ffffff", border: "1px solid #c1cad2", radius: "24px", padding: "48px", use: "Contact cards near the foot of the home; hardware and pricing cards use a 1px #e2e8ee border at the same radius" }
    price-card: { type: "card", bg: "#ffffff", border: "1px solid #e2e8ee", radius: "24px", padding: "36px 24px", shadow: "rgba(0, 0, 0, 0.08) 0px 3px 15px 0px", use: "Free-price cards on the terminal page, 384 x 172" }
    text-field: { type: "input", bg: "#ffffff", fg: "#101a2e", border: "1px solid #e2e8ee", radius: "8px", padding: "12px", height: "48px", font: "16px / 400 / 24px Arial", states: "rest only; focus was not measured", use: "Consultation form fields on the home and table-order; the first option of the table-order form carries a 1px #008cff border" }
    form-submit: { type: "button", bg: "#919ba5", fg: "#ffffff", radius: "8px", padding: "16px 0px", height: "58px", font: "18px / 700 Noto Sans KR, letter-spacing -1px", states: "the fill observed on an empty form (the disabled attribute was false); the form was never filled, so no other fill was observed", use: "도입 문의하기 and 동의하고 무료 상담 submit buttons" }
    pricing-cta: { type: "button", bg: "#000000", fg: "#ffffff", radius: "100px", padding: "16px 32px", height: "60px", font: "18px / 700 / 28px Noto Sans KR, letter-spacing -1px", states: "rest only", use: "도입 비용 계산해보기 on the table-order page (capture 15)" }
    floating-cta: { type: "button", bg: "linear-gradient(290.64deg, #163bd8 6.63%, #3da7ff 107.33%)", fg: "#ffffff", radius: "50px", height: "64px", width: "384px", shadow: "rgba(0, 0, 0, 0.21) 0px 4px 12px 0px", font: "20px / 700 / 32px Noto Sans KR, letter-spacing -1px (label span)", hover: "no change within the compared scope (self, one descendant, three ancestor levels; transition 0s) (probe)", pressed: "no change within the compared scope (probe)", use: "지금 25% 할인받기, floating at the foot of the terminal page; its fill is a background-image gradient, not a background colour" }
    floating-secondary: { type: "button", bg: "#f5f8fa", fg: "#0077fe", border: "1px solid #f5f8fa", radius: "50px", height: "64px", width: "384px", shadow: "rgba(0, 0, 0, 0.21) 0px 4px 12px 0px", hover: "no change within the compared scope (probe)", use: "올인원 카드 단말기 beside the floating CTA" }
    carousel-arrow: { type: "button", bg: "#ffffff", border: "1px solid #c1cad2", radius: "100%", height: "48px", width: "48px", hover: "border #111111; both arrows read the same value in their hover and pressed frames", pressed: "border #111111", use: "Seller-review carousel arrows on the terminal page (captures 6 and 7)" }
    floating-button: { type: "button", bg: "#ffffff", radius: "16px", height: "80px", width: "80px", shadow: "rgba(0, 0, 0, 0.21) 0px 4px 12px 0px", states: "rest only", use: "The chat floating button on every page; back-to-top on the home and the terminal page" }
    contact-card: { type: "card", bg: "#0e1d40", fg: "#ffffff", radius: "24px", padding: "64px 0px", height: "205px", width: "384px", use: "채팅 상담 card on the terminal page; 전화 상담 and 희망일 상담 use #f5f8fa with #0c4a6e text" }
    download-button: { type: "button", bg: "#ffffff", border: "1px solid #919ba5", radius: "8px", height: "72px", width: "241px", states: "rest only", use: "The four POS download buttons on the home (label 18px / 400 in #1c2638)" }
  components_harvested: true
---

# Design System Inspiration of Payhere

## 1. Visual Theme & Atmosphere

Payhere (페이히어, 주식회사 페이히어) is a Seoul company that builds point-of-sale and payment tools for shop owners. Its company page states the mission in two words, "WE MAKE THE FUTURE", and says the team reached the industry's largest merchant count "불과 1년만에" (within a single year), still pushing towards "매장의 새로운 미래" — the store's new future. What began as mobile POS ("모바일 포스 1위" on the home) now spans POS software, the all-in-one Payhere Terminal ("누적 판매 1위 올인원 카드 단말기"), table ordering, kiosks, delivery and pickup orders and sales analytics, and the company page describes a range "소상공인부터 엔터프라이즈까지", from small merchants to enterprises. The terminal page counts "업계 최다 90,000+ 가맹점". In December 2022 the company's tech blog recorded a rebrand that arrived with a new logo and a clearer brand colour, and the welcome kit built on it set three words for how Payhere should feel: Simple (이해하기 쉬운), Familiar (친숙한) and Long Awaited (기대되는).

The captured pages — the home, the table-order page and the Payhere Terminal page — sell to shop owners in large, bold Korean. Section titles run at 44px weight 700 — black `#000000` with `-1px` tracking, or navy `#1c2638` at normal tracking — on white `#ffffff` and light blue-grey `#f5f8fa` bands. The working colour is a vivid blue, `#0077fe`: it fills the purchase and detail actions, the selected pill in every tab group, the badges and the top promotion banner. A second, lighter blue, `#008cff`, is reserved for the pair of buttons in the global header. Unselected choices fade to `#5f6976` and `#c1cad2` rather than changing hue.

Everything is set in Noto Sans KR, self-hosted through Next.js, at weight 700 for headings and actions and 400 for reading. Shapes are soft and generous: 24px cards, 30px pill tabs, 50px badges and floating capsules, 12px action buttons and only the header's two compact buttons at 5px.

**Key Characteristics:**
- One working blue, `#0077fe`, for purchase and detail actions, selected pills, the selected step, badges and the promotion banner
- A second blue, `#008cff`, for the header's filled 카드 단말기 button and the ring of the 테이블 오더 button
- Big, tight Korean type: Noto Sans KR 700 at 44px and 48px with `-1px` tracking
- Selection by fill: a white pill with a `#5f6976` label becomes `#0077fe` with a white label
- Blue-grey neutrals: `#f5f8fa` surfaces, `#e2e8ee` lines, `#919ba5` and `#c1cad2` for quiet text
- Rounded geometry: 24px cards, 30px pills, 50px badges, 12px actions, 5px header buttons
- Mostly flat; soft shadows only on floating buttons and the terminal page's price cards

## Primary tasks

- Pick which store setup to buy, from card terminal to kiosk
- Narrow the feature list down to what the store actually needs
- Check the POS runs on a device the shop already owns
- Compare the bundled monthly cost against a legacy POS rental
- Take table orders without a server writing each one down

## 2. Color Palette & Roles

Every token below was read by the deterministic collector on 2026-09-30 from payhere.in, payhere.in/table-order/ and payhere.in/hardware/terminal/; the floating buttons and header states were confirmed by the keyboard-state probe of the terminal page the same day (`docs/research/2026-09-29-growth/raw/payhere-states-terminal.json`).

### Primary
- **Payhere Blue** (`#0077fe`): The fill of the purchase action 구입하기 → and the 자세히 보기 action on the home, of the selected pill in the home's feature tabs and in the table-order industry tabs, and of the BEST badge, the 월회비 제로선언 and 1:1 consulting badges and the top promotion banner; the selected onboarding step on the terminal page is drawn in it. It is the primary because the pages render it in the most primary roles: five in-page action fills on the home and the selected state of the pill tabs on two of the three pages. White (`#ffffff`) labels sit on it.
- **Header Blue** (`#008cff`): The fill of the header's 카드 단말기 button and the 1px inset ring and label of its 테이블 오더 button, identical on all three pages; also the label of the selected toggle on the terminal page and the border of the first option in the table-order form. It fills one action per page, which is why it is not the primary.

### Neutral & Surface
- **Canvas** (`#ffffff`): Page sections, cards and unselected pills.
- **Surface** (`#f5f8fa`): Category cards, section bands, contact and step cards.
- **Surface Alt** (`#f4f8f9`): Image-grid feature cards on the home.
- **Line** (`#e2e8ee`): Card and field borders; the track behind the terminal page's toggles.
- **Inverse** (`#000000`): Full-width dark sections on the home, the store-download buttons and the pricing action on table-order.
- **Night** (`#0e1d40`): The 채팅 상담 contact card on the terminal page and the table-order feature headline.

### Text
- **Ink** (`#000000`): The document text colour and most section titles.
- **Navy** (`#1c2638`): Category labels, the terminal hero, section titles in their navy variant, card description lines.
- **Deep Navy** (`#101a2e`): Feature-card titles and form-field text.
- **Slate** (`#2b3648`): Section descriptions and FAQ answers on the terminal page.
- **Body Muted** (`#5f6976`): Unselected pill and toggle labels, footer links.
- **Muted** (`#919ba5`): Agreement links, the download-button border and the fill of an empty form's submit button.
- **Inactive** (`#c1cad2`): The inactive titles in the home's scroll slider, the unselected onboarding step and the footer menu links.

### Accents
- **Selected on Dark** (`#33abff`): The selected pill in the home's dark industry section.
- **Badge Event** (`#f96eae`), **Badge Hot** (`#ff5b46`) and **Badge Official** (`#08d07e`): the EVENT and HOT badges over the category cards and the 공식 badge in the home's Naver Place section.

### Rendered, but not tokens
- The terminal page's floating 지금 25% 할인받기 button is painted by a gradient on the button itself, `linear-gradient(290.64deg, #163bd8 6.63%, #3da7ff 107.33%)`; its background colour is transparent. It is kept as a component value, not a flat colour.
- The terminal page's comparison table marks the Payhere column with an 8px inset ring, `rgb(101, 194, 255)`, on `#f5f8fa`.

### Brand assets, not tokens
- The header logo's SVG fills include `#1d99ff`, `#163bd8` and `#a164f9`, the blue-to-purple mark from the 2022 rebrand. `#1d99ff` and `#a164f9` appear only in the logo, so they are brand assets, not tokens; `#163bd8` also starts the floating button's gradient.

## 3. Typography Rules

### Font Family
- **Live surface use**: `Noto Sans KR`, self-hosted through Next.js from `payhere.in/_next/static/media/` (woff2), 1,010 observed uses: body, headings, actions, badges, cards, lists and toggles.
- **Official distributed font assets**: Noto Sans KR is Google's Korean build of Noto Sans CJK, whose repository licence is the SIL Open Font License 1.1.
- **System face in use**: `Arial` — 4 observed uses, all on form inputs, which do not inherit the page font.
- **Declared only (no visible use)**: `Pretendard` (declared from the jsDelivr copy of orioncactus/pretendard), `Roboto` (self-hosted), the carousel icon font `slick`, and the generated `Noto Sans KR Fallback` and `Roboto Fallback` — 0 observed uses on the three pages. The June record's Pretendard headings on tech.payhere.in belong to the separate tech-blog domain and were not re-measured.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Display XL | Noto Sans KR | 56px | 700 | 78px (1.39) | -1px | Table-order feature headline |
| Display | Noto Sans KR | 48px | 700 | 66px (1.375) | -1px | Terminal hero; home dark-section title |
| Section | Noto Sans KR | 44px | 700 | 62px (1.41) | -1px | Section titles (navy variant at normal tracking) |
| Subsection | Noto Sans KR | 36px | 700 | 54px (1.5) | -1px | Stand and hardware sub-titles |
| Title | Noto Sans KR | 32px | 700 | 48px (1.5) | -1px | Scroll-slider titles, 구입하기 → |
| Card Title | Noto Sans KR | 26px | 700 | 36px (1.38) | -1px | Category selectors, blue descriptions |
| Card Heading | Noto Sans KR | 24px | 700 | 36px (1.5) | -1px | Feature-card titles, FAQ questions |
| Lead | Noto Sans KR | 24px | 400 | 36px (1.5) | -1px | Section descriptions on the terminal page |
| Tab | Noto Sans KR | 20px | 700 | 32px (1.6) | -1px | Selected pill label; 400 when unselected |
| Body Large | Noto Sans KR | 20px | 400 | 32px (1.6) | -0.5px | Card description lines |
| Button | Noto Sans KR | 18px | 700 | 18px (1.0) | -0.5px | 자세히 보기 |
| Field | Arial | 16px | 400 | 24px (1.5) | normal | Form inputs |
| Body | Noto Sans KR | 16px | 400 | 16px (1.0) | normal | Document default |
| Badge | Noto Sans KR | 16px | 700 | 16px (1.0) | -0.5px | BEST, EVENT, HOT |
| Menu | Noto Sans KR | 14px | 400 | 26px (1.86) | -1px | Footer category menu |
| Caption | Noto Sans KR | 12px | 400 | 22px (1.83) | -1px | Footer legal links |

### Principles
- **Bold sells, regular explains**: every title, action and selected label is 700; descriptions and unselected labels are 400.
- **Tight Korean tracking**: `-1px` from 14px menus to 56px headlines, `-0.5px` on badges and small actions; the navy section-title variant is the exception at normal tracking.
- **One family**: Noto Sans KR carries every captured element except the form inputs.

## 4. Component Stylings

### Buttons

**Purchase action**
- Background: `#0077fe`
- Text: `#ffffff`
- Radius: 0px 0px 24px 24px
- Padding: 24px 0px
- Height: 96px
- Font: 32px / 700 / 48px Noto Sans KR, letter-spacing -1px
- States: rest only
- Use: 구입하기 → closing the two hardware cards on the home

**Detail action**
- Background: `#0077fe`
- Text: `#ffffff`
- Radius: 12px
- Padding: 16px
- Height: 50px
- Font: 18px / 700 / 18px Noto Sans KR, letter-spacing -0.5px
- States: rest only
- Use: 자세히 보기 under the three feature cards on the home

**Header button**
- Background: `#008cff`
- Text: `#ffffff`
- Radius: 5px
- Padding: 0px 16px
- Height: 40px
- Font: 16px / 700 / 16px Noto Sans KR
- Hover: no change within the compared scope (self and three ancestor levels, transition 0s; probe)
- Use: 카드 단말기 in the header of all three pages

**Header outline button**
- Background: `#ffffff`
- Text: `#008cff`
- Shadow: rgb(0, 140, 255) 0px 0px 0px 1px inset
- Radius: 5px
- Padding: 0px 16px
- Height: 40px
- Font: 16px / 700 / 16px Noto Sans KR
- Hover: no change within the compared scope (probe)
- Use: 테이블 오더 in the header of all three pages

**Header text link**
- Background: `#ffffff`
- Text: `#1c2638`
- Radius: 5px
- Padding: 0px 12px
- Height: 40px
- States: rest only
- Use: the text link to the left of the two header buttons

**Pricing action**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 100px
- Padding: 16px 32px
- Height: 60px
- Font: 18px / 700 / 28px Noto Sans KR, letter-spacing -1px
- Use: 도입 비용 계산해보기 on the table-order page

**Form submit**
- Background: `#919ba5`
- Text: `#ffffff`
- Radius: 8px
- Padding: 16px 0px
- Height: 58px
- Font: 18px / 700 Noto Sans KR, letter-spacing -1px
- States: the fill observed on an empty form (the disabled attribute was false); the form was never filled, so no other fill was observed
- Use: 도입 문의하기 and 동의하고 무료 상담

**Floating CTA**
- Background: linear-gradient(290.64deg, `#163bd8` 6.63%, `#3da7ff` 107.33%)
- Text: `#ffffff`
- Radius: 50px
- Height: 64px
- Shadow: rgba(0, 0, 0, 0.21) 0px 4px 12px 0px
- Font: 20px / 700 / 32px Noto Sans KR, letter-spacing -1px
- Hover: no change within the compared scope (probe)
- Use: 지금 25% 할인받기, floating at the foot of the terminal page

**Floating secondary**
- Background: `#f5f8fa`
- Text: `#0077fe`
- Border: 1px solid `#f5f8fa`
- Radius: 50px
- Height: 64px
- Shadow: rgba(0, 0, 0, 0.21) 0px 4px 12px 0px
- Use: 올인원 카드 단말기 beside the floating CTA

**Carousel arrow**
- Background: `#ffffff`
- Border: 1px solid `#c1cad2`
- Radius: 100%
- Height: 48px
- Hover: border `#111111` (both arrows agree in their hover and pressed frames)
- Use: seller-review carousel on the terminal page

**Floating button**
- Background: `#ffffff`
- Radius: 16px
- Height: 80px
- Shadow: rgba(0, 0, 0, 0.21) 0px 4px 12px 0px
- States: rest only
- Use: the chat button on every page; back-to-top on the home and the terminal page

**Download button**
- Background: `#ffffff`
- Border: 1px solid `#919ba5`
- Radius: 8px
- Height: 72px
- States: rest only
- Use: the four POS download buttons on the home

### Tabs & Toggles

**Pill tab**
- Background: `#ffffff`
- Text: `#5f6976`
- Radius: 30px
- Padding: 12px 24px
- Height: 56px
- Font: 20px / 400 / 32px Noto Sans KR, letter-spacing -1px
- Selected: background `#0077fe`, label `#ffffff` at weight 700
- States: selected read from rest values; no pointer frame
- Use: feature tabs on the home (NFC, 비대면 결제, 선불권) and industry tabs on table-order

**Toggle**
- Background: `#e2e8ee`
- Text: `#5f6976`
- Radius: 30px
- Padding: 12px 24px
- Height: 56px
- Selected: background `#ffffff`, label `#008cff` at weight 700
- States: selected read from rest values; no pointer frame
- Use: POS-type and industry toggles on the terminal page, inside a `#e2e8ee` track with 4px padding

**Step tab**
- Text: `#c1cad2`
- Border: bottom 3px solid `#c1cad2`
- Padding: 16px 24px
- Height: 67px
- Font: 20px / 700 / 32px Noto Sans KR
- Selected: text `#0077fe` with a 3px `#0077fe` bottom border
- States: selected read from rest values; no pointer frame
- Use: the two onboarding steps on the terminal page

### Inputs

**Text field**
- Background: `#ffffff`
- Text: `#101a2e`
- Border: 1px solid `#e2e8ee`
- Radius: 8px
- Padding: 12px
- Height: 48px
- Font: 16px / 400 / 24px Arial
- States: rest only; focus was not measured
- Use: consultation forms on the home and table-order

### Cards & Badges

**Category card**
- Background: `#f5f8fa`
- Text: `#1c2638`
- Radius: 12px
- Padding: 20px 0px
- Height: 84px
- Font: 26px / 700 / 36px Noto Sans KR, letter-spacing -1px
- Use: 카드 단말기, 테이블 오더, 키오스크, 인터넷 패키지 under the home hero

**Content card**
- Background: `#ffffff`
- Border: 1px solid `#c1cad2`
- Radius: 24px
- Padding: 48px
- Use: contact cards on the home; hardware and pricing cards use a 1px `#e2e8ee` border at the same radius

**Price card**
- Background: `#ffffff`
- Border: 1px solid `#e2e8ee`
- Radius: 24px
- Padding: 36px 24px
- Shadow: rgba(0, 0, 0, 0.08) 0px 3px 15px 0px
- Use: free-price cards on the terminal page

**Contact card**
- Background: `#0e1d40`
- Text: `#ffffff`
- Radius: 24px
- Padding: 64px 0px
- Use: 채팅 상담 on the terminal page; the other two contact cards use `#f5f8fa`

**Category badge**
- Background: `#0077fe`
- Text: `#ffffff`
- Radius: 50px
- Padding: 4px 8px 5px
- Height: 25px
- Font: 16px / 700 / 16px Noto Sans KR, letter-spacing -0.5px
- Use: BEST; EVENT uses `#f96eae` and HOT uses `#ff5b46`

**Hero badge**
- Background: `#0077fe`
- Text: `#ffffff`
- Radius: 50px
- Padding: 8px 20px
- Height: 44px
- Font: 18px / 700 / 28px Noto Sans KR, letter-spacing -0.5px
- Use: 사장님 맞춤형 1:1 밀착 컨설팅 on the table-order hero

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of payhere.in, logged out, plus a keyboard-state probe of the terminal page and first-party company pages)
**Tier 1 sources:** https://payhere.in/ ; https://payhere.in/table-order/ ; https://payhere.in/hardware/terminal/ ; https://payhere.in/company-info ; https://tech.payhere.in/post/design-payhere-welcome-kit/ ; https://careers.payhere.in/recruit/
**Tier 2 sources:** getdesign.md/payhere (HTTP 200, "payhere — 0 DESIGN.md files") and styles.refero.design/?q=payhere (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Header buttons: 0px 16px padding at 40px height
- Pill tabs and toggles: 12px 24px padding at 56px height
- Form fields: 12px padding at 48px height
- Cards: 32px (step cards), 36px 24px (price cards), 48px (contact cards)
- Section rhythm: 140px padding appears at the top and bottom of the home's tabbed sections
- The most frequent spacing values in the capture are 24, 12, 8, 16, 40, 4, 32 and 28px

### Grid & Container
- Content sits in a 1200px column inside full-width bands at the 1440px viewport.
- The home runs: a promotion banner over the header; a 44px hero title over four category cards; feature sliders and tabbed image sections; hardware cards with the blue purchase action; a black industry section; contact and investor rows; a download section; the footer.
- The table-order page opens with a hero form and a pricing section, then tabbed industry sections on `#f5f8fa` bands; the terminal page opens with a navy hero title, reviews, price cards, a comparison table and FAQs.

### Whitespace Philosophy
- **Big type, big gaps**: each section is one large title and one visual, separated by generous bands.
- **Bands for grouping**: white and `#f5f8fa` alternate; black sections mark a change of topic.

### Border Radius Scale
- 5px: header buttons
- 8px: fields, form submit, download buttons
- 12px: category cards, detail action
- 16px: floating buttons, award cards, slide cards
- 20px: image-grid cards
- 24px: content, price, step and contact cards
- 30px: pill tabs and toggles
- 50px: badges and floating capsules
- 100px: the pricing action and the 월회비 제로선언 badge
- 100%: circles (the 48px carousel arrows, carousel dots and colour swatches)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Sections, most cards, actions, tabs |
| Tint | `#f5f8fa` fill | Category, contact and step cards |
| Line | 1px solid `#e2e8ee` | Cards and fields |
| Ring | rgb(0, 140, 255) 0px 0px 0px 1px inset | Header outline button |
| Raised | rgba(0, 0, 0, 0.08) 0px 3px 15px 0px | Terminal price cards |
| Floating | rgba(0, 0, 0, 0.21) 0px 4px 12px 0px | Floating CTA, floating buttons |

**Shadow Philosophy**: Payhere keeps content flat and saves shadows for things that float or need to be compared: the floating buttons and capsules carry `rgba(0, 0, 0, 0.21) 0px 4px 12px 0px`, and the terminal page's free-price cards a lighter `rgba(0, 0, 0, 0.08) 0px 3px 15px 0px`.

## 7. Do's and Don'ts

### Do
- Use `#0077fe` for purchase and detail actions, selected pills and badges
- Keep `#008cff` for the header's button pair
- Set titles in Noto Sans KR 700 with `-1px` tracking, at 44px for sections
- Show selection by filling the pill `#0077fe` with a white label; leave unselected labels `#5f6976`
- Use `#f5f8fa` bands and cards with `#e2e8ee` lines to group content
- Use 24px radii for cards, 30px for pills and 50px for badges

### Don't
- Don't use the logo-only colours `#1d99ff` or `#a164f9` in the interface
- Don't treat the grey `#919ba5` submit fill as a disabled state; it is simply what an empty form shows
- Don't add drop shadows to ordinary cards or actions
- Don't set headings in a light weight; every title is 700
- Don't render form inputs in Noto Sans KR and call it the observed design; the inputs render in Arial
- Don't present Pretendard as the site face; it is declared but unused on these pages

## 8. Responsive Behavior

### Breakpoints
Only the 1440px desktop viewport was captured. Class names such as `DesktopOptionToggleWrapper` and `DesktopImage` imply separate mobile layouts, but no breakpoint was measured.

### Touch Targets
- Purchase action: 96px tall; floating capsules: 64px
- Pill tabs and toggles: 56px; form submit: 58px; fields: 48px
- Header buttons: 40px; floating buttons: 80 × 80

### Collapsing Strategy
- Not measured.

### Image Behavior
- Product and screen images sit inside 16px–24px rounded cards; nothing else was measured.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action and selection: `#0077fe` with `#ffffff` labels
- Header buttons: `#008cff`
- Text: `#000000`, navy `#1c2638`, deep navy `#101a2e`, slate `#2b3648`
- Quiet text: `#5f6976`, `#919ba5`, `#c1cad2`
- Surfaces: `#ffffff`, `#f5f8fa`, `#f4f8f9`; lines `#e2e8ee`
- Dark: `#000000` sections, `#0e1d40` contact card; selected pill on dark `#33abff`

### Example Component Prompts
- "Create a pill tab group: pills 56px tall with 30px radius and 12px 24px padding; unselected white with a 20px Noto Sans KR 400 label in `#5f6976` and `-1px` tracking; selected `#0077fe` with a white 20px 700 label."
- "Make a hardware card: white, 1px solid `#e2e8ee`, 24px radius, product image, a 36px 700 navy `#1c2638` name, and a full-width `#0077fe` action at the foot (96px tall, 0px 0px 24px 24px radius, white 32px 700 label, '구입하기 →')."
- "Build the header: logo at left, a text link, then a white 110 × 40 button with a 1px `#008cff` inset ring and `#008cff` 16px 700 label, and a `#008cff` button with a white label, both 5px radius."

### Iteration Guide
1. `#0077fe` for actions and selection; `#008cff` only in the header
2. Noto Sans KR 700 with `-1px` tracking for every title
3. Fill to select; grey labels when unselected
4. 24px cards, 30px pills, 50px badges
5. Flat content; shadows only on floating elements and price cards

---

## 10. Voice & Tone

Payhere talks to shop owners plainly and with confidence: it leads with rank, price and the job a feature does, and names features the way an owner would. Headlines often pair a benefit with the product name after a comma.

| Context | Tone |
|---|---|
| Hero headlines | Rank and promise. "모바일 포스 1위 매장의 새로운 미래, 페이히어." |
| Section titles | Benefit, then product. "인쇄·스캔·키오스크 다 되는 올인원 단말기, 페이히어 터미널." |
| Promotions | Concrete price. "인터넷+CCTV+단말기 다 해도 3만 원대." |
| Product labels | Plain nouns. "카드 단말기", "테이블 오더", "키오스크", "인터넷 패키지". |
| Brand copy | Mission-led. "WE MAKE THE FUTURE." |

**Voice samples (verbatim, opened 2026-09-30):**
- "모바일 포스 1위 매장의 새로운 미래, 페이히어" — home.
- "업계 최다 90,000+ 가맹점의 이유 있는 선택" — terminal page.
- "페이히어 테이블 오더로 어떤 고민을 해결해 드릴까요?" — table-order hero.
- "페이히어는 매장의 새로운 미래를 만듭니다. (We Make The Future)" — tech blog welcome-kit post.

**Forbidden register**: unexplained payments jargon, cold banking tone and fear-based urgency.

## 11. Brand Narrative

Payhere's company page frames the business as a single ambition: "WE MAKE THE FUTURE", a future for the store that its people believe changes their own lives and the world around them. The same page and the careers site credit the company's growth to obsession with the shop owner — "오직 사장님을 향한 집념으로" — and say it passed the industry's largest merchant count within one year. The careers site lists what the company builds today: POS, table order, kiosks, delivery and pickup ordering and sales analytics, connected in one platform so a shop can do more with fewer people. The footer names the company, 주식회사 페이히어, its representative 박준기 and its office on Gangnam-daero in Seoul, and the home cites recognition as one of Forbes' 100 promising companies in Asia.

The rebrand is documented by the company itself. A December 2022 post on the Payhere Tech Blog, written by a content designer in the design chapter, explains that the rebrand and the new-hire welcome kit were produced at the same time, so the kit could carry a clearer identity and colour and the new logo. Its message was "Journey to the Future", and it chose three words for how new colleagues should feel: Simple, Familiar and Long Awaited. The captured pages carry that tone into the product: plain Korean nouns, one working blue, soft rounded shapes and very large type.

## 12. Principles

1. **The store comes first.** *UI implication:* label features as shop tasks (테이블 오더, 카드 단말기) and lead with price and rank.
2. **Simple, Familiar, Long Awaited.** Payhere's own welcome-kit words. *UI implication:* familiar patterns — pills, cards, big titles — and nothing an owner has to learn.
3. **One working blue.** *UI implication:* `#0077fe` marks the next step and the current choice.
4. **Soft and generous.** *UI implication:* 24px cards, 30px pills, 50px badges; tight but large type.
5. **Shadows for floating things.** *UI implication:* content stays flat; only floating buttons and compared prices lift.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Payhere user segments (Korean small-business owners, café and restaurant operators, retail merchants), not individual people.*

**김도윤, 34, 서울.** Runs a small café and moved from a leased legacy POS to Payhere for the lower monthly cost. Chose it because the page led with a price, not a sales meeting.

**이서연, 41, 경기.** Owns a mid-size restaurant and added table ordering to cut order-taking work. Likes that the features are named the way she thinks about her shop.

**박준호, 29, 부산.** A first-time shop owner who needed a card terminal and a kiosk without enterprise complexity. Trusts the plain, rank-forward tone.

## 14. States

Only these states were observed; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (pill tab)** | White pill with a `#5f6976` 400 label becomes `#0077fe` with a white 700 label. |
| **Selected (toggle)** | `#e2e8ee` toggle with a `#5f6976` label becomes white with a `#008cff` 700 label. |
| **Selected (step)** | `#c1cad2` text and underline become `#0077fe`. |
| **Selected on dark** | The selected pill in the black section is `#33abff`; others `#1c2638`, both with white labels. |
| **Hover / pressed (carousel arrow)** | Border `#c1cad2` becomes `#111111`. |
| **Hover / pressed (header buttons, floating buttons)** | No change within the compared scope (probe). |
| **Empty form** | The submit button shows a `#919ba5` fill with a white label. |

Focus was not measured: the probe ran with focus skipped, and the collector's focus frames are not used. Links whose own colour reads as the browser default blue or active red carry their labels in children, so those values are not brand values. Error, loading and success states were not captured, because no form was ever filled or submitted.

## 15. Motion & Easing

The four probed controls — the header buttons and both floating buttons — declare no transition (`transition: all 0s`) and show no hover or pressed change. The home and terminal pages use sliders and carousels, which shows motion exists, but no duration or easing was measured, so none is specified. Honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/payhere.json (capturedAt 2026-09-30T07:52:32Z), deterministic collector, logged out: payhere.in, payhere.in/table-order/, payhere.in/hardware/terminal/.
- Floating buttons and header states: docs/research/2026-09-29-growth/raw/payhere-states-terminal.json (keyboard-state probe of the terminal page, 2026-09-30T07:57Z, focus skipped).
- §1, §10, §11: payhere.in/company-info, tech.payhere.in welcome-kit post (2022-12-16), careers.payhere.in/recruit/ and the payhere.in footer, opened 2026-09-30; narrative context only, no token.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
