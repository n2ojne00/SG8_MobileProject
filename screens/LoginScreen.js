import React from 'react';
import styles from "../styles/style";
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import ThemeLayout from "../contexts/ThemeLayout";

const LoginScreen = ({ navigation }) => {
  return (
    <ThemeLayout>
    <ImageBackground
    style={styles.background}
    resizeMode="cover"
  >
    <View style={styles.containerLogin}>
      <Image source={require('../images/succlyLogo.png')} style={styles.logo} />

      {/* Welcome message */}
      <Text style={styles.welcomeText}>
        Discover delicious recipes and cocktails to elevate your culinary journey. Let's get started!
      </Text>

      {/* Local Login Button */}
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => navigation.navigate('LocalLogin')}
      >
        <Text style={styles.buttonTextLogin}>Login</Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonTextLogin}>Create Account</Text>
      </TouchableOpacity>

      {/* Enter Without Login Button */}
      <TouchableOpacity
        style={[styles.buttonLogin, { backgroundColor: '#ffc3a8ff' }]}
        onPress={() => navigation.navigate('MainApp')}
      >
        <Text style={styles.buttonTextLogin}>Enter Without Login</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </ThemeLayout>

  );
};

export default LoginScreen;
