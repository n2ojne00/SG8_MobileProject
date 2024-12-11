// screens/MainScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, Button, ImageBackground, Pressable, } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import ThemeLayout from "../contexts/ThemeLayout";
import { MainStyles } from '../styles/MainScreenStyles';
import { globalStyles } from '../styles/GlobalStyles';
import { useTheme } from '../contexts/ThemeContext';
import exampleArticles from '../exampledata/exampleArticles';


const MainScreen = ({ navigation }) => {
  const [foodOfTheDay, setFoodOfTheDay] = useState(null);
  const [drinkOfTheDay, setDrinkOfTheDay] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { theme } = useTheme(); // Access the current theme from context

  const fetchFoodOfTheDay = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setFoodOfTheDay(data.meals[0]);
    } catch (error) {
      console.error('Error fetching Food of the Day:', error);
    }
  };

  const fetchDrinkOfTheDay = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      if (data.drinks && data.drinks.length > 0) {
        setDrinkOfTheDay(data.drinks[0]);
      } else {
        console.error("No drinks found in the API response");
      }
    } catch (error) {
      console.error('Error fetching Drink of the Day:', error);
    }
  };

  useEffect(() => {
    fetchFoodOfTheDay();
    fetchDrinkOfTheDay();
  }, []);


  const openArticleModal = (article) => {
    setSelectedArticle(article);
    setModalVisible(true);
  };

  const closeArticleModal = () => {
    setModalVisible(false);
    setSelectedArticle(null);
  };


  return (
    <ImageBackground style={globalStyles.background} resizeMode="cover">
      <ThemeLayout>
        <View style={[MainStyles.MainContainer, { backgroundColor: theme.bgContainer }]}>
          <ScrollView>

            <Image source={require('../images/succlyLogo.png')} style={globalStyles.logo} />

            {/* Food and Drink of the Day Section */}
            <View style={MainStyles.foodDrinkContainer}>
              {foodOfTheDay && (
                <View style={[MainStyles.ofTheDayContainer, { backgroundColor: theme.bgOfTheDayContainer }]}>
                  <Entypo name="pin" size={24} color={theme.pinIcon} />
                  <Text style={[MainStyles.ofTheDayTitle, { color: theme.textDarkGreen }]}>Food of the Day</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('MealDetailScreen', { idMeal: foodOfTheDay.idMeal })}
                    style={[MainStyles.otdNavigation, { backgroundColor: theme.bgDarkGreen }]}>
                    <Image source={{ uri: foodOfTheDay.strMealThumb }} style={MainStyles.ofTheDayImage} />
                    <Text numberOfLines={1} ellipsizeMode="tail" style={[MainStyles.otdRecipe, { color: theme.textBtn }]}>{foodOfTheDay.strMeal}</Text>
                  </TouchableOpacity>
                </View>
              )}

              {drinkOfTheDay ? (
                <View style={[MainStyles.ofTheDayContainer, { backgroundColor: theme.bgOfTheDayContainer }]}>
                  <Entypo name="pin" size={24} color={theme.pinIcon} />
                  <Text style={[MainStyles.ofTheDayTitle, { color: theme.textDarkGreen }]}>Drink of the Day</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CocktailDetail', { idDrink: drinkOfTheDay.idDrink })}
                    style={[MainStyles.otdNavigation, { backgroundColor: theme.bgDarkGreen }]}>

                    <Image source={{ uri: drinkOfTheDay.strDrinkThumb }} style={MainStyles.ofTheDayImage} />
                    <Text numberOfLines={1} ellipsizeMode="tail" style={[MainStyles.otdRecipe, { color: theme.textBtn }]}>{drinkOfTheDay.strDrink}</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <Text>Loading Drink of the Day...</Text>
              )}
            </View>

            {/* RecipeBook Section */}
            <Text style={[MainStyles.sectionTitle, { color: theme.textDarkGreen, borderColor: theme.borderOrange }]}>Recipes</Text>
            <View style={MainStyles.bookContainer}>
              {/* Book Image Background */}
              <View style={[MainStyles.bookBackgroundContainer, { backgroundColor: theme.bgTransparentLightGreen }]}>
                <Image
                  source={require('../images/logos/book.png')}
                  style={[MainStyles.bookImage, { tintColor: theme.bookTintColor }]}
                />

                {/* Buttons Overlay */}
                <View style={MainStyles.buttonOverlay}>
                  <TouchableOpacity
                    style={[MainStyles.RecipeButton, { backgroundColor: theme.bgRecipeBtn }]}
                    onPress={() => navigation.navigate('CreateRecipe')}
                  >
                    <Image
                      source={require('../images/logos/createRecipe.png')}
                      style={MainStyles.recipeImage} />
                    <Text style={[MainStyles.recipeButtonText, { color: theme.textAlmostBlack }]}>New recipe</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[MainStyles.RecipeButton, { backgroundColor: theme.bgRecipeBtn }]}
                    onPress={() => navigation.navigate('RecipeList')}
                  >
                    <Image
                      source={require('../images/logos/recipelist.png')}
                      style={MainStyles.recipeImage}
                    />
                    <Text style={[MainStyles.recipeButtonText, { color: theme.textAlmostBlack }]}>Your recipes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>


            {/* Article Section */}
            <Text style={[MainStyles.sectionTitle, { color: theme.textDarkGreen, borderColor: theme.borderOrange }]}>Food Articles</Text>
            
            <ScrollView horizontal style={[MainStyles.articleCarousel, {backgroundColor: theme.bgDarkGreen}]}
              showsHorizontalScrollIndicator={false}>
              {exampleArticles.map((article, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => openArticleModal(article)}
                  style={[MainStyles.articleContainer, { backgroundColor: theme.bgOfTheDayContainer }]}
                >
                  <Image source={{ uri: article.imageUrl }} style={MainStyles.articleImage} />
                  <Text style={[MainStyles.articleTitle, {color: theme.textAlmostBlack, borderColor: theme.borderOrange}]}>{article.title}</Text>

                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Modal for Article */}
            {selectedArticle && (
              <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
              >
                <View style={[MainStyles.modalOverlay, {backgroundColor: theme.bgModalOverlay}]}>
                  <View style={[MainStyles.modalContent, {backgroundColor: theme.bgOfTheDayContainer}]}>
                    <Image source={{ uri: selectedArticle.imageUrl }} style={MainStyles.modalImage} />
                    <Text style={[MainStyles.modalTitle, {color: theme.textAlmostBlack, borderColor: theme.borderOrange}]}>{selectedArticle.title}</Text>
                    <ScrollView style={MainStyles.modalScroll}>
                      <Text style={[MainStyles.modalDescription, {color: theme.textDarkGreen}]}>{selectedArticle.content}</Text>
                    </ScrollView>


                    {/* Close Button */}
                    <Pressable onPress={closeArticleModal} style={[MainStyles.closeButton, {backgroundColor: theme.bgDarkGreen}]}>
                      <Text style={[MainStyles.closeButtonText, {color: theme.textBtn}]}>CLOSE</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            )}
          </ScrollView>
        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};



export default MainScreen;
