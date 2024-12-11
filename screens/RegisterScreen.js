import React, { useState } from 'react';
import styles from "../styles/style";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeLayout from "../contexts/ThemeLayout";
import { LoginStyles } from '../styles/LoginScreenStyles';
import { Settings } from '../styles/SettingsStyles';
import { globalStyles } from '../styles/GlobalStyles';
import { useTheme } from '../contexts/ThemeContext';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { theme } = useTheme(); // Access theme from context

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
    <ThemeLayout>
      <View style={globalStyles.container}>
        <View style={LoginStyles.containerLogin}>
    
          <Text style={LoginStyles.titleLogin}>Create an Account</Text>

          <Text style={Settings.label}>Email</Text>
          <TextInput
            style={Settings.accountInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={Settings.label}>Password</Text>
            <TextInput
              style={Settings.accountInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          <Text style={Settings.label}>Confirm Password</Text>
            <TextInput
              style={Settings.accountInput}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

          <TouchableOpacity
            style={LoginStyles.buttonLogin}
            onPress={handleRegister}
            >
            <Text style={LoginStyles.buttonTextLogin}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ThemeLayout>
  );
};

export default RegisterScreen;
