import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ingredient: {
    fontSize: 16,
    paddingLeft: 10,
  },
  instructions: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  containerMealDS: {
    flex: 1,
  },
  scrollContentMealDS: {
    flexGrow: 1,
    padding: 25,
  },
  innerContainerMealDS: {
    flex: 1,
  },
  imageMealDS: {
    width: '100%',
    height: 200,
    marginBottom: 16,
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
  containerMealScr: {
    flex: 1,
    padding: 16,
  },
  inputMealScr: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  itemMealScr: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  imageMealScr: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  titleMealScr: {
    fontSize: 18,
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
  emptyMessageDrinkScr: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
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