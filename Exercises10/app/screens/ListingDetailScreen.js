import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import { Image } from 'react-native-expo-image-cache';

function ListingDetailScreen({ route }) {
    const listing = route.params;

    return (
        <View>
            <Image
                style={styles.imageStyle}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint='light'
                uri={listing.images[0].url} />
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.subTitle}>${listing.price}</Text>
                <View style={styles.userConainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title="Girish Chauhan"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailContainer: {
        padding: 20,
    },
    imageStyle: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color: colors.black
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: '600',
        fontSize: 18,
        marginVertical: 10,
    },
    userConainer: {
        marginVertical: 40,
    },


})
export default ListingDetailScreen;

//without 3rd party use
//<Image style={styles.imageStyle} source={{ uri: listing.images[0].url }} />