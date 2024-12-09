import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../contexts/ThemeContext';
import ThemeLayout from '../contexts/ThemeLayout';
import { globalStyles } from '../styles/GlobalStyles';
import Entypo from '@expo/vector-icons/Entypo';
import { Settings } from '../styles/SettingsStyles';
import { CreateRecipe } from '../styles/CreateRecipeStyles';

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
    <ImageBackground style={globalStyles.background} resizeMode="cover">
      <ThemeLayout>

        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>

          <TouchableOpacity onPress={info} style={Settings.settingInfo}>
            <Entypo name="info" size={30} color={'#386641'}/>
          </TouchableOpacity>

          <View style={Settings.settingItem}>
            <Text style={[Settings.settingText, { color: theme.textColor }]}>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: '#767577', true: '#386641' }}
              thumbColor={isDarkMode ? '#f4f3f4' : '#386641'}
            />

          </View>


          <View style={Settings.settingsLogin}>
            <View style={CreateRecipe.recipeTextAreas}>
              <Text style={[Settings.label, { color: theme.textColor }]}>Email</Text>
              <TextInput
                style={[Settings.accountInput, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor={theme.placeholderTextColor}
                autoCapitalize="none"
              />

              <Text style={[Settings.label, { color: theme.textColor }]}>Current Password</Text>
              <TextInput
                style={[Settings.accountInput, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                value={password}
                placeholder="Enter your current password"
                placeholderTextColor={theme.placeholderTextColor}
                secureTextEntry
                editable={false}
              />

              <Text style={[Settings.label, { color: theme.textColor }]}>New Password</Text>
              <TextInput
                style={[Settings.accountInput, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Enter a new password"
                placeholderTextColor={theme.placeholderTextColor}
                secureTextEntry
              />

              <TouchableOpacity
                style={[CreateRecipe.saveRecipeBtn, { backgroundColor: theme.buttonBackground }]}
                onPress={handleSaveChanges}
              >
                <Text style={[Settings.saveButtonText, { color: theme.buttonText }]}>Save Changes</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[Settings.logoutButton, { backgroundColor: theme.buttonBackground }]}
              onPress={handleLogout}
            >
              <Text style={[Settings.logoutButtonText, { color: theme.buttonText }]}>Logout</Text>
            </TouchableOpacity>

          </View>

        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};


export default SettingsScreen;
