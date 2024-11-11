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

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => navigation.navigate('MainApp')}
      >
        <Text style={styles.buttonTextLogin}>Enter Site</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;