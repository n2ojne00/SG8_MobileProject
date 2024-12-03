import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import darkTheme from '../styles/theme'; // Ensure you have a `theme.js` file with a dark theme exported

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');
  const theme = isDarkMode ? darkTheme : {}; // Placeholder for light mode later
  const [backgroundImage, setBackgroundImage] = useState(isDarkMode ? 'night.jpg' : 'winter.jpg');

  // Load the saved theme preference from AsyncStorage or use the system theme
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme !== null) {
          const isDark = savedTheme === 'dark';
          setIsDarkMode(isDark);
          setBackgroundImage(isDark ? 'night.jpg' : 'winter.jpg');
        }
      } catch (error) {
        console.error('Failed to load theme:', error);
      }
    };

    loadTheme();
  }, []);

  // Toggle theme and persist the preference
  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    setBackgroundImage(newTheme ? 'night.jpg' : 'winter.jpg');
    try {
      await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme, backgroundImage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
