// Applies @@@FILE / @@@OLD / @@@NEW / @@@END blocks. Every OLD must match exactly once.
// @@@OLD with the single line APPEND appends NEW at the end of the file.
import fs from 'node:fs';
const src = fs.readFileSync(process.argv[2], 'utf8');
const write = process.argv[3] === '--write';
const files = new Map();
let cur = null;
for (const block of src.split(/^@@@FILE /m).slice(1)) {
  const nl = block.indexOf('\n');
  const file = block.slice(0, nl).trim();
  const body = block.slice(nl + 1);
  const edits = [];
  // Each marker must sit on its own line. NEW may be empty: the old pattern needed a newline before
  // @@@END, so an empty NEW swallowed the next block (lotteon, 2026-09-30).
  const re = /^@@@OLD\n([\s\S]*?)^@@@NEW\n([\s\S]*?)^@@@END$/gm;
  const strip = (s) => s.replace(/\n$/, '');
  let m;
  while ((m = re.exec(body))) edits.push([strip(m[1]), strip(m[2])]);
  const declared = (body.match(/^@@@OLD$/gm) || []).length;
  if (declared !== edits.length) { console.log(`FAIL ${file}: ${declared} @@@OLD markers but ${edits.length} complete blocks`); process.exit(1); }
  for (const [o, n] of edits) if (/^@@@/m.test(o) || /^@@@/m.test(n)) { console.log(`FAIL ${file}: a marker inside a block body`); process.exit(1); }
  files.set(file, edits);
}
let failed = false;
for (const [file, edits] of files) {
  let text = fs.readFileSync(file, 'utf8');
  for (const [oldS, newS] of edits) {
    if (oldS === 'APPEND') { text = text.replace(/\n*$/, '\n') + '\n' + newS + '\n'; continue; }
    const n = text.split(oldS).length - 1;
    if (n !== 1) { console.log(`FAIL ${file}: ${n} matches for: ${oldS.slice(0, 90)}`); failed = true; continue; }
    text = text.replace(oldS, () => newS);
  }
  console.log(`${file}: ${edits.length} edits`);
  if (write && !failed) fs.writeFileSync(file, text);
}
if (failed) { console.log('NOT WRITTEN'); process.exit(1); }
console.log(write ? 'written' : 'dry run ok');
