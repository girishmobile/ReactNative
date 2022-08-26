import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.backgroundImage}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title={'SignIn'}
                    onPress={() => navigation.navigate("SignIn")} />
                <AppButton
                    title={'Register'}
                    color='secondary'
                    onPress={() => navigation.navigate("Register")} />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 24,
        fontWeight: '600',
        paddingVertical: 20,
    }
})
export default WelcomeScreen;