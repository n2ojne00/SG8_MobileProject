import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 5,
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
  overlay: {
    backgroundColor: '#386641a5',
    width: '99%',
    borderRadius: 5,
  },

  categoryText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1,
    padding: 7,
    borderRadius: 5,
  },

  // SELECTED CATEGORY
  selectedCategory: {
    borderColor: '#f67b43', // Add border to indicate selection
    borderWidth: 3,
  },

  selectedCategoryText: {
    color: '#FFC6AC', // Color when selected
  },

  // FLATLIST
  foodList: {
    height: '60%',
  },

  categoryList: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    height: '14%',
  },

  //MEALS AND DRINKS
  mealSelect: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mealImage: {
    width: '99%',
    height: 170,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
    backgroundColor: '#386641', //386641a5
    width: '99%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  //MEAL RECIPE SCREEN (DetailScreen)
  
  //innerContainerMealDS: {},

  scrollContentMealDS: {
    padding: 10,
  },

  imageMealDS: {
    height: 250,
    elevation: 2,
  },
  titleMealDS: {
    borderBottomWidth: 2,
    borderColor: '#6A994E',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,

  },

  foodDetCat: {
    marginHorizontal: 15,
  },

  foodDetCatTitle: {
    height: 50,
    width: '25%',
    alignContent: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 8,
  },


  sectionTitleMealDS: {
    borderBottomWidth: 2,
    borderColor: '#6A994E',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
   margin: 15,
  },

  ingredientMealDS: {
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#ffc6ac',
    backgroundColor: '#ffc6ac20',
    fontSize: 16,
    lineHeight: 26,
    paddingVertical: 5,
    marginHorizontal: 20,

  },
  instructionsMealDS: {
    fontSize: 16,
    lineHeight: 30,
    marginHorizontal: 15,
    paddingVertical: 5,
    
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