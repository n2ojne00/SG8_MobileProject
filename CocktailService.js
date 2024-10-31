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
