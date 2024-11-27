import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert, ImageBackground } from 'react-native';
import axios from 'axios';
import styles from "../styles/style";
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import { ScrollView } from 'react-native';
import ThemeLayout from "../contexts/ThemeLayout";

const CocktailDetailScreen = ({ route }) => {
  const { idDrink } = route.params;
  const [cocktail, setCocktail] = useState(null);
  const { isDarkMode } = useTheme(); // Access isDarkMode from the theme context

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

  const getAlcoholImage = (alcoholType) => {
    // Normalize the string by removing spaces and converting to lowercase
    const normalizedAlcoholType = alcoholType.toLowerCase().replace(/\s+/g, '_'); // Replace spaces with underscores

    const alcoholImages = {
      alcoholic: require('../images/logos/alcohol.png'),
      non_alcoholic: require('../images/logos/zeroAlcohol.png')
    };

    return alcoholImages[normalizedAlcoholType] || null;
  };

  // Order Button Handler
  const handleOrder = () => {
    Alert.alert("Order Confirmed", `You've ordered a ${cocktail.strDrink}!`);
  };


  return (
  <ImageBackground
    style={styles.background}
    resizeMode="cover"
  >
    <ThemeLayout>
    <View style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.scrollContentMealDS}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.innerContainerMealDS}>

        <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.imageDS} />
        <Text style={[styles.titleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}
        >{cocktail.strDrink}</Text>

        <View style={[styles.foodDetCat, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>

          {/* Alcoholic / Non-Alcoholic Image and Text */}
          <Text style={[styles.foodDetCatTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
            {cocktail.strAlcoholic && (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <Image
                  source={getAlcoholImage(cocktail.strAlcoholic)}
                  style={{ width: 35, height: 35, marginRight: 10 }}
                />

                <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 18, }}>
                  {cocktail.strAlcoholic === 'Alcoholic' ? 'Alcoholic' : 'Non-Alcoholic'}
                </Text>
              </View>
            )}
          </Text>
        </View>



        <Text style={[styles.sectionTitleDS,
        { color: isDarkMode ? '#ffffff' : '#000000' }]}
        >Ingredients:</Text>
        <View>
          {ingredients.map((item, index) => (
            <Text
              key={index}
              style={[styles.ingredientDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}
            >
              {item}
            </Text>
          ))}
        </View>

        <Text style={[styles.sectionTitleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}
        >Instructions:</Text>

        <Text style={[styles.instructionsDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}
        >{cocktail.strInstructions}</Text>

      </View>

    </ScrollView>
    </View>
    </ThemeLayout>
    </ImageBackground>
  );
};

export default CocktailDetailScreen;
