import { registerRootComponent } from 'expo';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello World</Text>
      </View>
    </>
  );
};

registerRootComponent(App);

export default App;
