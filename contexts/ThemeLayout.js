import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useTheme } from './ThemeContext'; // Same folder, so relative path remains './'

// Map theme names to image paths
const backgroundImages = {
  light: require('../images/winter.jpg'), // Adjusted relative path
  dark: require('../images/night.jpg'),  // Adjusted relative path
};

const ThemeLayout = ({ children }) => {
  const { isDarkMode } = useTheme();
  const backgroundImage = isDarkMode ? backgroundImages.dark : backgroundImages.light;

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default ThemeLayout;
