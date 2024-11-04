// MealScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a meal..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('MealDetail', { meal: item })}>
            <View style={styles.item}>
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <Text style={styles.title}>{item.strMeal}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
  },
});

export default MealScreen;
