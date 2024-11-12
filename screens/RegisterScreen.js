import React, { useState } from 'react';
import styles from "../styles/style";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.containerLogin}>
      <Text style={styles.titleLogin}>Create an Account</Text>

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
      <TextInput
        style={styles.inputLogin}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => console.log("Registration initiated")}
      >
        <Text style={styles.buttonTextLogin}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
