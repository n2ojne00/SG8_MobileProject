import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchCocktailByName, fetchCocktailByCategory } from '../CocktailService'; // Import a function to fetch by category

const categories = ["Shots", "Beer", "Punch", "Hot", "Cold"];

const CocktailScreen = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigation = useNavigation();

  // Function to handle searching cocktails by name
  const handleSearch = async () => {
    let result;
    if (cocktailName) {
      result = await fetchCocktailByName(cocktailName);
    } else if (selectedCategory) {
      result = await fetchCocktailByCategory(selectedCategory);
    }
    if (result) {
      setCocktails(result.map(item => ({ id: item.idDrink, name: item.strDrink })));
    } else {
      setCocktails([]); // Clear the list if no results found
    }
  };

  // Function to handle category selection and fetch cocktails by category
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    setCocktailName(''); // Clear the search field when category is selected
    const result = await fetchCocktailByCategory(category);
    if (result) {
      setCocktails(result.map(item => ({ id: item.idDrink, name: item.strDrink })));
    } else {
      setCocktails([]);
    }
  };

  // Function to navigate to the cocktail detail screen
  const goToDetail = (id) => {
    navigation.navigate('CocktailDetail', { id });
  };

  // Automatically fetch cocktails when cocktailName or selectedCategory changes
  useEffect(() => {
    handleSearch();
  }, [cocktailName, selectedCategory]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter cocktail name"
        value={cocktailName}
        onChangeText={(text) => {
          setCocktailName(text);
          setSelectedCategory(''); // Clear category selection when typing a name
        }}
        style={styles.input}
      />

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleCategorySelect(category)}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.selectedButton,
            ]}
          >
            <Text style={styles.filterText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToDetail(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No cocktails found.</Text>}
      />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#4caf50', // Highlight selected button
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default CocktailScreen;
