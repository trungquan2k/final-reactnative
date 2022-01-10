import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import Profile from '../screens/Profile';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator >
                {/* <Stack.Screen name='Auth' component={LoginScreen} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ headerShown: false }} /> */}
                <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />   
            </Stack.Navigator>
        </NavigationContainer>
    );
}
