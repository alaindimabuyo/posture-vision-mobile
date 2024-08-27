import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../assets/svg-camera.svg';

const FaceIdentity = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2441C7', '#0E1741']}
        style={styles.headerContainer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.circle}>
          <Image
            source={require('../assets/face.png')}
            style={styles.headerImage}
          />
        </View>
      </LinearGradient>
      <View style={styles.contentContainer}>
        <View style={styles.leftContent}>
          <Icon width={200} height={200} style={styles.svgCamera} />
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Sit sed odio amet bibendum
            diam id mattis proin.
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.button, {height: 50}]}
          onPress={() => navigation.navigate('Camera')}>
          <LinearGradient
            colors={['#2441C7', '#1F1E1F']}
            style={styles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.buttonText}>Activate Camera</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    width: '100%',
    height: '40%',  // Reduced height to create space for the button
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,  // Added padding to create space below the image
  },
  circle: {
    width: 200,
    height: 150,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerImage: {
    width: 170,
    height: 170,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  leftContent: {
    flex: 1,
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  description: {
    textAlign: 'left',
    marginVertical: 20,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,  // Added marginTop to create space between the image and button
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
  skipButton: {
    marginTop: 10,
  },
  skipText: {
    color: 'black',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default FaceIdentity;