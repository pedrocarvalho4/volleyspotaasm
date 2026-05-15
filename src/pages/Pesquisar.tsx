import { useEffect, useMemo, useState } from "react";
import GamesTable from "../components/GamesTable";
import { getGameTypes, loadAllGames } from "../data/sheets";
import { translations } from "../data/translations";
import type { Game } from "../data/sheets";

type PesquisarProps = {
  t: typeof translations.pt;
};

function Pesquisar({ t }: PesquisarProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [teamFilter, setTeamFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAllGames()
      .then(setGames)
      .catch(() => setError(t.search.error))
      .finally(() => setLoading(false));
  }, [t.search.error]);

  const gameTypes = useMemo(() => getGameTypes(games), [games]);

  const filteredGames = useMemo(() => {
    if (!hasSearched) return [];

    const normalizedTeam = teamFilter.trim().toLowerCase();
    const normalizedType = typeFilter.trim().toUpperCase();

    return games.filter((game) => {
      const matchesType =
        !normalizedType || game.numJ.toUpperCase().includes(normalizedType);

      const matchesTeam =
        !normalizedTeam ||
        game.equipaA.toLowerCase().includes(normalizedTeam) ||
        game.equipaB.toLowerCase().includes(normalizedTeam);

      return matchesType && matchesTeam;
    });
  }, [games, teamFilter, typeFilter, hasSearched]);

  function handleSearch() {
    setHasSearched(true);
  }

  function handleClear() {
    setTeamFilter("");
    setTypeFilter("");
    setHasSearched(false);
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <span className="section-kicker">{t.search.eyebrow}</span>

        <h2>{t.search.title}</h2>

        <p>{t.search.description}</p>
      </div>

      {loading && <p className="loading-message">{t.search.loading}</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <>
          <div className="filters-panel">
            <div className="filter-field">
              <label htmlFor="team-filter">{t.search.teamLabel}</label>

              <input
                id="team-filter"
                type="text"
                value={teamFilter}
                onChange={(event) => setTeamFilter(event.target.value)}
                placeholder={t.search.teamPlaceholder}
              />
            </div>

            <div className="filter-field">
              <label htmlFor="type-filter">{t.search.typeLabel}</label>

              <select
                id="type-filter"
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
              >
                <option value="">{t.search.allTypes}</option>

                {gameTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-actions">
              <button
                type="button"
                onClick={handleSearch}
                className="primary-button"
              >
                {t.search.button}
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="secondary-button"
              >
                {t.search.clear}
              </button>
            </div>
          </div>

          <div className="content-block">
            {!hasSearched ? (
              <p className="empty-message">{t.search.initialMessage}</p>
            ) : (
              <GamesTable
                games={filteredGames}
                t={t}
                emptyMessage={t.search.empty}
              />
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default Pesquisar;
