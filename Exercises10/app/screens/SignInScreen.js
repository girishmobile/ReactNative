import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import {
    AppForm,
    AppFormField,
    ErrorMessage,
    SubmitButton
} from '../components/forms'
import * as Yup from 'yup'

import authApi from '../api/auth';
import useAuth from '../auth/useAuth'
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function SignInScreen(props) {

    const useauth = useAuth();
    const loginApi = useApi(authApi.login);
    const [loginFailed, setLoginFailed] = useState(false);
    const handleSubmit = async (loginInfo) => {

        const result = await loginApi.request(loginInfo.email, loginInfo.password);
        if (!result.ok) {
            return setLoginFailed(true);
        }
        setLoginFailed(false);
        useauth.logIn(result.data);
    }
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.imagelogo}
                source={require('../assets/logo-red.png')}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon='email'
                    keyboardType="email-address"
                    name="email"
                    placeholder='Email'
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType='password'
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    imagelogo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    signview: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
})
export default SignInScreen;
/**
 HANDEL SUMIT OLD 
 const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) {
            return setLoginFailed(true);
        }
        setLoginFailed(false);
        const user = jwtDecode(result.data);
        authContext.setUser(user);
        authStorage.storeToken(result.data);

    }
 */