import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color={'white'} size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color={'white'} size={35} />
            </View>
            <Image
                style={styles.imageContianer}
                resizeMode='contain'
                source={require('../assets/chair.jpg')} />
            <View style={{ height: 100, width: 100, backgroundColor: 'dodgerblue' }}>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    },
    imageContianer: {
        width: '100%',
        height: '100%'
    }

})
export default ViewImageScreen;