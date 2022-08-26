import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native'

import Screen from '../components/Screen';
import * as Yup from 'yup';
import {
    AppForm,
    AppFormField,
    ErrorMessage,
    SubmitButton
} from '../components/forms'
import authApi from '../api/auth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen(props) {
    const [loginFailed, setLoginFailed] = useState(false);
    // we can get data from onSubmit form event and distructer it 

    const handleSubmit = async ({ email, password }) => {

        const result = await authApi.login(email, password);
        if (!result.ok) {
            //when login not success
            return setLoginFailed(true);
        }
        setLoginFailed(false); //when successfull login
        console.log(result.data);
    }
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.imagelogo}
                source={require('../assets/logo-red.png')}
            />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={'Invalid email and/or password'} visible={loginFailed} />
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
    );
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
    } 
});
export default LoginScreen;

//text => setEmail(text)
//{ handleChange, handleSubmit, errors, setFieldTouched, touched }