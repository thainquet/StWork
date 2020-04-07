import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screen/Login'
import Signup from '../Screen/Signup'

const Stack = createStackNavigator()
const AuthNavigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown : false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </>
  )
}

export default AuthNavigation