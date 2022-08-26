import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from '../screens/SignInScreen';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Register" component={SignUpScreen} />
    </Stack.Navigator>
)
export default AuthNavigator;
