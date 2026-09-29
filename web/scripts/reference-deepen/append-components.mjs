// In-place appender: adds tokens.components entries + one verification_v2 claim per leaf.
// Keeps every existing line; refuses to overwrite an existing component name.
// usage: node append-components.mjs <spec.mjs> [--write]
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [specPath, flag] = process.argv.slice(2);
const spec = (await import(pathToFileURL(path.resolve(specPath)).href)).default;
const file = `/Users/kwakseongjae/Desktop/projects/oh-my-design/web/references/${spec.id}/DESIGN.md`;
let md = fs.readFileSync(file, 'utf8');
const lines = md.split('\n');
const fmEnd = lines.indexOf('---', 1);

const ORDER = ['type','bg','fg','border','radius','padding','height','size','font','shadow','selected','checked','hover','pressed','focus','states','use'];
const q = (v) => JSON.stringify(String(v));
const claimObj = (c) => {
  const parts = [`surface_id: ${c.surface_id}`, `source_id: ${c.source_id}`, `method: ${c.method}`];
  if (c.selector) parts.push(`selector: ${q(c.selector)}`);
  parts.push(`captured: ${q(c.captured)}`);
  return `{ ${parts.join(', ')} }`;
};

const compLines = [], claimLines = [];
for (const [name, def] of Object.entries(spec.components)) {
  if (new RegExp(`^    ${name}: \\{`, 'm').test(md)) throw new Error(`component ${name} already exists`);
  const fields = Object.keys(def.fields);
  for (const k of fields) if (!ORDER.includes(k)) throw new Error(`${name}: unknown field ${k}`);
  const ordered = ORDER.filter((k) => k in def.fields);
  compLines.push(`    ${name}: { ${ordered.map((k) => k === 'type' ? `type: ${def.fields[k]}` : `${k}: ${q(def.fields[k])}`).join(', ')} }`);
  const base = { ...spec.claimDefaults, ...def.claim };
  let anchored = false;
  for (const k of ordered) {
    const path = `"tokens.components.${name}.${k}"`;
    const ov = def.overrides?.[k];
    if (ov) { claimLines.push(`    ${path}: ${claimObj({ ...base, ...ov })}`); continue; }
    if (spec.anchors) {
      if (!anchored) { claimLines.push(`    ${path}: &${def.anchor} ${claimObj(base)}`); anchored = true; }
      else claimLines.push(`    ${path}: *${def.anchor}`);
    } else claimLines.push(`    ${path}: ${claimObj(base)}`);
  }
}

// insert components after the last `    <name>: {` line inside tokens.components
const compStart = lines.findIndex((l, i) => i < fmEnd && l === '  components:');
let lastComp = compStart;
for (let i = compStart + 1; i < fmEnd && /^    [a-z0-9-]+: \{/.test(lines[i]); i++) lastComp = i;
// insert claims after the last `    "tokens....": ` line inside verification_v2.claims
let lastClaim = -1;
for (let i = 0; i < fmEnd; i++) if (/^    "tokens\.[^"]+": /.test(lines[i])) lastClaim = i;
if (compStart < 0 || lastClaim < 0) throw new Error('anchors not found');

const out = [...lines];
// splice the later index first so the earlier index stays valid
const ops = [[lastComp, compLines], [lastClaim, claimLines]].sort((a, b) => b[0] - a[0]);
for (const [idx, add] of ops) out.splice(idx + 1, 0, ...add);
console.log(`${spec.id}: +${compLines.length} components, +${claimLines.length} claims (components after line ${lastComp + 1}, claims after line ${lastClaim + 1})`);
if (flag === '--write') { fs.writeFileSync(file, out.join('\n')); console.log('written'); }
else console.log(compLines.join('\n'));
