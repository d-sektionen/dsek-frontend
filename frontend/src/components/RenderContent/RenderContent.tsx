import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import style from "./RenderContent.module.css";
import clsx from "clsx";

type RenderContentProps = {
  blocks?: BlocksContent;
  html?: string;
};

export function RenderContent({ blocks, html }: RenderContentProps) {
  return (
    <div className={clsx(style.content)}>
      {blocks && <BlocksRenderer content={blocks} />}
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </div>
  );
}
