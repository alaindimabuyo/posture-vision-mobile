import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = ({ navigation }) => {
  const handleSignUpWithGoogle = () => {
    // Handle Sign Up with Google button press
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Posture Vision</Text>
      {/* <Text style={styles.subHeader}>Signup to Continue</Text> */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.button, { height: 50 }]}
          onPress={() => navigation.navigate('Get Started')}>
          <LinearGradient
            colors={['#2441C7', '#1F1E1F']}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonGoogle, { height: 50 }]}
          onPress={handleSignUpWithGoogle}>
          <Text style={styles.buttonTextGoogle}>Sign Up with Google</Text>
        </TouchableOpacity>
        <View style={styles.botText}>
          <Text style={styles.botHeader}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.subBotHeader}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EAECF8',
    padding: 60,
  },
  btnContainer: {
    width: '100%',
    paddingTop: 20,
  },
  botText: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonGoogle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2441C7',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Questrial-Regular',
  },
  buttonTextGoogle: {
    color: '#425BE4',
    fontSize: 18,
    fontFamily: 'Questrial-Regular',
  },
  header: {
    fontSize: 20,
    marginBottom: 5,
    fontFamily: 'Questrial-Regular',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Questrial-Regular',
    textAlign: 'center',
  },
  botHeader: {
    fontSize: 15,
    fontFamily: 'Questrial-Regular',
  },
  subBotHeader: {
    fontSize: 12,
    color: '#425BE4',
    fontFamily: 'Questrial-Regular',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default Welcome;