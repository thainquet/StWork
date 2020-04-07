import React from 'react';
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