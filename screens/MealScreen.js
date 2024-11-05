import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import styles from "../styles/style";

const MealScreen = ({ route, navigation }) => {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const { category } = route.params || {};
  const { isDarkMode } = useTheme();

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

  useEffect(() => {
    if (category) {
      fetchMeals('', category);
    }
  }, [category]);

  useEffect(() => {
    if (search) {
      fetchMeals(search);
    } else if (category) {
      fetchMeals('', category); // Re-fetch meals in the category if search is cleared
    }
  }, [search]);

  return (
    <View style={[styles.containerMealScr, { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }]}>
      <TextInput
        style={[styles.inputMealScr, { backgroundColor: isDarkMode ? '#1f1f1f' : '#f5f5f5', color: isDarkMode ? '#ffffff' : '#000000' }]}
        placeholder="Search for a meal..."
        placeholderTextColor={isDarkMode ? '#cccccc' : '#888888'}
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('MealDetail', { meal: item })}>
            <View style={styles.itemMealScr}>
              <Image source={{ uri: item.strMealThumb }} style={styles.imageMealScr} />
              <Text style={[styles.titleMealScr, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{item.strMeal}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MealScreen;
