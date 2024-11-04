// CocktailScreen.js
import React, { useState } from 'react';
import Header from "./screens/Header";
import Footer from "./screens/Footer";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchCocktailByName } from './CocktailService';

const CocktailScreen = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    const result = await fetchCocktailByName(cocktailName);
    if (result) setCocktails(result.map(item => ({ id: item.idDrink, name: item.strDrink })));
  };

  const goToDetail = (id) => {
    navigation.navigate('CocktailDetail', { id });
  };

  return (
    <View style={{ padding: 20 }}>
      <Header />
      <TextInput
        placeholder="Enter cocktail name"
        value={cocktailName}
        onChangeText={setCocktailName}
        style={{ borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Search Cocktails" onPress={handleSearch} />
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToDetail(item.id)}>
            <Text style={{ fontSize: 18, padding: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Footer />
    </View>

  );
};

export default CocktailScreen;
