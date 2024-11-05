// MainScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const MainScreen = ({ navigation }) => {
  const [mealCategories, setMealCategories] = useState([]);
  const [cocktailCategories, setCocktailCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchCocktailCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      const randomCategories = getRandomCategories(data.categories, 2);
      setMealCategories(randomCategories);
    } catch (error) {
      console.error('Error fetching meal categories:', error);
    }
  };

  const fetchCocktailCategories = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      const randomCocktailCategories = getRandomCategories(data.drinks, 2);
      setCocktailCategories(randomCocktailCategories);
    } catch (error) {
      console.error('Error fetching cocktail categories:', error);
    }
  };

  const getRandomCategories = (categories, count) => {
    return categories.sort(() => 0.5 - Math.random()).slice(0, count);
  };

  const fetchRandomMealDetails = async () => {
    try {
      const randomMealId = Math.floor(Math.random() * 100) + 1; // Use an appropriate range for meal IDs
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMealId}`);
      const data = await response.json();
      if (data.meals) {
        const randomMeal = data.meals[0];
        navigation.navigate('MealDetailScreen', { meal: randomMeal });
      }
    } catch (error) {
      console.error('Error fetching random meal details:', error);
    }
  };

  const navigateToRandomCategory = (categories, screen) => {
    if (categories.length > 0) {
      fetchRandomMealDetails(); // Fetch and navigate to a random meal instead
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Screen</Text>

      <Text style={styles.sectionTitle}>Random Meal Categories</Text>
      <View style={styles.categoryContainer}>
        <FlatList
          data={mealCategories}
          keyExtractor={(item) => item.idCategory}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MealScreen', { category: item.strCategory })}
            >
              <Text style={styles.buttonText}>{item.strCategory}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={styles.randomButton}
          onPress={() => navigateToRandomCategory(mealCategories, 'MealScreen')}
        >
          <Text style={styles.randomButtonText}>Random Meal</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Random Cocktail Categories</Text>
      <View style={styles.categoryContainer}>
        <FlatList
          data={cocktailCategories}
          keyExtractor={(item) => item.strCategory}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CocktailScreen', { category: item.strCategory })}
            >
              <Text style={styles.buttonText}>{item.strCategory}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={styles.randomButton}
          onPress={() => navigateToRandomCategory(cocktailCategories, 'CocktailScreen')}
        >
          <Text style={styles.randomButtonText}>Random Cocktail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  randomButton: {
    backgroundColor: '#ff6f61',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  randomButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MainScreen;
