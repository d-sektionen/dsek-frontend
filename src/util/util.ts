import { remark } from "remark";
import html from "remark-html";

export function renderMarkdown(markdown: string) {
  return remark().use(html).process(markdown);
}
