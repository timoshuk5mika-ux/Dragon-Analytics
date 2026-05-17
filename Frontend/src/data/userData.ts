export interface LoginData {
  email: string;
  password: string;
  name?: string;
  tier: 'RECRUIT' | 'KNIGHT' | 'DRAGONLORD' | 'MYTHIC';
}

export const defaultLoginData: LoginData = {
  email: 'user@example.com',
  password: 'password123',
  name: 'John Doe',
  tier: 'RECRUIT',
};