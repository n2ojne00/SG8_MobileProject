import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import styles from '../styles/style';
import ThemeLayout from "../contexts/ThemeLayout";

const RecipeDetailScreen = ({ route }) => {
    const { recipe } = route.params;

    return (
        <ThemeLayout>
        <ImageBackground
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollContentRecipeDS}>
                    <Text style={styles.titleDS}>{recipe.name}</Text>
                    <Text style={styles.dateRecipeDS}>{recipe.date}</Text>
                    <Text style={styles.sectionTitleDS}>Ingredients</Text>
                    <Text style={styles.instructionsDS}>{recipe.ingredients}</Text>
                    <Text style={styles.sectionTitleDS}>Guide</Text>
                    <Text style={styles.instructionsDS}>{recipe.guide}</Text>

                </ScrollView>
            </View>
        </ImageBackground>
        </ThemeLayout>
    );
};



export default RecipeDetailScreen;
