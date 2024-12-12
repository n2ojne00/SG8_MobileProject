import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ThemeLayout from "../contexts/ThemeLayout";
import { globalStyles } from '../styles/GlobalStyles';
import { RecipeList } from '../styles/RecipeListStyles';
import { useRecipes } from '../contexts/RecipeContext';
import { useTheme } from '../contexts/ThemeContext';

const RecipeListScreen = () => {
    const { recipes, removeRecipe } = useRecipes(); // Access recipes and removeRecipe from context
    const navigation = useNavigation();
    const { theme } = useTheme();
    const [isPressed, setIsPressed] = useState(false);


    const handleDelete = async (index) => {
        try {
            await removeRecipe(index); 
        } catch (error) {
            console.error("Error deleting recipe:", error);
            alert("Failed to delete recipe.");
        }
    };

    // Render each recipe item
    const renderRecipe = ({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}>
            <View style={[RecipeList.recipeContainer, { backgroundColor: theme.bgRecipeTextArea, borderColor: theme.borderDarkGreen },]}>

                <View style={RecipeList.recipeImageContainer}>
                    {item.photo ? (
                        <Image source={{ uri: item.photo }} style={RecipeList.recipeImageThumbnail} />
                    ) : (
                        <View style={RecipeList.recipeImageThumbnail}>
                            <Text>No Image</Text>
                        </View>
                    )}
                </View>

                <View style={RecipeList.recipeTextContainer}>
                    <Text style={[RecipeList.recipeListName, { color: theme.textDarkGreen }]}>{item.name}</Text>
                    <Text style={[RecipeList.recipeDate, { color: theme.textDarkGreen }]}>{item.date}</Text>
                </View>

                <View style={RecipeList.deleteButtonContainer}>
                    <TouchableOpacity onPress={() => handleDelete(index)} style={RecipeList.deleteButton}>
                        <Ionicons name="trash" size={24} color={theme.bookTintColor} />
                    </TouchableOpacity>

                </View>

            </View>
        </TouchableOpacity>
    );

    return (
        <ImageBackground style={globalStyles.background} resizeMode="cover">
            <ThemeLayout>
                <View style={[globalStyles.container, { backgroundColor: theme.bgContainer }]}>
                    <View style={RecipeList.recipeContent}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={recipes}
                            renderItem={renderRecipe}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={recipes} // Ensure FlatList updates on recipe changes
                            ListEmptyComponent={<Text style={RecipeList.emptyText}>No recipes saved yet.</Text>}
                        />
                        <TouchableOpacity
                            style={[RecipeList.createButton, { borderColor: theme.borderDarkGreen, backgroundColor: theme.bgSaveBtn }]}
                            onPress={() => navigation.navigate('CreateRecipe')}
                        >
                            <Ionicons name="create" size={24} color={theme.textDarkGreen} />
                            <Text style={[RecipeList.buttonTextRL, { color: theme.textDarkGreen }]}>Create New Recipe</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ThemeLayout>
        </ImageBackground>
    );
};

export default RecipeListScreen;
