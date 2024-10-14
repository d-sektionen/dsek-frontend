import { remark } from "remark";
import html from "remark-html";

export function renderMarkdown(markdown: string) {
  return remark().use(html).processSync(markdown).toString();
}

export function trimLeft(value: string, char: string, n: number = 999) {
  for (let i = 0; i < n; i++) {
    if (!value.startsWith(char)) break;
    value = value.slice(1);
  }
  return value;
}
