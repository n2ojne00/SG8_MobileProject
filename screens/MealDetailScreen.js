// MealDetailScreen.js
import React from 'react';
import styles from "../styles/style";
import { View, Text, Image, ScrollView } from 'react-native';

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
    <ScrollView style={styles.containerMealDS} contentContainerStyle={styles.scrollContentMealDS}>
      <View style={styles.innerContainerMealDS}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.imageMealDS} />
        <Text style={styles.titleMealDS}>{meal.strMeal}</Text>
        <Text style={styles.sectionTitleMealDS}>Category: {meal.strCategory}</Text>
        <Text style={styles.sectionTitleMealDS}>Area: {meal.strArea}</Text>
        
        <Text style={styles.sectionTitleMealDS}>Ingredients:</Text>
        {getIngredients().map((ingredient, index) => (
          <Text key={index} style={styles.ingredientMealDS}>{ingredient}</Text>
        ))}

        <Text style={styles.sectionTitleMealDS}>Instructions:</Text>
        <Text style={styles.instructionsMealDS}>{meal.strInstructions}</Text>
      </View>
    </ScrollView>
  );
};


export default MealDetailScreen;
