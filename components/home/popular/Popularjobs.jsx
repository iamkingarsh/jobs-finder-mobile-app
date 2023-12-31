import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { COLORS, icons, SIZES } from '../../../constants'
import { router } from 'expo-router'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useFetch } from '../../../hooks/useFetch'
import styles from './popularjobs.style'

const Popularjobs = () => {


  const { loading, data, error } = useFetch('search', {
    query: 'popular jobs ',
    num_pages: 1,
  })





  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size='large' color={COLORS.tertiary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data.data}
            keyExtractor={(item) => item.job_id}
            renderItem={(item) =>
              <PopularJobCard
                item={item.item}

              />
            }
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs