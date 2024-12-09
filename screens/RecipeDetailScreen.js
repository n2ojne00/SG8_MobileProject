import React from 'react';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import ThemeLayout from "../contexts/ThemeLayout";
import { useTheme } from '../contexts/ThemeContext';
import { globalStyles } from '../styles/GlobalStyles';
import { MealAndDrink } from '../styles/MealsAndDrinks';
import { RecipeDetails } from '../styles/RecipeDetailStyles';

const RecipeDetailScreen = ({ route }) => {
    const { theme } = useTheme(); // Access theme from context
    const { recipe } = route.params;

    return (
        <ImageBackground
            style={globalStyles.background}
            resizeMode="cover"
        >
            <ThemeLayout>
                <View style={globalStyles.container}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={[RecipeDetails.scrollContentRecipeDS, {backgroundColor: theme.bgRecipeTextArea }]}>
                        {/* Display the user photo if available */}
                        {recipe.photo ? (
                            <Image source={{ uri: recipe.photo }} style={RecipeDetails.recipePhoto} />
                        ) : (
                            <View style={[RecipeDetails.placeholderPhoto, { backgroundColor: theme.bgCategOverlay }]}>
                                <Text style={[RecipeDetails.placeholderText, { color: theme.textBtn }]}>No Photo Available</Text>
                            </View>
                        )}
                        <Text style={[MealAndDrink.titleDS, { color: theme.textDarkGreen, borderColor: theme.borderOrange }]}>{recipe.name}</Text>
                        <Text style={[RecipeDetails.dateRecipeDS, { color: theme.textAlmostBlack }]}>{recipe.date}</Text>
                        <Text style={[MealAndDrink.sectionTitleDS, { borderColor: theme.borderOrange, color: theme.textDarkGreen }]}>Ingredients</Text>
                        <Text style={[MealAndDrink.instructionsDS, { color: theme.textDarkGreen }]}>{recipe.ingredients}</Text>
                        <Text style={[MealAndDrink.sectionTitleDS, { borderColor: theme.borderOrange, color: theme.textDarkGreen }]}>Guide</Text>
                        <Text style={[MealAndDrink.instructionsDS, { color: theme.textDarkGreen }]}>{recipe.guide}</Text>
                    </ScrollView>
                </View>
            </ThemeLayout>
        </ImageBackground>
    );
};



export default RecipeDetailScreen;
