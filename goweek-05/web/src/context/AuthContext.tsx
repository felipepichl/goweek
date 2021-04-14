import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface ISignInCreadetial {
  login: string;
}

interface IAuthContextData {
  name: string;
  signIn(credentials: ISignInCreadetial): Promise<void>;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ login }) => {
    const response = await api.post('sessions', {
      login,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Felipe', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
