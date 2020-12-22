import React from 'react'
import { Box, Images, Font } from '@lemonilo/components'

const Shelf = ({image, content, bg }) => (
  <Box
    w
    bg={bg}
    p='16px'
    fDir='row'
  >
    <Images
      source={image}
      w='64px'
      h='64px'
      m='0px 16px 0px 0px'
    />
    <Box f={1} fJustify='center'>
      {
        typeof content === 'string' ? (
          <Font fontSize='13px'>{content}</Font>    
        ) : (
          content
        )
      }
    </Box>
  </Box>
)

export default Shelf