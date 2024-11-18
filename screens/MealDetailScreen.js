import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import styles from "../styles/style";
import { useTheme } from '../contexts/ThemeContext';
import CountryFlag from 'react-native-country-flag';

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
  const { isDarkMode } = useTheme();

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
      Miscellaneous : MisceImg,
      
    };
    console.log('Category being processed:', category);
    return categoryImages[category] || null; // Default to null if no image found
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

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!meal) {
    return <Text style={styles.errorMessage}>Meal details not found.</Text>;
  }

  const countryCode = getCountryCodeFromArea(meal.strArea); // Using the function here

  const categoryImage = getCategoryImage(meal.strCategory);

  return (
    <ScrollView
      style={{ backgroundColor: isDarkMode ? '#15202B' : '#ffffff' }}
      contentContainerStyle={styles.scrollContentMealDS}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.innerContainerMealDS}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.imageMealDS} />

        <Text style={[styles.titleMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          {meal.strMeal}
        </Text>

        <View style={[styles.foodDetCat, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
          <Text style={[styles.foodDetCatTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          Category: {categoryImage && (
            <Image source={categoryImage} style={{ width: 35, height: 35,}} />
          )}

          </Text>
          <Text style={[styles.foodDetCatTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
            Area: {countryCode && (
          <View style={{ marginVertical: 10 }}>
            <CountryFlag isoCode={countryCode} size={35} />
          </View>
        )}
        </Text>         
        </View>

       

        <Text style={[styles.sectionTitleMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          Ingredients:
        </Text>
        {getIngredients().map((ingredient, index) => (
          <Text key={index} style={[styles.ingredientMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
            {ingredient}
          </Text>
        ))}

        <Text style={[styles.sectionTitleMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          Instructions:
        </Text>
        <Text style={[styles.instructionsMealDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          {meal.strInstructions}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;
