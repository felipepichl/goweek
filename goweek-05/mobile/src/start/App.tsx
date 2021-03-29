import { registerRootComponent } from 'expo';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from '../routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

registerRootComponent(App);

export default App;
