import React from 'react';
import styles from "../styles/style";
import { LoginStyles } from '../styles/LoginScreenStyles';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import ThemeLayout from "../contexts/ThemeLayout";
import { globalStyles } from '../styles/GlobalStyles';

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
    style={globalStyles.background}
    resizeMode="cover"
  >
  <ThemeLayout>
    <View style={LoginStyles.containerLogin}>
      <Image source={require('../images/succlyLogo.png')} style={globalStyles.logo} />

      {/* Welcome message */}
      <Text style={LoginStyles.welcomeText}>
        Discover delicious recipes and cocktails to elevate your culinary journey. Let's get started!
      </Text>

      {/* Local Login Button */}
      <TouchableOpacity
        style={LoginStyles.buttonLogin}
        onPress={() => navigation.navigate('LocalLogin')}
      >
        <Text style={LoginStyles.buttonTextLogin}>Login</Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity
        style={LoginStyles.buttonLogin}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={LoginStyles.buttonTextLogin}>Create Account</Text>
      </TouchableOpacity>

      {/* Enter Without Login Button */}
      <TouchableOpacity
        style={[LoginStyles.buttonLogin, { backgroundColor: '#ffc3a8ff' }]}
        onPress={() => navigation.navigate('MainApp')}
      >
        <Text style={LoginStyles.buttonTextLogin}>Enter Without Login</Text>
      </TouchableOpacity>
    </View>
    </ThemeLayout>
    </ImageBackground>

  );
};

export default LoginScreen;
