import { StyleSheet } from 'react-native';

export const RecipeList = StyleSheet.create({
//YOUR RECIPES (RecipeListScreen)
recipeContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  recipeContainer: {
    justifyContent: 'center',
    height: 55,
    width: 330,
    borderBottomWidth: 3,
    borderTopWidth: 1,
    borderColor: '#386641',
    backgroundColor: '#fcf6eb',
    borderRadius: 5,
    marginVertical: 5,
    elevation: 2,

  },
  recipeListName: {
    justifyContent: 'center',
    color: '#386641',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '10%',
  },
  emptyText: {
    fontSize: 18,
    color: '#386641',
    textAlign: 'center',
    marginVertical: 20,
  },
  //Also in PrintListScreen.js
  createButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#dbfaEB',
    width: 200,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#386641',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonTextRL: {
    color: '#386641',
    fontSize: 16,
    fontWeight: '600',
  },


})