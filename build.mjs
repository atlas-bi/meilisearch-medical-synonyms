import fs from "fs";

const loadSource = async () => {
  const text = fs.readFileSync("./synonyms.txt").toString();

  let out = {};

  text
    .replace(/\#.*?$/gm, "") // remove comments
    .split(/\r?\n/)
    .filter((line) => line)
    .forEach((line) => {
      const words = line.split(",");
      words.forEach((word) => {
        out[word] = [...words.filter((x) => x != word).map((x) => x.trim())];
      });
    });

  const content = `export const medicalSynonyms = ${JSON.stringify(out)}`;

  fs.mkdirSync("src", { recursive: true });
  fs.writeFile("src/index.ts", content, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

loadSource();
