// screens/CreateRecipeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRecipes } from '../contexts/RecipeContext';
import { useNavigation } from '@react-navigation/native';

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
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Recipe Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingredients"
                value={ingredients}
                onChangeText={setIngredients}
                multiline
            />
            <TextInput
                style={styles.input}
                placeholder="Guide"
                value={guide}
                onChangeText={setGuide}
                multiline
            />
            <Button title="Save Recipe" onPress={handleSaveRecipe} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default CreateRecipeScreen;
