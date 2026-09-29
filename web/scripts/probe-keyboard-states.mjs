#!/usr/bin/env node
/**
 * probe-keyboard-states.mjs — several controls, ONE page load: identity + real hover + pressed + real keyboard focus.
 *
 * WHY (2026-09-29). probe-component-states.mjs reads one control per run, loads the page four times and forces focus
 * with `.focus()` after one Tab. A KR pilot (karrot) showed what a sweep actually needs: hover painted by a ::before
 * overlay whose bg never changes, a focus ring that lives on the input's WRAPPER, and three of six controls with no
 * authored focus style at all. This script measures up to ~6 controls in one load with the method that worked.
 *
 * USAGE
 *   node scripts/probe-keyboard-states.mjs <url> --text "<label>" [--tag a|button|input] [--landmark header|footer|nav|main]
 *                                          [--nth N] [--exact] [--key name]  --selector "<css>" [--nth N] ...
 *     Controls are collected in the order given; --tag/--landmark/--nth/--exact/--key/--label/--min-height/--href bind to the
 *     --text/--selector before them. --text matches visible text, aria-label, placeholder, value and title (substring,
 *     case-insensitive, or the whole string with --exact). Open shadow roots are searched; iframes are not.
 *     On the CLI every --text/--selector starts a NEW control (the two cannot be combined for one control); a --cfg `find` object can carry both.
 *   node scripts/probe-keyboard-states.mjs <url> --cfg controls.json
 *     {"controls":[{"key","label","find":{"tag","text","exact","landmark","selector","minH","nth","href"},"declared"}]}
 *     (the shape of docs/research/2026-09-29-growth/raw/karrot-cfg.json; `declared` is copied to the output)
 *   node scripts/probe-keyboard-states.mjs <url> --survey --out survey.json     list interactive elements to choose from
 *   options  --locale ko-KR (default) · --wait 6000 (ms after load) · --settle 900 (ms after each state change, floor 800)
 *            --max-tabs 500 · --out file.json [--quiet: JSON only to the file] · --hide-overlays · --no-focus · --no-mouse
 *            --retries 3 --retry-wait 60000 (block/403 policy) · --budget 420000 · --close-timeout 5000 · --up N (ancestor levels compared; default 2, inputs 3; a cfg control may carry "up") · --help
 *   exit     0 ok · 1 error · 2 usage · 3 budget/signal, partial JSON · 4 blocked or unreachable after the retries (boot.block)
 *
 * METHOD (one load; the order matters)
 *   load "load"+wait → dismiss consent (reject/necessary-only buttons only — never Accept) → tag controls → identity + REST
 *   → KEYBOARD walk FIRST, on the pristine page: real `Tab` presses from the page start, until each control is the deep
 *     `document.activeElement` (shadow roots pierced); wait >= settle and until its CSS transitions end; read; require
 *     `:focus-visible`; press Tab once more and re-read the control's rest (restAfterBlur; whatever stays changed is listed in persistsAfterBlur). Focus changes are measured against the pristine page-top rest.
 *     (Once a mouse has pressed something, Tab resumes from that spot, not the page start — hence keyboard first.)
 *   → MOUSE pass: per control (inputs last) scroll to centre, park the pointer, read rest, move onto it (hit-tested with
 *     elementFromPoint: control or descendant), read HOVER, mouse-down, read PRESSED, release IN PLACE with click/mouseup/
 *     pointerup/submit swallowed at window capture — nothing is ever clicked, no link is followed, no form is sent.
 *   Every read compares bg, fg, border, radius, box-shadow, outline (drawn only), transform, opacity, filter,
 *   background-image, text-decoration, ::before/::after, size/padding/font, the label child (colour/decoration), up to 14
 *   text/img/svg descendants and 2 ancestors (3 for inputs — the visible ring is usually on a wrapper). Values that are still
 *   moving between two reads are listed in `unstableProps`, not as changes.
 *
 * HONESTY RULES
 *   - hover/pressed/focus is `measured:false` + a reason — UNMEASURED, never "no change" — unless `:hover` / `:active` /
 *     `:focus-visible` really matched the control. A cover (banner, fixed header) is named; --hide-overlays hides fixed/sticky
 *     overlays for that control only and records it (report it).
 *   - `outline-style: auto` is the browser's default ring, not brand (`indication.browserDefaultRing`).
 *   - It never signs in, types, or submits. Do not use it on a host that looks internal. Never a real/owner browser.
 *   - Prints JSON BEFORE closing, races every close, exits explicitly (see probe-component-states.mjs for the 2026-09-29 hang).
 */
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";

// ───────────────────────────── arguments ─────────────────────────────
const argv = process.argv.slice(2);
const url = argv.find((a) => /^https?:\/\//.test(a));
const VALUE_FLAGS = new Set(["text", "selector", "cfg", "config", "locale", "wait", "settle", "max-tabs", "out", "retries", "retry-wait", "close-timeout", "budget", "survey-limit", "up", "nth", "tag", "landmark", "min-height", "key", "label", "href"]);
const PER_CONTROL = new Set(["nth", "tag", "landmark", "min-height", "exact", "key", "label", "href"]);
const g = {};
const cli = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (!a.startsWith("--")) continue;
  const name = a.slice(2);
  const val = VALUE_FLAGS.has(name) ? argv[++i] : true;
  if (name === "text" || name === "selector") { cli.push({ key: `c${cli.length + 1}`, label: `${name} ${val}`, find: { [name]: val } }); continue; }
  if (PER_CONTROL.has(name)) {
    const last = cli[cli.length - 1];
    if (!last) { console.error(`--${name} must come after the --text/--selector it belongs to`); process.exit(2); }
    if (name === "key") last.key = val;
    else if (name === "label") last.label = val;
    else if (name === "min-height") last.find.minH = Number(val);
    else if (name === "nth") last.find.nth = Number(val);
    else last.find[name] = val;
    continue;
  }
  g[name] = val;
}
if (g.help) { const src = fs.readFileSync(new URL(import.meta.url), "utf8"); console.log(src.slice(src.indexOf("/**"), src.indexOf("*/") + 2)); process.exit(0); }
let cfgControls = [];
const cfgPath = g.cfg ?? g.config;
if (cfgPath) {
  try { cfgControls = JSON.parse(fs.readFileSync(cfgPath, "utf8")).controls ?? []; }
  catch (e) { console.error(`cannot read --cfg ${cfgPath}: ${e.message}`); process.exit(2); }
}
const controls = [...cfgControls, ...cli].map((c, n) => ({ ...c, i: n + 1 }));
{ const used = new Set(); for (const c of controls) { c.key = String(c.key ?? `c${c.i}`); while (used.has(c.key)) c.key += "_"; used.add(c.key); } }
if (!url || (!controls.length && !g.survey)) {
  console.error('usage: probe-keyboard-states.mjs <url> (--text "<label>" | --selector "<css>")... [--cfg file.json] [--survey] [--out file.json] [--locale ko-KR] — see --help');
  process.exit(2);
}

const LOCALE = g.locale ?? "ko-KR";
const LANG_BASE = LOCALE.split("-")[0];
const WAIT = Number(g.wait ?? 6000);
const SETTLE_MIN = Math.max(800, Number(g.settle ?? 900));
const MAX_TABS = Number(g["max-tabs"] ?? 500);
const RETRIES = Number(g.retries ?? 3);
const RETRY_WAIT = Number(g["retry-wait"] ?? 60000);
const CLOSE_TIMEOUT = Number(g["close-timeout"] ?? 5000);
const BUDGET = Number(g.budget ?? 420000);
const OUT = g.out ?? null;
const QUIET = !!g.quiet;
// Same context as probe-component-states.mjs: a plain desktop UA (headless Chrome announces itself otherwise), locale + Accept-Language.
const REAL_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";
const CONTEXT = { viewport: { width: 1440, height: 1000 }, userAgent: REAL_UA, locale: LOCALE, extraHTTPHeaders: { "Accept-Language": `${LOCALE},${LANG_BASE};q=0.9,en;q=0.8` } };

// ───────────────────────────── shared state + shutdown ─────────────────────────────
const T0 = Date.now();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const raceClose = (p) => Promise.race([Promise.resolve(p).catch(() => {}), sleep(CLOSE_TIMEOUT)]);
const result = {
  tool: "probe-keyboard-states.mjs",
  boot: { url, locale: LOCALE, viewport: "1440x1000", loads: 0, startedAt: new Date(T0).toISOString(), settleMinMs: SETTLE_MIN, maxTabs: MAX_TABS },
  controls: {}, walk: [], notes: [],
};
let browser = null;
let TABLE = null;
let emitted = false;
async function emitAndExit(code) {
  if (emitted) return;
  emitted = true;
  clearTimeout(watchdog);
  for (const R of Object.values(result.controls)) {
    if (!R.found) continue;
    for (const s of ["hover", "pressed", "focus"]) {
      if (!R[s]) R[s] = { measured: false, unmeasured: result.boot.watchdog ? `not reached before the run ended early (${result.boot.watchdog})` : `phase skipped (${s === "focus" ? "--no-focus" : "--no-mouse"})` };
    }
  }
  result.boot.elapsedMs = Date.now() - T0;
  const json = JSON.stringify(result, null, 2) + "\n";
  if (OUT) { try { fs.mkdirSync(path.dirname(path.resolve(OUT)), { recursive: true }); fs.writeFileSync(OUT, json); } catch (e) { console.error(`--out write failed: ${e.message}`); } }
  // Print BEFORE closing: a hung close() must never swallow a finished measurement.
  if (!QUIET) await Promise.race([new Promise((r) => process.stdout.write(TABLE ?? json, r)), sleep(5000)]);
  await Promise.race([new Promise((r) => process.stderr.write("", r)), sleep(1000)]);
  if (browser) await raceClose(browser.close());
  process.exit(code);
}
const watchdog = setTimeout(() => { result.boot.watchdog = `budget ${BUDGET}ms exhausted; partial result`; emitAndExit(3); }, BUDGET);
process.on("SIGINT", () => { result.boot.watchdog = "SIGINT"; emitAndExit(130); });
process.on("SIGTERM", () => { result.boot.watchdog = "SIGTERM"; emitAndExit(143); });

// ───────────────────────────── in-page code (serialised into the page) ─────────────────────────────
function inPage() {
  if (window.__omdKb) return;
  const KB = (window.__omdKb = {});
  // The release of a press must never act on the page. Off by default; switched on only around mouse.up().
  window.__omdKbBlock = false;
  for (const t of ["click", "auxclick", "dblclick", "mouseup", "pointerup", "submit"]) {
    window.addEventListener(t, (e) => { if (window.__omdKbBlock) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
  }
  const norm = (s) => String(s ?? "").replace(/\s+/g, " ").trim();
  const round1 = (n) => Math.round(n * 10) / 10;
  const roots = () => { const out = [document]; const walk = (r) => { for (const el of r.querySelectorAll("*")) if (el.shadowRoot) { out.push(el.shadowRoot); walk(el.shadowRoot); } }; walk(document); return out; };
  const q = (sel) => roots().flatMap((r) => [...r.querySelectorAll(sel)]);
  const parentOf = (n) => n.parentElement || (n.getRootNode && n.getRootNode().host) || null;
  const deepActive = () => { let a = document.activeElement; while (a && a.shadowRoot && a.shadowRoot.activeElement) a = a.shadowRoot.activeElement; return a; };
  const cls = (el) => (typeof el.className === "string" ? el.className.trim().split(/\s+/).filter(Boolean).slice(0, 2).join(".") : "");
  const short = (el) => {
    if (!el) return "null";
    if (el === document.body) return "body";
    if (el === document.documentElement) return "html";
    const lab = norm(el.getAttribute("aria-label") || (el.textContent || "").slice(0, 120) || el.value || el.getAttribute("title") || el.getAttribute("alt") || "");
    return `${el.tagName.toLowerCase()}${el.id ? "#" + el.id.slice(0, 20) : ""}${cls(el) ? "." + cls(el) : ""}[${lab.slice(0, 24)}]`;
  };
  const cssPath = (el) => { const parts = []; for (let n = el, d = 0; n && n.nodeType === 1 && d < 3; n = parentOf(n), d++) { parts.unshift(`${n.tagName.toLowerCase()}${n.id ? "#" + n.id.slice(0, 20) : ""}${cls(n) ? "." + cls(n) : ""}`); } return parts.join(" > "); };
  const LM = { header: "header,[role=banner]", footer: "footer,[role=contentinfo]", nav: "nav,[role=navigation]", main: "main,[role=main]" };
  const landmark = (el) => Object.keys(LM).find((k) => el.closest && el.closest(LM[k])) || "-";
  const visible = (el, minH) => {
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < minH) return false;
    if (r.right <= 0 || r.bottom + scrollY <= 0) return false;
    const s = getComputedStyle(el);
    return s.visibility !== "hidden" && s.display !== "none" && parseFloat(s.opacity) > 0.01;
  };
  const INTERACTIVE = "a,button,[role=button],[role=tab],[role=link],[role=menuitem],[role=combobox],[role=searchbox],[role=textbox],input:not([type=hidden]),select,textarea,summary,label,[tabindex]:not([tabindex='-1'])";

  KB.find = (cfg) => {
    let pool = cfg.selector ? q(cfg.selector) : q(INTERACTIVE);
    pool = pool.filter((el) => visible(el, cfg.minH ?? 8));
    if (cfg.tag) pool = pool.filter((el) => el.tagName.toLowerCase() === String(cfg.tag).toLowerCase());
    if (cfg.landmark) pool = pool.filter((el) => LM[cfg.landmark] && el.closest(LM[cfg.landmark]));
    if (cfg.href) pool = pool.filter((el) => (el.getAttribute("href") || "").includes(cfg.href));
    if (cfg.text) {
      const needle = norm(cfg.text).toLowerCase();
      pool = pool.filter((el) => {
        const labs = [el.textContent, el.getAttribute("aria-label"), el.getAttribute("placeholder"), el.value, el.getAttribute("title")].map(norm).filter(Boolean).map((s) => s.toLowerCase());
        return cfg.exact ? labs.some((l) => l === needle) : labs.some((l) => l.includes(needle));
      });
    }
    return pool;
  };
  // A control is marked with data-omd-kb="<index>" (space separated when two controls resolve to the same element).
  KB.get = (i) => document.querySelector(`[data-omd-kb~="${i}"]`) || q(`[data-omd-kb~="${i}"]`)[0] || null;
  KB.tag = (i, cfg) => {
    for (const old of q(`[data-omd-kb~="${i}"]`)) {
      const rest = old.getAttribute("data-omd-kb").split(" ").filter((t) => t !== String(i)).join(" ");
      if (rest) old.setAttribute("data-omd-kb", rest); else old.removeAttribute("data-omd-kb");
    }
    let pool;
    try { pool = KB.find(cfg); } catch (e) { return { found: false, candidates: 0, error: String(e.message || e) }; }
    const el = pool[cfg.nth || 0];
    if (!el) return { found: false, candidates: pool.length };
    el.setAttribute("data-omd-kb", ((el.getAttribute("data-omd-kb") || "") + " " + i).trim());
    return { found: true, candidates: pool.length };
  };

  const alpha = (c) => {
    c = String(c);
    if (c === "transparent") return 0;
    let m = c.match(/^rgba?\(([^)]*)\)$/);
    if (m) { const p = m[1].split(/[\s,\/]+/).filter(Boolean); return p.length > 3 ? parseFloat(p[3]) * (p[3].endsWith("%") ? 0.01 : 1) : 1; }
    m = c.match(/\/\s*([\d.]+%?)\s*\)$/);
    if (m) return m[1].endsWith("%") ? parseFloat(m[1]) / 100 : parseFloat(m[1]);
    return 1;
  };
  const border = (s) => {
    const sides = ["Top", "Right", "Bottom", "Left"].map((d) => { const w = s["border" + d + "Width"], st = s["border" + d + "Style"], c = s["border" + d + "Color"]; return st === "none" || st === "hidden" || parseFloat(w) === 0 ? "none" : `${w} ${st} ${c}`; });
    return sides.every((x) => x === sides[0]) ? sides[0] : sides.join(" | ");
  };
  const drawnOutline = (s) => (s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0 && alpha(s.outlineColor) > 0 ? `${s.outlineColor} ${s.outlineStyle} ${s.outlineWidth} off ${s.outlineOffset}` : "none");
  const behind = (el) => { for (let n = el; n; n = parentOf(n)) { const c = getComputedStyle(n).backgroundColor; if (alpha(c) > 0) return c; } return "none(canvas)"; };
  // ::before/::after only when something is painted (transparent empty boxes are not a state change).
  const pseudo = (el, ps) => {
    const c = getComputedStyle(el, ps);
    if (c.content === "none" || c.content === "normal" || c.display === "none") return "";
    const glyph = c.content !== '""' && c.content !== "''";
    const paints = alpha(c.backgroundColor) > 0 || c.backgroundImage !== "none" || c.boxShadow !== "none" || parseFloat(c.borderTopWidth) > 0 || glyph;
    if (!paints) return "";
    return `${ps}{content:${c.content.slice(0, 20)};bg:${c.backgroundColor};img:${c.backgroundImage.slice(0, 60)};color:${glyph ? c.color : "-"};op:${c.opacity};tf:${c.transform};bs:${c.boxShadow};size:${c.width}x${c.height}}`;
  };
  const dec = (s) => (s.textDecorationLine === "none" ? "none" : `${s.textDecorationLine} ${s.textDecorationStyle} ${s.textDecorationColor}`);
  const hasOwnText = (n) => [...n.childNodes].some((x) => x.nodeType === 3 && x.textContent.trim());
  const kidsOf = (el) => {
    const out = [];
    for (const k of el.querySelectorAll("*")) {
      if (out.length >= 14) break;
      if (k.tagName.toLowerCase() !== "svg" && k.closest("svg")) continue;
      if (!(hasOwnText(k) || /^(img|svg|picture|video|canvas)$/i.test(k.tagName))) continue;
      out.push(k);
    }
    return out;
  };
  const kidRec = (k, n) => {
    const s = getComputedStyle(k);
    return { k: `${k.tagName.toLowerCase()}#${n}`, fg: s.color, bg: s.backgroundColor, op: s.opacity, tf: s.transform, filter: s.filter, deco: dec(s), fill: k.tagName.toLowerCase() === "svg" ? `${s.fill}|${s.stroke}` : "", img: s.backgroundImage === "none" ? "" : s.backgroundImage.slice(0, 60), pseudo: pseudo(k, "::before") + pseudo(k, "::after"), w: round1(k.getBoundingClientRect().width) };
  };
  const upRec = (n, lvl) => {
    const s = getComputedStyle(n);
    return { k: `up${lvl}:${short(n).slice(0, 40)}`, bg: s.backgroundColor, border: border(s), shadow: s.boxShadow, outline: drawnOutline(s), tf: s.transform, op: s.opacity, filter: s.filter, img: s.backgroundImage === "none" ? "" : s.backgroundImage.slice(0, 60), pseudo: pseudo(n, "::before") + pseudo(n, "::after"), focusWithin: n.matches(":focus-within") };
  };
  const labelEl = (el) => (hasOwnText(el) ? el : [...el.querySelectorAll("*")].find((k) => hasOwnText(k) && !k.closest("svg")) || el);

  KB.snap = (i, upLevels) => {
    const el = KB.get(i);
    if (!el) return null;
    const s = getComputedStyle(el), r = el.getBoundingClientRect();
    const lab = labelEl(el), ls = getComputedStyle(lab);
    const ups = [];
    for (let l = 1, p = parentOf(el); l <= upLevels && p && p !== document.body && p !== document.documentElement; l++, p = parentOf(p)) ups.push(upRec(p, l));
    return {
      bg: s.backgroundColor, behind: behind(el), fg: s.color,
      border: border(s), radius: s.borderRadius, shadow: s.boxShadow, outline: drawnOutline(s), outlineStyle: s.outlineStyle,
      transform: s.transform, opacity: s.opacity, filter: s.filter, bgImage: s.backgroundImage === "none" ? "none" : s.backgroundImage.slice(0, 120),
      deco: dec(s),
      before: pseudo(el, "::before"), after: pseudo(el, "::after"),
      size: `${round1(r.width)}x${round1(r.height)}`, padding: s.padding, font: `${s.fontSize}/${s.fontWeight}`,
      label: { k: short(lab).slice(0, 40), fg: ls.color, font: `${ls.fontSize}/${ls.fontWeight}`, deco: dec(ls), op: ls.opacity, tf: ls.transform },
      kids: kidsOf(el).map((k, n) => kidRec(k, n)), ups,
      is: { hover: el.matches(":hover"), active: el.matches(":active"), focus: el.matches(":focus"), focusVisible: el.matches(":focus-visible"), focusWithin: el.matches(":focus-within") },
    };
  };
  KB.identity = (i) => {
    const el = KB.get(i);
    if (!el) return null;
    const s = getComputedStyle(el), r = el.getBoundingClientRect();
    return {
      tag: el.tagName.toLowerCase(), role: el.getAttribute("role"), type: el.getAttribute("type"),
      href: el.getAttribute("href") ? el.getAttribute("href").slice(0, 140) : null,
      text: norm(el.textContent).slice(0, 80), aria: el.getAttribute("aria-label"), placeholder: el.getAttribute("placeholder"), title: el.getAttribute("title"),
      landmark: landmark(el), path: cssPath(el),
      rect: { x: Math.round(r.left + scrollX), y: Math.round(r.top + scrollY), w: round1(r.width), h: round1(r.height) },
      radius: s.borderRadius, padding: s.padding, font: `${s.fontSize}/${s.fontWeight}`, lineHeight: s.lineHeight,
      family: s.fontFamily.split(",")[0].replace(/["']/g, "").trim(), letterSpacing: s.letterSpacing, cursor: s.cursor,
      transition: `${s.transitionProperty} ${s.transitionDuration} ${s.transitionTimingFunction} ${s.transitionDelay}`,
      tabIndex: el.tabIndex, disabled: !!(el.disabled || el.getAttribute("aria-disabled") === "true"),
      ariaSelected: el.getAttribute("aria-selected"), ariaCurrent: el.getAttribute("aria-current"), ariaExpanded: el.getAttribute("aria-expanded"),
    };
  };
  // True while a finite transition/animation is still running on the control, its subtree or 3 ancestors.
  KB.busy = (i) => {
    const el = KB.get(i);
    if (!el) return 0;
    const nodes = [el];
    for (let l = 0, p = parentOf(el); l < 3 && p && p !== document.body; l++, p = parentOf(p)) nodes.push(p);
    let n = 0;
    for (const node of nodes) {
      const list = node.getAnimations ? node.getAnimations({ subtree: node === el }) : [];
      for (const a of list) if ((a.playState === "running" || a.playState === "pending") && a.effect && a.effect.getComputedTiming().iterations !== Infinity) n++;
    }
    return n;
  };
  const deepAt = (x, y) => { let e = document.elementFromPoint(x, y); while (e && e.shadowRoot) { const inner = e.shadowRoot.elementFromPoint(x, y); if (!inner || inner === e) break; e = inner; } return e; };
  const within = (el, e) => { for (let n = e; n; n = parentOf(n)) if (n === el) return true; return false; };
  // Scrolls the control to the middle of the viewport and finds a point where the control (or a descendant) is what the pointer would hit.
  KB.hit = (i) => {
    const el = KB.get(i);
    if (!el) return null;
    el.scrollIntoView({ block: "center", inline: "nearest" });
    const r = el.getBoundingClientRect();
    let cover = null;
    for (const [fx, fy] of [[.5, .5], [.25, .5], [.75, .5], [.5, .25], [.5, .75], [.15, .15], [.85, .85]]) {
      const x = r.left + r.width * fx, y = r.top + r.height * fy;
      if (x < 0 || y < 0 || x >= innerWidth || y >= innerHeight) continue;
      const e = deepAt(x, y);
      if (e && within(el, e)) return { x, y, hitEl: short(e) };
      if (e && !cover) {
        let f = e;
        for (let n = e; n; n = parentOf(n)) { const p = getComputedStyle(n).position; if (p === "fixed" || p === "sticky") { f = n; break; } }
        const fr = f.getBoundingClientRect();
        cover = `${short(e)} (fixed/sticky ancestor: ${f === e ? "itself" : short(f)} ${Math.round(fr.width)}x${Math.round(fr.height)} pos=${getComputedStyle(f).position})`;
      }
    }
    return { x: null, y: null, cover: cover || "no point of the control lies inside the viewport", rect: { x: Math.round(r.left), y: Math.round(r.top), w: round1(r.width), h: round1(r.height) } };
  };
  KB.hideOverlays = (i) => {
    const target = KB.get(i);
    const anc = new Set();
    for (let n = target; n; n = parentOf(n)) anc.add(n);
    const hidden = [];
    KB.hidden = KB.hidden || [];
    for (const el of document.querySelectorAll("body *")) {
      if (anc.has(el) || el.contains(target)) continue;
      const s = getComputedStyle(el);
      if (s.position !== "fixed" && s.position !== "sticky") continue;
      const r = el.getBoundingClientRect();
      if (r.width < 40 || r.height < 40 || s.display === "none") continue;
      el.__omdPrev = [el.style.getPropertyValue("display"), el.style.getPropertyPriority("display")];
      el.style.setProperty("display", "none", "important");
      KB.hidden.push(el);
      hidden.push(`${short(el)} ${Math.round(r.width)}x${Math.round(r.height)} pos=${s.position}`);
    }
    return hidden;
  };
  KB.restoreOverlays = () => { for (const el of KB.hidden || []) { const [v, pr] = el.__omdPrev || ["", ""]; if (v) el.style.setProperty("display", v, pr); else el.style.removeProperty("display"); } KB.hidden = []; };
  KB.fixedInventory = () => {
    const out = [];
    for (const el of document.querySelectorAll("body *")) {
      const s = getComputedStyle(el);
      if (s.position !== "fixed" && s.position !== "sticky") continue;
      const r = el.getBoundingClientRect();
      if (r.width < 40 || r.height < 40) continue;
      out.push(`${short(el)} ${Math.round(r.width)}x${Math.round(r.height)} pos=${s.position} z=${s.zIndex}`);
    }
    return out.slice(0, 20);
  };
  KB.seen = new Set();
  KB.active = () => {
    const a = deepActive();
    const isBody = !a || a === document.body || a === document.documentElement;
    const attr = !isBody && a.getAttribute ? a.getAttribute("data-omd-kb") : null;
    const isFrame = !isBody && /^(iframe|frame)$/i.test(a.tagName);   // Tab presses inside a (cross-origin) frame leave document.activeElement on the frame element
    const repeat = !isBody && KB.seen.has(a);
    if (!isBody) KB.seen.add(a);
    return { idxs: attr ? attr.split(" ").map(Number) : [], isBody, isFrame, repeat, desc: short(a) };
  };
  // After an autofocus or a synthetic click the next Tab would resume from that spot; a span inserted at the start and removed again collapses the starting point to the top.
  KB.resetFocusToStart = () => {
    const a = document.activeElement;
    if (a && a.blur) a.blur();
    const s = document.createElement("span");
    s.tabIndex = -1;
    document.body.insertBefore(s, document.body.firstChild);
    s.focus();
    s.remove();
    scrollTo(0, 0);
  };
  KB.survey = (limit, minH) => {
    const rows = [], seen = new Set();
    for (const el of q(INTERACTIVE)) {
      if (!visible(el, minH)) continue;
      const s = getComputedStyle(el), r = el.getBoundingClientRect();
      const text = norm(el.textContent).slice(0, 60), aria = el.getAttribute("aria-label"), ph = el.getAttribute("placeholder");
      const key = `${el.tagName}|${text}|${aria}|${el.getAttribute("href")}|${Math.round(r.left)}|${Math.round(r.top + scrollY)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const tag = el.tagName.toLowerCase(), role = el.getAttribute("role"), b = border(s);
      rows.push({
        tag, role, type: el.getAttribute("type"), href: el.getAttribute("href") ? el.getAttribute("href").slice(0, 90) : null, text, aria, ph,
        x: Math.round(r.left + scrollX), y: Math.round(r.top + scrollY), w: round1(r.width), h: round1(r.height),
        radius: s.borderRadius, padding: s.padding, font: `${s.fontSize}/${s.fontWeight}`, family: s.fontFamily.split(",")[0].replace(/["']/g, "").trim(), lineHeight: s.lineHeight,
        bg: s.backgroundColor, fg: s.color, border: b, cursor: s.cursor, tabIndex: el.tabIndex, landmark: landmark(el), cls: cls(el),
        buttonLike: /^(button|input|select|summary)$/.test(tag) || /^(button|tab|menuitem|combobox|searchbox)$/.test(role || "") || alpha(s.backgroundColor) > 0 || (b !== "none" && parseFloat(s.borderRadius) > 0),
      });
      if (rows.length >= limit) break;
    }
    return { rows, fixed: KB.fixedInventory() };
  };
}

// The consent step: only reject / necessary-only buttons are ever pressed (same lists as probe-component-states.mjs).
function consentFn() {
  const REJECT = ["#onetrust-reject-all-handler", "#CybotCookiebotDialogBodyButtonDecline", "button[data-testid='uc-deny-all-button']", ".didomi-continue-without-agreeing", "#didomi-notice-disagree-button", "#cm [data-role=\"necessary\"]", "#c-s-bn", "button.cc-btn[data-role=necessary]"];
  const roots = [document];
  const walk = (r) => { for (const h of r.querySelectorAll("*")) if (h.shadowRoot) { roots.push(h.shadowRoot); walk(h.shadowRoot); } };
  walk(document);
  for (const root of roots) for (const sel of REJECT) { const b = root.querySelector(sel); if (b && b.getClientRects().length) { b.click(); return sel; } }
  const WORDS = /^(reject all|reject|decline all|only necessary|necessary only|use necessary only|essential only|only essential|alle ablehnen|ablehnen|nur erforderliche( verwenden)?|nur notwendige|tout refuser|refuser|continuer sans accepter|rechazar todo|rifiuta tutto|avvisa alla|neka alla|endast nödvändiga cookies|endast nödvändiga|reject non-essential|refuse|deny all|deny|alles weigeren|weigeren|weiger|alleen noodzakelijke cookies|alleen noodzakelijk|weiger alle|拒否する|すべて拒否|모두 거부|거부|필수(만| 항목만| 쿠키만) (허용|동의)(하기)?)$/i;
  for (const root of roots) for (const b of root.querySelectorAll("button, [role=button], a")) {
    if (b.getClientRects().length && WORDS.test((b.textContent || "").trim())) { b.click(); return "text:" + b.textContent.trim(); }
  }
  return null;
}

// ───────────────────────────── diffing (Node side) ─────────────────────────────
function diffSnap(a, b) {
  const out = [];
  const cmp = (prop, x, y) => { if (x !== y) out.push({ prop, from: x, to: y }); };
  for (const p of ["bg", "fg", "border", "radius", "shadow", "outline", "transform", "opacity", "filter", "bgImage", "deco", "before", "after", "size", "padding", "font"]) cmp(p, a[p], b[p]);
  for (const p of ["fg", "font", "deco", "op", "tf"]) cmp(`label.${p}`, a.label?.[p], b.label?.[p]);
  for (let j = 0; j < Math.max(a.kids.length, b.kids.length); j++) {
    const x = a.kids[j], y = b.kids[j];
    if (!x || !y) { out.push({ prop: `kids[${j}]`, from: x?.k ?? "absent", to: y?.k ?? "absent" }); continue; }
    for (const p of ["fg", "bg", "op", "tf", "filter", "deco", "fill", "img", "pseudo", "w"]) cmp(`${y.k}.${p}`, x[p], y[p]);
  }
  for (let j = 0; j < Math.min(a.ups.length, b.ups.length); j++) {
    for (const p of ["bg", "border", "shadow", "outline", "tf", "op", "filter", "img", "pseudo"]) cmp(`up${j + 1}.${p}`, a.ups[j][p], b.ups[j][p]);
  }
  return out;
}
const stateDiff = (rest, s) => {
  const unstable = s.unstable ?? [];
  return { changed: diffSnap(rest, s).filter((x) => !unstable.includes(x.prop)), ...(unstable.length ? { unstableProps: unstable } : {}) };
};

// ───────────────────────────── main ─────────────────────────────
let page = null;
const C = [];   // resolved controls

async function snapOf(c) {
  const read = () => page.evaluate(([i, u]) => window.__omdKb.snap(i, u), [c.i, c.up]).catch(() => null);
  let s = await read();
  if (!s) { await page.evaluate(([i, f]) => window.__omdKb.tag(i, f), [c.i, c.find]).catch(() => {}); s = await read(); }   // the site re-rendered: find it again once
  return s;
}
// Two reads 200ms apart; if they differ, a third after 600ms. Whatever still moves is reported as unstable, not as a state change.
async function readStable(c) {
  const a = await snapOf(c);
  if (!a) return null;
  await sleep(200);
  const b = (await snapOf(c)) ?? a;
  if (!diffSnap(a, b).length) return b;
  await sleep(600);
  const d = (await snapOf(c)) ?? b;
  d.unstable = [...new Set(diffSnap(b, d).map((x) => x.prop))];
  return d;
}
async function quiesce(cs) {
  const t0 = Date.now();
  while (Date.now() - t0 < 3000) {
    let busy = 0;
    for (const c of cs) if (c) busy += await page.evaluate((i) => window.__omdKb.busy(i), c.i).catch(() => 0);
    if (!busy) return;
    await sleep(150);
  }
}

async function loadWithRetries() {
  const attempts = [];
  const blockRe = /access denied|forbidden|just a moment|attention required|captcha|are you (a )?robot|unusual traffic|request blocked|request unsuccessful|비정상적인 접근|접근이 거부|접근 제한/i;
  for (let n = 0; n <= RETRIES; n++) {
    if (n > 0) { result.notes.push(`retry ${n}/${RETRIES} after ${RETRY_WAIT}ms`); await sleep(RETRY_WAIT); }
    const context = await browser.newContext(CONTEXT);
    await context.addInitScript(inPage);
    const pg = await context.newPage();
    result.boot.loads++;
    let resp = null, gotoError = null;
    try { resp = await pg.goto(url, { waitUntil: "load", timeout: 45000 }); } catch (e) { gotoError = String(e.message || e).split("\n")[0].slice(0, 140); }
    await sleep(WAIT);
    const info = await pg.evaluate(() => ({ title: document.title, lang: document.documentElement.lang, href: location.href, text: (document.body?.innerText || "").slice(0, 400), len: (document.body?.innerText || "").length })).catch(() => null);
    const status = resp ? resp.status() : null;
    const chain = [];
    for (let r = resp?.request().redirectedFrom(); r; r = r.redirectedFrom()) chain.unshift(r.url());
    const blocked = !info || (status !== null && status >= 400) || blockRe.test(info.title) || (info.len < 800 && blockRe.test(info.text));
    attempts.push({ status, title: info?.title ?? null, gotoError, blocked });
    if (!blocked) {
      Object.assign(result.boot, { status, finalUrl: info.href, title: info.title, htmlLang: info.lang, contentLanguage: resp?.headers()["content-language"] ?? null, redirectChain: chain, attempts });
      context.on("page", (p) => { if (p !== pg) { result.notes.push(`extra page opened: ${p.url()}`); p.close().catch(() => {}); } });
      return pg;
    }
    await raceClose(context.close());
  }
  const last = attempts[attempts.length - 1];
  result.boot.block = { status: last.status, title: last.title, attempts };
  await emitAndExit(4);
}

async function park(c) {
  for (const [x, y] of [[3, 500], [1436, 500], [720, 998]]) {
    await page.mouse.move(x, y);
    await sleep(80);
    const h = await page.evaluate((i) => { const el = window.__omdKb.get(i); return el ? el.matches(":hover") : false; }, c.i).catch(() => false);
    if (!h) return true;
  }
  return false;
}

function finishFocus(c) {
  const R = result.controls[c.key], F = R.focus;
  // `changed` is measured against the PRISTINE page-top rest. The rest re-read after focus moved on is a second reading, not the
  // baseline: some sites leave a control in its focused look after blur (Kakao "소개" stays #f3f3f3, Samsung's GNB stays blue), and
  // using that read as the baseline hid the focus effect on 2026-09-29.
  F.baseline = "page-top rest read before any interaction";
  Object.assign(F, stateDiff(R.rest, F.snap));
  if (F.restAfterBlur) {
    F.changedVsAfterBlur = diffSnap(F.restAfterBlur, F.snap).filter((x) => !(F.snap.unstable ?? []).includes(x.prop));
    F.persistsAfterBlur = diffSnap(R.rest, F.restAfterBlur);   // what did not return to page-top rest once focus moved on
  }
  F.indication = { browserDefaultRing: F.snap.outline !== "none" && F.snap.outlineStyle === "auto", authoredOutline: F.snap.outline !== "none" && F.snap.outlineStyle !== "auto", changedProps: F.changed.map((x) => x.prop) };
}

async function keyboardPhase() {
  const rec = (c) => result.controls[c.key];
  const reachable = [];
  for (const c of C.filter((x) => x.found)) {
    if (c.identity.disabled) rec(c).focus = { measured: false, unmeasured: "control is disabled" };
    else if (c.identity.tabIndex < 0) rec(c).focus = { measured: false, unmeasured: `not in the Tab order (tabIndex=${c.identity.tabIndex}); roving-tabindex widgets are reached with arrow keys, which would change the selection, so not tried` };
    else reachable.push(c);
  }
  if (!reachable.length) return;
  const init = await page.evaluate(() => window.__omdKb.active());
  result.initialActive = init.desc;
  if (!init.isBody) await page.evaluate(() => window.__omdKb.resetFocusToStart());
  await page.evaluate(() => window.__omdKb.seen.clear());
  const pending = new Set(reachable.map((c) => c.i));
  let prevC = null, bodyRun = 0, presses = 0, wrapped = false;
  while (presses < MAX_TABS) {
    await page.keyboard.press("Tab");
    presses++;
    const info = await page.evaluate(() => window.__omdKb.active());
    const hitC = info.repeat ? null : reachable.find((c) => info.idxs.includes(c.i) && pending.has(c.i)) ?? null;
    result.walk.push(`${presses}: ${info.desc}${hitC ? ` <== ${hitC.key}` : ""}`);
    if (prevC || hitC) {
      await sleep(SETTLE_MIN);
      await quiesce([prevC, hitC]);
      if (prevC) { rec(prevC).focus.restAfterBlur = await readStable(prevC); if (rec(prevC).focus.restAfterBlur) finishFocus(prevC); prevC = null; }
      if (hitC) {
        const snap = await readStable(hitC);
        pending.delete(hitC.i);
        if (!snap) rec(hitC).focus = { measured: false, unmeasured: `reached at Tab #${presses} but the element vanished before it could be read` };
        else if (!snap.is.focusVisible) rec(hitC).focus = { measured: false, unmeasured: `reached at Tab #${presses} but :focus-visible did not match`, is: snap.is };
        else { rec(hitC).focus = { measured: true, tabPress: presses, is: snap.is, snap }; prevC = hitC; }
      }
    }
    if (info.repeat && !info.isFrame) { wrapped = true; break; }   // the same frame again is only Tab moving inside it
    bodyRun = info.isBody ? bodyRun + 1 : 0;
    if (bodyRun >= 2) break;
    if (!pending.size && !prevC) break;
  }
  if (prevC) {   // the last target: no later Tab moved the focus on, so blur it explicitly
    await page.evaluate(() => { const a = document.activeElement; if (a && a.blur) a.blur(); });
    await sleep(SETTLE_MIN);
    await quiesce([prevC]);
    rec(prevC).focus.restAfterBlur = await readStable(prevC);
    finishFocus(prevC);
  }
  for (const c of reachable) {
    if (!rec(c).focus) rec(c).focus = { measured: false, unmeasured: `not reached within ${presses} Tab presses (${wrapped ? "the walk wrapped back to an element already visited" : bodyRun >= 2 ? "focus left the document" : `cap --max-tabs ${MAX_TABS}`})` };
  }
  result.tabsPressed = presses;
  result.wrapped = wrapped;
  await page.evaluate(() => { const a = document.activeElement; if (a && a.blur) a.blur(); scrollTo(0, 0); }).catch(() => {});
}

async function mousePhase() {
  const baseUrl = page.url();
  await page.evaluate(() => { const a = document.activeElement; if (a && a.blur) a.blur(); scrollTo(0, 0); }).catch(() => {});
  const order = C.filter((c) => c.found).sort((a, b) => Number(a.inputLike) - Number(b.inputLike));   // inputs last: focusing one opens layers
  for (const c of order) {
    const R = result.controls[c.key];
    const fail = (why) => { R.hover ??= { measured: false, unmeasured: why }; R.pressed ??= { measured: false, unmeasured: why }; };
    let isDown = false, hidden = [];
    try {
      const h0 = await page.evaluate((i) => window.__omdKb.hit(i), c.i);     // also scrolls the control to the middle of the viewport
      if (!h0) { fail("control vanished from the DOM"); continue; }
      await sleep(450);
      await park(c);
      await sleep(SETTLE_MIN);
      const rest = await readStable(c);
      if (!rest) { fail("control vanished from the DOM"); continue; }
      R.restParked = rest;                                                    // baseline for hover/pressed: same scroll position, pointer away
      if (rest.is.hover) (R.notes ??= []).push("the parked pointer still matched :hover at rest (no free parking spot)");
      let hit = await page.evaluate((i) => window.__omdKb.hit(i), c.i);
      if (hit.x == null && g["hide-overlays"]) {
        hidden = await page.evaluate((i) => window.__omdKb.hideOverlays(i), c.i);
        await sleep(300);
        hit = await page.evaluate((i) => window.__omdKb.hit(i), c.i);
      }
      if (hit.x == null) { fail(`pointer target covered by ${hit.cover}${g["hide-overlays"] ? " (still covered after --hide-overlays)" : "; re-run with --hide-overlays to hide fixed/sticky overlays for this control, and say so in the report"}`); continue; }
      await page.mouse.move(hit.x, hit.y, { steps: 6 });
      await sleep(SETTLE_MIN);
      await quiesce([c]);
      const hov = await readStable(c);
      if (!hov || !hov.is.hover) { fail(`:hover did not match after moving the pointer onto it (elementFromPoint = ${hit.hitEl})`); continue; }
      R.hover = { measured: true, hitEl: hit.hitEl, snap: hov, ...stateDiff(rest, hov), ...(hidden.length ? { overlaysHiddenForThisControl: hidden } : {}) };
      await page.mouse.down();
      isDown = true;
      await sleep(SETTLE_MIN);
      await quiesce([c]);
      const prs = await readStable(c);
      if (!prs || !prs.is.active) R.pressed = { measured: false, unmeasured: ":active did not match while the mouse button was down", is: prs?.is };
      else R.pressed = { measured: true, hitEl: hit.hitEl, snap: prs, ...stateDiff(rest, prs), changedVsHover: diffSnap(hov, prs).filter((x) => !(prs.unstable ?? []).includes(x.prop)), ...(hidden.length ? { overlaysHiddenForThisControl: hidden } : {}) };
    } catch (e) {
      fail(`error: ${String(e.message || e).split("\n")[0].slice(0, 120)}`);
    } finally {
      if (isDown) {   // release in place, with the release swallowed so nothing is activated
        await page.evaluate(() => { window.__omdKbBlock = true; }).catch(() => {});
        await page.mouse.up().catch(() => {});
        await sleep(150);
        await page.evaluate(() => { window.__omdKbBlock = false; }).catch(() => {});
      }
      if (hidden.length) await page.evaluate(() => window.__omdKb.restoreOverlays()).catch(() => {});
      await page.evaluate(() => { const a = document.activeElement; if (a && a.blur) a.blur(); }).catch(() => {});
      if (c.inputLike) await page.keyboard.press("Escape").catch(() => {});
      if (page.url() !== baseUrl) {
        result.notes.push(`${c.key}: the URL changed to ${page.url()} during the press; went back`);
        await page.goBack({ timeout: 15000 }).catch(() => {});
        await sleep(Math.min(WAIT, 3000));
        for (const k of C) if (k.found) await page.evaluate(([i, f]) => window.__omdKb.tag(i, f), [k.i, k.find]).catch(() => {});
      }
      await page.mouse.move(3, 500).catch(() => {});
    }
  }
}

const hexOf = (c) => {
  const m = String(c).match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
  if (!m) return String(c);
  if (m[4] !== undefined && Number(m[4]) === 0) return "-";
  const h = "#" + [m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join("");
  return m[4] !== undefined && Number(m[4]) < 1 ? `${h}@${m[4]}` : h;
};

async function main() {
  browser = await chromium.launch({ headless: true, ...(process.env.OMD_CHROME_PATH ? { executablePath: process.env.OMD_CHROME_PATH } : { channel: "chrome" }), args: ["--disable-blink-features=AutomationControlled"] });
  page = await loadWithRetries();
  const consent = await page.evaluate(consentFn).catch(() => null);
  if (consent) { await sleep(1500); await page.waitForLoadState("load").catch(() => {}); await sleep(Math.min(WAIT, 4000)); }
  result.boot.consent = { rejectedVia: consent, fixedElementsAfter: await page.evaluate(() => window.__omdKb?.fixedInventory?.() ?? []).catch(() => []) };

  if (g.survey) {
    const s = await page.evaluate(([lim, mh]) => window.__omdKb.survey(lim, mh), [Number(g["survey-limit"] ?? 400), 8]);
    result.rows = s.rows;
    result.fixed = s.fixed;
    const line = (r, n) => `${String(n).padStart(3)} ${(r.tag + (r.role ? "/" + r.role : "")).padEnd(14)} ${r.landmark.padEnd(6)} ${String(r.x).padStart(4)},${String(r.y).padEnd(5)} ${(r.w + "x" + r.h).padEnd(11)} bg=${hexOf(r.bg).padEnd(9)} fg=${hexOf(r.fg).padEnd(9)} r=${r.radius.slice(0, 12).padEnd(12)} ${r.font.padEnd(10)} ${(r.text || r.aria || r.ph || "").slice(0, 34).padEnd(34)} ${(r.href || "").slice(0, 40)}${r.cls ? " ." + r.cls.slice(0, 26) : ""}`;
    const idx = new Map(s.rows.map((r, n) => [r, n]));
    const like = s.rows.filter((r) => r.buttonLike).slice(0, 110);
    const plain = s.rows.filter((r) => !r.buttonLike && r.y < 3200).slice(0, 60);
    TABLE = [`# survey ${url} -> ${result.boot.finalUrl} status=${result.boot.status} lang=${result.boot.htmlLang} title=${JSON.stringify(result.boot.title)} redirects=${JSON.stringify(result.boot.redirectChain)} rows=${s.rows.length}`, `# fixed/sticky: ${JSON.stringify(s.fixed)}`, `# button-like (${like.length}):`, ...like.map((r) => line(r, idx.get(r))), `# plain links/other, first ${plain.length} above y=3200:`, ...plain.map((r) => line(r, idx.get(r)))].join("\n") + "\n";
    await emitAndExit(0);
    return;
  }

  // Tag every control, then read identity + page-top rest.
  for (const spec of controls) {
    const R = (result.controls[spec.key] = { label: spec.label ?? null, declared: spec.declared ?? null, find: spec.find });
    const r = await page.evaluate(([i, f]) => window.__omdKb.tag(i, f), [spec.i, spec.find]);
    Object.assign(R, { found: r.found, candidates: r.candidates, ...(r.error ? { findError: r.error } : {}) });
    if (!r.found) {
      const why = r.error ? `bad selector: ${r.error}` : `control not found on this load (matches=${r.candidates})`;
      for (const s of ["hover", "pressed", "focus"]) R[s] = { measured: false, unmeasured: why };
      continue;
    }
    const c = { ...spec, found: true };
    c.identity = await page.evaluate((i) => window.__omdKb.identity(i), c.i);
    c.inputLike = /^(input|select|textarea)$/.test(c.identity.tag) || /^(combobox|searchbox|textbox)$/.test(c.identity.role ?? "");
    c.up = spec.up != null && Number.isFinite(Number(spec.up)) ? Number(spec.up) : g.up ? Number(g.up) : c.inputLike ? 3 : 2;
    R.identity = c.identity;
    C.push(c);
  }
  for (const c of C) result.controls[c.key].rest = await readStable(c);
  if (!g["no-focus"]) await keyboardPhase();
  if (!g["no-mouse"]) await mousePhase();
  await emitAndExit(0);
}
main().catch(async (e) => { result.error = String(e?.stack ?? e).split("\n").slice(0, 4).join(" | "); await emitAndExit(1); });
