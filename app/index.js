import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

const index = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'JobsFinder',
        })
    }, [])
  return (
    <ScrollView>
      <Text>index</Text>
    </ScrollView>
  )
}

export default index