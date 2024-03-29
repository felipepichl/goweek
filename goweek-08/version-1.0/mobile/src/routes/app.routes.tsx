import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../pages/Login'
import { Main } from '../pages/Main'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='login'
        component={Login}
      />
      <Screen 
        name='main'
        component={Main}
      />
    </Navigator>
  )
}