import type { translations } from "../data/translations";

type HomeProps = {
  t: typeof translations.pt;
};

type CardProps = {
  title: string;
  description: string;
  buttonText: string;
  href: string;
};

function HomeCard({ title, description, buttonText, href }: CardProps) {
  return (
    <article className="home-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>{buttonText}</a>
    </article>
  );
}

function Home({ t }: HomeProps) {
  return (
    <section className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">{t.home.eyebrow}</span>

          <h2>{t.home.title}</h2>

          <p>{t.home.description}</p>

          <div className="hero-actions">
            <a href="/calendarios" className="primary-button">
              {t.home.calendarsButton}
            </a>

            <a href="/pesquisar" className="secondary-button">
              {t.home.searchButton}
            </a>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <span className="section-kicker">{t.home.sectionKicker}</span>

        <h2>{t.home.sectionTitle}</h2>

        <p>{t.home.sectionDescription}</p>
      </section>

      <section className="home-grid">
        <HomeCard
          title={t.home.nextGamesTitle}
          description={t.home.nextGamesDescription}
          buttonText={t.home.nextGamesButton}
          href="/calendarios"
        />

        <HomeCard
          title={t.home.gamesByFieldTitle}
          description={t.home.gamesByFieldDescription}
          buttonText={t.home.gamesByFieldButton}
          href="/jogos-por-campo"
        />
      </section>
    </section>
  );
}

export default Home;
