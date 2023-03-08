# Meilisearch Name Synonyms

This is an importable list of nicknames to be used as a [meilisearch](https://docs.meilisearch.com/learn/getting_started/quick_start.html) [synonym list](https://docs.meilisearch.com/learn/configuration/synonyms.html#synonyms).

## Installing

```bash
npm i meilisearch-medical-synonyms
```

## Usage

Assuming you have a search index for people:

```js
import { MeiliSearch } from "meilisearch";
import { medicalSynonyms } from "meilisearch-medical-synonyms";

const client = new MeiliSearch({ host: "http://localhost:7700" });

const userIndex = client.index("reports");

await userIndex.updateSynonyms(medicalSynonyms);

/// or if you need to add in a few more
await userIndex.updateSynonyms({ ...medicalSynonyms, superman: ["wow"] });
```

## Sources

Synonyms are kept in `synonyms.txt` file as csv style, but with comment lines beginning with `# ...`.
