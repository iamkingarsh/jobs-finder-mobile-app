import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = (title, points) => {
  console.log(points)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title.title}</Text>
      <View style={styles.pointsContainer}>

        {points?.points ?
          points?.points?.map((item, index) => (

            <View style={styles.pointWrapper}>
              <View style={styles.pointDot}></View>
              <Text style={styles.point}>{item}</Text>

            </View>
          ))
          :
          <Text style={styles.point}>Not Specified</Text>

        }
      </View>
    </View>
  )
}

export default Specifics