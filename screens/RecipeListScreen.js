// screens/RecipeListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useRecipes } from '../contexts/RecipeContext';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/style';
import ThemeLayout from "../contexts/ThemeLayout";
import { globalStyles } from '../styles/GlobalStyles';
import { MainStyles } from '../styles/MainScreenStyles';
import { RecipeList } from '../styles/RecipeListStyles';
import { RecipeDetails } from '../styles/RecipeDetailStyles';

const RecipeListScreen = () => {
    const { recipes } = useRecipes();
    const navigation = useNavigation();

    const renderRecipe = ({ item }) => (
        <TouchableOpacity
            style={RecipeList.recipeContainer}
            onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
        >
            {item.photo && (
                <Image source={{ uri: item.photo }} style={RecipeDetails.recipeImageThumbnail} />
            )}
            <View style={RecipeDetails.recipeTextContainer}>
                <Text style={RecipeList.recipeListName}>{item.name}</Text>
                <Text style={RecipeDetails.recipeDate}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <ImageBackground
            style={globalStyles.background}
            resizeMode="cover"
        >
            <ThemeLayout>
                <View style={globalStyles.container}>
                    <View style={RecipeList.recipeContent}>
                        <View
                            style={[MainStyles.RecipeButton, { marginTop: 12 }]}
                        >
                            <Image
                                source={require('../images/logos/recipelist.png')}
                                style={MainStyles.recipeImage}
                            />
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={recipes}
                            renderItem={renderRecipe}
                            keyExtractor={(item, index) => index.toString()}
                            ListEmptyComponent={<Text style={styles.emptyText}>No recipes saved yet.</Text>}

                        />

                        <TouchableOpacity style={RecipeList.createButton} onPress={() => navigation.navigate('CreateRecipe')}>
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
