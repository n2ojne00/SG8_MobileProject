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


  recipeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '90%',
    alignSelf: 'center',
},
recipeDetailsContainer: {
    flexDirection: 'row',
    flex: 1,
},
recipeTextWrapper: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
},
recipeListName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
},
recipeDate: {
    fontSize: 12,
    color: '#888',
},
deleteButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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