import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import HeaderWithSearch from '../headers/HeaderWithSearch';
import { Icon } from 'react-native-elements';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderWithSearch navigation={navigation} title="Settings" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Account Management */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="user-circle" type="font-awesome" size={24} color="#2441C7" />
          </View>
          <Text style={styles.settingText}>Account Management</Text>
          <Icon name="chevron-right" type="font-awesome" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="bell" type="font-awesome" size={24} color="#2441C7" />
          </View>
          <Text style={styles.settingText}>Notifications</Text>
          <Icon name="chevron-right" type="font-awesome" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Privacy */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="shield" type="font-awesome" size={24} color="#2441C7" />
          </View>
          <Text style={styles.settingText}>Privacy</Text>
          <Icon name="chevron-right" type="font-awesome" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Language */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="globe" type="font-awesome" size={24} color="#2441C7" />
          </View>
          <Text style={styles.settingText}>Language</Text>
          <Icon name="chevron-right" type="font-awesome" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Help & Support */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="question-circle" type="font-awesome" size={24} color="#2441C7" />
          </View>
          <Text style={styles.settingText}>Help & Support</Text>
          <Icon name="chevron-right" type="font-awesome" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* About */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="info-circle" type="font-awesome" size={24} color="#2441C7" />
          </View>
          <Text style={styles.settingText}>About</Text>
          <Icon name="chevron-right" type="font-awesome" size={20} color="#ccc" />
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="sign-out" type="font-awesome" size={24} color="#FF6961" />
          </View>
          <Text style={[styles.settingText, { color: '#FF6961' }]}>Logout</Text>
          <Icon name="chevron-right" type="font-awesome" size={20} color="#ccc" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#2441C7',
  },
});

export default SettingsScreen;