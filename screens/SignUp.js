import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Posture Vision</Text>
      <Text style={styles.subtitle}>Sign In to Continue</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <LinearGradient
          colors={['#2441C7', '#1F1E1F']}
          style={styles.inputGradient}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#A9A9A9"
              value={username}
              onChangeText={setUsername}
            />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <LinearGradient
          colors={['#2441C7', '#1F1E1F']}
          style={styles.inputGradient}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A9A9A9"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setSecureTextEntry(!secureTextEntry)}>
              <Icon name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="#2441C7" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {navigation.navigate('Welcome')}}>
        <Text style={styles.signInLink}>Don't have an account? <Text style={styles.signInText}>SIGN UP</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EAECF8',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#000',
  },
  inputGradient: {
    borderRadius: 5,
    padding: .5, // padding around the input to show the gradient border
  },
  inputWrapper: {
    backgroundColor: '#EAECF8',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: '#000',
    fontSize: 16,
    flex: 1,
    backgroundColor: 'transparent',
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: 30,
    color: '#000',
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: '#2441C7',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2441C7',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInLink: {
    textAlign: 'center',
    color: '#000',
  },
  signInText: {
    color: '#2441C7',
    fontWeight: 'bold',
  },
});

export default LoginPage;