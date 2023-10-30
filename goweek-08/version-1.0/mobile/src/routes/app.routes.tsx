import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../pages/Login'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='home'
        component={Login}
      />
    </Navigator>
  )
}