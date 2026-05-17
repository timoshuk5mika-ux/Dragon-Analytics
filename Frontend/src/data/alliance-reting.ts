export interface Alliance {
  tag: string;
  name: string;
  power: number;
  members: number;
  wars_won: number;
  wars_lost: number;
  kingdom: number;
}

export const ALLIANCES: Alliance[] = [
  { tag: "VOID", name: "Voidborne", power: 3_810_000_000, members: 100, wars_won: 47, wars_lost: 8, kingdom: 1138 },
  { tag: "FURY", name: "Endless Fury", power: 3_620_000_000, members: 98, wars_won: 41, wars_lost: 11, kingdom: 1138 },
  { tag: "IRON", name: "Iron Vanguard", power: 3_450_000_000, members: 96, wars_won: 38, wars_lost: 14, kingdom: 1142 },
  { tag: "STRM", name: "Stormwall", power: 3_210_000_000, members: 94, wars_won: 33, wars_lost: 17, kingdom: 1142 },
  { tag: "LUNA", name: "Lunar Rite", power: 2_980_000_000, members: 90, wars_won: 29, wars_lost: 19, kingdom: 1155 },
  { tag: "ICED", name: "Frostfall", power: 2_710_000_000, members: 88, wars_won: 26, wars_lost: 21, kingdom: 1155 },
];