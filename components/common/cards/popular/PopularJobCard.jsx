import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
// import { COLORS, icons, SIZES } from '../../../constants'
import { router, useRouter } from 'expo-router'


import styles from './popularjobcard.style'


const PopularJobCard = (item, selectedJob, handleCardPress) => {




  return (
    <TouchableOpacity onPress={() => handleCardPress(item.job_id)} style={styles.container(selectedJob, item.item)} >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item.item)}>
        <Image
          source={{ uri: item.item.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage} />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.companyName}>{item.item.employer_name}</Text>
      <Text numberOfLines={1} style={styles.jobName(selectedJob, item.item)}>{item.item.job_title}</Text>
      <Text numberOfLines={1} style={styles.jobType(selectedJob, item.item)}>{item.item.job_employment_type}</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard