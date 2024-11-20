import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  container: {
    padding: 5,
    flex: 1,
  },

  //MAIN SCREEN
  logo: {
    width: 250,
    height: 250,
  },
  foodDrinkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 5,
    marginBottom: 20,
  },
  ofTheDayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    backgroundColor: '#ebf3ec3d',
    paddingVertical: 12,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  otdNavigation: {
    backgroundColor: '#386641',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    height: 225,
  },
  ofTheDayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#386641',
    padding: 5,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#f67b43'
  },
  otdRecipe: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  ofTheDayImage: {
    width: 182,
    height: 160,
    borderRadius: 12,
    marginBottom: 5,
    elevation: 3,
  },
 //Article section
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#386641',
    padding: 5,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#f67b43'
  },
  articleCarousel: {
    marginBottom: 20,
    borderWidth: 1,
  },
  articleContainer: {
    width: 200,
    marginRight: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  articleContent: {
    fontSize: 14,
    color: '#666',
  },

  //RECIPE LIST AND CREATE RECIPE
  bookContainer: {
    alignItems: 'center',
  },
  bookBackgroundContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  bookImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain', 
  },
  buttonOverlay: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    width: '100%', 
  },
  RecipeButton: {
    backgroundColor: '#6a994e4e',
    padding: 15,
    borderRadius: 60,
    width: '32%', 
    alignItems: 'center',
    marginBottom: 20,
  },
  recipeButtonText: {
    color: '#021e01',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  recipeImage: {
    height: 90,
    width: 90,
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

  //RECIPE SCREENS (DetailScreen)
  
  //innerContainerMealDS: {},

  scrollContentMealDS: {
    padding: 10,
  },
  imageDS: {
    height: 250,
    elevation: 2,
    borderRadius: 10,
  },
  titleDS: {
    borderBottomWidth: 2,
    borderColor: '#6A994E',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,

  },

  sectionTitleDS: {
    borderBottomWidth: 2,
    borderColor: '#6A994E',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
   margin: 15,
  },

  ingredientDS: {
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#ffc6ac',
    backgroundColor: '#ffc6ac20',
    fontSize: 16,
    lineHeight: 26,
    paddingVertical: 5,
    marginHorizontal: 20,

  },
  instructionsDS: {
    fontSize: 16,
    lineHeight: 30,
    marginHorizontal: 15,
    paddingVertical: 5,
    
  },

  //MEAL CATEGORY INFO
  foodDetCat: {
    marginHorizontal: 15,
  },

  foodDetCatTitle: {
    height: 50,
    alignContent: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center', 
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