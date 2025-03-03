import pg from "pg";
import dotenv from "dotenv";
import dayjs from "dayjs";
import { stripHtml } from "string-strip-html";

const testData = [
  {
    id: 16496,
    date: "2025-01-20T13:31:58",
    date_gmt: "2025-01-20T12:31:58",
    guid: { rendered: "https://d-sektionen.se/?p=16496" },
    modified: "2025-01-20T13:34:21",
    modified_gmt: "2025-01-20T12:34:21",
    slug: "vintermote-2025",
    status: "publish",
    type: "post",
    link: "https://d-sektionen.se/vintermote-2025/",
    title: { rendered: "Vinterm\u00f6te 2025" },
    content: {
      rendered:
        '\n<p>Vinterm\u00f6tet kommer att h\u00e5llas <strong>2:a februari</strong> 2025 klockan <strong>12:00</strong> i sal <strong>C4</strong>.</p>\n\n\n\n<figure class="wp-block-image size-full"><a href="https://d-sektionen.se/wp-content/uploads/2025/01/image.png"><img decoding="async" loading="lazy" width="1024" height="462" src="https://d-sektionen.se/wp-content/uploads/2025/01/image.png" alt="" class="wp-image-16499" srcset="https://d-sektionen.se/wp-content/uploads/2025/01/image.png 1024w, https://d-sektionen.se/wp-content/uploads/2025/01/image-300x135.png 300w, https://d-sektionen.se/wp-content/uploads/2025/01/image-768x347.png 768w" sizes="(max-width: 1024px) 100vw, 1024px" /></a></figure>\n\n\n\n<p>Hej D-student! H\u00e4r kommer information om sektionens vinterm\u00f6te att samlas. Ett sektionsm\u00f6te \u00e4r sektionens h\u00f6gst beslutande organ, och det \u00e4r sektionsm\u00f6ten som beslutar om till exempel sektionens budgetering, framtida arbetss\u00e4tt, stadgar, reglemente, med mera. F\u00f6r mer information om hur ett sektionsm\u00f6te fungerar finns en beskrivning av relevanta termer och processer p\u00e5&nbsp;<a href="https://d-sektionen.se/sektionsmote/">d-sektionen.se/sektionsmote</a>.</p>\n\n\n\n<p>Observera att mycket information kommer l\u00e4ggas till under de kommande veckorna, s\u00e5 denna sida kommer att uppdateras kontinuerligt.</p>\n\n\n\n<p>Styrelsen kommer bjuda p\u00e5 pizza i samband med sektionsm\u00f6tet, l\u00e4nk f\u00f6r anm\u00e4lan: <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-bgR10iJ7fNMRV4l5LkeMQ8UkgiA-GUKtohqSCM8JiueiWQ/viewform">https://docs.google.com/forms/d/e/1FAIpQLSf-bgR10iJ7fNMRV4l5LkeMQ8UkgiA-GUKtohqSCM8JiueiWQ/viewform</a></p>\n\n\n\n<p>Deadline f\u00f6r anm\u00e4lan \u00e4r 27 januari 2025.</p>\n\n\n\n<h2 class="wp-block-heading">Att motkandidera</h2>\n\n\n\n<p>Gl\u00f6m inte att du \u00e4r mer \u00e4n v\u00e4lkommen till att&nbsp;<em>motkandidera</em>&nbsp;till n\u00e5gon av de poster som ska v\u00e4ljas in p\u00e5 m\u00f6tet. Att motkandidera inneb\u00e4r att man, p\u00e5 m\u00f6tet, kan nominera sig sj\u00e4lv eller en annan till n\u00e5gon av posterna, utan att tidigare ha blivit nominerad av t.ex. valberedningen.&nbsp;Du kan \u00e4ven motkandidera genom att skicka ett mail till&nbsp;<a rel="noreferrer noopener" href="mailto:sekreterare@d-sektionen.se" target="_blank">sekreterare@d-sektionen.se</a>&nbsp;d\u00e4r du skriver lite kort om dig sj\u00e4lv samt vilken post du vill motkandidera till.</p>\n\n\n\n<h2 class="wp-block-heading">Att skicka in motioner</h2>\n\n\n\n<p>Gl\u00f6m dessutom inte att du \u00e4r mer \u00e4n v\u00e4lkommen att&nbsp;<em>skicka in motioner</em>. Detta g\u00f6rs enklast genom att skicka motionen via mail till&nbsp;<a rel="noreferrer noopener" href="mailto:sekreterare@d-sektionen.se" target="_blank">sekreterare@d-sektionen.se</a>. Motionsmall finns nedan under&nbsp;<em>Dokument</em>. Motioner m\u00e5ste skriftligen inkomma till sektionsstyrelsen senast sju l\u00e4sdagar innan sektionsm\u00f6tet (23 januari 2025).</p>\n\n\n\n<h2 class="wp-block-heading">Protokoll</h2>\n\n\n\n<p><em>Publiceras efter m\u00f6tet</em></p>\n\n\n\n<h2 class="wp-block-heading">F\u00f6redragningslista</h2>\n\n\n\n<p><a href="https://d-sektionen.se/wp-content/uploads/2025/01/Preliminar_foredragningslista_vintermote_2025.pdf" data-type="attachment" data-id="16487">Prelimin\u00e4r f\u00f6redragningslista</a></p>\n\n\n\n<h2 class="wp-block-heading">Nomineringar</h2>\n\n\n\n<p>Valberedningen har valt att nominera f\u00f6ljande: <em>Kommer inom kort</em></p>\n\n\n\n<ul>\n<li><strong>Sektionsordf\u00f6rande</strong>: </li>\n\n\n\n<li><strong>Sektionskass\u00f6r</strong>: </li>\n\n\n\n<li><strong>Vice ordf\u00f6rande</strong>: </li>\n\n\n\n<li><strong>Sekreterare</strong>: </li>\n\n\n\n<li><strong>Utbildningsutskottets ordf\u00f6rande</strong>: </li>\n\n\n\n<li><strong>Arbetsmilj\u00f6ombud</strong>: </li>\n\n\n\n<li><strong>Eventutskottets ordf\u00f6rande</strong>: </li>\n\n\n\n<li><strong>Styrelseledam\u00f6ter</strong>: </li>\n\n\n\n<li><strong>Jubileumsgeneral:</strong></li>\n\n\n\n<li><strong>Jubileumskass\u00f6r:</strong></li>\n\n\n\n<li><strong>Damf\u00f6reningens ordf\u00f6rande:</strong> </li>\n\n\n\n<li><strong>Damf\u00f6reningens kass\u00f6r:</strong> </li>\n\n\n\n<li><strong>Festeriets ordf\u00f6rande:</strong> </li>\n\n\n\n<li><strong>Festeriets kass\u00f6r:</strong></li>\n</ul>\n\n\n\n<h3 class="wp-block-heading">Motkandideringar</h3>\n\n\n\n<p><em>Inga inkomna</em></p>\n\n\n\n<h3 class="wp-block-heading">Presentation vid personval</h3>\n\n\n\n<p>D\u00e5 du kandiderar till en post ska du under m\u00f6tet presentera dig f\u00f6r m\u00f6tet genom att ber\u00e4tta lite om dig sj\u00e4lv och svara p\u00e5 eventuella fr\u00e5gor. F\u00f6r att ge en bild av vad presentationen inneb\u00e4r har styrelsen tagit fram n\u00e5gra punkter \u00f6ver vad du skulle kunna ber\u00e4tta om:</p>\n\n\n\n<ul>\n<li>Vem du \u00e4r</li>\n\n\n\n<li>Eventuella tidigare erfarenheter/engagemang utanf\u00f6r LiU</li>\n\n\n\n<li>Eventuella tidigare erfarenheter/engagemang p\u00e5 LiU</li>\n\n\n\n<li>Varf\u00f6r du s\u00f6ker en post</li>\n\n\n\n<li>Vad du skulle vilja g\u00f6ra med utskottet/posten</li>\n</ul>\n\n\n\n<p>Dessa \u00e4r endast f\u00f6rslag, och du \u00e4r sj\u00e4lvklart fri att v\u00e4lja helt egna punkter att ta upp. De listade punkterna kommer finnas synliga p\u00e5 en duk under tiden du \u00e4r uppe och presenterar.</p>\n\n\n\n<h2 class="wp-block-heading">Dokument</h2>\n\n\n\n<p><a href="https://d-sektionen.se/wp-content/uploads/2025/01/Kallelse_vintermote_2025.pdf" data-type="attachment" data-id="16486">Kallelse Vinterm\u00f6te 2025</a></p>\n\n\n\n<p><a href="https://d-sektionen.se/wp-content/uploads/2024/12/Maldokument-24_25.pdf" data-type="attachment" data-id="16422">M\u00e5ldokument 24/25</a></p>\n\n\n\n<p><a rel="noreferrer noopener" href="https://styrdokument.d-sektionen.se/stadgar.pdf" target="_blank">Stadgar</a></p>\n\n\n\n<p><a href="https://d-sektionen.se/wp-content/uploads/2025/01/reglemente-2025_01_17.pdf" data-type="URL" data-id="https://d-sektionen.se/wp-content/uploads/2025/01/reglemente-2025_01_17.pdf">Reglemente</a></p>\n\n\n\n<p>Motionsmall&nbsp;<a rel="noreferrer noopener" href="https://d-sektionen.se/wp-content/uploads/2019/10/Motionsmall-D-sektionen-2019.pdf" target="_blank">pdf</a>,&nbsp;<a rel="noreferrer noopener" href="https://d-sektionen.se/wp-content/uploads/2019/10/Motionsmall-D-sektionen-2019.odt" target="_blank">odt</a>,&nbsp;<a rel="noreferrer noopener" href="https://d-sektionen.se/wp-content/uploads/2019/10/Motionsmall-D-sektionen-2019.docx" target="_blank">docx</a></p>\n\n\n\n<p><a rel="noreferrer noopener" href="https://d-sektionen.se/wp-content/uploads/2019/10/elektroniskrostningpolicy.pdf" target="_blank">Policy f\u00f6r elektroniskt r\u00f6stningssystem i samband med sektionsm\u00f6ten</a></p>\n\n\n\n<h2 class="wp-block-heading">Inkomna dokument</h2>\n\n\n\n<p><em>Inga inkomna \u00e4n</em></p>\n\n\n\n<h2 class="wp-block-heading">Motioner och Propositioner</h2>\n\n\n\n<p><em>Inga inkomna \u00e4n</em></p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Vinterm\u00f6tet kommer att h\u00e5llas 2:a februari 2025 klockan 12:00 i sal C4. Hej D-student! H\u00e4r kommer information om sektionens vinterm\u00f6te att samlas. Ett sektionsm\u00f6te \u00e4r sektionens h\u00f6gst beslutande organ, och det \u00e4r sektionsm\u00f6ten som beslutar om till exempel sektionens budgetering, framtida arbetss\u00e4tt, stadgar, reglemente, med mera. F\u00f6r mer information om hur ett sektionsm\u00f6te fungerar finns [&hellip;]</p>\n",
      protected: false,
    },
    author: 1035,
    featured_media: 0,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    meta: [],
    categories: [1],
    tags: [],
    _links: {
      self: [{ href: "https://d-sektionen.se/wp-json/wp/v2/posts/16496" }],
      collection: [{ href: "https://d-sektionen.se/wp-json/wp/v2/posts" }],
      about: [{ href: "https://d-sektionen.se/wp-json/wp/v2/types/post" }],
      author: [
        {
          embeddable: true,
          href: "https://d-sektionen.se/wp-json/wp/v2/users/1035",
        },
      ],
      replies: [
        {
          embeddable: true,
          href: "https://d-sektionen.se/wp-json/wp/v2/comments?post=16496",
        },
      ],
      "version-history": [
        {
          count: 2,
          href: "https://d-sektionen.se/wp-json/wp/v2/posts/16496/revisions",
        },
      ],
      "predecessor-version": [
        {
          id: 16500,
          href: "https://d-sektionen.se/wp-json/wp/v2/posts/16496/revisions/16500",
        },
      ],
      "wp:attachment": [
        { href: "https://d-sektionen.se/wp-json/wp/v2/media?parent=16496" },
      ],
      "wp:term": [
        {
          taxonomy: "category",
          embeddable: true,
          href: "https://d-sektionen.se/wp-json/wp/v2/categories?post=16496",
        },
        {
          taxonomy: "post_tag",
          embeddable: true,
          href: "https://d-sektionen.se/wp-json/wp/v2/tags?post=16496",
        },
      ],
      curies: [
        { name: "wp", href: "https://api.w.org/{rel}", templated: true },
      ],
    },
  },
];

dotenv.configDotenv();
const client = new pg.Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

await client.connect();

const items = [];

for (let i = 1; i <= 7; i++) {
  const res = await fetch(
    `https://d-sektionen.se/wp-json/wp/v2/posts?per_page=100&page=${i}`,
  );
  if (!res.ok) {
    console.error(`Failed to fetch page ${i}`);
    continue;
  }
  const data = await res.json();
  items.push(...data);
}

try {
  for (const item of items) {
    console.log(item.title.rendered + "...");
    await createPost(item);
  }
} catch (error) {
  console.error(error);
}

async function createPost(item) {
  const title = item.title.rendered;
  const date = dayjs(item.date).toISOString();
  const slug = item.slug;
  const isPublished = item.status === "publish";
  const excerpt = stripHtml(item.excerpt.rendered).result;
  const content = item.content.rendered;

  await client.query(
    `INSERT INTO posts (title, slug, excerpt, custom_html, created_at, updated_at, published_at) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
    [title, slug, excerpt, content, date, date, isPublished ? date : null],
  );
}
