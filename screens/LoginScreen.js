import React from 'react';
import styles from "../styles/style";
import { View, Text, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.containerLogin}>
      <Image source={require('../images/succlyLogo.png')} style={styles.logoLogin} />

      {/* Welcome message */}
      <Text style={styles.welcomeText}>
        Discover delicious recipes and cocktails to elevate your culinary journey. Let's get started!
      </Text>

      {/* MSAL Login Button */}
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => handleStudentLogin()}  // Define this function to handle MSAL login
      >
        <Text style={styles.buttonTextLogin}>Login with Student Account</Text>
      </TouchableOpacity>

      {/* Local Login Button */}
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => navigation.navigate('LocalLogin')}
      >
        <Text style={styles.buttonTextLogin}>Login with Local Account</Text>
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
        style={[styles.buttonLogin, { backgroundColor: '#4CAF50' }]}
        onPress={() => navigation.navigate('MainApp')}
      >
        <Text style={styles.buttonTextLogin}>Enter Without Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Placeholder for student login functionality
const handleStudentLogin = () => {
  // Implement MSAL login logic here
  console.log("Student login initiated.");
};

export default LoginScreen;
