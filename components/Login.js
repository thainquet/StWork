// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';

// export const Example = () => {
//   const [foo, setFoo] = useState(30);

//   useEffect(() => {
//     if (foo >= 42) {
//       setFoo(42);
//     }
//   }, [foo])

//   return (
//     <View>
//       <Text>Foo is {foo}.</Text>
//       <Button onPress={() => setFoo(foo + 1)} title='Increase Foo!' />
//     </View>
//   )
// }
import React, { Component } from 'react';
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


export const LoginForm = () => {

    handleClick = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/windows/32/000000/username.png' }} />
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                //   onChangeText={(email) => this.setState({email})}
                />
            </View>

            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/metro/26/000000/password.png' }} />
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                //   onChangeText={(password) => this.setState({password})}
                />
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => handleClick('login')}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => handleClick('restore_password')}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => handleClick('register')}>
                <Text>Register</Text>
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