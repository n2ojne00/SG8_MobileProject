import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeLayout from '../contexts/ThemeLayout';
import { LoginStyles } from '../styles/LoginScreenStyles';
import { Settings } from '../styles/SettingsStyles';
import { useTheme } from '../contexts/ThemeContext';
import { globalStyles } from '../styles/GlobalStyles';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { theme } = useTheme(); // Access theme from context

  const handleRegister = async () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        const account = { email, password };
        await AsyncStorage.setItem('localAccount', JSON.stringify(account));
        Alert.alert('Registration Successful', 'You can now log in with your new account.');
        navigation.navigate('LocalLogin'); // Navigate to login screen
      } else {
        Alert.alert('Error', 'Passwords do not match.');
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <ThemeLayout>
      <View style={[globalStyles.container, { backgroundColor: theme.bgContainer }]}>
        <View style={LoginStyles.containerLogin}>
          <Text style={[LoginStyles.titleLogin, { color: theme.textAlmostBlack }]}>
            Register a New Account
          </Text>

          <Text style={[Settings.label, { color: theme.textAlmostBlack }]}>Email</Text>
          <TextInput
            style={[
              Settings.accountInput,
              { borderColor: theme.borderDarkGreen, backgroundColor: theme.bgAccountInput, color: theme.textAlmostBlack },
            ]}
            placeholder="Email"
            placeholderTextColor={theme.textAlmostBlack}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={[Settings.label, { color: theme.textAlmostBlack }]}>Password</Text>
          <TextInput
            style={[
              Settings.accountInput,
              { borderColor: theme.borderDarkGreen, backgroundColor: theme.bgAccountInput, color: theme.textAlmostBlack },
            ]}
            placeholder="Password"
            placeholderTextColor={theme.textAlmostBlack}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text style={[Settings.label, { color: theme.textAlmostBlack }]}>Confirm Password</Text>
          <TextInput
            style={[
              Settings.accountInput,
              { borderColor: theme.borderDarkGreen, backgroundColor: theme.bgAccountInput, color: theme.textAlmostBlack },
            ]}
            placeholder="Confirm Password"
            placeholderTextColor={theme.textAlmostBlack}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={[LoginStyles.buttonLogin, { backgroundColor: theme.bgDarkGreen }]}
            onPress={handleRegister}
          >
            <Text style={[LoginStyles.buttonTextLogin, { color: theme.textBtn }]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ThemeLayout>
  );
};

export default RegisterScreen;
