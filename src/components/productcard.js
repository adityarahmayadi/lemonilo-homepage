import React from 'react'
import { Box, Images, Font, Touch } from '@lemonilo/components'
import { colors } from '@lemonilo/utils/constants'
import { formatIDR } from '@lemonilo/utils/helpers'

const ProductCard = ({ 
    name,
    discount,
    price,
    gimmickPrice,
    merchant,
    size,
    photoUrl,
    isBestSeller,
    uuid,
    action
}) => (
  <Touch
    key={uuid}
    w='162px'
    r='8px'
    b='0.5px solid rgba(151, 151, 151, 0.4)'
    overflow='hidden'
    posi='relative'
    m='0px 8px 0px 0px'
    onPress={action}
  >
    {
      isBestSeller && (
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
      )
    }

    {
      discount > 0 && (
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
          <Font fontSize='10px' c={colors.red30} fontWeight='bold'>{`-${Math.ceil(discount)}%`}</Font>
        </Box>
      )
    }

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
        source={{uri: photoUrl}}
      />
    </Box>
    <Box p='8px' bg='white'>
      <Font c={colors.grey10}>{merchant.name}</Font>                
      <Font numberOfLines={2}>{name}</Font>
      <Font fontSize='8px' c={colors.grey10}>{size}</Font>
      <Box w fDir='row' fAlign='center'>
        <Box f='1'>
          <Font
            fontSize='10px'
            c={colors.grey10}
            numberOfLines={1}
            textDecor='line-through'
          >
            {formatIDR(gimmickPrice)}
          </Font>
        </Box>
        <Box f='2'>
          <Font c='black'>{formatIDR(price)}</Font>
        </Box>
      </Box>
    </Box>
    <Box w p='8px' bg={colors.green20} fAlign='center'>
      <Font c='white' fontWeight='bold'>Beli</Font>
    </Box>
  </Touch>
)

export default ProductCard