
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DestinationScreen from '../screens/DestinationScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name='Welcome' options={{ headerShown: false }} component={WelcomeScreen} />
                <Stack.Screen name='Destination' options={{ headerShown: false }} component={DestinationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}