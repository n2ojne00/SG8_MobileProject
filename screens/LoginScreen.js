// LoginScreen.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleEnter = () => {
    navigation.replace('Cocktail');  // Navigate to the main screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../kuvat/drink.jpg')}  // Use the local image
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
    backgroundColor: 'lightyellow',
  },
  logo: {
    width: 400,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default LoginScreen;
