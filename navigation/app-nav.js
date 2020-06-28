import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Search from '../Screen/appScreen/Search'
import Favorite from '../Screen/appScreen/Favorite'
import Detail from '../Screen/appScreen/Detail'
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator()
const HomepageDetailStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomepageDetailStack.Navigator initialRouteName="Home">
      <HomepageDetailStack.Screen name="Home" component={Search} options={{ headerShown: false }} />
      <HomepageDetailStack.Screen name="Detail" component={Detail} />
    </HomepageDetailStack.Navigator>
  );
}


const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 25,
          margin: 0,
          padding: 0,
        }
      }} initialRouteName="searchTab">
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  )
}
const getMyStringValue = async () => {
  try {
    console.log("sdasd: ", AsyncStorage.getItem('@username'))
    return await AsyncStorage.getItem('@username')
  } catch (e) {
    // read error
  }

  console.log('Done.')

}
const DrawerContent = () => {
  const [username, setUsername] = useState('')
  const navigation = useNavigation()
  getMyStringValue().then((res) => setUsername(res))
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello, {username}</Text>
      <Button title="Logout"
        onPress={() => navigation.navigate('AuthNavigation')} />
    </View>
  );
}
const AppNavigation = () => {
  return (
    <>
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="HomeTab" component={HomeTab} />
      </Drawer.Navigator>
    </>
  )
}

export default AppNavigation