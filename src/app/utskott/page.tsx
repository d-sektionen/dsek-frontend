import { apiFetch } from "@/util/api";
import { Utskott } from "@/util/strapi";

export default async function UtskottPage() {
  const { data: utskott } = await apiFetch<Utskott[]>("/utskotts");

  return (
    <div>
      <h1>Utskott</h1>
      <ul>
        {utskott?.map(({ id, attributes }) => (
          <li key={id}>
            <h2>{attributes.title}</h2>
            <p>{attributes.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
