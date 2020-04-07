import React from 'react';
import { createAppContainer } from '@react-navigation/native'
import AuthNavigation from './auth-nav'
import { NavigationContainer } from '@react-navigation/native';

const AppContainer = () => {
    return (
        <>
            <NavigationContainer>
                <AuthNavigation />
            </NavigationContainer>
        </>
    )
}

export default AppContainer 