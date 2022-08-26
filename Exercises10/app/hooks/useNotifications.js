import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
//for API
import expoPushTokensApi from '../api/expoPushTokens';

export default useNotifications = (notificationListener) => {

    useEffect(() => {
        registerForPushNotifications();
        // Notifications.addNotificationReceivedListener((notificationListener) => {

        // });
        if (notificationListener) Notifications.addListener(notificationListener)

    }, []);
    const registerForPushNotifications = async () => {
        let token;
        if (Device.isDevice) {
            try {
                const { status: existingStatus } = await Notifications.getPermissionsAsync();
                let finalStatus = existingStatus;
                if (existingStatus !== 'granted') {
                    const { status } = await Notifications.requestPermissionsAsync();
                    finalStatus = status;
                }
                if (finalStatus !== 'granted') {
                    alert('Failed to get push token for  push notification!');
                    return;
                }
                token = (await Notifications.getExpoPushTokenAsync()).data;
                expoPushTokensApi.register(token);
            } catch (error) {
                console.log('Error getting a push token', error);
            }
        }
        else {
            alert('Must use physical device for Push Notifications');
        }
    }
}