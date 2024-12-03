import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, ImageBackground, TouchableOpacity, Modal, Button } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import CountryFlag from 'react-native-country-flag';
import ThemeLayout from "../contexts/ThemeLayout";
import { globalStyles } from '../styles/GlobalStyles';
import { MealAndDrink } from '../styles/MealsAndDrinks';
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
  const [modalVisible, setModalVisible] = useState(false);
  const [savedIngredients, setSavedIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState('');

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

  // Open the modal with the selected ingredient
  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
    setModalVisible(true);
  };

  // Save the ingredient and close the modal
  const handleSaveIngredient = () => {
    setSavedIngredients(prev => [...prev, selectedIngredient]);
    setModalVisible(false);
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
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={[MealAndDrink.button, { marginLeft: 10, marginRight: 10, marginBottom: 10, borderColor: isDarkMode ? '#ffffff' : '#000000', borderWidth: 1, width: '60%', alignSelf: 'center' }]} // Add margin for spacing
              >
                <Text style={MealAndDrink.buttonText}>Saved Ingredients</Text>
              </TouchableOpacity>
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

          {/* Modal to show selected ingredients */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={MealAndDrink.modalView}>
              <View style={MealAndDrink.modalContent}>
                <Text style={MealAndDrink.modalTitle}>Selected Ingredients</Text>
                <Text style={MealAndDrink.selectedIngredient}>{selectedIngredient}</Text>
                <TouchableOpacity onPress={handleSaveIngredient} style={MealAndDrink.button}>
                  <Text style={MealAndDrink.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={[MealAndDrink.button, MealAndDrink.closeButton]}>
                  <Text style={MealAndDrink.buttonText}>Close</Text>
                </TouchableOpacity>

                <Text style={MealAndDrink.savedIngredientsTitle}>Saved Ingredients:</Text>
                {savedIngredients.map((ingredient, index) => (
                  <Text key={index} style={MealAndDrink.savedIngredient}>{ingredient}</Text>
                ))}
              </View>
            </View>
          </Modal>
        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};

export default MealDetailScreen;
