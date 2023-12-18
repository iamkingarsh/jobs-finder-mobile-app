import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, icons, SIZES } from '../../../constants'

import styles from './welcome.style'

const jobTypes = ['Full Time', 'Part Time', 'Internship', 'Freelance']


const Welcome = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  const [activeJobType, setActiveJobType] = useState('Full Time')

  return (
    <View>
      <View style={[styles.container, { marginTop: SIZES.medium }]}>
        <Text style={styles.userName}>Welcome Arshad!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="What are you looking for?"
            placeholderTextColor={COLORS.gray}
            cursorColor={COLORS.tertiary}

            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.tabsContainer}>

        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome