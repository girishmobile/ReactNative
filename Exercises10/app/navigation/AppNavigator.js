import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import navigation from './rootNavigation';
import useNotifications from '../hooks/useNotifications';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {

    //it is a useNotification hook 
    useNotifications();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Feed"
                component={FeedNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                }} />
            <Tab.Screen
                name="ListingEdit"
                component={ListingEditScreen}
                options={({ navigation, route }) => ({
                    tabBarButton: () =>
                        <NewListingButton
                            onPress={() => navigation.navigate('ListingEdit')} />,
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons
                            name='plus-circle'
                            color={color}
                            size={size} />
                })}
            />
            <Tab.Screen
                name="AccountNavigator"
                component={AccountNavigator}
                options={{
                    headerShown: false,
                    title: 'Account',
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name='account' color={color} size={size} />
                }} />
        </Tab.Navigator>
    );
}
export default AppNavigator;