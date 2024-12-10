import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
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

const MealDetailScreen = ({ route }) => {
  const { idMeal } = route.params;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDarkMode, theme } = useTheme(); // Combine theme access
  const { addToShoppingList } = useShoppingList();

  /**
   * Map area names to country codes for flag rendering.
   */
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

  /**
   * Map meal categories to respective images.
   */
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

  /**
   * Fetch meal details by ID.
   */
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

  /**
   * Extract ingredients and their measurements.
   */
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

  /**
   * Handle adding an ingredient to the shopping list.
   */
  const handleIngredientClick = (ingredient) => {
    const cleanedIngredient = ingredient
      .replace(/^\d*\s?(oz|cl|ml|tbsp|tbs|tsp|cup|cups|kg|g|lb|lbs|teaspoon|tablespoon|pinch|dash|slice|pieces)?\s*/i, '')
      .trim();
    addToShoppingList(cleanedIngredient);
    Alert.alert('Ingredient Added', `${cleanedIngredient} has been added to your shopping list.`);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!meal) {
    return <Text style={MealAndDrink.errorMessage}>Meal details not found.</Text>;
  }

  // Map data to UI
  const countryCode = getCountryCodeFromArea(meal.strArea);
  const categoryImage = getCategoryImage(meal.strCategory);

  return (
    <ImageBackground style={globalStyles.background} resizeMode="cover">
      <ThemeLayout>
        <View style={globalStyles.container}>
          <ScrollView contentContainerStyle={MealAndDrink.scrollContentMealDS} showsVerticalScrollIndicator={false}>
            <View style={[MealAndDrink.innerContainerMealDS, { backgroundColor: theme.bgInnerContainer }]}>
              {/* Meal Image */}
              <Image source={{ uri: meal.strMealThumb }} style={MealAndDrink.imageDS} />

              {/* Meal Title */}
              <Text style={[MealAndDrink.titleDS, { color: theme.textDarkGreen, borderColor: theme.borderSearch }]}>
                {meal.strMeal}
              </Text>

              {/* Category and Area */}
              <View style={MealAndDrink.foodDetCat}>
                <Text style={[MealAndDrink.foodDetCatTitle, { color: theme.textDarkGreen }]}>
                  Category: {categoryImage && <Image source={categoryImage} style={{ width: 35, height: 35 }} />}
                </Text>
                <Text style={[MealAndDrink.foodDetCatTitle, { color: theme.textDarkGreen }]}>
                  Area: {countryCode && <CountryFlag isoCode={countryCode} size={35} />}
                </Text>
              </View>

              {/* Ingredients */}
              <Text style={[MealAndDrink.sectionTitleDS, { borderColor: theme.borderSearch, color: theme.textDarkGreen }]}>
                Ingredients:
              </Text>
              <Text style={[globalStyles.helperText, { color: theme.textDarkGreen }]}>
                Tap on an ingredient to add it to your shopping list!
              </Text>
              {getIngredients().map((ingredient, index) => (
                <TouchableOpacity key={index} onPress={() => handleIngredientClick(ingredient)}>
                  <Text style={[MealAndDrink.ingredientDS, { color: theme.textDarkGreen, backgroundColor: theme.bgIngredientDS }]}>
                    {ingredient}
                  </Text>
                </TouchableOpacity>
              ))}

              {/* Instructions */}
              <Text style={[MealAndDrink.sectionTitleDS, { borderColor: theme.borderSearch, color: theme.textDarkGreen }]}>
                Instructions:
              </Text>
              <Text style={[MealAndDrink.instructionsDS, { color: theme.textDarkGreen }]}>
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
