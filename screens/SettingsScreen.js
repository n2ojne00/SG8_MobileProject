import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../contexts/ThemeContext';
import ThemeLayout from '../contexts/ThemeLayout';
import styles from '../styles/style';
import Entypo from '@expo/vector-icons/Entypo';

const SettingsScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme, theme } = useTheme();
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

  const info = async () => {
    Alert.alert('Tiimi 8', 'Topias Tyni, Lauri Itkonen, Joni Neuvonen, Netta Ojala, Elias Konttaniemi');
  };

  return (
    <ThemeLayout>
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <View style={styles.settingItem}>
          <Text style={[styles.settingText, { color: theme.textColor }]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingsLogin}>
          <View style={styles.recipeTextAreas}>
            <Text style={[styles.label, { color: theme.textColor }]}>Email</Text>
            <TextInput
              style={[styles.accountInput, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={theme.placeholderTextColor}
              autoCapitalize="none"
            />

            <Text style={[styles.label, { color: theme.textColor }]}>Current Password</Text>
            <TextInput
              style={[styles.accountInput, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
              value={password}
              placeholder="Enter your current password"
              placeholderTextColor={theme.placeholderTextColor}
              secureTextEntry
              editable={false}
            />

            <Text style={[styles.label, { color: theme.textColor }]}>New Password</Text>
            <TextInput
              style={[styles.accountInput, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter a new password"
              placeholderTextColor={theme.placeholderTextColor}
              secureTextEntry
            />

            <TouchableOpacity
              style={[styles.saveRecipeBtn, { backgroundColor: theme.buttonBackground }]}
              onPress={handleSaveChanges}
            >
              <Text style={[styles.saveButtonText, { color: theme.buttonText }]}>Save Changes</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.logoutButton, { backgroundColor: theme.buttonBackground }]}
            onPress={handleLogout}
          >
            <Text style={[styles.logoutButtonText, { color: theme.buttonText }]}>Logout</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={info} style={styles.settingInfo}>
          <Entypo name="info" size={30}/>
          </TouchableOpacity>
      </View>
    </ThemeLayout>
  );
};


export default SettingsScreen;
