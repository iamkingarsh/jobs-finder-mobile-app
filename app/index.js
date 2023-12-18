import { View, Text,  ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Welcome, Nearbyjobs, Popularjobs, ScreenHeaderBtn } from '../components/'
import { useRouter, Stack } from 'expo-router'
import { COLORS, FONT, icons, images, SIZES } from '../constants'


const index = () => {


  return (
    <SafeAreaView
      
    style={{ flex: 1, backgroundColor: COLORS.lightWhite,  }} >
       <Stack.Screen
        options={{
          headerShown: true,
          title: 'JobsFinder',
          headerStyle: {
            backgroundColor: COLORS.tertiary,
            
          },
          headerTintColor: COLORS.lightWhite,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: FONT.bold,
          },
          headerLargeTitle: true,
          headerBlurEffect: 'dark',
          headerTransparent: true,
          headerLargeTitleShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn dimension='60%' iconUrl={icons.menu} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn dimension='80%' iconUrl={images.profile} />

          ),
         
        }}
      />
      

        <ScrollView
          style={{flex:1, padding: SIZES.medium }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </ScrollView>
        
      
    </SafeAreaView>
  )
}

export default index