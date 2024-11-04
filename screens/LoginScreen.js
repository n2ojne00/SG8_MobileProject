// LoginScreen.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleEnter = () => {
    navigation.replace('Main');  // Navigate to the MainScreen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../kuvat/drink.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to the Cocktail App</Text>
      <Button title="Enter Site" onPress={handleEnter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default LoginScreen;
