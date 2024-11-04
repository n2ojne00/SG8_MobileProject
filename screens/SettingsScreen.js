import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme !== null) {
        setIsDarkMode(savedTheme === 'dark');
      }
    };
    loadTheme();
  }, []);

  const handleThemeChange = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const currentTheme = isDarkMode ? 'dark' : 'light';

  return (
    <View style={[styles.container, { backgroundColor: currentTheme === 'dark' ? '#121212' : '#f5f5f5' }]}>
      <Text style={[styles.text, { color: currentTheme === 'dark' ? '#ffffff' : '#000000' }]}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, { color: currentTheme === 'dark' ? '#ffffff' : '#000000' }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={handleThemeChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
