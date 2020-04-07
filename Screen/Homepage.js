import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

const Home =({navigation}) => {
    return(
      <>
        <View>
          <Text>
            Homepage
          </Text>
          <Button title="Go to Details"
          onPress={() => navigation.navigate('login')}/>
        </View>
      </>
    )
  }

  export default Home