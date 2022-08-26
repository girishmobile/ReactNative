import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import AppText from '../AppText';
function ListItem({
    image,
    title,
    subTitle,
    IconComponent,
    onPress,
    renderRightActions
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.imageStyle} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText
                            style={styles.titleStyle}
                            numberOfLines={1} >
                            {title}
                        </AppText>
                        {subTitle && (
                            <AppText
                                style={styles.subTilteStyle}
                                numberOfLines={2}>
                                {subTitle}
                            </AppText>)}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    imageStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        // marginRight: 10,
    },
    subTilteStyle: {
        color: colors.medium,
        fontSize: 17,

    },
    titleStyle: {
        fontWeight: '500',
        fontSize: 18,

    },
})
export default ListItem;