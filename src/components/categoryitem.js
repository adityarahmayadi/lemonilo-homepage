import React from 'react'
import { Box, Images, Font } from '@lemonilo/components'

const CategoryItem = ({w, h, label, icon}) => (
  <Box
    w={w}
    h={h}
    fAlign='center'
  >
    <Images
      source={icon}
      w='50px'
      h='50px'
      m='0px 0px 8px'
    />
    <Box w={w}>
      <Font textAlign='center'>{label}</Font>
    </Box>
  </Box>
)

export default CategoryItem