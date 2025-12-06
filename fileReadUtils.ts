import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

export function readInputLines(importMetaUrl: string, isTest?: boolean): string[] {
  const filePath = fileURLToPath(importMetaUrl);
  const dir = dirname(filePath);
  const input = readFileSync(join(dir, isTest ? "input_test.txt": "input.txt"), "utf-8");
  return input.trim().split("\n");
}
