import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import URL from '../../config'
const LOGIN_URL = URL + "/login"
const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@username', value)
    } catch (e) {
        // saving error
    }
}

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    onClickLogin = () => {
        fetch(LOGIN_URL, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())
            .then(res => {
                if (res.code === 200) {
                    storeData(username).then(
                        navigation.navigate('AppNavigation'))
                } else {
                    Alert.alert('Error!', res.message)
                }
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/windows/32/000000/username.png' }} />
                <TextInput style={styles.inputs}
                    placeholder="Username"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => setUsername(email)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/metro/26/000000/password.png' }} />
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => onClickLogin()}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => navigation.navigate('Signup')}>
                <Text>Register</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => navigation.navigate('ForgotPassword')}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});

export default LoginForm