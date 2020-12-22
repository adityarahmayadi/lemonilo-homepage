import * as React from 'react'
import { Box, Scroll, Images, Font } from '@lemonilo/components'
import Slider from '@lemonilo/components/slider'
import Categories from '@lemonilo/components/categories'
import { colors } from '@lemonilo/utils/constants'
import Shelf from '../components/shelf'

const HomePage = ({ navigation }) => (
  // screen container
  <Scroll w>
    {/* slider */}
    <Slider m='0px 0px 12px' />

    {/* category icon */}
    <Categories />

    {/* shelf - separator */}
    <Shelf
      image={require('@lemonilo/assets/separator/separator-1.png')}
      bg={colors.yellow10}
      content={
        <Font fontSize='13px'>Dijamin <Font c={colors.orange10}>Enak, Praktis dan tanpa 3P</Font> (Pengawet, Pewarna dan Perasa Buatan)</Font>
      }
    />

    

  </Scroll>
)

export default HomePage