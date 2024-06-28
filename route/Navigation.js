// Navigation.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import GetStarted from '../screens/GetStarted';
import FaceIdentity from '../screens/FaceIdentity';
import CameraComponent from '../screens/CameraComponent';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Get Started" component={GetStarted} />
        <Stack.Screen name="Face Identity" component={FaceIdentity} />
        <Stack.Screen name="Camera" component={CameraComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
