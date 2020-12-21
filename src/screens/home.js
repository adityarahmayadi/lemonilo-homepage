import * as React from 'react'
import { Box, Font, Touch } from '@lemonilo/components'

const HomePage = ({ navigation }) => (
  <Box f={1} fAlign='center' fJustify='center' w p='8px'>
    <Font>Hello Homepage</Font>
    <Touch w h='32px' bg='#d3d3d3' r='16px' m='20px' onPress={() => navigation.navigate('Login')} />
  </Box>
)

export default HomePage