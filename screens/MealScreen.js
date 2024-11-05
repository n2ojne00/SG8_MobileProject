import React, { useState, useEffect } from 'react';
import styles from "../styles/style";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const categories = ["Select Category", "Chicken", "Beef", "Pork", "Fish", "Vegan", "Pasta", "Dessert", "Starters"];

const MealScreen = ({ route, navigation }) => {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Select Category"); // Default to "Select Category"
  const { category } = route.params || {};

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
    setSearch(''); // Clear search when a category is selected
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
    <View style={styles.containerMealScr}>
      <TextInput
        style={styles.inputMealScr}
        placeholder="Search for a meal..."
        value={search}
        onChangeText={(text) => {
          setSearch(text);
          setSelectedCategory("Select Category"); // Reset category when typing a search term
        }}
      />

      {/* Category Dropdown Picker */}
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => handleCategorySelect(itemValue)}
      >
        {categories.map((category) => (
          <Picker.Item label={category} value={category} key={category} />
        ))}
      </Picker>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('MealDetail', { meal: item })}>
            <View style={styles.itemMealScr}>
              <Image source={{ uri: item.strMealThumb }} style={styles.imageMealScr} />
              <Text style={styles.titleMealScr}>{item.strMeal}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No meals found.</Text>}
      />
    </View>
  );
};

export default MealScreen;
