import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I accepted a calendar invite titled 'quick sync' at 4:55 on a Friday, which is how I learned the word 'quick' is just a meeting's way of lying to you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
