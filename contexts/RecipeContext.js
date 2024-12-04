import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const storedRecipes = await AsyncStorage.getItem('recipes');
                if (storedRecipes) {
                    setRecipes(JSON.parse(storedRecipes));
                }
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, []);
    

    useEffect(() => {
        const saveRecipes = async () => {
            await AsyncStorage.setItem('recipes', JSON.stringify(recipes));
        };
        saveRecipes();
    }, [recipes]);

    const addRecipe = (recipe) => {
        setRecipes((prevRecipes) => [...prevRecipes, recipe]);
    };

    const removeRecipe = async (index) => {
        const updatedRecipes = recipes.filter((_, i) => i !== index); // Filter out the selected recipe
        setRecipes(updatedRecipes); // Update state
        await AsyncStorage.setItem('recipes', JSON.stringify(updatedRecipes)); // Update storage
    };
    

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipes = () => useContext(RecipeContext);
