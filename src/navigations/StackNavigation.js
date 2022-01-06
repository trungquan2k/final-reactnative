import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "black",
    headerBackTitle: "Back",
    // headerShown: false
};

const AuthStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            /> 
             <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{
                    // headerShown: false,
                }}
            />     
        </Stack.Navigator>
    )
}


export default AuthStackNavigation