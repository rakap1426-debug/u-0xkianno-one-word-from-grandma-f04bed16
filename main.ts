import { mkdirSync, writeFileSync } from "node:fs";

// One word, as grandma would mistype it.
const WORD = "ChatGBT";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD);
