import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import PasswordScreen from './app/screens/PasswordScreen';
import EmailScreen from './app/screens/EmailScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="EmailScreen">
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


