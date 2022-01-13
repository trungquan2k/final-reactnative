import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import CentreDetails from '../screens/CentreDetailsScreen';
import Profile from '../screens/ProfileScreen';
import { auth } from '../auth/firebase';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function StackNavigation() {
    const Stack = createStackNavigator();
    console.log(auth.currentUser)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth'>
                <Stack.Screen name='Auth' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name='CentreDetails' component={CentreDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
