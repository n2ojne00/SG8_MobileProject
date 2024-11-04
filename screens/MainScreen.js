// MainScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Main Screen</Text>
      <Button
        title="Go to Cocktail Search"
        onPress={() => navigation.navigate('Cocktail')}
      />
      <Button
        title="Go to Meal Search"
        onPress={() => navigation.navigate('Meal')}
        style={styles.buttonSpacing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonSpacing: {
    marginTop: 16,
  },
});

export default MainScreen;
