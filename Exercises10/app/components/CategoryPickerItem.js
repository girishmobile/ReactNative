import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

//PickerItem same as CategoryPicketItem
function CategoryPickerItem({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.lable}>{item.label}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    lable: {
        marginTop: 5,
        textAlign: 'center'
    }
})
export default CategoryPickerItem;