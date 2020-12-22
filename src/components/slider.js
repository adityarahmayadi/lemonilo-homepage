import React from 'react'
import Slick from 'react-native-slick'
import { Box, Images } from '@lemonilo/components'
import { slider } from '@lemonilo/data'

const Slider = props => (
  <Box w h='200px' {...props}>
    <Slick autoplay={true}>
      {
        slider.map((item) => (
          <Images
            key={item.id}
            w='100%'
            f={1}
            source={item.image}
            resizeMode='stretch'
          />
        ))
      }
    </Slick>
  </Box>
)

export default Slider