// CocktailDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button, Alert } from 'react-native';
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

  // Extract ingredients and convert measurements to ml if in oz
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    let measure = cocktail[`strMeasure${i}`];

    if (ingredient) {
      // Convert oz to ml if needed and round up
      if (measure && measure.includes("oz")) {
        const amountInOz = parseFloat(measure.replace("oz", "").trim());
        const amountInMl = Math.ceil(amountInOz * 29.5735); // Convert and round up
        measure = `${amountInMl} ml`;
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ingredient: {
    fontSize: 16,
    paddingLeft: 10,
  },
  instructions: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default CocktailDetailScreen;
