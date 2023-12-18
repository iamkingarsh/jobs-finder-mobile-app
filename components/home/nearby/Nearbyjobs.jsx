import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { COLORS, icons, SIZES } from '../../../constants'
import { router } from 'expo-router'

import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  return (
    <View style={styles.container}>
      <Text>Nearbyjobs</Text>
    </View>
  )
}

export default Nearbyjobs