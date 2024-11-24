// screens/RecipeListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useRecipes } from '../contexts/RecipeContext';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/style';

const RecipeListScreen = () => {
    const { recipes } = useRecipes();
    const navigation = useNavigation();

    const renderRecipe = ({ item }) => (
        <TouchableOpacity
            style={styles.recipeContainer}
            onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
        >
            <Text style={styles.recipeListName}>{item.name}</Text>

            <Text style={styles.recipeDate}>{item.date}</Text>
        </TouchableOpacity>
    );
    

    return (
        <ImageBackground
            source={require('../images/winter.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.recipeContent}>
                    <View
                        style={[styles.RecipeButton, { marginTop: 12 }]}
                    >
                        <Image
                            source={require('../images/logos/recipelist.png')}
                            style={styles.recipeImage}
                        />
                    </View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recipes}
                        renderItem={renderRecipe}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={<Text style={styles.emptyText}>No recipes saved yet.</Text>}

                    />

                    <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('CreateRecipe')}>
                        <Ionicons name="create" size={24} color="#386641" />
                        <Text style={styles.buttonTextRL}>Create New Recipe</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default RecipeListScreen;
