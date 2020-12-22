import * as React from 'react'
import { StatusBar } from 'react-native'
import { Box, Images, SafeArea, Font, Touch } from '@lemonilo/components'
import { colors } from '@lemonilo/utils/constants'

const UnderConstruction = ({ navigation }) => (
  <SafeArea w f={1} p={`${StatusBar.currentHeight}px 0px 0px 0px`}>
    <Box p='8px' h='56px' fAlign='center' fDir='row' bg='white'>
      <Images w='40px' h='40px' source={require('@lemonilo/assets/lemonilo-logo.jpg')} resizeMode='contain' />
      <Font fontSize='16px' c={colors.green20} >Lemonilo</Font>
    </Box>
    <Box w f={1} fAlign='center' fJustify='center'>
      <Images
        w='100%'
        h='180px'
        source={require('@lemonilo/assets/welcome_modal.png')}
        resizeMode='contain'
        m='0px 0px 16px'
      />
      <Font fontSize='16px' c={colors.green20} fontWeight='bold' m='0px 0px 8px'>Oops!!!, halaman dalam pengembangan</Font>
      <Font fontSize='12px' m='0px 0px 8px'>Halaman ini sedang dalam pengembangan</Font>
      <Touch
        bg={colors.green20}
        p='8px 16px'
        r='4px'
        onPress={() => navigation.navigate('Beranda')}
      >
        <Font fontSize='12px' c='white' fontWeight='bold'>Kembali ke Beranda</Font>
      </Touch>
    </Box>
  </SafeArea>
)

export default UnderConstruction