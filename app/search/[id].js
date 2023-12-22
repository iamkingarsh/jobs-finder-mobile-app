import { View, Text, SafeAreaView, ScrollView, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import { COLORS, FONT, SIZES, icons } from '../../constants'
import styles  from '../../styles/search'
import useFetch from '../../hooks/useFetch'
import { NearbyJobCard } from '../../components'
import axios from 'axios'

const search = () => {
    const params = useGlobalSearchParams()
    const query = params.id
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    useEffect(() => {
        handleSearch()
    }, [])
      

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1){
            setPage(page - 1);
            handleSearch()
        } else if (direction === 'right'){
            setPage(page + 1);
            handleSearch()
        }
    }
    
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite,  }} >
        <Stack.Screen
            options={
                {
                    headerShown: true,
                    title: 'Search Results for ' + query ,
                    
                    headerStyle: {
                        backgroundColor: COLORS.tertiary,
                    },
                    headerTintColor: COLORS.white,
                    headerTitleStyle: {
                       
                        fontFamily: FONT.bold,
                    },
                        headerBackTitle: 'Back',
                        headerLargeTitle: true,
                        headerLargeTitleStyle: [styles.searchTitle, {color: COLORS.white, fontFamily: FONT.bold}],
                    headerBlurEffect: 'dark',
                    headerTransparent: true,
                    headerLargeTitleShadowVisible: false,
                    
                }
            }
        />

            <FlatList 
            data={searchResult}
            renderItem={({item}) => (
                <NearbyJobCard job={item}  />
            )}
            keyExtractor={item => item.job_id}
            contentContainerStyle={{padding: SIZES.medium, rowGap: SIZES.medium}}
            ListHeaderComponent={() => (
                <>
                <View style={styles}>
                    {/* <Text style={styles.searchTitle}>Search Results for {query}</Text> */}
                    <Text style={styles.noOfSearchedJobs}>{searchResult?.length} opportunities jobs found</Text>
                </View>
                <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.tertiary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={
                               [ styles.paginationButton, {opacity: page === 1 ? 0.2 : 1}]
                            }
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />

    </SafeAreaView>
  )
}

export default search
