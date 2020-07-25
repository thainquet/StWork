import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert
} from 'react-native';
import URL from '../../config'
import axios from 'axios'
const FORGOT_URL = URL + "/forgotPass"
import { useNavigation } from '@react-navigation/native';


const ForgotPassword = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    handleClick = async () => {
        try {
            let res = await axios.post(FORGOT_URL, JSON.stringify({
                username: username,
                email: email
            }))
            if (res.data.code !== 200) {
                console.log("Error!", res)
            } else {
                navigation.goBack()
            }
        } catch (e) {
            console.log("caught:", e)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Tên tài khoản"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={handleClick}>
                <Text style={styles.loginText}>Xác nhận</Text>
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

export default ForgotPassword