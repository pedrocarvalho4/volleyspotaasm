import { useEffect, useMemo, useState } from "react";
import GamesTable from "../components/GamesTable";
import { getFields, loadAllGames } from "../data/sheets";
import { translations } from "../data/translations";
import type { Game } from "../data/sheets";

type JogosPorCampoProps = {
  t: typeof translations.pt;
};

function JogosPorCampo({ t }: JogosPorCampoProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedField, setSelectedField] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAllGames()
      .then(setGames)
      .catch(() => setError(t.gamesByField.error))
      .finally(() => setLoading(false));
  }, [t.gamesByField.error]);

  const fields = useMemo(() => getFields(games), [games]);

  const filteredGames = useMemo(() => {
    if (!selectedField) return [];

    return games.filter((game) => game.campo === selectedField);
  }, [games, selectedField]);

  return (
    <section className="page-section">
      <div className="page-header">
        <span className="section-kicker">{t.gamesByField.eyebrow}</span>

        <h2>{t.gamesByField.title}</h2>

        <p>{t.gamesByField.description}</p>
      </div>

      {loading && <p className="loading-message">{t.gamesByField.loading}</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="content-block">
          <div className="block-header">
            <div>
              <h3>
                {selectedField
                  ? `${t.gamesByField.field} ${selectedField}`
                  : t.gamesByField.selectField}
              </h3>

              <p>
                {selectedField
                  ? `${t.gamesByField.showingField} ${selectedField}.`
                  : t.gamesByField.chooseField}
              </p>
            </div>

            <select
              value={selectedField}
              onChange={(event) => setSelectedField(event.target.value)}
              className="filter-select"
            >
              <option value="">{t.gamesByField.selectField}</option>

              {fields.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
          </div>

          {selectedField ? (
            <GamesTable
              games={filteredGames}
              t={t}
              emptyMessage={t.gamesByField.empty}
            />
          ) : (
            <p className="empty-message">{t.gamesByField.emptyBeforeSelect}</p>
          )}
        </div>
      )}
    </section>
  );
}

export default JogosPorCampo;
