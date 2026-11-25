import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "Overconfident";
if (!/^[^\s\r\n]{1,30}$/u.test(text)) {
  throw new Error("Entry must be one word of 1 to 30 characters on one line");
}

const outputDirectory = new URL("/output/", import.meta.url);
const outputFile = new URL("entry.txt", outputDirectory);
const expected = Buffer.from(text + "\n", "utf8");
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, expected);
if (!readFileSync(outputFile).equals(expected)) {
  throw new Error("Written entry does not match expected bytes");
}
