// MealDetailScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const MealDetailScreen = ({ route }) => {
  const { meal } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.sectionTitle}>Category: {meal.strCategory}</Text>
      <Text style={styles.sectionTitle}>Area: {meal.strArea}</Text>
      <Text style={styles.sectionTitle}>Instructions:</Text>
      <Text style={styles.instructions}>{meal.strInstructions}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MealDetailScreen;
