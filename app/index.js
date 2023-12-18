import { View, Text,useState, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import {Welcome, Nearbyjobs, Popularjobs} from '../components/'
import { useRouter, Stack } from 'expo-router'
import { COLORS, icons, images, SIZES } from '../constants'


const index = () => {
    const navigation = useNavigation()
    const router = useRouter()


  return (

      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
        options={{
          headerShown: true,
          title: 'JobsFinder',
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerTintColor: COLORS.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLargeTitle: true,
          headerBlurEffect: 'systemUltraThinMaterialDark',	
          headerTransparent: true,
          headerLargeTitleShadowVisible: false,



        }}
        >

      <Welcome />
      <Nearbyjobs />
      <Popularjobs />
        </Stack.Screen>
      </SafeAreaView>
   
  )
}

export default index