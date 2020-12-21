import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Box, Font, Touch, Images } from '@lemonilo/components'
import Slick from 'react-native-slick'
import Slider from '@lemonilo/components/slider'

const HomePage = ({ navigation }) => (
  // screen container
  <Box w>
    {/* slider */}
    <Slider />
  </Box>
)

export default HomePage