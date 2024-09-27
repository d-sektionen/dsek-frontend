import { apiFetch, apiUrl, Blogpost } from "@/util/api";

export default async function BlogpostPage() {
  const posts = await apiFetch<Blogpost[]>("blogposts", { populate: "*" });

  return (
    <>
      <h1>Cool blogg</h1>
      {posts?.map(({ attributes: { title, thumbnail, content } }) => (
        <div>
          <h2>{title}</h2>
          <img src={apiUrl(thumbnail.data.attributes.url).href} />
          <div>{content}</div>
        </div>
      ))}
    </>
  );
}
