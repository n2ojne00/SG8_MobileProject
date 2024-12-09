import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import CountryFlag from 'react-native-country-flag';
import ThemeLayout from "../contexts/ThemeLayout";
import { globalStyles } from '../styles/GlobalStyles';
import { MealAndDrink } from '../styles/MealsAndDrinks';
import { useShoppingList } from '../contexts/ShoppingListContext';

// Updated image paths for categories
import chickenImg from '../images/logos/logoChicken.png';
import beefImg from '../images/logos/logoBeef.png';
import porkImg from '../images/logos/logoPork.png';
import fishImg from '../images/logos/logoFish.png';
import veganImg from '../images/logos/logoVegan.png';
import pastaImg from '../images/logos/logoPasta.png';
import dessertImg from '../images/logos/logoDess.png';
import starterImg from '../images/logos/logoStarter.png';
import sheepImg from '../images/logos/logoSheep.png';
import MisceImg from '../images/logos/logoMisc.png';

// Save ingredient to the shopping list
import AsyncStorage from '@react-native-async-storage/async-storage';

const MealDetailScreen = ({ route }) => {
  const { idMeal } = route.params;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useTheme();
  const { addToShoppingList } = useShoppingList(); // Use shopping list context

  // Function to map area names to country codes
  const getCountryCodeFromArea = (area) => {
    const areaCountryCodeMap = {
      American: 'US',
      British: 'GB',
      Canadian: 'CA',
      Chinese: 'CN',
      Croatian: 'HR',
      Dutch: 'NL',
      Egyptian: 'EG',
      Filipino: 'PH',
      French: 'FR',
      Greek: 'GR',
      Indian: 'IN',
      Irish: 'IE',
      Italian: 'IT',
      Jamaican: 'JM',
      Japanese: 'JP',
      Kenyan: 'KE',
      Malaysian: 'MY',
      Mexican: 'MX',
      Moroccan: 'MA',
      Polish: 'PL',
      Portuguese: 'PT',
      Russian: 'RU',
      Spanish: 'ES',
      Thai: 'TH',
      Tunisian: 'TN',
      Turkish: 'TR',
      Ukrainian: 'UA',
      Vietnamese: 'VN',
    };
    return areaCountryCodeMap[area] || null;
  };

  // Fetch meal details
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

  // Map category to image
  const getCategoryImage = (category) => {
    const categoryImages = {
      Chicken: chickenImg,
      Beef: beefImg,
      Pork: porkImg,
      Seafood: fishImg,
      Vegan: veganImg,
      Vegetarian: veganImg,
      Pasta: pastaImg,
      Dessert: dessertImg,
      Starter: starterImg,
      Side: starterImg,
      Appetizer: starterImg,
      Breakfast: starterImg,
      Goat: sheepImg,
      Lamb: sheepImg,
      Miscellaneous: MisceImg,
    };
    return categoryImages[category] || null;
  };

  // Extract ingredients and measures
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure ? measure : ''} ${ingredient}`);
      }
    }
    return ingredients;
  };

 

  // Handle ingredient click
  const handleIngredientClick = (ingredient) => {
    addToShoppingList(ingredient);
    Alert.alert('Ingredient Added', `${ingredient} has been added to your shopping list.`);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!meal) {
    return <Text style={MealAndDrink.errorMessage}>Meal details not found.</Text>;
  }

  const countryCode = getCountryCodeFromArea(meal.strArea);
  const categoryImage = getCategoryImage(meal.strCategory);

  return (
    <ImageBackground style={globalStyles.background} resizeMode="cover">
      <ThemeLayout>
        <View style={globalStyles.container}>
          <ScrollView contentContainerStyle={MealAndDrink.scrollContentMealDS} showsVerticalScrollIndicator={false}>
            <View style={MealAndDrink.innerContainerMealDS}>
              <Image source={{ uri: meal.strMealThumb }} style={MealAndDrink.imageDS} />
              <Text style={[MealAndDrink.titleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                {meal.strMeal}
              </Text>

              <View style={[MealAndDrink.foodDetCat, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <Text style={[MealAndDrink.foodDetCatTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                  Category: {categoryImage && <Image source={categoryImage} style={{ width: 35, height: 35 }} />}
                </Text>
                <Text style={[MealAndDrink.foodDetCatTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                  Area: {countryCode && (
                    <View style={{ marginVertical: 10 }}>
                      <CountryFlag isoCode={countryCode} size={35} />
                    </View>
                  )}
                </Text>
              </View>

              <Text style={[MealAndDrink.sectionTitleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                Ingredients:
              </Text>
              <Text style={[globalStyles.helperText, { color: isDarkMode ? '#cccccc' : '#666666' }]}>
  Tap on an ingredient to add it to your shopping list!
</Text>

             
              {getIngredients().map((ingredient, index) => (
                <TouchableOpacity key={index} onPress={() => handleIngredientClick(ingredient)}>
                  <Text style={[MealAndDrink.ingredientDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                    {ingredient}
                  </Text>
                </TouchableOpacity>
              ))}

              <Text style={[MealAndDrink.sectionTitleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                Instructions:
              </Text>
              <Text style={[MealAndDrink.instructionsDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                {meal.strInstructions}
              </Text>
            </View>
          </ScrollView>
        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};

export default MealDetailScreen;
