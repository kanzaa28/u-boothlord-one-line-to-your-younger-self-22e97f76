import { mkdirSync, writeFileSync } from "node:fs";

// One line to my younger self: the Agent404 auto-claim on 2026-11-06.
// The "free" mint's gas receipt said ~Rp5,367 for DN404 mirrors worth Rp0 —
// I blamed a BNB send for it first, then read the receipt and corrected myself.
// The lesson that stuck: read the receipt before calling anything free.
const LINE =
  "That free mint will cost Rp5,367 in gas for mirrors worth nothing — read the receipt before you call it free.";

mkdirSync("/output", { recursive: true });

// Enforce the sealed gate locally: 1–200 characters, not only whitespace.
// If the line ever drifts out of the gate, fail loudly instead of shipping
// an entry the scorer would list with Valid 0 and no rate.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 chars, got ${LINE.length}`);
}
writeFileSync("/output/entry.txt", LINE, "utf8");
