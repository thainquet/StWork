import React from 'react';
import AuthNavigation from './auth-nav'
import AppNavigation from './app-nav'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const AppContainer = () => {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="App">
                    <Drawer.Screen name="AuthNavigation" component={AuthNavigation}/>
                    <Drawer.Screen name="AppNavigation" component={AppNavigation}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppContainer 