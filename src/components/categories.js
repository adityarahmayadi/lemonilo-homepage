import React from 'react'
import { Dimensions } from 'react-native'
import { Box } from '@lemonilo/components'
import { useNavigation } from '@react-navigation/native'
import CategoryItem from '@lemonilo/components/categoryitem'
import { categories } from '../data'

const { width } = Dimensions.get('window')
const CATEGORY_ICON_SIZE = (width-16)/4

const Categories = props => {
  const navigation = useNavigation()
  return(
    <Box w p='8px' fDir='row' fJustify='flex-start' fWrap='wrap' {...props}>
      { categories.map(category => (
        <CategoryItem
          key={category.id}
          w={CATEGORY_ICON_SIZE}
          h={CATEGORY_ICON_SIZE}
          icon={category.icon}
          label={category.label}
          action={() => navigation.navigate('Katalog')}
        />
      )) }
    </Box>
  )
}

export default Categories