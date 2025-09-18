import { strapiFetch } from "../../util/strapi";
import { Utskott } from "../../util/strapi";
import style from "./page.module.css";
import Link from "next/link";

export default async function UtskottPage() {
  const { data: utskott } = await strapiFetch<Utskott[]>("/utskotts");

  return (
    <div>
      <div className={style.header}>
        <h1>Utskott på D-Sektionen</h1>
        <hr />
      </div>
      <ul>
        {utskott?.map(({ documentId, title, summary, slug }) => (
          <li key={documentId} className={style.utskott}>
            <h2>{title}</h2>
            <p>{summary}</p>
            <Link href={`/utskott/${slug}`}>Läs mer</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
