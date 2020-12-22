import React from 'react'
import { Dimensions } from 'react-native'
import { Box, Images, Font } from '@lemonilo/components'
import { categories } from '../data'

const { width } = Dimensions.get('window')
const CATEGORY_ICON_SIZE = (width-16)/4

const Categories = props => (
  <Box w p='8px' fDir='row' fJustify='flex-start' fWrap='wrap' {...props}>
    { categories.map(category => (
      <Box
        key={category.id}
        w={CATEGORY_ICON_SIZE}
        h={CATEGORY_ICON_SIZE}
        fAlign='center'
      >
        <Images
          source={category.icon}
          w='50px'
          h='50px'
          m='0px 0px 8px'
        />
        <Font>{category.label}</Font>
      </Box>
    )) }
  </Box>
)

export default Categories