import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo } from '@expo/vector-icons';
import Dashboard from '../screens/DashboardScreen';
import Centres from '../screens/CentresScreen';
import More from '../screens/MoreScreen';
import { auth } from '../auth/firebase';

export default function TabNavigation({ navigation }) {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name='Dashboard' component={Dashboard} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (<Feather name="home" size={18} color={focused ? "#DB147F" : "#ACB2B8"} />),
                tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? '#DB147F' : '#ACB2B8' }}>Dashboard</Text>),
                headerShown: false
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
