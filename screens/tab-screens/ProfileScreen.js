import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import HeaderWithSearch from '../headers/HeaderWithSearch';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = ({ navigation }) => {

  const birthday = new Date(1990, 5, 15); // Sample birthday date: June 15, 1990

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <View style={styles.container}>
      <HeaderWithSearch navigation={navigation} title="Profile" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with the actual image URL or require your local image
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileId}>#5</Text>
            <Text style={styles.profileName}>Jane Smith</Text>
            <Text style={styles.profileDetails}>Patient • San Francisco, CA</Text>
            <View style={styles.badgesContainer}>
              <View style={styles.badge}>
                <Icon name="briefcase" type="font-awesome" size={16} color="black" />
                <Text style={styles.badgeText}>Software Developer</Text>
              </View>
              <View style={styles.badge}>
                <Icon name="map-marker" type="font-awesome" size={16} color="black" />
                <Text style={styles.badgeText}>San Francisco Company</Text>
              </View>
            </View>
          </View>
          <View style={styles.editProfileContainer}>
          <TouchableOpacity style={[styles.button, {height: 50}]}>
            <LinearGradient
              colors={['#2441C7', '#1F1E1F']}
              style={styles.gradientEditProfile}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.logoutText}>Edit Profile</Text>
            </LinearGradient>
          </TouchableOpacity>
            <View style={styles.birthdayContainer}>
              <Text style={styles.birthdayLabel}>Birthday</Text>
              <Text style={styles.birthdayText}>{formatDate(birthday)}</Text>
            </View>
          </View>
        </View>

        {/* Username and Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username:</Text>
          <TextInput style={styles.input} placeholder="username" value="username" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput style={styles.input} placeholder="********" secureTextEntry />
          <TouchableOpacity style={styles.changePasswordButton}>
            <Text style={styles.changePasswordText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Details */}
        <View style={styles.contactDetailsContainer}>
          <Text style={styles.contactHeader}>CONTACT DETAILS</Text>
          <Text style={styles.contactEmail}>test@gmail.com</Text>
          <Text style={styles.contactLabel}>EMAIL ADDRESS</Text>
          <Text style={styles.contactPhone}>512-555-6423</Text>
          <Text style={styles.contactLabel}>PHONE NUMBER</Text>
          <View style={styles.socialLinksContainer}>
            <Icon name="google" type="font-awesome" size={24} color="#000" style={styles.socialIcon} />
            <Icon name="instagram" type="font-awesome" size={24} color="#000" style={styles.socialIcon} />
            <Icon name="facebook" type="font-awesome" size={24} color="#000" style={styles.socialIcon} />
            <Icon name="linkedin" type="font-awesome" size={24} color="#000" style={styles.socialIcon} />
          </View>
        </View>

        {/* Logout and Delete Account */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={[styles.button, {height: 50}]}>
          <LinearGradient
            colors={['#2441C7', '#1F1E1F']}
            style={styles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.logoutText}>LOGOUT</Text></LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {height: 50}]}>
          <LinearGradient
            colors={['#ff5733', '#1F1E1F']}
            style={styles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.logoutText}>Delete Account</Text></LinearGradient>
          </TouchableOpacity>
          
        </View>
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
    alignItems: 'center',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  profileId: {
    fontSize: 16,
    color: '#2441C7',
    marginBottom: 5,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileDetails: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 5,
  },
  badgeText: {
    color: 'black',
    fontSize: 10,
    marginLeft: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  editProfileContainer: {
    alignItems: 'flex-end',
  },
  editProfileButton: {
    backgroundColor: '#28C7FF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 5,
  },
  editProfileText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  birthdayText: {
    fontSize: 16,
    color: '#2441C7',
  },
  birthdayContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  changePasswordButton: {
    marginTop: 5,
  },
  changePasswordText: {
    color: '#2441C7',
    fontWeight: 'bold',
  },
  contactDetailsContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#dfeff6',
    borderRadius: 10,
    marginBottom: 20,
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactEmail: {
    fontSize: 16,
    color: '#2441C7',
    marginBottom: 5,
  },
  contactLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
  },
  contactPhone: {
    fontSize: 16,
    color: '#2441C7',
    marginBottom: 5,
  },
  socialLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    gap: 10
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteAccountButton: {
    backgroundColor: '#FF6961',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  deleteAccountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 10
  },
  gradientEditProfile:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    borderRadius: 10
  }
});

export default ProfileScreen;