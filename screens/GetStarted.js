import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../assets/get-started.svg';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Icon width={200} height={200} style={styles.logo} />
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Sit sed odio amet bibendum diam
          id mattis proin.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.button, { height: 50 }]}
          onPress={() => navigation.navigate('Face Identity')}>
          <LinearGradient
            colors={['#2441C7', '#1F1E1F']}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
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
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    marginVertical: 20,
  },
  bottomContainer: {
    width: '100%',
    paddingHorizontal: 60,
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
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