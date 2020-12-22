import React from 'react'
import { FlatList } from 'react-native'

const ListItem = ({ key, datasource, contentItem, children }) => {
  const _keyExtractor = item => item.id
  const _renderItem = ({ item, index }) => (
    contentItem({item, index})
  )

  return(
    <FlatList
      key={key}
      showsHorizontalScrollIndicator={false}
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}
      data={datasource}
      horizontal
    />
  )
}

export default ListItem