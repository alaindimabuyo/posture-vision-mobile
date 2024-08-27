import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screens/tab-screens/HomeScreen';
import UserHistoryScreen from '../screens/tab-screens/UserHistoryScreen';
import FaceIdentity from '../screens/FaceIdentity'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = {
            Home: 'home',
            Profile: 'user',
            Settings: 'cogs',
            'User History': 'history',
            'Face Identity': 'face'
          }[route.name];

          const iconType = route.name === 'Face Identity' ? 'material' : 'font-awesome';


          return <Icon name={iconName} type={iconType} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2441C7',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#FFFFFF', '#EAECF8']}
            style={{ flex: 1 }}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="User History" component={UserHistoryScreen} />
      <Tab.Screen name="Face Identity" component={FaceIdentity} />
    </Tab.Navigator>
  );
}

export default MyTabs;