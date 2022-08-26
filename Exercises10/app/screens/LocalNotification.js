import React from 'react';
import { Button, View, SafeAreaView, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

function LocalNotification(props) {
    const showNotification = () => {

        Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body',
                data: { data: 'goes here' }
            },
            trigger: { seconds: 4 }

        })
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button

                    title='send local notification'
                    onPress={showNotification} />
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
export default LocalNotification;
/**
 *  Notifications.presentLocalNotificationAsync({
            title: 'Congratulations',
            body: 'Your order was successfully placed!',
            data: {
                _displayInForeground: true
            }
        })
        time: new Date().getTime() +2000 (two second)
 */