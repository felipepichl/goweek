import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface ISignInCreadetial {
  login: string;
}

interface IAuthContextData {
  user: object;
  signIn(credentials: ISignInCreadetial): Promise<void>;
}

interface IAuthState {
  token: string;
  user: object;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@GoWeek-05:token');
    const user = localStorage.getItem('@GoWeek-05:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ login }) => {
    const response = await api.post('sessions', {
      login,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoWeek-05:token', token);
    localStorage.setItem('@GoWeek-05:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
