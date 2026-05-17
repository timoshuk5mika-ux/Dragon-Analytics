export interface Player {
  player_id: string;
  ign: string;
  alliance: string;
  power: number;
  kills: number;
  deaths: number;
  rank: number;
}

export const LEADERBOARD: Player[] = [
  { player_id: "p1", ign: "DragonSlayer", alliance: "VOID", power: 124_580_000, kills: 412_800_000, deaths: 18_400_000, rank: 1 },
  { player_id: "p2", ign: "NightHawk", alliance: "FURY", power: 118_240_000, kills: 398_600_000, deaths: 15_230_000, rank: 2 },
  { player_id: "p3", ign: "IronFang", alliance: "IRON", power: 112_900_000, kills: 365_100_000, deaths: 19_800_000, rank: 3 },
  { player_id: "p4", ign: "ShadowQueen", alliance: "VOID", power: 108_340_000, kills: 342_050_000, deaths: 12_600_000, rank: 4 },
  { player_id: "p5", ign: "Stormbringer", alliance: "STRM", power: 101_500_000, kills: 328_780_000, deaths: 17_400_000, rank: 5 },
  { player_id: "p6", ign: "MoonArcher", alliance: "LUNA", power: 97_880_000, kills: 301_400_000, deaths: 14_100_000, rank: 6 },
  { player_id: "p7", ign: "GoldenLion", alliance: "FURY", power: 93_200_000, kills: 289_900_000, deaths: 16_500_000, rank: 7 },
  { player_id: "p8", ign: "FrostWolf", alliance: "ICED", power: 89_100_000, kills: 267_300_000, deaths: 13_900_000, rank: 8 },
  { player_id: "p9", ign: "RavenLord", alliance: "VOID", power: 85_400_000, kills: 241_800_000, deaths: 11_200_000, rank: 9 },
  { player_id: "p10", ign: "DawnKnight", alliance: "DAWN", power: 81_700_000, kills: 228_450_000, deaths: 9_800_000, rank: 10 },
  { player_id: "p11", ign: "EmberHeart", alliance: "STRM", power: 77_500_000, kills: 214_600_000, deaths: 12_400_000, rank: 11 },
  { player_id: "p12", ign: "VineWalker", alliance: "WILD", power: 74_200_000, kills: 198_300_000, deaths: 10_500_000, rank: 12 },
];