export interface Hero {
  hero_id: string;
  name: string;
  faction: string;
  rarity: 'Legendary' | 'Epic' | 'Rare';
  role: 'Infantry' | 'Cavalry' | 'Archer' | 'Mage';
  power: number;
  description_en: string;
  description_ru: string;
  image: string;
}

export const HEROES: Hero[] = [
  { hero_id: "atheus", name: "Atheus", faction: "League of Order", rarity: "Legendary", role: "Infantry", power: 9800, description_en: "Sun-blessed champion who rallies troops.", description_ru: "Солнечный чемпион, вдохновляющий войска.", image: "https://images.unsplash.com/photo-1731194920738-a45527ef583f?w=400" },
  { hero_id: "nike", name: "Nike", faction: "League of Order", rarity: "Legendary", role: "Cavalry", power: 9750, description_en: "Goddess of victory, strikes first.", description_ru: "Богиня победы, бьёт первой.", image: "https://images.unsplash.com/photo-1753029845214-40343837e228?w=400" },
  { hero_id: "liliya", name: "Liliya", faction: "Wilderburg", rarity: "Legendary", role: "Archer", power: 9600, description_en: "Forest guardian with lethal arrows.", description_ru: "Лесная защитница со смертельными стрелами.", image: "https://images.unsplash.com/photo-1731194920738-a45527ef583f?w=400" },
  { hero_id: "garwood", name: "Garwood", faction: "Wilderburg", rarity: "Epic", role: "Infantry", power: 8400, description_en: "Stalwart defender of the glades.", description_ru: "Стойкий защитник рощ.", image: "https://images.unsplash.com/photo-1753029845214-40343837e228?w=400" },
  { hero_id: "elistaire", name: "Elistaire", faction: "Court of Shadow", rarity: "Legendary", role: "Mage", power: 9700, description_en: "Moonlit sorceress of the shadows.", description_ru: "Лунная волшебница теней.", image: "https://images.unsplash.com/photo-1731194920738-a45527ef583f?w=400" },
  { hero_id: "morrigan", name: "Morrigan", faction: "Court of Shadow", rarity: "Epic", role: "Mage", power: 8200, description_en: "Raven witch of the crossroads.", description_ru: "Ведьма-ворон на перекрёстках.", image: "https://images.unsplash.com/photo-1753029845214-40343837e228?w=400" },
  { hero_id: "bakhar", name: "Bakhar", faction: "Ironforge", rarity: "Epic", role: "Cavalry", power: 8600, description_en: "Steppe rider with lightning charge.", description_ru: "Степной всадник с молниеносным рывком.", image: "https://images.unsplash.com/photo-1731194920738-a45527ef583f?w=400" },
  { hero_id: "theodore", name: "Theodore", faction: "Ironforge", rarity: "Legendary", role: "Infantry", power: 9550, description_en: "King of the forge, anvil-breaker.", description_ru: "Король кузни, сокрушитель наковален.", image: "https://images.unsplash.com/photo-1753029845214-40343837e228?w=400" },
  { hero_id: "sonia", name: "Sonia", faction: "Wilderburg", rarity: "Rare", role: "Archer", power: 6400, description_en: "Swift scout, master of dusk arrows.", description_ru: "Быстрый разведчик, мастер сумеречных стрел.", image: "https://images.unsplash.com/photo-1731194920738-a45527ef583f?w=400" },
  { hero_id: "orden", name: "Orden", faction: "League of Order", rarity: "Rare", role: "Infantry", power: 6200, description_en: "Knight-captain of the golden guard.", description_ru: "Капитан золотой стражи.", image: "https://images.unsplash.com/photo-1753029845214-40343837e228?w=400" },
];