import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import styles from "../styles/style";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import chickenImage from '../images/categories/chicken.jpg'
import beefImage from '../images/categories/steak.jpg'
import porkImage from '../images/categories/pork.jpg'
import fishImage from '../images/categories/salmon.jpg'
import veganImage from '../images/categories/vegan.jpg'
import pastaImage from '../images/categories/pasta.jpg'
import dessertImage from '../images/categories/dessert.jpg'
import startersImage from '../images/categories/snacks.jpg'


const categories = ["Chicken", "Beef", "Pork", "Fish", "Vegan", "Pasta", "Dessert", "Starters"];

const MealScreen = ({ route, navigation }) => {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const { category } = route.params || {};
  const { isDarkMode } = useTheme();


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
    source={require('../images/winter.jpg')}
    style={styles.background}
    resizeMode="cover"
  >

    <View style={styles.container}>
      <View style={styles.searchRow}>
        <FontAwesome name="search" size={20} color="#6A994E" style={styles.icon} />
        <TextInput
          style={[styles.textInput,
          {
            backgroundColor: isDarkMode ? '#1f1f1f' : '#f5f5f5',
            color: isDarkMode ? '#ffffff' : '#000000'
          }]}
          placeholder="Search for a meal..."
          placeholderTextColor={isDarkMode ? '#cccccc' : '#888888'}
          value={search}
          onChangeText={(text) => {
            setSearch(text);
            setSelectedCategory("Select Category");
          }}
        />
      </View>


      {/* Horizontal FlatList for categories */}
      <FlatList
        style={styles.categoryList}
        data={categories}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCategorySelect(item)}
            style={[
              styles.categoryButton,
              selectedCategory === item && styles.selectedCategory,
            ]}
          >
            <View style={styles.categoryContainer}>
              {/* Display image as background */}
              {categoryImages[item] && (
                <Image
                  source={categoryImages[item]}
                  style={styles.categoryImage}
                />
              )}
              {/* Overlay text */}
              <View style={styles.overlay}>
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === item && styles.selectedCategoryText,
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
        style={styles.foodList}
        data={meals}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity

            onPress={() => navigation.navigate('MealDetail', { idMeal: item.idMeal })}
          >
            <View style={styles.mealSelect}>
              <Image source={{ uri: item.strMealThumb }} style={styles.mealImage} />
              <Text
                style={[
                  styles.mealTitle,
                  { color: isDarkMode ? '#000000' : '#ffffff' },
                ]}
              >
                {item.strMeal}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No meals found.</Text>
        }
      />


    </View>
    </ImageBackground>
  );
};

export default MealScreen;
