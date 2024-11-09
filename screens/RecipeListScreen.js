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
                ListEmptyComponent={<Text>No recipes saved yet.</Text>}
            />
            <Button title="Create New Recipe" onPress={() => navigation.navigate('CreateRecipe')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    recipeContainer: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    recipeName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RecipeListScreen;
