import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='plus-circle'
                    color={colors.white}
                    size={35}
                />
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 35, //half of the size to make circle
        borderWidth: 8,
        bottom: 20,
        height: 70,
        justifyContent: 'center',
        width: 70,
    }
})
export default NewListingButton;