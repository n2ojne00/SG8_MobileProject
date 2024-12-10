import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { globalStyles } from '../styles/GlobalStyles';
import { MealAndDrink } from '../styles/MealsAndDrinks';
import { useTheme } from '../contexts/ThemeContext';
import ThemeLayout from "../contexts/ThemeLayout";
import { useShoppingList } from '../contexts/ShoppingListContext';

const CocktailDetailScreen = ({ route }) => {
  const { idDrink } = route.params;
  const [cocktail, setCocktail] = useState(null);
  const { addToShoppingList } = useShoppingList();
  const { theme } = useTheme(); // Access theme from context

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        );
        setCocktail(response.data.drinks[0]);
      } catch (error) {
        console.error("Error fetching cocktail details:", error);
      }
    };

    fetchCocktailDetails();
  }, [idDrink]);

  if (!cocktail) return <ActivityIndicator size="large" color="#0000ff" />;

  const getAlcoholImage = (alcoholType) => {
    const normalizedAlcoholType = alcoholType.toLowerCase().replace(/\s+/g, '_'); // Normalize alcohol type
    const alcoholImages = {
      alcoholic: require('../images/logos/alcohol.png'),
      non_alcoholic: require('../images/logos/zeroAlcohol.png')
    };
    return alcoholImages[normalizedAlcoholType] || null;
  };


  // Extract ingredients and convert measurements
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    let measure = cocktail[`strMeasure${i}`];

    if (ingredient) {
      if (measure && measure.includes("oz")) {
        const amountInOz = parseFloat(measure.replace("oz", "").trim());
        const amountInCl = Math.ceil(amountInOz * 2.95735); // Convert oz to cl
        measure = `${amountInCl} cl`;
      }
      ingredients.push(`${measure ? measure : ''} ${ingredient}`);
    }
  }

  const handleIngredientClick = (ingredient) => {
    const ingredientName = ingredient
      .replace(/^\d+(\s?\d+\/\d+)?\s?(oz|cl|ml|tbsp|tsp|shot|shots|cup|cups|dash|pinch|teaspoon|tablespoon)?\s?/i, '') // Remove numbers, fractions, and units
      .replace(/^\d+\/\d+\s?/, '') // Remove standalone fractions like 1/2
      .trim();
    addToShoppingList(ingredientName);
    Alert.alert('Ingredient Added', `${ingredientName} has been added to your shopping list.`);
  };

  return (
    <ImageBackground style={globalStyles.background} resizeMode="cover">
      <ThemeLayout>
        <View style={globalStyles.container}>
          <ScrollView contentContainerStyle={MealAndDrink.scrollContentMealDS} showsVerticalScrollIndicator={false}>
            <View style={[MealAndDrink.innerContainerMealDS, { backgroundColor: theme.bgInnerContainer }]}>
              {/* Cocktail Image */}
              <Image source={{ uri: cocktail.strDrinkThumb }} style={MealAndDrink.imageDS} />

              {/* Cocktail Name */}
              <Text style={[MealAndDrink.titleDS, { color: theme.textDarkGreen, borderColor: theme.borderSearch }]}>
                {cocktail.strDrink}
              </Text>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={getAlcoholImage(cocktail.strAlcoholic)}
                  style={{ width: 35, height: 35, marginVertical: 10, marginHorizontal: 20,}}
                />
                <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 18, color: theme.textDarkGreen }}>
                  {cocktail.strAlcoholic === 'Alcoholic' ? 'Alcoholic' : 'Non-Alcoholic'}
                </Text>
              </View>

              {/* Ingredients Section */}
              <Text style={[MealAndDrink.sectionTitleDS, { borderColor: theme.borderSearch, color: theme.textDarkGreen }]}>
                Ingredients:
              </Text>

              <Text style={[globalStyles.helperText, { color: theme.textDarkGreen }]}>
                Tap on an ingredient to add it to your shopping list!
              </Text>
              {ingredients.map((ingredient, index) => (
                <TouchableOpacity key={index} onPress={() => handleIngredientClick(ingredient)}>
                  <Text
                    style={[MealAndDrink.ingredientDS, { color: theme.textDarkGreen, backgroundColor: theme.bgIngredientDS, borderColor: theme.borderLightPeach, },]}>
                    {ingredient}
                  </Text>
                </TouchableOpacity>
              ))}

              {/* Instructions Section */}
              <Text style={[MealAndDrink.sectionTitleDS, { borderColor: theme.borderSearch, color: theme.textDarkGreen }]}>
                Instructions:
              </Text>
              <Text style={[MealAndDrink.instructionsDS, { color: theme.textDarkGreen }]}>
                {cocktail.strInstructions}
              </Text>
            </View>
          </ScrollView>
        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};

export default CocktailDetailScreen;
