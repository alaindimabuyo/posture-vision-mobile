// Navigation.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import GetStarted from '../screens/GetStarted';
import FaceIdentity from '../screens/FaceIdentity';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="FaceIdentity" component={FaceIdentity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
