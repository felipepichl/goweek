import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface ISignInCredetials {
  email: string;
}

interface IAuthContextData {
  user: object;
  signIn(credentials: ISignInCredetials): Promise<void>;
  signOut(): void;
}

interface IAuthState {
  user: object;
  token: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem('@GoWeek-07:user');
    const token = localStorage.getItem('@GoWeek-07:token');

    if (user && token) {
      return { user: JSON.parse(user), token };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email }) => {
    const response = await api.post('sessions', { email });

    const { user, token } = response.data;

    localStorage.setItem('@GoWeek-07:user', JSON.stringify(user));
    localStorage.setItem('@GoWeek-07:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoWeek-07:user');
    localStorage.removeItem('@GoWeek-07:token');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
