import React, { createContext } from 'react';

interface IAuthContextData {
  name: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {}

export default AuthContext;
