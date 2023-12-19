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
    const tabs = ['About', 'Qualifications', 'Responsibilities', 'Benefits']
    
    const [activeTab, setActiveTab] = useState(tabs[0])
    const [refreshing, setRefreshing] = useState(false);

 

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const { data, loading, error, refetch } = useFetch("job-details", {
        job_id: id,
      });

    
      
      const displayTabContent = () => {
        switch (activeTab) {
          case 'About':
            return <JobAbout about={data?.data[0]?.job_description} />
         case  'Qualifications':
            return <Specifics title='Qualifications' points={data?.data[0]?.job_highlights?.qualifications} />
          case 'Responsibilities':
            return <Specifics title='Responsibilities' specifics={data?.data[0]?.job_highlights?.Responsibilities} />
          case 'Benefits':
            return <Specifics title='Benefits' specifics={data?.data[0]?.job_highlights?.Benefits} />
          default:
            return <JobAbout about={data?.data[0]?.job_description} />
        }
      }

    // console.log(data.data[0].employer_name)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite,  }} >
    <Stack.Screen
        options={{
          headerShown: true,
          title:  data?.data ? data?.data[0]?.job_title : 'JobsFinder',
          headerStyle: {
            backgroundColor: COLORS.secondary,
            
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: FONT.bold,
          },
          headerLargeTitle: true,
          // headerBackTitleVisible: false,
          headerBackTitle: 'Back',
          headerBlurEffect: 'light',
          headerTransparent: true,
          headerLargeTitleShadowVisible: false,
         
        }}
        />
         <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {loading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data?.data === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data?.data[0]?.employer_logo}
                jobTitle={data?.data[0]?.job_title}
                companyName={data?.data[0]?.employer_name}
                location={data?.data[0]?.job_country}
                jobType = {data?.data[0]?.job_employment_type}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={ setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter url={data?.data ? data?.data[0]?.job_google_link : 'https://careers.google.com/jobs/results/'} />
      </>
    </SafeAreaView>
  )
}

export default JobDetails