import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = ({ navigation }) => {
  const [foodOfTheDay, setFoodOfTheDay] = useState(null);
  const [recipes, setRecipes] = useState([]); // State to store recipes

  const fetchFoodOfTheDay = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setFoodOfTheDay(data.meals[0]);
    } catch (error) {
      console.error('Error fetching Food of the Day:', error);
    }
  };

  useEffect(() => {
    fetchFoodOfTheDay();
  }, []);

  const handleCreateRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/succlyLogo.png')} style={styles.logo} />

      {/* Food of the Day */}
      {foodOfTheDay && (
        <View style={styles.foodOfTheDayContainer}>
          <Text style={styles.foodOfTheDayTitle}>Food of the Day</Text>
          <Image source={{ uri: foodOfTheDay.strMealThumb }} style={styles.foodImage} />
          <Text style={styles.foodName}>{foodOfTheDay.strMeal}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MealDetail', { idMeal: foodOfTheDay.idMeal })}>
            <Text style={styles.detailsLink}>View Recipe</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Button to Create Recipe */}
      <Button title="Create Your Own Recipe" onPress={() => navigation.navigate('CreateRecipe', { onSave: handleCreateRecipe })} />

      {/* List of Saved Recipes */}
      <Text style={styles.recipesTitle}>Your Recipes</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
            <Text style={styles.recipeName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#ffffff', alignItems: 'center' },
  logo: { width: 150, height: 150, resizeMode: 'contain', marginBottom: 16 },
  carouselTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  carouselContainer: { paddingVertical: 10 },
  carouselItem: { padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8, alignItems: 'center', marginHorizontal: 5 },
  carouselText: { fontSize: 16, fontWeight: '600' },
  foodOfTheDayContainer: { alignItems: 'center', marginTop: 20 },
  foodOfTheDayTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  foodImage: { width: 200, height: 200, borderRadius: 8 },
  foodName: { fontSize: 18, marginVertical: 8, textAlign: 'center' },
  detailsLink: { color: '#1E90FF', fontWeight: '600' },
  recipesTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  recipeName: { fontSize: 16, paddingVertical: 5 },
});

export default MainScreen;
