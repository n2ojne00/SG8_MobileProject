import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "../styles/style";
import { useNavigation } from '@react-navigation/native';
import { fetchCocktailByName, fetchCocktailByCategory } from '../CocktailService';

const categories = ["Select Category", "Shots", "Beer", "Punch", "Hot Drinks", "Cold Drinks"];

const CocktailScreen = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const navigation = useNavigation();

  // Mapping categories to cocktail API categories
  const categoryMapping = {
    Shots: 'Shot',
    Beer: 'Beer',
    Punch: 'Punch / Party Drink',
    "Hot Drinks": 'Coffee / Tea', // Assuming "Coffee / Tea" category fits hot drinks
    "Cold Drinks": 'Soft Drink / Soda', // Assuming "Soft Drink / Soda" fits cold drinks
  };

  // Fetch cocktails by name or category
  const fetchCocktails = async (name, category) => {
    try {
      let result = [];
      if (name) {
        result = await fetchCocktailByName(name);
      } else if (category) {
        result = await fetchCocktailByCategory(category);
      }
      setCocktails(result ? result.map(item => ({ id: item.idDrink, name: item.strDrink })) : []);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  // Handle category selection from dropdown
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    setCocktailName(''); // Clear search input when a category is selected
    if (category && category !== "Select Category") {
      const apiCategory = categoryMapping[category];
      fetchCocktails('', apiCategory);
    }
  };

  // Automatically fetch cocktails by name or category
  useEffect(() => {
    if (cocktailName) {
      fetchCocktails(cocktailName);
    } else if (selectedCategory && selectedCategory !== "Select Category") {
      fetchCocktails('', categoryMapping[selectedCategory]);
    }
  }, [cocktailName, selectedCategory]);

  // Navigate to cocktail details
  const goToDetail = (id) => {
    navigation.navigate('CocktailDetail', { id });
  };

  return (
    <View style={styles.containerDrinkScr}>
      <TextInput
        placeholder="Enter cocktail name"
        value={cocktailName}
        onChangeText={(text) => {
          setCocktailName(text);
          setSelectedCategory("Select Category"); // Reset selected category when searching by name
        }}
        style={styles.inputDrinkScr}
      />

      {/* Category Dropdown Picker */}
      <Picker
        selectedValue={selectedCategory}
        style={styles.pickerDrinkScr}
        onValueChange={(itemValue) => handleCategorySelect(itemValue)}
      >
        {categories.map((category) => (
          <Picker.Item label={category} value={category} key={category} />
        ))}
      </Picker>

      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToDetail(item.id)}>
            <Text style={styles.itemDrinkScr}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyMessageDrinkScr}>No cocktails found.</Text>}
      />
    </View>
  );
};

export default CocktailScreen;
