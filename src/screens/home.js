import * as React from 'react'
import { Box, Scroll, Images, Font, SafeArea } from '@lemonilo/components'
import { StatusBar } from 'react-native'
import Slider from '@lemonilo/components/slider'
import Categories from '@lemonilo/components/categories'
import { colors } from '@lemonilo/utils/constants'
import Shelf from '../components/shelf'

const HomePage = ({ navigation }) => (
  // screen container
  <SafeArea w f={1} p={`${StatusBar.currentHeight}px 0px 0px 0px`}>
    <Box p='8px' h='56px' fAlign='center' fDir='row' bg='white'>
      <Images w='40px' h='40px' source={require('@lemonilo/assets/lemonilo-logo.jpg')} resizeMode='contain' />
      <Font fontSize='16px' c={colors.green20} >Lemonilo</Font>
    </Box>
    <Scroll w>
      {/* slider */}
      <Slider m='0px 0px 12px' />

      {/* category icon */}
      <Categories />

      {/* shelf - separator */}
      <Shelf
        image={require('@lemonilo/assets/separator/separator-1.png')}
        bg={colors.yellow10}
        content={
          <Font fontSize='13px'>Dijamin <Font c={colors.orange10}>Enak, Praktis dan tanpa 3P</Font> (Pengawet, Pewarna dan Perasa Buatan)</Font>
        }
      />
    </Scroll>
  </SafeArea>
)

export default HomePage