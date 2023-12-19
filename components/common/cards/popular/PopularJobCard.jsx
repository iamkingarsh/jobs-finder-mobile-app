import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
// import { COLORS, icons, SIZES } from '../../../constants'
import { router, useRouter } from 'expo-router'


import styles from './popularjobcard.style'



const PopularJobCard = (item) => {
  const router = useRouter()
  const [selectedJob, setSelectedJob] = useState(null)

  const handleCardPress = (id) => {
    setSelectedJob(id)
    router.push(`/job-details/${id}`);
  }



  return (
    <TouchableOpacity onPress={() => handleCardPress(item.item.job_id)} style={styles.container(selectedJob, item.item)} >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item.item)}>
        <Image
          source={{
            uri: item.item.employer_logo ? item.item.employer_logo : 'https://via.placeholder.com/150',
          }}
          resizeMode='contain'
          style={styles.logoImage} />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.companyName}>{item.item.employer_name}</Text>
      <View style={styles.infoContainer}>

        <Text numberOfLines={1} style={styles.jobName(selectedJob, item.item)}>{item.item.job_title}</Text>
        <Text numberOfLines={1} style={styles.location}>{item.item.job_employment_type}- {item.item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard