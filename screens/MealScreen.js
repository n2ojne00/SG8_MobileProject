import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import styles from "../styles/style";
import ThemeLayout from "../contexts/ThemeLayout";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import chickenImage from '../images/categories/chicken.jpg'
import beefImage from '../images/categories/steak.jpg'
import porkImage from '../images/categories/pork.jpg'
import fishImage from '../images/categories/salmon.jpg'
import veganImage from '../images/categories/vegan.jpg'
import pastaImage from '../images/categories/pasta.jpg'
import dessertImage from '../images/categories/dessert.jpg'
import startersImage from '../images/categories/snacks.jpg'

import { globalStyles } from '../styles/GlobalStyles';
import { MealAndDrink } from '../styles/MealsAndDrinks';


const categories = ["Chicken", "Beef", "Pork", "Fish", "Vegan", "Pasta", "Dessert", "Starters"];

const MealScreen = ({ route, navigation }) => {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const { category } = route.params || {};
  const { isDarkMode } = useTheme();
  const { theme } = useTheme(); // Access the current theme from context


  const categoryMapping = {
    Chicken: 'Chicken',
    Beef: 'Beef',
    Pork: 'Pork',
    Fish: 'Seafood',
    Vegan: 'Vegan',
    Pasta: 'Pasta',
    Dessert: 'Dessert',
    Starters: 'Starter',
  };

  const categoryImages = {
    Chicken: chickenImage,
    Beef: beefImage,
    Pork: porkImage,
    Fish: fishImage,
    Vegan: veganImage,
    Pasta: pastaImage,
    Dessert: dessertImage,
    Starters: startersImage,
  };


  const fetchMeals = async (query, category) => {
    try {
      const url = query
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

      const response = await fetch(url);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const handleCategorySelect = async (category) => {
    const selectedAPIcategory = categoryMapping[category];
    setSelectedCategory(category);
    setSearch('');
    if (selectedAPIcategory) fetchMeals('', selectedAPIcategory);
  };

  useEffect(() => {
    if (category) {
      fetchMeals('', category);
    }
  }, [category]);

  useEffect(() => {
    if (search) {
      fetchMeals(search);
    } else if (selectedCategory && selectedCategory !== "Select Category") {
      fetchMeals('', categoryMapping[selectedCategory]);
    }
  }, [search, selectedCategory]);

  return (
    <ImageBackground
      style={globalStyles.background}
      resizeMode="cover"
    >
      <ThemeLayout>

        <View style={[globalStyles.container, { backgroundColor: theme.bgContainer }]}>
          <View style={[MealAndDrink.searchRow, { backgroundColor: theme.bgSearchRow, borderColor: theme.borderDarkGreen }]}>
            <FontAwesome name="search" color={theme.searchIcon} size={20} style={MealAndDrink.icon} />
            <TextInput
              style={[MealAndDrink.textInput,]}
              placeholder="Search for a meal..."
              placeholderTextColor={theme.textAlmostBlack}
              value={search}
              onChangeText={(text) => {
                setSearch(text);
                setSelectedCategory("Select Category");
              }}
            />
          </View>


          {/* Horizontal FlatList for categories */}
          <FlatList
            style={MealAndDrink.categoryList}
            data={categories}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleCategorySelect(item)}
                style={[
                  MealAndDrink.categoryButton, { borderColor: theme.borderDarkGreen },
                  selectedCategory === item && MealAndDrink.selectedCategory,
                ]}
              >
                <View style={MealAndDrink.categoryContainer}>
                  {/* Display image as background */}
                  {categoryImages[item] && (
                    <Image
                      source={categoryImages[item]}
                      style={MealAndDrink.categoryImage}
                    />
                  )}
                  {/* Overlay text */}
                  <View style={[MealAndDrink.overlay, { backgroundColor: theme.bgCategOverlay }]}>
                    <Text
                      style={[
                        MealAndDrink.categoryText, { color: theme.textBtn },
                        selectedCategory === item && { color: theme.textBtn }
                      ]}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />



          {/* FlatList for meals */}
          <FlatList
            style={MealAndDrink.foodList}
            data={meals}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.idMeal}
            renderItem={({ item }) => (
              <TouchableOpacity

                onPress={() => navigation.navigate('MealDetail', { idMeal: item.idMeal })}
              >
                <View style={MealAndDrink.mealSelect}>
                  <Image source={{ uri: item.strMealThumb }} style={MealAndDrink.mealImage} />
                  <Text style={[MealAndDrink.mealTitle, { color: theme.textBtn, backgroundColor: theme.bgDarkGreen },]}>
                    {item.strMeal}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <Text style={[MealAndDrink.emptyMessage, { color: theme.textDarkGreen }]}>Choose category</Text>
            }
          />


        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};

export default MealScreen;
