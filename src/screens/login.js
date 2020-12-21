import * as React from 'react'
import { View, Text, Button } from 'react-native'

const LoginPage = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Login Screen</Text>
    <Button title='Back to home' onPress={() => props.navigation.navigate('Home')}/>
  </View>
)

export default LoginPage