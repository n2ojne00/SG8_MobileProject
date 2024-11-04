// CocktailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchCocktailByName } from '../CocktailService';

const CocktailScreen = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const navigation = useNavigation();

  // Function to handle searching cocktails by name
  const handleSearch = async () => {
    if (cocktailName) {
      const result = await fetchCocktailByName(cocktailName);
      if (result) {
        setCocktails(result.map(item => ({ id: item.idDrink, name: item.strDrink })));
      } else {
        setCocktails([]); // Clear the list if no results found
      }
    } else {
      setCocktails([]); // Clear the list if input is empty
    }
  };

  // Function to navigate to the cocktail detail screen
  const goToDetail = (id) => {
    navigation.navigate('CocktailDetail', { id });
  };

  // Automatically fetch cocktails when cocktailName changes
  useEffect(() => {
    handleSearch();
  }, [cocktailName]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter cocktail name"
        value={cocktailName}
        onChangeText={setCocktailName} // Update state on text change
        style={styles.input}
      />
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToDetail(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No cocktails found.</Text>} // Message for no results
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
