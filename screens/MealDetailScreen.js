import React, { useEffect, useState } from 'react';
import styles from "../styles/style";
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme

const MealDetailScreen = ({ route }) => {
  const { idMeal } = route.params;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useTheme(); // Access isDarkMode from the theme context

  // Fetch meal details by idMeal
  const fetchMealDetail = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await response.json();
      setMeal(data.meals ? data.meals[0] : null);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching meal details:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMealDetail();
  }, [idMeal]);

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

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!meal) {
    return <Text style={styles.errorMessage}>Meal details not found.</Text>;
  }

  // Update styles based on dark mode
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDarkMode ? '#15202B' : '#ffffff' }]} // Set background color
      contentContainerStyle={styles.scrollContentMealDS}
    >
      <View style={styles.innerContainerMealDS}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.imageMealDS} />
        <Text style={[styles.titleMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{meal.strMeal}</Text>
        <Text style={[styles.sectionTitleMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Category: {meal.strCategory}</Text>
        <Text style={[styles.sectionTitleMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Area: {meal.strArea}</Text>
        
        <Text style={[styles.sectionTitleMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Ingredients:</Text>
        {getIngredients().map((ingredient, index) => (
          <Text key={index} style={[styles.ingredientMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{ingredient}</Text>
        ))}

        <Text style={[styles.sectionTitleMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Instructions:</Text>
        <Text style={[styles.instructionsMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{meal.strInstructions}</Text>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;
