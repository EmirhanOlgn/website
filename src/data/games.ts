export type Game = {
  name: string;
  image?: string;
};

export function gameSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function gameImage(game: Game) {
  return game.image ?? `/games/${gameSlug(game.name)}.jpg`;
}

export const games: Game[] = [
  { name: "Minecraft" },
  { name: "GTA: Vice City" },
  { name: "Haxball" },
  { name: "CrossFire" },
  { name: "American Conquest" },
  { name: "GTA: San Andreas" },
  { name: "GTA V" },
  { name: "GTA IV" },
  { name: "League of Legends" },
  { name: "Red Dead Redemption 2" },
  { name: "Ready or Not" },
  { name: "EA Sports FC 26" },
  { name: "Counter-Strike 2" },
  { name: "Rust" },
  { name: "Euro Truck Simulator 2" },
  { name: "PUBG: Battlegrounds" },
  { name: "Teardown" },
];
