import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screen/authenScreen/Login'
import Signup from '../Screen/authenScreen/Signup'
import ForgotPass from '../Screen/authenScreen/ForgotPassword'

const Stack = createStackNavigator()
const AuthNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{title: 'Register new account'}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPass} options={{title: 'Re-gen my password'}} />
      </Stack.Navigator>
    </>
  )
}

export default AuthNavigation