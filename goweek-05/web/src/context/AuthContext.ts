import { createContext } from 'react';

interface IAuthContextData {
  name: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export default AuthContext;
