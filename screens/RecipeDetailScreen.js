import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
    const { recipe } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>{recipe.name}</Text>
                <Text style={styles.heading}>Ingredients</Text>
                <Text style={styles.content}>{recipe.ingredients}</Text>
                <Text style={styles.heading}>Guide</Text>
                <Text style={styles.content}>{recipe.guide}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
        marginBottom: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        color: '#555555',
        marginTop: 20,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#666666',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 20,
    },
});

export default RecipeDetailScreen;
