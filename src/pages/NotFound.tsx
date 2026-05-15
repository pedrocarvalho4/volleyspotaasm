import { translations } from "../data/translations";

type NotFoundProps = {
  t: typeof translations.pt;
};

function NotFound({ t }: NotFoundProps) {
  return (
    <section className="not-found-page">
      <h2>{t.notFound.title}</h2>

      <p>{t.notFound.description}</p>

      <a href="/">{t.notFound.button}</a>
    </section>
  );
}

export default NotFound;
