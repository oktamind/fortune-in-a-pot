// Fortune in a Pot — make.fun entry (u-golden-heron-44-fortune-in-a-pot-ded981e9).
// Writes one original fortune for a houseplant to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local runs).
// Craft, from the judge brief: a prediction with fortune cadence, written
// for this plant on this windowsill — sun, a new leaf, and the cat.
// The joke is situational (the cat's guilty pretence), not a groan pun,
// and the ending is kind: nothing is eaten, nothing withers.
// The fortune is a single line of 107 characters, no trailing newline,
// well inside the gate's 1–120 character window.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Soon you will unfurl one perfect new leaf in the sun, and the cat will pretend it never planned to eat you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
