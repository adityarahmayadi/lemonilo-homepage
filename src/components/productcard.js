import React from 'react'
import { Box, Images, Font } from '@lemonilo/components'
import { colors } from '@lemonilo/utils/constants'

const ProductCard = () => (
  <Box
    w='162px'
    r='8px'
    b='0.5px solid rgba(151, 151, 151, 0.4)'
    overflow='hidden'
    posi='relative'
    m='0px 8px 0px 0px'
  >
    <Box
      posi='absolute'
      top='0px'
      w='80px'
      rBottomEnd='8px'
      left='0px'
      p='4px'
      bg={colors.orange10}
      z={10}
      fAlign='center'
    >
      <Font fontSize='10px' c='white' fontWeight='bold'>Best Seller</Font>
    </Box>
    
    <Box  
      posi='absolute'
      top='0px'
      right='8px'
      p='4px'
      rBottomEnd='4px'
      rBottomStart='4px'
      bg={colors.yellow30}
      z={10}
      fAlign='center'
    >
      <Font fontSize='10px' c={colors.red30} fontWeight='bold'>20%</Font>
    </Box>

    <Box
      p='12px 0px 0px'
      w='162px'
      h='112px'
      bg='white'
      bBottomCol={colors.grey10}
      bBottomW='0.5px'
      bStyle='solid'
    >
      <Images
        w='100%'
        resizeMode='contain'
        source={{uri: 'https://static.lemonilo.com/product/cda1719195957aed7f2537cb15f254a0.png?tr=w-200'}}
      />
    </Box>
    <Box p='8px' bg='white'>
      <Font c={colors.grey10}>Lemonilo</Font>                
      <Font numberOfLines={2}>Hampers Natal dan Tahun Baru</Font>
      <Font fontSize='8px' c={colors.grey10}>400gr</Font>
      <Box w fDir='row' fAlign='center'>
        <Box f='1'>
          <Font
            fontSize='10px'
            c={colors.grey10}
            numberOfLines={1}
            textDecor='line-through'
          >
            Rp. 390.000
          </Font>
        </Box>
        <Box f='2'>
          <Font c='black'>Rp. 390.000</Font>
        </Box>
      </Box>
    </Box>
    <Box w p='8px' bg={colors.green20} fAlign='center'>
      <Font c='white' fontWeight='bold'>Beli</Font>
    </Box>
  </Box>
)

export default ProductCard