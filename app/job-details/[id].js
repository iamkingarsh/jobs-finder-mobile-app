import { View, Text, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import {useCallback, useState} from 'react'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { COLORS, FONT, SIZES } from '../../constants'

import { Company, JobAbout, JobFooter, JobTabs, Specifics } from '../../components'
import useFetch from '../../hooks/useFetch'

const JobDetails = () => {
    const params = useGlobalSearchParams()
    const router = useRouter()

    const id = params.id
   
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    const {data, loading, error} = useFetch('job-details', {job_id: id})
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite,  }} >
    <Stack.Screen
        options={{
          headerShown: true,
          title: 'Job Details',
          headerStyle: {
            backgroundColor: COLORS.secondary,
            
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: FONT.bold,
          },
          headerLargeTitle: true,
          headerBlurEffect: 'light',
          headerTransparent: true,
          headerLargeTitleShadowVisible: false,
         
        }}
        />
        <ScrollView
         showsVerticalScrollIndicator={false}
         refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
         }
        >
          {  loading ? (
            <ActivityIndicator size="large" color={COLORS.tertiary} />
          ) : error ? (
            <Text>Something went wrong...</Text>
            ) : data?.length === 0 ? (
            <Text>No data found</Text>
            ) :
            (
            <View style={{padding: SIZES.medium, paddingBottom:100}}>

            <Company
                companyLogo={data.data.data[0].employer_logo}
                jobTitle={data.data[0].job_title}
                companyName={data.data[0].employer_name}
                location={data.data[0].job_country}

            />
            <JobTabs
            />
            <JobAbout />
            <Specifics />
       

            {/* <JobFooter /> */}
            
          
            </View>)
            }
        </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails