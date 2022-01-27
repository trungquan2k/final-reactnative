import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import CentreDetails from '../screens/CentreDetailsScreen';
import Profile from '../screens/ProfileScreen';
import CenterContext from '../context/CenterContext';
import { getFeatures, loadAllCenter } from '../../services';
import AddCenterScreen from '../screens/AddCenterScreen';

export default function StackNavigation() {
    const [centers, setCenters] = useState([]);
    const [features, setFeatures] = useState([]);

    useEffect(async () => {
        const getCenters = await loadAllCenter();
        setCenters([...getCenters]);
    }, []);
    useEffect(async () => {
        const features= await getFeatures();
        setFeatures([...features])
    }, [setFeatures]);    
    const Stack = createStackNavigator();
    return (
        <CenterContext.Provider value={{centers:[centers,setCenters],features:[features,setFeatures]}} >
            <NavigationContainer>
                <Stack.Navigator initialRouteName="TabNavigation">
                    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Auth' component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
                    <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
                    <Stack.Screen name='CentreDetails' component={CentreDetails} options={{ headerShown: false }} />
                    <Stack.Screen name='AddCenter' component={AddCenterScreen} options={{headerShown:false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </CenterContext.Provider>
    );
}
