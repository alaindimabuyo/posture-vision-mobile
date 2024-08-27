import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import MyTabs from './TabNavigation'; 
import SettingsScreen from '../screens/tab-screens/SettingScreen';
import ProfileScreen from '../screens/tab-screens/ProfileScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            props.navigation.navigate('SignIn');
          }
        }
      ],
      { cancelable: false }
    );
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image
          source={{ uri: 'https://example.com/user-profile.jpg' }} 
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={{ marginVertical: 5, fontSize: 18 }}>Side Menu</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity style={{ marginTop: 20, marginLeft: 20 }} onPress={handleLogout}>
        <Text style={{ color: 'red', fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeTabs" component={MyTabs} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;