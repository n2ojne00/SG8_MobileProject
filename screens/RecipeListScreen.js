// screens/RecipeListScreen.js
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRecipes } from '../contexts/RecipeContext';
import { useNavigation } from '@react-navigation/native';

const RecipeListScreen = () => {
    const { recipes } = useRecipes();
    const navigation = useNavigation();

    const renderRecipe = ({ item }) => (
        <TouchableOpacity style={styles.recipeContainer} onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
            <Text style={styles.recipeName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                renderItem={renderRecipe}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={<Text style={styles.emptyText}>No recipes saved yet.</Text>}
            />
            <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('CreateRecipe')}>
                <Text style={styles.buttonText}>Create New Recipe</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    recipeContainer: {
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 4,
    },
    recipeName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    emptyText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
    },
    createButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default RecipeListScreen;
