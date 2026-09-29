import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire('/Users/kwakseongjae/Desktop/projects/oh-my-design/web/package.json');
const yaml = require('js-yaml');
const { collectCanonicalClaimPaths } = await import('/Users/kwakseongjae/Desktop/projects/oh-my-design/web/scripts/lib/reference-quality.mjs');
for (const id of process.argv.slice(2)) {
  const md = fs.readFileSync(`/Users/kwakseongjae/Desktop/projects/oh-my-design/web/references/${id}/DESIGN.md`, 'utf8');
  const fm = yaml.load(md.split('\n---\n')[0].replace(/^---\n/, ''));
  const tokens = fm.tokens; const claims = fm.verification_v2?.claims ?? {};
  const need = collectCanonicalClaimPaths(tokens);
  const missing = need.filter(p => !claims[p]);
  const orphan = Object.keys(claims).filter(p => !need.includes(p));
  const bad = Object.entries(claims).filter(([p,c]) => !fm.verification_v2.surfaces.some(s=>s.id===c.surface_id) || !fm.verification_v2.sources.some(s=>s.id===c.source_id)).map(([p])=>p);
  const body = md.replace(/\ntokens:\n(?:[ \t].*(?:\n|$))*/, "\n").toLowerCase();
  const ungrounded = [];
  for (const [n,c] of Object.entries(tokens.components)) for (const k of ['bg','fg','border']) for (const h of String(c[k]??'').match(/#[0-9a-fA-F]{6}/g)??[]) if(!body.includes(h.toLowerCase())) ungrounded.push(`${n}.${k} ${h}`);
  console.log(id, '| components', Object.keys(tokens.components).length, '| leaves', need.length, '| claims', Object.keys(claims).length, '| missing', JSON.stringify(missing), '| orphan', orphan.length, '| bad refs', JSON.stringify(bad), '| ungrounded (before prose)', JSON.stringify(ungrounded));
  console.log('  sample claim:', JSON.stringify(claims[`tokens.components.${Object.keys(tokens.components).at(-1)}.hover`] ?? claims[`tokens.components.${Object.keys(tokens.components)[3]}.hover`]));
}
