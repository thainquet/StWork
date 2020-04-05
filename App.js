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
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { LoginForm } from './components/Login'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.logoField}>
            <Image style={styles.HomeIcon} source={require('./static/img/homeIcon.jpg')} />
            </View>
            <LoginForm />
          </View>
        </ScrollView>
      </SafeAreaView>
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
});

export default App;
