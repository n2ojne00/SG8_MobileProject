import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },

  //SEARCH INPUT
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafff0f6',
    borderWidth: 3,
    borderColor: '#6A994E',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },

  
// CATEGORY
categoryButton: {
  backgroundColor: '#386641', 
  marginHorizontal: 5,
  borderRadius: 15,
  elevation: 10,
  borderWidth: 1,
  width: 140,
  overflow: 'hidden',
},

categoryContainer: {
  width: '100%',
  height: 130,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
},

categoryImage: {
  width: '100%',
  height: '100%',
  position: 'absolute',
  resizeMode: 'cover',
},

categoryText: {
  fontSize: 20,
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  zIndex: 1, 
  backgroundColor: '#386641a5', 
  padding: 5,
  borderRadius: 5,
},

// SELECTED CATEGORY
selectedCategory: {
  borderColor: 'orange', // Add border to indicate selection
  borderWidth: 2,
},

selectedCategoryText: {
  color: 'orange', // Color when selected
},

// FLATLIST
foodList: {
  paddingTop: 10,
  borderWidth: 2,
  height: '60%',
},

categoryList: {
  paddingBottom: 5,
  marginBottom: 10,
  borderBottomWidth: 2,
  height: '13%',
},


  //MEALS AND DRINKS
  mealSelect: {
    marginTop: 10,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#386641'
  },
  mealImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 10,
  },

  //MEAL RECIPE SCREEN (DetailScreen)

  scrollContentMealDS: {
    padding: 25,
  },

  imageMealDS: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  titleMealDS: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionTitleMealDS: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  ingredientMealDS: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 8,
  },
  instructionsMealDS: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },

  //DRINK RECIPE SCREEN (DetailScreen)
  titleDrinkDS: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  imageDrinkDS: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  drinkHLSection: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  drinkIngredient: {
    fontSize: 16,
    paddingLeft: 10,
  },
  drinkInstructions: {
    fontSize: 16,
    marginTop: 10,
  },
  


  

//OLD STYLES.. WORKING ON IT

  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

 

  containerDrinkScr: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  inputDrinkScr: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  pickerDrinkScr: {
    height: 50,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    borderRadius: 5,
  },
  itemDrinkScr: {
    fontSize: 18,
    padding: 10,
  },

  containerShop: {
    flex: 1,
    padding: 16,
  },
  inputShop: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  itemContainerShop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemShop: {
    fontSize: 16,
  },
  removeShop: {
    color: 'red',
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 25,
  },
  logoLogin: {
    width: 450,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    marginBottom: 24,
  },
  titleLogin: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  inputLogin: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  buttonLogin: {
    width: '50%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 5,
  },
  buttonTextLogin: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',  // Darker color for readability
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'sans-serif-light',  // Customize with any font loaded in your project
    letterSpacing: 0.5,
    lineHeight: 28,
  },
  titleMain: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainerMain: {
    marginTop: 20,
    width: '80%',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#4caf50',
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    borderRadius: 5,
  },




});