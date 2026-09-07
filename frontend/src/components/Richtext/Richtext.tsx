import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from "./Richtext.module.css";
import clsx from "clsx";

type RichtextProps = {
  content: BlocksContent;
  className?: string;
};

export function Richtext({ content, className }: RichtextProps) {
  if (!content) return null;
  return (
    <div className={clsx(style.richtext, className)}>
      <BlocksRenderer content={content} />
    </div>
  );
}
