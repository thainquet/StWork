import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Home from '../Screen/Homepage'

const Stack = createStackNavigator()
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import { useNavigation } from '@react-navigation/native';

function DrawerContent() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer content</Text>
      <Button title="Logout"
        onPress={() => {
          navigation.navigate('AuthNavigation')
        }} />
    </View>
  );
}
const AppNavigation = () => {
  return (
    <>
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </>
  )
}

export default AppNavigation