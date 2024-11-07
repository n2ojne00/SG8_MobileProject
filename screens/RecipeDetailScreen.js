import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      <Text style={styles.text}>{recipe.ingredients}</Text>
      <Text style={styles.sectionTitle}>Guide</Text>
      <Text style={styles.text}>{recipe.guide}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 15 },
  text: { fontSize: 16, marginTop: 5 },
});

export default RecipeDetailScreen;
