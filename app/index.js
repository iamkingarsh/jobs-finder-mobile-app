import { View, Text,  ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Welcome, Nearbyjobs, Popularjobs, ScreenHeaderBtn } from '../components/'
import { useRouter, Stack } from 'expo-router'
import { COLORS, FONT, icons, images, SIZES } from '../constants'
import { StatusBar } from 'expo-status-bar'


const JobTypes = ['Full Time', 'Part Time', 'Remote']
const index = () => {
  const navigation = useNavigation()
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full Time')

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite, padding: SIZES.medium, }} >
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
          headerBlurEffect: 'light',
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
      

        <SafeAreaView
          style={{flex:1 }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </SafeAreaView>
        
      
    </ScrollView>
  )
}

export default index