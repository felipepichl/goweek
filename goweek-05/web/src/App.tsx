import React from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <AuthProvider>
        <Routes />
      </AuthProvider>

      <ToastContainer />
    </>
  );
};

export default App;
