import React from 'react'
import { Touch, Images, Font } from '@lemonilo/components'

const CategoryItem = ({w, h, label, icon, action}) => (
  <Touch
    w={w}
    h={h}
    fAlign='center'
    onPress={action}
  >
    <Images
      source={icon}
      w='50px'
      h='50px'
      m='0px 0px 8px'
    />
    <Touch w={w}>
      <Font textAlign='center'>{label}</Font>
    </Touch>
  </Touch>
)

export default CategoryItem