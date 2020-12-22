import * as React from 'react'
import { StatusBar } from 'react-native'
import { Box, Images, SafeArea, Font, Touch, Field } from '@lemonilo/components'
import { colors } from '@lemonilo/utils/constants'

const LoginPage = ({ navigation }) => (
  <SafeArea w f={1} p={`${StatusBar.currentHeight}px 0px 0px 0px`}>
    <Box p='8px' h='56px' fAlign='center' fDir='row' bg='white'>
      <Images w='40px' h='40px' source={require('@lemonilo/assets/lemonilo-logo.jpg')} resizeMode='contain' />
      <Font fontSize='16px' c={colors.green20} >Lemonilo</Font>
    </Box>
    <Box w f={1} fAlign='center' fJustify='center' p='16px'>
      <Images
        w='240px'
        h='80px'
        source={require('@lemonilo/assets/logo.png')}
        resizeMode='contain'
        m='0px 0px 16px'
      />
      <Field
        b={`1px solid ${colors.green20}`}
        placeholder='Email Anda'
      />
      <Field
        b={`1px solid ${colors.green20}`}
        placeholder='Password Anda'
        secureTextEntry
      />
      <Touch
        bg={colors.green20}
        p='8px 16px'
        w
        h='40px'
        r='4px'
        fAlign='center'
        fJustify='center'
        m='0px 0px 16px'
        onPress={() => navigation.navigate('Beranda')}
      >
        <Font fontSize='14px' c='white' fontWeight='bold'>Masuk</Font>
      </Touch>
      <Touch>
        <Font fontSize='14px' c={colors.green20} fontWeight='bold' m='0px 0px 8px'>Lupa Password?</Font>
      </Touch>
      <Font fontSize='14px' c='black'>
        Belum punya akun?
          <Font fontSize='14px' c={colors.green20} fontWeight='bold'> Buat Akun Sekarang</Font>
      </Font>
    </Box>
  </SafeArea>
)

export default LoginPage