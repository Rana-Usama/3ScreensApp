import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import PasswordScreen from './app/screens/PasswordScreen';
import EmailScreen from './app/screens/EmailScreen';
import UserNameScreen from './app/screens/UserNameScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} />
        <Stack.Screen name="UserNameScreen" component={UserNameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


