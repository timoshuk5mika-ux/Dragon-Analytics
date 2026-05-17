const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/backend-api';
const TOKEN_STORAGE_KEY = 'dragon_analytics_token';

export type AuthUser = {
  id: number;
  email: string;
  is_active: boolean;
  created_at: string;
};

type TokenResponse = {
  access_token: string;
  token_type: string;
};

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `API request failed: ${response.status}`);
  }

  return response.json();
}

export function getAccessToken(): string | null {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function setAccessToken(token: string): void {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function clearAccessToken(): void {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}

export async function register(email: string, password: string): Promise<AuthUser> {
  return request<AuthUser>('/register', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function login(email: string, password: string): Promise<TokenResponse> {
  const token = await request<TokenResponse>('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  setAccessToken(token.access_token);
  return token;
}

export async function getMe(): Promise<AuthUser> {
  const token = getAccessToken();

  if (!token) {
    throw new Error('Missing access token');
  }

  return request<AuthUser>('/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
