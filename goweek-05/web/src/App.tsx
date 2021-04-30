import React from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
};

export default App;
