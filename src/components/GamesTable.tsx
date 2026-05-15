import { translations } from "../data/translations";
import type { Game } from "../data/sheets";

type GamesTableProps = {
  games: Game[];
  t: typeof translations.pt;
  emptyMessage?: string;
};

function GamesTable({
  games,
  t,
  emptyMessage = "Sem jogos disponíveis.",
}: GamesTableProps) {
  if (!games.length) {
    return <p className="empty-message">{emptyMessage}</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="games-table">
        <thead>
          <tr>
            <th>{t.table.number}</th>
            <th>{t.table.day}</th>
            <th>{t.table.time}</th>
            <th>{t.table.field}</th>
            <th>{t.table.teamA}</th>
            <th></th>
            <th>X</th>
            <th></th>
            <th>{t.table.teamB}</th>
          </tr>
        </thead>

        <tbody>
          {games.map((game, index) => (
            <tr key={`${game.campo}-${game.numJ}-${index}`}>
              <td>{game.numJ}</td>
              <td>{game.dia}</td>
              <td>{game.hora}</td>
              <td>{game.campo}</td>
              <td>{game.equipaA}</td>
              <td className="result-cell">{game.resA}</td>
              <td className="versus-cell">X</td>
              <td className="result-cell">{game.resB}</td>
              <td>{game.equipaB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GamesTable;
