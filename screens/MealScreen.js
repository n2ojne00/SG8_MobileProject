// MealScreen.js
import React, { useState, useEffect } from 'react';
import styles from "../styles/style";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const MealScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);

  const fetchMeals = async (query) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (search) {
      fetchMeals(search);
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
