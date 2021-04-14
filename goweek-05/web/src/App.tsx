import React from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
