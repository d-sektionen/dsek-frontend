import { apiFetch } from "../../util/api";
import { Utskott } from "../../util/strapi";
import style from "./page.module.css";
import Link from "next/link";

export default async function UtskottPage() {
  const { data: utskott } = await apiFetch<Utskott[]>("/utskotts");

  return (
    <div>
      <div className={style.header}>
        <h1>Utskott på D-Sektionen</h1>
        <hr />
      </div>
      <ul>
        {utskott?.map(({ id, attributes }) => (
          <li className={style.utskott} key={id}>
            <h2>{attributes.title}</h2>
            <p>{attributes.summary}</p>
            <Link href={`/utskott/${attributes.slug}`}>Läs mer</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
