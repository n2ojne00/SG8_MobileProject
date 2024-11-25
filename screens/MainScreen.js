// screens/MainScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, Button, ImageBackground } from 'react-native';
import styles from '../styles/style';
import Entypo from '@expo/vector-icons/Entypo';



const MainScreen = ({ navigation }) => {
  const [foodOfTheDay, setFoodOfTheDay] = useState(null);
  const [drinkOfTheDay, setDrinkOfTheDay] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

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

  const exampleArticles = [
    {
      title: 'The Health Benefits of Mediterranean Diet',
      content: 'Discover how the Mediterranean diet can improve your health with fresh fruits, vegetables, and healthy fats...',
      imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Top 5 Superfoods You Should Try',
      content: 'Learn about superfoods like kale, quinoa, and blueberries that pack a powerful nutritional punch...',
      imageUrl: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: '10 Quick and Easy Healthy Recipes',
      content: 'Save time while eating healthy with these quick and delicious recipes for breakfast, lunch, and dinner...',
      imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Understanding Organic vs Non-Organic Foods',
      content: 'Find out the differences between organic and non-organic foods to make informed choices...',
      imageUrl: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

  ];
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
      source={require('../images/winter.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView>

          <Image source={require('../images/succlyLogo.png')} style={styles.logo} />

          {/* Food and Drink of the Day Section */}
          <View style={styles.foodDrinkContainer}>
            {foodOfTheDay && (
              <View style={styles.ofTheDayContainer}>
                <Entypo name="pin" size={24} color="#f96521" />
                <Text style={styles.ofTheDayTitle}>Food of the Day</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MealDetailScreen', { idMeal: foodOfTheDay.idMeal })}
                  style={styles.otdNavigation}>
                  <Image source={{ uri: foodOfTheDay.strMealThumb }} style={styles.ofTheDayImage} />
                  <Text style={styles.otdRecipe}>{foodOfTheDay.strMeal}</Text>
                </TouchableOpacity>
              </View>
            )}

            {drinkOfTheDay ? (
              <View style={styles.ofTheDayContainer}>
                <Entypo name="pin" size={24} color="#f96521"/>
                <Text style={styles.ofTheDayTitle}>Drink of the Day</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CocktailDetail', { idDrink: drinkOfTheDay.idDrink })}
                  style={styles.otdNavigation}>

                  <Image source={{ uri: drinkOfTheDay.strDrinkThumb }} style={styles.ofTheDayImage} />
                  <Text style={styles.otdRecipe}>{drinkOfTheDay.strDrink}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text>Loading Drink of the Day...</Text>
            )}
          </View>

          {/* RecipeBook Section */}
          <Text style={styles.sectionTitle}>Recipes</Text>
          <View style={styles.bookContainer}>
            {/* Book Image Background */}
            <View style={styles.bookBackgroundContainer}>
              <Image
                source={require('../images/logos/book.png')}
                style={styles.bookImage}
              />

              {/* Buttons Overlay */}
              <View style={styles.buttonOverlay}>
                <TouchableOpacity
                  style={styles.RecipeButton}
                  onPress={() => navigation.navigate('CreateRecipe')}
                >
                  <Image
                    source={require('../images/logos/createRecipe.png')}
                    style={styles.recipeImage} />
                  <Text style={styles.recipeButtonText}>New recipe</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.RecipeButton}
                  onPress={() => navigation.navigate('RecipeList')}
                >
                  <Image
                    source={require('../images/logos/recipelist.png')}
                    style={styles.recipeImage}
                  />
                  <Text style={styles.recipeButtonText}>Your recipes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


          {/* Article Section */}
          <Text style={styles.sectionTitle}>Food Articles</Text>
          <ScrollView horizontal style={styles.articleCarousel}
            showsHorizontalScrollIndicator={false}>
            {exampleArticles.map((article, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openArticleModal(article)}
                style={styles.articleContainer}
              >
                <Image source={{ uri: article.imageUrl }} style={styles.articleImage} />
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleContent}>{article.content}</Text>
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
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Image source={{ uri: selectedArticle.imageUrl }} style={styles.modalImage} />
                  <Text style={styles.modalTitle}>{selectedArticle.title}</Text>
                  <Text style={styles.modalDescription}>{selectedArticle.content}</Text>
                  <Button title="Close" onPress={closeArticleModal} />
                </View>
              </View>
            </Modal>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};



export default MainScreen;
