import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../contexts/ThemeContext';
import ThemeLayout from '../contexts/ThemeLayout';
import styles from '../styles/style';

const SettingsScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const loadAccountInfo = async () => {
      const account = await AsyncStorage.getItem('localAccount');
      if (account) {
        const { email, password } = JSON.parse(account);
        setEmail(email);
        setPassword(password);
      }
    };

    loadAccountInfo();
  }, []);

  const handleSaveChanges = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email and password cannot be empty.');
      return;
    }

    if (newPassword && newPassword.length < 6) {
      Alert.alert('Error', 'New password must be at least 6 characters long.');
      return;
    }

    const updatedAccount = { email, password: newPassword || password };
    await AsyncStorage.setItem('localAccount', JSON.stringify(updatedAccount));
    Alert.alert('Success', 'Account information updated.');
    setPassword(newPassword || password);
    setNewPassword('');
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <ThemeLayout>
      <View style={styles.container}>
        <View style={styles.settingItem}>
          <Text style={[styles.settingText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>

        <View style={styles.settingsLogin}>
          <View style={styles.recipeTextAreas}>
            <Text style={[styles.label, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Email</Text>
            <TextInput
              style={[styles.accountInput, { backgroundColor: isDarkMode ? '#1c2938' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000' }]}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
              autoCapitalize="none"
            />

            <Text style={[styles.label, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Current Password</Text>
            <TextInput
              style={[styles.accountInput, { backgroundColor: isDarkMode ? '#1c2938' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000' }]}
              value={password}
              placeholder="Enter your current password"
              placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
              secureTextEntry
              editable={false}
            />

            <Text style={[styles.label, { color: isDarkMode ? '#ffffff' : '#000000' }]}>New Password</Text>
            <TextInput
              style={[styles.accountInput, { backgroundColor: isDarkMode ? '#1c2938' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000' }]}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter a new password"
              placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
              secureTextEntry
            />

            <TouchableOpacity style={styles.saveRecipeBtn} onPress={handleSaveChanges}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ThemeLayout>
  );
};


export default SettingsScreen;
