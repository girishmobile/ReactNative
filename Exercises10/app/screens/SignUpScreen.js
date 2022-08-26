import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';

import usersApi from '../api/register'; // for new registration
import useAuth from '../auth/useAuth'; // store auth token
import authApi from '../api/auth'; // for login 
import useApi from '../hooks/useApi'; //for api hook


import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});
function SignUpScreen(props) {

    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login)
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {

        //registerApi.request to call server API
        const result = await registerApi.request(userInfo);
        console.log(result.data);
        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }
        // if successfully register then we use login functionality
        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken);

    }
    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
                    <AppFormField
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Name"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Register" />
                </AppForm>
            </Screen>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
export default SignUpScreen;