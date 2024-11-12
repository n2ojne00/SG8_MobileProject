import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
import styles from "../styles/style";
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme

const CocktailDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [cocktail, setCocktail] = useState(null);
  const { isDarkMode } = useTheme(); // Access isDarkMode from the theme context

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setCocktail(response.data.drinks[0]);
      } catch (error) {
        console.error("Error fetching cocktail details:", error);
      }
    };

    fetchCocktailDetails();
  }, [id]);

  
  if (!cocktail) return <Text style={[styles.loading, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Loading...</Text>;

  // Extract ingredients and convert measurements to cl if in oz
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    let measure = cocktail[`strMeasure${i}`];

    if (ingredient) {
      // Convert oz to cl if needed and round up
      if (measure && measure.includes("oz")) {
        const amountInOz = parseFloat(measure.replace("oz", "").trim());
        const amountInCl = Math.ceil(amountInOz * 2.95735); // Convert and round up
        measure = `${amountInCl} cl`;
      }
      ingredients.push(`${measure ? measure : ''} ${ingredient}`);
    }
  }

  // Order Button Handler
  const handleOrder = () => {
    Alert.alert("Order Confirmed", `You've ordered a ${cocktail.strDrink}!`);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#15202B' : '#ffffff' }]}>
      <Text style={[styles.titleDrinkDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{cocktail.strDrink}</Text>
      <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.imageDrinkDS} />
      <Text style={[styles.drinkHLSection, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Ingredients:</Text>
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={[styles.drinkIngredient, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{item}</Text>
        )}
      />
      <Text style={[styles.drinkHLSection, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Instructions:</Text>
      <Text style={[styles.drinkInstructions, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{cocktail.strInstructions}</Text>
     
    </View>
  );
};

export default CocktailDetailScreen;
