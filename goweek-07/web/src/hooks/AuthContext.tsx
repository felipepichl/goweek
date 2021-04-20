import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface ISignInCredetials {
  email: string;
}

interface IAuthContextData {
  user: string;
  signIn(credentials: ISignInCredetials): Promise<void>;
}

interface IAuthState {
  user: object;
  token: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  // const [data, setData] = useState<IAuthState>(() => {
  //   const [token, setToken] = useState()
  // });

  const signIn = useCallback(async ({ email }) => {
    const response = await api.post('sessions', { email });

    const { user, token } = response.data;
  }, []);

  return (
    <AuthContext.Provider value={{ user: 'Felipe', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default { AuthProvider };
