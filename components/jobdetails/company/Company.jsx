import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'

const Company = (companyLogo, companyName, jobTitle, locationName) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={icons.company} style={styles.logoImage} />
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>React Native</Text>
      </View>
      <View style={styles.locationBox}>
        <Text style={styles.locationName}>Location</Text>
      </View>

    </View>
  )
}

export default Company