import React from 'react';
import { FlatList, StyleSheet, Text, Button } from 'react-native';
import { useState, useEffect } from 'react';
import ActivityIndicator from '../components/ActivityIndicator';

import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
//server api
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {

    // only pass function refrence not function call  if you want to function call put () after function
    //const { data: listings, error, loading,  request: loadListings } = useApi(listingsApi.getListings);
    const { data, error, loading, request: loadListings } = useApi(listingsApi.getListings);
    useEffect(() => {
        loadListings();
    }, []);
    const [refreshing, setRefreshing] = useState(false);
    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && <>
                    <Text>Couldn't retrive the listing</Text>
                    <Button title="Retry" onPress={loadListings} />
                </>}
                <FlatList
                    data={data}
                    keyExtractor={listItem => listItem.id.toString()}
                    renderItem={({ item }) =>
                        < Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}

                        />
                    }
                    refreshing={refreshing}
                    onRefresh={() =>
                        loadListings()
                    }
                />
            </Screen>
        </>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})
export default ListingsScreen;

//  // const [listings, setListings] = useState([]);
//     // const [error, setError] = useState(false);
//     // const [loading, setLoading] = useState(false);
//     const loadListings = async () => {
//         setLoading(true);
//         const response = await listingsApi.getListings();
//         setLoading(false);

//         if (!response.ok) {
//             setError(true);
//             return;
//         }
//         setError(false);
//         setListings(response.data);
//     }

//GET AND SET ASYNC DATA 
    //AsyncStorage the data maximum it storafe 6 MB
    // const demo = async () => {
    //     try {
    //         await AsyncStorage.setItem('person', JSON.stringify({ id: 1, username: 'Girish' }));
    //         const value = await AsyncStorage.getItem('person');
    //         const person = JSON.parse(value);
    //         console.log(person);

    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // }
    // demo();