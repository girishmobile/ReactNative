import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'; //Image 
import { Image } from 'react-native-expo-image-cache';
import colors from '../config/colors';
import AppText from './AppText';
function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image
                    style={styles.imageStyle}
                    tint='light'
                    preview={{ uri: thumbnailUrl }}
                    uri={imageUrl} />
                <View style={styles.detailContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailContainer: {
        padding: 20,
    },
    imageStyle: {
        width: '100%',
        height: 200,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: '700'
    }

})

export default Card;
//without react-native-expo-image-cache
//<Image style={styles.imageStyle} source={{ uri: imageUrl }} />