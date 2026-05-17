import { getAccessToken, clearAccessToken, getMe } from './auth';
import type { AuthUser } from './auth';
import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';

type AuthContextType = {
  user: AuthUser | null;
  isLoggedIn: boolean;
  logout: () => void;
  refetchUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const fetchUser = async () => {
    try {
      const me = await getMe();
      setUser(me);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    if (getAccessToken()) fetchUser();
  }, []);

  const logout = () => {
    clearAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, logout, refetchUser: fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};