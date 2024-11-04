// CocktailDetailScreen.js
import React, { useEffect, useState } from 'react';
import Header from "./screens/Header";
import Footer from "./screens/Footer";
import styles from "./styles/style";
import { View, Text, Image, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';

const CocktailDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [cocktail, setCocktail] = useState(null);

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

  if (!cocktail) return <Text>Loading...</Text>;

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
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>{cocktail.strDrink}</Text>
      <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.image} />
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.ingredient}>{item}</Text>}
      />
      <Text style={styles.sectionTitle}>Instructions:</Text>
      <Text style={styles.instructions}>{cocktail.strInstructions}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Order" onPress={handleOrder} color="#FFA500" />
      </View>
      <Footer />
    </View>
  );
};

export default CocktailDetailScreen;
