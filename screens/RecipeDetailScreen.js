import React from 'react';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import styles from '../styles/style';
import ThemeLayout from "../contexts/ThemeLayout";

const RecipeDetailScreen = ({ route }) => {
    const { recipe } = route.params;

    return (
    <ImageBackground
        style={styles.background}
        resizeMode="cover"
    >
        <ThemeLayout>
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollContentRecipeDS}>
                {/* Display the user photo if available */}
                {recipe.photo ? (
                    <Image source={{ uri: recipe.photo }} style={styles.recipePhoto} />
                        ) : (
                <View style={styles.placeholderPhoto}>
                    <Text style={styles.placeholderText}>No Photo Available</Text>
                </View>
                        )}
                    <Text style={styles.titleDS}>{recipe.name}</Text>
                    <Text style={styles.dateRecipeDS}>{recipe.date}</Text>
                    <Text style={styles.sectionTitleDS}>Ingredients</Text>
                    <Text style={styles.instructionsDS}>{recipe.ingredients}</Text>
                    <Text style={styles.sectionTitleDS}>Guide</Text>
                    <Text style={styles.instructionsDS}>{recipe.guide}</Text>
                </ScrollView>
            </View>
        </ThemeLayout>
    </ImageBackground>
    );
};



export default RecipeDetailScreen;
