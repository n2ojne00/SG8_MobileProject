import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchCocktailByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return response.data.drinks;
  } catch (error) {
    console.error("Error fetching cocktail by name:", error);
    return null;
  }
};

export const fetchCocktailByCategory = async (category) => {
  try {
    // Directly use the category provided by the Picker in CocktailScreen.js
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data.drinks;
  } catch (error) {
    console.error("Error fetching cocktail by category:", error);
    return null;
  }
};
