// MainScreen.js
import React from 'react';
import styles from "../styles/style";
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.containerMain}>
      <Text style={styles.titleMain}>Main Screen</Text>
      <Text>Welcome to the Main Screen!</Text>
     
    </View>
  );
};

export default MainScreen;
