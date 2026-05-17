import { LEADERBOARD } from './leaderboard';

export interface LoginData {
  email: string;
  password: string;
  name?: string;
  tier: 'RECRUIT' | 'KNIGHT' | 'DRAGONLORD' | 'MYTHIC';
  rang?: string;
  kindom?: string;
  alliance?: string;
  power?: number;
  kills?: number;
  deaths?: number;
}

const currentPlayer = LEADERBOARD.find(p => p.player_id === 'p1')!;

export const defaultLoginData: LoginData = {
  email: 'user@example.com',
  password: 'password123',
  name: currentPlayer.ign,
  tier: 'RECRUIT',
  rang: `#${currentPlayer.rank}`,
  kindom: '1133',
  alliance: currentPlayer.alliance,
  power: currentPlayer.power,
  kills: currentPlayer.kills,
  deaths: currentPlayer.deaths,
};