import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

const Search =({navigation}) => {
    return(
      <>
        <View>
          <Text>
            Homepage
          </Text>
          <Button title="Logout"
          onPress={() => navigation.navigate('AuthNavigation')}/>
        </View>
      </>
    )
  }

  export default Search