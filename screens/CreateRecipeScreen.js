// screens/CreateRecipeScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { useRecipes } from '../contexts/RecipeContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/style';


const CreateRecipeScreen = () => {
    const { addRecipe } = useRecipes();
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [guide, setGuide] = useState('');

    const handleSaveRecipe = () => {
        if (name && ingredients && guide) {
            addRecipe({ name, ingredients, guide });
            navigation.navigate('RecipeList');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <ImageBackground
            source={require('../images/winter.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.recipeContent}>
                        <View
                            style={[styles.RecipeButton, { marginTop: 12 }]}
                        >
                            <Image
                                source={require('../images/logos/createRecipe.png')}
                                style={styles.recipeImage}
                            />
                        </View>
                        <View style={styles.recipeName}>
                            <TextInput
                                style={styles.recipeInput}
                                placeholder="Recipe Name"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        <View style={styles.recipeTextAreas} >
                            <Text style={styles.recipeTitle}>INGREDIENTS</Text>
                            <TextInput
                                style={styles.ingredientsinput}
                                placeholder="Ingredients"
                                value={ingredients}
                                onChangeText={setIngredients}
                                multiline
                            />

                            <Text style={styles.recipeTitle}>GUIDE</Text>
                            <TextInput

                                style={styles.guideinput}
                                placeholder="Guide"
                                value={guide}
                                onChangeText={setGuide}
                                multiline
                            />

                            <TouchableOpacity onPress={handleSaveRecipe} style={styles.saveRecipeBtn} >
                                <Text style={{ fontWeight: 'bold' }}>SAVE</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>

            </View>
        </ImageBackground>
    );
};


export default CreateRecipeScreen;
