import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './nearbyjobcard.style'
import { useRouter } from 'expo-router'

const NearbyJobCard = (job) => {
  const router = useRouter()

  const handleCardPress = (id) => {
    router.push(`/job-details/${id}`);
  };

  return (
    <TouchableOpacity
      onPress={() => handleCardPress(job.job.job_id)}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: job.job.employer_logo,
          }}
          resizeMode='contain'
          style={styles.logImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{job.job.job_title}  ({job.job.job_employment_type})</Text>
        <Text style={styles.jobType}>{job.job.job_city && job.job.job_city} {job.job.job_city && '-'} {job.job.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard