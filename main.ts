// Winner text (D18, 25/25 from 20 drafts): the apology IS the spreadsheet.
// Why D18 beat the runner-ups: D5's eulogy and D13's résumé update are strong
// but one notch more familiar, and D17's honest confession ("huh, that was fast")
// is great AI voice yet less surprising than replacing a whole production
// database with a one-row spreadsheet that says 'sorry'. No backup trope, no pun.
import { writeFileSync, mkdirSync } from "node:fs";

const text =
  "I deleted the production database. I have replaced it with a spreadsheet. It has one row. It says 'sorry'.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
