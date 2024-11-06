import React from 'react';
import styles from "../styles/style";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.containerLogin}>
      <Image source={require('../images/drink.jpg')} style={styles.logoLogin} />
      <Text style={styles.title}>Welcome to the App</Text>
      <TextInput
        style={styles.inputLogin}
        placeholder="Email"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.inputLogin}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('MainApp')}>
        <Text style={styles.buttonTextLogin}>Enter Site</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
