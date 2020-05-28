import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Search from '../Screen/appScreen/Search'
import Favorite from '../Screen/appScreen/Favorite'
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Detail = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Search')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="searchTab" component={HomeStackScreen} />
      <Tab.Screen name="favoriteTab" component={Favorite} />
    </Tab.Navigator>
  )
}

const DrawerContent = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer content</Text>
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