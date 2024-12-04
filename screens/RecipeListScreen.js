import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/style';
import ThemeLayout from "../contexts/ThemeLayout";
import { globalStyles } from '../styles/GlobalStyles';
import { MainStyles } from '../styles/MainScreenStyles';
import { RecipeList } from '../styles/RecipeListStyles';
import { RecipeDetails } from '../styles/RecipeDetailStyles';
import { useRecipes } from '../contexts/RecipeContext';  // Import the context

const RecipeListScreen = () => {
    const { recipes, removeRecipe } = useRecipes();  // Access recipes and removeRecipe from context
    const navigation = useNavigation();

    // Define handleDelete to use removeRecipe from context
    const handleDelete = async (index) => {
        try {
            await removeRecipe(index);  // Remove recipe by index
        } catch (error) {
            console.error("Error deleting recipe:", error);
            alert("Failed to delete recipe.");
        }
    };

    // Render each recipe item
    const renderRecipe = ({ item, index }) => (
        <View style={RecipeList.recipeContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
                style={{ flex: 1 }}
            >
                {item.photo && (
                    <Image source={{ uri: item.photo }} style={RecipeDetails.recipeImageThumbnail} />
                )}
                <View style={RecipeDetails.recipeTextContainer}>
                    <Text style={RecipeList.recipeListName}>{item.name}</Text>
                    <Text style={RecipeDetails.recipeDate}>{item.date}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleDelete(index)}  // Call handleDelete when delete button is pressed
                style={RecipeList.deleteButton}
            >
                <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );

    return (
        <ImageBackground style={globalStyles.background} resizeMode="cover">
            <ThemeLayout>
                <View style={globalStyles.container}>
                    <View style={RecipeList.recipeContent}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={recipes}
                            renderItem={renderRecipe}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={recipes}  // Ensure FlatList updates on recipe changes
                            ListEmptyComponent={<Text style={styles.emptyText}>No recipes saved yet.</Text>}
                        />
                        <TouchableOpacity
                            style={RecipeList.createButton}
                            onPress={() => navigation.navigate('CreateRecipe')}
                        >
                            <Ionicons name="create" size={24} color="#386641" />
                            <Text style={RecipeList.buttonTextRL}>Create New Recipe</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ThemeLayout>
        </ImageBackground>
    );
};

export default RecipeListScreen;
