import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo } from '@expo/vector-icons';
import Centres from '../screens/Centres';
import Dashboard from '../screens/Dashboard';
import More from '../screens/More';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name='Dashboard' component={Dashboard} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (<Feather name="home" size={18} color={focused ? "#DB147F" : "#ACB2B8"} />),
                tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? '#DB147F' : '#ACB2B8' }}>Dashboard</Text>),
                headerShown:false
            }} />
            <Tab.Screen name='Centres' component={Centres} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (<Entypo name="shop" size={18} color={focused ? "#DB147F" : "#ACB2B8"} />),
                tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? '#DB147F' : '#ACB2B8' }}>Centres</Text>)
            }} />
            <Tab.Screen name='More' component={More} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (<Entypo name="dots-three-horizontal" size={18} color={focused ? "#DB147F" : "#ACB2B8"} />),
                tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? '#DB147F' : '#ACB2B8' }}>More</Text>)
            }} />
        </Tab.Navigator>
    );
}
