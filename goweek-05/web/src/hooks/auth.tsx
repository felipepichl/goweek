import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface ISignInCreadetial {
  login: string;
}

interface IAuthContextData {
  user: object;
  signIn(credentials: ISignInCreadetial): Promise<void>;
  signOut(): void;
}

interface IAuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@GoWeek-05:token');
    const user = localStorage.getItem('@GoWeek-05:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ login }) => {
    const response = await api.post('users', {
      login,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoWeek-05:token', token);
    localStorage.setItem('@GoWeek-05:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoWeek-05:token');
    localStorage.removeItem('@GoWeek-05:user');

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
