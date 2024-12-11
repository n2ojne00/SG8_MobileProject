import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import theme context
import { LoginStyles } from '../styles/LoginScreenStyles'; // Import base styles
import ThemeLayout from "../contexts/ThemeLayout"; // For background styling
import { globalStyles } from '../styles/GlobalStyles';

const LoginScreen = ({ navigation }) => {
  const { theme } = useTheme(); // Access the current theme from context

  return (
    <ImageBackground style={globalStyles.background} resizeMode="cover">
      <ThemeLayout>
        <View style={[LoginStyles.containerLogin, { backgroundColor: theme.bgContainer }]}>
          <Image source={require('../images/succlyLogo.png')} style={globalStyles.logo} />

          {/* Welcome message */}
          <Text style={[LoginStyles.welcomeText, { color: theme.textDarkGreen, backgroundColor: theme.bgTransparentLightGreen }]}>
            Discover delicious recipes and cocktails to elevate your culinary journey. Let's get started!
          </Text>

          {/* Local Login Button */}
          <TouchableOpacity
            style={[LoginStyles.buttonLogin, { backgroundColor: theme.bgSaveBtn }]}
            onPress={() => navigation.navigate('LocalLogin')}
          >
            <Text style={[LoginStyles.buttonTextLogin, { color: theme.textAlmostBlack }]}>Login</Text>
          </TouchableOpacity>

          {/* Register Button */}
          <TouchableOpacity
            style={[LoginStyles.buttonLogin, { backgroundColor: theme.bgSaveBtn }]}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={[LoginStyles.buttonTextLogin, { color: theme.textAlmostBlack }]}>Create Account</Text>
          </TouchableOpacity>

          {/* Enter Without Login Button */}
          <TouchableOpacity
            style={[LoginStyles.buttonLogin, { backgroundColor: theme.bgDarkGreen }]} // Static color for this button
            onPress={() => navigation.navigate('MainApp')}
          >
            <Text style={[LoginStyles.buttonTextLogin, { color: theme.textBtn }]}>Enter Without Login</Text>
          </TouchableOpacity>
        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};

export default LoginScreen;
