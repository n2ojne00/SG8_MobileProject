// screens/RecipeDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
    const { recipe } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{recipe.name}</Text>
            <Text style={styles.heading}>Ingredients</Text>
            <Text style={styles.content}>{recipe.ingredients}</Text>
            <Text style={styles.heading}>Guide</Text>
            <Text style={styles.content}>{recipe.guide}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
    },
    content: {
        fontSize: 16,
        marginTop: 8,
    },
});

export default RecipeDetailScreen;
