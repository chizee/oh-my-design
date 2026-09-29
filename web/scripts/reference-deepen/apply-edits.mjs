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
  const re = /^@@@OLD\n([\s\S]*?)\n@@@NEW\n([\s\S]*?)\n@@@END$/gm;
  let m;
  while ((m = re.exec(body))) edits.push([m[1], m[2]]);
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
