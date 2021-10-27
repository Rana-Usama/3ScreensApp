import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import PasswordScreen from './app/screens/PasswordScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="PasswordScreen">
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


