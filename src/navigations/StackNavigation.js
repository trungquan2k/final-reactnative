import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import CentreDetails from '../screens/CentreDetailsScreen';
import Profile from '../screens/ProfileScreen';
import CenterContext from '../context/CenterContext';
import { loadAllCenter } from '../../services';

export default function StackNavigation() {
    const [centers, setCenters] = useState([]);
    useEffect(async () => {
        const getCenters = await loadAllCenter();
        setCenters([...getCenters]);
    }, []);  
    const Stack = createStackNavigator();
    return (
        <CenterContext.Provider value={centers} >
            <NavigationContainer>
                <Stack.Navigator initialRouteName="TabNavigation">
                    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Auth' component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
                    <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
                    <Stack.Screen name='CentreDetails' component={CentreDetails} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </CenterContext.Provider>
    );
}
