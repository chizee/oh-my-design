---
id: gangnamunni
name: 강남언니
display_name_kr: Gangnamunni (강남언니)
country: KR
category: consumer-tech
homepage: "https://www.gangnamunni.com"
primary_color: "#d54300"
logo:
  type: favicon
  slug: "https://www.gangnamunni.com/favicon.ico"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Gangnamunni Blog
  url: "https://blog.gangnamunni.com/post/welchis/"
  type: brand
  description: Official account of Cell for the consumer app and Welchis for the PC back office.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product, url: "https://www.gangnamunni.com/", inspected: "2026-07-13" }
    - { id: events, kind: product, url: "https://www.gangnamunni.com/events", inspected: "2026-07-13" }
    - { id: welchis-post, kind: documentation, url: "https://blog.gangnamunni.com/post/welchis/", inspected: "2026-07-13" }
  sources:
    - { id: live-home, kind: product-surface, url: "https://www.gangnamunni.com/", captured: "2026-07-13" }
    - { id: live-events, kind: product-surface, url: "https://www.gangnamunni.com/events", captured: "2026-07-13" }
    - { id: official-welchis, kind: official-doc, url: "https://blog.gangnamunni.com/post/welchis/", captured: "2026-07-13" }
    - { id: official-voice, kind: official-doc, url: "https://blog.gangnamunni.com/post/ui-text-guideline", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  claims:
    "tokens.colors.canvas": &card { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=20]", captured: "2026-07-13" }
    "tokens.colors.foreground": &cta { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=3]", captured: "2026-07-13" }
    "tokens.colors.muted": &events { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::p.typo-label-sm-subtle", captured: "2026-07-13" }
    "tokens.colors.surface": &chip { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=34]", captured: "2026-07-13" }
    "tokens.colors.border": *cta
    "tokens.typography.family.sans": *card
    "tokens.typography.body.size": *card
    "tokens.typography.body.weight": *card
    "tokens.typography.body.lineHeight": *card
    "tokens.typography.label.size": *chip
    "tokens.typography.label.weight": *chip
    "tokens.typography.label.lineHeight": *chip
    "tokens.typography.title.size": &title { surface_id: home, source_id: live-home, method: computed-style, selector: "home::h3", captured: "2026-07-13" }
    "tokens.typography.title.weight": *title
    "tokens.typography.title.lineHeight": *title
    "tokens.spacing.sm": *cta
    "tokens.spacing.md": *cta
    "tokens.rounded.cta": *cta
    "tokens.rounded.card": *card
    "tokens.rounded.full": *chip
    "tokens.components.outline-cta.type": *cta
    "tokens.components.outline-cta.fg": *cta
    "tokens.components.outline-cta.border": *cta
    "tokens.components.outline-cta.radius": *cta
    "tokens.components.outline-cta.padding": *cta
    "tokens.components.outline-cta.font": *cta
    "tokens.components.outline-cta.pressed": &cell_css { surface_id: home, source_id: live-home, method: live-css-inspect, captured: "2026-09-16" }
    "tokens.components.outline-cta.disabled": *cell_css
    "tokens.components.outline-cta.focus": *cell_css
    "tokens.components.outline-cta.states": *cta
    "tokens.components.outline-cta.use": *cta
    "tokens.components.filter-chip.type": *chip
    "tokens.components.filter-chip.bg": *chip
    "tokens.components.filter-chip.fg": *chip
    "tokens.components.filter-chip.radius": *chip
    "tokens.components.filter-chip.height": *chip
    "tokens.components.filter-chip.padding": *chip
    "tokens.components.filter-chip.font": *chip
    "tokens.components.filter-chip.active": *chip
    "tokens.components.filter-chip.pressed": *cell_css
    "tokens.components.filter-chip.disabled": *cell_css
    "tokens.components.filter-chip.focus": *cell_css
    "tokens.components.filter-chip.states": *chip
    "tokens.components.filter-chip.use": *chip
    "tokens.components.media-card-action.type": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.media-card-action.bg": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.media-card-action.radius": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.media-card-action.padding": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.media-card-action.states": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.media-card-action.use": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"20\"]", captured: "2026-07-13" }
    "tokens.components.category-shortcut.type": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-13" }
    "tokens.components.category-shortcut.bg": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-13" }
    "tokens.components.category-shortcut.border": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-13" }
    "tokens.components.category-shortcut.radius": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-13" }
    "tokens.components.category-shortcut.padding": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-13" }
    "tokens.components.category-shortcut.height": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-13" }
    "tokens.components.category-shortcut.states": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-13" }
    "tokens.components.category-shortcut.use": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"5\"]", captured: "2026-07-13" }
    "tokens.components.header-icon-button.type": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-icon-button.bg": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-icon-button.radius": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-icon-button.padding": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-icon-button.size": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-icon-button.states": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.header-icon-button.use": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"2\"]", captured: "2026-07-13" }
    "tokens.components.search-input.type": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.search-input.bg": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.search-input.fg": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.search-input.radius": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.search-input.padding": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.search-input.height": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.search-input.font": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.search-input.states": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.search-input.use": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.link-button.type": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"180\"]", captured: "2026-07-13" }
    "tokens.components.link-button.bg": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"180\"]", captured: "2026-07-13" }
    "tokens.components.link-button.fg": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"180\"]", captured: "2026-07-13" }
    "tokens.components.link-button.radius": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"180\"]", captured: "2026-07-13" }
    "tokens.components.link-button.padding": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"180\"]", captured: "2026-07-13" }
    "tokens.components.link-button.height": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"180\"]", captured: "2026-07-13" }
    "tokens.components.link-button.font": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"180\"]", captured: "2026-07-13" }
    "tokens.components.link-button.states": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"180\"]", captured: "2026-07-13" }
    "tokens.components.link-button.use": { surface_id: home, source_id: live-home, method: computed-style, selector: "home::[data-omd-capture=\"180\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.type": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.bg": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.fg": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.radius": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.padding": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.height": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.font": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.selected": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"14\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.states": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.events-tab.use": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"15\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.type": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.bg": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.fg": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.border": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.radius": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.padding": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.height": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.font": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.states": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
    "tokens.components.outline-filter-chip.use": { surface_id: events, source_id: live-events, method: computed-style, selector: "surface-2::[data-omd-capture=\"4\"]", captured: "2026-07-13" }
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only current computed consumer-product values are tokens. Frontmatter primary_color is catalog identity metadata, not a current token."
  colors: { canvas: "#ffffff", foreground: "#131517", muted: "#697683", surface: "#eff2f5", border: "#b5bfc9" }
  typography:
    family: { sans: "PretendardVariable" }
    body: { size: 16, weight: 400, lineHeight: "24px" }
    label: { size: 14, weight: 500, lineHeight: "19.6px" }
    title: { size: 20, weight: 700, lineHeight: "28px" }
  spacing: { sm: 8, md: 12 }
  rounded: { cta: 6, card: 20, full: 9999 }
  components_harvested: true
  components:
    outline-cta: { type: button, fg: "#131517", border: "1px solid #b5bfc9", radius: "6px", padding: "8px 12px", font: "13px / 600", pressed: "rgba(33, 39, 45, 0.04)", disabled: "#d8dfe6", focus: "#000000", states: "pressed frames exist on home and events (capture 3) and hold the rest values in every dumped property. The pressed, disabled, and focus values were added on 2026-09-16 from a live CSS inspection (commit e8857007) without a recorded property; the July bundle neither confirms nor contradicts them. Corrected 2026-09-29: the July text said no pressed value was retained while one is declared", use: "Current small outline CTA on home and events" }
    filter-chip: { type: button, bg: "#eff2f5", fg: "#131517", radius: "9999px", height: "32px", padding: "0px 10px", font: "14px / 500", active: "#131517", pressed: "rgba(33, 39, 45, 0.04)", disabled: "#f7f9fa", focus: "#000000", states: "selected-false (capture 34) and selected-true (capture 33) variants captured; the bundle holds no pointer-state frame for any chip. The pressed, disabled, and focus values come from the 2026-09-16 live CSS inspection (commit e8857007) without a recorded property and have no bundle counterpart", use: "Current procedure filter chip on home" }
    media-card-action: { type: button, bg: "#ffffff", radius: "20px", padding: "0px", states: "default captured; no state frame", use: "Home feature-card action (button, rounded-500, eight occurrences) at home::[data-omd-capture=\"20\"]; its 303px rendered height is layout context, and #000000 is the button element's own colour, not a sampled label colour" }
    category-shortcut: { type: button, bg: "#ffffff", border: "1px #e4e8ec", radius: "16px", padding: "6px 16px 6px 8px", height: "54px", states: "rest captured on fourteen shortcuts (capture 5-18). Each has a pressed frame and capture 9 also a focus frame; those frames hold the rest values in every dumped colour, border, radius, shadow, padding, and type property. Opacity, transform, and overlays are outside the dump, so no pressed or focus value is declared", use: "Home category shortcut link (a.group, text-inherit) at home::[data-omd-capture=\"5\"]; its label colour is inherited and was not sampled" }
    header-icon-button: { type: button, bg: "transparent", radius: "0px", padding: "0px", size: "44px x 44px", states: "the events copies (surface-2 capture 0 and 2) have pressed frames that hold the rest values in every dumped colour, border, radius, shadow, padding, and type property, so no pressed value is declared; the home copy has no state frame", use: "Header icon button (button.inline-flex, w-[44px]) at home::[data-omd-capture=\"2\"]; icon-only, its glyph colour was not sampled" }
    search-input: { type: input, bg: "transparent", fg: "#131517", radius: "0px", padding: "0px", height: "24px", font: "16px / 400 / 24px", states: "default captured; no state frame", use: "Home search field (input[type=search].cell-search-input__input, cell-semantic-typography-body-single-lg-subtle) at home::[data-omd-capture=\"4\"]; transparent and borderless inside a wrapper that was not sampled" }
    link-button: { type: button, bg: "transparent", fg: "#697683", radius: "0px", padding: "0px", height: "20px", font: "13px / 600 / 20px", states: "default captured; no state frame", use: "Cell link button, size sm (a.cell-link-button--size_sm, cell-semantic-typography-label-sm-strong) at home::[data-omd-capture=\"180\"]; events repeats it (surface-2::[data-omd-capture=\"58\"]); the md size (home::[data-omd-capture=\"28\"]) computes 14px / 600 / 22px" }
    events-tab: { type: tab, bg: "transparent", fg: "#697683", radius: "0px", padding: "12px 0px", height: "48px", font: "16px / 500 / 24px", selected: "fg #131517, 16px / 600", states: "rest (capture 15, typo-label-lg-regular, 14 occurrences) and the emphasised tab (capture 14, typo-label-lg-strong text-fg-neutral-primary) captured; the bundle records no aria-selected, so selected names the class-emphasised tab; no state frame", use: "Events-page tab link at surface-2::[data-omd-capture=\"15\"]" }
    outline-filter-chip: { type: button, bg: "transparent", fg: "#697683", border: "1px #b5bfc9", radius: "9999px", padding: "0px 10px", height: "32px", font: "14px / 500 / 19.6px", states: "default captured; no state frame", use: "Events-page filter chip, outline appearance (a.cell-filter-chip--appearance_outline) at surface-2::[data-omd-capture=\"4\"]" }
---

# Design System Inspiration of Gangnamunni (강남언니)

## 1. Visual Theme & Atmosphere

강남언니 is a Korean consumer service for finding and comparing medical-procedure information, hospitals, and event prices. Its current public product routes put this research task ahead of ornamental branding: the homepage and events surface use a white canvas, blue-grey text, quiet grey filter fills, and compact procedure controls that can be scanned quickly. The official team describes Cell as the system for the consumer app across iOS, Android, and mobile web, while Welchis is a separate PC back-office system; their component geometry must not be blended. The product’s public copy frames the service around confidence in a choice, and the design team’s writing guidance connects that confidence to clear, understandable information.

**Key Characteristics:**
- Current canvas `#ffffff`, foreground `#131517`, muted text `#697683`, and filter surface `#eff2f5`
- Loaded, visible consumer-product family `PretendardVariable`
- Compact outline CTA and 32px full-radius filter-chip geometry
- Cell consumer surfaces and Welchis back-office documentation are separate evidence domains

## Primary tasks

- Find information about a medical procedure and the hospitals that offer it
- Compare procedure prices across options and settle on a choice with confidence
- Narrow procedure options with the compact filter controls on home

## 2. Color Palette & Roles

- **Canvas** (`#ffffff`): captured home feature-card action.
- **Foreground** (`#131517`): captured home outline CTA and filter chip.
- **Muted** (`#697683`): captured events-page tertiary label.
- **Surface** (`#eff2f5`): captured unselected home filter chip.
- **Border** (`#b5bfc9`): captured home outline CTA.

The catalog identity color in frontmatter was not retained as a current computed component value, so no orange value is offered as a reusable UI token.

## 3. Typography Rules

| Role | Family | Size | Weight | Line Height | Evidence |
|---|---|---:|---:|---:|---|
| Body | PretendardVariable | 16px | 400 | 24px | current consumer-product observation |
| Label | PretendardVariable | 14px | 500 | 19.6px | current home filter chip |
| Title | PretendardVariable | 20px | 700 | 28px | current home observation |

| Evidence class | Status |
|---|---|
| **Official product-use** | No current Gangnamunni announcement naming a product font was found. |
| **Live computed surface-use** | `PretendardVariable` is first family in 616 visible consumer-product observations and has one loaded Gangnamunni-hosted WOFF2 source. |
| **Official distributed font asset** | Pretendard’s upstream project documents `Pretendard Variable` and SIL Open Font License 1.1; this is not a Gangnamunni distribution claim. |
| **Documentation chrome** | The Welchis blog loaded separate `pretendard` files in 66 observations; those are not consumer-product tokens. |
| **Declared-only** | `color-emoji`, `commitMono`, `icomoon`, and fallback families had no visible usage. |
| **Unresolved** | No public evidence establishes a product font-license notice, native-app type contract, or monospace family. |

## 4. Component Stylings

### Outline CTA

**Small outline CTA**
- Text: `#131517`
- Border: 1px solid `#b5bfc9`
- Radius: 6px
- Padding: 8px 12px
- Font: 13px / 600 / PretendardVariable
- Pressed: `rgba(33, 39, 45, 0.04)`, from the 2026-09-16 live CSS inspection (commit `e8857007`). The July bundle's pressed frames for this CTA (home and events, capture 3) hold the rest values in every dumped property. A value painted by a pseudo-element or by opacity would not appear in that dump, so the bundle neither confirms nor contradicts it.
- Disabled `#d8dfe6` and focus `#000000`: from the same 2026-09-16 inspection. The property each value belongs to is not recorded in this reference, and the bundle has no disabled or focus frame for this CTA.
- States: corrected 2026-09-29. The July line said no pressed value was retained, which contradicted the pressed value declared since 2026-09-16.
- Use: `home::[data-omd-capture="3"]`; same fingerprint on home and events.

### Procedure filter

**Unselected fill chip**
- Background: `#eff2f5`
- Text: `#131517`
- Radius: 9999px
- Height: 32px
- Padding: 0px 10px
- Font: 14px / 500 / PretendardVariable
- Selected: Separate selected-true DOM variant captured with `#131517` background and `#ffffff` text (`home::[data-omd-capture="33"]`).
- Pressed `rgba(33, 39, 45, 0.04)`, disabled `#f7f9fa`, focus `#000000`: from the 2026-09-16 live CSS inspection (commit `e8857007`), property not recorded. The July bundle holds no pointer-state frame for any chip, so it cannot corroborate them.
- Use: `home::[data-omd-capture="34"]`.

### Media card action

**Home feature-card action**
- Background: `#ffffff`
- Element colour: `#000000` is the button's own computed colour. The card's label text was not sampled, so no text colour is declared (corrected 2026-09-29: July listed it as the text colour).
- Radius: 20px
- Font: 16px / 400 / PretendardVariable
- Padding: 0px
- Use: `home::[data-omd-capture="20"]` (eight occurrences); 303px rendered height is context, not a portable token.
- States: default captured; no state frame.

The components below were transcribed on 2026-09-29 from the same 2026-07-13 bundle; nothing was re-measured.

### Category shortcut

- Background: `#ffffff`
- Border: 1px `#e4e8ec`
- Radius: 16px
- Padding: 6px 16px 6px 8px
- Height: 54px
- Use: home category shortcut link (`a.group`, `text-inherit`), fourteen captured (`home::[data-omd-capture="5"]` to `"18"`). Its label colour is inherited and was not sampled, so no text style is declared.
- States: every shortcut has a pressed frame and capture 9 also a focus frame; those frames hold the rest values in every dumped property. Opacity, transform, and overlays are outside the dump, so no pressed or focus value is declared.

### Header icon button

- Background: transparent
- Radius: 0px · Padding: 0px · Size: 44px × 44px
- Use: header icon button (`button.inline-flex`, `w-[44px]`), `home::[data-omd-capture="2"]`; events repeats it. Icon-only; the glyph colour was not sampled.
- States: the events copies (`surface-2::[data-omd-capture="0"]` and `"2"`) have pressed frames that hold the rest values in every dumped property, so no pressed value is declared. The home copy has no state frame.

### Search field

- Background: transparent, borderless
- Text: `#131517`
- Height: 24px
- Font: 16px / 400 / 24px PretendardVariable (`cell-semantic-typography-body-single-lg-subtle`)
- Use: home search field, `home::[data-omd-capture="4"]` (`input[type=search].cell-search-input__input`). Its wrapper was not sampled, so no field border or fill is declared.
- States: default only; no state frame.

### Link button

- Background: transparent
- Text: `#697683`
- Padding: 0px · Height: 20px
- Font: 13px / 600 / 20px (`cell-semantic-typography-label-sm-strong`)
- Use: Cell link button, size sm, `home::[data-omd-capture="180"]`; events repeats it (`surface-2::[data-omd-capture="58"]`). The md size (`home::[data-omd-capture="28"]`) computes 14px / 600 / 22px.
- States: default only; no state frame.

### Events tab

- Background: transparent
- Text: `#697683`
- Padding: 12px 0px · Height: 48px
- Font: 16px / 500 / 24px (`typo-label-lg-regular`)
- Selected: text `#131517`, 16px / 600 (`surface-2::[data-omd-capture="14"]`, `typo-label-lg-strong text-fg-neutral-primary`). The bundle records no `aria-selected`, so "selected" names the class-emphasised tab.
- Use: events-page tab link, `surface-2::[data-omd-capture="15"]`; 14 occurrences share this style.
- States: no state frame.

### Outline filter chip

- Background: transparent
- Text: `#697683`
- Border: 1px `#b5bfc9`
- Radius: 9999px · Padding: 0px 10px · Height: 32px
- Font: 14px / 500 / 19.6px
- Use: events-page filter chip, outline appearance (`a.cell-filter-chip--appearance_outline`), `surface-2::[data-omd-capture="4"]`.
- States: default only; no state frame.

---

**Verified:** 2026-07-13 (verification v2; supplied current computed-style bundle plus first-party source review)
**Tier 1 sources:** https://www.gangnamunni.com/ · https://www.gangnamunni.com/events · https://blog.gangnamunni.com/post/welchis/ · https://blog.gangnamunni.com/post/ui-text-guideline
**Tier 2 sources:** https://getdesign.md/gangnamunni direct detail attempt returned an internal fetch error; https://styles.refero.design/?q=gangnamunni and https://styles.refero.design/?q=%EA%B0%95%EB%82%A8%EC%96%B8%EB%8B%88 direct search attempts returned internal fetch errors. No Tier 2 value was imported.
**Surface split:** Home and events are consumer-product surfaces. The Welchis post is documentation context only; its typography and controls are not Cell/product tokens.
**Conflicts unresolved:** none

No importable Tier 2 value was available to conflict with current Tier 1 observations.

## 5. Layout Principles

- Retained component observations include 8px and 12px CTA padding, 10px horizontal chip padding, 6px CTA radius, 20px media-card radius, and full-radius chips.
- These are public-surface samples, not a complete Cell scale or native-app layout specification.
- Cell is the consumer system; Welchis is the PC back office. Do not transfer documentation chrome between them.

## 6. Depth & Elevation

The retained component representatives report `box-shadow: none`. This describes those components only; it does not establish a global shadow, modal, or card-depth contract.

## 7. Do's and Don'ts

### Do

- Name tokens by their captured product role and source surface.
- Use loaded `PretendardVariable` for a reconstruction of this consumer web capture.
- Preserve the captured 32px full-radius filter-chip geometry.
- Keep Cell consumer work separate from Welchis references.

### Don't

- Don't promote catalog identity orange without a current component observation.
- Don't reuse blog `pretendard` or declared `commitMono` as the product family.
- Don't invent hover, focus, disabled, error, toast, or changed pressed values.
- Don't promote responsive 303px card height into a general token.

## 8. Responsive Behavior

The supplied evidence has one retained capture context and establishes no breakpoints, grids, mobile navigation, or native-app behavior. Treat responsive behavior as unresolved.

## 9. Agent Prompt Guide

"Recreate the current Gangnamunni consumer-web filter area with `#ffffff` canvas, `#131517` foreground, `#697683` muted labels, and `#eff2f5` chips. Use loaded `PretendardVariable`; make chips 32px high with 9999px radius and 0px 10px padding. The small outline CTA uses 6px radius, 8px 12px padding, `#131517` text, and a 1px `#b5bfc9` border. Do not add an unobserved primary-orange CTA, shadows, or interaction states."

---

## 10. Voice & Tone

The official UI-text guideline calls for confident communication, easy-to-understand medical information, and one topic at a time. It permits restrained emphasis, including an exclamation mark, when it makes value or a completed journey clear; the earlier legacy claim banning exclamation marks has been removed.

| Principle | Apply | Avoid |
|---|---|---|
| Confidence | State a feature’s value and completion directly. | Hesitant wording. |
| Understandability | Use familiar language and a next action for an exception. | Jargon or generic error text. |
| One topic | Keep one message focused; split distinct cases. | Dense combined instructions. |

## 11. Brand Narrative

The public product presents Gangnamunni as a place to compare procedure information and prices with confidence in a choice. The company’s design writing states a mission to make better medical services accessible to anyone and describes customer perspective as central to product work. Its engineering account separates Cell’s consumer mobile platforms from Welchis’s PC back office because their users and interaction patterns differ.

## 12. Principles

1. **Make the next step understandable.** *UI implication:* give an error a concrete recovery action when current evidence supports that state.
2. **Keep a message to one topic.** *UI implication:* separate unrelated procedure conditions or instructions.
3. **Use the system for its user and platform.** *UI implication:* do not import Welchis desktop geometry into Cell without direct evidence.

## 13. Personas

No named synthetic personas are included. First-party sources substantiate only consumer-app users (Cell) and PC back-office users (Welchis).

Research-backed decision, accessibility, and locale needs are not established here. Add them only when a user or first-party source supplies them.

## 14. States

The bundle's `interactions[]` record is empty (`interactionCount: 0`), and there is no current first-party contract for loading, empty, error, success, disabled, or selection behavior beyond the captured DOM variants. The bundle does hold pointer-state frames: pressed frames on the outline CTA, the category shortcuts, and the events header icon buttons, and one focus frame on a shortcut. They hold the rest values in every dumped property, so no bundle-derived state value is declared. The declared pressed, disabled, and focus values on the outline CTA and filter chip come from the 2026-09-16 live CSS inspection (§4). The blog surface's hover and pressed frames record the rest colour re-serialized from `oklch()` to `oklab()`, differing by less than 0.001 in any channel, which reads as a transition artifact rather than a state value; that surface is documentation chrome in any case. Corrected 2026-09-29: the July text did not mention the pressed and focus frames.

## 15. Motion & Easing

No current first-party motion token, duration, easing curve, or reduced-motion behavior was collected.
