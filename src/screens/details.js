import * as React from 'react'
import { StatusBar } from 'react-native'
import { Box, Images, SafeArea, Font, Touch, Scroll } from '@lemonilo/components'
import { colors } from '@lemonilo/utils/constants'

const Details = ({ navigation }) => (
  <SafeArea w f={1} p={`${StatusBar.currentHeight}px 0px 0px 0px`} posi='relative'>
    <Box p='8px' h='56px' fAlign='center' fDir='row' bg='white'>
      <Images w='40px' h='40px' source={require('@lemonilo/assets/lemonilo-logo.jpg')} resizeMode='contain' />
      <Font fontSize='16px' c={colors.green20} >Detail Produk</Font>
    </Box>
    <Scroll w>
      <Images
        w='100%'
        h='240px'
        source={{uri: 'https://static.lemonilo.com/product/8e77a06ba9d78f5c2b5a6071615db585.png'}}
        resizeMode='cover'
        m='0px 0px 16px'
      />
      <Box p='0px 16px' m='0px 0px 16px'>
        <Font c={colors.grey10}>Lemonilo</Font>                
        <Font numberOfLines={2}>Hampers Natal dan Tahun Baru Lemonilo x Du Anyam</Font>
        <Font fontSize='8px' c={colors.grey10}>4000 gram</Font>
        <Box w fDir='row' fAlign='center'>
          <Box m='0px 12px 0px 0px'>
            <Font
              fontSize='10px'
              c={colors.grey10}
              numberOfLines={1}
              textDecor='line-through'
            >
              Rp. 395.750
            </Font>
          </Box>
          <Box>
            <Font c='black'>Rp. 285.000</Font>
          </Box>
        </Box>
      </Box>
      <Box w h='1px' bg='#d3d3d3' m='0px 0px 16px' />
      <Box w p='16px' fDir='row' fJustify='space-around' m='0px 0px 16px'>
        <Box f={1} fAlign='center'>
          <Box fDir='row' fJustify='center' m='0px 0px 12px'>
            <Images w='20px' h='20px' m='0px 4px 0px 0px' source={{uri: 'https://static.lemonilo.com/frontend/rating_yellow.png'}} />
            <Images w='20px' h='20px' m='0px 4px 0px 0px' source={{uri: 'https://static.lemonilo.com/frontend/rating_yellow.png'}} />
            <Images w='20px' h='20px' m='0px 4px 0px 0px' source={{uri: 'https://static.lemonilo.com/frontend/rating_yellow.png'}} />
            <Images w='20px' h='20px' m='0px 4px 0px 0px' source={{uri: 'https://static.lemonilo.com/frontend/rating_yellow.png'}} />
            <Images w='20px' h='20px' m='0px 4px 0px 0px' source={{uri: 'https://static.lemonilo.com/frontend/rating_yellow.png'}} />
          </Box>
          <Font>(6 ulasan)</Font>
        </Box>
        <Box f={1} fAlign='center'>
          <Images w='40px' h='40px' m='0px 0px 12px' source={{uri: 'https://static.lemonilo.com/frontend/sell_icon.png'}} />
          <Font>{`Terjual > 5 Hari ini`}</Font>
        </Box>
      </Box>
      <Box w h='2px' bg='#d3d3d3' />
    </Scroll>
    <Box posi='absolute' bottom='0px' left='0px' w fDir='row'>
      <Touch f={1} p='8px 16px' onPress={() => navigation.navigate('Beranda')}>
        <Font>Kembali ke Beranda</Font>
      </Touch>
      <Touch bg={colors.green20} f={2} p='8px 16px' fAlign='center' onPress={() => navigation.navigate('Katalog')}>
        <Font c='white' fontSize='14px' fontWeight='bold'>Beli</Font>
      </Touch>
    </Box>
  </SafeArea>
)

export default Details