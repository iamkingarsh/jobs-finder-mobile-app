import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { COLORS, icons, SIZES } from '../../../constants'
import { router } from 'expo-router'

import styles from './nearbyjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hooks/useFetch'

const Nearbyjobs = () => {
  const { loading, data, error } = useFetch('search', {
    query: 'react developer jobs in india',
    num_pages: 1,
  })

  console.log(error)
  console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size='large' color={COLORS.tertiary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) :
          data.data && data.data?.map((item, index) => (
            <NearbyJobCard
              key={index}
              job={item}
            />
          ))
        }
      </View>
    </View>
  )
}

export default Nearbyjobs