import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
// import { COLORS, icons, SIZES } from '../../../constants'
import { router } from 'expo-router'


import styles from './popularjobcard.style'

const PopularJobCard = (item, selectedJob, handleCardPress) => {
  return (
    <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.container(selectedJob, item)} >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.companyName}>{item.employer_name}</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard