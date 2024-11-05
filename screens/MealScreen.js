import React, { useState, useEffect } from 'react';
import styles from "../styles/style";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const MealScreen = ({ route, navigation }) => {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const { category } = route.params || {};

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
    <View style={styles.containerMealScr}>
      <TextInput
        style={styles.inputMealScr}
        placeholder="Search for a meal..."
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
              <Text style={styles.titleMealScr}>{item.strMeal}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MealScreen;
