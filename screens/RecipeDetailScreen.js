import React from 'react';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import styles from '../styles/style';
import ThemeLayout from "../contexts/ThemeLayout";
import { globalStyles } from '../styles/GlobalStyles';
import { MealAndDrink } from '../styles/MealsAndDrinks';
import { RecipeDetails } from '../styles/RecipeDetailStyles';

const RecipeDetailScreen = ({ route }) => {
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
                    style={RecipeDetails.scrollContentRecipeDS}>
                {/* Display the user photo if available */}
                {recipe.photo ? (
                    <Image source={{ uri: recipe.photo }} style={styles.recipePhoto} />
                        ) : (
                <View style={RecipeDetails.placeholderPhoto}>
                    <Text style={RecipeDetails.placeholderText}>No Photo Available</Text>
                </View>
                        )}
                    <Text style={MealAndDrink.titleDS}>{recipe.name}</Text>
                    <Text style={RecipeDetails.dateRecipeDS}>{recipe.date}</Text>
                    <Text style={MealAndDrink.sectionTitleDS}>Ingredients</Text>
                    <Text style={MealAndDrink.instructionsDS}>{recipe.ingredients}</Text>
                    <Text style={MealAndDrink.sectionTitleDS}>Guide</Text>
                    <Text style={MealAndDrink.instructionsDS}>{recipe.guide}</Text>
                </ScrollView>
            </View>
        </ThemeLayout>
    </ImageBackground>
    );
};



export default RecipeDetailScreen;
