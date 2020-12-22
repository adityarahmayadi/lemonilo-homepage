import * as React from 'react'
import { Box, Scroll, Images, Font, SafeArea } from '@lemonilo/components'
import { StatusBar } from 'react-native'
import Slider from '@lemonilo/components/slider'
import Categories from '@lemonilo/components/categories'
import { colors } from '@lemonilo/utils/constants'
import Shelf from '@lemonilo/components/shelf'
import ProductCard from '@lemonilo/components/productcard'
import ListItem from '@lemonilo/components/listitem'
import CategoryItem from '@lemonilo/components/categoryitem'
import { featuredProduct, recentProduct, yourneeds } from '@lemonilo/data'

const HomePage = ({ navigation }) => (
  // screen container
  <SafeArea w f={1} p={`${StatusBar.currentHeight}px 0px 0px 0px`}>
    <Box p='8px' h='56px' fAlign='center' fDir='row' bg='white'>
      <Images w='40px' h='40px' source={require('@lemonilo/assets/lemonilo-logo.jpg')} resizeMode='contain' />
      <Font fontSize='16px' c={colors.green20} >Lemonilo</Font>
    </Box>
    <Scroll w>
      {/* slider */}
      <Slider m='0px 0px 12px' />

      {/* category icon */}
      <Categories />

      {/* shelf - separator */}
      <Shelf
        image={require('@lemonilo/assets/separator/separator-1.png')}
        bg={colors.yellow10}
        m='0px 0px 12px'
        content={
          <Font fontSize='13px'>Dijamin <Font c={colors.orange10}>Enak, Praktis dan tanpa 3P</Font> (Pengawet, Pewarna dan Perasa Buatan)</Font>
        }
      />

      {/* featured product */}
      <Box p='0px 16px'>
        <Font fontWeight='bold' fontSize='14px'>Pilihan Minggu Ini</Font>
      </Box>
      <Box w p='16px'>
        <ListItem
          datasource={featuredProduct}
          contentItem={
            ({ item }) => <ProductCard {...item} action={() => navigation.navigate('Detail')}/>
          }
        />
      </Box>

      {/* shelf - separator */}
      <Shelf
        image={require('@lemonilo/assets/separator/separator-2.png')}
        bg={colors.yellow10}
        m='0px 0px 12px'
        content={
          <Font fontSize='13px'>Mendukung <Font c={colors.orange10}>Kemajuan UMKM</Font> Lokal Indonesia</Font>
        }
      />

      {/* new product */}
      <Box p='0px 16px'>
        <Font fontWeight='bold' fontSize='14px'>Terbaru di Lemonilo</Font>
      </Box>
      <Box w p='16px'>
        <ListItem
          datasource={recentProduct}
          contentItem={
            ({ item }) => <ProductCard {...item} action={() => navigation.navigate('Detail')}/>
          }
        />
      </Box>

      {/* shelf - separator */}
      <Shelf
        image={require('@lemonilo/assets/separator/separator-3.png')}
        bg={colors.yellow10}
        m='0px 0px 12px'
        content={
          <Font fontSize='13px'>Semua Produk Gratis Ongkir <Font c={colors.orange10}>Rp 20.000</Font> dengan Min. Belanja Rp 150.000</Font>
        }
      />

      {/* your needs */}
      <Box p='0px 16px' m='0px 0px 12px'>
        <Font fontWeight='bold' fontSize='14px'>Pilihan untuk Kebutuhanmu </Font>
      </Box>
      <Box w p='16px'>
        <ListItem
          datasource={yourneeds}
          contentItem={
            ({ item }) => <CategoryItem {...item} w='80px' key={`key-${item.id}`} action={() => navigation.navigate('Katalog')} />
          }
        />
      </Box>
    </Scroll>
  </SafeArea>
)

export default HomePage