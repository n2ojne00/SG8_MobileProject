import { StyleSheet } from 'react-native';

export const RecipeDetails = StyleSheet.create({
     //OWN RECIPE DETAIL SCREEN (RecipeDetailScreen.js)
  scrollContentRecipeDS: {
    backgroundColor: '#fcf6eba1',
    marginVertical: 20,
  },
  recipeDate: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 12,
    color: '#386641',
  },
  dateRecipeDS: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    fontSize: 16,
    textAlign: 'center',

  },
  recipeImageThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  recipeTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  placeholderPhoto: {
    width: '100%',
    height: 200,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 16,
},
placeholderText: {
    color: '#021e01',
    fontSize: 16,
},


})