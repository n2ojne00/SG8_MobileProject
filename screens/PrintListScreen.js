import React from 'react';
import { View, Text, FlatList, ImageBackground, Pressable } from 'react-native';
import styles from "../styles/style";
import { globalStyles } from '../styles/GlobalStyles';
import ThemeLayout from '../contexts/ThemeLayout';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { MainStyles } from '../styles/MainScreenStyles';
import { PrintList } from '../styles/PrintListStyles';
import { MealAndDrink } from '../styles/MealsAndDrinks';


const PrintListScreen = ({ route, navigation }) => {
  const { list } = route.params;

  return (
    <ImageBackground style={globalStyles.background} resizeMode="cover">
      <ThemeLayout>
        <View style={globalStyles.container}>
          <View style={PrintList.innerContainerPrintList}>
            <View
              style={[MainStyles.RecipeButton, { marginTop: 12, alignSelf: 'center' }]}>
              <FontAwesome5 name='shopping-basket' size={25} color="#386641" />;
            </View>

            <Text style={MealAndDrink.titleDS}>{list?.name || 'Shopping List'}</Text>
            <FlatList
              data={list?.items || []}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={PrintList.shoppinglistItem}>{item}</Text>
              )}
            />
            <Pressable style={[styles.createButton, { alignSelf: 'center' }]} onPress={() => navigation.goBack()} >
              <Ionicons name="arrow-back-outline" size={15} color="#386641" style={{ marginHorizontal: 15 }} />
              <Text style={styles.buttonTextRL}>Back to shopping list</Text>
            </Pressable>
          </View>
        </View>

      </ThemeLayout>
    </ImageBackground>
  );
};



export default PrintListScreen;
