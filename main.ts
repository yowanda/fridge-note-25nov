// Notes From a Passive-Aggressive Fridge — make.fun entry.
//
// Writes one original passive-aggressive note from a smart fridge to its
// owner, deterministically, to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output
// when the variable is unset). No network, no randomness, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NOTE =
  "I counted the door openings today: 47. The leftovers have filed a formal complaint, and frankly, I agree with them.";

// Runtime validation: the gate requires UTF-8 text of 1-200 characters,
// not only whitespace. Fail loudly instead of writing an invalid entry.
const noteBytes = Buffer.from(NOTE, "utf8");
if (NOTE.length < 1 || NOTE.length > 200 || NOTE.trim().length === 0) {
  throw new Error(
    `Invalid note: ${NOTE.length} chars, must be 1-200 and not only whitespace`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Deterministic byte write: the exact UTF-8 bytes of NOTE, no newline.
writeFileSync(join(outDir, "entry.txt"), noteBytes);
