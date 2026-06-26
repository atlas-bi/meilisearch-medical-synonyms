import { execFileSync } from "node:child_process";
import fs from "node:fs";

const loadSource = async () => {
  const text = fs.readFileSync("./synonyms.txt", "utf8");
  const out = {};

  text
    .replace(/#.*?$/gm, "")
    .split(/\r?\n/)
    .filter((line) => line)
    .forEach((line) => {
      const words = line.split(",");
      words.forEach((word) => {
        out[word] = words.filter((x) => x !== word).map((x) => x.trim());
      });
    });

  const content = `export const medicalSynonyms = ${JSON.stringify(out, null, 2)};\n`;

  fs.mkdirSync("src", { recursive: true });
  fs.writeFileSync("src/index.ts", content);
  execFileSync("npx", ["biome", "format", "--write", "src/index.ts"], { stdio: "inherit" });
};

loadSource();
