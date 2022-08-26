import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

import colors from '../config/colors';
import AppText from './AppText';

function OfflineNotice(props) {
    const netInfo = useNetInfo();
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>No Internet Connection</Text>
            </View>
        );
    }
    return null;
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 50,
        position: 'absolute', // for top 
        top: Constants.statusBarHeight,
        width: "100%",
        zIndex: 1, //it bring componet to top one 
    },
    textStyle: {
        color: colors.white,
        fontSize: 16,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",

    }

})
export default OfflineNotice;
