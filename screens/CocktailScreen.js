import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/GlobalStyles';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ThemeLayout from "../contexts/ThemeLayout";

import cocktailImage from '../images/categories/cocktail.jpg';
import ordinaryDrinkImage from '../images/categories/cold.jpg';
import shotImage from '../images/categories/shots.jpg';
import beerImage from '../images/categories/Beer.jpg';
import punchImage from '../images/categories/punch.jpg';
import coffeeTeaImage from '../images/categories/hotdrink.jpg';
import { MealAndDrink } from '../styles/MealsAndDrinks';

// Define the available categories
const categories = [
  "Cocktail",
  "Ordinary Drink",
  "Shot",
  "Beer",
  "Punch / Party Drink",
  "Coffee / Tea"
];

const categoryImages = {
  "Cocktail": cocktailImage,
  "Ordinary Drink": ordinaryDrinkImage,
  "Shot": shotImage,
  "Beer": beerImage,
  "Punch / Party Drink": punchImage,
  "Coffee / Tea": coffeeTeaImage,
};

const CocktailScreen = () => {
  const [search, setSearch] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const navigation = useNavigation();
  const { theme } = useTheme(); // Access the current theme from context

  // Fetch cocktails by search query or category
  const fetchCocktails = async (query, category) => {
    try {
      let url;
      if (query) {
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
      } else if (category) {
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
      } else {
        setCocktails([]);
        return;
      }

      const response = await fetch(url);
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  // Handle category selection from dropdown
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    setSearch(''); // Clear the search input when selecting a category
    if (category !== "Select Category") {
      fetchCocktails('', category);
    } else {
      setCocktails([]); // Clear list if no category is selected
    }
  };

  // Fetch cocktails by name when the search input changes
  useEffect(() => {
    if (search) {
      fetchCocktails(search);
    } else if (selectedCategory !== "Select Category") {
      fetchCocktails('', selectedCategory);
    }
  }, [search]);

  // Navigate to the cocktail detail screen
  const goToDetail = (idDrink) => {
    navigation.navigate('CocktailDetail', { idDrink });
  };

  return (
    <ImageBackground
      style={globalStyles.background}
      resizeMode="cover"
    >
      <ThemeLayout>
        <View style={globalStyles.container}>
          {/* Search Row */}
          <View
            style={[
              MealAndDrink.searchRow,
              { backgroundColor: theme.bgSearchRow, borderColor: theme.borderDarkGreen },
            ]}
          >
            <FontAwesome name="search" size={20} color={theme.searchIcon} style={MealAndDrink.icon} />
            <TextInput
              style={[MealAndDrink.textInput, { color: theme.textAlmostBlack }]}
              placeholder="Search for a cocktail..."
              placeholderTextColor={theme.bgPlaceholder}
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
                  MealAndDrink.categoryButton,
                  selectedCategory === item && MealAndDrink.selectedCategory,
                  { borderColor: theme.borderOrange },
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
                        MealAndDrink.categoryText,
                        { color: theme.textBtn },
                        selectedCategory === item && { color: theme.textBtn },
                      ]}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />

          {/* FlatList for cocktails */}
          <FlatList
            style={MealAndDrink.foodList}
            data={cocktails}
            keyExtractor={(item) => item.idDrink}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => goToDetail(item.idDrink)}>
                <View style={MealAndDrink.mealSelect}>
                  <Image source={{ uri: item.strDrinkThumb }} style={MealAndDrink.mealImage} />
                  <Text
                    style={[
                      MealAndDrink.mealTitle,
                      { color: theme.textBtn, backgroundColor: theme.bgDarkGreen },
                    ]}
                  >
                    {item.strDrink}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <Text style={[MealAndDrink.emptyMessage, { color: theme.textError }]}>
                No cocktails found.
              </Text>
            }
          />
        </View>
      </ThemeLayout>
    </ImageBackground>
  );
};

export default CocktailScreen;
