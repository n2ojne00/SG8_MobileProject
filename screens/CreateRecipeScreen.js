import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateRecipeScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [guide, setGuide] = useState('');
  const { onSave } = route.params;

  const handleSaveRecipe = () => {
    const newRecipe = { name, ingredients, guide };
    onSave(newRecipe); // Call the onSave function passed from MainScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Recipe</Text>
      <TextInput
        style={styles.input}
        placeholder="Recipe Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingredients"
        value={ingredients}
        onChangeText={setIngredients}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Guide"
        value={guide}
        onChangeText={setGuide}
        multiline
      />
      <Button title="Save Recipe" onPress={handleSaveRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, marginVertical: 5, borderRadius: 8 },
});

export default CreateRecipeScreen;
