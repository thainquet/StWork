/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginForm } from './components/Login'
import { Homepage } from './Screen/Homepage'

const Stack = createStackNavigator()

let isLogin = false
const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.logoField}>
            <Image style={styles.HomeIcon} source={require('./static/img/homeIcon.jpg')} />
          </View>
          <View style={styles.titleField}>
            <Text style={styles.titleText}>Work for Student</Text>
          </View>
          <LoginForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const Home = ({ navigation }) => {
  return (
    <>
      <Homepage/>
    </>
  )
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#DCDCDC',
    height: 1000,
  },
  body: {
    backgroundColor: '#DCDCDC',
  },
  logoField: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomeIcon: {
    marginTop: 20,
    marginBottom: 20,
    width: 150,
    height: 150,
  },
  titleField: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: 20
  }
});

export default App;
