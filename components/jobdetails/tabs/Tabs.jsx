import React from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'
import { TouchableOpacity } from 'react-native'

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}


const Tabs = (tabs, activeTab, setActiveTab) => {

  console.log(activeTab)
  console.log(tabs.activeTab)
  // console.log(tabs.setActiveTab)
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs.tabs}
        renderItem={(item) => (
          <TabButton
            name={item.item}
            activeTab={tabs.activeTab}
            onHandleSearchType={() => tabs.setActiveTab(item.item)}
          />
        )}
        horizontal
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}

      />


    </View>
  )
}

export default Tabs