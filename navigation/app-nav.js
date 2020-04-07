import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screen/Homepage'

const Stack = createStackNavigator()
const AppNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </>
  )
}

export default AppNavigation