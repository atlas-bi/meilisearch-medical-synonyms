import fs from "node:fs";

const loadSource = () => {
  const text = fs.readFileSync("./synonyms.txt").toString();

  const out = {};

  text
    .replace(/#.*?$/gm, "") // remove comments
    .split(/\r?\n/)
    .filter((line) => line)
    .forEach((line) => {
      const words = line.split(",");
      words.forEach((word) => {
        const synonyms = words.filter((x) => x !== word).map((x) => x.trim());
        out[word.trim()] = [...synonyms];
      });
    });

  const json = JSON.stringify(out);

  fs.mkdirSync("build", { recursive: true });
  fs.writeFileSync("build/index.js", `exports.medicalSynonyms = ${json};\n`);
  fs.writeFileSync("build/index.es.mjs", `export const medicalSynonyms = ${json};\n`);
  fs.writeFileSync(
    "build/index.d.ts",
    "export declare const medicalSynonyms: Record<string, string[]>;\n",
  );
};

loadSource();
