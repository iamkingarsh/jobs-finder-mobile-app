import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Linking, Modal } from 'react-native'
import InAppBrowser, { InAppBrowserOptions } from "react-native-inappbrowser-reborn";
import styles from './footer.style'
import { COLORS, icons } from '../../../constants'
import { WebView } from 'react-native-webview'



const Footer = (url) => {
  const [visible, setVisible] = useState(false)
  const openLinkInWebView = () => setVisible(true)

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
        onPress={() => openLinkInWebView()}
        style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Apply</Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        animationType='slide'
        collapsable={true}
        presentationStyle='pageSheet'
      >
        <WebView
          source={{ uri: url.url }}
        />
      </Modal>
    </View>
  )
}

export default Footer