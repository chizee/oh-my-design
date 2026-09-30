---
id: furiosaai
name: FuriosaAI
display_name_kr: 퓨리오사AI
country: KR
category: ai
homepage: "https://furiosa.ai"
primary_color: "#e21500"
logo:
  type: favicon
  slug: "https://cdn.prod.website-files.com/69289524195a1f9e06ade49b/6980d60efe980f28a29f0ade_Furiosa_Webclip.png"
verified: "2026-09-30"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-09-30"
  surfaces:
    - { id: home, kind: marketing, url: "https://furiosa.ai/", inspected: "2026-09-30" }
    - { id: surface-2, kind: marketing, url: "https://lp.furiosa.ai/furiosa-access-program", inspected: "2026-09-30" }
    - { id: surface-3, kind: marketing, url: "https://furiosa.ai/about", inspected: "2026-09-30" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://furiosa.ai/", captured: "2026-09-30" }
    - { id: surface-surface-2, kind: product-surface, url: "https://lp.furiosa.ai/furiosa-access-program", captured: "2026-09-30" }
    - { id: surface-surface-3, kind: product-surface, url: "https://furiosa.ai/about", captured: "2026-09-30" }
    - { id: careers, kind: official-doc, url: "https://furiosa.ai/careers", captured: "2026-09-30" }
    - { id: newsroom, kind: official-doc, url: "https://furiosa.ai/newsroom", captured: "2026-09-30" }
    - { id: rngd, kind: official-doc, url: "https://furiosa.ai/rngd", captured: "2026-09-30" }
    - { id: favorit-foundry, kind: license, url: "https://abcdinamo.com/typefaces/favorit", captured: "2026-09-30" }
  conflicts: []
  claims:
    "tokens.colors.primary": &fcta { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div.button (Talk to sales)", captured: "2026-09-30" }
    "tokens.colors.canvas": &fbody { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::body", captured: "2026-09-30" }
    "tokens.colors.ink": *fbody
    "tokens.colors.on-primary": &fclose { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-09-30" }
    "tokens.colors.on-primary-soft": *fcta
    "tokens.colors.notice-title": &ftitle { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::#cyNoticeTitle", captured: "2026-09-30" }
    "tokens.colors.form-canvas": &lbody { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::body", captured: "2026-09-30" }
    "tokens.colors.form-muted": *lbody
    "tokens.colors.form-ink": &lh2 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h2", captured: "2026-09-30" }
    "tokens.colors.form-border": &linput { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"0\"]", captured: "2026-09-30" }
    "tokens.colors.error": &lerr { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-interaction-capture=\"form-error-0-0\"]", captured: "2026-09-30" }
    "tokens.typography.family.sans": *fbody
    "tokens.typography.family.form": *lbody
    "tokens.typography.body.size": *fbody
    "tokens.typography.body.weight": *fbody
    "tokens.typography.body.lineHeight": *fbody
    "tokens.typography.body.use": *fbody
    "tokens.typography.nav.size": &fnav { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::[data-omd-capture=\"1\"]", captured: "2026-09-30" }
    "tokens.typography.nav.weight": *fnav
    "tokens.typography.nav.lineHeight": *fnav
    "tokens.typography.nav.use": *fnav
    "tokens.typography.button.size": *fcta
    "tokens.typography.button.weight": *fcta
    "tokens.typography.button.lineHeight": *fcta
    "tokens.typography.button.use": *fcta
    "tokens.typography.form-display.size": &lh1 { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::h1", captured: "2026-09-30" }
    "tokens.typography.form-display.weight": *lh1
    "tokens.typography.form-display.lineHeight": *lh1
    "tokens.typography.form-display.use": *lh1
    "tokens.typography.form-heading.size": *lh2
    "tokens.typography.form-heading.weight": *lh2
    "tokens.typography.form-heading.lineHeight": *lh2
    "tokens.typography.form-heading.use": *lh2
    "tokens.typography.form-body.size": *lbody
    "tokens.typography.form-body.weight": *lbody
    "tokens.typography.form-body.lineHeight": *lbody
    "tokens.typography.form-body.use": *lbody
    "tokens.typography.notice-title.size": *ftitle
    "tokens.typography.notice-title.weight": *ftitle
    "tokens.typography.notice-title.lineHeight": *ftitle
    "tokens.typography.notice-title.use": *ftitle
    "tokens.typography.notice-body.size": &fnbody { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::p (notice body)", captured: "2026-09-30" }
    "tokens.typography.notice-body.weight": *fnbody
    "tokens.typography.notice-body.lineHeight": *fnbody
    "tokens.typography.notice-body.use": *fnbody
    "tokens.typography.notice-button.size": *fclose
    "tokens.typography.notice-button.weight": *fclose
    "tokens.typography.notice-button.lineHeight": *fclose
    "tokens.typography.notice-button.use": *fclose
    "tokens.typography.submit.size": &lsubmit { surface_id: surface-2, source_id: surface-surface-2, method: computed-style, selector: "surface-2::[data-omd-capture=\"9\"]", captured: "2026-09-30" }
    "tokens.typography.submit.weight": *lsubmit
    "tokens.typography.submit.lineHeight": *lsubmit
    "tokens.typography.submit.use": *lsubmit
    "tokens.spacing.nav-y": *fnav
    "tokens.spacing.nav-x": *fnav
    "tokens.spacing.cta-x": *fcta
    "tokens.spacing.field-x": *linput
    "tokens.spacing.submit-x": *lsubmit
    "tokens.spacing.notice-card": &fcard { surface_id: home, source_id: surface-home, method: computed-style, selector: "home::div.cy-popup__card", captured: "2026-09-30" }
    "tokens.rounded.xs": *fcta
    "tokens.rounded.sm": *lsubmit
    "tokens.rounded.md": *linput
    "tokens.rounded.lg": *fclose
    "tokens.rounded.xl": *fcard
    "tokens.shadow.modal": *fcard
    "tokens.components.header-nav-link.type": *fnav
    "tokens.components.header-nav-link.bg": *fnav
    "tokens.components.header-nav-link.fg": *fnav
    "tokens.components.header-nav-link.padding": *fnav
    "tokens.components.header-nav-link.height": *fnav
    "tokens.components.header-nav-link.font": *fnav
    "tokens.components.header-nav-link.states": *fnav
    "tokens.components.header-nav-link.use": *fnav
    "tokens.components.header-cta.type": *fcta
    "tokens.components.header-cta.bg": *fcta
    "tokens.components.header-cta.fg": *fcta
    "tokens.components.header-cta.border": *fcta
    "tokens.components.header-cta.radius": *fcta
    "tokens.components.header-cta.padding": *fcta
    "tokens.components.header-cta.height": *fcta
    "tokens.components.header-cta.font": *fcta
    "tokens.components.header-cta.states": *fcta
    "tokens.components.header-cta.use": *fcta
    "tokens.components.notice-modal.type": *fcard
    "tokens.components.notice-modal.bg": *fcard
    "tokens.components.notice-modal.radius": *fcard
    "tokens.components.notice-modal.padding": *fcard
    "tokens.components.notice-modal.size": *fcard
    "tokens.components.notice-modal.shadow": *fcard
    "tokens.components.notice-modal.use": *fcard
    "tokens.components.notice-close-button.type": *fclose
    "tokens.components.notice-close-button.bg": *fclose
    "tokens.components.notice-close-button.fg": *fclose
    "tokens.components.notice-close-button.radius": *fclose
    "tokens.components.notice-close-button.padding": *fclose
    "tokens.components.notice-close-button.height": *fclose
    "tokens.components.notice-close-button.font": *fclose
    "tokens.components.notice-close-button.states": *fclose
    "tokens.components.notice-close-button.use": *fclose
    "tokens.components.access-form-input.type": *linput
    "tokens.components.access-form-input.bg": *linput
    "tokens.components.access-form-input.fg": *linput
    "tokens.components.access-form-input.border": *linput
    "tokens.components.access-form-input.radius": *linput
    "tokens.components.access-form-input.padding": *linput
    "tokens.components.access-form-input.height": *linput
    "tokens.components.access-form-input.font": *linput
    "tokens.components.access-form-input.error": *lerr
    "tokens.components.access-form-input.states": *linput
    "tokens.components.access-form-input.use": *linput
    "tokens.components.access-form-submit.type": *lsubmit
    "tokens.components.access-form-submit.bg": *lsubmit
    "tokens.components.access-form-submit.fg": *lsubmit
    "tokens.components.access-form-submit.radius": *lsubmit
    "tokens.components.access-form-submit.padding": *lsubmit
    "tokens.components.access-form-submit.height": *lsubmit
    "tokens.components.access-form-submit.font": *lsubmit
    "tokens.components.access-form-submit.states": *lsubmit
    "tokens.components.access-form-submit.use": *lsubmit
tokens:
  source: reconciled
  extracted: "2026-09-30"
  colors:
    primary: "#e21500"
    canvas: "#ffffff"
    ink: "#0b0b0b"
    on-primary: "#ffffff"
    on-primary-soft: "#e1e1e1"
    notice-title: "#111111"
    form-canvas: "#000000"
    form-muted: "#87909e"
    form-ink: "#30343b"
    form-border: "#c0d0de"
    error: "#942e1e"
  typography:
    family: { sans: "ABC Favorit", form: "Favorit" }
    body: { size: 16, weight: 400, lineHeight: 1.6, use: "Body text on furiosa.ai" }
    nav: { size: 14, weight: 400, lineHeight: 1.6, use: "Header navigation on furiosa.ai" }
    button: { size: 14, weight: 400, lineHeight: 1.43, use: "Header action label (Talk to sales)" }
    form-display: { size: 47, weight: 400, lineHeight: 1.11, use: "Furiosa Access Program headline (h1)" }
    form-heading: { size: 30, weight: 400, lineHeight: 1.35, use: "Furiosa Access Program section heading (h2)" }
    form-body: { size: 16, weight: 400, lineHeight: 1.45, use: "Furiosa Access Program body text" }
    notice-title: { size: 14, weight: 700, lineHeight: 1.35, use: "Notice modal title" }
    notice-body: { size: 12, weight: 400, lineHeight: 1.55, use: "Notice modal body text" }
    notice-button: { size: 12, weight: 600, lineHeight: 1.6, use: "Notice modal Close label" }
    submit: { size: 16, weight: 700, lineHeight: 1.0, use: "Furiosa Access Program submit label" }
  spacing: { nav-y: 8, nav-x: 12, cta-x: 12, field-x: 15, submit-x: 64, notice-card: 18 }
  rounded: { xs: 1, sm: 2, md: 5, lg: 10, xl: 12 }
  shadow:
    modal: "rgba(0, 0, 0, 0.18) 0px 18px 50px 0px"
  components:
    header-nav-link: { type: tab, bg: "transparent", fg: "#ffffff", padding: "8px 12px", height: "38px", font: "14px / 400 / 22.4px ABC Favorit", states: "rest only on home and About; no state frame", use: "Header links (Developers, Blog) over the dark hero at home::[data-omd-capture=\"1\"], 95 x 38; Products and Company open menus that were not captured" }
    header-cta: { type: button, bg: "#e21500", fg: "#e1e1e1", border: "1px solid transparent", radius: "1px", padding: "8px 12px", height: "38px", font: "14px / 400 / 20px ABC Favorit", states: "rest on home and About; no state frame", use: "Talk to sales at the right of the header (div.button wrapping the link at home::[data-omd-capture=\"3\"]), 126 x 38" }
    notice-modal: { type: card, bg: "#ffffff", radius: "12px", padding: "18px", size: "420px x 374px", shadow: "rgba(0, 0, 0, 0.18) 0px 18px 50px 0px", use: "Corporate notice card (cy-popup__card) that furiosa.ai opens on arrival, two stacked on home and About (a recruitment-phishing warning and a new-share issuance notice); title 14px / 700 / 18.9px #111111, body 12px / 400 / 18.6px at rgba(0, 0, 0, 0.75)" }
    notice-close-button: { type: button, bg: "#e21500", fg: "#ffffff", radius: "10px", padding: "10px 12px", height: "39px", font: "12px / 600 / 19.2px ABC Favorit", states: "rest on four instances (two modals each on home and About); no state frame", use: "Close button across the foot of each notice card at home::[data-omd-capture=\"5\"], 384 x 39, under a 다시 보지 않기 / Don't show again checkbox" }
    access-form-input: { type: input, bg: "#ffffff", fg: "#30343b", border: "1px solid #c0d0de", radius: "5px", padding: "0px 15px", height: "56px", font: "16px / 400 / 18.9px Favorit", error: "fg #942e1e, border 1px solid #942e1e", states: "rest and error; all eight required fields read the same error value after the collector focused them in turn and called reportValidity() on the first; nothing was submitted; focus is not declared from the capture", use: "Field of the Furiosa Access Program form (HubSpot-hosted, lp.furiosa.ai) at surface-2::[data-omd-capture=\"0\"], 426 x 56 half width or 864 x 56 full width; selects share the style" }
    access-form-submit: { type: button, bg: "#e21500", fg: "#ffffff", radius: "2px", padding: "0px 64px", height: "56px", font: "16px / 700 / 16px Favorit", states: "rest captured; the pressed frame adds only transparent zero-size shadows and the focus frame shadows at alpha 0.024, both transition frames, so neither is declared", use: "Submit button of the Furiosa Access Program form (input.hs-button.primary) at surface-2::[data-omd-capture=\"9\"], 181 x 56; never used to submit" }
  components_harvested: true
---

# Design System Inspiration of FuriosaAI

## 1. Visual Theme & Atmosphere

FuriosaAI (주식회사 퓨리오사에이아이) is a Korean AI-chip company whose research and development began in Seoul in 2017 and whose headquarters remain there, in Gangnam, under chief executive 백준호. It designs data-center accelerators for AI inference: the first-generation Vision NPU launched in 2021 on Samsung's 14nm process and entered volume production with Samsung Foundry and ASUS in 2023; the second generation, RNGD — "Renegade" — was unveiled in 2024 on TSMC 5nm, built on the company's Tensor Contraction Processor architecture, and the About page now records it entering mass production from 2026. The company states its mission plainly — to build AI chips capable of running the world's most advanced models efficiently, as a lever for more sustainable AI computing — and sells RNGD as a 180W PCIe card and as the NXT RNGD Server, "the most power efficient data center appliance for agentic systems", with furiosa-llm offered as a drop-in replacement for GPU serving through OpenAI-compatible APIs. Its evolution is outward: offices in Santa Clara, Germany, Singapore and Lisbon, an RNGD deployment at Equinix's Lisbon data center, a Broadcom partnership for agentic inference, and, with Samsung SDS, what the newsroom calls Korea's first domestic NPU-as-a-service.

The brand looks like a hardware company with a type foundry's discipline. furiosa.ai sets `#0b0b0b` ink on white `#ffffff` in the grotesque ABC Favorit at a relaxed 16px / 1.6, runs a transparent header with white links over its dark hero, and gives the page one saturated colour, a red `#e21500`, which fills every captured action: the header's "Talk to sales", the Close buttons of the site's notice cards, and the submit button of the Furiosa Access Program form. The header action is almost square-cornered — a 1px radius — with a softened `#e1e1e1` label, and headlines render in capitals ("FURIOSA RNGD ACCELERATES AI TRANSFORMATION"). The one elevated surface is the white notice card, 12px round with a long soft `rgba(0, 0, 0, 0.18) 0px 18px 50px 0px` shadow.

The company's culture page names the posture behind that restraint — "Show, don't tell: We disregard hype or self-promotion. Instead we let our products and results speak." — and the Access Program page carries it into sales: a black `#000000` page with a white 47px Favorit headline, "Start testing with Furiosa Access today.", above a form of 56px fields edged in `#c0d0de`.

**Key Characteristics:**
- One red, `#e21500`, on every captured action; everything else is ink, white and black
- ABC Favorit (Dinamo) on furiosa.ai at 16px / 1.6 body, 14px navigation and actions
- `#0b0b0b` ink on `#ffffff`; white header links over the dark hero
- Near-square action corners (1px header action, 2px form submit) against a 12px notice card
- A single elevation: `rgba(0, 0, 0, 0.18) 0px 18px 50px 0px` on the notice card
- Capitalised headlines and plain, benchmark-first copy
- A black Access Program page with 56px `#c0d0de`-edged fields and a `#942e1e` error state

## Primary tasks

- Read what RNGD and the NXT RNGD Server do before contacting sales
- Request a pilot through the Furiosa Access Program form
- Start with furiosa-llm and the developer docs
- Follow partnership and deployment news in the newsroom
- Read the About and Careers pages before applying for a role

## 2. Color Palette & Roles

Every token below was read by the deterministic collector on 2026-09-30 from furiosa.ai, its About page, and the Furiosa Access Program page on lp.furiosa.ai (a HubSpot-hosted landing page). On furiosa.ai the site's notice cards opened over the page on arrival and the collector could not close them, so it sampled the header, the notice cards and a few content rows, not the hero headlines, product cards or blog cards.

### Primary
- **Furiosa Red** (`#e21500`): The fill of every captured action — the header's "Talk to sales" on home and About, the four notice-card Close buttons, and the Access Program submit button. It is the primary because the product renders it in the primary-action role on all three pages (nine filled elements across three surfaces, including two state frames of the submit button); no other chromatic colour fills anything.
- **On Primary** (`#ffffff`): Labels on the Close and submit buttons.
- **On Primary Soft** (`#e1e1e1`): The label of the header's "Talk to sales", a light grey rather than white.

### Ink & Surface
- **Ink** (`#0b0b0b`): Body text on furiosa.ai.
- **Canvas** (`#ffffff`): Page background on furiosa.ai and the notice card.
- **Notice Title** (`#111111`): Titles of the notice cards; their body text is `rgba(0, 0, 0, 0.75)`.

### Furiosa Access Program (lp.furiosa.ai)
- **Form Canvas** (`#000000`): The page background.
- **Form Muted** (`#87909e`): Body text on the black page.
- **Form Ink** (`#30343b`): Section headings on the form panel and text inside fields.
- **Form Border** (`#c0d0de`): 1px field edges.
- **Error** (`#942e1e`): Text and border of fields marked invalid.

### Not carried forward
- The Partial record's display ladder (84px, 72px, 48px, 36px and 24px headlines, -2.1px tracking at 84px), its category chips (mint `#70e697`, yellow `#fffa82`), lavender `#cdbbff`, maroon `#440a07`, ink `#151515`, greys `#7f7f7f` and `#d4d4d4`, the 6px / 50px primary button with an ABC Favorit Mono label, the skip link and the 8px blog card were read in June 2026 from parts of the page this capture could not reach. None is a token here.
- The June "featured card" (420 wide, 12px, `rgba(0, 0, 0, 0.18) 0px 18px 50px`) and "modal close" button are the notice card and its Close button, now named for what they are.

## 3. Typography Rules

### Font Family
- **furiosa.ai, live use**: `ABC Favorit` — 76 observed uses (body, buttons, notice cards, headings, text); served from Webflow's CDN (`cdn.prod.website-files.com`), including `ABCFavorit-Regular.woff2` and `ABCFavorit-Medium.woff2`.
- **Access Program page, live use**: `Favorit` — 36 observed uses (h1, h2, fields, text) on lp.furiosa.ai; a FontFace named "Favorit" whose source file the collector did not record.
- **Foundry and licence**: Favorit is a retail typeface from the foundry Dinamo ("Favorit — Dinamo Typefaces", with trial fonts and paid licences); FuriosaAI's own licence terms are not public.
- **Declared only (no visible use)**: `ABC Favorit Mono` (`ABCFavoritMono-Regular.woff2` on the Webflow CDN), `IBM Plex Sans` (Access Program page), and the icon fonts `Phosphor`, `swiper-icons` and `webflow-icons`. The June record's claim that Mono sets every button label is not supported: the captured buttons are ABC Favorit and Favorit.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Form Display | Favorit | 47px | 400 | 52px (1.11) | normal | Access Program headline |
| Form Heading | Favorit | 30px | 400 | 40.5px (1.35) | normal | Access Program section heads |
| Body | ABC Favorit | 16px | 400 | 25.6px (1.6) | normal | furiosa.ai body |
| Form Body | Favorit | 16px | 400 | 23.2px (1.45) | normal | Access Program body |
| Submit | Favorit | 16px | 700 | 16px (1.0) | normal | Access Program submit |
| Nav | ABC Favorit | 14px | 400 | 22.4px (1.6) | normal | Header links |
| Button | ABC Favorit | 14px | 400 | 20px (1.43) | normal | Talk to sales |
| Notice Title | ABC Favorit | 14px | 700 | 18.9px (1.35) | normal | Notice cards |
| Notice Button | ABC Favorit | 12px | 600 | 19.2px (1.6) | normal | Notice Close |
| Notice Body | ABC Favorit | 12px | 400 | 18.6px (1.55) | normal | Notice cards |

### Principles
- **Regular weight carries the voice**: body, navigation, the header action and both Access Program headings are 400; bold is kept for the notice titles and the form submit.
- **Generous reading rhythm**: furiosa.ai sets body and navigation at a 1.6 line height.
- **One family name, two builds**: the Webflow site loads ABC Favorit from Dinamo-named files; the HubSpot landing page loads a face named Favorit, taken as the same family by name only — its source file was not recorded.

## 4. Component Stylings

### Navigation

**Header link**
- Background: transparent
- Text: `#ffffff`
- Padding: 8px 12px
- Height: 38px
- Font: 14px / 400 / 22.4px ABC Favorit
- States: rest only on home and About; no state frame
- Use: Developers and Blog over the dark hero, 95 × 38; Products and Company open menus that were not captured

### Buttons

**Header action (Talk to sales)**
- Background: `#e21500`
- Text: `#e1e1e1`
- Border: 1px solid transparent
- Radius: 1px
- Padding: 8px 12px
- Height: 38px
- Font: 14px / 400 / 20px ABC Favorit
- States: rest on home and About; no state frame
- Use: the header's sales action, 126 × 38

**Notice Close**
- Background: `#e21500`
- Text: `#ffffff`
- Radius: 10px
- Padding: 10px 12px
- Height: 39px
- Font: 12px / 600 / 19.2px ABC Favorit
- States: rest on four instances; no state frame
- Use: full-width Close at the foot of each notice card, 384 × 39, under a 다시 보지 않기 / Don't show again checkbox

**Access Program submit**
- Background: `#e21500`
- Text: `#ffffff`
- Radius: 2px
- Padding: 0px 64px
- Height: 56px
- Font: 16px / 700 / 16px Favorit
- States: rest captured; the pressed and focus frames only begin a shadow transition, so neither is declared
- Use: submit of the HubSpot-hosted Access Program form, 181 × 56; never used to submit

### Inputs & Forms

**Access Program field**
- Background: `#ffffff`
- Text: `#30343b`
- Border: 1px solid `#c0d0de`
- Radius: 5px
- Padding: 0px 15px
- Height: 56px
- Font: 16px / 400 / 18.9px Favorit
- Error: text `#942e1e`, border 1px solid `#942e1e`
- States: rest and error — all eight required fields settle on the same error value; focus is not declared from the capture
- Use: fields and selects of the Access Program form, 426 × 56 half width or 864 × 56 full width

### Cards & Containers

**Notice card**
- Background: `#ffffff`
- Radius: 12px
- Padding: 18px
- Size: 420 × 374
- Shadow: `rgba(0, 0, 0, 0.18) 0px 18px 50px 0px`
- Use: the corporate notices furiosa.ai opens on arrival — a recruitment-phishing warning and a new-share issuance notice, stacked on home and About; title 14px / 700 `#111111`, body 12px / 400 at `rgba(0, 0, 0, 0.75)`

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context)
**Tier 1 sources:** https://furiosa.ai/ ; https://furiosa.ai/about ; https://lp.furiosa.ai/furiosa-access-program ; https://furiosa.ai/careers ; https://furiosa.ai/newsroom ; https://furiosa.ai/rngd ; https://abcdinamo.com/typefaces/favorit
**Tier 2 sources:** getdesign.md/furiosaai (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=furiosa (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Header links and the header action: 8px 12px inside a 72px header with 12px vertical padding
- Access Program fields: 15px horizontal padding at 56px height; submit 64px horizontal
- Notice cards: 18px padding inside a 24px-padded overlay

### Grid & Container
- furiosa.ai: a 1440px page under a transparent 72px header (logo, links, Talk to sales at the right); content rows run about 1256–1272px wide.
- Access Program: a 960px column of headings above a two-column form (426px half-width fields) that becomes full width (864px) for longer fields.

### Whitespace Philosophy
- **Air around claims**: 1.6 line height for body copy, capitalised headlines given room.
- **Colour only for action**: red marks what to press; the rest of the page stays ink, white and black.

### Border Radius Scale
- 1px: the header action
- 2px: the Access Program submit
- 5px: form fields
- 10px: notice Close buttons
- 12px: the notice card

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Header, actions, fields, page |
| Modal | `rgba(0, 0, 0, 0.18) 0px 18px 50px 0px` | Notice card |

**Shadow Philosophy**: on the captured pages only the notice card casts a shadow; actions and fields are flat, separated by colour and a hairline edge.

## 7. Do's and Don'ts

### Do
- Keep `#e21500` for actions — header action, confirmations, form submit
- Set text in ABC Favorit (or Favorit) at regular weight with a 1.6 body line height
- Use `#0b0b0b` ink on white, and white text over dark bands
- Keep action corners nearly square (1–2px); reserve 12px and the long soft shadow for a floating card
- Edge form fields in `#c0d0de` at 56px height, with `#942e1e` for errors
- Write headlines in capitals and let numbers carry the argument

### Don't
- Don't introduce a second saturated colour for actions
- Don't put shadows on buttons or fields
- Don't substitute another grotesque or a system font for Favorit; where it cannot load, say so
- Don't reuse the June chip colours or display sizes as if the current site used them
- Don't invent hover or focus colours; none was captured

## 8. Responsive Behavior

### Breakpoints
Only the 1440 × 900 desktop viewport was captured. The header action carries the Webflow class `u-md-d-none`, which suggests it is hidden at a medium breakpoint; the direction was not measured, and no other breakpoint was measured.

### Touch Targets
- Header links and action: 38px tall
- Notice Close: 39px
- Access Program fields and submit: 56px

### Collapsing Strategy
- Not measured beyond `u-md-d-none` on the header action.

### Image Behavior
- Not captured; the hero sat behind the notice cards.

## 9. Agent Prompt Guide

### Quick Color Reference
- Action fill: `#e21500`; labels `#ffffff` (header action `#e1e1e1`)
- Ink `#0b0b0b` on canvas `#ffffff`; notice title `#111111`
- Access Program: canvas `#000000`, body `#87909e`, form ink `#30343b`, field edge `#c0d0de`, error `#942e1e`

### Example Component Prompts
- "Create a header action: `#e21500` background, `#e1e1e1` 14px / 400 ABC Favorit label, 1px radius, 8px 12px padding, 38px tall, no shadow."
- "Design a notice card: white, 12px radius, 18px padding, shadow `rgba(0, 0, 0, 0.18) 0px 18px 50px 0px`; title 14px / 700 `#111111`, body 12px / 400 at 75% black, and a full-width `#e21500` Close button with a white 12px / 600 label and 10px radius."
- "Build a lead form field: white, 1px solid `#c0d0de`, 5px radius, 0 15px padding, 56px tall, 16px Favorit in `#30343b`; error state `#942e1e` text and border."

### Iteration Guide
1. Red `#e21500` only on actions
2. ABC Favorit, regular weight, 1.6 body line height
3. Ink on white, white on dark
4. Near-square action corners; one soft shadow for floating cards
5. Capitalised headlines, numbers over adjectives

---

## 10. Voice & Tone

FuriosaAI's voice is **technical, declarative and quietly defiant** — the register of engineers who would rather show a result than make a promise. The careers page makes it a rule ("Show, don't tell"), and the site follows it: capitalised statements of capability, efficiency claims tied to a power figure, and practical instructions for developers.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, capitalised. "FURIOSA RNGD ACCELERATES AI TRANSFORMATION". |
| Product | Efficiency with a number. "POWERFULLY EFFICIENT 180W PCIE INFERENCE". |
| Developers | Direct and practical. "Drop-in GPU replacement. Migrate your entire client code today." |
| CTAs | Terse. "Talk to sales", "Learn more". |
| Culture | Plain values. "Shared vision", "Fierce execution", "Show, don't tell". |

**Voice samples (verbatim, opened 2026-09-30):**
- "FURIOSA RNGD ACCELERATES AI TRANSFORMATION" — home headline.
- "POWERFULLY EFFICIENT 180W PCIE INFERENCE" — RNGD page headline.
- "We disregard hype or self-promotion. Instead we let our products and results speak." — careers page.
- "Start testing with Furiosa Access today." — Access Program headline.

**Forbidden register**: GPU-era hype superlatives, AGI grandiosity untethered from a benchmark, exclamation-driven marketing, stacked adjectives where a number would do.

## 11. Brand Narrative

FuriosaAI's About page tells its history as a hardware timeline: research and development began in Seoul in 2017; in 2021 the first-generation Vision NPU launched on Samsung 14nm and, by the company's account, it became the first AI-chip startup to outperform Nvidia on MLPerf Inference; in 2022 came enterprise and public-cloud deployment with Kakao and ecosystem partnerships with Hugging Face, Samsung, SK Hynix, TSMC, ASUS and LG AI Research; in 2023 the Vision NPU reached volume production; in 2024 the second-generation RNGD was unveiled on TSMC 5nm; in 2025 sampling began with global technology companies; and from 2026 RNGD is in mass production. Korean business press introduced RNGD as "Renegade" when it launched in 2024, with the company's CTO arguing that GPUs suit training but carry clear limits in power and price for inference.

The CTO's line on the careers page — "We came together to really reinvent AI computing from the ground up and at every level." — frames the company as a full-stack challenger, and its three values, shared vision, fierce execution and show, don't tell, read directly into the design: one red for action, calm regular-weight type, and capability stated as fact. The company now works from Seoul, Santa Clara, Germany, Singapore and Lisbon.

What FuriosaAI refuses, visible in its design: GPU-era spectacle and hype. What it embraces: a precise grotesque, a hardware-spec plainness, and a single warning-light red.

## 12. Principles

1. **Show, don't tell.** From the Furiosa Way. *UI implication:* state capability and efficiency as facts with numbers; no hype copy.
2. **One red means action.** *UI implication:* `#e21500` fills actions and nothing else.
3. **Shared vision.** Hardware and software work as one team. *UI implication:* the same type and colour rules across the Webflow site and the landing pages.
4. **Fierce execution.** *UI implication:* terse labels ("Talk to sales"), short paths to a pilot.
5. **Calm type, loud claims.** *UI implication:* regular-weight Favorit; emphasis from capitals and size, not weight.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable FuriosaAI audiences (ML infrastructure engineers, data-center architects, Korean deep-tech recruits), not individual people.*

**Daniel Cho, 34, Seoul.** An ML infrastructure engineer at a Korean cloud provider evaluating inference accelerators. Cares about performance per watt; reads the furiosa-llm docs before anything else.

**Hannah Weber, 41, Munich.** A data-center architect exploring alternatives to GPU clusters for LLM serving. Drawn by the efficiency claims and the Broadcom and Equinix news; wants a clear path from product page to the Access Program form.

**박지민, 28, 대전.** A new-graduate chip engineer considering FuriosaAI. Reads the company as the challenger and trusts its plain, results-first voice.

## 14. States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Error (Access Program fields)** | Text and border `#30343b` / `#c0d0de` → `#942e1e` on all eight required fields, after the collector focused them in turn and called `reportValidity()` on the first. Nothing was submitted. |
| **Notice open** | furiosa.ai opens two stacked notice cards on arrival, each with a 다시 보지 않기 / Don't show again checkbox and a red Close. |
| **Transition frames (not declared)** | The submit button's pressed frame (transparent zero-size shadows) and focus frame (shadows at alpha 0.024); field focus frames at `#c1cbd9` (focus is never taken from the capture); a 150 × 21 red link on the form page reading `#000000` under the pointer, one element with no sibling. |

Hover and focus treatments on furiosa.ai itself, empty, loading and success states were not captured and are not described.

## 15. Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The submit button's pressed and focus frames caught a shadow transition just beginning, which shows transitions exist without timing them. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/furiosaai.json (capturedAt 2026-09-30T07:08:31.059Z), deterministic collector, 1440x900, logged out: furiosa.ai, lp.furiosa.ai/furiosa-access-program (HubSpot-hosted), furiosa.ai/about. The first run (furiosa.ai, /rngd, /blog) scored coverage 54 and was replaced by this retry with other surfaces.
- §1, §3, §11 context: furiosa.ai/about, /careers, /newsroom, /rngd, the notice cards' own text (company name, address, CEO), abcdinamo.com/typefaces/favorit; BusinessKorea (2024-09-10) for "Renegade". All opened 2026-09-30.
- The June record's founder romanisation and first-generation product name were not seen on a first-party page this session and are not stated.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->
