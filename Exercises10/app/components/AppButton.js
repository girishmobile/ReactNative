import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    textStyle: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: '600'
    }
})
export default AppButton;