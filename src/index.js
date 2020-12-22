import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Box, Images } from '@lemonilo/components'
import { colors } from '@lemonilo/utils/constants'
import HomePage from './screens/home'
import LoginPage from './screens/login'
import OrderPage from './screens/order'
import UnderConstruction from './screens/underconstruction'

const Tab = createBottomTabNavigator()

const App = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if(route.name === 'Beranda'){
          iconName = focused ? require('@lemonilo/assets/icon/home-active-icon.png') : require('@lemonilo/assets/icon/home-icon.png')
        } else if (route.name === 'Notifikasi'){
          iconName = focused ? require('@lemonilo/assets/icon/notifikasi-active-icon.png') : require('@lemonilo/assets/icon/notifikasi-icon.png')
        } else if (route.name === 'Life'){
          iconName = focused ? require('@lemonilo/assets/icon/life-active-icon.png') : require('@lemonilo/assets/icon/life-icon.png')
        } else if (route.name === 'Pesanan'){
          iconName = focused ? require('@lemonilo/assets/icon/order-active-icon.png') : require('@lemonilo/assets/icon/order-icon.png')
        } else if (route.name === 'Masuk'){
          iconName = focused ? require('@lemonilo/assets/icon/profile-active-icon.png') : require('@lemonilo/assets/icon/profile-icon.png')
        }
        return (
          <Box w='20px' h='20px'>
            <Images w='100%' source={iconName} resizeMode='contain' />
          </Box>
        )
      }
    })}
    tabBarOptions={{
      activeTintColor: colors.green20,
      inactiveTintColor: 'grey',
    }}
  >
    <Tab.Screen name="Beranda" component={HomePage} />
    <Tab.Screen name="Notifikasi" component={UnderConstruction} />
    <Tab.Screen name="Life" component={UnderConstruction} />
    <Tab.Screen name="Pesanan" component={OrderPage} />
    <Tab.Screen name="Masuk" component={LoginPage} />
  </Tab.Navigator>
)

export default App