// Notes From a Passive-Aggressive Fridge — make.fun entry.
//
// Writes one original passive-aggressive note from a smart fridge to its
// owner, deterministically, to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output
// when the variable is unset). No network, no randomness, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NOTE =
  "I counted the door openings today: 47. The leftovers have filed a formal complaint, and frankly, I agree with them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), NOTE, "utf8");
