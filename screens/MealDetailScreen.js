// MealDetailScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const MealDetailScreen = ({ route }) => {
  const { meal } = route.params;

  // Extract ingredients and measures
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) { // The API provides up to 20 ingredients
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure ? measure : ''} ${ingredient}`);
      }
    }
    return ingredients;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.sectionTitle}>Category: {meal.strCategory}</Text>
        <Text style={styles.sectionTitle}>Area: {meal.strArea}</Text>
        
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        {getIngredients().map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>{ingredient}</Text>
        ))}

        <Text style={styles.sectionTitle}>Instructions:</Text>
        <Text style={styles.instructions}>{meal.strInstructions}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 25,
  },
  innerContainer: {
    flex: 1,
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
  ingredient: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 8,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
});

export default MealDetailScreen;
