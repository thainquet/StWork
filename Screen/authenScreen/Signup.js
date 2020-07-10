import React, { Component, useState } from 'react';
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
import { PROD_URL } from '../../config'
import axios from 'axios'
import URL from '../../config'
const SIGNUP_URL = URL + "/register"

const SignupForm = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState()
    const [pw, setPw] = useState()
    const [username, setUsername] = useState()

    handleClick = async () => {
        try {
            let res = await axios.post(SIGNUP_URL, JSON.stringify({
                username: username,
                email: email,
                password: pw
            }))
            if (res.data.code !== 200) {
                Alert.alert("Error!", res.data.message)
            } else {
                navigation.push('Login')
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="username"
                    underlineColorAndroid='transparent'
                    onChangeText={(username) => setUsername(username)}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => setPw(password)}
                />
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={handleClick}>
                <Text style={styles.loginText}>Confirm</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => navigation.navigate('Login')}>
                <Text>account exist? Log in here..</Text>
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

export default SignupForm