import React from 'react';
import { Text, StyleSheet } from 'react-native';


function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;
    return (
        <Text style={styles.errorText}>{error}</Text>
    );
}
const styles = StyleSheet.create({
    errorText: {
        color: 'red',
    }
})
export default ErrorMessage;