import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './footer.style'
import { COLORS, icons } from '../../../constants'

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          tintColor={COLORS.tertiary}
          source={icons.like}
          style={styles.likeBtnImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Apply</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer