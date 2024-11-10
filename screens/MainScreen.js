// screens/MainScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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

  return (
    <View style={styles.container}>
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
            {drinkOfTheDay.strDrinkThumb ? (
              <Image source={{ uri: drinkOfTheDay.strDrinkThumb }} style={styles.drinkImage} />
            ) : (
              <Text>No image available</Text>
            )}
            <Text style={styles.drinkName}>{drinkOfTheDay.strDrink || 'Unknown Drink'}</Text>
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
        <TouchableOpacity 
          style={styles.createRecipeButton} 
          onPress={() => navigation.navigate('CreateRecipe')}
        >
          <Text style={styles.createRecipeButtonText}>Create Your Own Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.viewRecipeButton} 
          onPress={() => navigation.navigate('RecipeList')}
        >
          <Text style={styles.viewRecipeButtonText}>View Recipe List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  logo: {
    width: 250,
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
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  foodTitle: {
    fontSize: 18,
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
  foodName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
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
  drinkTitle: {
    fontSize: 18,
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
  drinkName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailsLink: {
    color: '#1E90FF',
    fontWeight: '600',
  },
  buttonContainer: {
    alignItems: 'center',
    alignSelf:'flex-start',
    width: '50%',
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    marginTop: 20,
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
