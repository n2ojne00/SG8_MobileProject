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
import styles from "../styles/style";
import { globalStyles } from '../styles/GlobalStyles';
import { useTheme } from '../contexts/ThemeContext';
import ThemeLayout from "../contexts/ThemeLayout";
import { useShoppingList } from '../contexts/ShoppingListContext';
import { Snackbar } from 'react-native-paper';

const CocktailDetailScreen = ({ route }) => {
  const { idDrink } = route.params;
  const [cocktail, setCocktail] = useState(null);
  const { addToShoppingList } = useShoppingList(); // Use shopping list context
  const { isDarkMode } = useTheme();


  
  useEffect(() => {
    const fetchCocktailDetails = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
        setCocktail(response.data.drinks[0]);
      } catch (error) {
        console.error("Error fetching cocktail details:", error);
      }
    };

    

    fetchCocktailDetails();
  }, [idDrink]);

  if (!cocktail) return <ActivityIndicator size="large" color="#0000ff" />;

  // Extract ingredients and convert measurements to cl if in oz
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
    // Regular expression to remove the leading measurement part (like 1 oz, 2 cl, etc.)
    const ingredientName = ingredient.replace(/^\d+\s?(oz|cl|ml|tbsp|tsp)?\s?/i, '').trim();
    addToShoppingList(ingredientName);  // Add only the ingredient name to the shopping list
    Alert.alert('Ingredient Added', `${ingredientName} has been added to your shopping list.`);
  };
  

  return (
    <ImageBackground style={styles.background} resizeMode="cover">
      <ThemeLayout>
        <View style={globalStyles.container}>
          <ScrollView contentContainerStyle={styles.scrollContentMealDS} showsVerticalScrollIndicator={false}>
            <View style={styles.innerContainerMealDS}>
              <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.imageDS} />
              <Text style={[styles.titleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{cocktail.strDrink}</Text>
              <Text style={[styles.sectionTitleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Ingredients:</Text>
              <Text style={[globalStyles.helperText, { color: isDarkMode ? '#cccccc' : '#666666' }]}>
  Tap on an ingredient to add it to your shopping list!
</Text>

              <View>
                {ingredients.map((ingredient, index) => (
                  <TouchableOpacity key={index} onPress={() => handleIngredientClick(ingredient)}>
                    <Text style={[styles.ingredientDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{ingredient}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={[styles.sectionTitleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Instructions:</Text>
              <Text style={[styles.instructionsDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{cocktail.strInstructions}</Text>
            </View>
          </ScrollView>
        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};

export default CocktailDetailScreen;
