import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../contexts/ThemeContext';
import ThemeLayout from '../contexts/ThemeLayout';
import { Settings } from '../styles/SettingsStyles';
import Entypo from '@expo/vector-icons/Entypo';
import { globalStyles } from '../styles/GlobalStyles';

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
    Alert.alert('Team 8', 'Topias Tyni, Lauri Itkonen, Joni Neuvonen, Netta Ojala, Elias Konttaniemi');
  };

  return (
    <ThemeLayout>
      <View style={[globalStyles.container, { backgroundColor: theme.bgContainer }]}>
        <TouchableOpacity onPress={info} style={Settings.settingInfo}>
          <Entypo name="info" size={30} color={theme.textDarkGreen} />
        </TouchableOpacity>

        <View style={Settings.settingItem}>
          <Text style={[Settings.settingText, { color: theme.textDarkGreen }]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: theme.bgPlaceholder, true: theme.bgDarkGreen }}
            thumbColor={isDarkMode ? theme.bgContainer : theme.bgDarkGreen}
          />
        </View>

        <View style={Settings.settingsLogin}>
          <Text style={[Settings.label, { color: theme.textDarkGreen }]}>Email</Text>
          <TextInput
            style={[
              Settings.accountInput,
              { backgroundColor: theme.bgAccountInput, color: theme.textAlmostBlack },
            ]}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor={theme.bgPlaceholder}
            autoCapitalize="none"
          />

          <Text style={[Settings.label, { color: theme.textDarkGreen }]}>Current Password</Text>
          <TextInput
            style={[
              Settings.accountInput,
              { backgroundColor: theme.bgAccountInput, color: theme.textAlmostBlack },
            ]}
            value={password}
            placeholder="Enter your current password"
            placeholderTextColor={theme.bgPlaceholder}
            secureTextEntry
            editable={false}
          />

          <Text style={[Settings.label, { color: theme.textDarkGreen }]}>New Password</Text>
          <TextInput
            style={[
              Settings.accountInput,
              { backgroundColor: theme.bgAccountInput, color: theme.textAlmostBlack },
            ]}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="Enter a new password"
            placeholderTextColor={theme.bgPlaceholder}
            secureTextEntry
          />

          <TouchableOpacity
            style={[Settings.saveButton, { backgroundColor: theme.bgSaveBtn }]}
            onPress={handleSaveChanges}
          >
            <Text style={[Settings.saveButtonText, { color: theme.textDarkGreen }]}>
              Save Changes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Settings.logoutButton, { backgroundColor: theme.bgDarkGreen }]}
            onPress={handleLogout}
          >
            <Text style={Settings.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ThemeLayout>
  );
};

export default SettingsScreen;
