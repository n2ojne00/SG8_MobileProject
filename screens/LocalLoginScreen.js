import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeLayout from '../contexts/ThemeLayout';
import { LoginStyles } from '../styles/LoginScreenStyles';
import { Settings } from '../styles/SettingsStyles';
import { useTheme } from '../contexts/ThemeContext';
import { globalStyles } from '../styles/GlobalStyles';

const LocalLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useTheme(); // Access theme from context

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
    <ImageBackground style={globalStyles.background} resizeMode="cover">
      <ThemeLayout>
      <View style={[globalStyles.container, { backgroundColor: theme.bgContainer }]}>
        <View style={LoginStyles.containerLogin}>
          <Text style={[LoginStyles.titleLogin, {color: theme.textAlmostBlack}]}>Login with Local Account</Text>

          <Text style={[Settings.label, {color: theme.textAlmostBlack}]}>Email</Text>
          <TextInput
            style={[Settings.accountInput, {borderColor: theme.borderDarkGreen, backgroundColor: theme.bgAccountInput}]}
            placeholder="Email"
            placeholderTextColor={theme.textAlmostBlack}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={[Settings.label, {color: theme.textAlmostBlack}]}>Password</Text>
          <TextInput
            style={[Settings.accountInput, {borderColor: theme.borderDarkGreen, backgroundColor: theme.bgAccountInput}]}
            placeholder="Password"
            placeholderTextColor={theme.textAlmostBlack}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={[LoginStyles.buttonLogin, {backgroundColor: theme.bgDarkGreen}]} onPress={handleLogin}>
            <Text style={[LoginStyles.buttonTextLogin, {color: theme.textBtn}]}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ThemeLayout>
    </ImageBackground>

  );
};

export default LocalLoginScreen;
