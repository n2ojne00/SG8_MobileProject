import React, { useState } from 'react';
import styles from "../styles/style";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      // Simulate login validation (replace with real validation logic)
      const storedAccount = await AsyncStorage.getItem('localAccount');
      const account = storedAccount ? JSON.parse(storedAccount) : null;

      if (account?.email === email && account?.password === password) {
        await AsyncStorage.setItem('user', JSON.stringify({ email }));
        navigation.navigate('MainApp'); // Navigate to the main app
      } else {
        Alert.alert('Login Failed', 'Invalid email or password.');
      }
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.titleLogin}>Login with Local Account</Text>

      <TextInput
        style={styles.inputLogin}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputLogin}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonTextLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocalLoginScreen;
