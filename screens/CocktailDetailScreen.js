import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert, ImageBackground, TouchableOpacity, Modal, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import styles from "../styles/style";
import { globalStyles } from '../styles/GlobalStyles';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import ThemeLayout from "../contexts/ThemeLayout";

const CocktailDetailScreen = ({ route }) => {
  const { idDrink } = route.params;
  const [cocktail, setCocktail] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // To control the modal visibility
  const [savedIngredients, setSavedIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState('');
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

  if (!cocktail) return <ActivityIndicator size="large" color="#0000ff" />;

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
    const normalizedAlcoholType = alcoholType.toLowerCase().replace(/\s+/g, '_'); // Normalize alcohol type

    const alcoholImages = {
      alcoholic: require('../images/logos/alcohol.png'),
      non_alcoholic: require('../images/logos/zeroAlcohol.png')
    };

    return alcoholImages[normalizedAlcoholType] || null;
  };

  // Handle ingredient click (similar to MealDetailScreen)
  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
    setModalVisible(true); // Show the modal
  };

  // Save ingredient and close modal
  const handleSaveIngredient = () => {
    setSavedIngredients(prev => [...prev, selectedIngredient]);
    setModalVisible(false);
  };

  // Close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground style={styles.background} resizeMode="cover">
      <ThemeLayout>
        <View style={globalStyles.container}>
          <ScrollView contentContainerStyle={styles.scrollContentMealDS} showsVerticalScrollIndicator={false}>
            <View style={styles.innerContainerMealDS}>
              <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.imageDS} />
              <Text style={[styles.titleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{cocktail.strDrink}</Text>

              <View style={[styles.foodDetCat, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <Text style={[styles.foodDetCatTitle, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                  {cocktail.strAlcoholic && (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={getAlcoholImage(cocktail.strAlcoholic)}
                        style={{ width: 35, height: 35, marginRight: 10 }}
                      />
                      <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 18 }}>
                        {cocktail.strAlcoholic === 'Alcoholic' ? 'Alcoholic' : 'Non-Alcoholic'}
                      </Text>
                    </View>
                  )}
                </Text>
              </View>

              <Text style={[styles.sectionTitleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Ingredients:</Text>
              <TouchableOpacity 
    onPress={() => setModalVisible(true)} 
    style={[styles.button, { marginLeft: 10, marginRight: 10, marginBottom: 10, borderColor: isDarkMode ? '#ffffff' : '#000000', borderWidth: 1, width: '60%', alignSelf: 'center' }]} // Add margin for spacing
  >
    <Text style={styles.buttonText}>Saved Ingredients</Text>
  </TouchableOpacity>
              <View>
                {ingredients.map((ingredient, index) => (
                  <TouchableOpacity key={index} onPress={() => handleIngredientClick(ingredient)}>
                    <Text style={[styles.ingredientDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                      {ingredient}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={[styles.sectionTitleDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Instructions:</Text>
              <Text style={[styles.instructionsDS, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                {cocktail.strInstructions}
              </Text>
            </View>
          </ScrollView>

          {/* Modal to show selected ingredients */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalView}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Selected Ingredient</Text>
                <Text style={styles.selectedIngredient}>{selectedIngredient}</Text>
                <TouchableOpacity onPress={handleSaveIngredient} style={styles.button}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeModal} style={[styles.button, styles.closeButton]}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>

                <Text style={styles.savedIngredientsTitle}>Saved Ingredients:</Text>
                {savedIngredients.map((ingredient, index) => (
                  <Text key={index} style={styles.savedIngredient}>{ingredient}</Text>
                ))}
              </View>
            </View>
          </Modal>
        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};

export default CocktailDetailScreen;
