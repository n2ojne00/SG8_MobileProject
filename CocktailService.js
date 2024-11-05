// CocktailService.js
import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchCocktailByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return response.data.drinks;
  } catch (error) {
    console.error("Error fetching cocktail:", error);
    return null;
  }
};
export const fetchCocktailByCategory = async (category) => {
  try {
    // Map frontend categories to API categories
    const categoryMapping = {
      Shots: 'Shot',
      Beer: 'Beer',
      Punch: 'Punch / Party Drink',
      Hot: 'Hot Drink',
      Cold: 'Ordinary Drink',
    };

    const selectedCategory = categoryMapping[category];
    if (!selectedCategory) {
      console.error("Invalid category selected");
      return null;
    }

    const response = await axios.get(`${BASE_URL}/filter.php?c=${selectedCategory}`);
    return response.data.drinks;
  } catch (error) {
    console.error("Error fetching cocktail by category:", error);
    return null;
  }
};