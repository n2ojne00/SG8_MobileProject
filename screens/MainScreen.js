// screens/MainScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = ({ navigation }) => {
  const [foodOfTheDay, setFoodOfTheDay] = useState(null);
  const [drinkOfTheDay, setDrinkOfTheDay] = useState(null);

  const fetchFoodOfTheDay = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setFoodOfTheDay(data.meals[0]);
    } catch (error) {
      console.error('Error fetching Food of the Day:', error);
    }
  };

  const fetchDrinkOfTheDay = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      if (data.drinks && data.drinks.length > 0) {
        setDrinkOfTheDay(data.drinks[0]);
      } else {
        console.error("No drinks found in the API response");
      }
    } catch (error) {
      console.error('Error fetching Drink of the Day:', error);
    }
  };

  useEffect(() => {
    fetchFoodOfTheDay();
    fetchDrinkOfTheDay();
  }, []);

  const exampleArticles = [
    {
      title: 'The Health Benefits of Mediterranean Diet',
      content: 'Discover how the Mediterranean diet can improve your health with fresh fruits, vegetables, and healthy fats...',
      imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Top 5 Superfoods You Should Try',
      content: 'Learn about superfoods like kale, quinoa, and blueberries that pack a powerful nutritional punch...',
      imageUrl: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../images/succlyLogo.png')} style={styles.logo} />

      {/* Food and Drink of the Day Section */}
      <View style={styles.foodDrinkContainer}>
        {foodOfTheDay && (
          <View style={styles.foodContainer}>
            <Text style={styles.foodTitle}>Food of the Day</Text>
            <Image source={{ uri: foodOfTheDay.strMealThumb }} style={styles.foodImage} />
            <Text style={styles.foodName}>{foodOfTheDay.strMeal}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MealDetailScreen', { idMeal: foodOfTheDay.idMeal })}>
              <Text style={styles.detailsLink}>View Recipe</Text>
            </TouchableOpacity>
          </View>
        )}

        {drinkOfTheDay ? (
          <View style={styles.drinkContainer}>
            <Text style={styles.drinkTitle}>Drink of the Day</Text>
            <Image source={{ uri: drinkOfTheDay.strDrinkThumb }} style={styles.drinkImage} />
            <Text style={styles.drinkName}>{drinkOfTheDay.strDrink}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CocktailDetail', { idDrink: drinkOfTheDay.idDrink })}>
              <Text style={styles.detailsLink}>View Recipe</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text>Loading Drink of the Day...</Text>
        )}
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createRecipeButton} onPress={() => navigation.navigate('CreateRecipe')}>
          <Text style={styles.createRecipeButtonText}>Create Your Own Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewRecipeButton} onPress={() => navigation.navigate('RecipeList')}>
          <Text style={styles.viewRecipeButtonText}>View Recipe List</Text>
        </TouchableOpacity>
      </View>

      {/* Article Section */}
      <Text style={styles.sectionTitle}>Food Articles</Text>
      <ScrollView horizontal style={styles.articleCarousel}>
        {exampleArticles.map((article, index) => (
          <View key={index} style={styles.articleContainer}>
            <Image source={{ uri: article.imageUrl }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleContent}>{article.content}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  foodDrinkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  foodContainer: {
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  drinkImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
  },
  drinkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  foodImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
  },
  drinkContainer: {
    alignItems: 'center',
    width: '48%',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  articleCarousel: {
    marginBottom: 20,
  },
  articleContainer: {
    width: 200,
    marginRight: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  articleContent: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    marginTop: 10,
  },
  createRecipeButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
  },
  createRecipeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  viewRecipeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
  },
  viewRecipeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MainScreen;
