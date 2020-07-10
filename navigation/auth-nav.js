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
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{
          title: 'Tạo tài khoản mới',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPass} options={{
          title: 'Lấy lại mật khẩu',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </>
  )
}

export default AuthNavigation