const SHEET_ID = "15OnCiMDI3PLarrIq5OS0zVjVkdpNuPwwY3BPaqqOmWY";

const SHEETS = [
  { name: "ES1", gid: "0" },
  { name: "ES2", gid: "206267783" },
  { name: "ES3", gid: "751577969" },
  { name: "EAS1", gid: "1259693589" },
  { name: "EAS2", gid: "1401653148" },
  { name: "EAS3", gid: "1123781712" },
  { name: "MMS1", gid: "1790515582" },
  { name: "MPL1", gid: "568449170" },
  { name: "MPL2", gid: "70013361" },
  { name: "MSH1", gid: "819552429" },
  { name: "MSH2", gid: "43058328" },
  { name: "MG1", gid: "1478116960" },
  { name: "MG2", gid: "901696639" },
];

type GoogleCell = {
  v?: string | number;
};

type GoogleRow = {
  c: GoogleCell[];
};

export type Game = {
  numJ: string;
  dia: string;
  hora: string;
  campo: string;
  equipaA: string;
  equipaB: string;
  resA: string;
  resB: string;
};

let cachedGames: Game[] | null = null;

function parseGVizResponse(text: string) {
  return JSON.parse(text.substring(47).slice(0, -2));
}

export function groupGamesByField(games: Game[]) {
  return games.reduce<Record<string, Game[]>>((acc, game) => {
    if (!acc[game.campo]) {
      acc[game.campo] = [];
    }

    acc[game.campo].push(game);
    return acc;
  }, {});
}

export function formatHora(cell?: GoogleCell): string {
  if (!cell || !cell.v) return "";

  const value = String(cell.v);
  const match = /Date\(\d+,\d+,\d+,(\d+),(\d+)/.exec(value);

  if (!match) return value;

  return `${String(match[1]).padStart(2, "0")}:${String(match[2]).padStart(2, "0")}`;
}

function isValidGameRow(row: GoogleRow): boolean {
  if (!row || !row.c || !row.c[0]) return false;

  const numJ = String(row.c[0]?.v || "");
  const equipaA = String(row.c[4]?.v || "");

  if (numJ === "N.º J." || equipaA === "Equipa A" || numJ === "") return false;
  if (!numJ.includes("-")) return false;

  return true;
}

async function fetchSheet(sheet: {
  name: string;
  gid: string;
}): Promise<Game[]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${sheet.gid}&range=A1:P100&_=${Date.now()}`;

  const response = await fetch(url);
  const text = await response.text();
  const json = parseGVizResponse(text);

  return json.table.rows.filter(isValidGameRow).map((row: GoogleRow) => ({
    numJ: String(row.c[0]?.v || ""),
    dia: String(row.c[1]?.v || ""),
    hora: formatHora(row.c[2]),
    campo: sheet.name,
    equipaA: String(row.c[4]?.v || ""),
    equipaB: String(row.c[8]?.v || ""),
    resA: String(row.c[5]?.v || ""),
    resB: String(row.c[7]?.v || ""),
  }));
}

export async function loadAllGames(): Promise<Game[]> {
  if (cachedGames) return cachedGames;

  const lists = await Promise.all(SHEETS.map(fetchSheet));
  cachedGames = lists.flat().sort(sortGames);

  return cachedGames;
}

export function sortGames(a: Game, b: Game): number {
  const dayA = parseInt(a.dia) || 0;
  const dayB = parseInt(b.dia) || 0;

  if (dayA !== dayB) return dayA - dayB;

  return (a.hora || "").localeCompare(b.hora || "");
}

export function getGameTypes(games: Game[]): string[] {
  const types = games
    .map((game) => game.numJ.split("-")[0]?.trim())
    .filter(Boolean);

  return [...new Set(types)].sort();
}

export function getFields(games: Game[]): string[] {
  return [...new Set(games.map((game) => game.campo).filter(Boolean))].sort();
}
