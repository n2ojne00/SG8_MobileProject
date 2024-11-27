import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../contexts/ThemeContext';
import ThemeLayout from '../contexts/ThemeLayout';

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
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <View style={styles.form}>
        <Text style={[styles.label, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Email</Text>
        <TextInput
          style={[styles.input, { backgroundColor: isDarkMode ? '#1c2938' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000' }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
          autoCapitalize="none"
        />

        <Text style={[styles.label, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Current Password</Text>
        <TextInput
          style={[styles.input, { backgroundColor: isDarkMode ? '#1c2938' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000' }]}
          value={password}
          placeholder="Enter your current password"
          placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
          secureTextEntry
          editable={false}
        />

        <Text style={[styles.label, { color: isDarkMode ? '#ffffff' : '#000000' }]}>New Password</Text>
        <TextInput
          style={[styles.input, { backgroundColor: isDarkMode ? '#1c2938' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000' }]}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Enter a new password"
          placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
          secureTextEntry
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ThemeLayout>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: 'steelblue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: 'crimson',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
