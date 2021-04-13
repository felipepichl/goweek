import React from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <AuthContext.Provider value={{ name: 'Felipe' }}>
        <Routes />
      </AuthContext.Provider>
    </>
  );
};

export default App;
