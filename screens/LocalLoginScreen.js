import React, { useState } from 'react';
import styles from "../styles/style";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LocalLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.titleLogin}>Login with Local Account</Text>

      <TextInput
        style={styles.inputLogin}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputLogin}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => console.log("Local login initiated")}
      >
        <Text style={styles.buttonTextLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocalLoginScreen;
