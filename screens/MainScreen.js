import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MainScreen = ({ navigation }) => {
  const [foodOfTheDay, setFoodOfTheDay] = useState(null);
  const [carouselItems, setCarouselItems] = useState([
    { text: "Appetizers", screen: "MealScreen", id: "1" },
    { text: "Main Dishes", screen: "MealScreen", id: "2" },
    { text: "Desserts", screen: "MealScreen", id: "3" },
  ]);

  // Placeholder fetch function for Food of the Day
  const fetchFoodOfTheDay = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setFoodOfTheDay(data.meals[0]);
    } catch (error) {
      console.error('Error fetching Food of the Day:', error);
    }
  };

  useEffect(() => {
    fetchFoodOfTheDay();
  }, []);

  const renderCarouselItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.carouselItem}>
        <Text style={styles.carouselText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../images/succlyLogo.png')} style={styles.logo} />

      {/* Carousel */}
      <Text style={styles.carouselTitle}>What would you like to eat today?</Text>
      <FlatList
        data={carouselItems}
        renderItem={renderCarouselItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      />

      {/* Food of the Day */}
      {foodOfTheDay && (
        <View style={styles.foodOfTheDayContainer}>
          <Text style={styles.foodOfTheDayTitle}>Food of the Day</Text>
          <Image source={{ uri: foodOfTheDay.strMealThumb }} style={styles.foodImage} />
          <Text style={styles.foodName}>{foodOfTheDay.strMeal}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MealDetail', { idMeal: foodOfTheDay.idMeal })}>
            <Text style={styles.detailsLink}>View Recipe</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#ffffff', alignItems: 'center' },
  logo: { width: 150, height: 150, resizeMode: 'contain', marginBottom: 16 },
  carouselTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  carouselContainer: { paddingVertical: 10 },
  carouselItem: { padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8, alignItems: 'center', marginHorizontal: 5 },
  carouselText: { fontSize: 16, fontWeight: '600' },
  foodOfTheDayContainer: { alignItems: 'center', marginTop: 20 },
  foodOfTheDayTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  foodImage: { width: 200, height: 200, borderRadius: 8 },
  foodName: { fontSize: 18, marginVertical: 8, textAlign: 'center' },
  detailsLink: { color: '#1E90FF', fontWeight: '600' },
});

export default MainScreen;
