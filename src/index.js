import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from './screens/home'
import LoginPage from './screens/login'

const Stack = createStackNavigator()

const App = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="Login" component={LoginPage} />
  </Stack.Navigator>
)

export default App