import { View, Text, SafeAreaView, ScrollView, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import { COLORS, FONT, SIZES, icons } from '../../constants'
import styles  from '../../styles/search'

const search = () => {
    const params = useGlobalSearchParams()
    const query = params.id
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1){
            setPage(page - 1);
        } else if (direction === 'right'){
            setPage(page + 1);
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
                       
                        fontFamily: FONT.medium,
                    },
                        headerBackTitle: 'Back',
                        headerLargeTitle: true,
                        headerLargeTitleStyle: [styles.searchTitle, {color: COLORS.white}],
                    headerBlurEffect: 'dark',
                    headerTransparent: true,
                    headerLargeTitleShadowVisible: false,
                    
                }
            }
        />
        <ScrollView >

            <FlatList 
            data={[1,2,3,4,5,6,7,8,9,10]}
            renderItem={({item}) => (
                <View style={{backgroundColor: COLORS.lightGray, marginVertical: SIZES.small, padding: SIZES.medium, borderRadius: SIZES.small}}>
                    <Text style={{fontFamily: FONT.bold, fontSize: SIZES.h3}}>Job Title</Text>
                    <Text style={{fontFamily: FONT.regular, fontSize: SIZES.body4}}>Company Name</Text>
                    <Text style={{fontFamily: FONT.regular, fontSize: SIZES.body4}}>Location</Text>
                </View>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{padding: SIZES.medium, rowGap: SIZES.medium}}
            ListHeaderComponent={() => (
                <>
                <View style={styles}>
                    {/* <Text style={styles.searchTitle}>Search Results for {query}</Text> */}
                    <Text style={styles.noOfSearchedJobs}>10 opportunities jobs found</Text>
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
        </ScrollView>
    </SafeAreaView>
  )
}

export default search