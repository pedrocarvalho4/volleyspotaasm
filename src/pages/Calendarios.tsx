import { useEffect, useMemo, useState } from "react";
import GamesTable from "../components/GamesTable";
import { loadAllGames } from "../data/sheets";
import { translations } from "../data/translations";
import type { Game } from "../data/sheets";

type CalendariosProps = {
  t: typeof translations.pt;
};

function Calendarios({ t }: CalendariosProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAllGames()
      .then(setGames)
      .catch(() => setError(t.calendars.error))
      .finally(() => setLoading(false));
  }, [t.calendars.error]);

  const upcomingGames = useMemo(() => {
    return games
      .filter((game) => game.resA === "" && game.resB === "")
      .slice(0, 30);
  }, [games]);

  return (
    <section className="page-section">
      <div className="page-header">
        <span className="section-kicker">{t.calendars.eyebrow}</span>

        <h2>{t.calendars.title}</h2>

        <p>{t.calendars.description}</p>
      </div>

      {loading && <p className="loading-message">{t.calendars.loading}</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="content-block">
          <h3>{t.calendars.title}</h3>

          <GamesTable
            games={upcomingGames}
            t={t}
            emptyMessage={t.calendars.empty}
          />
        </div>
      )}
    </section>
  );
}

export default Calendarios;
