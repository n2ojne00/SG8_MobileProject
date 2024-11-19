import React, { useState } from 'react';
import styles from "../styles/style";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Check if the account already exists
    const existingAccount = await AsyncStorage.getItem('localAccount');
    const account = existingAccount ? JSON.parse(existingAccount) : null;

    if (account?.email === email) {
      Alert.alert('Error', 'Account with this email already exists.');
      return;
    }

    // Save the new account
    const newAccount = { email, password };
    await AsyncStorage.setItem('localAccount', JSON.stringify(newAccount));

    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('LocalLogin'); // Navigate back to login screen
  };

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.titleLogin}>Create an Account</Text>

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
      <TextInput
        style={styles.inputLogin}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={handleRegister}
      >
        <Text style={styles.buttonTextLogin}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
