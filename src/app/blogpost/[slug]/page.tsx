import { apiFetchOne, apiUrl } from "@/util/api";
import type { Blogpost } from "@/util/strapi";
import { renderMarkdown } from "@/util/util";

export default async function BlogpostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await apiFetchOne<Blogpost>("blogposts", {
    filters: { slug: params.slug },
  });

  if (post == null) {
    return "Loading...";
  }

  const { title, content, preview_content, thumbnail } = post.attributes;

  return (
    <>
      <h1>{title}</h1>
      {thumbnail && <img src={thumbnail.data.attributes.url} />}
      <div dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
    </>
  );
}
