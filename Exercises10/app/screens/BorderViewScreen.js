import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import AppText from '../components/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';

export default function BorderViewScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.tetxStyle}>Border Layout</Text>
            <View style={styles.borderStyle}></View>
            <Text style={styles.tetxStyle}>Shadows Layout</Text>
            <View style={styles.shadowStyle}></View>
            <Text style={styles.tetxStyle}>Padding and Margin Layout</Text>
            <View style={styles.paddingStyle}>
                <View style={{ backgroundColor: 'gold', width: 50, height: 50 }}></View>
            </View>
            {/* <View style={{ backgroundColor: 'tomato', width: 100, height: 100, margin: 20 }}></View> */}
            <AppText>This is</AppText>
            <MaterialCommunityIcons name='email' size={60} color={'dodgerblue'} />
            <AppButton title={'login'} onPress={() => console.log('button tapped')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tetxStyle: {
        padding: 10,
        fontSize: 15,
        fontWeight: '500',
        color: 'tomato',
        fontStyle: 'italic',
        textTransform: 'capitalize',
        textDecorationLine: 'line-through'
    },
    borderStyle: {
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'royalblue',
        borderRadius: 50,
    },
    shadowStyle: {
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        shadowColor: 'grey',
        shadowOffset: { height: 10, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 20, // for Android
    },
    paddingStyle: {
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        padding: 20,
        paddingHorizontal: 10,
        paddingLeft: 30,
    }
})
