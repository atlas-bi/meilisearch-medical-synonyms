const fs = require("fs");

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

  const content = `module.exports.medicalSynonyms = ${JSON.stringify(out)}`;

  fs.writeFile("index.js", content, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

loadSource();
