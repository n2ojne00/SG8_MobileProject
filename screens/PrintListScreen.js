import React from 'react';
import { View, Text, FlatList, ImageBackground, Pressable } from 'react-native';
import styles from "../styles/style";
import { globalStyles } from '../styles/GlobalStyles';
import ThemeLayout from '../contexts/ThemeLayout';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { MainStyles } from '../styles/MainScreenStyles';
import { PrintList } from '../styles/PrintListStyles';
import { MealAndDrink } from '../styles/MealsAndDrinks';
import { useTheme } from '../contexts/ThemeContext';


const PrintListScreen = ({ route, navigation }) => {
  const { theme } = useTheme(); // Access the current theme from context

  const { list } = route.params;

  return (
    <ImageBackground style={globalStyles.background} resizeMode="cover">
      <ThemeLayout>
        <View style={globalStyles.container}>
          <View style={[PrintList.innerContainerPrintList, { backgroundColor: theme.bgTransparentLightGreen }]}>
          <View
  style={[MainStyles.RecipeButton, { marginTop: 12, alignSelf: 'center', backgroundColor: theme.bgRecipeBtn }]}>
  <FontAwesome5 name='shopping-basket' size={25} color={theme.textDarkGreen} />
</View>
    

            <Text style={[MealAndDrink.titleDS, { color: theme.textDarkGreen, borderColor: theme.borderSearch }]}>{list?.name || 'Shopping List'}</Text>
            <FlatList
              data={list?.items || []}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={[PrintList.shoppinglistItem,
                {
                  borderColor: theme.borderSearch,
                  backgroundColor: theme.bgSaveBtn,
                  color: theme.textDarkGreen
                }]}>
                  {item}</Text>
              )}
            />
            <Pressable style={[PrintList.createButton,
            {
              alignSelf: 'center',
              borderColor: theme.borderSearch,
              backgroundColor: theme.bgSaveBtn,
              color: theme.textDarkGreen
            }]}
              onPress={() => navigation.goBack()} >
              <Ionicons name="arrow-back-outline" size={15} color={theme.textDarkGreen} style={{ marginHorizontal: 15 }} />
              <Text style={[PrintList.buttonTextRL, {color: theme.textDarkGreen}]}>Back to shopping list</Text>
            </Pressable>
          </View>
        </View>

      </ThemeLayout>
    </ImageBackground>
  );
};



export default PrintListScreen;
