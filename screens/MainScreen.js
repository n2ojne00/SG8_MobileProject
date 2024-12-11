// screens/MainScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, Button, ImageBackground, Pressable, } from 'react-native';
import styles from '../styles/style';
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
    <ImageBackground
      style={globalStyles.background}
      resizeMode="cover"
    >
      <ThemeLayout>
        <View style={MainStyles.MainContainer}>
          <ScrollView>

            <Image source={require('../images/succlyLogo.png')} style={globalStyles.logo} />

            {/* Food and Drink of the Day Section */}
            <View style={MainStyles.foodDrinkContainer}>
              {foodOfTheDay && (
                <View style={MainStyles.ofTheDayContainer}>
                  <Entypo name="pin" size={24} color="#f96521" />
                  <Text style={MainStyles.ofTheDayTitle}>Food of the Day</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('MealDetailScreen', { idMeal: foodOfTheDay.idMeal })}
                    style={MainStyles.otdNavigation}>
                    <Image source={{ uri: foodOfTheDay.strMealThumb }} style={MainStyles.ofTheDayImage} />
                    <Text style={MainStyles.otdRecipe}>{foodOfTheDay.strMeal}</Text>
                  </TouchableOpacity>
                </View>
              )}

              {drinkOfTheDay ? (
                <View style={MainStyles.ofTheDayContainer}>
                  <Entypo name="pin" size={24} color="#f96521" />
                  <Text style={MainStyles.ofTheDayTitle}>Drink of the Day</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CocktailDetail', { idDrink: drinkOfTheDay.idDrink })}
                    style={MainStyles.otdNavigation}>

                    <Image source={{ uri: drinkOfTheDay.strDrinkThumb }} style={MainStyles.ofTheDayImage} />
                    <Text style={MainStyles.otdRecipe}>{drinkOfTheDay.strDrink}</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <Text>Loading Drink of the Day...</Text>
              )}
            </View>

            {/* RecipeBook Section */}
            <Text style={MainStyles.sectionTitle}>Recipes</Text>
            <View style={MainStyles.bookContainer}>
              {/* Book Image Background */}
              <View style={MainStyles.bookBackgroundContainer}>
                <Image
                  source={require('../images/logos/book.png')}
                  style={MainStyles.bookImage}
                />

                {/* Buttons Overlay */}
                <View style={MainStyles.buttonOverlay}>
                  <TouchableOpacity
                    style={MainStyles.RecipeButton}
                    onPress={() => navigation.navigate('CreateRecipe')}
                  >
                    <Image
                      source={require('../images/logos/createRecipe.png')}
                      style={MainStyles.recipeImage} />
                    <Text style={MainStyles.recipeButtonText}>New recipe</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={MainStyles.RecipeButton}
                    onPress={() => navigation.navigate('RecipeList')}
                  >
                    <Image
                      source={require('../images/logos/recipelist.png')}
                      style={MainStyles.recipeImage}
                    />
                    <Text style={MainStyles.recipeButtonText}>Your recipes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>


            {/* Article Section */}
            <Text style={MainStyles.sectionTitle}>Food Articles</Text>
            <ScrollView horizontal style={MainStyles.articleCarousel}
              showsHorizontalScrollIndicator={false}>
              {exampleArticles.map((article, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => openArticleModal(article)}
                  style={MainStyles.articleContainer}
                >
                  <Image source={{ uri: article.imageUrl }} style={MainStyles.articleImage} />
                  <Text style={MainStyles.articleTitle}>{article.title}</Text>

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
                <View style={MainStyles.modalOverlay}>
                  <View style={MainStyles.modalContent}>
                    <Image source={{ uri: selectedArticle.imageUrl }} style={MainStyles.modalImage} />
                    <Text style={MainStyles.modalTitle}>{selectedArticle.title}</Text>
                    <ScrollView style={MainStyles.modalScroll}>
                      <Text style={MainStyles.modalDescription}>{selectedArticle.content}</Text>
                    </ScrollView>


                    {/* Close Button */}
                    <Pressable onPress={closeArticleModal} style={MainStyles.closeButton}>
                      <Text style={MainStyles.closeButtonText}>CLOSE</Text>
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
