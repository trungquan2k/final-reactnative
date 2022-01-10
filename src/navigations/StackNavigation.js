import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import Profile from '../screens/Profile';
import CentreDetails from '../screens/CentreDetails';

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name='CentreDetails' component={CentreDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
