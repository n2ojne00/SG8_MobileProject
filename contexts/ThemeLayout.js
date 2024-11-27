import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useTheme } from './ThemeContext'; // Same folder, so relative path remains './'
import styles from '../styles/style';

// Map theme names to image paths
const backgroundImages = {
  light: require('../images/winter.jpg'), // Adjusted relative path
  dark: require('../images/night.jpg'),  // Adjusted relative path
};

const ThemeLayout = ({ children }) => {
  const { isDarkMode } = useTheme();
  const backgroundImage = isDarkMode ? backgroundImages.dark : backgroundImages.light;

  return (
    <ImageBackground source={backgroundImage} style={styles.ThemeLayoutBackground}>
      <View style={styles.ThemeLayoutContent}>{children}</View>
    </ImageBackground>
  );
};

export default ThemeLayout;
