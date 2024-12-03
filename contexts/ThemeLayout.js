import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useTheme } from './ThemeContext'; // Same folder, so relative path remains './'
import { globalStyles } from '../styles/GlobalStyles';

// Map theme names to image paths
const backgroundImages = {
  light: require('../images/winter.jpg'), // Adjusted relative path
  dark: require('../images/night.jpg'),  // Adjusted relative path
};

const ThemeLayout = ({ children }) => {
  const { isDarkMode } = useTheme();
  const backgroundImage = isDarkMode ? backgroundImages.dark : backgroundImages.light;

  return (
    <ImageBackground source={backgroundImage} style={globalStyles.ThemeLayoutBackground}>
      <View style={globalStyles.ThemeLayoutContent}>{children}</View>
    </ImageBackground>
  );
};

export default ThemeLayout;
