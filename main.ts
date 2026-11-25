// Entry for the make.fun bounty "The Excuse That Almost Works".
// Writes a single line of plain text: the excuse a gamer texts their
// boss to skip work during GTA 6 launch week.
//
// The line is deliberately boring: a gas engineer coming to read the
// meter, with a named 8-to-1 window and a named reason someone has to
// be home. The joke lives inside the excuse's own logic — a job that
// takes five minutes somehow eats the whole morning — and the manager
// can't quite disprove it. No dead relatives, no flat tyres, no fevers.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Gas engineer coming to read the meter between 8 and 1, someone has to be home.";

// Guards required by the bounty: 1-140 characters, at most 20 words,
// a single line, valid UTF-8, and not only whitespace.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}

if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const words = LINE.trim().split(/\s+/).filter(Boolean);
if (words.length > 20) {
  throw new Error(`entry must be at most 20 words, got ${words.length}`);
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

if (Buffer.from(LINE, "utf8").toString("utf8") !== LINE) {
  throw new Error("entry must be valid UTF-8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// No trailing newline: the file is exactly the line, nothing else.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
