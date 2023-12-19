import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'

import styles from './footer.style'
import { COLORS, icons } from '../../../constants'

const Footer = (url) => {
  console.log(url.url)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeBtn}>
        <Image
          tintColor={COLORS.tertiary}
          source={icons.heart}
          style={styles.likeBtnImage} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL(url.url)}
        style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Apply</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer